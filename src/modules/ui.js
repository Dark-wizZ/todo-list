import Task from './task'
import Todos from './todos'

export default class UI{
  static init(){
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
    this.taskTitleIP = document.querySelector('.taskTitleIP');
    this.dueDateIP = document.querySelector('.dueDateIP');
    this.tasks = document.querySelector('.tasks')
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
  }
  static confirmBtnClk(){
    const task = new Task(
      this.taskTitleIP.value, this.dueDateIP.value
    );
    Todos.addTaskToList(task);
    this.render();
  }
}