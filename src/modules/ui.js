import Task from './task'
import Todos from './todos'

export default class UI{
  static init(){
    Todos.addTaskToList(new Task(
      "car buy", "07/06/2002"
    ));
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.tasksRender();
  }
  static tasksRender(){
    this.tasks.innerHTML='';

    for(let task of Todos.todoList){
      //create dom element
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem');
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('taskTitle');
      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');

      //add content
      taskTitle.textContent = task.title;
      dueDate.textContent = task.dueDate;

      //append to dom
      taskItem.append(taskTitle, dueDate);
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
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
    this.addTaskBtn.addEventListener('click', this.addTaskBtnClk.bind(this));
    this.cancelBtn.addEventListener('click', this.cancelBtnClk.bind(this));
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
      this.taskTitleIP.value, this.dueDateIP.value
    );
    Todos.addTaskToList(task);
    this.render();
  }
  static showAddBtn(){
    this.addTaskBtn.style.display = 'flex';
    this.addTaskPrompt.style.display = 'none';
  }
}