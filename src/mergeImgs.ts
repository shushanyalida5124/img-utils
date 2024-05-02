type ImgList = {
  url: string;
  /** 图片左上x坐标 */
  x: number;
  /** 图片左上y坐标 */
  y: number;
  /** 图片宽度 */
  w: number;
  /** 图片高度 */
  h: number;
}[];

/**
 * 合并图片，将list中的图片合并为一张
 * @param list 图片url及左上角位置及宽高
 * @param width 结果宽度
 * @param height 结果宽度
 * @returns base64字符串的Promise
 */
export default function mergeImgs(
  list: ImgList,
  width: number,
  height: number,
): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const pList = [];
  list.forEach((item) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = item.url;
    const p: Promise<void> = new Promise((resolve) => {
      img.addEventListener('load', () => {
        if (item.w && item.h) {
          ctx.drawImage(img, item.x, item.y, item.w, item.h);
        } else {
          ctx.drawImage(img, item.x, item.y);
        }
        resolve();
      });
      img.src = item.url;
    });
    pList.push(p);
  });
  return new Promise((resolve) => {
    Promise.all(pList).then(() => {
      const base64 = canvas.toDataURL('image/png');
      resolve(base64);
    });
  });
}
