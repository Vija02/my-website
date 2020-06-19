webpackHotUpdate("static/development/pages/contact-me.js",{

/***/ "./src/containers/ContactMe/index.tsx":
/*!********************************************!*\
  !*** ./src/containers/ContactMe/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_StandardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/StandardHeader */ \"./src/components/StandardHeader/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var providers_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! providers/Notification */ \"./src/providers/Notification.tsx\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/containers/ContactMe/contact.ts\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ \"./src/containers/ContactMe/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/home/vija02/projects/my-website/src/containers/ContactMe/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var originalSubject = _ref.subject;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(originalSubject),\n      subject = _useState[0],\n      setSubject = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      contact = _useState3[0],\n      setContact = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      message = _useState4[0],\n      setMessage = _useState4[1];\n\n  var notification = Object(providers_Notification__WEBPACK_IMPORTED_MODULE_4__[\"useNotification\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_StandardHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"CONTACT ME\")), __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subheader,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Send me an email at \", __jsx(DeferedEmail, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 61\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 77\n    }\n  }), \"Alternatively, fill the form below. I will get back to you as soon as possible!\"), __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      Object(_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        subject: subject,\n        contact: contact,\n        message: message,\n        name: name\n      })[\"catch\"](function () {\n        notification === null || notification === void 0 ? void 0 : notification.setElement(__jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 38\n          }\n        }, \"Hi\"));\n        console.log(\"set\");\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, \"About:\"), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"What do you want to talk about?\",\n    value: subject,\n    onChange: function onChange(e) {\n      return setSubject(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"Name:\"), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Name (Optional)\",\n    value: name,\n    onChange: function onChange(e) {\n      return setName(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"Contact:\"), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"How can I cantact you back? (Email, Phone No., Etc.)\",\n    value: contact,\n    onChange: function onChange(e) {\n      return setContact(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Body:\"), __jsx(\"textarea\", {\n    rows: 10,\n    value: message,\n    onChange: function onChange(e) {\n      return setMessage(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"Submit\"))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }));\n}, \"h4CVnpCHzd0zbPj44ZiGKkORJMY=\", false, function () {\n  return [providers_Notification__WEBPACK_IMPORTED_MODULE_4__[\"useNotification\"]];\n})); // This is to make it harder to be scraped :)\n\nvar Email = function Email() {\n  var mail = \"contact\" + \"@\" + \"michael\" + \"salim\" + \".co.uk\";\n  var mailto = \"ma\" + \"ilto:\" + mail;\n  return __jsx(\"a\", {\n    href: mailto,\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mailLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }\n  }, mail);\n};\n\n_c = Email;\nvar DeferedEmail = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c2 = function _c2() {\n  return Promise.resolve(Email);\n}, {\n  ssr: false\n});\n_c3 = DeferedEmail;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Email\");\n$RefreshReg$(_c2, \"DeferedEmail$dynamic\");\n$RefreshReg$(_c3, \"DeferedEmail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db250YWN0TWUvaW5kZXgudHN4PzFiMmMiXSwibmFtZXMiOlsib3JpZ2luYWxTdWJqZWN0Iiwic3ViamVjdCIsInVzZVN0YXRlIiwic2V0U3ViamVjdCIsIm5hbWUiLCJzZXROYW1lIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsInN0eWxlcyIsImNvbnRhaW5lciIsImhlYWRlciIsInN1YmhlYWRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRDb250YWN0TWUiLCJzZXRFbGVtZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiRW1haWwiLCJtYWlsIiwibWFpbHRvIiwibWFpbExpbmsiLCJEZWZlcmVkRW1haWwiLCJkeW5hbWljIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQU1lLGtGQUE2QztBQUFBOztBQUFBLE1BQWpDQSxlQUFpQyxRQUExQ0MsT0FBMEM7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDRixlQUFELENBRG9CO0FBQUEsTUFDbkRDLE9BRG1EO0FBQUEsTUFDMUNFLFVBRDBDOztBQUFBLG1CQUVsQ0Qsc0RBQVEsQ0FBQyxFQUFELENBRjBCO0FBQUEsTUFFbkRFLElBRm1EO0FBQUEsTUFFN0NDLE9BRjZDOztBQUFBLG1CQUc1Qkgsc0RBQVEsQ0FBQyxFQUFELENBSG9CO0FBQUEsTUFHbkRJLE9BSG1EO0FBQUEsTUFHMUNDLFVBSDBDOztBQUFBLG1CQUk1Qkwsc0RBQVEsQ0FBQyxFQUFELENBSm9CO0FBQUEsTUFJbkRNLE9BSm1EO0FBQUEsTUFJMUNDLFVBSjBDOztBQU0xRCxNQUFNQyxZQUFZLEdBQUdDLDhFQUFlLEVBQXBDO0FBRUEsU0FDRSxtRUFD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LEtBQVYsQ0FBZDtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCRixFQWtDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0YsQ0FMRixDQUZGLEVBOENFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDRixDQURGO0FBa0RELENBMUREO0FBQUEsVUFNdUJaLHNFQU52QjtBQUFBLEksQ0E0REE7O0FBQ0EsSUFBTWEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFNQyxJQUFJLEdBQUcsWUFBWSxHQUFaLEdBQWtCLFNBQWxCLEdBQThCLE9BQTlCLEdBQXdDLFFBQXJEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLE9BQU8sT0FBUCxHQUFpQkQsSUFBaEM7QUFDQSxTQUNFO0FBQUcsUUFBSSxFQUFFQyxNQUFUO0FBQWlCLGFBQVMsRUFBRWQsd0RBQU0sQ0FBQ2UsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4Q0YsSUFBOUMsQ0FERjtBQUdELENBTkQ7O0tBQU1ELEs7QUFRTixJQUFNSSxZQUFZLEdBQUdDLG1EQUFPLE9BQzFCO0FBQUEsU0FBTUMsT0FBTyxDQUFDQyxPQUFSLENBQWdCUCxLQUFoQixDQUFOO0FBQUEsQ0FEMEIsRUFFMUI7QUFBRVEsS0FBRyxFQUFFO0FBQVAsQ0FGMEIsQ0FBNUI7TUFBTUosWSIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL0NvbnRhY3RNZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuaW1wb3J0IFN0YW5kYXJkSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvU3RhbmRhcmRIZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICdwcm92aWRlcnMvTm90aWZpY2F0aW9uJ1xuXG5pbXBvcnQgc2VuZENvbnRhY3RNZSBmcm9tICcuL2NvbnRhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuXG50eXBlIFByb3BUeXBlcyA9IHtcbiAgc3ViamVjdDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHN1YmplY3Q6IG9yaWdpbmFsU3ViamVjdCB9OiBQcm9wVHlwZXMpID0+IHtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUob3JpZ2luYWxTdWJqZWN0KVxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHVzZU5vdGlmaWNhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YW5kYXJkSGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8aDE+Q09OVEFDVCBNRTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkZXJ9PlNlbmQgbWUgYW4gZW1haWwgYXQgPERlZmVyZWRFbWFpbCAvPjxiciAvPkFsdGVybmF0aXZlbHksIGZpbGwgdGhlIGZvcm0gYmVsb3cuIEkgd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZSE8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNlbmRDb250YWN0TWUoeyBzdWJqZWN0LCBjb250YWN0LCBtZXNzYWdlLCBuYW1lIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbj8uc2V0RWxlbWVudCg8cD5IaTwvcD4pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldFwiKVxuICAgICAgICAgIH0pXG4gICAgICAgIH19PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIj5BYm91dDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvIHlvdSB3YW50IHRvIHRhbGsgYWJvdXQ/XCJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgKE9wdGlvbmFsKVwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0XCI+Q29udGFjdDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgY2FuIEkgY2FudGFjdCB5b3UgYmFjaz8gKEVtYWlsLCBQaG9uZSBOby4sIEV0Yy4pXCJcbiAgICAgICAgICAgIHZhbHVlPXtjb250YWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIj5Cb2R5OjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBUaGlzIGlzIHRvIG1ha2UgaXQgaGFyZGVyIHRvIGJlIHNjcmFwZWQgOilcbmNvbnN0IEVtYWlsID0gKCkgPT4ge1xuICBjb25zdCBtYWlsID0gXCJjb250YWN0XCIgKyBcIkBcIiArIFwibWljaGFlbFwiICsgXCJzYWxpbVwiICsgXCIuY28udWtcIlxuICBjb25zdCBtYWlsdG8gPSBcIm1hXCIgKyBcImlsdG86XCIgKyBtYWlsXG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17bWFpbHRvfSBjbGFzc05hbWU9e3N0eWxlcy5tYWlsTGlua30+e21haWx9PC9hPlxuICApXG59XG5cbmNvbnN0IERlZmVyZWRFbWFpbCA9IGR5bmFtaWMoXG4gICgpID0+IFByb21pc2UucmVzb2x2ZShFbWFpbCksXG4gIHsgc3NyOiBmYWxzZSB9XG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/ContactMe/index.tsx\n");

/***/ })

})