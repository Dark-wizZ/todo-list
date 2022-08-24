export default class{
  static projectList = ["General"];
  static currentProject = this.projectList[0];

  static addProjectToList(project){
    this.projectList.push(project);
  }
  static deleteProject(i){
    if(this.projectList[i]==this.currentProject){
      if(this.projectList[i+1]!=undefined){
        this.currentProject=this.projectList[i+1]
      }else if(this.projectList[i-1]!=undefined){
        this.currentProject=this.projectList[i-1]
      }else{
        this.currentProject='No Projects';
      }
    }
    this.projectList.splice(i, 1);
  }
}