export enum assetMap {
  pagebgCommon = require('../_asset/page-bg-common.jpg'),
  page1bg = require('../_asset/page-bg01.jpg'),
  page2bg = require('../_asset/page-bg02.png'),
}
export let DataTeamLeft = [];
export let DataTeamRight = [];
try {
  let _window: any = window;
  _window.data.forEach(element => {
    element.template = element.frame_link;
    element.logo = element.logo_link;
  });
  DataTeamLeft = _window.data.slice(0, _window.data.length / 2);
  DataTeamRight = _window.data.slice(_window.data.length / 2, _window.data.length);
} catch (e) {
  console.error('window.data error, maybe data is not an array');
}
// console.log(DataTeamLeft)
// console.log(DataTeamRight)

// export let DataTeamLeft = [{
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l0',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l1',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l2',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l3',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l4',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰l5',
//   template: require('../_asset/team-template-1.png')
// }]
// export let DataTeamRight = [{
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r0',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r1',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r2',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r3',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r4',
//   template: require('../_asset/team-template-1.png')
// }, {
//   logo: require('../_asset/team-logo-1.png'),
//   name: '亚特兰大<br>猎鹰r5',
//   template: require('../_asset/team-template-1.png')
// }]