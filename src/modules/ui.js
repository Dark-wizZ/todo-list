import Task from './task';
import Todos from './todos';
import TrashIcon from '../img/trash.png';
import EditIcon from '../img/edit.png';
import StarIcon from '../img/star.png';
import StarGoldIcon from '../img/starGold.png';
import Data from 'data-fns';
import Sidebar from './sidebar'
import sidebar from './sidebar';
import Projects from './project';

export default class UI{
  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    sidebar.init();
    this.contentRender();
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
  static contentRender(){
    this.contentHeading.textContent = Projects.currentProject;
    this.tasksRender();
  }
  static tasksRender(){
    this.tasks.innerHTML='';
    for(let i=0; i<Todos.todoList.length; i++){
      if(Todos.todoList[i].project != Projects.currentProject){
        continue;
      }
      //create dom element
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('checkBox');
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem');
      if(Todos.todoList[i].done){
        taskItem.classList.add('done');
        checkBox.checked = true;
      }
      taskItem.setAttribute('data-index', i);
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('taskTitle');
      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');
      const trashIcon = document.createElement('img');
      trashIcon.classList.add('trashIcon')
      const starIcon = document.createElement('img');
      starIcon.classList.add('starIcon')

      //add content
      taskTitle.textContent = Todos.todoList[i].title;
      dueDate.textContent = Todos.todoList[i].dueDate;
      trashIcon.src = TrashIcon;
      if(Todos.todoList[i].priority){
        starIcon.src = StarGoldIcon;
      }else{
        starIcon.src = StarIcon;
      }

      //append to dom
      taskItem.append(checkBox, taskTitle, dueDate, starIcon, trashIcon);
      this.tasks.append(taskItem);
    }
  }
  static domCache(){
    this.confirmBtn = document.querySelector('.confirmBtn');
    this.cancelBtn = document.querySelector('.cancelBtn');
    this.taskTitleIP = document.querySelector('.taskTitleIP');
    this.dueDateIP = document.querySelector('.dueDateIP');
    this.tasks = document.querySelector('.tasks');
    this.addTaskBtn = document.querySelector('.addTaskBtn')
    this.addTaskPrompt = document.querySelector('.addTaskPrompt');
    this.trashIcon = document.querySelectorAll('.trashIcon');
    this.contentHeading = document.querySelector('.content .heading');
    this.projectAddBtn = document.querySelector('.addProjectBtn');
    this.projectTitleIP = document.querySelector('.projectTitleIP');
    this.projectInput = document.querySelector('.projectInput');
    this.projectTick = document.querySelector('.projectTick');
    this.projectCross = document.querySelector('.projectCross');
    this.projectList = document.querySelector('.projectList');
    this.projectItem = document.querySelectorAll('.projectItem');
    this.starIcon = document.querySelectorAll('.taskItem .starIcon');
    this.taskIPStarIcon = document.querySelector('.taskInput .starIcon');
    this.checkBox = document.querySelectorAll('.checkBox');
    this.projectItemTrashIcon = document.querySelectorAll('.projectItem .trashIcon');
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
    this.addTaskBtn.addEventListener('click', this.addTaskBtnClk.bind(this));
    this.cancelBtn.addEventListener('click', this.cancelBtnClk.bind(this));
    this.projectAddBtn.addEventListener('click', this.projectAddBtnClk.bind(this));
    this.projectTick.addEventListener('click', this.projectTickClk.bind(this));
    this.projectCross.addEventListener('click', this.projectCrossClk.bind(this));
    this.taskIPStarIcon.addEventListener('click', this.taskIPStarIconClk.bind(this));
  }
  static bindEventReload(){
    this.trashIcon.forEach((e)=>{
      e.addEventListener('click', this.trashIconClk.bind(this, e))
    });
    this.projectItem.forEach((e)=>{
      e.addEventListener('click', this.projectItemClk.bind(this, e))
    });
    this.starIcon.forEach((e)=>{
      e.addEventListener('click', this.starIconClk.bind(this, e));
    });
    this.checkBox.forEach((e)=>{
      e.addEventListener('change', this.checkBoxChange.bind(this, e));
    });
    this.projectItemTrashIcon.forEach((e)=>{
      e.addEventListener('click', this.projectItemTrashIconClk.bind(this, e));
    })
  }
  static projectItemTrashIconClk(e){
    this.isProjectItemTrashIconClicked = true;
    const index = this.indexByElem(e);
    Projects.deleteProject(index);
    console.log(Projects.currentProject)
    this.render();
  }
  static checkBoxChange(e){
    const index = this.indexByElem(e);
    if(e.checked){
      Todos.todoList[index].done=true;
    }else{
      Todos.todoList[index].done=false;
    }
    this.render();
  }
  static taskIPStarIconClk(){
    if(this.taskIPStarIcon.src == StarGoldIcon){
      this.taskIPStarIcon.src = StarIcon;
    }else{
      this.taskIPStarIcon.src=StarGoldIcon;
    }
  }
  static starIconClk(e){
    const index = this.indexByElem(e);
    Todos.changePriority(index);
    this.render();
  }
  static projectItemClk(e){
    if(this.isProjectItemTrashIconClicked){
      this.isProjectItemTrashIconClicked=false;
      return;
    }
    Projects.currentProject = e.textContent;
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
  static indexByElem(e){
    return e.parentElement.dataset.index;
  }
  static trashIconClk(e){
    const index = this.indexByElem(e);
    Todos.deleteTask(index);
    this.render();
  }
  static cancelBtnClk(){
    this.showAddBtn();
  }
  static addTaskBtnClk(){
    this.addTaskBtn.style.display = 'none';
    this.addTaskPrompt.style.display = 'flex';
  }
  static confirmBtnClk(){
    const task = new Task(
      this.taskTitleIP.value, this.dueDateIP.value, Projects.currentProject
    );
    if(this.taskIPStarIcon.src==StarGoldIcon){
      task.priority=true;
    }
    Todos.addTaskToList(task);
    this.render();
  }
  static showAddBtn(){
    this.addTaskBtn.style.display = 'flex';
    this.addTaskPrompt.style.display = 'none';
  }
}