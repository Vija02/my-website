webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/index.css */ \"./src/containers/index.css\");\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_containers_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var providers_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! providers/Notification */ \"./src/providers/Notification.tsx\");\n\n\nvar _jsxFileName = \"/home/vija02/projects/my-website/src/pages/_app.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({\n  showSpinner: false\n});\n\nif (true) {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeStart\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeComplete\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeError\", function (err) {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done(); // if (err[\"cancelled\"]) {\n    //   // No worries; you deliberately cancelled it\n    // } else {\n    //   notification.open({\n    //     message: \"Page load failed\",\n    //     description: `This is very embarassing! Please reload the page. Further error details: ${\n    //       typeof err === \"string\" ? err : err.message\n    //       }`,\n    //     duration: 0,\n    //   })\n    // }\n  });\n}\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"NotificationProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  })), __jsx(NotificationHandler, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n}\n_c = MyApp;\n\nvar NotificationHandler = function NotificationHandler() {\n  _s();\n\n  var notif = Object(providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"])();\n\n  if (!notif || !notif.open) {\n    return null;\n  }\n\n  var element = notif.element;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      height: 50,\n      position: 'fixed',\n      bottom: 0,\n      backgroundColor: 'indianred',\n      width: '100%',\n      textAlign: 'center',\n      color: 'white',\n      borderLeft: '4px solid lightsalmon'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, element));\n};\n\n_s(NotificationHandler, \"wOepb/eSL3F3nbq4X4Kg8dZb84A=\", false, function () {\n  return [providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"]];\n});\n\n_c2 = NotificationHandler;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"NotificationHandler\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiZXJyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJOb3RpZmljYXRpb25IYW5kbGVyIiwibm90aWYiLCJ1c2VOb3RpZmljYXRpb24iLCJvcGVuIiwiZWxlbWVudCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImJvcmRlckxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxnREFBUyxDQUFDQyxTQUFWLENBQW9CO0FBQ2xCQyxhQUFXLEVBQUU7QUFESyxDQUFwQjs7QUFJQSxVQUFtQztBQUNqQ0Msb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxZQUFNO0FBQ3pDTCxvREFBUyxDQUFDTSxLQUFWO0FBQ0QsR0FGRDtBQUlBSCxvREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQU07QUFDNUNMLG9EQUFTLENBQUNPLElBQVY7QUFDRCxHQUZEO0FBR0FKLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBQ0csR0FBRCxFQUF5QjtBQUM1RFIsb0RBQVMsQ0FBQ08sSUFBVixHQUQ0RCxDQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FiRDtBQWNEOztBQUdjLFNBQVNFLEtBQVQsT0FBbUQ7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUNoRSxTQUNFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQ7S0FQdUJGLEs7O0FBU3hCLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxLQUFLLEdBQUdDLDhFQUFlLEVBQTdCOztBQUVBLE1BQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0UsSUFBckIsRUFBMkI7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7O0FBTCtCLE1BT3hCQyxPQVB3QixHQU9aSCxLQVBZLENBT3hCRyxPQVB3QjtBQVNoQyxTQUNFLG1FQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLGNBQVEsRUFBRSxPQUF4QjtBQUFpQ0MsWUFBTSxFQUFFLENBQXpDO0FBQTRDQyxxQkFBZSxFQUFFLFdBQTdEO0FBQTBFQyxXQUFLLEVBQUUsTUFBakY7QUFBeUZDLGVBQVMsRUFBRSxRQUFwRztBQUE4R0MsV0FBSyxFQUFFLE9BQXJIO0FBQThIQyxnQkFBVSxFQUFFO0FBQTFJLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrTFIsT0FBbEwsQ0FERixDQURGO0FBS0QsQ0FkRDs7R0FBTUosbUI7VUFDVUUsc0U7OztNQURWRixtQiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIlxuaW1wb3J0ICdub3JtYWxpemUuY3NzJ1xuaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIlxuaW1wb3J0ICdjb250YWluZXJzL2luZGV4LmNzcydcblxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uLCBOb3RpZmljYXRpb25Qcm92aWRlciB9IGZyb20gJ3Byb3ZpZGVycy9Ob3RpZmljYXRpb24nXG5cbk5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICBzaG93U3Bpbm5lcjogZmFsc2UsXG59KVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiB7XG4gICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgfSlcblxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgTlByb2dyZXNzLmRvbmUoKVxuICB9KVxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoZXJyOiBFcnJvciB8IHN0cmluZykgPT4ge1xuICAgIE5Qcm9ncmVzcy5kb25lKClcbiAgICAvLyBpZiAoZXJyW1wiY2FuY2VsbGVkXCJdKSB7XG4gICAgLy8gICAvLyBObyB3b3JyaWVzOyB5b3UgZGVsaWJlcmF0ZWx5IGNhbmNlbGxlZCBpdFxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBub3RpZmljYXRpb24ub3Blbih7XG4gICAgLy8gICAgIG1lc3NhZ2U6IFwiUGFnZSBsb2FkIGZhaWxlZFwiLFxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogYFRoaXMgaXMgdmVyeSBlbWJhcmFzc2luZyEgUGxlYXNlIHJlbG9hZCB0aGUgcGFnZS4gRnVydGhlciBlcnJvciBkZXRhaWxzOiAke1xuICAgIC8vICAgICAgIHR5cGVvZiBlcnIgPT09IFwic3RyaW5nXCIgPyBlcnIgOiBlcnIubWVzc2FnZVxuICAgIC8vICAgICAgIH1gLFxuICAgIC8vICAgICBkdXJhdGlvbjogMCxcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Tm90aWZpY2F0aW9uUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8Tm90aWZpY2F0aW9uSGFuZGxlciAvPlxuICAgIDwvTm90aWZpY2F0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgTm90aWZpY2F0aW9uSGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWYgPSB1c2VOb3RpZmljYXRpb24oKVxuXG4gIGlmICghbm90aWYgfHwgIW5vdGlmLm9wZW4pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgeyBlbGVtZW50IH0gPSBub3RpZlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMCwgYmFja2dyb3VuZENvbG9yOiAnaW5kaWFucmVkJywgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScsIGJvcmRlckxlZnQ6ICc0cHggc29saWQgbGlnaHRzYWxtb24nIH19PntlbGVtZW50fTwvZGl2PlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})