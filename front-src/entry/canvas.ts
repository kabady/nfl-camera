let qrImage = document.createElement('img');
qrImage.src = require('../_asset/qr.jpg');
export function page4LastImage(imgSrc: Array<string>, handle: (base64) => void) {
  let canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 1050;
  let ctx = canvas.getContext("2d");

  let imageList = [], imgSrcArr = [].concat(imgSrc);
  imgSrc.forEach(imgbasesrc => {
    let a = document.createElement('img');
    a.src = imgbasesrc;
    imageList.push(a);
    a.onload = function () {
      imgSrcArr.pop();
      if(imgSrcArr.length == 0){
        imageList.forEach( image => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        })
        ctx.drawImage(qrImage, 500, 720, 112, 112);
        handle(canvas.toDataURL('image/jpeg'));
      }
    }
  })
}
