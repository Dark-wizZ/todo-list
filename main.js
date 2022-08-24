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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'SignikaNegative';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: 1fr 6fr;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  gap:10px;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap: 2px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n}\n.checkBox:hover,.taskItem img:hover{\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,4CAAoC;AACtC;AACA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;AAChC;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,SAAS;AACX;AACA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,QAAQ;AACV;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;EACE,sCAAsC;AACxC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: 'SignikaNegative';\n  src: url(./font/SignikaNegative.ttf);\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: 1fr 6fr;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  gap:10px;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap: 2px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n}\n.checkBox:hover,.taskItem img:hover{\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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
    this.checkBox = document.querySelectorAll('.checkBox')
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
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsbUNBQW1DLHlEQUF5RCxHQUFHLElBQUksY0FBYyxlQUFlLGNBQWMsMkJBQTJCLDZCQUE2QixtQkFBbUIscUJBQXFCLHVCQUF1QiwyQkFBMkIsbUNBQW1DLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxPQUFPLGtCQUFrQixpQ0FBaUMsbUNBQW1DLEdBQUcsU0FBUyx5Q0FBeUMsaUJBQWlCLHNCQUFzQixHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRyxlQUFlLG9CQUFvQixpQ0FBaUMsR0FBRyxXQUFXLGtCQUFrQixrQkFBa0IsMEJBQTBCLGNBQWMsc0JBQXNCLEdBQUcsV0FBVyxrQkFBa0IsMEJBQTBCLHdCQUF3QixjQUFjLEdBQUcsaUJBQWlCLGtCQUFrQixjQUFjLEdBQUcsUUFBUSwyQ0FBMkMsaUJBQWlCLEdBQUcsU0FBUyxrQkFBa0IsZ0JBQWdCLGNBQWMsR0FBRyxZQUFZLGtCQUFrQix5Q0FBeUMsa0JBQWtCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHdCQUF3QixjQUFjLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcseUNBQXlDLGtCQUFrQixrQkFBa0IsYUFBYSxHQUFHLFdBQVcsa0JBQWtCLDRCQUE0Qix5QkFBeUIsY0FBYyxHQUFHLG9CQUFvQixzQkFBc0IsaUJBQWlCLEdBQUcsb0JBQW9CLHVCQUF1QixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0IsYUFBYSxHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyx5QkFBeUIsa0JBQWtCLGtDQUFrQyxHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxtQ0FBbUMsMkNBQTJDLEdBQUcsZUFBZSxzQkFBc0Isa0JBQWtCLGNBQWMsb0JBQW9CLEdBQUcsZUFBZSxvQkFBb0IscUJBQXFCLGdCQUFnQixHQUFHLHFCQUFxQiwyQ0FBMkMsR0FBRyx1QkFBdUIsMkNBQTJDLGdCQUFnQixHQUFHLGlCQUFpQixnQkFBZ0Isa0NBQWtDLEdBQUcsc0NBQXNDLG9CQUFvQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsc0NBQXNDLG1DQUFtQyx5Q0FBeUMsR0FBRyxJQUFJLGNBQWMsZUFBZSxjQUFjLDJCQUEyQiw2QkFBNkIsbUJBQW1CLHFCQUFxQix1QkFBdUIsMkJBQTJCLG1DQUFtQyxHQUFHLGFBQWEsaUJBQWlCLEdBQUcsT0FBTyxrQkFBa0IsaUNBQWlDLG1DQUFtQyxHQUFHLFNBQVMseUNBQXlDLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0IsMkNBQTJDLEdBQUcsZUFBZSxvQkFBb0IsaUNBQWlDLEdBQUcsV0FBVyxrQkFBa0Isa0JBQWtCLDBCQUEwQixjQUFjLHNCQUFzQixHQUFHLFdBQVcsa0JBQWtCLDBCQUEwQix3QkFBd0IsY0FBYyxHQUFHLGlCQUFpQixrQkFBa0IsY0FBYyxHQUFHLFFBQVEsMkNBQTJDLGlCQUFpQixHQUFHLFNBQVMsa0JBQWtCLGdCQUFnQixjQUFjLEdBQUcsWUFBWSxrQkFBa0IseUNBQXlDLGtCQUFrQix3QkFBd0Isc0JBQXNCLHdCQUF3Qix3QkFBd0IsY0FBYyxHQUFHLGFBQWEsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxXQUFXLHlDQUF5QyxrQkFBa0Isa0JBQWtCLGFBQWEsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIseUJBQXlCLGNBQWMsR0FBRyxvQkFBb0Isc0JBQXNCLGlCQUFpQixHQUFHLG9CQUFvQix1QkFBdUIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxnQkFBZ0Isa0JBQWtCLGFBQWEsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcseUJBQXlCLGtCQUFrQixrQ0FBa0MsR0FBRyx3QkFBd0IsaUJBQWlCLEdBQUcsbUNBQW1DLDJDQUEyQyxHQUFHLGVBQWUsc0JBQXNCLGtCQUFrQixjQUFjLG9CQUFvQixHQUFHLGVBQWUsb0JBQW9CLHFCQUFxQixnQkFBZ0IsR0FBRyxxQkFBcUIsMkNBQTJDLEdBQUcsdUJBQXVCLDJDQUEyQyxnQkFBZ0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGtDQUFrQyxHQUFHLHNDQUFzQyxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDNzJNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVrRTtBQUNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1h5Qjs7QUFFVjtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjBCO0FBQ0U7QUFDSztBQUNRO0FBQ0Y7QUFDQTtBQUNRO0FBQ25COztBQUViO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLG1FQUEyQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxTQUFTLDREQUFvQixLQUFLLCtEQUF1QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNERBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLDhEQUFxQixFQUFFO0FBQzFDLFNBQVMsdURBQWMsZUFBZSwrREFBdUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdURBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVEQUFjO0FBQzVDLDRCQUE0Qix1REFBYztBQUMxQyxzQkFBc0IsMkNBQVM7QUFDL0IsU0FBUyx1REFBYztBQUN2Qix1QkFBdUIsOENBQVk7QUFDbkMsT0FBTztBQUNQLHVCQUF1QiwwQ0FBUTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixLQUFLO0FBQ0wsTUFBTSx1REFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBWTtBQUM5QyxnQ0FBZ0MsMENBQVE7QUFDeEMsS0FBSztBQUNMLDhCQUE4Qiw4Q0FBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFFQUE2QjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUF5Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QixvREFBb0QsK0RBQXVCO0FBQzNFO0FBQ0EsZ0NBQWdDLDhDQUFZO0FBQzVDO0FBQ0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6TUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1Q7O0FBRXJCLDhDQUE4Qyx3REFBTyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGEtZm5zL2Rpc3QvZGF0YS1mbnMuZXNtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L1NpZ25pa2FOZWdhdGl2ZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbmlrYU5lZ2F0aXZlJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuKntcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICAtLXByaW1hcnktY2xyOiAjNTRiYWI5O1xcbiAgLS1zZWNvbmRhcnktY2xyOiAjOWVkMmM2O1xcbiAgLS1iZ2M6ICNmN2VjZGU7XFxuICAtLWJnYy1kOiAjZTlkYWMxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnU2lnbmlrYU5lZ2F0aXZlJztcXG59XFxuaHRtbCwgYm9keXtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbn1cXG5idXR0b257XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuYnV0dG9uOmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcbn1cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcbi5hZGRUYXNre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5hZGRUYXNrUHJvbXB0e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMjBweDtcXG59XFxuaW5wdXR7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnRhc2tze1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4udGFza0l0ZW17XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udGFza1RpdGxle1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4udGFza0l0ZW0gaW1ne1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuLnRhc2tJbnB1dCBpbWd7XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG4uc2lkZWJhcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOjEwcHg7XFxufVxcbi5wcm9qZWN0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMDAlO1xcbiAgcGxhY2UtY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0IC5oZWFkaW5ne1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb250ZW50IC5oZWFkaW5ne1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ucHJvamVjdCBidXR0b257XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnByb2plY3RJbnB1dHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDJweDtcXG59XFxuLnByb2plY3RJbnB1dCBpbWd7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wcm9qZWN0SW5wdXQgLm9wdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5wcm9qZWN0IC5vcHRpb25zIGltZ3tcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnByb2plY3RJbnB1dCAub3B0aW9ucyBpbWc6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuLnByb2plY3RMaXN0e1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdEl0ZW17XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgY29sb3I6d2hpdGU7XFxufVxcbi5wcm9qZWN0SXRlbTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG4ucHJvamVjdEl0ZW0uY3VycmVudHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgY29sb3I6YmxhY2s7XFxufVxcbi50YXNrSXRlbS5kb25le1xcbiAgY29sb3I6d2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLmNoZWNrQm94OmhvdmVyLC50YXNrSXRlbSBpbWc6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsNENBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbiAgc3JjOiB1cmwoLi9mb250L1NpZ25pa2FOZWdhdGl2ZS50dGYpO1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIC0tcHJpbWFyeS1jbHI6ICM1NGJhYjk7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM5ZWQyYzY7XFxuICAtLWJnYzogI2Y3ZWNkZTtcXG4gIC0tYmdjLWQ6ICNlOWRhYzE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbn1cXG5odG1sLCBib2R5e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcbmJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5idXR0b246YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdyZXk7XFxufVxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuLmFkZFRhc2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmFkZFRhc2tQcm9tcHR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udGFza3N7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50YXNrSXRlbXtcXG4gIGhlaWdodDogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi50YXNrVGl0bGV7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50YXNrSXRlbSBpbWd7XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG4udGFza0lucHV0IGltZ3tcXG4gIGhlaWdodDogMS4yZW07XFxufVxcbi5zaWRlYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6MTBweDtcXG59XFxuLnByb2plY3R7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XFxuICBwbGFjZS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QgLmhlYWRpbmd7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmhlYWRpbmd7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5wcm9qZWN0IGJ1dHRvbntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdElucHV0e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMnB4O1xcbn1cXG4ucHJvamVjdElucHV0IGltZ3tcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnByb2plY3RJbnB1dCAub3B0aW9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3QgLm9wdGlvbnMgaW1ne1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4ucHJvamVjdElucHV0IC5vcHRpb25zIGltZzpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG4ucHJvamVjdExpc3R7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0SXRlbXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuLnByb2plY3RJdGVtOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbi5wcm9qZWN0SXRlbS5jdXJyZW50e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICBjb2xvcjpibGFjaztcXG59XFxuLnRhc2tJdGVtLmRvbmV7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4uY2hlY2tCb3g6aG92ZXIsLnRhc2tJdGVtIGltZzpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGdldEl0ZW1DeWNsaWMgPSBmdW5jdGlvbiBnZXRJdGVtQ3ljbGljKGluZGV4LCBhcnJheSkge1xuICB2YXIgaWQgPSBpbmRleCAlIGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGFycmF5W2lkXTtcbn07XG5cbnZhciBvZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQobGlzdCwgYW1vdW50KSB7XG4gIHJldHVybiBbXS5jb25jYXQobGlzdC5zbGljZShhbW91bnQpLCBsaXN0LnNsaWNlKDAsIGFtb3VudCkpO1xufTtcblxudmFyIHBhdHRlcm5DaHVua3MgPSBmdW5jdGlvbiBwYXR0ZXJuQ2h1bmtzKGFycmF5LCBwYXR0ZXJuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICB2YXIgX2FycmF5ID0gW10uY29uY2F0KGFycmF5KTtcblxuICB2YXIgaSA9IDA7XG5cbiAgd2hpbGUgKF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0LnB1c2goX2FycmF5LnNwbGljZSgwLCBnZXRJdGVtQ3ljbGljKGksIHBhdHRlcm4pKSk7XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZXBsYWNlQXQgPSBmdW5jdGlvbiByZXBsYWNlQXQoYXJyYXksIGluZGV4LCByZXBsYWNlbWVudEZuKSB7XG4gIHZhciBpdGVtID0gYXJyYXlbaW5kZXhdO1xuICByZXR1cm4gYXJyYXkuc2xpY2UoMCwgaW5kZXgpLmNvbmNhdChbcmVwbGFjZW1lbnRGbihpdGVtKV0pLmNvbmNhdChhcnJheS5zbGljZShpbmRleCArIDEpKTtcbn07XG5cbnZhciB0aW1lcyA9IGZ1bmN0aW9uIHRpbWVzKGl0ZXJhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGNhbGxiYWNrKGkpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgeyBnZXRJdGVtQ3ljbGljLCBvZmZzZXQsIHBhdHRlcm5DaHVua3MsIHJlcGxhY2VBdCwgdGltZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGEtZm5zLmVzbS5qcy5tYXBcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzc3tcbiAgc3RhdGljIHByb2plY3RMaXN0ID0gW1wiR2VuZXJhbFwiXTtcbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gdGhpcy5wcm9qZWN0TGlzdFswXTtcblxuICBzdGF0aWMgYWRkUHJvamVjdFRvTGlzdChwcm9qZWN0KXtcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gIHRpdGxlO1xuICBkdWVEYXRlO1xuICBwcm9qZWN0O1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBkb25lPWZhbHNlO1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdCl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuICBzdGF0aWMgdG9kb0xpc3Q9W107XG5cbiAgc3RhdGljIGFkZFRhc2tUb0xpc3QodGFzayl7XG4gICAgdGhpcy50b2RvTGlzdC5wdXNoKHRhc2spO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2soaSl7XG4gICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gIH1cbiAgc3RhdGljIGNoYW5nZVByaW9yaXR5KGkpe1xuICAgIGlmKHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9PXRydWUpe1xuICAgICAgdGhpcy50b2RvTGlzdFtpXS5wcmlvcml0eT1mYWxzZVxuICAgIH1lbHNle1xuICAgICAgdGhpcy50b2RvTGlzdFtpXS5wcmlvcml0eT10cnVlO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUcmFzaEljb24gZnJvbSAnLi4vaW1nL3RyYXNoLnBuZyc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi4vaW1nL2VkaXQucG5nJztcbmltcG9ydCBTdGFySWNvbiBmcm9tICcuLi9pbWcvc3Rhci5wbmcnO1xuaW1wb3J0IFN0YXJHb2xkSWNvbiBmcm9tICcuLi9pbWcvc3RhckdvbGQucG5nJztcbmltcG9ydCBEYXRhIGZyb20gJ2RhdGEtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5kb21DYWNoZSgpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIHRoaXMucHJvamVjdFJlbmRlcigpO1xuICAgIHRoaXMuY29udGVudFJlbmRlcigpO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudFJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0UmVuZGVyKCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IobGV0IGk9MDsgaTxQcm9qZWN0cy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcbiAgICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0W2ldPT1Qcm9qZWN0cy5jdXJyZW50UHJvamVjdCl7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsaSk7XG4gICAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IFByb2plY3RzLnByb2plY3RMaXN0W2ldO1xuICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEl0ZW0pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgY29udGVudFJlbmRlcigpe1xuICAgIHRoaXMuY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBQcm9qZWN0cy5jdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLnRhc2tzUmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIHRhc2tzUmVuZGVyKCl7XG4gICAgdGhpcy50YXNrcy5pbm5lckhUTUw9Jyc7XG4gICAgZm9yKGxldCBpPTA7IGk8VG9kb3MudG9kb0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoVG9kb3MudG9kb0xpc3RbaV0ucHJvamVjdCAhPSBQcm9qZWN0cy5jdXJyZW50UHJvamVjdCl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy9jcmVhdGUgZG9tIGVsZW1lbnRcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2tCb3gnKTtcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbScpO1xuICAgICAgaWYoVG9kb3MudG9kb0xpc3RbaV0uZG9uZSl7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUaXRsZScpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCd0cmFzaEljb24nKVxuICAgICAgY29uc3Qgc3Rhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHN0YXJJY29uLmNsYXNzTGlzdC5hZGQoJ3N0YXJJY29uJylcblxuICAgICAgLy9hZGQgY29udGVudFxuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gVG9kb3MudG9kb0xpc3RbaV0udGl0bGU7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gVG9kb3MudG9kb0xpc3RbaV0uZHVlRGF0ZTtcbiAgICAgIHRyYXNoSWNvbi5zcmMgPSBUcmFzaEljb247XG4gICAgICBpZihUb2Rvcy50b2RvTGlzdFtpXS5wcmlvcml0eSl7XG4gICAgICAgIHN0YXJJY29uLnNyYyA9IFN0YXJHb2xkSWNvbjtcbiAgICAgIH1lbHNle1xuICAgICAgICBzdGFySWNvbi5zcmMgPSBTdGFySWNvbjtcbiAgICAgIH1cblxuICAgICAgLy9hcHBlbmQgdG8gZG9tXG4gICAgICB0YXNrSXRlbS5hcHBlbmQoY2hlY2tCb3gsIHRhc2tUaXRsZSwgZHVlRGF0ZSwgc3Rhckljb24sIHRyYXNoSWNvbik7XG4gICAgICB0aGlzLnRhc2tzLmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBkb21DYWNoZSgpe1xuICAgIHRoaXMuY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtQnRuJyk7XG4gICAgdGhpcy5jYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnRuJyk7XG4gICAgdGhpcy50YXNrVGl0bGVJUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGl0bGVJUCcpO1xuICAgIHRoaXMuZHVlRGF0ZUlQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGVJUCcpO1xuICAgIHRoaXMudGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICB0aGlzLmFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J0bicpXG4gICAgdGhpcy5hZGRUYXNrUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tQcm9tcHQnKTtcbiAgICB0aGlzLnRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaEljb24nKTtcbiAgICB0aGlzLmNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgLmhlYWRpbmcnKTtcbiAgICB0aGlzLnByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ0bicpO1xuICAgIHRoaXMucHJvamVjdFRpdGxlSVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRpdGxlSVAnKTtcbiAgICB0aGlzLnByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5wdXQnKTtcbiAgICB0aGlzLnByb2plY3RUaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaWNrJyk7XG4gICAgdGhpcy5wcm9qZWN0Q3Jvc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENyb3NzJyk7XG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuICAgIHRoaXMucHJvamVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdEl0ZW0nKTtcbiAgICB0aGlzLnN0YXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tJdGVtIC5zdGFySWNvbicpO1xuICAgIHRoaXMudGFza0lQU3Rhckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0lucHV0IC5zdGFySWNvbicpO1xuICAgIHRoaXMuY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tCb3gnKVxuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnQoKXtcbiAgICB0aGlzLmNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNvbmZpcm1CdG5DbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUYXNrQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWxCdG5DbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wcm9qZWN0QWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9qZWN0QWRkQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMucHJvamVjdFRpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RUaWNrQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMucHJvamVjdENyb3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9qZWN0Q3Jvc3NDbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50YXNrSVBTdGFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudGFza0lQU3Rhckljb25DbGsuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RhdGljIGJpbmRFdmVudFJlbG9hZCgpe1xuICAgIHRoaXMudHJhc2hJY29uLmZvckVhY2goKGUpPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50cmFzaEljb25DbGsuYmluZCh0aGlzLCBlKSlcbiAgICB9KTtcbiAgICB0aGlzLnByb2plY3RJdGVtLmZvckVhY2goKGUpPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9qZWN0SXRlbUNsay5iaW5kKHRoaXMsIGUpKVxuICAgIH0pO1xuICAgIHRoaXMuc3Rhckljb24uZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0YXJJY29uQ2xrLmJpbmQodGhpcywgZSkpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hlY2tCb3guZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGVja0JveENoYW5nZS5iaW5kKHRoaXMsIGUpKTtcbiAgICB9KVxuICB9XG4gIHN0YXRpYyBjaGVja0JveENoYW5nZShlKXtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhCeUVsZW0oZSk7XG4gICAgaWYoZS5jaGVja2VkKXtcbiAgICAgIFRvZG9zLnRvZG9MaXN0W2luZGV4XS5kb25lPXRydWU7XG4gICAgfWVsc2V7XG4gICAgICBUb2Rvcy50b2RvTGlzdFtpbmRleF0uZG9uZT1mYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgdGFza0lQU3Rhckljb25DbGsoKXtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYyA9PSBTdGFyR29sZEljb24pe1xuICAgICAgdGhpcy50YXNrSVBTdGFySWNvbi5zcmMgPSBTdGFySWNvbjtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudGFza0lQU3Rhckljb24uc3JjPVN0YXJHb2xkSWNvbjtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHN0YXJJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5jaGFuZ2VQcmlvcml0eShpbmRleCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdEl0ZW1DbGsoZSl7XG4gICAgUHJvamVjdHMuY3VycmVudFByb2plY3QgPSBlLnRleHRDb250ZW50O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgc3RhdGljIHByb2plY3RDcm9zc0NsaygpeyBcbiAgICB0aGlzLnByb2plY3RBZGRCdG4uc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICB0aGlzLnByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0VGlja0Nsaygpe1xuICAgIGlmKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWU9PScnKXtcbiAgICAgIGFsZXJ0KFwiVGl0bGUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0LmluY2x1ZGVzKHRoaXMucHJvamVjdFRpdGxlSVAudmFsdWUpKXtcbiAgICAgIGFsZXJ0KCdwcm9qZWN0IG5hbWUgYWxyZWFzZHkgZXhpc3QhJylcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdFRvTGlzdCh0aGlzLnByb2plY3RUaXRsZUlQLnZhbHVlKTtcblxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcHJvamVjdEFkZEJ0bkNsaygpe1xuICAgIHRoaXMucHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7IFxuICAgIHRoaXMucHJvamVjdEFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gIH1cbiAgc3RhdGljIGluZGV4QnlFbGVtKGUpe1xuICAgIHJldHVybiBlLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgfVxuICBzdGF0aWMgdHJhc2hJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5kZWxldGVUYXNrKGluZGV4KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBjYW5jZWxCdG5DbGsoKXtcbiAgICB0aGlzLnNob3dBZGRCdG4oKTtcbiAgfVxuICBzdGF0aWMgYWRkVGFza0J0bkNsaygpe1xuICAgIHRoaXMuYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuYWRkVGFza1Byb21wdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG4gIHN0YXRpYyBjb25maXJtQnRuQ2xrKCl7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGhpcy50YXNrVGl0bGVJUC52YWx1ZSwgdGhpcy5kdWVEYXRlSVAudmFsdWUsIFByb2plY3RzLmN1cnJlbnRQcm9qZWN0XG4gICAgKTtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYz09U3RhckdvbGRJY29uKXtcbiAgICAgIHRhc2sucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gICAgVG9kb3MuYWRkVGFza1RvTGlzdCh0YXNrKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyBzaG93QWRkQnRuKCl7XG4gICAgdGhpcy5hZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy5hZGRUYXNrUHJvbXB0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmluaXQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9