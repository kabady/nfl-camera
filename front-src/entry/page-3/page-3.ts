import './page-3.scss'
import { DomAPI } from "../../lib/DomAPI-0.0.4";
import { assetMap } from "../assetUtil";
import { routes } from '../router';
import { Page } from '../../lib/Page-0.1.1';
import { TeamInfo } from '../page-2/page-2';
let HTML: string = require('./page-3.html');

import { ImageRotateFilter } from '../../js-lib/build/ImgKind.js';
import ImgMove from '../../js-lib/build/ImgMove-0.0.1.js';
import CanvasImg from '../../js-lib/build/CanvasImg.js';
import { ajaxSend } from '../ajax';
import { page4LastImage } from '../canvas';

export class Page3 extends Page {
  teamSelect: TeamInfo;
  selectContainerElem: DomAPI;
  userImageContainerElem: DomAPI;
  userEventContainer: DomAPI;
  userImageSave: DomAPI;
  userImgMove: any;
  resultBase64: any;
  constructor() {
    super();
  }
  initPageElem(): void {
    this.DOMAPI = DomAPI.CreateByHtmlString(HTML);
    this.pDOMAPI.append(this.DOMAPI.getElemList());

    this.selectContainerElem = this.DOMAPI.find('.input-select-container');
    this.userImageContainerElem = this.DOMAPI.find('.user-img');
    this.userEventContainer = this.DOMAPI.find('.user-event');

    this.userImageSave = this.DOMAPI.find('.user-event .image-save');
  }
  initPageEvent(): void {
    this.DOMAPI.find('.action-enter-next').on('click', () => {
      routes.go('page2');
    })
    this.DOMAPI.find('.user-file-select .file-input').on('change', ev => {
      this.imgSelected(ev.target || ev.srcElement)
    })
    this.DOMAPI.find('.user-event .image-save').on('click', ev => {
      this.userImageSave.addClass('pointer-events-none');
      try{
        let canvasImgRender = new CanvasImg();
        canvasImgRender.setConatinerClip(this.userImgMove.getConatinerClip());
        canvasImgRender.pushImgMove(this.userImgMove);
        page4LastImage([canvasImgRender.render(), this.teamSelect.template], base64 => {
          ajaxSend(base64, () => {
            this.resultBase64 = base64;
            routes.go('page4')
          });
        });
      }catch(e){
        this.userImageSave.removeClass('pointer-events-none');
      }
    });
    this.DOMAPI.find('.user-event .image-clear').on('click', ev => {
      this.initPage();
    })
  }
  getFileImg(target, hande: (img) => void) {
    if (target && target.files && target.files[0]) {
      ImageRotateFilter(target.files[0], (img) => {
        hande(img);
      });
    }
  }
  imgSelected(target){
    this.getFileImg(target, (image) => {
      this.selectContainerElem.hide();
      this.userEventContainer.show();
      this.DOMAPI.find('.user-touch').replace(DomAPI.CreateByHtmlString('<div class="user-touch"></div>').getEl(0))
      this.userImageContainerElem.empty();
      this.userImageContainerElem.append([image])
      this.userImgMove = new ImgMove(image, null, this.DOMAPI.find('.user-touch').getEl(0) );

      let containerWidth = this.userImageContainerElem.getEl(0).clientWidth;
      let containerHeight = this.userImageContainerElem.getEl(0).clientHeight;
      this.userImgMove.setConatinerClip({
        width: containerWidth,
        height: containerHeight
      });

      let clip;
      if (image.naturalHeight / image.naturalWidth < containerHeight / containerWidth) {
        clip = {
          width: image.clientHeight / image.naturalHeight * image.naturalWidth,
          height: containerHeight,
          clientX: 0,
          clientY: 0
        }
        // img.style.cssText = 'height: 100%;width: auto;'
      } else {
        // img.style.cssText = 'width: 100%;height: auto;'
        clip = {
          width: containerWidth,
          height: image.clientWidth / image.naturalWidth * image.naturalHeight,
          clientX: 0,
          clientY: 0
        }
      }
      this.userImgMove.setClip(clip);
    })
  }
  setBackground(): void {}
  setTeamInfo(){
    this.DOMAPI.find('.mask-img img').setAttr('src', this.teamSelect.template);
  }
  initPage(){
    this.userEventContainer.hide();
    this.selectContainerElem.show();
    this.userImageSave.removeClass('pointer-events-none');
    this.userImageContainerElem.empty();
    try{
      let fileInput: any = this.DOMAPI.find('.user-file-select .file-input').getEl(0);
      fileInput.value = 0;
    }catch(e){}
  }
  showbefore(): void{
    try{
      let p: any = routes.get('page2');
      this.teamSelect = p.getTeamSelect();
      this.setTeamInfo();
    }catch(e){
      console.error('从page2中获取selectTeamInfo失败')
    }

    this.initPage();
  }
}