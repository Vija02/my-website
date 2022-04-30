webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./src/pages/blog/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/blog/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogData; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote */ \"./node_modules/next-mdx-remote/index.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var containers_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Meta */ \"./src/containers/Meta.tsx\");\n/* harmony import */ var containers_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/Blog */ \"./src/containers/Blog/index.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/vija02/projects/2020/my-website/src/pages/blog/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar components = {\n  a: function a(props) {\n    return __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      target: \"_blank\",\n      rel: \"noopener\"\n    }, props, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 22\n      }\n    }));\n  } // code: (props: any) => (\n  //   <pre>\n  //     <code {...props} />\n  //   </pre>\n  // ),\n\n};\nvar __N_SSG = true;\nfunction BlogData(_ref) {\n  _s();\n\n  var title = _ref.title,\n      description = _ref.description,\n      image = _ref.image,\n      createdAt = _ref.createdAt,\n      source = _ref.source;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {// hljs.highlightAuto\n    // document.querySelectorAll(\"pre code\").forEach((el) => {})\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(containers_Meta__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: title,\n    description: description,\n    bannerUrl: \"https://michaelsalim.co.uk\".concat(image),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(containers_Blog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: title,\n    description: description,\n    createdAt: createdAt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__[\"MDXRemote\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, source, {\n    components: components,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_s(BlogData, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = BlogData;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogData\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeD81Y2JhIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJhIiwicHJvcHMiLCJCbG9nRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImNyZWF0ZWRBdCIsInNvdXJjZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFXQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEdBQUMsRUFBRSxXQUFDQyxLQUFEO0FBQUEsV0FBZ0I7QUFBRyxZQUFNLEVBQUMsUUFBVjtBQUFtQixTQUFHLEVBQUM7QUFBdkIsT0FBc0NBLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaEI7QUFBQSxHQURjLENBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTmlCLENBQW5COztBQVNlLFNBQVNDLFFBQVQsT0FNRDtBQUFBOztBQUFBLE1BTFpDLEtBS1ksUUFMWkEsS0FLWTtBQUFBLE1BSlpDLFdBSVksUUFKWkEsV0FJWTtBQUFBLE1BSFpDLEtBR1ksUUFIWkEsS0FHWTtBQUFBLE1BRlpDLFNBRVksUUFGWkEsU0FFWTtBQUFBLE1BRFpDLE1BQ1ksUUFEWkEsTUFDWTtBQUNaQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQ0UsbUVBQ0UsTUFBQyx1REFBRDtBQUNFLFNBQUssRUFBRUwsS0FEVDtBQUVFLGVBQVcsRUFBRUMsV0FGZjtBQUdFLGFBQVMsc0NBQStCQyxLQUEvQixDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMsdURBQUQ7QUFBTSxTQUFLLEVBQUVGLEtBQWI7QUFBb0IsZUFBVyxFQUFFQyxXQUFqQztBQUE4QyxhQUFTLEVBQUVFLFNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFELHlGQUFlQyxNQUFmO0FBQXVCLGNBQVUsRUFBRVIsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBTkYsQ0FERjtBQVlEOztHQXhCdUJHLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIlxuaW1wb3J0IHsgZ2V0QmxvZ0RhdGFGcm9tU2x1ZywgZ2V0QmxvZ3NGaWxlTmFtZXMgfSBmcm9tIFwiaGVscGVyL2Jsb2dcIlxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiXG5pbXBvcnQgTWV0YSBmcm9tIFwiY29udGFpbmVycy9NZXRhXCJcbmltcG9ydCBCbG9nIGZyb20gXCJjb250YWluZXJzL0Jsb2dcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanMvbGliL2NvcmVcIlxuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgc291cmNlOiBhbnlcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgYTogKHByb3BzOiBhbnkpID0+IDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgey4uLnByb3BzfSAvPixcbiAgLy8gY29kZTogKHByb3BzOiBhbnkpID0+IChcbiAgLy8gICA8cHJlPlxuICAvLyAgICAgPGNvZGUgey4uLnByb3BzfSAvPlxuICAvLyAgIDwvcHJlPlxuICAvLyApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nRGF0YSh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIGNyZWF0ZWRBdCxcbiAgc291cmNlLFxufTogUHJvcFR5cGVzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaGxqcy5oaWdobGlnaHRBdXRvXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZSBjb2RlXCIpLmZvckVhY2goKGVsKSA9PiB7fSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGJhbm5lclVybD17YGh0dHBzOi8vbWljaGFlbHNhbGltLmNvLnVrJHtpbWFnZX1gfVxuICAgICAgLz5cbiAgICAgIDxCbG9nIHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBjcmVhdGVkQXQ9e2NyZWF0ZWRBdH0+XG4gICAgICAgIDxNRFhSZW1vdGUgey4uLnNvdXJjZX0gY29tcG9uZW50cz17Y29tcG9uZW50c30gLz5cbiAgICAgIDwvQmxvZz5cbiAgICA8Lz5cbiAgKVxufVxuXG50eXBlIFJvdXRlUHJvcFR5cGVzID0ge1xuICBzbHVnOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zIGFzIFJvdXRlUHJvcFR5cGVzXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGNyZWF0ZWRBdCB9LFxuICAgIGNvbnRlbnQsXG4gIH0gPSBtYXR0ZXIoZ2V0QmxvZ0RhdGFGcm9tU2x1ZyhzbHVnKSlcblxuICBjb25zdCBtZHhTb3VyY2UgPSBhd2FpdCBzZXJpYWxpemUoY29udGVudClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2UsXG4gICAgICBjcmVhdGVkQXQ6IGNyZWF0ZWRBdC50b1N0cmluZygpLFxuICAgICAgc291cmNlOiBtZHhTb3VyY2UsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBibG9nRmlsZU5hbWVzID0gZ2V0QmxvZ3NGaWxlTmFtZXMoKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGJsb2dGaWxlTmFtZXMubWFwKChibG9nRmlsZU5hbWUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IGJsb2dGaWxlTmFtZS5yZXBsYWNlKC9cXC5tZHg/JC8sIFwiXCIpLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[slug].tsx\n");

/***/ })

})