"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"283b27c2e810\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDlhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI4M2IyN2MyZTgxMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/icons/ShoppingCart */ \"(app-pages-browser)/./src/components/icons/ShoppingCart.js\");\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppContext */ \"(app-pages-browser)/./src/components/AppContext.js\");\n/* harmony import */ var _icons_Bars2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Bars2 */ \"(app-pages-browser)/./src/components/icons/Bars2.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    var _session_data;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    const status = session.status;\n    const userData = (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n    let userName = (userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.email);\n    if (userName && userName.includes(\" \")) {\n        userName = userName.split(\" \")[0];\n    }\n    const { cartProducts } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_5__.CartContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-primary font-semibold\",\n                        children: \"ST PIZZA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/cart\",\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3\",\n                                        children: cartProducts.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Bars2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"All links for mobile\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center gap-8 text-gray-500 font-semibold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"text-primary font-semibold\",\n                                children: \"ST PIZZA\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/menu\",\n                                children: \"Menu\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center gap-4 text-gray-500 font-semibold\",\n                        children: [\n                            status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/profile\",\n                                        className: \"whitespace-nowrap\",\n                                        children: [\n                                            \"Hello, \",\n                                            userName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                        className: \"bg-primary rounded-full text-white px-8 py-2\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            status === \"unauthenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/login\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/register\",\n                                        className: \"bg-primary rounded-full text-white px-8 py-2\",\n                                        children: \"Register\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/cart\",\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this),\n                                    (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3\",\n                                        children: cartProducts.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"VQluya89IDtvE1rdRm5uUP88+4Q=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUN5QjtBQUVuQjtBQUN3QjtBQUNmO0FBQ1Q7QUFFcEIsU0FBU087UUFJTEM7O0lBSGpCLE1BQU1BLFVBQVVOLDJEQUFVQTtJQUMxQk8sUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFNBQVNILFFBQVFHLE1BQU07SUFDN0IsTUFBTUMsWUFBV0osZ0JBQUFBLFFBQVFLLElBQUksY0FBWkwsb0NBQUFBLGNBQWNNLElBQUk7SUFDbkMsSUFBSUMsV0FBV0gsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVSSxJQUFJLE1BQUlKLHFCQUFBQSwrQkFBQUEsU0FBVUssS0FBSztJQUNoRCxJQUFJRixZQUFZQSxTQUFTRyxRQUFRLENBQUMsTUFBTTtRQUN0Q0gsV0FBV0EsU0FBU0ksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ25DO0lBRUEsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR2pCLGlEQUFVQSxDQUFDRSxvREFBV0E7SUFDL0MscUJBQ0UsOERBQUNnQjs7MEJBQ0MsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3ZCLGtEQUFJQTt3QkFBQ3dCLE1BQUs7d0JBQUlELFdBQVU7a0NBQTZCOzs7Ozs7a0NBR3RELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUN2QixrREFBSUE7Z0NBQUN3QixNQUFLO2dDQUFRRCxXQUFVOztrREFDM0IsOERBQUNuQixzRUFBWUE7Ozs7O29DQUNaZ0IsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjSyxNQUFNLElBQUcsbUJBQ3RCLDhEQUFDQzt3Q0FBS0gsV0FBVTtrREFDYkgsYUFBYUssTUFBTTs7Ozs7Ozs7Ozs7OzBDQUkxQiw4REFBQ0U7Z0NBQU9KLFdBQVU7MENBQ2hCLDRFQUFDakIsb0RBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDZ0I7MEJBQUk7Ozs7OzswQkFDTCw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBSUwsV0FBVTs7MENBQ2IsOERBQUN2QixrREFBSUE7Z0NBQUN3QixNQUFLO2dDQUFJRCxXQUFVOzBDQUE2Qjs7Ozs7OzBDQUd0RCw4REFBQ3ZCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQUk7Ozs7OzswQ0FDZiw4REFBQ3hCLGtEQUFJQTtnQ0FBQ3dCLE1BQUs7MENBQVE7Ozs7OzswQ0FDbkIsOERBQUN4QixrREFBSUE7Z0NBQUN3QixNQUFLOzBDQUFVOzs7Ozs7MENBQ3JCLDhEQUFDeEIsa0RBQUlBO2dDQUFDd0IsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7O2tDQUV6Qiw4REFBQ0k7d0JBQUlMLFdBQVU7OzRCQUNaWixXQUFXLGlDQUNWOztrREFDRSw4REFBQ1gsa0RBQUlBO3dDQUFDd0IsTUFBSzt3Q0FBV0QsV0FBVTs7NENBQW9COzRDQUMxQ1I7Ozs7Ozs7a0RBRVYsOERBQUNZO3dDQUNDRSxTQUFTLElBQU01Qix3REFBT0E7d0NBQ3RCc0IsV0FBVTtrREFDWDs7Ozs7Ozs7NEJBS0paLFdBQVcsbUNBQ1Y7O2tEQUNFLDhEQUFDWCxrREFBSUE7d0NBQUN3QixNQUFLO2tEQUFTOzs7Ozs7a0RBQ3BCLDhEQUFDeEIsa0RBQUlBO3dDQUNId0IsTUFBSzt3Q0FDTEQsV0FBVTtrREFDWDs7Ozs7Ozs7MENBS0wsOERBQUN2QixrREFBSUE7Z0NBQUN3QixNQUFLO2dDQUFRRCxXQUFVOztrREFDM0IsOERBQUNuQixzRUFBWUE7Ozs7O29DQUNaZ0IsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjSyxNQUFNLElBQUcsbUJBQ3RCLDhEQUFDQzt3Q0FBS0gsV0FBVTtrREFDYkgsYUFBYUssTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBDO0dBL0V3QmxCOztRQUNOTCx1REFBVUE7OztLQURKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzPzljNDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJ0AvY29tcG9uZW50cy9pY29ucy9TaG9wcGluZ0NhcnQnO1xyXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4uL0FwcENvbnRleHQnO1xyXG5pbXBvcnQgQmFyczIgZnJvbSAnLi4vaWNvbnMvQmFyczInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XHJcbiAgY29uc3Qgc3RhdHVzID0gc2Vzc2lvbi5zdGF0dXM7XHJcbiAgY29uc3QgdXNlckRhdGEgPSBzZXNzaW9uLmRhdGE/LnVzZXI7XHJcbiAgbGV0IHVzZXJOYW1lID0gdXNlckRhdGE/Lm5hbWUgfHwgdXNlckRhdGE/LmVtYWlsO1xyXG4gIGlmICh1c2VyTmFtZSAmJiB1c2VyTmFtZS5pbmNsdWRlcygnICcpKSB7XHJcbiAgICB1c2VyTmFtZSA9IHVzZXJOYW1lLnNwbGl0KCcgJylbMF07XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNhcnRQcm9kdWN0cyB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1kOmhpZGRlblwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgIFNUIFBJWlpBXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgLz5cclxuICAgICAgICAgICAge2NhcnRQcm9kdWN0cz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1yaWdodC00IGJnLXByaW1hcnkgdGV4dC13aGl0ZSB0ZXh0LXhzIHB5LTEgcHgtMSByb3VuZGVkLWZ1bGwgbGVhZGluZy0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FydFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMVwiPlxyXG4gICAgICAgICAgICA8QmFyczIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5BbGwgbGlua3MgZm9yIG1vYmlsZTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC04IHRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICBTVCBQSVpaQVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tZW51XCI+TWVudTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiLyNjb250YWN0XCI+Q29udGFjdDwvTGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAge3N0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgSGVsbG8sIHt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBweC04IHB5LTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7c3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3JlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgcHgtOCBweS0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPFNob3BwaW5nQ2FydCAvPlxyXG4gICAgICAgICAgICB7Y2FydFByb2R1Y3RzPy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTIgLXJpZ2h0LTQgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHRleHQteHMgcHktMSBweC0xIHJvdW5kZWQtZnVsbCBsZWFkaW5nLTNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJ0UHJvZHVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VDb250ZXh0IiwiU2hvcHBpbmdDYXJ0IiwiQ2FydENvbnRleHQiLCJCYXJzMiIsIkhlYWRlciIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXNlckRhdGEiLCJkYXRhIiwidXNlciIsInVzZXJOYW1lIiwibmFtZSIsImVtYWlsIiwiaW5jbHVkZXMiLCJzcGxpdCIsImNhcnRQcm9kdWN0cyIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJsZW5ndGgiLCJzcGFuIiwiYnV0dG9uIiwibmF2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/Header.js\n"));

/***/ })

});