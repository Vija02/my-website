webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/containers/Blog/IndexPage/index.tsx":
/*!*************************************************!*\
  !*** ./src/containers/Blog/IndexPage/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogIndexPage; });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var components_StandardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/StandardHeader */ \"./src/components/StandardHeader/index.tsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/containers/Blog/IndexPage/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/vija02/projects/2020/my-website/src/containers/Blog/IndexPage/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction BlogIndexPage(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_StandardHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Blog\"), data.map(function (d) {\n    return __jsx(\"a\", {\n      href: \"/blog/\".concat(d.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.coverImage,\n      src: d.image,\n      alt: \"Cover image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }\n    }, d.title), __jsx(\"p\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.createdAtDate,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__[\"format\"])(new Date(d.createdAt), \"LLLL d, yyyy\")), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, d.description))));\n  })), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }));\n}\n_c = BlogIndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogIndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQmxvZy9JbmRleFBhZ2UvaW5kZXgudHN4PzZjNDgiXSwibmFtZXMiOlsiQmxvZ0luZGV4UGFnZSIsImRhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJkIiwic2x1ZyIsImNhcmQiLCJjb3ZlckltYWdlIiwiaW1hZ2UiLCJ0aXRsZSIsImNyZWF0ZWRBdERhdGUiLCJmb3JtYXQiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVllLFNBQVNBLGFBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQ3pELFNBQ0UsbUVBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUdHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsV0FDUjtBQUFHLFVBQUksa0JBQVdBLENBQUMsQ0FBQ0MsSUFBYixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUosd0RBQU0sQ0FBQ0ssSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFFTCx3REFBTSxDQUFDTSxVQURwQjtBQUVFLFNBQUcsRUFBRUgsQ0FBQyxDQUFDSSxLQUZUO0FBR0UsU0FBRyxFQUFDLGFBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0osQ0FBQyxDQUFDSyxLQUFQLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBRVIsd0RBQU0sQ0FBQ1MsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyx1REFBTSxDQUFDLElBQUlDLElBQUosQ0FBU1IsQ0FBQyxDQUFDUyxTQUFYLENBQUQsRUFBd0IsY0FBeEIsQ0FEVCxDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVCxDQUFDLENBQUNVLFdBQU4sQ0FMRixDQU5GLENBREYsQ0FEUTtBQUFBLEdBQVQsQ0FISCxDQUhGLEVBeUJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixDQURGO0FBNkJEO0tBOUJ1QmYsYSIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL0Jsb2cvSW5kZXhQYWdlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJcIlxuaW1wb3J0IFN0YW5kYXJkSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL1N0YW5kYXJkSGVhZGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCJcblxudHlwZSBQcm9wVHlwZXMgPSB7XG4gIGRhdGE6IHtcbiAgICBzbHVnOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgIGltYWdlOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB9W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0luZGV4UGFnZSh7IGRhdGEgfTogUHJvcFR5cGVzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFuZGFyZEhlYWRlciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT5CbG9nPC9oMT5cblxuICAgICAgICB7ZGF0YS5tYXAoKGQpID0+IChcbiAgICAgICAgICA8YSBocmVmPXtgL2Jsb2cvJHtkLnNsdWd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICBzcmM9e2QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwiQ292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj57ZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZWRBdERhdGV9PlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShkLmNyZWF0ZWRBdCksIFwiTExMTCBkLCB5eXl5XCIpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD57ZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Blog/IndexPage/index.tsx\n");

/***/ })

})