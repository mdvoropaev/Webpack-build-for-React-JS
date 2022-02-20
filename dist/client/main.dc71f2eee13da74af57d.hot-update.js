webpackHotUpdate("main",{

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\nwindow.addEventListener('load', function () {\n    react_dom_1.default.hydrate(react_1.default.createElement(Header_1.Header, null), document.getElementById('react_root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = exports.HeaderComponent = void 0;\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/header.scss\"));\nfunction HeaderComponent() {\n    return (react_1.default.createElement(\"header\", null,\n        react_1.default.createElement(\"h1\", { className: header_scss_1.default.example }, \"Hello React\"),\n        react_1.default.createElement(\"p\", { className: header_scss_1.default.example__text }, \"assembly ReactJS 14.02.2022\")));\n}\nexports.HeaderComponent = HeaderComponent;\nexports.Header = (0, root_1.hot)(HeaderComponent);\n\n\n//# sourceURL=webpack:///./src/shared/Header.jsx?");

/***/ })

})