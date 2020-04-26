webpackHotUpdate("static/development/pages/createorder.js",{

/***/ "./pages/createorder.js":
/*!******************************!*\
  !*** ./pages/createorder.js ***!
  \******************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);











var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/pages/createorder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var INITIAL_ORDER = {
  user: "",
  products: [],
  name: "",
  phone: "",
  email: "",
  notes: "",
  orderStatus: "",
  total: "",
  media: ""
};
var statusOptions = [{
  key: "Open",
  text: "Open",
  value: "Open"
}, {
  key: "Complete",
  text: "Complete",
  value: "Complete"
}];
var eraSelection = "50's";

function CreateOrder(_id, user) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(INITIAL_ORDER),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState, 2),
      record = _React$useState2[0],
      setRecord = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState3, 2),
      mediaPreview = _React$useState4[0],
      setMediaPreview = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState5, 2),
      success = _React$useState6[0],
      setSuccess = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState7, 2),
      loading = _React$useState8[0],
      setLoading = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(true),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState9, 2),
      disabled = _React$useState10[0],
      setDisabled = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(''),
      _React$useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState11, 2),
      error = _React$useState12[0],
      setError = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(INITIAL_ORDER),
      _React$useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_React$useState13, 2),
      status = _React$useState14[0],
      setStatus = _React$useState14[1];

  react__WEBPACK_IMPORTED_MODULE_11___default.a.useEffect(function () {
    var isOrder = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(record).every(function (el) {
      return Boolean(el);
    });

    isOrder ? setDisabled(false) : setDisabled(true);
  }, [record]);

  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value,
        files = _event$target.files;

    if (name === "media") {
      setRecord(function (prevState) {
        return _objectSpread({}, prevState, {
          media: files[0]
        });
      });
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setRecord(function (prevState) {
        return _objectSpread({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
      });
    }
  }

  function handleSelect(event) {
    var _event$target2 = event.target,
        name = _event$target2.name,
        value = _event$target2.value;
    setStatus(function (prevState) {
      return _objectSpread({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, value));
    });
    console.log(INITIAL_ORDER.orderStatus);
    handleChange;
  }

  function handleImageUpload() {
    var data, response, mediaUrl;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function handleImageUpload$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = new FormData();
            data.append('file', record.media);
            data.append('upload_preset', 'builders-log');
            data.append('cloud_name', 'dtan19');
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data));

          case 6:
            response = _context.sent;
            mediaUrl = response.data.url;
            console.log(mediaUrl);
            return _context.abrupt("return", mediaUrl);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a);
  }

  function handleSubmit(event) {
    var mediaUrl, url, name, phone, email, notes, orderStatus, total, payload, response, orderId;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function handleSubmit$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            event.preventDefault();
            setLoading(true);
            setError('');
            _context2.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(handleImageUpload());

          case 6:
            mediaUrl = _context2.sent;
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_14__["default"], "/api/order");
            name = record.name, phone = record.phone, email = record.email, notes = record.notes, orderStatus = record.orderStatus, total = record.total;
            payload = {
              mediaUrl: mediaUrl,
              name: name,
              phone: phone,
              email: email,
              notes: notes,
              orderStatus: orderStatus,
              total: total
            };
            _context2.next = 12;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(url, payload));

          case 12:
            response = _context2.sent;
            //console.log({ response });
            setRecord(INITIAL_ORDER);
            setSuccess(true);
            orderId = response.data._id;
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/order?_id=".concat(orderId));
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_15__["default"])(_context2.t0, setError);

          case 22:
            _context2.prev = 22;
            setLoading(false);
            return _context2.finish(22);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 19, 22, 25]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
    as: "h2",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    name: "add",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), "Create an Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
    error: true,
    header: "Oops!",
    content: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your order has been created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "media",
    type: "file",
    label: "Media" //accept="image/*"
    ,
    content: "Select Image",
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Create your own order:")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "name",
    label: "Name",
    placeholder: "Jane Smith",
    value: record.name,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "phone",
    label: "Phone",
    placeholder: "801-555-1234",
    value: record.phone,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "email",
    label: "Email",
    placeholder: "name@email.com",
    value: record.email,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["TextArea"],
    name: "notes",
    label: "Notes",
    placeholder: "Type any special instructions here.",
    value: record.notes,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Dropdown, {
    selection: true,
    name: "orderStatus",
    label: "Status",
    placeholder: "Open",
    options: statusOptions,
    value: record.orderStatus,
    onChange: handleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"],
    name: "total",
    label: "Total",
    placeholder: "3.99",
    value: record.total,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    content: "Create",
    type: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateOrder);

/***/ })

})
//# sourceMappingURL=createorder.js.4c6863c8cb826b9fa3fc.hot-update.js.map