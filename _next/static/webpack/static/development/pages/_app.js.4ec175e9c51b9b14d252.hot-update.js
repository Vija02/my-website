webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/index.css */ \"./src/containers/index.css\");\n/* harmony import */ var _containers_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_containers_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var providers_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! providers/Notification */ \"./src/providers/Notification.tsx\");\n\n\nvar _jsxFileName = \"/home/vija02/projects/my-website/src/pages/_app.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({\n  showSpinner: false\n});\n\nif (true) {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeStart\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeComplete\", function () {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on(\"routeChangeError\", function (err) {\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done(); // if (err[\"cancelled\"]) {\n    //   // No worries; you deliberately cancelled it\n    // } else {\n    //   notification.open({\n    //     message: \"Page load failed\",\n    //     description: `This is very embarassing! Please reload the page. Further error details: ${\n    //       typeof err === \"string\" ? err : err.message\n    //       }`,\n    //     duration: 0,\n    //   })\n    // }\n  });\n}\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  })), __jsx(NotificationHandler, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n}\n_c = MyApp;\n\nvar NotificationHandler = function NotificationHandler() {\n  _s();\n\n  var asd = Object(providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"])(); // if()\n\n  console.log(asd, \"ASD\");\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(NotificationHandler, \"RmAFazBD44c7PO2RMv8L8EhvV24=\", false, function () {\n  return [providers_Notification__WEBPACK_IMPORTED_MODULE_7__[\"useNotification\"]];\n});\n\n_c2 = NotificationHandler;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"NotificationHandler\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiZXJyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJOb3RpZmljYXRpb25IYW5kbGVyIiwiYXNkIiwidXNlTm90aWZpY2F0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLGdEQUFTLENBQUNDLFNBQVYsQ0FBb0I7QUFDbEJDLGFBQVcsRUFBRTtBQURLLENBQXBCOztBQUlBLFVBQW1DO0FBQ2pDQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDLFlBQU07QUFDekNMLG9EQUFTLENBQUNNLEtBQVY7QUFDRCxHQUZEO0FBSUFILG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsWUFBTTtBQUM1Q0wsb0RBQVMsQ0FBQ08sSUFBVjtBQUNELEdBRkQ7QUFHQUosb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxVQUFDRyxHQUFELEVBQXlCO0FBQzVEUixvREFBUyxDQUFDTyxJQUFWLEdBRDRELENBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWJEO0FBY0Q7O0FBR2MsU0FBU0UsS0FBVCxPQUFtRDtBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQ2hFLFNBQ0UsbUVBQ0UsTUFBQyxTQUFELHlGQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUVFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRDtLQVB1QkYsSzs7QUFTeEIsSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQ2hDLE1BQU1DLEdBQUcsR0FBR0MsOEVBQWUsRUFBM0IsQ0FEZ0MsQ0FFaEM7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLEVBQWlCLEtBQWpCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRCxDQVBEOztHQUFNRCxtQjtVQUNRRSxzRTs7O01BRFJGLG1CIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiXG5pbXBvcnQgJ2NvbnRhaW5lcnMvaW5kZXguY3NzJ1xuXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdwcm92aWRlcnMvTm90aWZpY2F0aW9uJ1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zdGFydCgpXG4gIH0pXG5cbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5kb25lKClcbiAgfSlcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKGVycjogRXJyb3IgfCBzdHJpbmcpID0+IHtcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpXG4gICAgLy8gaWYgKGVycltcImNhbmNlbGxlZFwiXSkge1xuICAgIC8vICAgLy8gTm8gd29ycmllczsgeW91IGRlbGliZXJhdGVseSBjYW5jZWxsZWQgaXRcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgbm90aWZpY2F0aW9uLm9wZW4oe1xuICAgIC8vICAgICBtZXNzYWdlOiBcIlBhZ2UgbG9hZCBmYWlsZWRcIixcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IGBUaGlzIGlzIHZlcnkgZW1iYXJhc3NpbmchIFBsZWFzZSByZWxvYWQgdGhlIHBhZ2UuIEZ1cnRoZXIgZXJyb3IgZGV0YWlsczogJHtcbiAgICAvLyAgICAgICB0eXBlb2YgZXJyID09PSBcInN0cmluZ1wiID8gZXJyIDogZXJyLm1lc3NhZ2VcbiAgICAvLyAgICAgICB9YCxcbiAgICAvLyAgICAgZHVyYXRpb246IDAsXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxOb3RpZmljYXRpb25IYW5kbGVyIC8+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgTm90aWZpY2F0aW9uSGFuZGxlciA9ICgpID0+IHtcbiAgY29uc3QgYXNkID0gdXNlTm90aWZpY2F0aW9uKClcbiAgLy8gaWYoKVxuICBjb25zb2xlLmxvZyhhc2QsIFwiQVNEXCIpXG4gIHJldHVybiAoXG4gICAgPGRpdj48L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/providers/Notification.tsx":
/*!****************************************!*\
  !*** ./src/providers/Notification.tsx ***!
  \****************************************/
/*! exports provided: useNotification, NotificationConsumer, NotificationProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNotification\", function() { return useNotification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotificationConsumer\", function() { return NotificationConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotificationProvider\", function() { return NotificationProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/home/vija02/projects/my-website/src/providers/Notification.tsx\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar NotificationContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\nvar useNotification = function useNotification() {\n  _s();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(NotificationContext);\n};\n\n_s(useNotification, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar NotificationConsumer = NotificationContext.Consumer;\nvar NotificationProvider = function NotificationProvider(props) {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(__jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 42\n    }\n  })),\n      element = _useState[0],\n      setElement = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  return __jsx(NotificationContext.Provider, {\n    value: {\n      element: element,\n      open: open,\n      setElement: setElement,\n      setOpen: setOpen\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s2(NotificationProvider, \"ic83lt1/znXP5n+JM6fYjL02CSs=\");\n\n_c = NotificationProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"NotificationProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL05vdGlmaWNhdGlvbi50c3g/YTA4MiJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTm90aWZpY2F0aW9uIiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnN1bWVyIiwiQ29uc3VtZXIiLCJOb3RpZmljYXRpb25Qcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJlbGVtZW50Iiwic2V0RWxlbWVudCIsIm9wZW4iLCJzZXRPcGVuIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBU0EsSUFBTUEsbUJBQW1CLEdBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0QsSUFBcEQsQ0FBNUI7QUFFTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDbkMsU0FBT0Msd0RBQVUsQ0FBQ0osbUJBQUQsQ0FBakI7QUFDRCxDQUZNOztHQUFNRyxlOztBQUlOLElBQU1FLG9CQUFvQixHQUFHTCxtQkFBbUIsQ0FBQ00sUUFBakQ7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFDcEJDLHNEQUFRLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFELENBRFk7QUFBQSxNQUMzQ0MsT0FEMkM7QUFBQSxNQUNsQ0MsVUFEa0M7O0FBQUEsbUJBRTFCRixzREFBUSxDQUFDLEtBQUQsQ0FGa0I7QUFBQSxNQUUzQ0csSUFGMkM7QUFBQSxNQUVyQ0MsT0FGcUM7O0FBSWxELFNBQ0UsTUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUU7QUFBRUgsYUFBTyxFQUFQQSxPQUFGO0FBQVdFLFVBQUksRUFBSkEsSUFBWDtBQUFpQkQsZ0JBQVUsRUFBVkEsVUFBakI7QUFBNkJFLGFBQU8sRUFBUEE7QUFBN0IsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxLQUFLLENBQUNNLFFBRFQsQ0FERjtBQUtELENBVE07O0lBQU1QLG9COztLQUFBQSxvQiIsImZpbGUiOiIuL3NyYy9wcm92aWRlcnMvTm90aWZpY2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlID0ge1xuICBlbGVtZW50OiBKU1guRWxlbWVudFxuICBvcGVuOiBib29sZWFuXG4gIHNldEVsZW1lbnQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEpTWC5FbGVtZW50Pj5cbiAgc2V0T3BlbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+XG59XG5cbmNvbnN0IE5vdGlmaWNhdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbClcblxuZXhwb3J0IGNvbnN0IHVzZU5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNvbnN1bWVyID0gTm90aWZpY2F0aW9uQ29udGV4dC5Db25zdW1lclxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uUHJvdmlkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VTdGF0ZSg8cD48L3A+KVxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGVsZW1lbnQsIG9wZW4sIHNldEVsZW1lbnQsIHNldE9wZW4gfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Ob3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/providers/Notification.tsx\n");

/***/ })

})