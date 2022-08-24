import Projects from './project';
import TrashIcon from '../img/trash.png';
import UI from './ui'

export default class{

  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.projectRender();
    this.domCache();
    this.bindEventReload();
  }
  static projectRender(){
    this.projectList.innerHTML = '';
    for(let i=0; i<Projects.projectList.length; i++){
      const trashIcon = document.createElement('img');
      trashIcon.classList.add('trashIcon')
      const projectItem = document.createElement('div');
      projectItem.classList.add('projectItem');
      if(i==0) projectItem.classList.add('general');
      if(Projects.projectList[i]==Projects.currentProject){
        projectItem.classList.add('current');
      }
      projectItem.setAttribute('data-index',i);
      projectItem.textContent = Projects.projectList[i];
      trashIcon.src = TrashIcon;
      projectItem.append(trashIcon)
      this.projectList.append(projectItem);
    }
  }
  static domCache(){
    this.addBtn = document.querySelector('.addProjectBtn');
    this.titleIP = document.querySelector('.projectTitleIP');
    this.projectInput = document.querySelector('.projectInput');
    this.projectTick = document.querySelector('.projectTick');
    this.projectCross = document.querySelector('.projectCross');
    this.projectList = document.querySelector('.projectList');
    this.projectItem = document.querySelectorAll('.projectItem');
    this.TrashIcon = document.querySelectorAll('.projectItem .trashIcon');
  }
  static bindEvent(){
    this.addBtn.addEventListener('click', this.addBtnClk.bind(this));
    this.projectTick.addEventListener('click', this.projectTickClk.bind(this));
    this.projectCross.addEventListener('click', this.projectCrossClk.bind(this));
  }
  static bindEventReload(){
    this.TrashIcon.forEach((e)=>{
      e.addEventListener('click', this.trashIconClk.bind(this, e));
    });
    this.projectItem.forEach((e)=>{
      e.addEventListener('click', this.projectItemClk.bind(this, e))
    });
  }

  static trashIconClk(e){
    this.trashIconClicked = true;
    const index = UI.indexByElem(e);
    Projects.deleteProject(index);
    this.render();
  }

  static projectCrossClk(){ 
    this.addBtn.style.display ='block';
    this.projectInput.style.display = 'none';
  }

  static projectTickClk(){
    if(this.titleIP.value==''){
      alert("Title can't be empty");
      return;
    }
    if(Projects.projectList.includes(this.titleIP.value)){
      alert('project name alreasdy exist!')
      return;
    }
    Projects.addProjectToList(this.titleIP.value);

    this.addBtn.style.display ='block';
    this.projectInput.style.display = 'none';
    UI.render();
  }

  static addBtnClk(){
    this.projectInput.style.display = 'grid'; 
    this.addBtn.style.display ='none';
  }

  static projectItemClk(e){
    if(this.trashIconClicked){
      this.trashIconClicked=false;
      return;
    }
    Projects.currentProject = e.textContent;
    UI.render();
  }

}