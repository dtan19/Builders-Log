webpackHotUpdate("static/development/pages/createlog.js",{

/***/ "./pages/createlog.js":
/*!****************************!*\
  !*** ./pages/createlog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Account_AccountProfile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Account/AccountProfile */ "./components/Account/AccountProfile.js");
/* harmony import */ var _components_Account_AccountUser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Account/AccountUser */ "./components/Account/AccountUser.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_20__);











var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/pages/createlog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











var INITIAL_LOG = {
  user: "TestUSer",
  media: "",
  date: "",
  hours: "",
  amount: "",
  logType: "",
  description: "",
  notes: ""
};
var logTypeOptions = [{
  key: 'Assembly',
  text: 'Assembly',
  value: 'Assembly'
}, {
  key: 'Research',
  text: 'Research',
  value: 'Research'
}, {
  key: 'Design',
  text: 'Design',
  value: 'Design'
}, {
  key: 'Purchase',
  text: 'Purchase',
  value: 'Purchase'
}, {
  key: 'Testing',
  text: 'Testing',
  value: 'Testing'
}];

function CreateLog(_ref) {
  var user = _ref.user,
      _id = _ref._id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(INITIAL_LOG),
      log = _useState[0],
      setLog = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(''),
      mediaPreview = _useState2[0],
      setMediaPreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(true),
      disabled = _useState5[0],
      setDisabled = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(''),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(INITIAL_LOG),
      userId = _useState7[0],
      setUser = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      amount = _useState8[0],
      setAmount = _useState8[1];

  react__WEBPACK_IMPORTED_MODULE_11___default.a.useEffect(function () {
    var isLog = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_10___default()(log).every(function (el) {
      return Boolean(el);
    });

    isLog ? setDisabled(false) : setDisabled(true);
  }, [log]);

  function handleSelect(e) {
    setLogSelect(e.target.value);
    handleType();
    console.log(logSelect);
  }

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value,
        files = _event$target.files;

    if (name === "media") {
      setLog(function (prevState) {
        return _objectSpread({}, prevState, {
          media: files[0]
        });
      });
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setLog(function (prevState) {
        return _objectSpread({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
      });
    }
  }

  function handleType() {
    if (setLogSelect === "Purchase") {
      setAmount(true);
      console.log("Purchase entry");
    } else {
      setAmount(false);
      console.log("Not a purchase entry");
    }
  }

  function handleSelect(event, data) {
    INITIAL_LOG.logType = data.value;
    console.log(INITIAL_LOG.logType);
    handleType;
  }

  function handleImageUpload() {
    var data, response, mediaUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.async(function handleImageUpload$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = new FormData();
            data.append('file', log.media);
            data.append('upload_preset', 'builders-log');
            data.append('cloud_name', 'dtan19');
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data));

          case 6:
            response = _context.sent;
            mediaUrl = response.data.url; //console.log(mediaUrl);

            return _context.abrupt("return", mediaUrl);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a);
  }

  function handleSubmit(event) {
    var mediaUrl, url, date, hours, _amount, logType, description, notes, payload, response, logId;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.async(function handleSubmit$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            event.preventDefault();
            setLoading(true);
            setError('');
            _context2.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.awrap(handleImageUpload());

          case 6:
            mediaUrl = _context2.sent;
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_14__["default"], "/api/log"); //getUser();

            console.log(_id);
            date = log.date, hours = log.hours, _amount = log.amount, logType = log.logType, description = log.description, notes = log.notes;
            payload = {
              mediaUrl: mediaUrl,
              date: date,
              hours: hours,
              amount: _amount,
              logType: logType,
              description: description,
              notes: notes
            };
            _context2.next = 13;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(url, payload));

          case 13:
            response = _context2.sent;
            //console.log({ response });
            setSuccess(true);
            logId = response.data._id;
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/log?_id=".concat(logId));
            _context2.next = 23;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_15__["default"])(_context2.t0, setError);
            console.log(_context2.t0);

          case 23:
            _context2.prev = 23;
            setLoading(false);
            return _context2.finish(23);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 19, 23, 26]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
    as: "h3",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_components_Account_AccountProfile__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    name: "wrench",
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), "Create Work Log"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
    error: true,
    header: "Oops!",
    content: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your log has been posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "media",
    type: "file",
    label: "Image",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    disabled: true,
    name: "user",
    label: "User ID:",
    value: user,
    onLoad: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Dropdown, {
    selection: true,
    name: "logType",
    label: "Log Type",
    placeholder: "Pick Something",
    options: logTypeOptions,
    onChange: handleSelect,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "date",
    label: "Date",
    type: "date",
    placeholder: "Date",
    value: log.date,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), amount ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "amount",
    label: "Amount",
    placeholder: "0.00",
    min: "0.00",
    type: "number",
    value: log.amount,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "hours",
    label: "Hours",
    placeholder: "0.00",
    min: "0.25",
    step: "0.25",
    type: "number",
    value: log.hours,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    value: log.description,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["TextArea"],
    name: "notes",
    label: "Notes",
    placeholder: "Notes",
    value: log.notes,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateLog);

/***/ })

})
//# sourceMappingURL=createlog.js.94f7d0a82c0214cda2d6.hot-update.js.map