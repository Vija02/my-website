webpackHotUpdate("static/development/pages/contact-me.js",{

/***/ "./src/containers/ContactMe/contact.ts":
/*!*********************************************!*\
  !*** ./src/containers/ContactMe/contact.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var webhookUrl = \"https://discordapp.com/api/webhooks/723286957651657179/ms7g7-Xa3jK9R3ntlI7lCQwPoraXnK6bcbDjbYlNzlKrXfuqenTrSAq9OTscsocnHTmb\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var subject = _ref.subject,\n      message = _ref.message,\n      contact = _ref.contact,\n      name = _ref.name;\n  fetch(webhookUrl, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      content: \"Contact from contact form @michaelsalim.co.uk\",\n      embeds: [{\n        title: subject,\n        description: message,\n        timestamp: new Date().toISOString(),\n        fields: [{\n          name: 'Contact through',\n          value: contact\n        }, {\n          name: 'Name',\n          value: name\n        }]\n      }]\n    })\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Db250YWN0TWUvY29udGFjdC50cz80NDM1Il0sIm5hbWVzIjpbIndlYmhvb2tVcmwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImNvbnRhY3QiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiZW1iZWRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImZpZWxkcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLGtEQUFNQSxVQUFVLEdBQUcsNkhBQW5CO0FBU2UsK0VBQXNEO0FBQUEsTUFBbkRDLE9BQW1ELFFBQW5EQSxPQUFtRDtBQUFBLE1BQTFDQyxPQUEwQyxRQUExQ0EsT0FBMEM7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUNuRUMsT0FBSyxDQUFDTCxVQUFELEVBQWE7QUFDaEJNLFVBQU0sRUFBRSxNQURRO0FBRWhCQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGTztBQUdoQkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsYUFBTyxFQUFFLCtDQURVO0FBRW5CQyxZQUFNLEVBQUUsQ0FDTjtBQUNFQyxhQUFLLEVBQUVaLE9BRFQ7QUFFRWEsbUJBQVcsRUFBRVosT0FGZjtBQUdFYSxpQkFBUyxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUhiO0FBSUVDLGNBQU0sRUFBRSxDQUNOO0FBQUVkLGNBQUksRUFBRSxpQkFBUjtBQUEyQmUsZUFBSyxFQUFFaEI7QUFBbEMsU0FETSxFQUVOO0FBQUVDLGNBQUksRUFBRSxNQUFSO0FBQWdCZSxlQUFLLEVBQUVmO0FBQXZCLFNBRk07QUFKVixPQURNO0FBRlcsS0FBZjtBQUhVLEdBQWIsQ0FBTDtBQWtCRCxDQW5CRCIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL0NvbnRhY3RNZS9jb250YWN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2ViaG9va1VybCA9IFwiaHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS9hcGkvd2ViaG9va3MvNzIzMjg2OTU3NjUxNjU3MTc5L21zN2c3LVhhM2pLOVIzbnRsSTdsQ1F3UG9yYVhuSzZiY2JEamJZbE56bEtyWGZ1cWVuVHJTQXE5T1RzY3NvY25IVG1iXCJcblxudHlwZSBNZXNzYWdlUHJvcCA9IHtcbiAgc3ViamVjdDogc3RyaW5nXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjb250YWN0OiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHN1YmplY3QsIG1lc3NhZ2UsIGNvbnRhY3QsIG5hbWUgfTogTWVzc2FnZVByb3ApID0+IHtcbiAgZmV0Y2god2ViaG9va1VybCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGNvbnRlbnQ6IFwiQ29udGFjdCBmcm9tIGNvbnRhY3QgZm9ybSBAbWljaGFlbHNhbGltLmNvLnVrXCIsXG4gICAgICBlbWJlZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBzdWJqZWN0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgeyBuYW1lOiAnQ29udGFjdCB0aHJvdWdoJywgdmFsdWU6IGNvbnRhY3QgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ05hbWUnLCB2YWx1ZTogbmFtZSB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/ContactMe/contact.ts\n");

/***/ })

})