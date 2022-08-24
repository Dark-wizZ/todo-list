export default class Task{
  title;
  dueDate;
  project;
  constructor(title, dueDate, project){
    this.title = title;
    this.dueDate = dueDate;
    this.project = project;
  }
}