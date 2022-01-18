webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/containers/Blog/IndexPage/index.tsx":
/*!*************************************************!*\
  !*** ./src/containers/Blog/IndexPage/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogIndexPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var components_StandardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/StandardHeader */ \"./src/components/StandardHeader/index.tsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./src/containers/Blog/IndexPage/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/vija02/projects/2020/my-website/src/containers/Blog/IndexPage/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction BlogIndexPage(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_StandardHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Blog\"), JSON.stringify(data), data.map(function (d) {\n    return __jsx(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coverImage,\n      src: d.image,\n      alt: \"Cover image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }\n    }), __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, d.title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, d.description));\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }));\n}\n_c = BlogIndexPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogIndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvQmxvZy9JbmRleFBhZ2UvaW5kZXgudHN4PzZjNDgiXSwibmFtZXMiOlsiQmxvZ0luZGV4UGFnZSIsImRhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwiZCIsImNhcmQiLCJjb3ZlckltYWdlIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFXZSxTQUFTQSxhQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUN6RCxTQUNFLG1FQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FGSCxFQUdHQSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsV0FDUjtBQUFLLGVBQVMsRUFBRUwsd0RBQU0sQ0FBQ00sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFFTix3REFBTSxDQUFDTyxVQURwQjtBQUVFLFNBQUcsRUFBRUYsQ0FBQyxDQUFDRyxLQUZUO0FBR0UsU0FBRyxFQUFDLGFBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxDQUFDLENBQUNJLEtBQVAsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUosQ0FBQyxDQUFDSyxXQUFOLENBUEYsQ0FEUTtBQUFBLEdBQVQsQ0FISCxFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBSEYsRUFxQkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBREY7QUF5QkQ7S0ExQnVCWixhIiwiZmlsZSI6Ii4vc3JjL2NvbnRhaW5lcnMvQmxvZy9JbmRleFBhZ2UvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiXG5pbXBvcnQgU3RhbmRhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvU3RhbmRhcmRIZWFkZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIlxuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgaW1hZ2U6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gIH1bXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSW5kZXhQYWdlKHsgZGF0YSB9OiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YW5kYXJkSGVhZGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XG4gICAgICAgIHtkYXRhLm1hcCgoZCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgIHNyYz17ZC5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwiQ292ZXIgaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMj57ZC50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e2QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgey8qIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e2Zvcm1hdChuZXcgRGF0ZShjcmVhdGVkQXQpLCBcIkxMTEwgZCwgeXl5eVwiKX08L3A+ICovfVxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/Blog/IndexPage/index.tsx\n");

/***/ })

})