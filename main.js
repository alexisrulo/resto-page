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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Margaret-Bold.otf */ "./src/Margaret-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Margared-Bold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('otf');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n*{\r\n    /* Fonts */\r\n    --navbar-font: 'Open Sans', sans-serif;\r\n    --navbar-font-weight: 300;\r\n\r\n    --logo-font: 'Margared-Bold';\r\n    --logo-font-weight: 600;\r\n\r\n\r\n    /* Colors */\r\n    --bg-nav: #b5b6b5;\r\n    --bg-body: #fafafa;\r\n    --nav-text-color: #636363;\r\n    --logo-text-color: #BF5728;\r\n\r\n    margin: 0px;\r\n}\r\n\r\n/* ----NAV BAR---- */\r\n\r\n.title{\r\n    background-color: var(--bg-body);\r\n    padding: 0 30px;\r\n    height: 140px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n}\r\n.title h1{\r\n    font-size: 48px;\r\n    font-family: var(--logo-font);\r\n    font-weight: var(--logo-font-weight);\r\n    color: var(--logo-text-color);\r\n    font-style: italic;\r\n}\r\n\r\n.nav ul{\r\n    text-transform: uppercase;\r\n    font-family: var(--navbar-font);\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    list-style: none;\r\n    gap: 24px;\r\n    font-size: 13px;\r\n    letter-spacing: 0.18em;\r\n    font-weight: var(--navbar-font-weight);\r\n    color: var(--nav-text-color);\r\n}\r\n\r\n.nav ul li{       \r\n    cursor: pointer;\r\n    padding: 30px 8px;\r\n    border-top: 4px solid var(--bg-body);\r\n    transition: 200ms;\r\n}\r\n\r\n.nav ul li:hover{\r\n    border-top-color: black;\r\n}\r\n\r\n#selected{\r\n    border-bottom: 4px solid black;\r\n}\r\n\r\n.info{\r\n    display: flex;\r\n    margin: 64px auto;\r\n    max-width: 1100px;\r\n    width: 80vw;\r\n    gap: 100px;\r\n}\r\n\r\n.info img{\r\n    width: 40vw;\r\n    max-width: 500px;\r\n}\r\n\r\n.textInfo{\r\n    padding: 24px;\r\n    font-family: var(--navbar-font);\r\n    color: black;\r\n}\r\n\r\n.textInfo h3{\r\n    margin-bottom: 64px;\r\n    padding: 24px 0;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.18em;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.paragraphs{\r\n    display: flex;\r\n    flex-direction: column;\r\n    line-height: 150%;\r\n    gap: 24px;\r\n    font-weight: 300;\r\n}\r\n\r\n.paragraphs button{\r\n    padding: 16px 8px;\r\n    background-color: transparent;\r\n    border: 2px solid black;\r\n    font-family: var(--navbar-font);\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,4BAA4B;IAC5B,0DAA6C;IAC7C,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,UAAU;IACV,sCAAsC;IACtC,yBAAyB;;IAEzB,4BAA4B;IAC5B,uBAAuB;;;IAGvB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,0BAA0B;;IAE1B,WAAW;AACf;;AAEA,oBAAoB;;AAEpB;IACI,gCAAgC;IAChC,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;AAEjC;AACA;IACI,eAAe;IACf,6BAA6B;IAC7B,oCAAoC;IACpC,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,SAAS;IACT,eAAe;IACf,sBAAsB;IACtB,sCAAsC;IACtC,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,uBAAuB;IACvB,+BAA+B;IAC/B,eAAe;IACf,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');\r\n@font-face {\r\n    font-family: 'Margared-Bold';\r\n    src: url('./Margaret-Bold.otf') format('otf');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n*{\r\n    /* Fonts */\r\n    --navbar-font: 'Open Sans', sans-serif;\r\n    --navbar-font-weight: 300;\r\n\r\n    --logo-font: 'Margared-Bold';\r\n    --logo-font-weight: 600;\r\n\r\n\r\n    /* Colors */\r\n    --bg-nav: #b5b6b5;\r\n    --bg-body: #fafafa;\r\n    --nav-text-color: #636363;\r\n    --logo-text-color: #BF5728;\r\n\r\n    margin: 0px;\r\n}\r\n\r\n/* ----NAV BAR---- */\r\n\r\n.title{\r\n    background-color: var(--bg-body);\r\n    padding: 0 30px;\r\n    height: 140px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n}\r\n.title h1{\r\n    font-size: 48px;\r\n    font-family: var(--logo-font);\r\n    font-weight: var(--logo-font-weight);\r\n    color: var(--logo-text-color);\r\n    font-style: italic;\r\n}\r\n\r\n.nav ul{\r\n    text-transform: uppercase;\r\n    font-family: var(--navbar-font);\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    list-style: none;\r\n    gap: 24px;\r\n    font-size: 13px;\r\n    letter-spacing: 0.18em;\r\n    font-weight: var(--navbar-font-weight);\r\n    color: var(--nav-text-color);\r\n}\r\n\r\n.nav ul li{       \r\n    cursor: pointer;\r\n    padding: 30px 8px;\r\n    border-top: 4px solid var(--bg-body);\r\n    transition: 200ms;\r\n}\r\n\r\n.nav ul li:hover{\r\n    border-top-color: black;\r\n}\r\n\r\n#selected{\r\n    border-bottom: 4px solid black;\r\n}\r\n\r\n.info{\r\n    display: flex;\r\n    margin: 64px auto;\r\n    max-width: 1100px;\r\n    width: 80vw;\r\n    gap: 100px;\r\n}\r\n\r\n.info img{\r\n    width: 40vw;\r\n    max-width: 500px;\r\n}\r\n\r\n.textInfo{\r\n    padding: 24px;\r\n    font-family: var(--navbar-font);\r\n    color: black;\r\n}\r\n\r\n.textInfo h3{\r\n    margin-bottom: 64px;\r\n    padding: 24px 0;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.18em;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.paragraphs{\r\n    display: flex;\r\n    flex-direction: column;\r\n    line-height: 150%;\r\n    gap: 24px;\r\n    font-weight: 300;\r\n}\r\n\r\n.paragraphs button{\r\n    padding: 16px 8px;\r\n    background-color: transparent;\r\n    border: 2px solid black;\r\n    font-family: var(--navbar-font);\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/PageApp.js":
/*!************************!*\
  !*** ./src/PageApp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infoComponent": () => (/* binding */ infoComponent),
/* harmony export */   "menuComponent": () => (/* binding */ menuComponent),
/* harmony export */   "reservComponent": () => (/* binding */ reservComponent),
/* harmony export */   "titleComponent": () => (/* binding */ titleComponent)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg");
/* harmony import */ var _reserv_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reserv.jpg */ "./src/reserv.jpg");




const titleComponent = () => {
    const title = document.createElement('div')
    title.classList.add('title')

    const logo = document.createElement('h1')
    logo.textContent = 'Giovannini'
    title.appendChild(logo);

    const navBar = document.createElement('nav')
    navBar.classList.add('nav')
    const Ulist = document.createElement('ul')

    const about = document.createElement('li')
    about.classList.add('about')
    about.id = 'selected'
    about.textContent = 'About Us'
    about.addEventListener('click', infoComponent)
    Ulist.appendChild(about.cloneNode(true))

    const menus = document.createElement('li')
    menus.classList.add('menus')
    menus.textContent = 'menu'
    menus.addEventListener('click', menuComponent)
    Ulist.appendChild(menus.cloneNode(true))

    const reserv = document.createElement('li')
    reserv.classList.add('reserv')
    reserv.textContent = 'reservations'
    reserv.addEventListener('click', menuComponent)
    Ulist.appendChild(reserv.cloneNode(true))
    navBar.appendChild(Ulist)

    title.appendChild(navBar.cloneNode(true))

    return title;
}

const infoComponent = () => {
    const info = document.createElement('div')
    info.classList.add('info')

    const imagen = document.createElement('img')
    imagen.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__
    info.appendChild(imagen.cloneNode(true));
    

    const textCardInfo = document.createElement('div')
    textCardInfo.classList.add('textInfo')
    const titleInfo = document.createElement('h3')
    titleInfo.textContent = 'About Us'
    textCardInfo.appendChild(titleInfo.cloneNode(true))

    const paragraphs = document.createElement('div')
    paragraphs.classList.add('paragraphs')
    const paragraph = document.createElement('p')

    const textInfo = ['Giovannini is an elegant take on contemporary cuisine curated by Argentinian chef Nahuel Giovanini and his brother, restaurateur Alexis Giovannini.', 
                  'The exclusive 16-seat counter, concealed by an art gallery, offers an intimate dining experience with an open kitchen overlooking the chef\'s work.',
                  'Two tables that accommodate up to six guests are available for larger parties.',
                  ]
    textInfo.forEach((text) => {
        paragraph.textContent = text
        paragraphs.appendChild(paragraph.cloneNode('true'))
    })
    textCardInfo.appendChild(paragraphs.cloneNode('true'))
    info.appendChild(textCardInfo.cloneNode(true));
    
    return info 

}

const menuComponent = () => {
    
    const menu = document.createElement('div')
    menu.classList.add('info')

    const imagen = document.createElement('img')
    imagen.src = _menu_jpg__WEBPACK_IMPORTED_MODULE_1__
    menu.appendChild(imagen.cloneNode(true));
    

    const textCardInfo = document.createElement('div')
    textCardInfo.classList.add('textInfo')
    const titleInfo = document.createElement('h3')
    titleInfo.textContent = 'menu - OCTOBER 2022'
    textCardInfo.appendChild(titleInfo.cloneNode(true))

    const menuItems = document.createElement('ul')
    menuItems.classList.add('paragraphs')
    const item = document.createElement('li')

    const textInfo = ['<b>BLUE FIN TUNA</b>, Avocado, Trout Roe, Hazelnut', 
                  '<b>CORN</b>, Foie Gras, Smoked Eel',
                  '<b>BUTTERNUT SQUASH</b>, Sage, Parmesan, Waffle',
                  '<b>FOCACCIA</b>, Apple Wood Butter',
                  '<b>CALAMARI</b>, Cauliflower <ul><li><b>KYOTO CARROT</b>, Orange, Almond, Finger Lime</li>OR<li><b>FOIE GRAS</b>, Black Truffle, Artichoke <em>Supp. 65</em></li></ul>',
                  '<b>MADAI</b>, Koshihikari Rice, Saffran, Mussels',
                  '<b>QUAIL</b>, Cabbage, Black Garlic, Ginger <ul><li><b>COMTE 36-MONTH</b>, Honey, Truffle <em>Supp. 26</em></li></ul>',
                  '<b>APPLE</b>, Wasabi, Buckwheat, Makrut Line',
                  ]
    textInfo.forEach((text) => {
        item.innerHTML = text
        menuItems.appendChild(item.cloneNode('true'))
    })
    textCardInfo.appendChild(menuItems.cloneNode('true'))
    menu.appendChild(textCardInfo.cloneNode(true));
    
    return menu 
}
const reservComponent = () => {
    
    const reserv = document.createElement('div')
    reserv.classList.add('info')

    const imagen = document.createElement('img')
    imagen.src = _reserv_jpg__WEBPACK_IMPORTED_MODULE_2__
    reserv.appendChild(imagen.cloneNode(true));
    

    const textCardInfo = document.createElement('div')
    textCardInfo.classList.add('textInfo')
    const titleInfo = document.createElement('h3')
    titleInfo.textContent = 'Reservations'
    textCardInfo.appendChild(titleInfo.cloneNode(true))

    const paragraphs = document.createElement('div')
    paragraphs.classList.add('paragraphs')
    const paragraph = document.createElement('p')


    const textInfo = ['Giovannini  is a reservation-only restaurant.', 
    'The restaurant is open from Tuesday to Saturday for dinner service.',
    'Reservations are open on a 30-day window availability.',
    '<a href="https://goo.gl/maps/7iiCLLDmEuDQRs4v6" target="_blank">1700 Rivadavia Street</a>',
    'If you need to speak with us, please email us at,',
    '<a href="mailto:reservations@giovanniniresto.com" target="_blank">reservations@giovanniniresto.com</a>',
    '<button>Reserve a table</button>'
    ]

    textInfo.forEach((text) => {
        paragraph.innerHTML = text
        paragraphs.appendChild(paragraph.cloneNode('true'))
    })
    textCardInfo.appendChild(paragraphs.cloneNode('true'))
    reserv.appendChild(textCardInfo.cloneNode(true));
    
    return reserv 
}


/***/ }),

/***/ "./src/Margaret-Bold.otf":
/*!*******************************!*\
  !*** ./src/Margaret-Bold.otf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a63e42c67a519d9b33.otf";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "070f317cf95aadefb4ba.jpg";

/***/ }),

/***/ "./src/reserv.jpg":
/*!************************!*\
  !*** ./src/reserv.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fda47c3ea38e31255ac.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6cf9c9e09415fa9c3af.jpg";

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
/******/ 			"index": 0
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
/* harmony import */ var _PageApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageApp */ "./src/PageApp.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const pageComponent = () => {
    document.body.removeChild(document.body.lastChild)
    const page = document.createElement('div')
    page.classList.add('page')
    page.appendChild((0,_PageApp__WEBPACK_IMPORTED_MODULE_0__.titleComponent)());
    page.appendChild((0,_PageApp__WEBPACK_IMPORTED_MODULE_0__.infoComponent)().cloneNode(true));
    document.body.appendChild(page);
}

pageComponent()

const changeComponent = (component) => {
    const page = document.querySelector('.page')
    page.removeChild(page.lastChild)
    page.appendChild(component.cloneNode(true));
    document.body.appendChild(page);
}

const about = document.querySelector('.about')
const menus = document.querySelector('.menus')
const reserv = document.querySelector('.reserv')

about.addEventListener('click',() => {
    about.id = 'selected'
    menus.id = ''
    reserv.id = ''
    changeComponent((0,_PageApp__WEBPACK_IMPORTED_MODULE_0__.infoComponent)())
})

menus.addEventListener('click',() => {
    menus.id = 'selected'
    about.id = ''
    reserv.id = ''
    changeComponent((0,_PageApp__WEBPACK_IMPORTED_MODULE_0__.menuComponent)())
})
reserv.addEventListener('click',() => {
    reserv.id = 'selected'
    about.id = ''
    menus.id = ''
    changeComponent((0,_PageApp__WEBPACK_IMPORTED_MODULE_0__.reservComponent)())
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNENBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQ0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXdGO0FBQ3BFO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWM7QUFDbkMscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWE7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWE7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFlO0FBQ25DLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9QYWdlQXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL01hcmdhcmV0LUJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXJnYXJlZC1Cb2xkJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnb3RmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICAvKiBGb250cyAqL1xcclxcbiAgICAtLW5hdmJhci1mb250OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1uYXZiYXItZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHJcXG4gICAgLS1sb2dvLWZvbnQ6ICdNYXJnYXJlZC1Cb2xkJztcXHJcXG4gICAgLS1sb2dvLWZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIENvbG9ycyAqL1xcclxcbiAgICAtLWJnLW5hdjogI2I1YjZiNTtcXHJcXG4gICAgLS1iZy1ib2R5OiAjZmFmYWZhO1xcclxcbiAgICAtLW5hdi10ZXh0LWNvbG9yOiAjNjM2MzYzO1xcclxcbiAgICAtLWxvZ28tdGV4dC1jb2xvcjogI0JGNTcyODtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS1OQVYgQkFSLS0tLSAqL1xcclxcblxcclxcbi50aXRsZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYm9keSk7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxufVxcclxcbi50aXRsZSBoMXtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWxvZ28tZm9udC13ZWlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbG9nby10ZXh0LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVse1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbmF2YmFyLWZvbnQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLW5hdmJhci1mb250LXdlaWdodCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGl7ICAgICAgIFxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggOHB4O1xcclxcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tYmctYm9keSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpOmhvdmVye1xcclxcbiAgICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdGVke1xcclxcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5pbmZve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDY0cHggYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBnYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyBpbWd7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dEluZm97XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1uYXZiYXItZm9udCk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRJbmZvIGgze1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFncmFwaHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5wYXJhZ3JhcGhzIGJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogMTZweCA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW5hdmJhci1mb250KTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMERBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLHlCQUF5Qjs7SUFFekIsNEJBQTRCO0lBQzVCLHVCQUF1Qjs7O0lBR3ZCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7O0lBRTFCLFdBQVc7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYXJnYXJlZC1Cb2xkJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vTWFyZ2FyZXQtQm9sZC5vdGYnKSBmb3JtYXQoJ290ZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgLyogRm9udHMgKi9cXHJcXG4gICAgLS1uYXZiYXItZm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tbmF2YmFyLWZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFxyXFxuICAgIC0tbG9nby1mb250OiAnTWFyZ2FyZWQtQm9sZCc7XFxyXFxuICAgIC0tbG9nby1mb250LXdlaWdodDogNjAwO1xcclxcblxcclxcblxcclxcbiAgICAvKiBDb2xvcnMgKi9cXHJcXG4gICAgLS1iZy1uYXY6ICNiNWI2YjU7XFxyXFxuICAgIC0tYmctYm9keTogI2ZhZmFmYTtcXHJcXG4gICAgLS1uYXYtdGV4dC1jb2xvcjogIzYzNjM2MztcXHJcXG4gICAgLS1sb2dvLXRleHQtY29sb3I6ICNCRjU3Mjg7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tTkFWIEJBUi0tLS0gKi9cXHJcXG5cXHJcXG4udGl0bGV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWJvZHkpO1xcclxcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbn1cXHJcXG4udGl0bGUgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1sb2dvLWZvbnQtd2VpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxvZ28tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW5hdmJhci1mb250KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1uYXZiYXItZm9udC13ZWlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpeyAgICAgICBcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDhweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWJnLWJvZHkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTpob3ZlcntcXHJcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3RlZHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiA2NHB4IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gICAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8gaW1ne1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRJbmZve1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbmF2YmFyLWZvbnQpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZXh0SW5mbyBoM3tcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcXHJcXG4gICAgcGFkZGluZzogMjRweCAwO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xOGVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wYXJhZ3JhcGhze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWdyYXBocyBidXR0b257XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1uYXZiYXItZm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEltZ0luZm8gZnJvbSAnLi9yZXN0YXVyYW50LmpwZydcclxuaW1wb3J0IEltZ01lbnUgZnJvbSAnLi9tZW51LmpwZydcclxuaW1wb3J0IEltZ1Jlc2VydiBmcm9tICcuL3Jlc2Vydi5qcGcnXHJcblxyXG5leHBvcnQgY29uc3QgdGl0bGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXHJcblxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnR2lvdmFubmluaSdcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2JylcclxuICAgIGNvbnN0IFVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG5cclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKVxyXG4gICAgYWJvdXQuaWQgPSAnc2VsZWN0ZWQnXHJcbiAgICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCBVcydcclxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5mb0NvbXBvbmVudClcclxuICAgIFVsaXN0LmFwcGVuZENoaWxkKGFib3V0LmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICBjb25zdCBtZW51cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIG1lbnVzLmNsYXNzTGlzdC5hZGQoJ21lbnVzJylcclxuICAgIG1lbnVzLnRleHRDb250ZW50ID0gJ21lbnUnXHJcbiAgICBtZW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVDb21wb25lbnQpXHJcbiAgICBVbGlzdC5hcHBlbmRDaGlsZChtZW51cy5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgY29uc3QgcmVzZXJ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgcmVzZXJ2LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydicpXHJcbiAgICByZXNlcnYudGV4dENvbnRlbnQgPSAncmVzZXJ2YXRpb25zJ1xyXG4gICAgcmVzZXJ2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUNvbXBvbmVudClcclxuICAgIFVsaXN0LmFwcGVuZENoaWxkKHJlc2Vydi5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoVWxpc3QpXHJcblxyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQobmF2QmFyLmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmZvQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZW4uc3JjID0gSW1nSW5mb1xyXG4gICAgaW5mby5hcHBlbmRDaGlsZChpbWFnZW4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRleHRDYXJkSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0ZXh0Q2FyZEluZm8uY2xhc3NMaXN0LmFkZCgndGV4dEluZm8nKVxyXG4gICAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgdGl0bGVJbmZvLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJ1xyXG4gICAgdGV4dENhcmRJbmZvLmFwcGVuZENoaWxkKHRpdGxlSW5mby5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwYXJhZ3JhcGhzLmNsYXNzTGlzdC5hZGQoJ3BhcmFncmFwaHMnKVxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgY29uc3QgdGV4dEluZm8gPSBbJ0dpb3Zhbm5pbmkgaXMgYW4gZWxlZ2FudCB0YWtlIG9uIGNvbnRlbXBvcmFyeSBjdWlzaW5lIGN1cmF0ZWQgYnkgQXJnZW50aW5pYW4gY2hlZiBOYWh1ZWwgR2lvdmFuaW5pIGFuZCBoaXMgYnJvdGhlciwgcmVzdGF1cmF0ZXVyIEFsZXhpcyBHaW92YW5uaW5pLicsIFxyXG4gICAgICAgICAgICAgICAgICAnVGhlIGV4Y2x1c2l2ZSAxNi1zZWF0IGNvdW50ZXIsIGNvbmNlYWxlZCBieSBhbiBhcnQgZ2FsbGVyeSwgb2ZmZXJzIGFuIGludGltYXRlIGRpbmluZyBleHBlcmllbmNlIHdpdGggYW4gb3BlbiBraXRjaGVuIG92ZXJsb29raW5nIHRoZSBjaGVmXFwncyB3b3JrLicsXHJcbiAgICAgICAgICAgICAgICAgICdUd28gdGFibGVzIHRoYXQgYWNjb21tb2RhdGUgdXAgdG8gc2l4IGd1ZXN0cyBhcmUgYXZhaWxhYmxlIGZvciBsYXJnZXIgcGFydGllcy4nLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICB0ZXh0SW5mby5mb3JFYWNoKCh0ZXh0KSA9PiB7XHJcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgICAgIHBhcmFncmFwaHMuYXBwZW5kQ2hpbGQocGFyYWdyYXBoLmNsb25lTm9kZSgndHJ1ZScpKVxyXG4gICAgfSlcclxuICAgIHRleHRDYXJkSW5mby5hcHBlbmRDaGlsZChwYXJhZ3JhcGhzLmNsb25lTm9kZSgndHJ1ZScpKVxyXG4gICAgaW5mby5hcHBlbmRDaGlsZCh0ZXh0Q2FyZEluZm8uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGluZm8gXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVudUNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxyXG5cclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZW4uc3JjID0gSW1nTWVudVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChpbWFnZW4uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRleHRDYXJkSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0ZXh0Q2FyZEluZm8uY2xhc3NMaXN0LmFkZCgndGV4dEluZm8nKVxyXG4gICAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgdGl0bGVJbmZvLnRleHRDb250ZW50ID0gJ21lbnUgLSBPQ1RPQkVSIDIwMjInXHJcbiAgICB0ZXh0Q2FyZEluZm8uYXBwZW5kQ2hpbGQodGl0bGVJbmZvLmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgncGFyYWdyYXBocycpXHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG5cclxuICAgIGNvbnN0IHRleHRJbmZvID0gWyc8Yj5CTFVFIEZJTiBUVU5BPC9iPiwgQXZvY2FkbywgVHJvdXQgUm9lLCBIYXplbG51dCcsIFxyXG4gICAgICAgICAgICAgICAgICAnPGI+Q09STjwvYj4sIEZvaWUgR3JhcywgU21va2VkIEVlbCcsXHJcbiAgICAgICAgICAgICAgICAgICc8Yj5CVVRURVJOVVQgU1FVQVNIPC9iPiwgU2FnZSwgUGFybWVzYW4sIFdhZmZsZScsXHJcbiAgICAgICAgICAgICAgICAgICc8Yj5GT0NBQ0NJQTwvYj4sIEFwcGxlIFdvb2QgQnV0dGVyJyxcclxuICAgICAgICAgICAgICAgICAgJzxiPkNBTEFNQVJJPC9iPiwgQ2F1bGlmbG93ZXIgPHVsPjxsaT48Yj5LWU9UTyBDQVJST1Q8L2I+LCBPcmFuZ2UsIEFsbW9uZCwgRmluZ2VyIExpbWU8L2xpPk9SPGxpPjxiPkZPSUUgR1JBUzwvYj4sIEJsYWNrIFRydWZmbGUsIEFydGljaG9rZSA8ZW0+U3VwcC4gNjU8L2VtPjwvbGk+PC91bD4nLFxyXG4gICAgICAgICAgICAgICAgICAnPGI+TUFEQUk8L2I+LCBLb3NoaWhpa2FyaSBSaWNlLCBTYWZmcmFuLCBNdXNzZWxzJyxcclxuICAgICAgICAgICAgICAgICAgJzxiPlFVQUlMPC9iPiwgQ2FiYmFnZSwgQmxhY2sgR2FybGljLCBHaW5nZXIgPHVsPjxsaT48Yj5DT01URSAzNi1NT05USDwvYj4sIEhvbmV5LCBUcnVmZmxlIDxlbT5TdXBwLiAyNjwvZW0+PC9saT48L3VsPicsXHJcbiAgICAgICAgICAgICAgICAgICc8Yj5BUFBMRTwvYj4sIFdhc2FiaSwgQnVja3doZWF0LCBNYWtydXQgTGluZScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgIHRleHRJbmZvLmZvckVhY2goKHRleHQpID0+IHtcclxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IHRleHRcclxuICAgICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbS5jbG9uZU5vZGUoJ3RydWUnKSlcclxuICAgIH0pXHJcbiAgICB0ZXh0Q2FyZEluZm8uYXBwZW5kQ2hpbGQobWVudUl0ZW1zLmNsb25lTm9kZSgndHJ1ZScpKVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0ZXh0Q2FyZEluZm8uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG1lbnUgXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlc2VydkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzZXJ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHJlc2Vydi5jbGFzc0xpc3QuYWRkKCdpbmZvJylcclxuXHJcbiAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaW1hZ2VuLnNyYyA9IEltZ1Jlc2VydlxyXG4gICAgcmVzZXJ2LmFwcGVuZENoaWxkKGltYWdlbi5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdGV4dENhcmRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRleHRDYXJkSW5mby5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5mbycpXHJcbiAgICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICB0aXRsZUluZm8udGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zJ1xyXG4gICAgdGV4dENhcmRJbmZvLmFwcGVuZENoaWxkKHRpdGxlSW5mby5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwYXJhZ3JhcGhzLmNsYXNzTGlzdC5hZGQoJ3BhcmFncmFwaHMnKVxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG5cclxuICAgIGNvbnN0IHRleHRJbmZvID0gWydHaW92YW5uaW5pICBpcyBhIHJlc2VydmF0aW9uLW9ubHkgcmVzdGF1cmFudC4nLCBcclxuICAgICdUaGUgcmVzdGF1cmFudCBpcyBvcGVuIGZyb20gVHVlc2RheSB0byBTYXR1cmRheSBmb3IgZGlubmVyIHNlcnZpY2UuJyxcclxuICAgICdSZXNlcnZhdGlvbnMgYXJlIG9wZW4gb24gYSAzMC1kYXkgd2luZG93IGF2YWlsYWJpbGl0eS4nLFxyXG4gICAgJzxhIGhyZWY9XCJodHRwczovL2dvby5nbC9tYXBzLzdpaUNMTERtRXVEUVJzNHY2XCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTcwMCBSaXZhZGF2aWEgU3RyZWV0PC9hPicsXHJcbiAgICAnSWYgeW91IG5lZWQgdG8gc3BlYWsgd2l0aCB1cywgcGxlYXNlIGVtYWlsIHVzIGF0LCcsXHJcbiAgICAnPGEgaHJlZj1cIm1haWx0bzpyZXNlcnZhdGlvbnNAZ2lvdmFubmluaXJlc3RvLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPnJlc2VydmF0aW9uc0BnaW92YW5uaW5pcmVzdG8uY29tPC9hPicsXHJcbiAgICAnPGJ1dHRvbj5SZXNlcnZlIGEgdGFibGU8L2J1dHRvbj4nXHJcbiAgICBdXHJcblxyXG4gICAgdGV4dEluZm8uZm9yRWFjaCgodGV4dCkgPT4ge1xyXG4gICAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSB0ZXh0XHJcbiAgICAgICAgcGFyYWdyYXBocy5hcHBlbmRDaGlsZChwYXJhZ3JhcGguY2xvbmVOb2RlKCd0cnVlJykpXHJcbiAgICB9KVxyXG4gICAgdGV4dENhcmRJbmZvLmFwcGVuZENoaWxkKHBhcmFncmFwaHMuY2xvbmVOb2RlKCd0cnVlJykpXHJcbiAgICByZXNlcnYuYXBwZW5kQ2hpbGQodGV4dENhcmRJbmZvLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICBcclxuICAgIHJldHVybiByZXNlcnYgXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbmZvQ29tcG9uZW50LCB0aXRsZUNvbXBvbmVudCwgbWVudUNvbXBvbmVudCwgcmVzZXJ2Q29tcG9uZW50fSBmcm9tICcuL1BhZ2VBcHAnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBwYWdlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZClcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJylcclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGl0bGVDb21wb25lbnQoKSk7XHJcbiAgICBwYWdlLmFwcGVuZENoaWxkKGluZm9Db21wb25lbnQoKS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcclxufVxyXG5cclxucGFnZUNvbXBvbmVudCgpXHJcblxyXG5jb25zdCBjaGFuZ2VDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKVxyXG4gICAgcGFnZS5yZW1vdmVDaGlsZChwYWdlLmxhc3RDaGlsZClcclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29tcG9uZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xyXG59XHJcblxyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpXHJcbmNvbnN0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVzJylcclxuY29uc3QgcmVzZXJ2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydicpXHJcblxyXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gICAgYWJvdXQuaWQgPSAnc2VsZWN0ZWQnXHJcbiAgICBtZW51cy5pZCA9ICcnXHJcbiAgICByZXNlcnYuaWQgPSAnJ1xyXG4gICAgY2hhbmdlQ29tcG9uZW50KGluZm9Db21wb25lbnQoKSlcclxufSlcclxuXHJcbm1lbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XHJcbiAgICBtZW51cy5pZCA9ICdzZWxlY3RlZCdcclxuICAgIGFib3V0LmlkID0gJydcclxuICAgIHJlc2Vydi5pZCA9ICcnXHJcbiAgICBjaGFuZ2VDb21wb25lbnQobWVudUNvbXBvbmVudCgpKVxyXG59KVxyXG5yZXNlcnYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgIHJlc2Vydi5pZCA9ICdzZWxlY3RlZCdcclxuICAgIGFib3V0LmlkID0gJydcclxuICAgIG1lbnVzLmlkID0gJydcclxuICAgIGNoYW5nZUNvbXBvbmVudChyZXNlcnZDb21wb25lbnQoKSlcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==