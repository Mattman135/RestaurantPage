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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --header-bc: rgba(34, 102, 141);\r\n    --middle-bs: rgba(34, 102, 141);\r\n    --footer-bs: rgba(34, 102, 141);\r\n    --text-color: rgba(255, 250, 221);\r\n    --img-bc: rgba(255, 255, 255, .5);\r\n    --bc: rgba(255, 204, 112);\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.content {\r\n    min-height: 110vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: var(--text-color);\r\n    font-weight: bold;\r\n    background-color: var(--bc);\r\n}\r\n\r\n\r\n\r\n/*header elements*/\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background-color: var(--header-bc);\r\n    width: 100vw;\r\n    padding: 12px;\r\n}\r\n\r\n.buttonsDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 12px;\r\n}\r\n\r\n.buttonsDiv button {\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    color: var(--text-color);\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n/*middle div elements*/\r\n.middleDiv {\r\n    width: 500px;\r\n    min-height: 500px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.middleDivHome {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--middle-bs);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.middleDivHome img {\r\n    width: 275px;\r\n    height: 275px;\r\n    border-radius: 150px;\r\n    background-color: white;\r\n    padding: 2px;\r\n    outline: 3px solid var(--bc);\r\n}\r\n\r\n.middleDivMenu {\r\n    width: 500px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 12px;\r\n    padding: 12px;\r\n    margin: 20px;\r\n    background-color: var(--middle-bs);\r\n}\r\n\r\n.middleDivMenu img {\r\n    width: 150px;\r\n    height: 150px;\r\n    background-color: var(--header-bc);\r\n    padding: 20px;\r\n}\r\n\r\n.middleDivMenu img:hover {\r\n    scale: .985;\r\n    cursor: pointer;\r\n    transition: 200ms;\r\n}\r\n\r\n.imgDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 8px;\r\n    font-weight: normal;\r\n}\r\n\r\n.middleDivContact {\r\n    background-color: var(--middle-bs);\r\n    color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 10px;\r\n    color: var(--text-color);\r\n}\r\n\r\n.middleDivContact div p {\r\n    margin: 8px;\r\n}\r\n\r\n.middleDivContact iframe {\r\n    width: 480px;\r\n    height: 300px;\r\n}\r\n\r\n.address::before {\r\n    content: '📍';\r\n}\r\n\r\n.phoneNumber::before {\r\n    content: '📱';\r\n}\r\n\r\n/*footer elements*/\r\n.footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    text-align: center;\r\n    width: 100vw;\r\n    background-color: var(--footer-bs);\r\n    font-size: large;\r\n    padding: 8px;\r\n    color: white;\r\n}\r\n\r\n.footer img {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction loadContactPage() { \r\n    const middleDiv = document.querySelector('.middleDiv');\r\n    middleDiv.setAttribute('class', 'middleDiv middleDivContact');\r\n\r\n    const googleLink = document.createElement('iframe');\r\n    googleLink.id = 'inlineFrameExample';\r\n    googleLink.title = 'Inline fram example';\r\n    googleLink.src = \"https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik\";\r\n    googleLink.style = 'border:0';\r\n    googleLink.loading = 'lazy';\r\n    googleLink.allowFullscreen = true;\r\n    googleLink.referrerPolicy = 'no-referrer-when-downgrade';\r\n\r\n\r\n    const div = document.createElement('div');\r\n    const address = document.createElement('p');\r\n    address.setAttribute('class', 'address');\r\n    address.innerHTML = '666 Oakwood The Number of the Beast Avenue';\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.setAttribute('class', 'phoneNumber');\r\n    phoneNumber.innerHTML = '(666)-666 6666';\r\n    div.appendChild(address);\r\n    div.appendChild(phoneNumber);\r\n\r\n\r\n    middleDiv.appendChild(googleLink);\r\n    middleDiv.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://restaurantpage/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction loadHomePage() { \r\n    const middleDiv = document.querySelector('.middleDiv');\r\n    middleDiv.setAttribute('class', 'middleDiv middleDivHome');\r\n\r\n    const text1 = document.createElement('p');\r\n    text1.innerHTML = 'Made with passion since 1953';\r\n    const text2 = document.createElement('p');\r\n    text2.innerHTML = 'Order online or visit us';\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'images/chef.png'\r\n    image.alt = 'image';\r\n\r\n    middleDiv.appendChild(text1);\r\n    middleDiv.appendChild(image);\r\n    middleDiv.appendChild(text2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n//# sourceURL=webpack://restaurantpage/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _removeAllChildNodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllChildNodes */ \"./src/removeAllChildNodes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n  const contentDiv = document.querySelector('#content');\r\n  contentDiv.classList.add('content');\r\n\r\n\r\n  // header\r\n  const headerDiv = document.createElement('div');\r\n  headerDiv.classList.add('header');\r\n\r\n  const title = document.createElement('h1');\r\n  title.innerHTML = 'Bon Appétit';\r\n\r\n  const buttonsDiv = document.createElement('div');\r\n  buttonsDiv.classList.add('buttonsDiv');\r\n\r\n  const homeBtn = document.createElement('button');\r\n  homeBtn.innerHTML = 'Home';\r\n  homeBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(middleDiv);\r\n    (0,_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  })\r\n\r\n  const menuBtn = document.createElement('button');\r\n  menuBtn.innerHTML = 'Menu';\r\n  menuBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(middleDiv);\r\n    (0,_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  })\r\n\r\n  const contactBtn = document.createElement('button');\r\n  contactBtn.innerHTML = 'Contact';\r\n  contactBtn.addEventListener('click', () => {\r\n    (0,_removeAllChildNodes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(middleDiv);\r\n    (0,_contactPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  })\r\n\r\n  buttonsDiv.appendChild(homeBtn);\r\n  buttonsDiv.appendChild(menuBtn);\r\n  buttonsDiv.appendChild(contactBtn);\r\n\r\n  headerDiv.appendChild(title);\r\n  headerDiv.appendChild(buttonsDiv);\r\n\r\n\r\n  // middle content\r\n  const middleDiv = document.createElement('div');\r\n  middleDiv.classList.add('middleDiv');\r\n \r\n\r\n\r\n  // footer\r\n  const footerDiv = document.createElement('div');\r\n  footerDiv.classList.add('footer');\r\n  footerDiv.innerHTML = '© 2023 Mattman135';\r\n\r\n  const footerLink = document.createElement('a');\r\n  footerLink.href = 'https://github.com/Mattman135/RestaurantPage'; // change this to the correct link later\r\n  const footerImg = document.createElement('img');\r\n  footerImg.src = 'images/github-mark-white.png';\r\n  footerImg.alt = 'github-image';\r\n  footerLink.appendChild(footerImg);\r\n\r\n  footerDiv.appendChild(footerLink);\r\n\r\n  contentDiv.appendChild(headerDiv);\r\n  contentDiv.appendChild(middleDiv);\r\n  contentDiv.appendChild(footerDiv);\r\n  return contentDiv;\r\n}\r\n\r\nconst tabIcon = document.createElement('link');\r\ntabIcon.rel = 'icon';\r\ntabIcon.href = 'images/cutlery.png';\r\ntabIcon.type = 'image/x-icon';\r\ndocument.head.appendChild(tabIcon);\r\n\r\n\r\ndocument.body.appendChild(component());\r\ndocument.body.onload = (0,_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nfunction loadMenuPage() { \r\n    const middleDiv = document.querySelector('.middleDiv');\r\n    middleDiv.setAttribute('class', 'middleDiv middleDivMenu');\r\n\r\n\r\n    // coffe\r\n    const imgDiv1 = document.createElement('div');\r\n    imgDiv1.classList.add('imgDiv');\r\n    const img1 = document.createElement('img');\r\n    img1.src = 'images/coffe.png';\r\n    img1.alt = 'coffe image';\r\n    const img1Text = document.createElement('p');\r\n    img1Text.innerHTML = 'Coffe';\r\n    imgDiv1.appendChild(img1);\r\n    imgDiv1.appendChild(img1Text);\r\n\r\n    // hamburger\r\n    const imgDiv2 = document.createElement('div');\r\n    imgDiv2.classList.add('imgDiv');\r\n    const img2 = document.createElement('img');\r\n    img2.src = 'images/hamburger.png';\r\n    img2.alt = 'hamburger image';\r\n    const img2Text = document.createElement('p');\r\n    img2Text.innerHTML = 'Hamburger';\r\n    imgDiv2.appendChild(img2);\r\n    imgDiv2.appendChild(img2Text);\r\n\r\n    // hotdog\r\n    const imgDiv3 = document.createElement('div');\r\n    imgDiv3.classList.add('imgDiv');\r\n    const img3 = document.createElement('img');\r\n    img3.src = 'images/hotdog.png';\r\n    img3.alt = 'hotdog image';\r\n    const img3Text = document.createElement('p');\r\n    img3Text.innerHTML = 'Hotdog';\r\n    imgDiv3.appendChild(img3);\r\n    imgDiv3.appendChild(img3Text);\r\n\r\n    // mixed\r\n    const imgDiv4 = document.createElement('div');\r\n    imgDiv4.classList.add('imgDiv');\r\n    const img4 = document.createElement('img');\r\n    img4.src = 'images/mixed.png';\r\n    img4.alt = 'mixed image';\r\n    const img4Text = document.createElement('p');\r\n    img4Text.innerHTML = 'Mixed';\r\n    imgDiv4.appendChild(img4);\r\n    imgDiv4.appendChild(img4Text);\r\n\r\n    // salad\r\n    const imgDiv5 = document.createElement('div');\r\n    imgDiv5.classList.add('imgDiv');\r\n    const img5 = document.createElement('img');\r\n    img5.src = 'images/salad.png';\r\n    img5.alt = 'salad image';\r\n    const img5Text = document.createElement('p');\r\n    img5Text.innerHTML = 'Salad';\r\n    imgDiv5.appendChild(img5);\r\n    imgDiv5.appendChild(img5Text);\r\n\r\n    // salmon\r\n    const imgDiv6 = document.createElement('div');\r\n    imgDiv6.classList.add('imgDiv');\r\n    const img6 = document.createElement('img');\r\n    img6.src = 'images/salmon.png';\r\n    img6.alt = 'salmon image';\r\n    const img6Text = document.createElement('p');\r\n    img6Text.innerHTML = 'Salmon';\r\n    imgDiv6.appendChild(img6);\r\n    imgDiv6.appendChild(img6Text);\r\n\r\n    // sandwich\r\n    const imgDiv7 = document.createElement('div');\r\n    imgDiv7.classList.add('imgDiv');\r\n    const img7 = document.createElement('img');\r\n    img7.src = 'images/sandwich.png';\r\n    img7.alt = 'sandwich image';\r\n    const img7Text = document.createElement('p');\r\n    img7Text.innerHTML = 'Sandwich';\r\n    imgDiv7.appendChild(img7);\r\n    imgDiv7.appendChild(img7Text);\r\n\r\n    // schrimps\r\n    const imgDiv8 = document.createElement('div');\r\n    imgDiv8.classList.add('imgDiv');\r\n    const img8 = document.createElement('img');\r\n    img8.src = 'images/schrimps.png';\r\n    img8.alt = 'schrimps image';\r\n    const img8Text = document.createElement('p');\r\n    img8Text.innerHTML = 'Schrimps';\r\n    imgDiv8.appendChild(img8);\r\n    imgDiv8.appendChild(img8Text);\r\n\r\n    // spare ribs\r\n    const imgDiv9 = document.createElement('div');\r\n    imgDiv9.classList.add('imgDiv');\r\n    const img9 = document.createElement('img');\r\n    img9.src = 'images/spareribs.png';\r\n    img9.alt = 'spare ribs image';\r\n    const img9Text = document.createElement('p');\r\n    img9Text.innerHTML = 'Spare ribs';\r\n    imgDiv9.appendChild(img9);\r\n    imgDiv9.appendChild(img9Text);\r\n\r\n    // steak\r\n    const imgDiv10 = document.createElement('div');\r\n    imgDiv10.classList.add('imgDiv');\r\n    const img10 = document.createElement('img');\r\n    img10.src = 'images/steak.png';\r\n    img10.alt = 'steak image';\r\n    const img10Text = document.createElement('p');\r\n    img10Text.innerHTML = 'Steak';\r\n    imgDiv10.appendChild(img10);\r\n    imgDiv10.appendChild(img10Text);\r\n\r\n    // sushi\r\n    const imgDiv11 = document.createElement('div');\r\n    imgDiv11.classList.add('imgDiv');\r\n    const img11 = document.createElement('img');\r\n    img11.src = 'images/sushi.png';\r\n    img11.alt = 'sushi image';\r\n    const img11Text = document.createElement('p');\r\n    img11Text.innerHTML = 'Sushi';\r\n    imgDiv11.appendChild(img11);\r\n    imgDiv11.appendChild(img11Text);\r\n\r\n    // taco\r\n    const imgDiv12 = document.createElement('div');\r\n    imgDiv12.classList.add('imgDiv');\r\n    const img12 = document.createElement('img');\r\n    img12.src = 'images/taco.png';\r\n    img12.alt = 'taco image';\r\n    const img12Text = document.createElement('p');\r\n    img12Text.innerHTML = 'Taco';\r\n    imgDiv12.appendChild(img12);\r\n    imgDiv12.appendChild(img12Text);\r\n\r\n    // append\r\n    middleDiv.appendChild(imgDiv1);\r\n    middleDiv.appendChild(imgDiv2);\r\n    middleDiv.appendChild(imgDiv3);\r\n    middleDiv.appendChild(imgDiv4);\r\n    middleDiv.appendChild(imgDiv5);\r\n    middleDiv.appendChild(imgDiv6);\r\n    middleDiv.appendChild(imgDiv7);\r\n    middleDiv.appendChild(imgDiv8);\r\n    middleDiv.appendChild(imgDiv9);\r\n    middleDiv.appendChild(imgDiv10);\r\n    middleDiv.appendChild(imgDiv11);\r\n    middleDiv.appendChild(imgDiv12);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\n\n//# sourceURL=webpack://restaurantpage/./src/menuPage.js?");

/***/ }),

/***/ "./src/removeAllChildNodes.js":
/*!************************************!*\
  !*** ./src/removeAllChildNodes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction removeAllChildNodes(parent) {\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);\n\n//# sourceURL=webpack://restaurantpage/./src/removeAllChildNodes.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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