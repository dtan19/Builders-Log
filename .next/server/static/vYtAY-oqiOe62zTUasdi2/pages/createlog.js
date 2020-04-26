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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UuE1");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "GUDI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}

/* harmony default export */ __webpack_exports__["a"] = (formatDate);

/***/ }),

/***/ "UuE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__("xUX2");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/Account/AccountProfile.js

var __jsx = external_react_default.a.createElement;



function AccountProfile({
  email,
  _id,
  name,
  createdAt
}) {
  return __jsx(external_semantic_ui_react_["Segment"], {
    secondary: true,
    inverted: true,
    color: "blue"
  }, __jsx(external_semantic_ui_react_["Header"], {
    inverted: true,
    textAlign: "left",
    as: "h1",
    icon: true
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "user"
  }), name, __jsx(external_semantic_ui_react_["Header"].Subheader, null, email), __jsx(external_semantic_ui_react_["Header"].Subheader, null, "Joined ", Object(formatDate["a" /* default */])(createdAt))));
}

/* harmony default export */ var Account_AccountProfile = (AccountProfile);
// CONCATENATED MODULE: ./components/Account/AccountUser.js

var AccountUser_jsx = external_react_default.a.createElement;


function AccountUser({
  _id
}) {
  return AccountUser_jsx(external_semantic_ui_react_["Label"], {
    as: "a"
  }, _id);
}

/* harmony default export */ var Account_AccountUser = (AccountUser);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__("tMJi");

// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__("a/h4");

// CONCATENATED MODULE: ./pages/createlog.js
var createlog_jsx = external_react_default.a.createElement;

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
  } = Object(external_react_["useState"])(INITIAL_LOG);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = Object(external_react_["useState"])('');
  const {
    0: success,
    1: setSuccess
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: disabled,
    1: setDisabled
  } = Object(external_react_["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    0: userId,
    1: setUser
  } = Object(external_react_["useState"])(INITIAL_LOG);
  const {
    0: amount,
    1: setAmount
  } = Object(external_react_["useState"])(false);
  external_react_default.a.useEffect(() => {
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
    const response = await external_axios_default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data);
    const mediaUrl = response.data.url; //console.log(mediaUrl);

    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError('');
      const mediaUrl = await handleImageUpload();
      const url = `${baseUrl["a" /* default */]}/api/log`; //getUser();

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
      const response = await external_axios_default.a.post(url, payload); //console.log({ response });

      setSuccess(true);
      const logId = response.data._id;
      router_default.a.push(`/log?_id=${logId}`);
    } catch (error) {
      Object(catchErrors["a" /* default */])(error, setError);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return createlog_jsx(external_react_default.a.Fragment, null, createlog_jsx(external_semantic_ui_react_["Header"], {
    as: "h3",
    block: true
  }, createlog_jsx(Account_AccountProfile, user), createlog_jsx(external_semantic_ui_react_["Icon"], {
    name: "wrench",
    color: "blue"
  }), "Create Work Log"), createlog_jsx(external_semantic_ui_react_["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit
  }, createlog_jsx(external_semantic_ui_react_["Message"], {
    error: true,
    header: "Oops!",
    content: error
  }), createlog_jsx(external_semantic_ui_react_["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your log has been posted"
  }), createlog_jsx(external_semantic_ui_react_["Form"].Group, {
    widths: "equal"
  }, createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "media",
    type: "file",
    label: "Image",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange
  })), createlog_jsx(external_semantic_ui_react_["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true
  }), createlog_jsx(external_semantic_ui_react_["Form"].Group, {
    widths: "equal"
  }, createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    disabled: true,
    name: "user",
    label: "User ID:",
    value: user,
    onLoad: handleChange
  })), createlog_jsx(external_semantic_ui_react_["Form"].Group, {
    widths: "equal"
  }, createlog_jsx(external_semantic_ui_react_["Form"].Dropdown, {
    selection: true,
    name: "logType",
    label: "Log Type",
    placeholder: "Pick Something",
    options: logTypeOptions,
    onChange: handleSelect,
    required: true
  }), createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "date",
    label: "Date",
    type: "date",
    placeholder: "Date",
    value: log.date,
    onChange: handleChange,
    required: true
  }), amount ? createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "amount",
    label: "Amount",
    placeholder: "0.00",
    min: "0.00",
    type: "number",
    value: log.amount,
    onChange: handleChange,
    required: true
  }) : createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "hours",
    label: "Hours",
    placeholder: "0.00",
    min: "0.25",
    step: "0.25",
    type: "number",
    value: log.hours,
    onChange: handleChange,
    required: true
  })), createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    value: log.description,
    onChange: handleChange,
    required: true
  }), createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["TextArea"],
    name: "notes",
    label: "Notes",
    placeholder: "Notes",
    value: log.notes,
    onChange: handleChange
  }), createlog_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "Submit"
  })));
}

/* harmony default export */ var createlog = __webpack_exports__["default"] = (CreateLog);

/***/ }),

/***/ "a/h4":
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rjN7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl = true ? 'https://builders-log.herokuapp.com' : undefined;
/* harmony default export */ __webpack_exports__["a"] = (baseUrl);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "xUX2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (catchErrors);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });