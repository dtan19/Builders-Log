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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdae");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/Account/AccountHeader.js

var __jsx = external_react_default.a.createElement;



function AccountHeader({
  role,
  email,
  _id,
  name,
  createdAt
}) {
  return __jsx(external_semantic_ui_react_["Segment"], {
    secondary: true,
    inverted: true,
    color: "violet"
  }, __jsx(external_semantic_ui_react_["Label"], {
    color: "teal",
    size: "large",
    ribbon: true,
    icon: "privacy",
    style: {
      textTransform: 'capitalize'
    },
    content: role
  }), __jsx(external_semantic_ui_react_["Header"], {
    inverted: true,
    textAlign: "center",
    as: "h1",
    icon: true
  }, __jsx(external_semantic_ui_react_["Icon"], {
    name: "user"
  }), name, __jsx(external_semantic_ui_react_["Header"].Subheader, null, email), __jsx(external_semantic_ui_react_["Header"].Subheader, null, "Joined ", Object(formatDate["a" /* default */])(createdAt))));
}

/* harmony default export */ var Account_AccountHeader = (AccountHeader);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Account/AccountOrders.js

var AccountOrders_jsx = external_react_default.a.createElement;




function AccountOrders({
  orders
}) {
  const router = Object(router_["useRouter"])();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          color: "blue",
          content: Object(formatDate["a" /* default */])(order.createdAt)
        })
      },
      content: {
        content: AccountOrders_jsx(external_react_default.a.Fragment, null, AccountOrders_jsx(external_semantic_ui_react_["List"].Header, {
          as: "h3"
        }, "Total: $", order.total, AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          content: order.email,
          icon: "mail",
          basic: true,
          horizontal: true,
          style: {
            marginLeft: '1em'
          }
        })), AccountOrders_jsx(external_semantic_ui_react_["List"], null, order.products.map(p => AccountOrders_jsx(external_semantic_ui_react_["List"].Item, {
          key: p.product._id
        }, AccountOrders_jsx(external_semantic_ui_react_["Image"], {
          avatar: true,
          src: p.product.mediaUrl
        }), AccountOrders_jsx(external_semantic_ui_react_["List"].Content, null, AccountOrders_jsx(external_semantic_ui_react_["List"].Header, null, p.product.name), AccountOrders_jsx(external_semantic_ui_react_["List"].Description, null, p.quantity, " . $", p.product.price)), AccountOrders_jsx(external_semantic_ui_react_["List"].Content, {
          floated: "right"
        }, AccountOrders_jsx(external_semantic_ui_react_["Label"], {
          tag: true,
          color: "red",
          size: "tiny"
        }, p.product.sku))))))
      }
    }));
  }

  return AccountOrders_jsx(external_react_default.a.Fragment, null, AccountOrders_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, AccountOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "folder open"
  }), "Order History"), orders.length === 0 ? AccountOrders_jsx(external_semantic_ui_react_["Segment"], {
    inverted: true,
    tertiary: true,
    color: "grey",
    textAlign: "center"
  }, AccountOrders_jsx(external_semantic_ui_react_["Header"], {
    icon: true
  }, AccountOrders_jsx(external_semantic_ui_react_["Icon"], {
    name: "copy outline"
  }), "No past orders."), AccountOrders_jsx("div", null, AccountOrders_jsx(external_semantic_ui_react_["Button"], {
    onClick: () => router.push('/'),
    color: "orange"
  }, "View Products"))) : AccountOrders_jsx(external_semantic_ui_react_["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders)
  }));
}

/* harmony default export */ var Account_AccountOrders = (AccountOrders);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./components/Account/AccountPermissions.js
var AccountPermissions_jsx = external_react_default.a.createElement;







function AccountPermissions() {
  const [users, setUsers] = external_react_default.a.useState([]);
  external_react_default.a.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${baseUrl["a" /* default */]}/api/users`;
    const token = external_js_cookie_default.a.get("token");
    const payload = {
      headers: {
        Authorization: token
      }
    };
    const response = await external_axios_default.a.get(url, payload);
    setUsers(response.data);
  }

  return AccountPermissions_jsx("div", {
    style: {
      margin: '2em 0'
    }
  }, AccountPermissions_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, AccountPermissions_jsx(external_semantic_ui_react_["Icon"], {
    name: "settings"
  }), "User Permissions"), AccountPermissions_jsx(external_semantic_ui_react_["Table"], {
    compact: true,
    celled: true,
    definition: true
  }, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Header, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Row, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Name"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Email"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Joined"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Updated"), AccountPermissions_jsx(external_semantic_ui_react_["Table"].HeaderCell, null, "Role"))), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Body, null, users.map(user => AccountPermissions_jsx(UserPermission, {
    key: user._id,
    user: user
  })))));
}

function UserPermission({
  user
}) {
  const [admin, setAdmin] = external_react_default.a.useState(user.role === 'admin');
  const isFirstRun = external_react_default.a.useRef(true);
  external_react_default.a.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin(prevState => !prevState);
  }

  async function updatePermission() {
    const url = `${baseUrl["a" /* default */]}/api/account`;
    const payload = {
      _id: user._id,
      role: admin ? "admin" : "user"
    };
    const response = await external_axios_default.a.put(url, payload);
  }

  return AccountPermissions_jsx(external_semantic_ui_react_["Table"].Row, null, AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, {
    collapsing: true
  }, AccountPermissions_jsx(external_semantic_ui_react_["Checkbox"], {
    checked: admin,
    toggle: true,
    onChange: handleChangePermission
  })), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, user.name), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, user.email), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, Object(formatDate["a" /* default */])(user.createdAt)), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, Object(formatDate["a" /* default */])(user.updatedAt)), AccountPermissions_jsx(external_semantic_ui_react_["Table"].Cell, null, admin ? "admin" : "user"));
}

/* harmony default export */ var Account_AccountPermissions = (AccountPermissions);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__("xUX2");

// CONCATENATED MODULE: ./components/Product/CreateProduct.js
var CreateProduct_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

function CreateProduct() {
  const [product, setProduct] = external_react_default.a.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = external_react_default.a.useState('');
  const [success, setSuccess] = external_react_default.a.useState(false);
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [disabled, setDisabled] = external_react_default.a.useState(true);
  const [error, setError] = external_react_default.a.useState('');
  external_react_default.a.useEffect(() => {
    const isProduct = Object.values(product).every(el => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  function handleChange(event) {
    const {
      name,
      value,
      files
    } = event.target;

    if (name === "media") {
      setProduct(prevState => _objectSpread({}, prevState, {
        media: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => _objectSpread({}, prevState, {
        [name]: value
      }));
    }
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append('file', product.media);
    data.append('upload_preset', 'builders-log');
    data.append('cloud_name', 'dtan19');
    const response = await external_axios_default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError('');
      const mediaUrl = await handleImageUpload();
      const url = `${baseUrl["a" /* default */]}/api/product`;
      const {
        name,
        price,
        sku,
        description
      } = product;
      const payload = {
        name,
        price,
        sku,
        description,
        mediaUrl
      };
      const response = await external_axios_default.a.post(url, payload); //console.log({ response });

      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      Object(catchErrors["a" /* default */])(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return CreateProduct_jsx(external_react_default.a.Fragment, null, CreateProduct_jsx(external_semantic_ui_react_["Header"], {
    as: "h2",
    block: true
  }, CreateProduct_jsx(external_semantic_ui_react_["Icon"], {
    name: "add",
    color: "orange"
  }), "Create New Product"), CreateProduct_jsx(external_semantic_ui_react_["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit
  }, CreateProduct_jsx(external_semantic_ui_react_["Message"], {
    error: true,
    header: "Oops!",
    content: error
  }), CreateProduct_jsx(external_semantic_ui_react_["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your product has been posted"
  }), CreateProduct_jsx(external_semantic_ui_react_["Form"].Group, {
    widths: "equal"
  }, CreateProduct_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "name",
    label: "Name",
    placeholder: "Name",
    value: product.name,
    onChange: handleChange
  }), CreateProduct_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "price",
    label: "Price",
    placeholder: "0.00",
    min: "0.00",
    step: "0.01",
    type: "number",
    value: product.price,
    onChange: handleChange
  }), CreateProduct_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Input"],
    name: "media",
    type: "file",
    label: "Media",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange
  })), CreateProduct_jsx(external_semantic_ui_react_["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small"
  }), CreateProduct_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    value: product.description,
    onChange: handleChange
  }), CreateProduct_jsx(external_semantic_ui_react_["Form"].Field, {
    control: external_semantic_ui_react_["Button"],
    disabled: disabled || loading,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "Submit"
  })));
}

/* harmony default export */ var Product_CreateProduct = (CreateProduct);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// CONCATENATED MODULE: ./pages/account.js

var account_jsx = external_react_default.a.createElement;








function Account({
  user,
  orders
}) {
  return account_jsx(external_react_default.a.Fragment, null, account_jsx(Account_AccountHeader, user), account_jsx(Account_AccountOrders, {
    orders: orders
  }), account_jsx(Product_CreateProduct, null), user.role === 'root' && account_jsx(Account_AccountPermissions, null));
}

Account.getInitialProps = async ctx => {
  const {
    token
  } = Object(external_nookies_["parseCookies"])(ctx);

  if (!token) {
    return {
      orders: []
    };
  }

  const payload = {
    headers: {
      Authorization: token
    }
  };
  const url = `${baseUrl["a" /* default */]}/api/orders`;
  const response = await external_axios_default.a.get(url, payload);
  return response.data;
};

/* harmony default export */ var account = __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

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