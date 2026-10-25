const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// URL por defecto (puede ser el link final donde alojen la página web o un enlace corto de Bitly/Dub.co)
// Por ejemplo: 'https://albapastas.vercel.app' o 'https://tusorrentinos.com'
const targetUrl = process.argv[2] || 'https://alba-pastas.vercel.app';

console.log(`Generando códigos QR para URL: ${targetUrl}...`);

async function generate() {
  try {
    // 1. Generar SVG vectorial de alta calidad (ideal para imprenta profesional)
    const svgString = await QRCode.toString(targetUrl, {
      type: 'svg',
      margin: 2,
      color: {
        dark: '#1D1D1B',  // Color oscuro elegante
        light: '#FFFFFF'  // Fondo blanco puro para máxima legibilidad de escaneo
      },
      errorCorrectionLevel: 'M' // Buen equilibrio de tolerancia a errores y tamaño de puntos
    });
    fs.writeFileSync(path.join(__dirname, 'qr-alba.svg'), svgString);
    console.log('✓ Archivo vectorial generado: qr-alba.svg');

    // 2. Generar PNG de ultra alta resolución (1200x1200 px - 300+ DPI para imprenta)
    await QRCode.toFile(path.join(__dirname, 'qr-alba.png'), targetUrl, {
      width: 1200,
      margin: 2,
      color: {
        dark: '#1D1D1B',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });
    console.log('✓ Archivo de alta resolución generado: qr-alba.png (1200x1200px)');

  } catch (err) {
    console.error('Error generando QR:', err);
  }
}

generate();
