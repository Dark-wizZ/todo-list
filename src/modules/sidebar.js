import Projects from './project';
import TrashIcon from '../img/trash.png';

export default class{

  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.projectRender();
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
    this.projectAddBtn = document.querySelector('.addProjectBtn');
    this.projectTitleIP = document.querySelector('.projectTitleIP');
    this.projectInput = document.querySelector('.projectInput');
    this.projectTick = document.querySelector('.projectTick');
    this.projectCross = document.querySelector('.projectCross');
    this.projectList = document.querySelector('.projectList');
    this.projectItem = document.querySelectorAll('.projectItem');
    this.projectItemTrashIcon = document.querySelectorAll('.projectItem .trashIcon');
  }
  static bindEvent(){
    this.projectAddBtn.addEventListener('click', this.projectAddBtnClk.bind(this));
    this.projectTick.addEventListener('click', this.projectTickClk.bind(this));
    this.projectCross.addEventListener('click', this.projectCrossClk.bind(this));
  }
  static bindEventReload(){
    this.projectItemTrashIcon.forEach((e)=>{
      e.addEventListener('click', this.projectItemTrashIconClk.bind(this, e));
    });
    this.projectItem.forEach((e)=>{
      e.addEventListener('click', this.projectItemClk.bind(this, e))
    });
  }

  static projectItemTrashIconClk(e){
    this.isProjectItemTrashIconClicked = true;
    const index = this.indexByElem(e);
    Projects.deleteProject(index);
    console.log(Projects.currentProject)
    this.render();
  }

  static projectCrossClk(){ 
    this.projectAddBtn.style.display ='block';
    this.projectInput.style.display = 'none';
  }

  static projectTickClk(){
    if(this.projectTitleIP.value==''){
      alert("Title can't be empty");
      return;
    }
    if(Projects.projectList.includes(this.projectTitleIP.value)){
      alert('project name alreasdy exist!')
      return;
    }
    Projects.addProjectToList(this.projectTitleIP.value);

    this.projectAddBtn.style.display ='block';
    this.projectInput.style.display = 'none';
    this.render();
  }

  static projectAddBtnClk(){
    this.projectInput.style.display = 'grid'; 
    this.projectAddBtn.style.display ='none';
  }

  static projectItemClk(e){
    if(this.isProjectItemTrashIconClicked){
      this.isProjectItemTrashIconClicked=false;
      return;
    }
    Projects.currentProject = e.textContent;
    this.render();
  }

}