webpackHotUpdate("static/development/pages/contact-me.js",{

/***/ "./src/containers/ContactMe/contact.ts":
/*!*********************************************!*\
  !*** ./src/containers/ContactMe/contact.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var webhookUrl = \"https://discordapp.com/api/webhooks/723286957651657179/ms7g7-Xa3jK9R3ntlI7lCQwPoraXnK6bcbDjbYlNzlKrXfuqenTrSAq9OTscsocnHTmb\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var subject = _ref.subject,\n      message = _ref.message,\n      contact = _ref.contact,\n      name = _ref.name;\n  fetch(webhookUrl, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      content: \"Contact from contact form @michaelsalim.co.uk\",\n      embeds: [{\n        title: subject,\n        description: '```' + message + '```',\n        timestamp: new Date().toISOString(),\n        color: 3524959,\n        fields: [{\n          name: 'Name',\n          value: name\n        }, {\n          name: 'Contact through',\n          value: contact\n        }]\n      }]\n    })\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db250YWN0TWUvY29udGFjdC50cz80NDM1Il0sIm5hbWVzIjpbIndlYmhvb2tVcmwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImNvbnRhY3QiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZW1iZWRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbG9yIiwiZmllbGRzIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsa0RBQU1BLFVBQVUsR0FBRyw2SEFBbkI7QUFTZSwrRUFBc0Q7QUFBQSxNQUFuREMsT0FBbUQsUUFBbkRBLE9BQW1EO0FBQUEsTUFBMUNDLE9BQTBDLFFBQTFDQSxPQUEwQztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQ25FQyxPQUFLLENBQUNMLFVBQUQsRUFBYTtBQUNoQk0sVUFBTSxFQUFFLE1BRFE7QUFFaEJDLFdBQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQixLQUZPO0FBR2hCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxhQUFPLEVBQUUsK0NBRFU7QUFFbkJDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLGFBQUssRUFBRVosT0FEVDtBQUVFYSxtQkFBVyxFQUFFLFFBQVFaLE9BQVIsR0FBa0IsS0FGakM7QUFHRWEsaUJBQVMsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFIYjtBQUlFQyxhQUFLLEVBQUUsT0FKVDtBQUtFQyxjQUFNLEVBQUUsQ0FDTjtBQUFFZixjQUFJLEVBQUUsTUFBUjtBQUFnQmdCLGVBQUssRUFBRWhCO0FBQXZCLFNBRE0sRUFFTjtBQUFFQSxjQUFJLEVBQUUsaUJBQVI7QUFBMkJnQixlQUFLLEVBQUVqQjtBQUFsQyxTQUZNO0FBTFYsT0FETTtBQUZXLEtBQWY7QUFIVSxHQUFiLENBQUw7QUFtQkQsQ0FwQkQiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Db250YWN0TWUvY29udGFjdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYmhvb2tVcmwgPSBcImh0dHBzOi8vZGlzY29yZGFwcC5jb20vYXBpL3dlYmhvb2tzLzcyMzI4Njk1NzY1MTY1NzE3OS9tczdnNy1YYTNqSzlSM250bEk3bENRd1BvcmFYbks2YmNiRGpiWWxOemxLclhmdXFlblRyU0FxOU9Uc2Nzb2NuSFRtYlwiXG5cbnR5cGUgTWVzc2FnZVByb3AgPSB7XG4gIHN1YmplY3Q6IHN0cmluZ1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgY29udGFjdDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBzdWJqZWN0LCBtZXNzYWdlLCBjb250YWN0LCBuYW1lIH06IE1lc3NhZ2VQcm9wKSA9PiB7XG4gIGZldGNoKHdlYmhvb2tVcmwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb250ZW50OiBcIkNvbnRhY3QgZnJvbSBjb250YWN0IGZvcm0gQG1pY2hhZWxzYWxpbS5jby51a1wiLFxuICAgICAgZW1iZWRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogc3ViamVjdCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2BgYCcgKyBtZXNzYWdlICsgJ2BgYCcsXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgY29sb3I6IDM1MjQ5NTksXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICdOYW1lJywgdmFsdWU6IG5hbWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NvbnRhY3QgdGhyb3VnaCcsIHZhbHVlOiBjb250YWN0IH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/ContactMe/contact.ts\n");

/***/ })

})