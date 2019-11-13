"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExampleComponent;

var _react = _interopRequireDefault(require("react"));

function ExampleComponent() {
  return _react.default.createElement("div", {
    className: "example-component"
  }, "Hello ExampleComponent");
}

ExampleComponent.propTypes = {};
ExampleComponent.defaultProps = {};