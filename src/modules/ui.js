import Task from './task';
import Todos from './todos';
import Projects from './project';
import TrashIcon from '../img/trash.png';
import EditIcon from '../img/edit.png';
import StarIcon from '../img/star.png';
import StarGoldIcon from '../img/starGold.png';

export default class UI{
  static init(){
    Todos.addTaskToList(new Task(
      "car buy", "07/06/2002" ,Projects.currentProject
    ));
    this.domCache();
    this.render();
    this.domCache();
    this.bindEvent();
  }
  static render(){
    this.projectRender();
    this.contentRender();
    this.domCache();
    this.bindEventReload();
    console.log(Todos.todoList)
  }
  static projectRender(){
    this.projectList.innerHTML = '';
    for(let i=0; i<Projects.projectList.length; i++){
      const projectItem = document.createElement('div');
      projectItem.classList.add('projectItem');
      projectItem.setAttribute('data-index',i);
      projectItem.textContent = Projects.projectList[i];
      this.projectList.append(projectItem);
    }
  }
  static contentRender(){
    this.contentHeading.textContent = Projects.currentProject;
    this.tasksRender();
  }
  static tasksRender(){
    console.log(Projects.currentProject);
    this.tasks.innerHTML='';
    for(let i=0; i<Todos.todoList.length; i++){
      if(Todos.todoList[i].project != Projects.currentProject){
        continue;
      }
      //create dom element
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem');
      taskItem.setAttribute('data-index', i);
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('taskTitle');
      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');
      const trashIcon = document.createElement('img');
      trashIcon.classList.add('trashIcon')
      const editIcon = document.createElement('img');
      editIcon.classList.add('editIcon')
      const starIcon = document.createElement('img');
      starIcon.classList.add('starIcon')

      //add content
      taskTitle.textContent = Todos.todoList[i].title;
      dueDate.textContent = Todos.todoList[i].dueDate;
      editIcon.src = EditIcon
      trashIcon.src = TrashIcon;
      starIcon.src = StarIcon;

      //append to dom
      taskItem.append(taskTitle, dueDate, starIcon, editIcon, trashIcon);
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
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
    this.addTaskBtn.addEventListener('click', this.addTaskBtnClk.bind(this));
    this.cancelBtn.addEventListener('click', this.cancelBtnClk.bind(this));
    this.projectAddBtn.addEventListener('click', this.projectAddBtnClk.bind(this));
    this.projectTick.addEventListener('click', this.projectTickClk.bind(this));
    this.projectCross.addEventListener('click', this.projectCrossClk.bind(this));
    this.bindEventReload();
  }
  static bindEventReload(){
    this.trashIcon.forEach((e)=>{
      e.addEventListener('click', this.trashIconClk.bind(this, e))
    });
    this.projectItem.forEach((e)=>{
      e.addEventListener('click', this.projectItemClk.bind(this, e))
    });
  }
  static projectItemClk(e){
    Projects.currentProject = e.textContent;
    this.render();
  }
  static projectCrossClk(){ 
    this.projectAddBtn.style.display ='block';
    this.projectInput.style.display = 'none';
  }
  static projectTickClk(){
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
    Todos.addTaskToList(task);
    this.render();
  }
  static showAddBtn(){
    this.addTaskBtn.style.display = 'flex';
    this.addTaskPrompt.style.display = 'none';
  }
}