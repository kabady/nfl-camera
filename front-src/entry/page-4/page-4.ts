import './page-4.scss'

import { DomAPI } from "../../lib/DomAPI-0.0.4";
import { assetMap } from "../assetUtil";
import { routes } from '../router';
import { Page } from '../../lib/Page-0.1.1';

let HTML: string = require('./page-4.html');

export class Page4 extends Page {
  float: DomAPI;
  constructor() {
    super();
  }
  initPageElem(): void {
    this.DOMAPI = DomAPI.CreateByHtmlString(HTML);
    this.pDOMAPI.append(this.DOMAPI.getElemList());

    this.float = this.DOMAPI.find('.share-float');
  }
  initPageEvent(): void {
    this.DOMAPI.find('.action-share').on('click', () => {
      this.float.show();
    })
    this.DOMAPI.find('.action-again').on('click', () => {
      routes.go('page2');
    })
    this.float.on('click', () => {
      this.float.hide();
    })
  }
  setBackground(): void {
    let background = DomAPI.CreateByHtmlString(`<img class="bg" src="${assetMap.pagebgCommon}" '>`);
    this.DOMAPI.appendBefore(background.getElemList());
  }
  showbefore(): void{
    this.float.hide();
    try{
      let page3: any = routes.get('page3')
      this.DOMAPI.find('.user-image').setAttr('src', page3.resultBase64);
    }catch(e){
      
    }
  }
}