const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  const input = path.join(__dirname, 'logo.jpg');
  
  // Recorte centrado del círculo del logo (672x672 con pequeño margen de 14px)
  const left = 22;
  const top = 162;
  const size = 700;

  // 1. Guardar logo recortado en alta calidad PNG (700x700)
  await sharp(input)
    .extract({ left, top, width: size, height: size })
    .png({ quality: 100 })
    .toFile(path.join(__dirname, 'logo.png'));
  console.log('✓ logo.png generado (700x700)');

  // 2. Guardar favicon.png en 192x192 (estándar para navegadores y móviles)
  await sharp(input)
    .extract({ left, top, width: size, height: size })
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, 'favicon.png'));
  console.log('✓ favicon.png generado (192x192)');

  // 3. Guardar favicon-32.png para pestañas de navegador
  await sharp(input)
    .extract({ left, top, width: size, height: size })
    .resize(64, 64)
    .png()
    .toFile(path.join(__dirname, 'favicon-64.png'));
  console.log('✓ favicon-64.png generado (64x64)');
}

processLogo().catch(console.error);
