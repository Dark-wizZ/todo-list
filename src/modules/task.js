export default class Task {
  title;
  dueDate;
  project;
  priority = false;
  done = false;
  constructor(title, dueDate, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.project = project;
  }
}
