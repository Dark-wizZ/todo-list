export default class Todos {
  title;
  description;
  dueDate;
  priority;
  constructor(title, description, dueData, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueData;
    this.priority = priority;
  }
}