import './loading.scss';
let HTML = `
<div class="loading-container">
  <div class="loader-inner line-spin-fade-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
`
class Loading {
  elem: HTMLDivElement;
  constructor() {
    let div = document.createElement('div');
    div.innerHTML = HTML;
    div.className = 'loading-float';
    document.body.appendChild(div);
    this.elem = div;

    this.hide();
  }
  show(){
    this.elem.style.display = 'block';
  }
  hide(){
    this.elem.style.display = 'none';
  }
}

export let loading = new Loading();