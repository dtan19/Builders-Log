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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "RNiq":
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

// CONCATENATED MODULE: ./components/Index/ProductList.js

var __jsx = external_react_default.a.createElement;


function ProductList({
  products
}) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: "teal",
      fluid: `true`,
      childkey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }

  return __jsx(external_semantic_ui_react_["Card"].Group, {
    stackable: true,
    itemsPerRow: "3",
    centered: true,
    items: mapProductsToItems(products)
  });
}

;
/* harmony default export */ var Index_ProductList = (ProductList);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Index/ProductPagination.js

var ProductPagination_jsx = external_react_default.a.createElement;



function ProductPagination({
  totalPages
}) {
  const router = Object(router_["useRouter"])();
  return ProductPagination_jsx(external_semantic_ui_react_["Container"], {
    textAlign: "center",
    style: {
      margin: '2em '
    }
  }, ProductPagination_jsx(external_semantic_ui_react_["Pagination"], {
    defaultActivePage: 1,
    totalPages: totalPages,
    onPageChange: (event, data) => {
      data.activePage === 1 ? router.push('/') : router.push(`/?page=${data.activePage}`);
    }
  }));
}

/* harmony default export */ var Index_ProductPagination = (ProductPagination);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






function Home({
  products,
  totalPages
}) {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Index_ProductList, {
    products: products
  }), pages_jsx(Index_ProductPagination, {
    totalPages: totalPages
  }));
}

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 6; // fetch data on the server

  const url = `${baseUrl["a" /* default */]}/api/products`;
  const payload = {
    params: {
      page,
      size
    }
  };
  const response = await external_axios_default.a.get(url, payload);
  return response.data; // return response data as an object
  // note: this objest will be merged with existing props
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

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