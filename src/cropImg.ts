/**
 * 裁剪图片
 * @param src 原始图片url
 * @param x 结果图片左上角x
 * @param y 结果图片左上角y
 * @param w 结果图片宽度
 * @param h 结果图片高度
 * @returns 结果图片base64的Promie
 */
export default function cropImg(
  src: string,
  x: number,
  y: number,
  w: number,
  h: number,
): Promise<string> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = w;
  canvas.height = h;
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = src;
  const p: Promise<string> = new Promise((resolve) => {
    img.addEventListener('load', () => {
      ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
      const base64 = canvas.toDataURL('image/png');
      resolve(base64);
    });
    img.src = src;
  });
  return p;
}
