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
    for(let task of Todos.todoList){
      console.log(task);
    }
    console.log('\n')
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