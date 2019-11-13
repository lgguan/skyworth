"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 只做一件事，把`WrappedComponent`回传个`getInstance`（如果有的话）
var _default = function _default(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(withRef, _Component);

    function withRef() {
      (0, _classCallCheck2.default)(this, withRef);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(withRef).apply(this, arguments));
    }

    (0, _createClass2.default)(withRef, [{
      key: "render",
      value: function render() {
        var _this = this;

        // 这里重新定义一个props的原因是:
        // 你直接去修改this.props.ref在react开发模式下会报错，不允许你去修改
        var props = _objectSpread({}, this.props); // 在这里把getInstance赋值给ref，
        // 传给`WrappedComponent`，这样就getInstance能获取到`WrappedComponent`实例


        props.ref = function (el) {
          _this.props.getInstance && _this.props.getInstance(el);
          _this.props.ref && _this.props.ref(el);
        };

        return _react.default.createElement(WrappedComponent, props);
      }
    }]);
    return withRef;
  }(_react.Component), _class.displayName = "withRef(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")"), _temp;
};

exports.default = _default;