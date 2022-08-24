import Task from './task';
import Todos from './todos';
import TrashIcon from '../img/trash.png';
import StarIcon from '../img/star.png';
import StarGoldIcon from '../img/starGold.png';
import Projects from './project';
import UI from './ui'

export default class Content{

  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.contentRender();
    this.domCache();
    this.bindEventReload();
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
    this.starIcon = document.querySelectorAll('.taskItem .starIcon');
    this.taskIPStarIcon = document.querySelector('.taskInput .starIcon');
    this.checkBox = document.querySelectorAll('.checkBox');
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
    this.addTaskBtn.addEventListener('click', this.addTaskBtnClk.bind(this));
    this.cancelBtn.addEventListener('click', this.cancelBtnClk.bind(this));
    this.taskIPStarIcon.addEventListener('click', this.taskIPStarIconClk.bind(this));
  }
  static bindEventReload(){
    this.trashIcon.forEach((e)=>{
      e.addEventListener('click', this.trashIconClk.bind(this, e))
    });
    this.starIcon.forEach((e)=>{
      e.addEventListener('click', this.starIconClk.bind(this, e));
    });
    this.checkBox.forEach((e)=>{
      e.addEventListener('change', this.checkBoxChange.bind(this, e));
    });
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

  static checkBoxChange(e){
    const index = UI.indexByElem(e);
    if(e.checked){
      Todos.todoList[index].done=true;
    }else{
      Todos.todoList[index].done=false;
    }
    UI.render();
  }
  static taskIPStarIconClk(){
    if(this.taskIPStarIcon.src == StarGoldIcon){
      this.taskIPStarIcon.src = StarIcon;
    }else{
      this.taskIPStarIcon.src=StarGoldIcon;
    }
  }
  static starIconClk(e){
    const index = UI.indexByElem(e);
    Todos.changePriority(index);
    UI.render();
  }
  static trashIconClk(e){
    const index = UI.indexByElem(e);
    Todos.deleteTask(index);
    UI.render();
  }
  static cancelBtnClk(){
    this.resetInputs();
    this.showAddBtn();
  }
  static addTaskBtnClk(){
    this.resetInputs();
    this.addTaskBtn.style.display = 'none';
    this.addTaskPrompt.style.display = 'flex';
  }
  static confirmBtnClk(){
    this.resetInputs();
    const task = new Task(
      this.taskTitleIP.value, this.dueDateIP.value, Projects.currentProject
    );
    if(this.taskIPStarIcon.src==StarGoldIcon){
      task.priority=true;
    }
    Todos.addTaskToList(task);
    UI.render();
  }
  static showAddBtn(){
    this.addTaskBtn.style.display = 'flex';
    this.addTaskPrompt.style.display = 'none';
  }
  static resetInputs(){
    this.taskTitleIP.value= '';
    this.dueDateIP.value= '';
  }

}