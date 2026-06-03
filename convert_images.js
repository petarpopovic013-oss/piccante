const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Helper to recursively get all files in a directory matching extensions
function getFilesRecursively(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Format bytes to human readable string
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function run() {
  const args = process.argv.slice(2);
  
  // Parse arguments and flags
  const flags = args.filter(arg => arg.startsWith('--'));
  const dirs = args.filter(arg => !arg.startsWith('--'));
  
  const shouldDeleteOriginal = flags.includes('--delete-original') || flags.includes('--remove-original');
  const qualityFlag = flags.find(arg => arg.startsWith('--quality='));
  const quality = qualityFlag ? parseInt(qualityFlag.split('=')[1], 10) : 80;

  if (dirs.length === 0 && (flags.includes('--help') || flags.includes('-h'))) {
    console.log(`
Usage:
  node convert_images.js <input-dir> [output-dir] [options]

Options:
  --delete-original    Delete the original image files after successful conversion.
  --quality=N          Set WebP output quality (default is 80).
  --help, -h           Show this help message.

Examples:
  node convert_images.js ./Blog/Slike\\ za\\ blog ./public/images/blog
  node convert_images.js ./public/images --delete-original
    `);
    process.exit(0);
  }

  // Sensible defaults if no directories specified (maintains compatibility with previous blog script run)
  let inputDir = dirs[0] ? path.resolve(dirs[0]) : path.join(__dirname, 'Blog', 'Slike za blog');
  let outputDir = dirs[1] ? path.resolve(dirs[1]) : null;

  if (!fs.existsSync(inputDir)) {
    console.error(`Error: Input directory does not exist: ${inputDir}`);
    console.log('Use --help to see usage guidelines.');
    process.exit(1);
  }

  const extensions = ['.jpg', '.jpeg', '.png'];
  console.log(`Scanning for images (${extensions.join(', ')}) in: ${inputDir}`);
  
  let files;
  try {
    files = getFilesRecursively(inputDir, extensions);
  } catch (err) {
    console.error(`Error scanning directory:`, err.message);
    process.exit(1);
  }

  if (files.length === 0) {
    console.log('No matching images found.');
    process.exit(0);
  }

  console.log(`Found ${files.length} images. Starting conversion to WebP (Quality: ${quality})...\n`);

  let successCount = 0;
  let errorCount = 0;
  let totalInputSize = 0;
  let totalOutputSize = 0;

  for (const file of files) {
    const relativePath = path.relative(inputDir, file);
    
    // Determine output path
    let destPath;
    if (outputDir) {
      destPath = path.join(outputDir, relativePath);
    } else {
      destPath = file; // Same folder if no outputDir specified
    }

    // Change extension to .webp
    const ext = path.extname(destPath);
    destPath = destPath.substring(0, destPath.length - ext.length) + '.webp';

    // Ensure output sub-directory exists
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    try {
      const inputStats = fs.statSync(file);
      totalInputSize += inputStats.size;

      // Convert
      await sharp(file)
        .webp({ quality })
        .toFile(destPath);

      const outputStats = fs.statSync(destPath);
      totalOutputSize += outputStats.size;

      const savings = inputStats.size - outputStats.size;
      const savingsPct = ((savings / inputStats.size) * 100).toFixed(1);

      console.log(`✓ Converted: ${relativePath} -> ${path.basename(destPath)} (${formatBytes(outputStats.size)}, saved ${savingsPct}%)`);
      successCount++;

      // Optionally delete original
      if (shouldDeleteOriginal && file !== destPath) {
        fs.unlinkSync(file);
      }
    } catch (err) {
      console.error(`✗ Failed to convert ${relativePath}:`, err.message);
      errorCount++;
    }
  }

  // Summary
  console.log('\n========================================');
  console.log('Conversion Complete!');
  console.log(`Successfully converted: ${successCount} files`);
  if (errorCount > 0) {
    console.log(`Failed conversions: ${errorCount} files`);
  }
  console.log(`Total original size: ${formatBytes(totalInputSize)}`);
  console.log(`Total WebP size: ${formatBytes(totalOutputSize)}`);
  
  const totalSavings = totalInputSize - totalOutputSize;
  if (totalSavings > 0) {
    const totalSavingsPct = ((totalSavings / totalInputSize) * 100).toFixed(1);
    console.log(`Total space saved: ${formatBytes(totalSavings)} (${totalSavingsPct}% reduction)`);
  } else if (totalSavings < 0) {
    console.log(`WebP files are larger by: ${formatBytes(Math.abs(totalSavings))}`);
  }
  console.log('========================================');
}

run();
