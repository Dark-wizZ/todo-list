export default class{
  static projectList = ["General"];
  static currentProject = this.projectList[0];

  static addProjectToList(project){
    this.projectList.push(project);
  }

}