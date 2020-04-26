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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mFcD");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "OiCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  String
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", UserSchema));

/***/ }),

/***/ "e4bt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId,
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const LogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  mediaUrl: {
    type: String
  },
  date: {
    type: Date,
    reqired: true
  },
  hours: {
    type: Number
  },
  amount: {
    type: Number
  },
  logType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Log || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Log", LogSchema));

/***/ }),

/***/ "mFcD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e4bt");
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rn2G");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OiCc");




Object(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
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
  const log = await _models_Log__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].findOne({
    _id
  });
  res.status(200).json(log);
}

async function handlePostRequest(req, res) {
  const {
    mediaUrl,
    user,
    date,
    hours,
    amount,
    logType,
    description,
    notes
  } = req.body;

  try {
    // 1) Verify and get user id from token
    //const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    if (!date || !logType || !description) {
      return res.status(422).send("log missing one or more fields");
    }

    const log = await new _models_Log__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
      user,
      date,
      hours,
      amount,
      logType,
      description,
      notes,
      mediaUrl
    }).save();
    res.status(201).json(log);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server failed to create log.");
  }
}

async function handleDeleteRequest(req, res) {
  const {
    _id
  } = req.query;
  await _models_Log__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].findOneAndDelete({
    _id
  });
  res.status(204).json({});
} //export default async (req, res) => {
//    const { _id } = req.query
//    const product = await Product.findOne({ _id })
//    res.status(200).json(product)
//};

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

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });