import './page-2.scss';
import { Page } from '../../lib/Page-0.1.1';
import { DomAPI } from '../../lib/DomAPI-0.0.4';
import { routes } from '../router';
import { assetMap } from '../assetUtil';
let HTML: string = require('./page-2.html');

export class TeamInfo {
  logo: string;
  name: string;
  template: string;
}
let teamleft: Array<TeamInfo> = [{
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l0',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l1',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l2',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l3',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l4',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰l5',
  template: require('../../_asset/team-template-1.png')
}]
let teamright: Array<TeamInfo> = [{
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r0',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r1',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r2',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r3',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r4',
  template: require('../../_asset/team-template-1.png')
}, {
  logo: require('../../_asset/team-logo-1.png'),
  name: '亚特兰大<br>猎鹰r5',
  template: require('../../_asset/team-template-1.png')
}]

export class Page2 extends Page {
  constructor() {
    super();
  }
  initPageElem(): void {
    this.DOMAPI = DomAPI.CreateByHtmlString(HTML);
    this.initTeamLogo();
    this.pDOMAPI.append(this.DOMAPI.getElemList());
  }
  initTeamLogo(){
    let teamleftContainer = this.DOMAPI.find('.team-select .left');
    teamleftContainer.empty();
    let HTML = '';
    teamleft.forEach( (obj, index) => {
      HTML += `
        <div class="team-item" data-index="${index}">
          <div class="pic">
            <img src="${obj.logo}" alt="">
          </div>
          <span>${obj.name}</span>
        </div>
      `;
    });
    teamleftContainer.append(DomAPI.CreateByHtmlString(HTML).getElemList());

    let teamrightContainer = this.DOMAPI.find('.team-select .right');
    teamrightContainer.empty();
    HTML = '';
    teamleft.forEach( (obj, index) => {
      HTML += `
        <div class="team-item" data-index="${index}">
        <div class="pic">
          <img src="${obj.logo}" alt="">
        </div>
        <span>${obj.name}</span>
        </div>
      `;
    });
    teamrightContainer.append(DomAPI.CreateByHtmlString(HTML).getElemList());
  }
  getTeamSelect(): TeamInfo{
    let seletcTeamDomAPI = this.DOMAPI.find('.team-select .left .team-item.selected');
    let selectTeamObj;
    if(seletcTeamDomAPI.size() === 1){
      selectTeamObj = teamleft[seletcTeamDomAPI.getAttr('data-index')];
    }else if(seletcTeamDomAPI.size() === 0){
      seletcTeamDomAPI = this.DOMAPI.find('.team-select .right .team-item.selected');
      selectTeamObj = teamright[seletcTeamDomAPI.getAttr('data-index')];
    }
    return selectTeamObj;
  }
  initPageEvent(): void {
    this.DOMAPI.find('.team-select .team-item .pic').on('click', ev => {
      try{
        this.DOMAPI.find('.team-select .team-item.selected').removeClass('selected');
        let target: any = ev.currentTarget;
        let theTartget = DomAPI.CreateByElem(target).parent();
        theTartget.addClass('selected');
      }catch(e){
        console.error('team select error')
      }
    })
    this.DOMAPI.find('.action-enter-next').on('click', () => {
      if(this.DOMAPI.find('.team-select .team-item.selected').size() == 1){
        routes.go('page3');
      }else{
        alert('请选择一个你喜欢的球队');
      }
    })
    this.DOMAPI.find('.action-back').on('click', () => {
      routes.go('page1');
    })
  }
  setBackground(): void {
    let background = DomAPI.CreateByHtmlString(`
      <img class="bg" src="${assetMap.pagebgCommon}" '>
      <img class="bg mask" src="${assetMap.page2bg}" '>
    `);
    this.DOMAPI.appendBefore(background.getElemList());
  }
}