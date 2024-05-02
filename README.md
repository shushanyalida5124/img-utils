# img-utils

一些处理图片的实用方法

## mergeImgs

合并图片

```js
import { mergeImgs } from 'img-utils-browser';
mergeImgs(
  [
    { url: 'url1', x: 0, y: 8, w: 10, h: 10 },
    { url: 'url2', x: 8, y: 0, w: 20, h: 20 },
  ],
  40,
  20,
).then((imgStr) => {
  const img = new Image();
  img.setAttribute('style', 'border: 1px solid red; margin: 5px;');
  img.src = imgStr;
  document.body.append(img);
});
```

## 裁剪图片

```js
import { cropImg } from 'img-utils-browser';
cropImg('url', 25, 0, 25, 22).then((base64) => {
  const img = new Image();
  img.src = base64;
  document.body.append(img);
});
```
