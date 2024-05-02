import { cropImg } from '../../dist/index.js';
const img = new Image();
img.src = './npm.png';
document.body.append(img);
document.body.append(document.createElement('div'));
cropImg('./npm.png', 25, 0, 25, 22).then((base64) => {
  const img = new Image();
  img.src = base64;
  document.body.append(img);
});
