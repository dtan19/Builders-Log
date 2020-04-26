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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YQMk");


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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "YQMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Cart/CartItemList.js

var __jsx = external_react_default.a.createElement;



function CartItemList({
  products,
  user,
  handleRemoveFromCart,
  success
}) {
  const router = Object(router_["useRouter"])();

  function mapCartProductsToItems(products) {
    return products.map(p => ({
      childKey: p.product._id,
      header: __jsx(external_semantic_ui_react_["Item"].Header, {
        as: "a",
        onClick: () => router.push(`/product?_id=${p.product._id}`)
      }, p.product.name),
      image: p.product.mediaUrl,
      meta: `${p.quantity} x $${p.product.price}`,
      fluid: "true",
      extra: __jsx(external_semantic_ui_react_["Button"], {
        basic: true,
        icon: "remove",
        floated: "right",
        onClick: () => handleRemoveFromCart(p.product._id)
      })
    }));
  }

  if (success) {
    return __jsx(external_semantic_ui_react_["Message"], {
      success: true,
      header: "Success!",
      content: "Your order and payment have been processed.",
      icon: "star outline"
    });
  }

  if (products.length === 0) {
    return __jsx(external_semantic_ui_react_["Segment"], {
      secondary: true,
      color: "teal",
      inverted: true,
      textAlign: "center",
      placeholder: true
    }, __jsx(external_semantic_ui_react_["Header"], {
      icon: true
    }, __jsx(external_semantic_ui_react_["Icon"], {
      name: "shopping basket"
    }), "No products in your cart. Start shopping!"), __jsx("div", null, user ? __jsx(external_semantic_ui_react_["Button"], {
      color: "orange",
      onClick: () => router.push('/')
    }, "View Products") : __jsx(external_semantic_ui_react_["Button"], {
      color: "blue",
      onClick: () => router.push('/login')
    }, "Sign in to Add Products")));
  }

  return __jsx(external_semantic_ui_react_["Item"].Group, {
    divided: true,
    items: mapCartProductsToItems(products)
  });
}

/* harmony default export */ var Cart_CartItemList = (CartItemList);
// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__("r0Hv");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// EXTERNAL MODULE: ./utils/calculateCartTotal.js
var calculateCartTotal = __webpack_require__("33sw");

// CONCATENATED MODULE: ./components/Cart/CartSummary.js
var CartSummary_jsx = external_react_default.a.createElement;





function CartSummary({
  products,
  handleCheckout,
  success
}) {
  const [cartAmount, setCartAmount] = external_react_default.a.useState(0);
  const [stripeAmount, setStripeAmount] = external_react_default.a.useState(0);
  const [isCartEmpty, setCartEmpty] = external_react_default.a.useState(false);
  external_react_default.a.useEffect(() => {
    const {
      cartTotal,
      stripeTotal
    } = Object(calculateCartTotal["a" /* default */])(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return CartSummary_jsx(external_react_default.a.Fragment, null, CartSummary_jsx(external_semantic_ui_react_["Divider"], null), CartSummary_jsx(external_semantic_ui_react_["Segment"], {
    clearing: true,
    size: "large"
  }, CartSummary_jsx("strong", null, "Subtotal:"), " $", cartAmount, CartSummary_jsx(external_react_stripe_checkout_default.a, {
    name: "Builder's Log",
    amount: stripeAmount,
    image: products.length > 0 ? products[0].product.mediaUrl : "",
    currency: "USD",
    shippingAddress: false,
    billingAddress: true,
    zipCode: true,
    stripeKey: "pk_test_td9kjGw7RnHpkwvsXtzoL76900Zc0P9ulc",
    token: handleCheckout,
    triggerEvent: "onClick"
  }, CartSummary_jsx(external_semantic_ui_react_["Button"], {
    icon: "cart",
    disabled: isCartEmpty || success,
    color: "teal",
    floated: "right",
    content: "Checkout"
  }))));
}

/* harmony default export */ var Cart_CartSummary = (CartSummary);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__("xUX2");

// CONCATENATED MODULE: ./pages/cart.js
var cart_jsx = external_react_default.a.createElement;










function Cart({
  products,
  user
}) {
  const [cartProducts, setCartProducts] = external_react_default.a.useState(products);
  const [success, setSuccess] = external_react_default.a.useState(false);
  const [loading, setLoading] = external_react_default.a.useState(false);

  async function handleRemoveFromCart(productId) {
    const url = `${baseUrl["a" /* default */]}/api/cart`;
    const token = external_js_cookie_default.a.get('token');
    const payload = {
      params: {
        productId
      },
      headers: {
        Authorization: token
      }
    };
    const response = await external_axios_default.a.delete(url, payload);
    setCartProducts(response.data);
  }

  async function handleCheckout(paymentData) {
    try {
      setLoading(true);
      const url = `${baseUrl["a" /* default */]}/api/checkout`;
      const token = external_js_cookie_default.a.get('token');
      const payload = {
        paymentData
      };
      const headers = {
        headers: {
          Authorization: token
        }
      };
      await external_axios_default.a.post(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      Object(catchErrors["a" /* default */])(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return cart_jsx(external_semantic_ui_react_["Segment"], {
    loading: loading
  }, cart_jsx(Cart_CartItemList, {
    handleRemoveFromCart: handleRemoveFromCart,
    user: user,
    products: cartProducts,
    success: success
  }), cart_jsx(Cart_CartSummary, {
    products: cartProducts,
    handleCheckout: handleCheckout,
    success: success
  }));
}

Cart.getInitialProps = async ctx => {
  const {
    token
  } = Object(external_nookies_["parseCookies"])(ctx);

  if (!token) {
    return {
      products: []
    };
  }

  const url = `${baseUrl["a" /* default */]}/api/cart`;
  const payload = {
    headers: {
      Authorization: token
    }
  };
  const response = await external_axios_default.a.get(url, payload);
  return {
    products: response.data
  };
};

/* harmony default export */ var cart = __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "r0Hv":
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

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