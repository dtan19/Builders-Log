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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uhzS");


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

/***/ "uhzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/Product/AddProductToCart.js
var AddProductToCart = __webpack_require__("EomZ");

// CONCATENATED MODULE: ./components/Product/ProductSummary.js

var __jsx = external_react_default.a.createElement;



function ProductSummary({
  name,
  mediaUrl,
  _id,
  price,
  sku,
  user
}) {
  return __jsx(external_semantic_ui_react_["Item"].Group, null, __jsx(external_semantic_ui_react_["Item"], null, __jsx(external_semantic_ui_react_["Item"].Image, {
    size: "medium",
    src: mediaUrl
  }), __jsx(external_semantic_ui_react_["Item"].Content, null, __jsx(external_semantic_ui_react_["Item"].Header, null, name), __jsx(external_semantic_ui_react_["Item"].Description, null, __jsx("p", null, "$", price), __jsx(external_semantic_ui_react_["Label"], null, "SKU: ", sku)), __jsx(external_semantic_ui_react_["Item"].Extra, null, __jsx(AddProductToCart["a" /* default */], {
    user: user,
    productId: _id
  })))));
}

/* harmony default export */ var Product_ProductSummary = (ProductSummary);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Product/ProductAttributes.js
var ProductAttributes_jsx = external_react_default.a.createElement;






function ProductAttributes({
  description,
  _id,
  user
}) {
  const [modal, setModal] = external_react_default.a.useState(false);
  const router = Object(router_["useRouter"])();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  async function handleDelete() {
    const url = `${baseUrl["a" /* default */]}/api/product`;
    const payload = {
      params: {
        _id
      }
    };
    await external_axios_default.a.delete(url, payload);
    router.push('/');
  }

  return ProductAttributes_jsx(external_react_default.a.Fragment, null, ProductAttributes_jsx(external_semantic_ui_react_["Header"], {
    as: "h3"
  }, "About this product:"), ProductAttributes_jsx("p", null, description), isRootOrAdmin && ProductAttributes_jsx(external_react_default.a.Fragment, null, ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    icon: "trash alternate outline",
    color: "red",
    content: "Delete Product",
    onClick: () => setModal(true)
  }), ProductAttributes_jsx(external_semantic_ui_react_["Modal"], {
    open: modal,
    dimmer: "blurring"
  }, ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Header, null, "Confirm Delete"), ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Content, null, ProductAttributes_jsx("p", null, "Are you sure you want to delete this product?")), ProductAttributes_jsx(external_semantic_ui_react_["Modal"].Actions, null, ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => setModal(false),
    content: "cancel"
  }), ProductAttributes_jsx(external_semantic_ui_react_["Button"], {
    negative: true,
    icon: "trash",
    labelPosition: "right",
    content: "Delete",
    onClick: handleDelete
  })))));
}

/* harmony default export */ var Product_ProductAttributes = (ProductAttributes);
// CONCATENATED MODULE: ./pages/product.js

var product_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Product({
  product,
  user
}) {
  return product_jsx(external_react_default.a.Fragment, null, product_jsx(Product_ProductSummary, _extends({
    user: user
  }, product)), product_jsx(Product_ProductAttributes, _extends({
    user: user
  }, product)));
}

Product.getInitialProps = async ({
  query: {
    _id
  }
}) => {
  const url = `${baseUrl["a" /* default */]}/api/product`;
  const payload = {
    params: {
      _id
    }
  };
  const response = await external_axios_default.a.get(url, payload);
  return {
    product: response.data
  };
};

/* harmony default export */ var pages_product = __webpack_exports__["default"] = (Product);

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