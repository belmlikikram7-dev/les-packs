const sharp = require('sharp');

async function inspectBottom() {
  const img = sharp('public/images/K-SECRET Cream Retinal Liposome 1% + Fermented Rice.webp');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  for (let y = 1700; y < h; y += 40) {
    let countNonWhite = 0;
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 3;
      if (data[idx] < 248 || data[idx+1] < 248 || data[idx+2] < 248) {
        countNonWhite++;
      }
    }
    console.log(`y=${y}: countNonWhite=${countNonWhite}`);
  }
}

inspectBottom();
