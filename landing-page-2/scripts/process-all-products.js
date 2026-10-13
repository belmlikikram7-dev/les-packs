const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const items = [
  {
    src: 'K-SECRET Cleansing Foam Pine Cica 1% + Probiotics.webp',
    dst: 'cleansing-foam.png',
  },
  {
    src: 'K-SECRET Cream Retinal Liposome 1% + Fermented Rice.webp',
    dst: 'cream-retinal.png',
  },
  {
    src: 'K-SECRET Cream Snail Mucin 93% + Rice.webp',
    dst: 'cream-snail.png',
  },
  {
    src: 'K-SECRET Eye Cream Retinal Liposome 4% + Fermented Bean.webp',
    dst: 'eye-cream.png',
  },
  {
    src: 'K-SECRET Serum Retinal Liposome 2% + Black Ginseng.webp',
    dst: 'serum-retinal.png',
  },
  {
    src: 'K-SECRET Seoul 1988 Sun Pine Tree + Ceramide.webp',
    dst: 'sun-pine.png',
  },
];

async function processImage(item) {
  const srcPath = path.join('public/images', item.src);
  if (!fs.existsSync(srcPath)) {
    console.log(`Skipping ${item.src} - not found`);
    return;
  }

  const img = sharp(srcPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const channels = info.channels;

  // Function to check if a pixel is background (near pure white >= 244)
  function isBg(x, y) {
    const idx = (y * w + x) * channels;
    return data[idx] >= 244 && data[idx+1] >= 244 && data[idx+2] >= 244;
  }

  const visited = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let head = 0, tail = 0;

  // Seed borders
  for (let x = 0; x < w; x++) {
    if (isBg(x, 0)) { visited[0 * w + x] = 1; queue[tail++] = 0 * w + x; }
    if (isBg(x, h - 1)) { visited[(h - 1) * w + x] = 1; queue[tail++] = (h - 1) * w + x; }
  }
  for (let y = 0; y < h; y++) {
    if (!visited[y * w + 0] && isBg(0, y)) { visited[y * w + 0] = 1; queue[tail++] = y * w + 0; }
    if (!visited[y * w + (w - 1)] && isBg(w - 1, y)) { visited[y * w + (w - 1)] = 1; queue[tail++] = y * w + (w - 1); }
  }

  // BFS
  while (head < tail) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    const neighbors = [
      [cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]
    ];

    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!visited[nidx] && isBg(nx, ny)) {
          visited[nidx] = 1;
          queue[tail++] = nidx;
        }
      }
    }
  }

  // Build RGBA output
  const outData = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * channels;
      const dstIdx = (y * w + x) * 4;
      outData[dstIdx] = data[srcIdx];
      outData[dstIdx + 1] = data[srcIdx + 1];
      outData[dstIdx + 2] = data[srcIdx + 2];
      outData[dstIdx + 3] = visited[y * w + x] ? 0 : 255;
    }
  }

  const dstPath = path.join('public/products', item.dst);
  // Using trim to remove all empty transparent padding so image tightly fits bounding box
  await sharp(outData, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 10 })
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(dstPath);

  console.log(`Processed ${item.dst} (Bg pixels removed: ${tail})`);
}

async function run() {
  for (const item of items) {
    await processImage(item);
  }
}

run().catch(console.error);
