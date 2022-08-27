import Todos from "./todos";

export default class {
  static projectList = ["General"];
  static currentProject = this.projectList[0];

  static addProjectToList(project) {
    this.projectList.push(project);
  }
  static deleteProject(ind) {
    Todos.todoList = Todos.todoList.filter((task) => {
      return task.project != this.projectList[ind];
    });

    if (this.projectList[ind] == this.currentProject) {
      if (this.projectList[ind + 1] != undefined) {
        this.currentProject = this.projectList[ind + 1];
      } else if (this.projectList[ind - 1] != undefined) {
        this.currentProject = this.projectList[ind - 1];
      } else {
        this.currentProject = "No Projects";
      }
    }
    this.projectList.splice(ind, 1);
  }
}
