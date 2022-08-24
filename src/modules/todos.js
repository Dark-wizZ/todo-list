import Task from './task'

export default class Todos {
  static todoList=[];

  static addTaskToList(task){
    this.todoList.push(task);
  }

  static deleteTask(i){
    this.todoList.splice(i, 1);
  }
  static changePriority(i){
    if(this.todoList[i].priority==true){
      this.todoList[i].priority=false
    }else{
      this.todoList[i].priority=true;
    }
  }
}