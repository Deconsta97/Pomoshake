webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_deco_NLW_pomoshake_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModa */ "./src/components/LevelUpModa.tsx");



var _jsxFileName = "C:\\Users\\deco_\\NLW\\pomoshake-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  var children = _ref.children,
      rest = Object(C_Users_deco_NLW_pomoshake_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("level", String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("currentExperience", String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function disposeLevelUpModa() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio("/lvlup.wav").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 💪", {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      experienceToNextLevel: experienceToNextLevel,
      completeChallenge: completeChallenge
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModa__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "UqHVByiPLb7kVaLDO0z8bDhE3KM=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImRpc3Bvc2VMZXZlbFVwTW9kYSIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEyQk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxrQkFBVCxPQUdxQjtBQUFBOztBQUFBOztBQUFBLE1BRjFCQyxRQUUwQixRQUYxQkEsUUFFMEI7QUFBQSxNQUR2QkMsSUFDdUI7O0FBQUEs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RyxDQUF2QixDQUF0QjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0xKLFdBQUssRUFBTEEsS0FESztBQUVMRSx1QkFBaUIsRUFBakJBLGlCQUZLO0FBR0xFLHlCQUFtQixFQUFuQkEsbUJBSEs7QUFJTGUsYUFBTyxFQUFQQSxPQUpLO0FBS0xFLHVCQUFpQixFQUFqQkEsaUJBTEs7QUFNTGYscUJBQWUsRUFBZkEsZUFOSztBQU9MMkIsb0JBQWMsRUFBZEEsY0FQSztBQVFMekIsMkJBQXFCLEVBQXJCQSxxQkFSSztBQVNMMEIsdUJBQWlCLEVBQWpCQTtBQVRLLEtBRFQ7QUFBQSxlQWFHckMsUUFiSCxFQWNHYyxrQkFBa0IsaUJBQUkscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0F6RmVmLGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTk5MjNmNDQyNzYxMzJkNzg5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYVwiO1xyXG5cclxudHlwZSBjaGFsbGVuZ2UgPSB7XHJcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIENoYWxsZW5nZXNDb250ZXh0RGF0YSA9IHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGFjdGl2ZUNoYWxsZW5nZTogY2hhbGxlbmdlO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIENoYWxsZW5nZXNQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIC4uLnJlc3RcclxufTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcclxuICAgIHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKFxyXG4gICAgcmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcclxuICApO1xyXG5cclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50RXhwZXJpZW5jZVwiLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkaXNwb3NlTGV2ZWxVcE1vZGEoKSB7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgIG5ldyBBdWRpbyhcIi9sdmx1cC53YXZcIikucGxheSgpO1xyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpbyDwn5KqXCIsIHtcclxuICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgIGxldmVsVXAoKTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==