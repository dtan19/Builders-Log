module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KNHd");


/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "EBLz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


const {
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    reqired: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Product", ProductSchema));

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "KNHd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EBLz");
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RIw8");
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rn2G");



Object(_utils_connectDb__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;

    case "POST":
      await handlePostRequest(req, res);
      break;

    case "DELETE":
      await handleDeleteRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
});

async function handleGetRequest(req, res) {
  const {
    _id
  } = req.query;
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].findOne({
    _id
  });
  res.status(200).json(product);
}

async function handlePostRequest(req, res) {
  const {
    name,
    price,
    sku,
    description,
    mediaUrl
  } = req.body;

  try {
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send("Product missing one or more fields");
    }

    const product = await new _models_Product__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
      name,
      price,
      sku,
      description,
      mediaUrl
    }).save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server failed to create product.");
  }
}

async function handleDeleteRequest(req, res) {
  const {
    _id
  } = req.query;

  try {
    // 1) Delete a product by id
    await _models_Product__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].findOneAndDelete({
      _id
    }); // 2) Remove product from all carts, reference as 'product'

    await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].updateMany({
      "products.product": _id
    }, {
      $pull: {
        products: {
          product: _id
        }
      }
    });
    res.status(204).json({});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting product.');
  }
} //export default async (req, res) => {
//    const { _id } = req.query
//    const product = await Product.findOne({ _id })
//    res.status(200).json(product)
//};

/***/ }),

/***/ "RIw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const CartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: "Product"
    }
  }]
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Cart", CartSchema));

/***/ }),

/***/ "rn2G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //Use existing db connection
    //console.log("Using existing connection")
    return;
  } //use new db connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://dbUser:Biplane19@cluster0-g4upb.mongodb.net/test?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); //console.log("DB Connected")

  connection.isConnected = db.connections[0].readyState;
}

;
/* harmony default export */ __webpack_exports__["a"] = (connectDb);

/***/ })

/******/ });