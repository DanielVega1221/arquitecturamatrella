const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const BACKUP_DIR = path.join(__dirname, 'src', 'assets', 'original');

// Configuración de optimización
const OPTIMIZATION_CONFIG = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    compressionLevel: 8,
    progressive: true,
    palette: true
  },
  webp: {
    quality: 90,
    effort: 6
  }
};

async function getFileSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processDirectory(dir, baseDir = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name !== 'original') {
        await processDirectory(fullPath, baseDir);
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(fullPath, baseDir);
      }
    }
  }
}

async function optimizeImage(filePath, baseDir) {
  try {
    const originalSize = await getFileSize(filePath);
    const format = path.extname(filePath).toLowerCase().substring(1);
    
    // Crear backup
    const relativePath = path.relative(baseDir, filePath);
    const backupPath = path.join(BACKUP_DIR, relativePath);
    await fs.mkdir(path.dirname(backupPath), { recursive: true });
    await fs.copyFile(filePath, backupPath);
    
    console.log(`⚡ Procesando: ${relativePath}...`);
    
    let sharpInstance = sharp(filePath);
    const metadata = await sharpInstance.metadata();
    
    // Redimensionar si es muy grande
    if (metadata.width > 1920) {
      sharpInstance = sharpInstance.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Crear archivo temporal
    const tempPath = filePath + '.tmp';
    
    // Optimizar según formato
    switch (format) {
      case 'jpeg':
      case 'jpg':
        await sharpInstance.jpeg(OPTIMIZATION_CONFIG.jpeg).toFile(tempPath);
        break;
      case 'png':
        await sharpInstance.png(OPTIMIZATION_CONFIG.png).toFile(tempPath);
        break;
      case 'webp':
        await sharpInstance.webp(OPTIMIZATION_CONFIG.webp).toFile(tempPath);
        break;
    }
    
    // Reemplazar original con optimizada
    await fs.unlink(filePath);
    await fs.rename(tempPath, filePath);
    
    const optimizedSize = await getFileSize(filePath);
    const saved = originalSize - optimizedSize;
    const savingPercentage = ((saved / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ Original: ${formatFileSize(originalSize)}`);
    console.log(`   📦 Optimizada: ${formatFileSize(optimizedSize)}`);
    console.log(`   💾 Ahorrado: ${formatFileSize(saved)} (${savingPercentage}%)`);
    console.log(`   🔄 Backup guardado en: ${backupPath}\n`);
    
    return { originalSize, optimizedSize, saved };
    
  } catch (error) {
    console.error(`❌ Error optimizando ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Optimización de imágenes (REEMPLAZA ORIGINALES)\n');
  console.log('⚠️  ADVERTENCIA: Este script reemplazará tus imágenes originales.');
  console.log('📁 Los originales se guardarán en src/assets/original/\n');
  
  try {
    // Verificar que existe el directorio de assets
    await fs.access(ASSETS_DIR);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let processedCount = 0;
    
    await processDirectory(ASSETS_DIR);
    
    console.log('🎉 ¡Optimización completada!\n');
    console.log('💡 Si algo salió mal, los originales están en src/assets/original/');
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('❌ No se encontró el directorio src/assets/');
      console.log('💡 Crea la carpeta y agrega tus imágenes primero.');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
