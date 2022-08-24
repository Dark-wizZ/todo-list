/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class{
  static projectList = ["General"];
  static currentProject = this.projectList[0];

  static addProjectToList(project){
    this.projectList.push(project);
  }

});

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
  title;
  dueDate;
  project;
  priority = false;
  constructor(title, dueDate, project){
    this.title = title;
    this.dueDate = dueDate;
    this.project = project;
  }
}

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


class Todos {
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

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/trash.png */ "./src/img/trash.png");
/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/edit.png */ "./src/img/edit.png");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/star.png */ "./src/img/star.png");
/* harmony import */ var _img_starGold_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/starGold.png */ "./src/img/starGold.png");








class UI{
  static init(){
    _todos__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToList(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
      "car buy", "07/06/2002" ,_project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject
    ));
    this.domCache();
    this.render();
    this.domCache();
    this.bindEvent();
  }
  static render(){
    this.projectRender();
    this.contentRender();
    this.domCache();
    this.bindEventReload();
    console.log(_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList)
  }
  static projectRender(){
    this.projectList.innerHTML = '';
    for(let i=0; i<_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.length; i++){
      const projectItem = document.createElement('div');
      projectItem.classList.add('projectItem');
      if(_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[i]==_project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject){
        projectItem.classList.add('current');
      }
      projectItem.setAttribute('data-index',i);
      projectItem.textContent = _project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[i];
      this.projectList.append(projectItem);
    }
  }
  static contentRender(){
    this.contentHeading.textContent = _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject;
    this.tasksRender();
  }
  static tasksRender(){
    console.log(_project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject);
    this.tasks.innerHTML='';
    for(let i=0; i<_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList.length; i++){
      if(_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].project != _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject){
        continue;
      }
      //create dom element
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem');
      taskItem.setAttribute('data-index', i);
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('taskTitle');
      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');
      const trashIcon = document.createElement('img');
      trashIcon.classList.add('trashIcon')
      const starIcon = document.createElement('img');
      starIcon.classList.add('starIcon')

      //add content
      taskTitle.textContent = _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].title;
      dueDate.textContent = _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].dueDate;
      trashIcon.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_3__;
      if(_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].priority){
        starIcon.src = _img_starGold_png__WEBPACK_IMPORTED_MODULE_6__;
      }else{
        starIcon.src = _img_star_png__WEBPACK_IMPORTED_MODULE_5__;
      }

      //append to dom
      taskItem.append(taskTitle, dueDate, starIcon, trashIcon);
      this.tasks.append(taskItem);
    }
  }
  static domCache(){
    this.confirmBtn = document.querySelector('.confirmBtn');
    this.cancelBtn = document.querySelector('.cancelBtn');
    this.taskTitleIP = document.querySelector('.taskTitleIP');
    this.dueDateIP = document.querySelector('.dueDateIP');
    this.tasks = document.querySelector('.tasks');
    this.addTaskBtn = document.querySelector('.addTaskBtn')
    this.addTaskPrompt = document.querySelector('.addTaskPrompt');
    this.trashIcon = document.querySelectorAll('.trashIcon');
    this.contentHeading = document.querySelector('.content .heading');
    this.projectAddBtn = document.querySelector('.addProjectBtn');
    this.projectTitleIP = document.querySelector('.projectTitleIP');
    this.projectInput = document.querySelector('.projectInput');
    this.projectTick = document.querySelector('.projectTick');
    this.projectCross = document.querySelector('.projectCross');
    this.projectList = document.querySelector('.projectList');
    this.projectItem = document.querySelectorAll('.projectItem');
    this.starIcon = document.querySelectorAll('.taskItem .starIcon');
    this.taskIPStarIcon = document.querySelector('.taskInput .starIcon');
  }
  static bindEvent(){
    this.confirmBtn.addEventListener('click', this.confirmBtnClk.bind(this));
    this.addTaskBtn.addEventListener('click', this.addTaskBtnClk.bind(this));
    this.cancelBtn.addEventListener('click', this.cancelBtnClk.bind(this));
    this.projectAddBtn.addEventListener('click', this.projectAddBtnClk.bind(this));
    this.projectTick.addEventListener('click', this.projectTickClk.bind(this));
    this.projectCross.addEventListener('click', this.projectCrossClk.bind(this));
    this.taskIPStarIcon.addEventListener('click', this.taskIPStarIconClk.bind(this));
  }
  static bindEventReload(){
    this.trashIcon.forEach((e)=>{
      e.addEventListener('click', this.trashIconClk.bind(this, e))
    });
    this.projectItem.forEach((e)=>{
      e.addEventListener('click', this.projectItemClk.bind(this, e))
    });
    this.starIcon.forEach((e)=>{
      e.addEventListener('click', this.starIconClk.bind(this, e));
    });
  }
  static taskIPStarIconClk(){
    console.log(this.taskIPStarIcon.src)
    if(this.taskIPStarIcon.src == _img_starGold_png__WEBPACK_IMPORTED_MODULE_6__){
      this.taskIPStarIcon.src = _img_star_png__WEBPACK_IMPORTED_MODULE_5__;
    }else{
      this.taskIPStarIcon.src=_img_starGold_png__WEBPACK_IMPORTED_MODULE_6__;
    }
  }
  static starIconClk(e){
    const index = this.indexByElem(e);
    _todos__WEBPACK_IMPORTED_MODULE_1__["default"].changePriority(index);
    this.render();
  }
  static projectItemClk(e){
    _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject = e.textContent;
    this.render();
  }
  static projectCrossClk(){ 
    this.projectAddBtn.style.display ='block';
    this.projectInput.style.display = 'none';
  }
  static projectTickClk(){
    if(this.projectTitleIP.value==''){
      alert("Title can't be empty");
      return;
    }
    if(_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.includes(this.projectTitleIP.value)){
      alert('project name alreasdy exist!')
      return;
    }
    _project__WEBPACK_IMPORTED_MODULE_2__["default"].addProjectToList(this.projectTitleIP.value);

    this.projectAddBtn.style.display ='block';
    this.projectInput.style.display = 'none';
    this.render();
  }
  static projectAddBtnClk(){
    this.projectInput.style.display = 'grid'; 
    this.projectAddBtn.style.display ='none';
  }
  static indexByElem(e){
    return e.parentElement.dataset.index;
  }
  static trashIconClk(e){
    const index = this.indexByElem(e);
    _todos__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(index);
    this.render();
  }
  static cancelBtnClk(){
    this.showAddBtn();
  }
  static addTaskBtnClk(){
    this.addTaskBtn.style.display = 'none';
    this.addTaskPrompt.style.display = 'flex';
  }
  static confirmBtnClk(){
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.taskTitleIP.value, this.dueDateIP.value, _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject
    );
    if(this.taskIPStarIcon.src==_img_starGold_png__WEBPACK_IMPORTED_MODULE_6__){
      task.priority=true;
    }
    _todos__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToList(task);
    this.render();
  }
  static showAddBtn(){
    this.addTaskBtn.style.display = 'flex';
    this.addTaskPrompt.style.display = 'none';
  }
}

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "597d819b28d037964eb3.png";

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "190d870d386afd29523a.png";

/***/ }),

/***/ "./src/img/starGold.png":
/*!******************************!*\
  !*** ./src/img/starGold.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f55a71772e1acfd9520.png";

/***/ }),

/***/ "./src/img/trash.png":
/*!***************************!*\
  !*** ./src/img/trash.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de053828cc26fc64e2c4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");


document.addEventListener('DOMContentLoaded', _modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"].init());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmOEI7O0FBRTlCLDhDQUE4Qyx3REFBTyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3N7XG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IFtcIkdlbmVyYWxcIl07XG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHRoaXMucHJvamVjdExpc3RbMF07XG5cbiAgc3RhdGljIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuICB0aXRsZTtcbiAgZHVlRGF0ZTtcbiAgcHJvamVjdDtcbiAgcHJpb3JpdHkgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByb2plY3Qpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcbiAgc3RhdGljIHRvZG9MaXN0PVtdO1xuXG4gIHN0YXRpYyBhZGRUYXNrVG9MaXN0KHRhc2spe1xuICAgIHRoaXMudG9kb0xpc3QucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKGkpe1xuICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICB9XG4gIHN0YXRpYyBjaGFuZ2VQcmlvcml0eShpKXtcbiAgICBpZih0aGlzLnRvZG9MaXN0W2ldLnByaW9yaXR5PT10cnVlKXtcbiAgICAgIHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9ZmFsc2VcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IFRvZG9zIGZyb20gJy4vdG9kb3MnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL2ltZy90cmFzaC5wbmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnBuZyc7XG5pbXBvcnQgU3Rhckljb24gZnJvbSAnLi4vaW1nL3N0YXIucG5nJztcbmltcG9ydCBTdGFyR29sZEljb24gZnJvbSAnLi4vaW1nL3N0YXJHb2xkLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuICBzdGF0aWMgaW5pdCgpe1xuICAgIFRvZG9zLmFkZFRhc2tUb0xpc3QobmV3IFRhc2soXG4gICAgICBcImNhciBidXlcIiwgXCIwNy8wNi8yMDAyXCIgLFByb2plY3RzLmN1cnJlbnRQcm9qZWN0XG4gICAgKSk7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIHRoaXMucHJvamVjdFJlbmRlcigpO1xuICAgIHRoaXMuY29udGVudFJlbmRlcigpO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudFJlbG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKFRvZG9zLnRvZG9MaXN0KVxuICB9XG4gIHN0YXRpYyBwcm9qZWN0UmVuZGVyKCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IobGV0IGk9MDsgaTxQcm9qZWN0cy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcbiAgICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0W2ldPT1Qcm9qZWN0cy5jdXJyZW50UHJvamVjdCl7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsaSk7XG4gICAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IFByb2plY3RzLnByb2plY3RMaXN0W2ldO1xuICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEl0ZW0pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgY29udGVudFJlbmRlcigpe1xuICAgIHRoaXMuY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBQcm9qZWN0cy5jdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLnRhc2tzUmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIHRhc2tzUmVuZGVyKCl7XG4gICAgY29uc29sZS5sb2coUHJvamVjdHMuY3VycmVudFByb2plY3QpO1xuICAgIHRoaXMudGFza3MuaW5uZXJIVE1MPScnO1xuICAgIGZvcihsZXQgaT0wOyBpPFRvZG9zLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKFRvZG9zLnRvZG9MaXN0W2ldLnByb2plY3QgIT0gUHJvamVjdHMuY3VycmVudFByb2plY3Qpe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vY3JlYXRlIGRvbSBlbGVtZW50XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFza0l0ZW0nKTtcbiAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza1RpdGxlJyk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ3RyYXNoSWNvbicpXG4gICAgICBjb25zdCBzdGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgc3Rhckljb24uY2xhc3NMaXN0LmFkZCgnc3Rhckljb24nKVxuXG4gICAgICAvL2FkZCBjb250ZW50XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBUb2Rvcy50b2RvTGlzdFtpXS50aXRsZTtcbiAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBUb2Rvcy50b2RvTGlzdFtpXS5kdWVEYXRlO1xuICAgICAgdHJhc2hJY29uLnNyYyA9IFRyYXNoSWNvbjtcbiAgICAgIGlmKFRvZG9zLnRvZG9MaXN0W2ldLnByaW9yaXR5KXtcbiAgICAgICAgc3Rhckljb24uc3JjID0gU3RhckdvbGRJY29uO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0YXJJY29uLnNyYyA9IFN0YXJJY29uO1xuICAgICAgfVxuXG4gICAgICAvL2FwcGVuZCB0byBkb21cbiAgICAgIHRhc2tJdGVtLmFwcGVuZCh0YXNrVGl0bGUsIGR1ZURhdGUsIHN0YXJJY29uLCB0cmFzaEljb24pO1xuICAgICAgdGhpcy50YXNrcy5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZG9tQ2FjaGUoKXtcbiAgICB0aGlzLmNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUJ0bicpO1xuICAgIHRoaXMuY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ0bicpO1xuICAgIHRoaXMudGFza1RpdGxlSVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlSVAnKTtcbiAgICB0aGlzLmR1ZURhdGVJUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlSVAnKTtcbiAgICB0aGlzLnRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgdGhpcy5hZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tCdG4nKVxuICAgIHRoaXMuYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrUHJvbXB0Jyk7XG4gICAgdGhpcy50cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2hJY29uJyk7XG4gICAgdGhpcy5jb250ZW50SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50IC5oZWFkaW5nJyk7XG4gICAgdGhpcy5wcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdG4nKTtcbiAgICB0aGlzLnByb2plY3RUaXRsZUlQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZUlQJyk7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0Jyk7XG4gICAgdGhpcy5wcm9qZWN0VGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGljaycpO1xuICAgIHRoaXMucHJvamVjdENyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDcm9zcycpO1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICB0aGlzLnByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgdGhpcy5zdGFySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrSXRlbSAuc3Rhckljb24nKTtcbiAgICB0aGlzLnRhc2tJUFN0YXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJbnB1dCAuc3Rhckljb24nKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5jb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jb25maXJtQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFza0J0bkNsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvamVjdEFkZEJ0bkNsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnByb2plY3RUaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9qZWN0VGlja0Nsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnByb2plY3RDcm9zcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvamVjdENyb3NzQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMudGFza0lQU3Rhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRhc2tJUFN0YXJJY29uQ2xrLmJpbmQodGhpcykpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnRSZWxvYWQoKXtcbiAgICB0aGlzLnRyYXNoSWNvbi5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJhc2hJY29uQ2xrLmJpbmQodGhpcywgZSkpXG4gICAgfSk7XG4gICAgdGhpcy5wcm9qZWN0SXRlbS5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvamVjdEl0ZW1DbGsuYmluZCh0aGlzLCBlKSlcbiAgICB9KTtcbiAgICB0aGlzLnN0YXJJY29uLmZvckVhY2goKGUpPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFySWNvbkNsay5iaW5kKHRoaXMsIGUpKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgdGFza0lQU3Rhckljb25DbGsoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tJUFN0YXJJY29uLnNyYylcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYyA9PSBTdGFyR29sZEljb24pe1xuICAgICAgdGhpcy50YXNrSVBTdGFySWNvbi5zcmMgPSBTdGFySWNvbjtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudGFza0lQU3Rhckljb24uc3JjPVN0YXJHb2xkSWNvbjtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHN0YXJJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5jaGFuZ2VQcmlvcml0eShpbmRleCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdEl0ZW1DbGsoZSl7XG4gICAgUHJvamVjdHMuY3VycmVudFByb2plY3QgPSBlLnRleHRDb250ZW50O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIHByb2plY3RDcm9zc0NsaygpeyBcbiAgICB0aGlzLnByb2plY3RBZGRCdG4uc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICB0aGlzLnByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0VGlja0Nsaygpe1xuICAgIGlmKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWU9PScnKXtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0LmluY2x1ZGVzKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWUpKXtcbiAgICAgIGFsZXJ0KCdwcm9qZWN0IG5hbWUgYWxyZWFzZHkgZXhpc3QhJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdFRvTGlzdCh0aGlzLnByb2plY3RUaXRsZUlQLnZhbHVlKTtcblxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdEFkZEJ0bkNsaygpe1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7IFxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gIH1cbiAgc3RhdGljIGluZGV4QnlFbGVtKGUpe1xuICAgIHJldHVybiBlLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgfVxuICBzdGF0aWMgdHJhc2hJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5kZWxldGVUYXNrKGluZGV4KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBjYW5jZWxCdG5DbGsoKXtcbiAgICB0aGlzLnNob3dBZGRCdG4oKTtcbiAgfVxuICBzdGF0aWMgYWRkVGFza0J0bkNsaygpe1xuICAgIHRoaXMuYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuYWRkVGFza1Byb21wdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG4gIHN0YXRpYyBjb25maXJtQnRuQ2xrKCl7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGhpcy50YXNrVGl0bGVJUC52YWx1ZSwgdGhpcy5kdWVEYXRlSVAudmFsdWUsIFByb2plY3RzLmN1cnJlbnRQcm9qZWN0XG4gICAgKTtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYz09U3RhckdvbGRJY29uKXtcbiAgICAgIHRhc2sucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gICAgVG9kb3MuYWRkVGFza1RvTGlzdCh0YXNrKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBzaG93QWRkQnRuKCl7XG4gICAgdGhpcy5hZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy5hZGRUYXNrUHJvbXB0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL3VpJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmluaXQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9