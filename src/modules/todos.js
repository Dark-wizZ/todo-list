import Task from './task'

export default class Todos {
  static todoList=[];

  static addTaskToList(task){
    this.todoList.push(task);
  }
}