const sharp = require('sharp');

async function testFloodFill() {
  const img = sharp('public/images/K-SECRET Cream Retinal Liposome 1% + Fermented Rice.webp');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Background threshold: white is >= 246
  function isBg(x, y) {
    const idx = (y * w + x) * 3;
    return data[idx] >= 246 && data[idx+1] >= 246 && data[idx+2] >= 246;
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

  console.log(`Total pixels: ${w * h}, Background visited: ${tail}`);

  // Check if center of bottle at y=600, cx=w/2 was visited!
  const cx = Math.floor(w / 2);
  console.log(`Cap center (cx=${cx}, y=600) visited?`, visited[600 * w + cx] === 1);
  console.log(`Cap center (cx=${cx}, y=700) visited?`, visited[700 * w + cx] === 1);
  console.log(`Body center (cx=${cx}, y=1200) visited?`, visited[1200 * w + cx] === 1);

  // Let's create RGBA output
  const outData = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 3;
      const dstIdx = (y * w + x) * 4;
      outData[dstIdx] = data[srcIdx];
      outData[dstIdx + 1] = data[srcIdx + 1];
      outData[dstIdx + 2] = data[srcIdx + 2];
      // If visited by flood fill, alpha is 0, else 255
      outData[dstIdx + 3] = visited[y * w + x] ? 0 : 255;
    }
  }

  // Also trim excess transparent borders with sharp trim
  await sharp(outData, { raw: { width: w, height: h, channels: 4 } })
    .trim()
    .png()
    .toFile('public/products/cream-retinal.png');

  console.log('Saved public/products/cream-retinal.png successfully!');
}

testFloodFill();
