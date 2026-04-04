import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimize() {
  const dir = './src/assets/images';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, path.parse(file).name + '.webp');
      
      console.log(`Processing: ${file}`);
      try {
        await sharp(inputPath)
          .rotate() // Wymuszenie czytania metadanych EXIF o orientacji pion/poziom przed zoptymalizowaniem rozmiaru
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Saved: ${outputPath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log('All images optimized!');
}

optimize();
