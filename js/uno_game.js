/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/uno-game.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/uno-game.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/green_table.jpg */ \"./src/images/green_table.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".uno-game-div {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n}\\n\\n.uno-game-canv-default {\\n  position: absolute;\\n  display: block;\\n}\\n\\n.uno-game-canv-bkg {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://uno-game/./src/styles/uno-game.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://uno-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://uno-game/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/uno-game.scss":
/*!**********************************!*\
  !*** ./src/styles/uno-game.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_uno_game_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./uno-game.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/uno-game.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_uno_game_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_uno_game_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_uno_game_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_uno_game_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://uno-game/./src/styles/uno-game.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://uno-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/card_back.svg":
/*!**********************************!*\
  !*** ./src/images/card_back.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25c444c4f582dbc97530.svg\";\n\n//# sourceURL=webpack://uno-game/./src/images/card_back.svg?");

/***/ }),

/***/ "./src/images/cards.svg":
/*!******************************!*\
  !*** ./src/images/cards.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"377dcbde62f67ce002a7.svg\";\n\n//# sourceURL=webpack://uno-game/./src/images/cards.svg?");

/***/ }),

/***/ "./src/images/green_table.jpg":
/*!************************************!*\
  !*** ./src/images/green_table.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"494a6b831f5837e010b9.jpg\";\n\n//# sourceURL=webpack://uno-game/./src/images/green_table.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/basic_canvas.js */ \"./src/js/basic_canvas.js\");\n/* harmony import */ var _js_room_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/room.js */ \"./src/js/room.js\");\n/* harmony import */ var _js_box_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/box_text.js */ \"./src/js/box_text.js\");\n/* harmony import */ var _styles_uno_game_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/uno-game.scss */ \"./src/styles/uno-game.scss\");\n/* Class */\n\n\n\n/* SCSS */\n\n\n// Global variables\n__webpack_require__.g.canvas_count = 0; // increment number to avoid the same canvas id\n\n// uno-game-div must be found\n__webpack_require__.g.uno_game_div;\n__webpack_require__.g.uno_game_w = window.innerWidth;\n__webpack_require__.g.uno_game_h = window.innerHeight;\n\n/* Main view */\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Get uno-game-div\n  __webpack_require__.g.uno_game_div = document.getElementById('uno-game');\n  __webpack_require__.g.uno_game_div.classList.add('uno-game-div');\n\n  // Create background canv\n  const bkg = new _js_basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__.default(0, 0, __webpack_require__.g.uno_game_w, __webpack_require__.g.uno_game_h);\n  bkg.canvas.classList.add('uno-game-canv-bkg');\n\n  // Create room button\n  const create_room_box_text = new _js_box_text_js__WEBPACK_IMPORTED_MODULE_2__.default(__webpack_require__.g.uno_game_w*5/12, __webpack_require__.g.uno_game_h*3/4,\n      __webpack_require__.g.uno_game_w/6, __webpack_require__.g.uno_game_w/12, 'Create Game');\n\n  /* Canvas click */\n  create_room_box_text.canvas.addEventListener(\"click\", e => {\n    create_room_box_text.remove();\n    createRoom();\n  });\n});\n\n\n/* Game start */\nasync function createRoom() {\n  console.info('Game start');\n\n  const room = new _js_room_js__WEBPACK_IMPORTED_MODULE_1__.default('room1');\n\n  room.addHuman('newini');\n  room.addBot();\n  room.addBot();\n  room.addBot();\n\n  await( room.initCards() );\n\n  await( room.dealCards() );\n\n  await new Promise(resolve => setTimeout(resolve, 500));\n\n  await( room.startGame() );\n}\n\n\n\nconsole.log('Uno End')\n\n\n//# sourceURL=webpack://uno-game/./src/index.js?");

/***/ }),

/***/ "./src/js/basic_canvas.js":
/*!********************************!*\
  !*** ./src/js/basic_canvas.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicCanvas)\n/* harmony export */ });\nclass BasicCanvas {\n  constructor(x, y, w, h) {\n    this._x = x;\n    this._y = y;\n    this._w = w;\n    this._h = h;\n\n    // Create canvas\n    this._canvas = document.createElement(\"CANVAS\");\n    this._canvas.width = w;\n    this._canvas.height = h;\n    this._canvas.classList.add('uno-game-canv-default');\n\n    // Canvas style\n    this._z_index = __webpack_require__.g.canvas_count;\n    __webpack_require__.g.canvas_count++;\n    this._canvas.style = `left: ${x}px; top: ${y}px; z-index: ${this._z_index};`;\n\n    // Add to div\n    __webpack_require__.g.uno_game_div.appendChild( this._canvas );\n\n    // Get ctx\n    this._ctx = this._canvas.getContext('2d');\n  }\n\n  get canvas() {\n    return this._canvas;\n  }\n  set canvas(canvas) {\n    this._canvas = canvas;\n  }\n\n  get ctx() {\n    return this._ctx;\n  }\n  set ctx(ctx) {\n    this._ctx = ctx;\n  }\n\n  clear() {\n    this._ctx.clearRect(0, 0, __webpack_require__.g.uno_game_w, __webpack_require__.g.uno_game_h);\n  }\n\n  resetEventListener() {\n    // clone canvas and replace w/o event listener\n    const canvas = this._canvas.cloneNode(true);\n    const ctx = canvas.getContext('2d');\n    this._canvas.parentNode.replaceChild(canvas, this._canvas);\n    ctx.drawImage(this._canvas, 0, 0)\n    this._canvas.remove();\n    this._canvas = canvas;\n    this._ctx = ctx;\n  }\n\n  move(x, y) {\n    this._x = x;\n    this._y = y;\n    this._canvas.style.left = x + 'px';\n    this._canvas.style.top = y + 'px';\n  }\n\n  scale(scale) {\n    this._canvas.style.width = this._w * scale + 'px';\n    this._canvas.style.height = this._h * scale + 'px';\n  }\n\n  refresh() {\n    this._canvas.style.zIndex = __webpack_require__.g.canvas_count;\n    __webpack_require__.g.canvas_count++;\n  }\n\n  remove() {\n    this._canvas.remove();\n  }\n\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/basic_canvas.js?");

/***/ }),

/***/ "./src/js/bot.js":
/*!***********************!*\
  !*** ./src/js/bot.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bot)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n\n\nclass Bot extends _player_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(name, id) {\n    super(name+id, id);\n    this._type = 'bot';\n  }\n\n  playCard(top_card) {\n    for (let i=0; i<this._cards.length; i++) {\n      const card = this._cards[i];\n      if ( top_card.isMatch(card) ) {\n        this._cards.splice(i, 1)[0];\n        return card;\n      }\n    }\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/bot.js?");

/***/ }),

/***/ "./src/js/box_text.js":
/*!****************************!*\
  !*** ./src/js/box_text.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoxText)\n/* harmony export */ });\n/* harmony import */ var _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_canvas.js */ \"./src/js/basic_canvas.js\");\n\n\nclass BoxText extends _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, w, h, text) {\n    super(x, y, w, h);\n\n    this._text = text;\n\n    this._ctx.lineWidth = 4;\n    this._ctx.fillStyle = \"#abc\";\n    this._ctx.fillRect(0, 0, w, h);\n    this._ctx.font = Math.floor(h/3)+\"px Arial\";\n    this._ctx.textAlign=\"center\";\n    this._ctx.textBaseline = \"middle\";\n    this._ctx.fillStyle = \"#000000\";\n    this._ctx.fillText(text, w/2, h/2);\n  }\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/box_text.js?");

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_canvas.js */ \"./src/js/basic_canvas.js\");\n/* harmony import */ var _images_cards_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cards.svg */ \"./src/images/cards.svg\");\n/* harmony import */ var _images_card_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/card_back.svg */ \"./src/images/card_back.svg\");\n\n/* Images */\n\n\n\nclass Card extends _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, num, color_n) {\n    super(x, y, __webpack_require__.g.uno_game_w/16, __webpack_require__.g.uno_game_w/16*360/240);\n\n    this._c_w = 240;\n    this._c_h = 360;\n\n    this._num = num;\n    this._color_n = color_n;\n\n    this._cards_img = new Image();\n    this._cards_img.src = _images_cards_svg__WEBPACK_IMPORTED_MODULE_1__;\n    this._card_back_img = new Image();\n    this._card_back_img.src = _images_card_back_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n    // Add border\n    this._canvas.style.border = '1px solid #000000';\n\n    // Add transition\n    this._canvas.style.transition = '0.5s';\n\n    // Fill\n    this._card_back_img.addEventListener('load', () => {\n      this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);\n      this._is_front = false;\n    });\n  }\n\n  get num() {\n    return this._num;\n  }\n  set num(num) {\n    this._num = num;\n  }\n  get color_n() {\n    return this._color_n;\n  }\n  set color_n(color_n) {\n    this._color_n = color_n;\n  }\n\n  isMatch(card) {\n    if ( (this._num <= 12 && this._num === card.num)\n      || (this._num >= 13)\n      || (this._color_n === card.color_n) ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  flip() {\n    this.clear();\n    if (this._is_front) {\n      this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);\n      this._is_front = false;\n    } else {\n      this._cards_img.addEventListener('load', () => {\n        this._ctx.drawImage(this._cards_img, 1+this._c_w*this._num, 1+this._c_h*this._color_n, this._c_w, this._c_h,\n            0, 0, this._w, this._h);\n        this._is_front = true;\n      });\n    }\n  }\n\n  drawImageFront(x, y) {\n    this.move(x, y);\n    this.clear();\n    this._ctx.drawImage(this._cards_img, 1+this._c_w*this._num, 1+this._c_h*this._color_n, this._c_w, this._c_h,\n        0, 0, this._w, this._h);\n  }\n\n  drawImageBack(x, y) {\n    this.move(x, y);\n    this.clear();\n    this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);\n  }\n\n  mouseEffect() {\n    this._canvas.addEventListener('mouseenter', () => {\n      console.log(this._canvas.style.top)\n      console.log(this._y)\n      console.log(this._h/4)\n      this._canvas.style.top = this._y - this._h/4 + 'px';\n      console.log(this._canvas.style.top)\n    });\n    this._canvas.addEventListener('mouseleave', () => {\n      console.log(this._canvas.style.top)\n      this._canvas.style.top = this._y + 'px';\n      console.log(this._canvas.style.top)\n    });\n  }\n\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/card.js?");

/***/ }),

/***/ "./src/js/human.js":
/*!*************************!*\
  !*** ./src/js/human.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Human)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n\n\nclass Human extends _player_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(name, id) {\n    super(name, id);\n\n    this._type = 'human';\n  }\n\n  playCard(top_card) {\n    return this._cards.splice(0, 1)[0];\n  }\n\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/human.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_canvas.js */ \"./src/js/basic_canvas.js\");\n\n\nclass Player extends _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(name, id) {\n    super();\n\n    this._name = name;\n    this._id = id;\n    this._cards = [];\n    this._type = '';\n  }\n\n  get id() {\n    return this._id;\n  }\n  set id(id) {\n    this._id = id;\n  }\n\n  get name() {\n    return this._name;\n  }\n  set name(name) {\n    this._name = name;\n  }\n\n  get type() {\n    return this._type;\n  }\n  set type(type) {\n    this._type = type;\n  }\n\n  get cards() {\n    return this._cards;\n  }\n  set cards(cards) {\n    this._cards = cards;\n  }\n\n  addCard(card) {\n    this._cards.push(card);\n    this.sortCards();\n    if (this.type === 'human') {\n      card.flip();\n    }\n  }\n\n  removeCard(card) {\n    this._cards.splice(this._cards.indexOf(card), 1);\n  }\n\n  isEmpty() {\n    return (this._cards.length === 0) ? true : false;\n  }\n\n  refreshCards() {\n    for (let i=0; i<this._cards.length; i++) {\n      let x0, y0, dx, dy;\n      if (this._id === 0) {\n        x0 = __webpack_require__.g.uno_game_w/4;\n        dx = __webpack_require__.g.uno_game_w/2 / (this._cards.length+1);\n        y0 = __webpack_require__.g.uno_game_h*4/5;\n        dy = 0;\n        this._cards[i].move(x0 + dx*(i+1), y0 + dy*(i+1));\n      } else {\n        x0 = __webpack_require__.g.uno_game_w*(this._id-1)/3;\n        dx = __webpack_require__.g.uno_game_w/3 / (this._cards.length+2);\n        this._cards[i].move(x0 + dx*(i+1), this.ellipticalFormula(x0 + dx*(i+1), __webpack_require__.g.uno_game_w/2, __webpack_require__.g.uno_game_h));\n      }\n    }\n  }\n\n  sortCards() {\n    this._cards.sort( (a, b) => (a.num > b.num) ? 1 : -1 );\n    this.refreshCards();\n  }\n\n\n  ellipticalFormula(x, a, b) {\n    return b * ( 1 - Math.sqrt( 1 - (x/a - 1)**2 ) );\n  }\n\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/player.js?");

/***/ }),

/***/ "./src/js/room.js":
/*!************************!*\
  !*** ./src/js/room.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Room)\n/* harmony export */ });\n/* harmony import */ var _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_canvas.js */ \"./src/js/basic_canvas.js\");\n/* harmony import */ var _human_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./human.js */ \"./src/js/human.js\");\n/* harmony import */ var _bot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot.js */ \"./src/js/bot.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.js */ \"./src/js/card.js\");\n\n\n\n\n/* Images */\n\nclass Room extends _basic_canvas_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(name) {\n    super(0, 0, __webpack_require__.g.uno_game_w, __webpack_require__.g.uno_game_h/10);\n\n    this._name = name;\n    this._players = [];\n    this._cards = [];\n    this._used_cards = [];\n\n    // Fill room name\n    this._ctx.font = Math.floor(this._h/3) + \"px Arial\";\n    this._ctx.fillText(name, 10, 50);\n  }\n\n  addHuman(name) {\n    this._players.push( new _human_js__WEBPACK_IMPORTED_MODULE_1__.default(name, this._players.length) );\n    console.log(this._players);\n  }\n\n  addBot() {\n    this._players.push( new _bot_js__WEBPACK_IMPORTED_MODULE_2__.default('bot', this._players.length) );\n    console.log(this._players);\n  }\n\n  initCards() {\n    console.log('Init')\n    const index_arr = [...Array(108).keys()];\n    for (let num=0; num<14; num++) {\n      for (let color_n=0; color_n<8; color_n++) {\n        if ( (num === 0) && (color_n >= 4) ) { // Skip blank card\n          continue;\n        }\n        if ( (num === 13) && (color_n >= 4) ) { // +4 cards\n          num = 14;\n        }\n        const card_index = index_arr.splice(Math.floor( Math.random() * index_arr.length), 1)[0];\n        this._cards[ card_index ] = new _card_js__WEBPACK_IMPORTED_MODULE_3__.default(__webpack_require__.g.uno_game_w*6/16+card_index, __webpack_require__.g.uno_game_h/2, num, color_n%4);\n      }\n    }\n    // re-order z-index\n    for (let i=0; i<this._cards.length; i++) {\n      this._cards[i].refresh();\n    }\n    console.log(this._cards);\n  }\n\n  dealCards() {\n    console.log('Deal cards')\n    this._players.forEach( (player) => {\n      for (let i=0; i<7; i++) {\n        player.addCard( this._cards.pop() );\n      }\n    });\n    console.log(this._players);\n  }\n\n  async startGame() {\n    console.log('Game start');\n\n    this._turn_count = 0;\n\n    await( this.changeTopCard( this._cards.pop() ) );\n\n    await( this._current_player = this._players[0] );\n\n    if (this._current_player.type === 'bot') {\n      this.botPlay();\n    } else {\n      this.humanTurn();\n    }\n\n    //  if (player.isEmpty()) {\n    //    console.log('player: ' + player.name + ' has no card left. Game end');\n    //    break\n    //  }\n  }\n\n  async processPlay() {\n    await( this._current_player.refreshCards() );\n\n    this._turn_count++;\n    this._current_player = this.getNextPlayer();\n    if (this._current_player.type === 'human') {\n      this.humanTurn();\n    } else {\n      this.botPlay();\n    }\n  }\n\n  async botPlay() {\n    console.log('Turn count: ' + this._turn_count + ', current player: ' + this._current_player.name);\n    await new Promise(resolve => setTimeout(resolve, 1000));\n\n    const card = await( this._current_player.playCard(this._top_card) );\n    if (card) {\n      console.log('played card num: ' + card.num + ', color: ' + card.color_n);\n      this.changeTopCard(card);\n    } else {\n      const card = this._cards.pop();\n      console.log('drawed card num: ' + card.num + ', color: ' + card.color_n);\n      this._current_player.addCard(card);\n    }\n\n    this.processPlay();\n  }\n\n  humanTurn() {\n    console.log('Turn count: ' + this._turn_count + ', current player: ' + this._current_player.name);\n\n    this._current_player.cards.forEach( (card) => {\n      if (this._top_card.isMatch(card)) {\n        card.mouseEffect();\n\n        card.canvas.addEventListener('click', () => {\n          console.log('played card num: ' + card.num + ', color: ' + card.color_n);\n\n          // Remove all cards' event listener\n          this._current_player.cards.forEach( (card) => {\n            card.resetEventListener();\n          });\n\n          this.changeTopCard(card);\n\n          this._current_player.removeCard(card);\n\n          this.processPlay();\n        });\n      }\n    });\n\n  }\n\n  getNextPlayer() {\n    let current_player_id = this._current_player.id;\n    if (this._reverse) {\n      if (current_player_id === 0) {\n        current_player_id = this._players.length - 1;\n      } else {\n        current_player_id--;\n      }\n    } else {\n      if (current_player_id === this._players.length-1) {\n        current_player_id = 0;\n      } else {\n        current_player_id++;\n      }\n    }\n    return this._players[current_player_id];\n  }\n\n  changeTopCard(card) {\n    if (this._top_card) {\n      this._used_cards.push(this._top_card);\n    }\n    this._top_card = card;\n    this._top_card.drawImageFront(__webpack_require__.g.uno_game_w*8/16+this._turn_count, __webpack_require__.g.uno_game_h/2);\n    this._top_card.refresh();\n  }\n\n}\n\n\n//# sourceURL=webpack://uno-game/./src/js/room.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;