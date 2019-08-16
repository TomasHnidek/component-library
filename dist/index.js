'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Alert = React.lazy(function () {
  return new Promise(function (resolve) { resolve({ 'default': require('./alert.js') }); });
});
var Button = React.lazy(function () {
  return new Promise(function (resolve) { resolve({ 'default': require('./button.js') }); });
});

exports.Alert = Alert;
exports.Button = Button;
//# sourceMappingURL=index.js.map
