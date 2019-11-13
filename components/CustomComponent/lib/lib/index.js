'use strict';

exports.__esModule = true;

var _customToolBar = require('./custom-tool-bar');

Object.defineProperty(exports, 'CustomToolBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_customToolBar).default;
  }
});

var _exampleComponent = require('./example-component');

Object.defineProperty(exports, 'ExampleComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_exampleComponent).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}