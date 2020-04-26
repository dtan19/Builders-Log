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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c5D9");


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

/***/ "c5D9":
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

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__("GUDI");

// CONCATENATED MODULE: ./components/Log/PricingTable.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import { CsvToHtmlTable } from 'react-csv-to-table';

const sampleData = `
Model,mpg,cyl,disp
Datsun 710,22.8,4
Fiat 128,32.4,4
`;
class PricingTable_Table extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getKeys", function () {
      return Object.keys(this.props.data[0]);
    });

    _defineProperty(this, "getHeader", function () {
      var keys = this.getKeys();
      return keys.map((key, index) => {
        return __jsx("th", {
          key: key
        }, key.toUpperCase());
      });
    });

    _defineProperty(this, "getRowsData", function () {
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index) => {
        return __jsx("tr", {
          key: index
        }, __jsx(RenderRow, {
          key: index,
          data: row,
          keys: keys
        }));
      });
    });

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  render() {
    return __jsx("div", null, __jsx("table", null, __jsx("thead", null, __jsx("tr", null, this.getHeader())), __jsx("tbody", null, this.getRowsData())));
  }

}

const RenderRow = props => {
  return props.keys.map((key, index) => {
    return __jsx("td", {
      key: props.data[key]
    }, props.data[key]);
  });
};
/*function PricingSheets() {
  return <CsvToHtmlTable
  style={tableStyles}
  data={sampleData}
  csvDelimiter=","
  tableClassName="table table-striped table-hover"
/>}

export default PricingSheets;*/
// CONCATENATED MODULE: ./components/Log/SheetSummary.js

var SheetSummary_jsx = external_react_default.a.createElement;




function SheetSummary({
  name,
  columns,
  rows,
  mediaUrl,
  createdAt,
  _id
}) {
  return SheetSummary_jsx(external_semantic_ui_react_["Item"].Group, null, SheetSummary_jsx(external_semantic_ui_react_["Item"], null, SheetSummary_jsx(external_semantic_ui_react_["Item"].Image, {
    size: "medium",
    src: mediaUrl
  }), SheetSummary_jsx(external_semantic_ui_react_["Item"].Content, null, SheetSummary_jsx(external_semantic_ui_react_["Item"].Header, null, name), SheetSummary_jsx(external_semantic_ui_react_["Item"].Description, null, SheetSummary_jsx("p", null, "Created: ", Object(formatDate["a" /* default */])(createdAt)), SheetSummary_jsx(external_semantic_ui_react_["Label"], null, "Columns: ", columns), SheetSummary_jsx(external_semantic_ui_react_["Label"], null, "Rows: ", rows)), SheetSummary_jsx(external_semantic_ui_react_["Item"].Extra, null))));
}

/* harmony default export */ var Log_SheetSummary = (SheetSummary);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__("rjN7");

// CONCATENATED MODULE: ./pages/sheet.js

var sheet_jsx = external_react_default.a.createElement;

 //import LogAttributes from '../components/Log/LogAttributes';



function Sheet({
  sheet,
  user
}) {
  return sheet_jsx(external_react_default.a.Fragment, null, sheet_jsx(Log_SheetSummary, sheet));
}

Sheet.getInitialProps = async ({
  query: {
    _id
  }
}) => {
  const url = `${baseUrl["a" /* default */]}/api/sheet`;
  const payload = {
    params: {
      _id
    }
  };
  const response = await external_axios_default.a.get(url, payload); //console.log({response});

  return {
    sheet: response.data
  };
};

/* harmony default export */ var pages_sheet = __webpack_exports__["default"] = (Sheet);

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