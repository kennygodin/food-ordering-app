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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1ed8d601bef1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MDlhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFlZDhkNjAxYmVmMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/icons/ShoppingCart */ \"(app-pages-browser)/./src/components/icons/ShoppingCart.js\");\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AppContext */ \"(app-pages-browser)/./src/components/AppContext.js\");\n/* harmony import */ var _icons_Bars2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/Bars2 */ \"(app-pages-browser)/./src/components/icons/Bars2.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AuthLinks(param) {\n    let { status, userName } = param;\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/profile\",\n                    className: \"whitespace-nowrap\",\n                    children: [\n                        \"Hello, \",\n                        userName\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    className: \"bg-primary rounded-full text-white px-8 py-2\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    if (status === \"unauthenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/register\",\n                    className: \"bg-primary rounded-full text-white px-8 py-2\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_c = AuthLinks;\nfunction Header() {\n    var _session_data;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    const status = session.status;\n    const userData = (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user;\n    let userName = (userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.email);\n    if (userName && userName.includes(\" \")) {\n        userName = userName.split(\" \")[0];\n    }\n    const { cartProducts } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_5__.CartContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-primary font-semibold\",\n                        children: \"ST PIZZA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/cart\",\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3\",\n                                        children: cartProducts.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_Bars2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden p-4 bg-gray-200 rounded-lg mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/menu\",\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/#about\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/#contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center gap-8 text-gray-500 font-semibold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"text-primary font-semibold\",\n                                children: \"ST PIZZA\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/menu\",\n                                children: \"Menu\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/#contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center gap-4 text-gray-500 font-semibold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthLinks, {\n                                status: status,\n                                userName: userName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/cart\",\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3\",\n                                        children: cartProducts.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\myprojects\\\\food-ordering\\\\src\\\\components\\\\layout\\\\Header.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"VQluya89IDtvE1rdRm5uUP88+4Q=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"AuthLinks\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUN5QjtBQUVuQjtBQUN3QjtBQUNmO0FBQ1Q7QUFFbkMsU0FBU08sVUFBVSxLQUFvQjtRQUFwQixFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFwQjtJQUNqQixJQUFJRCxXQUFXLGlCQUFpQjtRQUM5QixxQkFDRTs7OEJBQ0UsOERBQUNSLGtEQUFJQTtvQkFBQ1UsTUFBSztvQkFBV0MsV0FBVTs7d0JBQW9CO3dCQUMxQ0Y7Ozs7Ozs7OEJBRVYsOERBQUNHO29CQUNDQyxTQUFTLElBQU1aLHdEQUFPQTtvQkFDdEJVLFdBQVU7OEJBQ1g7Ozs7Ozs7O0lBS1A7SUFDQSxJQUFJSCxXQUFXLG1CQUFtQjtRQUNoQyxxQkFDRTs7OEJBQ0UsOERBQUNSLGtEQUFJQTtvQkFBQ1UsTUFBSzs4QkFBUzs7Ozs7OzhCQUNwQiw4REFBQ1Ysa0RBQUlBO29CQUNIVSxNQUFLO29CQUNMQyxXQUFVOzhCQUNYOzs7Ozs7OztJQUtQO0FBQ0Y7S0E3QlNKO0FBK0JNLFNBQVNPO1FBSUxDOztJQUhqQixNQUFNQSxVQUFVYiwyREFBVUE7SUFDMUJjLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNUCxTQUFTTyxRQUFRUCxNQUFNO0lBQzdCLE1BQU1VLFlBQVdILGdCQUFBQSxRQUFRSSxJQUFJLGNBQVpKLG9DQUFBQSxjQUFjSyxJQUFJO0lBQ25DLElBQUlYLFdBQVdTLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVUcsSUFBSSxNQUFJSCxxQkFBQUEsK0JBQUFBLFNBQVVJLEtBQUs7SUFDaEQsSUFBSWIsWUFBWUEsU0FBU2MsUUFBUSxDQUFDLE1BQU07UUFDdENkLFdBQVdBLFNBQVNlLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuQztJQUVBLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUd0QixpREFBVUEsQ0FBQ0Usb0RBQVdBO0lBQy9DLHFCQUNFLDhEQUFDcUI7OzBCQUNDLDhEQUFDQztnQkFBSWhCLFdBQVU7O2tDQUNiLDhEQUFDWCxrREFBSUE7d0JBQUNVLE1BQUs7d0JBQUlDLFdBQVU7a0NBQTZCOzs7Ozs7a0NBR3RELDhEQUFDZ0I7d0JBQUloQixXQUFVOzswQ0FDYiw4REFBQ1gsa0RBQUlBO2dDQUFDVSxNQUFLO2dDQUFRQyxXQUFVOztrREFDM0IsOERBQUNQLHNFQUFZQTs7Ozs7b0NBQ1pxQixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNHLE1BQU0sSUFBRyxtQkFDdEIsOERBQUNDO3dDQUFLbEIsV0FBVTtrREFDYmMsYUFBYUcsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUkxQiw4REFBQ2hCO2dDQUFPRCxXQUFVOzBDQUNoQiw0RUFBQ0wsb0RBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDcUI7Z0JBQUloQixXQUFVOztrQ0FDYiw4REFBQ1gsa0RBQUlBO3dCQUFDVSxNQUFLO2tDQUFJOzs7Ozs7a0NBQ2YsOERBQUNWLGtEQUFJQTt3QkFBQ1UsTUFBSztrQ0FBUTs7Ozs7O2tDQUNuQiw4REFBQ1Ysa0RBQUlBO3dCQUFDVSxNQUFLO2tDQUFVOzs7Ozs7a0NBQ3JCLDhEQUFDVixrREFBSUE7d0JBQUNVLE1BQUs7a0NBQVk7Ozs7Ozs7Ozs7OzswQkFFekIsOERBQUNpQjtnQkFBSWhCLFdBQVU7O2tDQUNiLDhEQUFDbUI7d0JBQUluQixXQUFVOzswQ0FDYiw4REFBQ1gsa0RBQUlBO2dDQUFDVSxNQUFLO2dDQUFJQyxXQUFVOzBDQUE2Qjs7Ozs7OzBDQUd0RCw4REFBQ1gsa0RBQUlBO2dDQUFDVSxNQUFLOzBDQUFJOzs7Ozs7MENBQ2YsOERBQUNWLGtEQUFJQTtnQ0FBQ1UsTUFBSzswQ0FBUTs7Ozs7OzBDQUNuQiw4REFBQ1Ysa0RBQUlBO2dDQUFDVSxNQUFLOzBDQUFVOzs7Ozs7MENBQ3JCLDhEQUFDVixrREFBSUE7Z0NBQUNVLE1BQUs7MENBQVk7Ozs7Ozs7Ozs7OztrQ0FFekIsOERBQUNvQjt3QkFBSW5CLFdBQVU7OzBDQUNiLDhEQUFDSjtnQ0FBVUMsUUFBUUE7Z0NBQVFDLFVBQVVBOzs7Ozs7MENBQ3JDLDhEQUFDVCxrREFBSUE7Z0NBQUNVLE1BQUs7Z0NBQVFDLFdBQVU7O2tEQUMzQiw4REFBQ1Asc0VBQVlBOzs7OztvQ0FDWnFCLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY0csTUFBTSxJQUFHLG1CQUN0Qiw4REFBQ0M7d0NBQUtsQixXQUFVO2tEQUNiYyxhQUFhRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7R0E3RHdCZDs7UUFDTlosdURBQVVBOzs7TUFESlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcz85YzQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob3BwaW5nQ2FydCBmcm9tICdAL2NvbXBvbmVudHMvaWNvbnMvU2hvcHBpbmdDYXJ0JztcclxuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9BcHBDb250ZXh0JztcclxuaW1wb3J0IEJhcnMyIGZyb20gJy4uL2ljb25zL0JhcnMyJztcclxuXHJcbmZ1bmN0aW9uIEF1dGhMaW5rcyh7IHN0YXR1cywgdXNlck5hbWUgfSkge1xyXG4gIGlmIChzdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgSGVsbG8sIHt1c2VyTmFtZX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBweC04IHB5LTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHB4LTggcHktMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG4gIGNvbnN0IHN0YXR1cyA9IHNlc3Npb24uc3RhdHVzO1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gc2Vzc2lvbi5kYXRhPy51c2VyO1xyXG4gIGxldCB1c2VyTmFtZSA9IHVzZXJEYXRhPy5uYW1lIHx8IHVzZXJEYXRhPy5lbWFpbDtcclxuICBpZiAodXNlck5hbWUgJiYgdXNlck5hbWUuaW5jbHVkZXMoJyAnKSkge1xyXG4gICAgdXNlck5hbWUgPSB1c2VyTmFtZS5zcGxpdCgnICcpWzBdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjYXJ0UHJvZHVjdHMgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtZDpoaWRkZW5cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICBTVCBQSVpaQVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IC8+XHJcbiAgICAgICAgICAgIHtjYXJ0UHJvZHVjdHM/Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMiAtcmlnaHQtNCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgdGV4dC14cyBweS0xIHB4LTEgcm91bmRlZC1mdWxsIGxlYWRpbmctM1wiPlxyXG4gICAgICAgICAgICAgICAge2NhcnRQcm9kdWN0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgPEJhcnMyIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtNCBiZy1ncmF5LTIwMCByb3VuZGVkLWxnIG10LTJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9tZW51XCI+TWVudTwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiLyNhYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgU1QgUElaWkFcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVudVwiPk1lbnU8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiLyNhYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi8jY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgIDxBdXRoTGlua3Mgc3RhdHVzPXtzdGF0dXN9IHVzZXJOYW1lPXt1c2VyTmFtZX0gLz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgLz5cclxuICAgICAgICAgICAge2NhcnRQcm9kdWN0cz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1yaWdodC00IGJnLXByaW1hcnkgdGV4dC13aGl0ZSB0ZXh0LXhzIHB5LTEgcHgtMSByb3VuZGVkLWZ1bGwgbGVhZGluZy0zXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FydFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlQ29udGV4dCIsIlNob3BwaW5nQ2FydCIsIkNhcnRDb250ZXh0IiwiQmFyczIiLCJBdXRoTGlua3MiLCJzdGF0dXMiLCJ1c2VyTmFtZSIsImhyZWYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiSGVhZGVyIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyRGF0YSIsImRhdGEiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiaW5jbHVkZXMiLCJzcGxpdCIsImNhcnRQcm9kdWN0cyIsImhlYWRlciIsImRpdiIsImxlbmd0aCIsInNwYW4iLCJuYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/Header.js\n"));

/***/ })

});