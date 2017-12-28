import { AjaxPost } from '../js-lib/build/AjaxPost-0.0.1.js'
import { DomAPI } from '../lib/DomAPI-0.0.4';


export function ajaxSend(base64, handle: () => void) {
  
  // new DomAPI('body').append(DomAPI.CreateByHtmlString(`<img src="${base64}">`).getElemList())
  
  return handle();

  // let form = document.createElement('form');
  // form.enctype = 'multipart/form-data';
  // let data = new FormData(form);
  
  // AjaxPost({
  //   url: '//mns.hupu.com/ELClasico/ajax',
  //   type: 'post',
  //   data: data,
  //   dataType: 'json',
  //   success: function (jsondata) {
  //     if(jsondata.code == 0){
  //       handle();
  //       try{
  //         let _window: any = window;
  //         _window.ajax_callback = _window.ajax_callback || {};
          
  //       }catch(e){
  //         console.log('send_complete_ok error run')
  //       }
  //     }
  //   },
  //   error: function () {

  //   },
  //   complete: function () {

  //   }
  // })
}
