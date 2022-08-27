/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./font/SignikaNegative.ttf */ "./src/font/SignikaNegative.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@font-face {\n  font-family: 'SignikaNegative';\n  src: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ");\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: minmax(150px, max-content) 1fr;\n  grid-template-rows: 1fr auto;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n  flex-wrap: wrap;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  padding-right:2px; \n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap:10px;\n  min-width: fit-content;\n  grid-row: 1/-1;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap:10px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n  background-color: grey;\n}\n.checkBox:hover,.taskItem img:hover, .starIcon:hover{\n  cursor: pointer;\n}\n.projectItem img{\n  height: 1.3rem;\n  margin-left:auto;\n  display: none;\n}\n.projectItem:hover:not(.general) img{\n  display: block;\n}\n.error{\n  font-size: 0.8rem;\n  color:red;\n}\n.footer{\n  background-color: var(--bgc-d);\n  text-align: center;\n}\n.title{\n  font-size: 2rem;\n  font-weight: 900;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,8BAA8B;EAC9B,4CAAoC;AACtC;AACA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,qDAAqD;EACrD,4BAA4B;AAC9B;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,sCAAsC;AACxC;AACA;EACE,eAAe;EACf,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;AACA;EACE,aAAa;EACb,WAAW;EACX,SAAS;AACX;AACA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,4BAA4B;EAC5B,QAAQ;EACR,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,QAAQ;AACV;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;EACE,sCAAsC;AACxC;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,sCAAsC;AACxC;AACA;EACE,sCAAsC;EACtC,WAAW;AACb;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,SAAS;AACX;AACA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB",
            sourcesContent: [
              "@font-face {\n  font-family: 'SignikaNegative';\n  src: url(./font/SignikaNegative.ttf);\n}\n*{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  --primary-clr: #54bab9;\n  --secondary-clr: #9ed2c6;\n  --bgc: #f7ecde;\n  --bgc-d: #e9dac1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-family: 'SignikaNegative';\n}\nhtml, body{\n  height: 100%;\n}\nbody{\n  display: grid;\n  background-color: var(--bgc);\n  grid-template-columns: minmax(150px, max-content) 1fr;\n  grid-template-rows: 1fr auto;\n}\nbutton{\n  background-color: var(--primary-clr);\n  color: white;\n  padding: 5px 10px;\n}\nbutton:active{\n  background-color: var(--secondary-clr);\n}\nbutton:hover{\n  cursor: pointer;\n  box-shadow: 3px 3px 5px grey;\n}\n.content{\n  display: grid;\n  padding: 50px;\n  place-content: center;\n  gap: 50px;\n  align-self: start;\n}\n.addTask{\n  display: flex;\n  place-content: center;\n  place-items: center;\n  gap: 10px;\n}\n.addTaskPrompt{\n  display: none;\n  gap: 20px;\n  flex-wrap: wrap;\n}\ninput{\n  border: 1px solid var(--secondary-clr);\n  padding: 5px;\n}\n.tasks{\n  display: grid;\n  width: 50vw;\n  gap: 20px;\n}\n.taskItem{\n  height: 1.5em;\n  background-color: var(--primary-clr);\n  display: flex;\n  color: rgb(0, 0, 0);\n  padding: 5px 10px;\n  padding-right:2px; \n  align-items: center;\n  align-items: center;\n  gap: 10px;\n}\n.taskTitle{\n  margin-right: auto;\n}\n.taskItem img{\n  height: 1.2em;\n}\n.taskInput img{\n  height: 1.2em;\n}\n.sidebar{\n  background-color: var(--primary-clr);\n  padding: 10px;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap:10px;\n  min-width: fit-content;\n  grid-row: 1/-1;\n}\n.project{\n  display: grid;\n  grid-auto-columns: 100%;\n  place-content: start;\n  gap: 10px;\n}\n.project .heading{\n  font-size: 1.5rem;\n  color: white;\n}\n.content .heading{\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.project button{\n  border: 1px solid white;\n}\n.projectInput{\n  display: none;\n  gap:10px;\n}\n.projectInput img{\n  height: 30px;\n}\n.projectInput .options{\n  display: flex;\n  justify-content: space-around;\n}\n.project .options img{\n  padding: 5px;\n}\n.projectInput .options img:hover{\n  background-color: var(--secondary-clr);\n}\n.projectList{\n  font-size: 1.2rem;\n  display: grid;\n  gap: 10px;\n  min-width: 100%;\n}\n.projectItem{\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 3px 5px;\n  color:white;\n}\n.projectItem:hover{\n  background-color: var(--secondary-clr);\n}\n.projectItem.current{\n  background-color: var(--secondary-clr);\n  color:black;\n}\n.taskItem.done{\n  color:white;\n  text-decoration: line-through;\n  background-color: grey;\n}\n.checkBox:hover,.taskItem img:hover, .starIcon:hover{\n  cursor: pointer;\n}\n.projectItem img{\n  height: 1.3rem;\n  margin-left:auto;\n  display: none;\n}\n.projectItem:hover:not(.general) img{\n  display: block;\n}\n.error{\n  font-size: 0.8rem;\n  color:red;\n}\n.footer{\n  background-color: var(--bgc-d);\n  text-align: center;\n}\n.title{\n  font-size: 2rem;\n  font-weight: 900;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }

              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }

              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }

          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ storage: () => /* binding */ storage,
          /* harmony export */ storageAvailability: () =>
            /* binding */ storageAvailability,
          /* harmony export */
        });
        /* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");

        //check browser local storage capacity

        let storage;
        function isStorageAvailable(type) {
          try {
            storage = window[type];
            storage.setItem("x", "x");
            storage.removeItem("x");
            return true;
          } catch (e) {
            return (
              e instanceof DOMException &&
              (e.code === 22 ||
                e.code === 1014 ||
                e.name === "QuotaExceededError" ||
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
              storage &&
              storage.length !== 0
            );
          }
        }
        let storageAvailability = isStorageAvailable("localStorage");

        //initiate UI
        document.addEventListener(
          "DOMContentLoaded",
          _modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"].init()
        );

        /***/
      },

    /***/ "./src/modules/content.js":
      /*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Content,
          /* harmony export */
        });
        /* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./task */ "./src/modules/task.js");
        /* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
        /* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../img/trash.png */ "./src/img/trash.png");
        /* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../img/star.png */ "./src/img/star.png");
        /* harmony import */ var _img_starGold_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../img/starGold.png */ "./src/img/starGold.png"
          );
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./project */ "./src/modules/project.js");
        /* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./ui */ "./src/modules/ui.js");

        class Content {
          static init() {
            this.domCache();
            this.render();
            this.bindEvent();
          }
          static render() {
            this.contentRender();
            this.domCache();
            this.bindEventReload();
          }
          static domCache() {
            this.confirmBtn = document.querySelector(".confirmBtn");
            this.cancelBtn = document.querySelector(".cancelBtn");
            this.taskTitleIP = document.querySelector(".taskTitleIP");
            this.dueDateIP = document.querySelector(".dueDateIP");
            this.tasks = document.querySelector(".tasks");
            this.addTaskBtn = document.querySelector(".addTaskBtn");
            this.addTaskPrompt = document.querySelector(".addTaskPrompt");
            this.trashIcon = document.querySelectorAll(".trashIcon");
            this.contentHeading = document.querySelector(".content .heading");
            this.starIcon = document.querySelectorAll(".taskItem .starIcon");
            this.taskIPStarIcon = document.querySelector(
              ".taskInput .starIcon"
            );
            this.checkBox = document.querySelectorAll(".checkBox");
          }
          static bindEvent() {
            this.confirmBtn.addEventListener(
              "click",
              this.confirmBtnClk.bind(this)
            );
            this.addTaskBtn.addEventListener(
              "click",
              this.addTaskBtnClk.bind(this)
            );
            this.cancelBtn.addEventListener(
              "click",
              this.cancelBtnClk.bind(this)
            );
            this.taskIPStarIcon.addEventListener(
              "click",
              this.taskIPStarIconClk.bind(this)
            );
          }
          static bindEventReload() {
            this.trashIcon.forEach((e) => {
              e.addEventListener("click", this.trashIconClk.bind(this, e));
            });
            this.starIcon.forEach((e) => {
              e.addEventListener("click", this.starIconClk.bind(this, e));
            });
            this.checkBox.forEach((e) => {
              e.addEventListener("change", this.checkBoxChange.bind(this, e));
            });
          }
          static contentRender() {
            this.contentHeading.textContent =
              _project__WEBPACK_IMPORTED_MODULE_5__["default"].currentProject;
            this.tasksRender();
          }
          static tasksRender() {
            this.tasks.innerHTML = "";
            for (
              let i = 0;
              i <
              _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList.length;
              i++
            ) {
              if (
                _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i]
                  .project !=
                _project__WEBPACK_IMPORTED_MODULE_5__["default"].currentProject
              ) {
                continue;
              }
              //create dom element
              const checkBox = document.createElement("input");
              checkBox.setAttribute("type", "checkbox");
              checkBox.classList.add("checkBox");
              const taskItem = document.createElement("div");
              taskItem.classList.add("taskItem");
              if (
                _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i].done
              ) {
                taskItem.classList.add("done");
                checkBox.checked = true;
              }
              taskItem.setAttribute("data-index", i);
              const taskTitle = document.createElement("div");
              taskTitle.classList.add("taskTitle");
              const dueDate = document.createElement("div");
              dueDate.classList.add("dueDate");
              const trashIcon = document.createElement("img");
              trashIcon.classList.add("trashIcon");
              const starIcon = document.createElement("img");
              starIcon.classList.add("starIcon");

              //add content
              taskTitle.textContent =
                _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[
                  i
                ].title;
              dueDate.textContent =
                _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[
                  i
                ].dueDate;
              trashIcon.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_2__;
              if (
                _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[i]
                  .priority
              ) {
                starIcon.src = _img_starGold_png__WEBPACK_IMPORTED_MODULE_4__;
              } else {
                starIcon.src = _img_star_png__WEBPACK_IMPORTED_MODULE_3__;
              }

              //append to dom
              taskItem.append(
                checkBox,
                taskTitle,
                dueDate,
                starIcon,
                trashIcon
              );
              this.tasks.append(taskItem);
            }
          }

          static checkBoxChange(e) {
            const index =
              _ui__WEBPACK_IMPORTED_MODULE_6__["default"].indexByElem(e);
            if (e.checked) {
              _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[
                index
              ].done = true;
            } else {
              _todos__WEBPACK_IMPORTED_MODULE_1__["default"].todoList[
                index
              ].done = false;
            }
            _ui__WEBPACK_IMPORTED_MODULE_6__["default"].render();
          }
          static taskIPStarIconClk() {
            if (
              this.taskIPStarIcon.src ==
              _img_starGold_png__WEBPACK_IMPORTED_MODULE_4__
            ) {
              this.taskIPStarIcon.src =
                _img_star_png__WEBPACK_IMPORTED_MODULE_3__;
            } else {
              this.taskIPStarIcon.src =
                _img_starGold_png__WEBPACK_IMPORTED_MODULE_4__;
            }
          }
          static starIconClk(e) {
            const index =
              _ui__WEBPACK_IMPORTED_MODULE_6__["default"].indexByElem(e);
            _todos__WEBPACK_IMPORTED_MODULE_1__["default"].changePriority(
              index
            );
            _ui__WEBPACK_IMPORTED_MODULE_6__["default"].render();
          }
          static trashIconClk(e) {
            const index =
              _ui__WEBPACK_IMPORTED_MODULE_6__["default"].indexByElem(e);
            _todos__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(index);
            _ui__WEBPACK_IMPORTED_MODULE_6__["default"].render();
          }
          static cancelBtnClk() {
            this.resetInputs();
            this.showAddBtn();
          }
          static addTaskBtnClk() {
            this.resetInputs();
            this.addTaskBtn.style.display = "none";
            this.addTaskPrompt.style.display = "flex";
            this.taskTitleIP.focus();
          }
          static confirmBtnClk() {
            const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
              this.taskTitleIP.value
                ? this.taskTitleIP.value
                : "Title Undefined",
              this.dueDateIP.value,
              _project__WEBPACK_IMPORTED_MODULE_5__["default"].currentProject
            );
            if (
              this.taskIPStarIcon.src ==
              _img_starGold_png__WEBPACK_IMPORTED_MODULE_4__
            ) {
              task.priority = true;
            }
            _todos__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToList(task);
            _ui__WEBPACK_IMPORTED_MODULE_6__["default"].render();
            this.resetInputs();
          }
          static showAddBtn() {
            this.addTaskBtn.style.display = "flex";
            this.addTaskPrompt.style.display = "none";
          }
          static resetInputs() {
            this.taskTitleIP.value = "";
            this.dueDateIP.value = "";
          }
        }

        /***/
      },

    /***/ "./src/modules/project.js":
      /*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todos */ "./src/modules/todos.js");

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = class {
          static projectList = ["General"];
          static currentProject = this.projectList[0];

          static addProjectToList(project) {
            this.projectList.push(project);
          }
          static deleteProject(ind) {
            _todos__WEBPACK_IMPORTED_MODULE_0__["default"].todoList =
              _todos__WEBPACK_IMPORTED_MODULE_0__["default"].todoList.filter(
                (task) => {
                  return task.project != this.projectList[ind];
                }
              );

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
        };

        /***/
      },

    /***/ "./src/modules/sidebar.js":
      /*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project */ "./src/modules/project.js");
        /* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../img/trash.png */ "./src/img/trash.png");
        /* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
        /* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./todos */ "./src/modules/todos.js");

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = class {
          static init() {
            this.domCache();
            this.render();
            this.bindEvent();
          }
          static render() {
            this.projectRender();
            this.domCache();
            this.bindEventReload();
          }
          static projectRender() {
            this.projectList.innerHTML = "";
            for (
              let i = 0;
              i <
              _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList
                .length;
              i++
            ) {
              const trashIcon = document.createElement("img");
              trashIcon.classList.add("trashIcon");
              const projectItem = document.createElement("div");
              projectItem.classList.add("projectItem");
              if (i == 0) projectItem.classList.add("general");
              if (
                _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[
                  i
                ] ==
                _project__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject
              ) {
                projectItem.classList.add("current");
              }
              projectItem.setAttribute("data-index", i);
              projectItem.textContent =
                _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[i];
              trashIcon.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_1__;
              projectItem.append(trashIcon);
              this.projectList.append(projectItem);
            }
          }
          static domCache() {
            this.addBtn = document.querySelector(".addProjectBtn");
            this.titleIP = document.querySelector(".projectTitleIP");
            this.projectInput = document.querySelector(".projectInput");
            this.projectTick = document.querySelector(".projectTick");
            this.projectCross = document.querySelector(".projectCross");
            this.projectList = document.querySelector(".projectList");
            this.projectItem = document.querySelectorAll(".projectItem");
            this.TrashIcon = document.querySelectorAll(
              ".projectItem .trashIcon"
            );
            this.titleExistError = document.querySelector(".error.titleExist");
            this.emptyTitleError = document.querySelector(".error.emptyTitle");
          }
          static bindEvent() {
            this.addBtn.addEventListener("click", this.addBtnClk.bind(this));
            this.projectTick.addEventListener(
              "click",
              this.projectTickClk.bind(this)
            );
            this.projectCross.addEventListener(
              "click",
              this.projectCrossClk.bind(this)
            );
          }
          static bindEventReload() {
            this.TrashIcon.forEach((e) => {
              e.addEventListener("click", this.trashIconClk.bind(this, e));
            });
            this.projectItem.forEach((e) => {
              e.addEventListener("click", this.projectItemClk.bind(this, e));
            });
          }

          static trashIconClk(e) {
            this.trashIconClicked = true;
            const index =
              _ui__WEBPACK_IMPORTED_MODULE_2__["default"].indexByElem(e);
            _project__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(
              index
            );
            this.render();
          }

          static projectCrossClk() {
            this.addBtn.style.display = "block";
            this.projectInput.style.display = "none";
          }

          static projectTickClk() {
            if (this.titleIP.value == "") {
              this.emptyTitleError.style.display = "block";
              return;
            }
            if (
              _project__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].projectList.includes(this.titleIP.value)
            ) {
              this.titleExistError.style.display = "block";
              return;
            }

            _project__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectToList(
              this.titleIP.value
            );

            this.addBtn.style.display = "block";
            this.projectInput.style.display = "none";
            _ui__WEBPACK_IMPORTED_MODULE_2__["default"].render();
          }

          static addBtnClk() {
            this.emptyTitleError.style.display = "none";
            this.titleExistError.style.display = "none";
            this.resetInput();
            this.projectInput.style.display = "grid";
            this.addBtn.style.display = "none";
            this.titleIP.focus();
          }

          static projectItemClk(e) {
            if (this.trashIconClicked) {
              this.trashIconClicked = false;
              return;
            }
            _project__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject =
              e.textContent;
            _ui__WEBPACK_IMPORTED_MODULE_2__["default"].render();
          }
          static resetInput() {
            this.titleIP.value = "";
          }
        };

        /***/
      },

    /***/ "./src/modules/task.js":
      /*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Task,
          /* harmony export */
        });
        class Task {
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

        /***/
      },

    /***/ "./src/modules/todos.js":
      /*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Todos,
          /* harmony export */
        });
        /* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./task */ "./src/modules/task.js");

        class Todos {
          static todoList = [];

          static addTaskToList(task) {
            this.todoList.push(task);
          }

          static deleteTask(i) {
            this.todoList.splice(i, 1);
          }
          static changePriority(i) {
            if (this.todoList[i].priority == true) {
              this.todoList[i].priority = false;
            } else {
              this.todoList[i].priority = true;
            }
          }
        }

        /***/
      },

    /***/ "./src/modules/ui.js":
      /*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ UI,
          /* harmony export */
        });
        /* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./sidebar */ "./src/modules/sidebar.js");
        /* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./content */ "./src/modules/content.js");
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./project */ "./src/modules/project.js");
        /* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../index */ "./src/index.js");

        class UI {
          static init() {
            // storage.projectList  = JSON.stringify([])
            if (_index__WEBPACK_IMPORTED_MODULE_4__.storageAvailability) {
              _project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList =
                _index__WEBPACK_IMPORTED_MODULE_4__.storage.projectList
                  ? JSON.parse(
                      _index__WEBPACK_IMPORTED_MODULE_4__.storage.projectList
                    )
                  : _project__WEBPACK_IMPORTED_MODULE_2__["default"]
                      .projectList;
              _todos__WEBPACK_IMPORTED_MODULE_3__["default"].todoList =
                _index__WEBPACK_IMPORTED_MODULE_4__.storage.todoList
                  ? JSON.parse(
                      _index__WEBPACK_IMPORTED_MODULE_4__.storage.todoList
                    )
                  : _todos__WEBPACK_IMPORTED_MODULE_3__["default"].todoList;
            }
            _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"].init();
            _content__WEBPACK_IMPORTED_MODULE_1__["default"].init();
            this.render();
          }
          static render() {
            _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"].render();
            _content__WEBPACK_IMPORTED_MODULE_1__["default"].render();
            if (_index__WEBPACK_IMPORTED_MODULE_4__.storageAvailability) {
              _index__WEBPACK_IMPORTED_MODULE_4__.storage.projectList =
                JSON.stringify(
                  _project__WEBPACK_IMPORTED_MODULE_2__["default"].projectList
                );
              _index__WEBPACK_IMPORTED_MODULE_4__.storage.todoList =
                JSON.stringify(
                  _todos__WEBPACK_IMPORTED_MODULE_3__["default"].todoList
                );
            }
          }

          static indexByElem(e) {
            return e.parentElement.dataset.index;
          }
        }

        /***/
      },

    /***/ "./src/font/SignikaNegative.ttf":
      /*!**************************************!*\
  !*** ./src/font/SignikaNegative.ttf ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "37ddbcb50da6efb0e1d2.ttf";

        /***/
      },

    /***/ "./src/img/star.png":
      /*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "190d870d386afd29523a.png";

        /***/
      },

    /***/ "./src/img/starGold.png":
      /*!******************************!*\
  !*** ./src/img/starGold.png ***!
  \******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "6f55a71772e1acfd9520.png";

        /***/
      },

    /***/ "./src/img/trash.png":
      /*!***************************!*\
  !*** ./src/img/trash.png ***!
  \***************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3032c2aacc989cb25071.png";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvU2lnbmlrYU5lZ2F0aXZlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG4qe1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIC0tcHJpbWFyeS1jbHI6ICM1NGJhYjk7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM5ZWQyYzY7XFxuICAtLWJnYzogI2Y3ZWNkZTtcXG4gIC0tYmdjLWQ6ICNlOWRhYzE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdTaWduaWthTmVnYXRpdmUnO1xcbn1cXG5odG1sLCBib2R5e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgbWF4LWNvbnRlbnQpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxufVxcbmJ1dHRvbntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5idXR0b246YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdyZXk7XFxufVxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuLmFkZFRhc2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmFkZFRhc2tQcm9tcHR7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5pbnB1dHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udGFza3N7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50YXNrSXRlbXtcXG4gIGhlaWdodDogMS41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDoycHg7IFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi50YXNrVGl0bGV7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50YXNrSXRlbSBpbWd7XFxuICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG4udGFza0lucHV0IGltZ3tcXG4gIGhlaWdodDogMS4yZW07XFxufVxcbi5zaWRlYmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ2FwOjEwcHg7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZ3JpZC1yb3c6IDEvLTE7XFxufVxcbi5wcm9qZWN0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxMDAlO1xcbiAgcGxhY2UtY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0IC5oZWFkaW5ne1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb250ZW50IC5oZWFkaW5ne1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ucHJvamVjdCBidXR0b257XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnByb2plY3RJbnB1dHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6MTBweDtcXG59XFxuLnByb2plY3RJbnB1dCBpbWd7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wcm9qZWN0SW5wdXQgLm9wdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5wcm9qZWN0IC5vcHRpb25zIGltZ3tcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnByb2plY3RJbnB1dCAub3B0aW9ucyBpbWc6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuLnByb2plY3RMaXN0e1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdEl0ZW17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuLnByb2plY3RJdGVtOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxufVxcbi5wcm9qZWN0SXRlbS5jdXJyZW50e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICBjb2xvcjpibGFjaztcXG59XFxuLnRhc2tJdGVtLmRvbmV7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmNoZWNrQm94OmhvdmVyLC50YXNrSXRlbSBpbWc6aG92ZXIsIC5zdGFySWNvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RJdGVtIGltZ3tcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6YXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0SXRlbTpob3Zlcjpub3QoLmdlbmVyYWwpIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZXJyb3J7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOnJlZDtcXG59XFxuLmZvb3RlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1kKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBb0M7QUFDdEM7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHFEQUFxRDtFQUNyRCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2FOZWdhdGl2ZSc7XFxuICBzcmM6IHVybCguL2ZvbnQvU2lnbmlrYU5lZ2F0aXZlLnR0Zik7XFxufVxcbip7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgLS1wcmltYXJ5LWNscjogIzU0YmFiOTtcXG4gIC0tc2Vjb25kYXJ5LWNscjogIzllZDJjNjtcXG4gIC0tYmdjOiAjZjdlY2RlO1xcbiAgLS1iZ2MtZDogI2U5ZGFjMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NpZ25pa2FOZWdhdGl2ZSc7XFxufVxcbmh0bWwsIGJvZHl7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHl7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCBtYXgtY29udGVudCkgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG59XFxuYnV0dG9ue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbmJ1dHRvbjphY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXG59XFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG4uYWRkVGFza3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uYWRkVGFza1Byb21wdHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbmlucHV0e1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNscik7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50YXNrc3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogNTB2dztcXG4gIGdhcDogMjBweDtcXG59XFxuLnRhc2tJdGVte1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OjJweDsgXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnRhc2tUaXRsZXtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRhc2tJdGVtIGltZ3tcXG4gIGhlaWdodDogMS4yZW07XFxufVxcbi50YXNrSW5wdXQgaW1ne1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuLnNpZGViYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBnYXA6MTBweDtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXJvdzogMS8tMTtcXG59XFxuLnByb2plY3R7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XFxuICBwbGFjZS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QgLmhlYWRpbmd7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvbnRlbnQgLmhlYWRpbmd7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5wcm9qZWN0IGJ1dHRvbntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4ucHJvamVjdElucHV0e1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDoxMHB4O1xcbn1cXG4ucHJvamVjdElucHV0IGltZ3tcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLnByb2plY3RJbnB1dCAub3B0aW9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnByb2plY3QgLm9wdGlvbnMgaW1ne1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4ucHJvamVjdElucHV0IC5vcHRpb25zIGltZzpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jbHIpO1xcbn1cXG4ucHJvamVjdExpc3R7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0SXRlbXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG4ucHJvamVjdEl0ZW06aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG59XFxuLnByb2plY3RJdGVtLmN1cnJlbnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2xyKTtcXG4gIGNvbG9yOmJsYWNrO1xcbn1cXG4udGFza0l0ZW0uZG9uZXtcXG4gIGNvbG9yOndoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4uY2hlY2tCb3g6aG92ZXIsLnRhc2tJdGVtIGltZzpob3ZlciwgLnN0YXJJY29uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdEl0ZW0gaW1ne1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3RJdGVtOmhvdmVyOm5vdCguZ2VuZXJhbCkgaW1ne1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5lcnJvcntcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6cmVkO1xcbn1cXG4uZm9vdGVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjLWQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGl0bGV7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9jaGVjayBicm93c2VyIGxvY2FsIHN0b3JhZ2UgY2FwYWNpdHlcblxubGV0IHN0b3JhZ2U7XG5mdW5jdGlvbiBpc1N0b3JhZ2VBdmFpbGFibGUodHlwZSl7XG4gIHRyeXtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSgneCcsICd4Jyk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKCd4Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1jYXRjaChlKXtcbiAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICBlLmNvZGUgPT09IDIyIHx8IGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgZS5uYW1lID09PSdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0wKVxuICB9XG59XG5leHBvcnQgbGV0IHN0b3JhZ2VBdmFpbGFiaWxpdHkgPSBpc1N0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpXG5leHBvcnQge3N0b3JhZ2V9XG5cbi8vaW5pdGlhdGUgVUlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5pbml0KCkpOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL2ltZy90cmFzaC5wbmcnO1xuaW1wb3J0IFN0YXJJY29uIGZyb20gJy4uL2ltZy9zdGFyLnBuZyc7XG5pbXBvcnQgU3RhckdvbGRJY29uIGZyb20gJy4uL2ltZy9zdGFyR29sZC5wbmcnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHtcblxuICBzdGF0aWMgaW5pdCgpe1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIHRoaXMuY29udGVudFJlbmRlcigpO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudFJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyBkb21DYWNoZSgpe1xuICAgIHRoaXMuY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtQnRuJyk7XG4gICAgdGhpcy5jYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnRuJyk7XG4gICAgdGhpcy50YXNrVGl0bGVJUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGl0bGVJUCcpO1xuICAgIHRoaXMuZHVlRGF0ZUlQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGVJUCcpO1xuICAgIHRoaXMudGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICB0aGlzLmFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J0bicpXG4gICAgdGhpcy5hZGRUYXNrUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tQcm9tcHQnKTtcbiAgICB0aGlzLnRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaEljb24nKTtcbiAgICB0aGlzLmNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgLmhlYWRpbmcnKTtcbiAgICB0aGlzLnN0YXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tJdGVtIC5zdGFySWNvbicpO1xuICAgIHRoaXMudGFza0lQU3Rhckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0lucHV0IC5zdGFySWNvbicpO1xuICAgIHRoaXMuY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tCb3gnKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50KCl7XG4gICAgdGhpcy5jb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jb25maXJtQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGFza0J0bkNsay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsQnRuQ2xrLmJpbmQodGhpcykpO1xuICAgIHRoaXMudGFza0lQU3Rhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRhc2tJUFN0YXJJY29uQ2xrLmJpbmQodGhpcykpO1xuICB9XG4gIHN0YXRpYyBiaW5kRXZlbnRSZWxvYWQoKXtcbiAgICB0aGlzLnRyYXNoSWNvbi5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJhc2hJY29uQ2xrLmJpbmQodGhpcywgZSkpXG4gICAgfSk7XG4gICAgdGhpcy5zdGFySWNvbi5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3Rhckljb25DbGsuYmluZCh0aGlzLCBlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGVja0JveC5mb3JFYWNoKChlKT0+e1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoZWNrQm94Q2hhbmdlLmJpbmQodGhpcywgZSkpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBjb250ZW50UmVuZGVyKCl7XG4gICAgdGhpcy5jb250ZW50SGVhZGluZy50ZXh0Q29udGVudCA9IFByb2plY3RzLmN1cnJlbnRQcm9qZWN0O1xuICAgIHRoaXMudGFza3NSZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgdGFza3NSZW5kZXIoKXtcbiAgICB0aGlzLnRhc2tzLmlubmVySFRNTD0nJztcbiAgICBmb3IobGV0IGk9MDsgaTxUb2Rvcy50b2RvTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihUb2Rvcy50b2RvTGlzdFtpXS5wcm9qZWN0ICE9IFByb2plY3RzLmN1cnJlbnRQcm9qZWN0KXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvL2NyZWF0ZSBkb20gZWxlbWVudFxuICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja0JveCcpO1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJdGVtJyk7XG4gICAgICBpZihUb2Rvcy50b2RvTGlzdFtpXS5kb25lKXtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza1RpdGxlJyk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ3RyYXNoSWNvbicpXG4gICAgICBjb25zdCBzdGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgc3Rhckljb24uY2xhc3NMaXN0LmFkZCgnc3Rhckljb24nKVxuXG4gICAgICAvL2FkZCBjb250ZW50XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBUb2Rvcy50b2RvTGlzdFtpXS50aXRsZTtcbiAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBUb2Rvcy50b2RvTGlzdFtpXS5kdWVEYXRlO1xuICAgICAgdHJhc2hJY29uLnNyYyA9IFRyYXNoSWNvbjtcbiAgICAgIGlmKFRvZG9zLnRvZG9MaXN0W2ldLnByaW9yaXR5KXtcbiAgICAgICAgc3Rhckljb24uc3JjID0gU3RhckdvbGRJY29uO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0YXJJY29uLnNyYyA9IFN0YXJJY29uO1xuICAgICAgfVxuXG4gICAgICAvL2FwcGVuZCB0byBkb21cbiAgICAgIHRhc2tJdGVtLmFwcGVuZChjaGVja0JveCwgdGFza1RpdGxlLCBkdWVEYXRlLCBzdGFySWNvbiwgdHJhc2hJY29uKTtcbiAgICAgIHRoaXMudGFza3MuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2hlY2tCb3hDaGFuZ2UoZSl7XG4gICAgY29uc3QgaW5kZXggPSBVSS5pbmRleEJ5RWxlbShlKTtcbiAgICBpZihlLmNoZWNrZWQpe1xuICAgICAgVG9kb3MudG9kb0xpc3RbaW5kZXhdLmRvbmU9dHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIFRvZG9zLnRvZG9MaXN0W2luZGV4XS5kb25lPWZhbHNlO1xuICAgIH1cbiAgICBVSS5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgdGFza0lQU3Rhckljb25DbGsoKXtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYyA9PSBTdGFyR29sZEljb24pe1xuICAgICAgdGhpcy50YXNrSVBTdGFySWNvbi5zcmMgPSBTdGFySWNvbjtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudGFza0lQU3Rhckljb24uc3JjPVN0YXJHb2xkSWNvbjtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHN0YXJJY29uQ2xrKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gVUkuaW5kZXhCeUVsZW0oZSk7XG4gICAgVG9kb3MuY2hhbmdlUHJpb3JpdHkoaW5kZXgpO1xuICAgIFVJLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyB0cmFzaEljb25DbGsoZSl7XG4gICAgY29uc3QgaW5kZXggPSBVSS5pbmRleEJ5RWxlbShlKTtcbiAgICBUb2Rvcy5kZWxldGVUYXNrKGluZGV4KTtcbiAgICBVSS5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgY2FuY2VsQnRuQ2xrKCl7XG4gICAgdGhpcy5yZXNldElucHV0cygpO1xuICAgIHRoaXMuc2hvd0FkZEJ0bigpO1xuICB9XG4gIHN0YXRpYyBhZGRUYXNrQnRuQ2xrKCl7XG4gICAgdGhpcy5yZXNldElucHV0cygpO1xuICAgIHRoaXMuYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuYWRkVGFza1Byb21wdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMudGFza1RpdGxlSVAuZm9jdXMoKTtcbiAgfVxuICBzdGF0aWMgY29uZmlybUJ0bkNsaygpe1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgICh0aGlzLnRhc2tUaXRsZUlQLnZhbHVlKT8odGhpcy50YXNrVGl0bGVJUC52YWx1ZSk6J1RpdGxlIFVuZGVmaW5lZCcsXG4gICAgICAgdGhpcy5kdWVEYXRlSVAudmFsdWUsIFByb2plY3RzLmN1cnJlbnRQcm9qZWN0XG4gICAgKTtcbiAgICBpZih0aGlzLnRhc2tJUFN0YXJJY29uLnNyYz09U3RhckdvbGRJY29uKXtcbiAgICAgIHRhc2sucHJpb3JpdHk9dHJ1ZTtcbiAgICB9XG4gICAgVG9kb3MuYWRkVGFza1RvTGlzdCh0YXNrKTtcbiAgICBVSS5yZW5kZXIoKTtcbiAgICB0aGlzLnJlc2V0SW5wdXRzKCk7XG4gIH1cbiAgc3RhdGljIHNob3dBZGRCdG4oKXtcbiAgICB0aGlzLmFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0aGlzLmFkZFRhc2tQcm9tcHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBzdGF0aWMgcmVzZXRJbnB1dHMoKXtcbiAgICB0aGlzLnRhc2tUaXRsZUlQLnZhbHVlPSAnJztcbiAgICB0aGlzLmR1ZURhdGVJUC52YWx1ZT0gJyc7XG4gIH1cblxufSIsImltcG9ydCBUb2RvcyBmcm9tICcuL3RvZG9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3N7XG4gIHN0YXRpYyBwcm9qZWN0TGlzdCA9IFtcIkdlbmVyYWxcIl07XG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdCA9IHRoaXMucHJvamVjdExpc3RbMF07XG5cbiAgc3RhdGljIGFkZFByb2plY3RUb0xpc3QocHJvamVjdCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICB9XG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KGluZCl7XG4gICAgVG9kb3MudG9kb0xpc3QgPSBUb2Rvcy50b2RvTGlzdC5maWx0ZXIoKHRhc2spPT57XG4gICAgICByZXR1cm4gdGFzay5wcm9qZWN0ICE9IHRoaXMucHJvamVjdExpc3RbaW5kXVxuICAgIH0pXG4gICAgXG4gICAgaWYodGhpcy5wcm9qZWN0TGlzdFtpbmRdPT10aGlzLmN1cnJlbnRQcm9qZWN0KXtcbiAgICAgIGlmKHRoaXMucHJvamVjdExpc3RbaW5kKzFdIT11bmRlZmluZWQpe1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0PXRoaXMucHJvamVjdExpc3RbaW5kKzFdXG4gICAgICB9ZWxzZSBpZih0aGlzLnByb2plY3RMaXN0W2luZC0xXSE9dW5kZWZpbmVkKXtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdD10aGlzLnByb2plY3RMaXN0W2luZC0xXVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3Q9J05vIFByb2plY3RzJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kLCAxKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0cyBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRyYXNoSWNvbiBmcm9tICcuLi9pbWcvdHJhc2gucG5nJztcbmltcG9ydCBVSSBmcm9tICcuL3VpJ1xuaW1wb3J0IFRvZG9zIGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc3tcblxuICBzdGF0aWMgaW5pdCgpe1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cbiAgc3RhdGljIHJlbmRlcigpe1xuICAgIHRoaXMucHJvamVjdFJlbmRlcigpO1xuICAgIHRoaXMuZG9tQ2FjaGUoKTtcbiAgICB0aGlzLmJpbmRFdmVudFJlbG9hZCgpO1xuICB9XG4gIHN0YXRpYyBwcm9qZWN0UmVuZGVyKCl7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IobGV0IGk9MDsgaTxQcm9qZWN0cy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCd0cmFzaEljb24nKVxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJyk7XG4gICAgICBpZihpPT0wKSBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsJyk7XG4gICAgICBpZihQcm9qZWN0cy5wcm9qZWN0TGlzdFtpXT09UHJvamVjdHMuY3VycmVudFByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICB9XG4gICAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLGkpO1xuICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBQcm9qZWN0cy5wcm9qZWN0TGlzdFtpXTtcbiAgICAgIHRyYXNoSWNvbi5zcmMgPSBUcmFzaEljb247XG4gICAgICBwcm9qZWN0SXRlbS5hcHBlbmQodHJhc2hJY29uKVxuICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEl0ZW0pO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZG9tQ2FjaGUoKXtcbiAgICB0aGlzLmFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG4gICAgdGhpcy50aXRsZUlQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUaXRsZUlQJyk7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0Jyk7XG4gICAgdGhpcy5wcm9qZWN0VGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGljaycpO1xuICAgIHRoaXMucHJvamVjdENyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDcm9zcycpO1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICB0aGlzLnByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RJdGVtJyk7XG4gICAgdGhpcy5UcmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdEl0ZW0gLnRyYXNoSWNvbicpO1xuICAgIHRoaXMudGl0bGVFeGlzdEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLnRpdGxlRXhpc3QnKTtcbiAgICB0aGlzLmVtcHR5VGl0bGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci5lbXB0eVRpdGxlJyk7XG4gIH1cbiAgc3RhdGljIGJpbmRFdmVudCgpe1xuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRCdG5DbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wcm9qZWN0VGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJvamVjdFRpY2tDbGsuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wcm9qZWN0Q3Jvc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByb2plY3RDcm9zc0Nsay5iaW5kKHRoaXMpKTtcbiAgfVxuICBzdGF0aWMgYmluZEV2ZW50UmVsb2FkKCl7XG4gICAgdGhpcy5UcmFzaEljb24uZm9yRWFjaCgoZSk9PntcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRyYXNoSWNvbkNsay5iaW5kKHRoaXMsIGUpKTtcbiAgICB9KTtcbiAgICB0aGlzLnByb2plY3RJdGVtLmZvckVhY2goKGUpPT57XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9qZWN0SXRlbUNsay5iaW5kKHRoaXMsIGUpKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRyYXNoSWNvbkNsayhlKXtcbiAgICB0aGlzLnRyYXNoSWNvbkNsaWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGluZGV4ID0gVUkuaW5kZXhCeUVsZW0oZSk7XG4gICAgUHJvamVjdHMuZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9qZWN0Q3Jvc3NDbGsoKXsgXG4gICAgdGhpcy5hZGRCdG4uc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICB0aGlzLnByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIHByb2plY3RUaWNrQ2xrKCl7XG4gICAgaWYodGhpcy50aXRsZUlQLnZhbHVlPT0nJyl7XG4gICAgICB0aGlzLmVtcHR5VGl0bGVFcnJvci5zdHlsZS5kaXNwbGF5PSdibG9jayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKFByb2plY3RzLnByb2plY3RMaXN0LmluY2x1ZGVzKHRoaXMudGl0bGVJUC52YWx1ZSkpe1xuICAgICAgdGhpcy50aXRsZUV4aXN0RXJyb3Iuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFByb2plY3RzLmFkZFByb2plY3RUb0xpc3QodGhpcy50aXRsZUlQLnZhbHVlKTtcblxuICAgIHRoaXMuYWRkQnRuLnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XG4gICAgdGhpcy5wcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBVSS5yZW5kZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRCdG5DbGsoKXtcbiAgICB0aGlzLmVtcHR5VGl0bGVFcnJvci5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICB0aGlzLnRpdGxlRXhpc3RFcnJvci5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICB0aGlzLnJlc2V0SW5wdXQoKTtcbiAgICB0aGlzLnByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyBcbiAgICB0aGlzLmFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gICAgdGhpcy50aXRsZUlQLmZvY3VzKCk7XG4gIH1cblxuICBzdGF0aWMgcHJvamVjdEl0ZW1DbGsoZSl7XG4gICAgaWYodGhpcy50cmFzaEljb25DbGlja2VkKXtcbiAgICAgIHRoaXMudHJhc2hJY29uQ2xpY2tlZD1mYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUHJvamVjdHMuY3VycmVudFByb2plY3QgPSBlLnRleHRDb250ZW50O1xuICAgIFVJLnJlbmRlcigpO1xuICB9XG4gIHN0YXRpYyByZXNldElucHV0KCl7XG4gICAgdGhpcy50aXRsZUlQIC52YWx1ZT0gJyc7XG4gIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gIHRpdGxlO1xuICBkdWVEYXRlO1xuICBwcm9qZWN0O1xuICBwcmlvcml0eSA9IGZhbHNlO1xuICBkb25lPWZhbHNlO1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdCl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuICBzdGF0aWMgdG9kb0xpc3Q9W107XG5cbiAgc3RhdGljIGFkZFRhc2tUb0xpc3QodGFzayl7XG4gICAgdGhpcy50b2RvTGlzdC5wdXNoKHRhc2spO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2soaSl7XG4gICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gIH1cbiAgc3RhdGljIGNoYW5nZVByaW9yaXR5KGkpe1xuICAgIGlmKHRoaXMudG9kb0xpc3RbaV0ucHJpb3JpdHk9PXRydWUpe1xuICAgICAgdGhpcy50b2RvTGlzdFtpXS5wcmlvcml0eT1mYWxzZVxuICAgIH1lbHNle1xuICAgICAgdGhpcy50b2RvTGlzdFtpXS5wcmlvcml0eT10cnVlO1xuICAgIH1cbiAgfVxufSIsIlxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kb3MgZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQge3N0b3JhZ2VBdmFpbGFiaWxpdHkgYXMgU0EsIHN0b3JhZ2V9IGZyb20gJy4uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gIHN0YXRpYyBpbml0KCl7XG4gICAgLy8gc3RvcmFnZS5wcm9qZWN0TGlzdCAgPSBKU09OLnN0cmluZ2lmeShbXSlcbiAgICBpZihTQSl7XG4gICAgICBQcm9qZWN0LnByb2plY3RMaXN0ID0gKHN0b3JhZ2UucHJvamVjdExpc3QpID9cbiAgICAgIEpTT04ucGFyc2Uoc3RvcmFnZS5wcm9qZWN0TGlzdCk6IFByb2plY3QucHJvamVjdExpc3Q7XG4gICAgICBUb2Rvcy50b2RvTGlzdCA9IChzdG9yYWdlLnRvZG9MaXN0KSA/XG4gICAgICBKU09OLnBhcnNlKHN0b3JhZ2UudG9kb0xpc3QpOiBUb2Rvcy50b2RvTGlzdDtcbiAgICB9XG4gICAgU2lkZWJhci5pbml0KCk7XG4gICAgQ29udGVudC5pbml0KCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBzdGF0aWMgcmVuZGVyKCl7XG4gICAgU2lkZWJhci5yZW5kZXIoKTtcbiAgICBDb250ZW50LnJlbmRlcigpO1xuICAgIGlmKFNBKXtcbiAgICAgIHN0b3JhZ2UucHJvamVjdExpc3QgPSBKU09OLnN0cmluZ2lmeShQcm9qZWN0LnByb2plY3RMaXN0KTtcbiAgICAgIHN0b3JhZ2UudG9kb0xpc3QgPSBKU09OLnN0cmluZ2lmeShUb2Rvcy50b2RvTGlzdCk7XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgaW5kZXhCeUVsZW0oZSl7XG4gICAgcmV0dXJuIGUucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
