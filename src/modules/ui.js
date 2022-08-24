
import Sidebar from './sidebar'
import Content from './content';

export default class UI{
  static init(){
    Sidebar.init();
    Content.init();
    this.render();
  }
  static render(){
    Sidebar.render();
    Content.render();
  }
  
  static indexByElem(e){
    return e.parentElement.dataset.index;
  }
  
}