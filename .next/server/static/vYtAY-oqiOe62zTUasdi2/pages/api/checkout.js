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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2/+y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("usZV");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xg6E");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RIw8");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ggnL");
/* harmony import */ var _utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("33sw");






const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()("sk_test_QIsdVp8I3Rn8AeyB0IHLGxdE00VKGzUNtn");
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    paymentData
  } = req.body;

  try {
    // 1) Verify and get user id from token
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(req.headers.authorization, "hfkskjdkjdkd"); // 2) Find cart based on user id, populate it

    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].findOne({
      user: userId
    }).populate({
      path: "products.product",
      model: "Product"
    }); // 3) Calculate cart totals again from cart products

    const {
      cartTotal,
      stripeTotal
    } = Object(_utils_calculateCartTotal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(cart.products); // 4) Get email from payment data, see if email is linked with existing Stripe customer data

    const prevCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1
    });
    const isExistingCustomer = prevCustomer.data.length > 0; // 5) If not existing customer, create them based on their email

    let newCustomer;

    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.email,
        source: paymentData.id
      });
    }

    const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id; // 6) Create charge with total, send reciept email

    const charge = await stripe.charges.create({
      currency: "usd",
      amount: stripeTotal,
      receipt_email: paymentData.email,
      customer,
      description: `Checkout | ${paymentData.email} | ${paymentData.id}`
    }, {
      idempotency_key: uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()()
    }); // 7) Add order data to database

    await new _models_Order__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]({
      user: userId,
      name: paymentData.name,
      phone: paymentData.phone,
      email: paymentData.email,
      orderStatus: paymentData.orderStatus,
      total: cartTotal,
      products: cart.products
    }).save(); // 8) Clear products in cart

    await _models_Cart__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].findOneAndUpdate({
      _id: cart._id
    }, {
      $set: {
        products: []
      }
    }); // 9) Send back success (200) response

    res.status(200).send("Checkout successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Stripe system failed to respond.");
  }
});

/***/ }),

/***/ "33sw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function calculateCartTotal(products) {
  const total = products.reduce((acc, el) => {
    acc += el.product.price * el.quantity;
    return acc;
  }, 0);
  const cartTotal = (total * 100 / 100).toFixed(2);
  const stripeTotal = Number((total * 100).toFixed(2));
  return {
    cartTotal,
    stripeTotal
  };
}

;
/* harmony default export */ __webpack_exports__["a"] = (calculateCartTotal);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2/+y");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

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

/***/ "ggnL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId,
  Number,
  String
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
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
    },
    name: {
      type: String,
      ref: "Product"
    }
  }],
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Open"
  },
  total: {
    type: Number,
    required: true
  },
  mediaUrl: {
    type: String
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Order", OrderSchema));

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "usZV":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });