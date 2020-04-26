module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account/AccountProfile.js":
/*!**********************************************!*\
  !*** ./components/Account/AccountProfile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/components/Account/AccountProfile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AccountProfile({
  email,
  _id,
  name,
  createdAt
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    inverted: true,
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    textAlign: "left",
    as: "h1",
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), name, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Joined ", Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(createdAt))));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountProfile);

/***/ }),

/***/ "./components/Account/AccountUser.js":
/*!*******************************************!*\
  !*** ./components/Account/AccountUser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/components/Account/AccountUser.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AccountUser({
  _id
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _id);
}

/* harmony default export */ __webpack_exports__["default"] = (AccountUser);

/***/ }),

/***/ "./pages/createlog.js":
/*!****************************!*\
  !*** ./pages/createlog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Account_AccountProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Account/AccountProfile */ "./components/Account/AccountProfile.js");
/* harmony import */ var _components_Account_AccountUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Account/AccountUser */ "./components/Account/AccountUser.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/pages/createlog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const INITIAL_LOG = {
  user: "TestUSer",
  media: "",
  date: "",
  hours: "",
  amount: "",
  logType: "",
  description: "",
  notes: ""
};
const logTypeOptions = [{
  key: 'Assembly',
  text: 'Assembly',
  value: 'Assembly'
}, {
  key: 'Research',
  text: 'Research',
  value: 'Research'
}, {
  key: 'Design',
  text: 'Design',
  value: 'Design'
}, {
  key: 'Purchase',
  text: 'Purchase',
  value: 'Purchase'
}, {
  key: 'Testing',
  text: 'Testing',
  value: 'Testing'
}];

function CreateLog({
  user,
  _id
}) {
  const {
    0: log,
    1: setLog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(INITIAL_LOG);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: userId,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(INITIAL_LOG);
  const {
    0: amount,
    1: setAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const isLog = Object.values(log).every(el => Boolean(el));
    isLog ? setDisabled(false) : setDisabled(true);
  }, [log]);

  function handleChange(event) {
    const {
      name,
      value,
      files
    } = event.target;

    if (name === "media") {
      setLog(prevState => _objectSpread({}, prevState, {
        media: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setLog(prevState => _objectSpread({}, prevState, {
        [name]: value
      }));
    }
  }

  function handleType(event, data) {
    if (data === "Purchase") {
      setAmount(true);
      console.log("Purchase entry");
    } else {
      setAmount(false);
      console.log("Not a purchase entry");
    }
  }

  function handleSelect(event, data) {
    INITIAL_LOG.logType = data.value;
    console.log(INITIAL_LOG.logType);
    handleType;
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append('file', log.media);
    data.append('upload_preset', 'builders-log');
    data.append('cloud_name', 'dtan19');
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data);
    const mediaUrl = response.data.url; //console.log(mediaUrl);

    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError('');
      const mediaUrl = await handleImageUpload();
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__["default"]}/api/log`; //getUser();

      console.log(_id);
      const {
        date,
        hours,
        amount,
        logType,
        description,
        notes
      } = log;
      const payload = {
        mediaUrl,
        date,
        hours,
        amount,
        logType,
        description,
        notes
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, payload); //console.log({ response });

      setSuccess(true);
      const logId = response.data._id;
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/log?_id=${logId}`);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__["default"])(error, setError);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_components_Account_AccountProfile__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "wrench",
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), "Create Work Log"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    header: "Oops!",
    content: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your log has been posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "media",
    type: "file",
    label: "Image",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    disabled: true,
    name: "user",
    label: "User ID:",
    value: user,
    onLoad: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Dropdown, {
    selection: true,
    name: "logType",
    label: "Log Type",
    placeholder: "Pick Something",
    options: logTypeOptions,
    onChange: handleSelect,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "date",
    label: "Date",
    type: "date",
    placeholder: "Date",
    value: log.date,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), amount ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "amount",
    label: "Amount",
    placeholder: "0.00",
    min: "0.00",
    type: "number",
    value: log.amount,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "hours",
    label: "Hours",
    placeholder: "0.00",
    min: "0.25",
    step: "0.25",
    type: "number",
    value: log.hours,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    value: log.description,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"],
    name: "notes",
    label: "Notes",
    placeholder: "Notes",
    value: log.notes,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateLog);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = false ? undefined : 'http://localhost:3000';
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function catchErrors(error, displayError) {
  let errorMsg;

  if (error.response) {
    // The request was made and the server responded with a status code that is not in the range of 2XX
    errorMsg = error.response.data;
    console.error("Error response", errorMsg); // For Cloudinary image uploads]

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // The request was made, but no response was recieved
    console.error("Error request", errorMsg);
  } else {
    // Something else happened in making the request that triggered an error
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
}

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/formatDate.js":
/*!*****************************!*\
  !*** ./utils/formatDate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}

/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/createlog.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/david/Dev/myapps/Builders-Log/pages/createlog.js */"./pages/createlog.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=createlog.js.map