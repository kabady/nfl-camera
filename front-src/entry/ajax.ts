import { AjaxPost } from '../js-lib/build/AjaxPost-0.0.1.js'
import { DomAPI } from '../lib/DomAPI-0.0.4';
import { routes } from './router';
import { TeamInfo } from './page-2/page-2';
import { loading } from './loading/loading';


export function ajaxSend(base64, handle: () => void) {
  
  let form = document.createElement('form');
  form.enctype = 'multipart/form-data';
  let data = new FormData(form);
  data.append('pic', base64);
  
  try{
    let p: any = routes.get('page2');
    let teamSelect: TeamInfo = p.getTeamSelect();

    data.append('team_id', teamSelect.id);
  }catch(e){
    console.error('从page2中获取selectTeamInfo失败')
  }
  loading.show();
  AjaxPost({
    url: '//mns.hupu.com/nfl2018/ajax',
    type: 'post',
    data: data,
    dataType: 'json',
    success: function (jsondata) {
      console.log(jsondata)
      if(jsondata.code == 0){
        handle();
        try{
          let _window: any = window;
          _window.ajax_callback.send_complete_ok(jsondata.share_title, jsondata.share_desc);
        }catch(e){
          console.error('send_complete_ok error run')
        }
      }
    },
    error: function () {

    },
    complete: function () {
      loading.hide();
    }
  })
}
