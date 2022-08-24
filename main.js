/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/SignikaNegative.ttf */ "./src/font/SignikaNegative.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'SignikaNegative';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: 1fr 6fr;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  gap:10px;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap: 2px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n  background-color: grey;\n}\n.checkBox:hover,.taskItem img:hover, .starIcon:hover{\n  cursor: pointer;\n}\n.projectItem img{\n  height: 1.3rem;\n  margin-left:auto;\n  display: none;\n}\n.projectItem:hover img{\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,4CAAoC;AACtC;AACA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;AAChC;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,SAAS;AACX;AACA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,QAAQ;AACV;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;EACE,sCAAsC;AACxC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: 'SignikaNegative';\n  src: url(./font/SignikaNegative.ttf);\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: 1fr 6fr;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  gap:10px;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap: 2px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n  background-color: grey;\n}\n.checkBox:hover,.taskItem img:hover, .starIcon:hover{\n  cursor: pointer;\n}\n.projectItem img{\n  height: 1.3rem;\n  margin-left:auto;\n  display: none;\n}\n.projectItem:hover img{\n  display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/data-fns/dist/data-fns.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/data-fns/dist/data-fns.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItemCyclic": () => (/* binding */ getItemCyclic),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "patternChunks": () => (/* binding */ patternChunks),
/* harmony export */   "replaceAt": () => (/* binding */ replaceAt),
/* harmony export */   "times": () => (/* binding */ times)
/* harmony export */ });
var getItemCyclic = function getItemCyclic(index, array) {
  var id = index % array.length;
  return array[id];
};

var offset = function offset(list, amount) {
  return [].concat(list.slice(amount), list.slice(0, amount));
};

var patternChunks = function patternChunks(array, pattern) {
  var result = [];

  var _array = [].concat(array);

  var i = 0;

  while (_array.length > 0) {
    result.push(_array.splice(0, getItemCyclic(i, pattern)));
    i++;
  }

  return result;
};

var replaceAt = function replaceAt(array, index, replacementFn) {
  var item = array[index];
  return array.slice(0, index).concat([replacementFn(item)]).concat(array.slice(index + 1));
};

var times = function times(iterations, callback) {
  var result = [];

  for (var i = 0; i < iterations; i++) {
    result.push(callback(i));
  }

  return result;
};


//# sourceMappingURL=data-fns.esm.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
  static deleteProject(i){
    // if(this.projectList[i]==this.currentProject){
    //   if(this.projectList[i+1]!=undefined){
    //     this.currentProject=this.projectList[i+1]
    //   }else if(this.projectList[i-1]!=undefined){
    //     this.currentProject=this.projectList[i-1]
    //   }else{
    //     this.currentProject='No Projects';
    //   }
    // }
    this.projectList.splice(i, 1);
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
  done=false;
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
/* harmony import */ var data_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data-fns */ "./node_modules/data-fns/dist/data-fns.esm.js");









class UI{
  static init(){
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
  }
  static projectRender(){
    this.projectList.innerHTML = '';
    for(let i=0; i<_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.length; i++){
      const trashIcon = document.createElement('img');
      trashIcon.classList.add('trashIcon')
      const projectItem = document.createElement('div');
      projectItem.classList.add('projectItem');
      if(_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[i]==_project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject){
        projectItem.classList.add('current');
      }
      projectItem.setAttribute('data-index',i);
      projectItem.textContent = _project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[i];
      trashIcon.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_3__;
      projectItem.append(trashIcon)
      this.projectList.append(projectItem);
    }
  }
  static contentRender(){
    this.contentHeading.textContent = _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject;
    this.tasksRender();
  }
  static tasksRender(){
    this.tasks.innerHTML='';
    for(let i=0; i<_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList.length; i++){
      if(_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].project != _project__WEBPACK_IMPORTED_MODULE_2__["default"].currentProject){
        continue;
      }
      //create dom element
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.classList.add('checkBox');
      const taskItem = document.createElement('div');
      taskItem.classList.add('taskItem');
      if(_todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].done){
        taskItem.classList.add('done');
        checkBox.checked = true;
      }
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
      taskItem.append(checkBox, taskTitle, dueDate, starIcon, trashIcon);
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
    this.checkBox = document.querySelectorAll('.checkBox');
    this.projectItemTrashIcon = document.querySelectorAll('.projectItem .trashIcon');
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
    this.checkBox.forEach((e)=>{
      e.addEventListener('change', this.checkBoxChange.bind(this, e));
    });
    this.projectItemTrashIcon.forEach((e)=>{
      e.addEventListener('click', this.projectItemTrashIconClk.bind(this, e));
    })
  }
  static projectItemTrashIconClk(e){
    e.stopPropagation();
    const index = this.indexByElem(e);
    _project__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(index);
    console.log(_project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList)
    this.render();
  }
  static checkBoxChange(e){
    const index = this.indexByElem(e);
    if(e.checked){
      _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[index].done=true;
    }else{
      _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[index].done=false;
    }
    this.render();
  }
  static taskIPStarIconClk(){
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
    console.log('jik');
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

/***/ "./src/font/SignikaNegative.ttf":
/*!**************************************!*\
  !*** ./src/font/SignikaNegative.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37ddbcb50da6efb0e1d2.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



document.addEventListener('DOMContentLoaded', _modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"].init());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBOEI7QUFDVDs7QUFFckIsOENBQThDLHdEQUFPLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0YS1mbnMvZGlzdC9kYXRhLWZucy5lc20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvU2lnbmlrYU5lZ2F0aXZlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIC0tcHJpbWFyeS1jbHI6ICM1NGJhYjk7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM5ZWQyYzY7XFxuICAtLWJnYzogI2Y3ZWNkZTtcXG4gIC0tYmdjLWQ6ICNlOWRhYzE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbn1cXG5odG1sLCBib2R5e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcbmJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5idXR0b246YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdyZXk7XFxufVxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuLmFkZFRhc2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmFkZFRhc2tQcm9tcHR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udGFza3N7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50YXNrSXRlbXtcXG4gIGhlaWdodDogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi50YXNrVGl0bGV7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50YXNrSXRlbSBpbWd7XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG4udGFza0lucHV0IGltZ3tcXG4gIGhlaWdodDogMS4yZW07XFxufVxcbi5zaWRlYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6MTBweDtcXG59XFxuLnByb2plY3R7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XFxuICBwbGFjZS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QgLmhlYWRpbmd7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmhlYWRpbmd7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5wcm9qZWN0IGJ1dHRvbntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdElucHV0e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMnB4O1xcbn1cXG4ucHJvamVjdElucHV0IGltZ3tcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnByb2plY3RJbnB1dCAub3B0aW9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3QgLm9wdGlvbnMgaW1ne1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4ucHJvamVjdElucHV0IC5vcHRpb25zIGltZzpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG4ucHJvamVjdExpc3R7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0SXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG4ucHJvamVjdEl0ZW06aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuLnByb2plY3RJdGVtLmN1cnJlbnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gIGNvbG9yOmJsYWNrO1xcbn1cXG4udGFza0l0ZW0uZG9uZXtcXG4gIGNvbG9yOndoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4uY2hlY2tCb3g6aG92ZXIsLnRhc2tJdGVtIGltZzpob3ZlciwgLnN0YXJJY29uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdEl0ZW0gaW1ne1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3RJdGVtOmhvdmVyIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUFvQztBQUN0QztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2FOZWdhdGl2ZSc7XFxuICBzcmM6IHVybCguL2ZvbnQvU2lnbmlrYU5lZ2F0aXZlLnR0Zik7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgLS1wcmltYXJ5LWNscjogIzU0YmFiOTtcXG4gIC0tc2Vjb25kYXJ5LWNscjogIzllZDJjNjtcXG4gIC0tYmdjOiAjZjdlY2RlO1xcbiAgLS1iZ2MtZDogI2U5ZGFjMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2FOZWdhdGl2ZSc7XFxufVxcbmh0bWwsIGJvZHl7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHl7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG59XFxuYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbmJ1dHRvbjphY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXG59XFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG4uYWRkVGFza3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uYWRkVGFza1Byb21wdHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxufVxcbmlucHV0e1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50YXNrc3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogNTB2dztcXG4gIGdhcDogMjBweDtcXG59XFxuLnRhc2tJdGVte1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnRhc2tUaXRsZXtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRhc2tJdGVtIGltZ3tcXG4gIGhlaWdodDogMS4yZW07XFxufVxcbi50YXNrSW5wdXQgaW1ne1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuLnNpZGViYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDoxMHB4O1xcbn1cXG4ucHJvamVjdHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcXG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucHJvamVjdCAuaGVhZGluZ3tcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29udGVudCAuaGVhZGluZ3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLnByb2plY3QgYnV0dG9ue1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5wcm9qZWN0SW5wdXR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAycHg7XFxufVxcbi5wcm9qZWN0SW5wdXQgaW1ne1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucHJvamVjdElucHV0IC5vcHRpb25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ucHJvamVjdCAub3B0aW9ucyBpbWd7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wcm9qZWN0SW5wdXQgLm9wdGlvbnMgaW1nOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbi5wcm9qZWN0TGlzdHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3RJdGVte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgY29sb3I6d2hpdGU7XFxufVxcbi5wcm9qZWN0SXRlbTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG4ucHJvamVjdEl0ZW0uY3VycmVudHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgY29sb3I6YmxhY2s7XFxufVxcbi50YXNrSXRlbS5kb25le1xcbiAgY29sb3I6d2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbi5jaGVja0JveDpob3ZlciwudGFza0l0ZW0gaW1nOmhvdmVyLCAuc3Rhckljb246aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0SXRlbSBpbWd7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OmF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdEl0ZW06aG92ZXIgaW1ne1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBnZXRJdGVtQ3ljbGljID0gZnVuY3Rpb24gZ2V0SXRlbUN5Y2xpYyhpbmRleCwgYXJyYXkpIHtcbiAgdmFyIGlkID0gaW5kZXggJSBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBhcnJheVtpZF07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KGxpc3QsIGFtb3VudCkge1xuICByZXR1cm4gW10uY29uY2F0KGxpc3Quc2xpY2UoYW1vdW50KSwgbGlzdC5zbGljZSgwLCBhbW91bnQpKTtcbn07XG5cbnZhciBwYXR0ZXJuQ2h1bmtzID0gZnVuY3Rpb24gcGF0dGVybkNodW5rcyhhcnJheSwgcGF0dGVybikge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgdmFyIF9hcnJheSA9IFtdLmNvbmNhdChhcnJheSk7XG5cbiAgdmFyIGkgPSAwO1xuXG4gIHdoaWxlIChfYXJyYXkubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5wdXNoKF9hcnJheS5zcGxpY2UoMCwgZ2V0SXRlbUN5Y2xpYyhpLCBwYXR0ZXJuKSkpO1xuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgcmVwbGFjZUF0ID0gZnVuY3Rpb24gcmVwbGFjZUF0KGFycmF5LCBpbmRleCwgcmVwbGFjZW1lbnRGbikge1xuICB2YXIgaXRlbSA9IGFycmF5W2luZGV4XTtcbiAgcmV0dXJuIGFycmF5LnNsaWNlKDAsIGluZGV4KS5jb25jYXQoW3JlcGxhY2VtZW50Rm4oaXRlbSldKS5jb25jYXQoYXJyYXkuc2xpY2UoaW5kZXggKyAxKSk7XG59O1xuXG52YXIgdGltZXMgPSBmdW5jdGlvbiB0aW1lcyhpdGVyYXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChjYWxsYmFjayhpKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgZ2V0SXRlbUN5Y2xpYywgb2Zmc2V0LCBwYXR0ZXJuQ2h1bmtzLCByZXBsYWNlQXQsIHRpbWVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhLWZucy5lc20uanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3N7XG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IFtcIkdlbmVyYWxcIl07XG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHRoaXMucHJvamVjdExpc3RbMF07XG5cbiAgc3RhdGljIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9XG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KGkpe1xuICAgIC8vIGlmKHRoaXMucHJvamVjdExpc3RbaV09PXRoaXMuY3VycmVudFByb2plY3Qpe1xuICAgIC8vICAgaWYodGhpcy5wcm9qZWN0TGlzdFtpKzFdIT11bmRlZmluZWQpe1xuICAgIC8vICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0PXRoaXMucHJvamVjdExpc3RbaSsxXVxuICAgIC8vICAgfWVsc2UgaWYodGhpcy5wcm9qZWN0TGlzdFtpLTFdIT11bmRlZmluZWQpe1xuICAgIC8vICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0PXRoaXMucHJvamVjdExpc3RbaS0xXVxuICAgIC8vICAgfWVsc2V7XG4gICAgLy8gICAgIHRoaXMuY3VycmVudFByb2plY3Q9J05vIFByb2plY3RzJztcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuICB0aXRsZTtcbiAgZHVlRGF0ZTtcbiAgcHJvamVjdDtcbiAgcHJpb3JpdHkgPSBmYWxzZTtcbiAgZG9uZT1mYWxzZTtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByb2plY3Qpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcbiAgc3RhdGljIHRvZG9MaXN0PVtdO1xuXG4gIHN0YXRpYyBhZGRUYXNrVG9MaXN0KHRhc2spe1xuICAgIHRoaXMudG9kb0xpc3QucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKGkpe1xuICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICB9XG4gIHN0YXRpYyBjaGFuZ2VQcmlvcml0eShpKXtcbiAgICBpZih0aGlzLnRvZG9MaXN0W2ldLnByaW9yaXR5PT10cnVlKXtcbiAgICAgIHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9ZmFsc2VcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IFRvZG9zIGZyb20gJy4vdG9kb3MnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL2ltZy90cmFzaC5wbmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnBuZyc7XG5pbXBvcnQgU3Rhckljb24gZnJvbSAnLi4vaW1nL3N0YXIucG5nJztcbmltcG9ydCBTdGFyR29sZEljb24gZnJvbSAnLi4vaW1nL3N0YXJHb2xkLnBuZyc7XG5pbXBvcnQgRGF0YSBmcm9tICdkYXRhLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuICBzdGF0aWMgaW5pdCgpe1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIHN0YXRpYyByZW5kZXIoKXtcbiAgICB0aGlzLnByb2plY3RSZW5kZXIoKTtcbiAgICB0aGlzLmNvbnRlbnRSZW5kZXIoKTtcbiAgICB0aGlzLmRvbUNhY2hlKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRSZWxvYWQoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdFJlbmRlcigpe1xuICAgIHRoaXMucHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yKGxldCBpPTA7IGk8UHJvamVjdHMucHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgndHJhc2hJY29uJylcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbScpO1xuICAgICAgaWYoUHJvamVjdHMucHJvamVjdExpc3RbaV09PVByb2plY3RzLmN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgfVxuICAgICAgcHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxpKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gUHJvamVjdHMucHJvamVjdExpc3RbaV07XG4gICAgICB0cmFzaEljb24uc3JjID0gVHJhc2hJY29uO1xuICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kKHRyYXNoSWNvbilcbiAgICAgIHRoaXMucHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RJdGVtKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGNvbnRlbnRSZW5kZXIoKXtcbiAgICB0aGlzLmNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gUHJvamVjdHMuY3VycmVudFByb2plY3Q7XG4gICAgdGhpcy50YXNrc1JlbmRlcigpO1xuICB9XG4gIHN0YXRpYyB0YXNrc1JlbmRlcigpe1xuICAgIHRoaXMudGFza3MuaW5uZXJIVE1MPScnO1xuICAgIGZvcihsZXQgaT0wOyBpPFRvZG9zLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKFRvZG9zLnRvZG9MaXN0W2ldLnByb2plY3QgIT0gUHJvamVjdHMuY3VycmVudFByb2plY3Qpe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vY3JlYXRlIGRvbSBlbGVtZW50XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQm94Jyk7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFza0l0ZW0nKTtcbiAgICAgIGlmKFRvZG9zLnRvZG9MaXN0W2ldLmRvbmUpe1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrVGl0bGUnKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgndHJhc2hJY29uJylcbiAgICAgIGNvbnN0IHN0YXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBzdGFySWNvbi5jbGFzc0xpc3QuYWRkKCdzdGFySWNvbicpXG5cbiAgICAgIC8vYWRkIGNvbnRlbnRcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IFRvZG9zLnRvZG9MaXN0W2ldLnRpdGxlO1xuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFRvZG9zLnRvZG9MaXN0W2ldLmR1ZURhdGU7XG4gICAgICB0cmFzaEljb24uc3JjID0gVHJhc2hJY29uO1xuICAgICAgaWYoVG9kb3MudG9kb0xpc3RbaV0ucHJpb3JpdHkpe1xuICAgICAgICBzdGFySWNvbi5zcmMgPSBTdGFyR29sZEljb247XG4gICAgICB9ZWxzZXtcbiAgICAgICAgc3Rhckljb24uc3JjID0gU3Rhckljb247XG4gICAgICB9XG5cbiAgICAgIC8vYXBwZW5kIHRvIGRvbVxuICAgICAgdGFza0l0ZW0uYXBwZW5kKGNoZWNrQm94LCB0YXNrVGl0bGUsIGR1ZURhdGUsIHN0YXJJY29uLCB0cmFzaEljb24pO1xuICAgICAgdGhpcy50YXNrcy5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZG9tQ2FjaGUoKXtcbiAgICB0aGlzLmNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybUJ0bicpO1xuICAgIHRoaXMuY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ0bicpO1xuICAgIHRoaXMudGFza1RpdGxlSVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlSVAnKTtcbiAgICB0aGlzLmR1ZURhdGVJUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlSVAnKTtcbiAgICB0aGlzLnRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgdGhpcy5hZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tCdG4nKVxuICAgIHRoaXMuYWRkVGFza1Byb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrUHJvbXB0Jyk7XG4gICAgdGhpcy50cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2hJY29uJyk7XG4gICAgdGhpcy5jb250ZW50SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50IC5oZWFkaW5nJyk7XG4gICAgdGhpcy5wcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdG4nKTtcbiAgICB0aGlzLnByb2plY3RUaXRsZUlQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZUlQJyk7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0Jyk7XG4gICAgdGhpcy5wcm9qZWN0VGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGljaycpO1xuICAgIHRoaXMucHJvamVjdENyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDcm9zcycpO1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICB0aGlzLnByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgdGhpcy5zdGFySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrSXRlbSAuc3Rhckljb24nKTtcbiAgICB0aGlzLnRhc2tJUFN0YXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJbnB1dCAuc3Rhckljb24nKTtcbiAgICB0aGlzLmNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrQm94Jyk7XG4gICAgdGhpcy5wcm9qZWN0SXRlbVRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0SXRlbSAudHJhc2hJY29uJyk7XG4gIH1cbiAgc3RhdGljIGJpbmRFdmVudCgpe1xuICAgIHRoaXMuY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY29uZmlybUJ0bkNsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZFRhc2tCdG5DbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbEJ0bkNsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnByb2plY3RBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RBZGRCdG5DbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wcm9qZWN0VGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvamVjdFRpY2tDbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wcm9qZWN0Q3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RDcm9zc0Nsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnRhc2tJUFN0YXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50YXNrSVBTdGFySWNvbkNsay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50UmVsb2FkKCl7XG4gICAgdGhpcy50cmFzaEljb24uZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRyYXNoSWNvbkNsay5iaW5kKHRoaXMsIGUpKVxuICAgIH0pO1xuICAgIHRoaXMucHJvamVjdEl0ZW0uZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RJdGVtQ2xrLmJpbmQodGhpcywgZSkpXG4gICAgfSk7XG4gICAgdGhpcy5zdGFySWNvbi5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3Rhckljb25DbGsuYmluZCh0aGlzLCBlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGVja0JveC5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoZWNrQm94Q2hhbmdlLmJpbmQodGhpcywgZSkpO1xuICAgIH0pO1xuICAgIHRoaXMucHJvamVjdEl0ZW1UcmFzaEljb24uZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RJdGVtVHJhc2hJY29uQ2xrLmJpbmQodGhpcywgZSkpO1xuICAgIH0pXG4gIH1cbiAgc3RhdGljIHByb2plY3RJdGVtVHJhc2hJY29uQ2xrKGUpe1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4QnlFbGVtKGUpO1xuICAgIFByb2plY3RzLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKFByb2plY3RzLnByb2plY3RMaXN0KVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIGNoZWNrQm94Q2hhbmdlKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBpZihlLmNoZWNrZWQpe1xuICAgICAgVG9kb3MudG9kb0xpc3RbaW5kZXhdLmRvbmU9dHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIFRvZG9zLnRvZG9MaXN0W2luZGV4XS5kb25lPWZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyB0YXNrSVBTdGFySWNvbkNsaygpe1xuICAgIGlmKHRoaXMudGFza0lQU3Rhckljb24uc3JjID09IFN0YXJHb2xkSWNvbil7XG4gICAgICB0aGlzLnRhc2tJUFN0YXJJY29uLnNyYyA9IFN0YXJJY29uO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy50YXNrSVBTdGFySWNvbi5zcmM9U3RhckdvbGRJY29uO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgc3Rhckljb25DbGsoZSl7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4QnlFbGVtKGUpO1xuICAgIFRvZG9zLmNoYW5nZVByaW9yaXR5KGluZGV4KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0SXRlbUNsayhlKXtcbiAgICBjb25zb2xlLmxvZygnamlrJyk7XG4gICAgUHJvamVjdHMuY3VycmVudFByb2plY3QgPSBlLnRleHRDb250ZW50O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIHByb2plY3RDcm9zc0NsaygpeyBcbiAgICB0aGlzLnByb2plY3RBZGRCdG4uc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICB0aGlzLnByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0VGlja0Nsaygpe1xuICAgIGlmKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWU9PScnKXtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0LmluY2x1ZGVzKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWUpKXtcbiAgICAgIGFsZXJ0KCdwcm9qZWN0IG5hbWUgYWxyZWFzZHkgZXhpc3QhJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdFRvTGlzdCh0aGlzLnByb2plY3RUaXRsZUlQLnZhbHVlKTtcblxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdEFkZEJ0bkNsaygpe1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7IFxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gIH1cbiAgc3RhdGljIGluZGV4QnlFbGVtKGUpe1xuICAgIHJldHVybiBlLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgfVxuICBzdGF0aWMgdHJhc2hJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5kZWxldGVUYXNrKGluZGV4KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBjYW5jZWxCdG5DbGsoKXtcbiAgICB0aGlzLnNob3dBZGRCdG4oKTtcbiAgfVxuICBzdGF0aWMgYWRkVGFza0J0bkNsaygpe1xuICAgIHRoaXMuYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuYWRkVGFza1Byb21wdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG4gIHN0YXRpYyBjb25maXJtQnRuQ2xrKCl7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGhpcy50YXNrVGl0bGVJUC52YWx1ZSwgdGhpcy5kdWVEYXRlSVAudmFsdWUsIFByb2plY3RzLmN1cnJlbnRQcm9qZWN0XG4gICAgKTtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYz09U3RhckdvbGRJY29uKXtcbiAgICAgIHRhc2sucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gICAgVG9kb3MuYWRkVGFza1RvTGlzdCh0YXNrKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBzaG93QWRkQnRuKCl7XG4gICAgdGhpcy5hZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy5hZGRUYXNrUHJvbXB0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmluaXQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9