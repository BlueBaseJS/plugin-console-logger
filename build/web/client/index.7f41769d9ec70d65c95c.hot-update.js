webpackHotUpdate("index",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: LoggerPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerPlugin", function() { return LoggerPlugin; });
/* harmony import */ var _bluebase_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebase/core */ "./node_modules/@bluebase/core/dist/index.js");
/* harmony import */ var _bluebase_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bluebase_core__WEBPACK_IMPORTED_MODULE_0__);

var LoggerPlugin = Object(_bluebase_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  key: 'logger',
  name: 'Logger Plugin',
  discription: 'This plugin console the value',
  categories: ['logging'],
  filters: {
    'bluebase.boot.end': function bluebaseBootEnd(_bootOptions, _ctx, BB) {
      BB.Logger.log('Asad');
    },
    'bluebase.logger.log': function bluebaseLoggerLog(message, _ref, BB) {
      var params = _ref.params;
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.log(message);
      console.log("Params: ", params);
      console.log("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.info': function bluebaseLoggerInfo(message, _ref2, BB) {
      var params = _ref2.params;
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.info(message);
      console.info("Params: ", params);
      console.info("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.debug': function bluebaseLoggerDebug(message, _ref3, BB) {
      var params = _ref3.params;
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.debug(message);
      console.debug("Params: ", params);
      console.debug("BB: ", BB);
      console.groupEnd();
    },
    'bluebase.logger.warn': function bluebaseLoggerWarn(message, _ref4, BB) {
      var params = _ref4.params;
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.warn(message);
      console.warn("Params: ", params);
      console.warn("BB: ", BB);
      console.groupEnd();
      return message;
    },
    'bluebase.logger.error': function bluebaseLoggerError(message, _ref5, BB) {
      var params = _ref5.params;
      console.group("%cBlueBase", "background-image: url('https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LPjsIbS1DfhqT8BS3Ui%2Favatar.png?generation=1540566320738340&alt=media') ; background-size: 12px; background-repeat : no-repeat ; background-position:left ; padding-left:18px");
      console.error(message);
      console.error("Params: ", params);
      console.error("BB: ", BB);
      console.groupEnd();
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.7f41769d9ec70d65c95c.hot-update.js.map