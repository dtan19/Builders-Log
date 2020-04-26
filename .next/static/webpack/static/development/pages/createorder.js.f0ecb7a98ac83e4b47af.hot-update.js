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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "/Users/david/Dev/myapps/Builders-Log/pages/createorder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

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

function CreateOrder(_id, user) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(INITIAL_ORDER),
      record = _useState[0],
      setRecord = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(''),
      mediaPreview = _useState2[0],
      setMediaPreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(true),
      disabled = _useState5[0],
      setDisabled = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(''),
      error = _useState6[0],
      setError = _useState6[1];

  react__WEBPACK_IMPORTED_MODULE_10___default.a.useEffect(function () {
    var isOrder = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(record).every(function (el) {
      return Boolean(el);
    });

    isOrder ? setDisabled(false) : setDisabled(true);
  }, [record]);

  function handleChange(event, data) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value,
        text = _event$target.text,
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
      }); //setStatus(prevState => ({ ...prevState, [name]: data }));

      console.log(INITIAL_ORDER);
    }
  }

  function handleSelect(event, data) {
    INITIAL_ORDER.orderStatus = data.value;
    console.log(INITIAL_ORDER.orderStatus);
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
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("https://api.cloudinary.com/v1_1/dtan19/image/upload", data));

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
            url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_13__["default"], "/api/order");
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
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(url, payload));

          case 12:
            response = _context2.sent;
            //console.log({ response });
            setRecord(INITIAL_ORDER);
            setSuccess(true);
            orderId = response.data._id;
            next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/order?_id=".concat(orderId));
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_14__["default"])(_context2.t0, setError);

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
    as: "h2",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    name: "add",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), "Create an Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
    error: true,
    header: "Oops!",
    content: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
    success: true,
    icon: "check",
    header: "Success",
    content: "Your order has been created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
    name: "media",
    type: "file",
    label: "Media" //accept="image/*"
    ,
    content: "Select Image",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Create your own order:")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
    name: "name",
    label: "Name",
    placeholder: "Jane Smith",
    value: record.name,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
    name: "phone",
    label: "Phone",
    placeholder: "801-555-1234",
    value: record.phone,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
    name: "email",
    label: "Email",
    placeholder: "name@email.com",
    value: record.email,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["TextArea"],
    name: "notes",
    label: "Notes",
    placeholder: "Type any special instructions here.",
    value: record.notes,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Dropdown, {
    selection: true,
    name: "orderStatus",
    label: "Status",
    placeholder: "Open",
    options: statusOptions,
    onChange: handleSelect,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"],
    name: "total",
    label: "Total",
    placeholder: "3.99",
    value: record.total,
    onChange: handleChange,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"] //disabled={disabled || loading}
    ,
    color: "blue",
    content: "Create",
    type: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateOrder);

/***/ })

})
//# sourceMappingURL=createorder.js.f0ecb7a98ac83e4b47af.hot-update.js.map