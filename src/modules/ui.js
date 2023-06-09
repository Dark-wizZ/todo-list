import Sidebar from "./sidebar";
import Content from "./content";
import Project from "./project";
import Todos from "./todos";
import { storageAvailability as SA, storage } from "../index";
import {auth, doc, getDoc, db} from './fbase'

export default class UI {
  static async init() {
    // storage.projectList  = JSON.stringify([])
    //restore data from firestore
    if (SA) {
      Project.projectList = storage.projectList
        ? JSON.parse(storage.projectList)
        : Project.projectList;
      Todos.todoList = storage.todoList
        ? JSON.parse(storage.todoList)
        : Todos.todoList;
    }
    Content.init();
    Sidebar.init();
    this.render();
  }
  static render() {
    Sidebar.render();
    Content.render();
    if (SA) {
      storage.projectList = JSON.stringify(Project.projectList);
      storage.todoList = JSON.stringify(Todos.todoList);
    }
  }

  static indexByElem(e) {
    return e.parentElement.dataset.index;
  }
}
