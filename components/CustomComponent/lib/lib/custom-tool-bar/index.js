"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@alifd/next/es/field/style");

var _field = _interopRequireDefault(require("@alifd/next/es/field"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

require("@alifd/next/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("@alifd/next/es/checkbox"));

require("@alifd/next/es/time-picker/style");

var _timePicker = _interopRequireDefault(require("@alifd/next/es/time-picker"));

require("@alifd/next/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("@alifd/next/es/date-picker"));

require("@alifd/next/es/select/style");

var _select = _interopRequireDefault(require("@alifd/next/es/select"));

require("@alifd/next/es/input/style");

var _input = _interopRequireDefault(require("@alifd/next/es/input"));

require("@alifd/next/es/button/style");

var _button = _interopRequireDefault(require("@alifd/next/es/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withRef = _interopRequireDefault(require("./withRef"));

require("./main.scss");

var _class, _class2, _temp;

var RenderToolBar = function RenderToolBar(props) {
  var config = props.config,
      field = props.field;
  return config.map(function (item, index) {
    if (item.component === 'Button') {
      return _react.default.createElement(RenderButton, {
        key: index,
        item: item
      });
    } else if (item.component === 'Input') {
      return _react.default.createElement(RenderInput, {
        key: index,
        item: item,
        field: field
      });
    } else if (item.component === 'Select') {
      return _react.default.createElement(RenderSelect, {
        key: index,
        item: item,
        field: field
      });
    } else if (item.component === 'DatePicker') {
      return _react.default.createElement(RenderDatePicker, {
        key: index,
        item: item,
        field: field
      });
    } else if (item.component === 'DateRangePicker') {
      return _react.default.createElement(RenderDateRangePicker, {
        key: index,
        item: item,
        field: field
      });
    } else if (item.component === 'TimePicker') {
      return _react.default.createElement(RenderTimePicker, {
        key: index,
        item: item,
        field: field
      });
    } else if (item.component === 'CheckBox') {
      return _react.default.createElement(RenderCheckbox, {
        key: index,
        item: item,
        field: field
      });
    } else {
      return _react.default.createElement(RenderNotSupport, {
        key: index,
        item: item
      });
    }
  });
};

var RenderButton = function RenderButton(props) {
  var item = props.item;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement(_button.default, (0, _extends2.default)({
    type: "primary",
    className: "tool-button"
  }, item.componentProps), item.label));
};

var RenderInput = function RenderInput(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, item.label), _react.default.createElement(_input.default, (0, _extends2.default)({
    field: field,
    className: "tool-input"
  }, item.componentProps, field.init("".concat(item.field), {
    initValue: item.defaultValue
  }, {
    onChange: item.componentProps.onChange
  }))));
};

var RenderSelect = function RenderSelect(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, item.label), _react.default.createElement(_select.default, (0, _extends2.default)({
    field: field,
    className: "tool-select"
  }, item.componentProps, field.init("".concat(item.field), {
    initValue: item.defaultValue
  }, {
    onChange: item.componentProps.onChange
  }))));
};

var RenderDatePicker = function RenderDatePicker(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, item.label), _react.default.createElement(_datePicker.default, (0, _extends2.default)({
    field: field,
    className: "tool-datePicker"
  }, item.componentProps, field.init("".concat(item.field), {
    initValue: item.defaultValue
  }, {
    onChange: item.componentProps.onChange
  }))));
};

var RenderDateRangePicker = function RenderDateRangePicker(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, item.label), _react.default.createElement(_datePicker.default.RangePicker, (0, _extends2.default)({
    field: field,
    className: "tool-datePicker"
  }, item.componentProps, field.init("".concat(item.field), {
    initValue: item.defaultValue
  }, {
    onChange: item.componentProps.onChange
  }))));
};

var RenderTimePicker = function RenderTimePicker(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, item.label), _react.default.createElement(_timePicker.default, (0, _extends2.default)({
    field: field,
    className: "tool-timePicker"
  }, item.componentProps, field.init("".concat(item.field), {
    initValue: item.defaultValue
  }, {
    onChange: item.componentProps.onChange
  }))));
};

var RenderCheckbox = function RenderCheckbox(props) {
  var item = props.item,
      field = props.field;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement(_checkbox.default, (0, _extends2.default)({
    className: "tool-checkBox"
  }, item.componentProps, field.init("".concat(item.field), {
    valueName: 'checked',
    initValue: item.defaultValue || false
  }, {
    onChange: item.componentProps.onChange
  })), item.label));
};

var RenderNotSupport = function RenderNotSupport(props) {
  var item = props.item;
  return _react.default.createElement("div", {
    className: "tool-item"
  }, _react.default.createElement("span", {
    className: "tool-span"
  }, "Not support `", item.component, "`"));
};

var CustomToolBar = (0, _withRef.default)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CustomToolBar, _Component);

  function CustomToolBar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CustomToolBar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CustomToolBar).call(this, props));
    _this.field = new _field.default((0, _assertThisInitialized2.default)(_this), {
      onChange: _this.props.onChange
    });

    _this.getField = function () {
      return _this.field;
    };

    return _this;
  }

  (0, _createClass2.default)(CustomToolBar, [{
    key: "render",
    value: function render() {
      var config = this.props.config;
      return _react.default.createElement("div", {
        className: "tool-bar"
      }, _react.default.createElement(RenderToolBar, {
        config: config,
        field: this.field
      }));
    }
  }]);
  return CustomToolBar;
}(_react.Component), _class2.displayName = 'ToolBar', _class2.propTypes = {
  config: _propTypes.default.array
}, _class2.defaultProps = {
  config: [],
  onChange: function onChange() {}
}, _temp)) || _class;

exports.default = CustomToolBar;