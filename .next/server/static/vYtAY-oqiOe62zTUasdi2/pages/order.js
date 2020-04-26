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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HRWK");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "HRWK":
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

// CONCATENATED MODULE: ./components/Order/OrderSummary.js

var __jsx = external_react_default.a.createElement;


function OrderSummary({
  email,
  mediaUrl,
  _id,
  name,
  total
}) {
  return __jsx(external_semantic_ui_react_["Item"].Group, null, __jsx(external_semantic_ui_react_["Item"], null, __jsx(external_semantic_ui_react_["Item"].Image, {
    size: "medium",
    src: mediaUrl
  }), __jsx(external_semantic_ui_react_["Item"].Content, null, __jsx(external_semantic_ui_react_["Item"].Header, null, email), __jsx(external_semantic_ui_react_["Item"].Description, null, __jsx("p", null, "Here is a subtitle."), __jsx("p", null, total), __jsx(external_semantic_ui_react_["Label"], null, "Customer Name: ", name)), __jsx(external_semantic_ui_react_["Item"].Extra, null))));
}

/* harmony default export */ var Order_OrderSummary = (OrderSummary);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Order/OrderAttributes.js
var OrderAttributes_jsx = external_react_default.a.createElement;






function OrderAttributes({
  email,
  _id,
  user,
  notes,
  total
}) {
  const [modal, setModal] = external_react_default.a.useState(false);
  const router = Object(router_["useRouter"])();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  async function handleDelete() {
    const url = `${baseUrl["a" /* default */]}/api/order`;
    const payload = {
      params: {
        _id
      }
    };
    await external_axios_default.a.delete(url, payload);
    router.push('/');
  }

  return OrderAttributes_jsx(external_react_default.a.Fragment, null, OrderAttributes_jsx(external_semantic_ui_react_["Header"], {
    as: "h3"
  }, "Description:"), OrderAttributes_jsx("p", null, email), OrderAttributes_jsx(external_semantic_ui_react_["Header"], {
    as: "h4"
  }, "Notes:"), OrderAttributes_jsx("p", null, notes), user && OrderAttributes_jsx(external_react_default.a.Fragment, null, OrderAttributes_jsx(external_semantic_ui_react_["Button"], {
    icon: "trash alternate outline",
    color: "red",
    content: "Delete Order",
    onClick: () => setModal(true)
  }), OrderAttributes_jsx(external_semantic_ui_react_["Modal"], {
    open: modal,
    dimmer: "blurring"
  }, OrderAttributes_jsx(external_semantic_ui_react_["Modal"].Header, null, "Confirm Delete"), OrderAttributes_jsx(external_semantic_ui_react_["Modal"].Content, null, OrderAttributes_jsx("p", null, "Are you sure you want to delete this order?")), OrderAttributes_jsx(external_semantic_ui_react_["Modal"].Actions, null, OrderAttributes_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => setModal(false),
    content: "cancel"
  }), OrderAttributes_jsx(external_semantic_ui_react_["Button"], {
    negative: true,
    icon: "trash",
    labelPosition: "right",
    content: "Delete",
    onClick: handleDelete
  })))));
}

/* harmony default export */ var Order_OrderAttributes = (OrderAttributes);
// CONCATENATED MODULE: ./pages/order.js

var order_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Order({
  order,
  user
}) {
  return order_jsx(external_react_default.a.Fragment, null, order_jsx("div", null, order_jsx(Order_OrderSummary, order), order_jsx(Order_OrderAttributes, _extends({
    user: user
  }, order))));
}

Order.getInitialProps = async ({
  query: {
    _id
  }
}) => {
  const url = `${baseUrl["a" /* default */]}/api/order`;
  const payload = {
    params: {
      _id
    }
  };
  const response = await external_axios_default.a.get(url, payload);
  return {
    order: response.data
  };
};

/* harmony default export */ var pages_order = __webpack_exports__["default"] = (Order);

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });