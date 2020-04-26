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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WBtd");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "EomZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rjN7");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xUX2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function AddProductToCart({
  user,
  productId
}) {
  const [quantity, setQuantity] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let timeout;

    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]}/api/cart`;
      const payload = {
        quantity,
        productId
      };
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('token');
      const headers = {
        headers: {
          Authorization: token
        }
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    min: "1",
    placeholder: "Quantity",
    value: quantity,
    onChange: event => setQuantity(Number(event.target.value)),
    action: user && success ? {
      color: 'blue',
      content: "Item Added!",
      icon: "plus cart",
      disabled: true
    } : user ? {
      color: "green",
      content: "Add to Cart",
      icon: "plus cart",
      loading,
      disabled: loading,
      onClick: handleAddProductToCart
    } : {
      color: 'blue',
      content: "Sign Up To purchase",
      icon: "signup",
      onClick: () => router.push('/signup')
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (AddProductToCart);

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "WBtd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rjN7");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xUX2");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Product_AddProductToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EomZ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import { CsvToHtmlTable } from 'react-csv-to-table';







const vidStyle = {
  paddingTop: '20px',
  marginBottom: '60px',
  background: '#777777'
};
const conStyle = {
  paddingTop: '20px',
  marginBottom: '20px',
  width: '100%',
  height: '50px',
  border: '1px solid #999',
  borderRadius: '5px',
  marginBottom: '60px'
};
const INITIAL_TABLE = {
  name: "",
  columns: "",
  rows: "",
  media: ""
};

function CreateSheet(_id, user) {
  const [table, setTable] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(INITIAL_TABLE);
  const [mediaPreview, setMediaPreview] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const isTable = Object.values(table).every(el => Boolean(el));
    isTable ? setDisabled(false) : setDisabled(true);
  }, [table]);

  function handleChange(event) {
    const {
      name,
      value,
      files
    } = event.target;

    if (name === "media") {
      setTable(prevState => _objectSpread({}, prevState, {
        media: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setTable(prevState => _objectSpread({}, prevState, {
        [name]: value
      }));
    }
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append('file', table.media);
    data.append('upload_preset', 'builders-log');
    data.append('cloud_name', 'dtan19');
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError('');
      const mediaUrl = await handleImageUpload();
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]}/api/sheet`;
      const {
        name,
        columns,
        rows
      } = table;
      const payload = {
        name,
        columns,
        rows,
        mediaUrl
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, payload); //console.log({ response });

      setTable(INITIAL_TABLE);
      setSuccess(true);
      const sheetId = response.data._id;
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/sheet?_id=${sheetId}`);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    block: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "add",
    color: "orange"
  }), "Create New Pricing Sheet"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    header: "Oops!",
    content: error
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your sheet has been created"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "media",
    type: "file",
    label: "Media" //accept="image/*"
    ,
    content: "Select Image",
    onChange: handleChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, null, __jsx("p", null, "Create your own pricing sheet:")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "name",
    label: "Sheet Name",
    onChange: handleChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "columns",
    label: "Number of Columns",
    placeholder: "1",
    min: "1",
    step: "1",
    type: "number",
    value: table.columns,
    onChange: handleChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    name: "rows",
    label: "Number of Rows",
    placeholder: "1",
    min: "1",
    step: "1",
    type: "number",
    value: table.rows,
    onChange: handleChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    content: "Create",
    type: "Submit"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Extra, null, __jsx(_components_Product_AddProductToCart__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    user: user,
    productId: _id
  }))), __jsx("h3", null, "Here is a container:"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: conStyle
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateSheet);

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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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