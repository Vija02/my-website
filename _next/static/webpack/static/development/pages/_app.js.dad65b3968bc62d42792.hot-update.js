webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/index.css */ \"./src/containers/index.css\");\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_containers_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var providers_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! providers/Notification */ \"./src/providers/Notification.tsx\");\n\n\nvar _jsxFileName = \"/home/vija02/projects/my-website/src/pages/_app.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({\n  showSpinner: false\n});\n\nif (true) {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeStart\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeComplete\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeError\", function (err) {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done(); // if (err[\"cancelled\"]) {\n    //   // No worries; you deliberately cancelled it\n    // } else {\n    //   notification.open({\n    //     message: \"Page load failed\",\n    //     description: `This is very embarassing! Please reload the page. Further error details: ${\n    //       typeof err === \"string\" ? err : err.message\n    //       }`,\n    //     duration: 0,\n    //   })\n    // }\n  });\n}\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"NotificationProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  })), __jsx(NotificationHandler, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n}\n_c = MyApp;\n\nvar NotificationHandler = function NotificationHandler() {\n  _s();\n\n  var notif = Object(providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"])();\n\n  if (!notif || !notif.open) {\n    return null;\n  }\n\n  var element = notif.element;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      height: 50,\n      position: 'fixed',\n      bottom: 0,\n      backgroundColor: 'indianred',\n      width: '100%',\n      textAlign: 'center',\n      color: 'white',\n      borderLeft: '4px solid lightsalmon'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"X\"), element));\n};\n\n_s(NotificationHandler, \"wOepb/eSL3F3nbq4X4Kg8dZb84A=\", false, function () {\n  return [providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"]];\n});\n\n_c2 = NotificationHandler;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"NotificationHandler\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiZXJyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJOb3RpZmljYXRpb25IYW5kbGVyIiwibm90aWYiLCJ1c2VOb3RpZmljYXRpb24iLCJvcGVuIiwiZWxlbWVudCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImJvcmRlckxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxnREFBUyxDQUFDQyxTQUFWLENBQW9CO0FBQ2xCQyxhQUFXLEVBQUU7QUFESyxDQUFwQjs7QUFJQSxVQUFtQztBQUNqQ0Msb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxZQUFNO0FBQ3pDTCxvREFBUyxDQUFDTSxLQUFWO0FBQ0QsR0FGRDtBQUlBSCxvREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQU07QUFDNUNMLG9EQUFTLENBQUNPLElBQVY7QUFDRCxHQUZEO0FBR0FKLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBQ0csR0FBRCxFQUF5QjtBQUM1RFIsb0RBQVMsQ0FBQ08sSUFBVixHQUQ0RCxDQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FiRDtBQWNEOztBQUdjLFNBQVNFLEtBQVQsT0FBbUQ7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUNoRSxTQUNFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQ7S0FQdUJGLEs7O0FBU3hCLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxLQUFLLEdBQUdDLDhFQUFlLEVBQTdCOztBQUVBLE1BQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0UsSUFBckIsRUFBMkI7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7O0FBTCtCLE1BT3hCQyxPQVB3QixHQU9aSCxLQVBZLENBT3hCRyxPQVB3QjtBQVNoQyxTQUNFLG1FQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLGNBQVEsRUFBRSxPQUF4QjtBQUFpQ0MsWUFBTSxFQUFFLENBQXpDO0FBQTRDQyxxQkFBZSxFQUFFLFdBQTdEO0FBQTBFQyxXQUFLLEVBQUUsTUFBakY7QUFBeUZDLGVBQVMsRUFBRSxRQUFwRztBQUE4R0MsV0FBSyxFQUFFLE9BQXJIO0FBQThIQyxnQkFBVSxFQUFFO0FBQTFJLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUlHUixPQUpILENBREYsQ0FERjtBQVVELENBbkJEOztHQUFNSixtQjtVQUNVRSxzRTs7O01BRFZGLG1CIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiXG5pbXBvcnQgJ2NvbnRhaW5lcnMvaW5kZXguY3NzJ1xuXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24sIE5vdGlmaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAncHJvdmlkZXJzL05vdGlmaWNhdGlvbidcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7XG4gIHNob3dTcGlubmVyOiBmYWxzZSxcbn0pXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICgpID0+IHtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKVxuICB9KVxuXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpXG4gIH0pXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIChlcnI6IEVycm9yIHwgc3RyaW5nKSA9PiB7XG4gICAgTlByb2dyZXNzLmRvbmUoKVxuICAgIC8vIGlmIChlcnJbXCJjYW5jZWxsZWRcIl0pIHtcbiAgICAvLyAgIC8vIE5vIHdvcnJpZXM7IHlvdSBkZWxpYmVyYXRlbHkgY2FuY2VsbGVkIGl0XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcbiAgICAvLyAgICAgbWVzc2FnZTogXCJQYWdlIGxvYWQgZmFpbGVkXCIsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBgVGhpcyBpcyB2ZXJ5IGVtYmFyYXNzaW5nISBQbGVhc2UgcmVsb2FkIHRoZSBwYWdlLiBGdXJ0aGVyIGVycm9yIGRldGFpbHM6ICR7XG4gICAgLy8gICAgICAgdHlwZW9mIGVyciA9PT0gXCJzdHJpbmdcIiA/IGVyciA6IGVyci5tZXNzYWdlXG4gICAgLy8gICAgICAgfWAsXG4gICAgLy8gICAgIGR1cmF0aW9uOiAwLFxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxOb3RpZmljYXRpb25IYW5kbGVyIC8+XG4gICAgPC9Ob3RpZmljYXRpb25Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBOb3RpZmljYXRpb25IYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBub3RpZiA9IHVzZU5vdGlmaWNhdGlvbigpXG5cbiAgaWYgKCFub3RpZiB8fCAhbm90aWYub3Blbikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB7IGVsZW1lbnQgfSA9IG5vdGlmXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwLCBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAwLCBiYWNrZ3JvdW5kQ29sb3I6ICdpbmRpYW5yZWQnLCB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJ3doaXRlJywgYm9yZGVyTGVmdDogJzRweCBzb2xpZCBsaWdodHNhbG1vbicgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgWFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VsZW1lbnR9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})