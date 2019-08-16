'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styleInject_es = require('./style-inject.es-17e02351.js');

var css = "._alert-module_alert__Y9uE3 {\n  position: relative;\n  padding: .75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  ._alert-module_alert--color-fuchsia__pLb2c {\n    color: #57194f;\n    background-color: #B557AF;\n    border-color: #922A86; }\n  ._alert-module_alert--color-teal__3i-Ce {\n    color: #003b45;\n    background-color: #00B6B4;\n    border-color: #007D91; }\n";
var styles = {"alert":"_alert-module_alert__Y9uE3","alert--color-fuchsia":"_alert-module_alert--color-fuchsia__pLb2c","alert--color-teal":"_alert-module_alert--color-teal__3i-Ce"};
styleInject_es.styleInject(css);

var Alert = function Alert(props) {
  var color = props.color;
  var AlertElement = 'div';
  var colorClassName = color ? styles['alert--color-' + color] : '';
  var classNames = [styles['alert'], colorClassName].join(' ');
  console.log(classNames);
  return React.createElement(AlertElement, {
    className: classNames
  }, props.children);
};

Alert.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired
};

module.exports = Alert;
//# sourceMappingURL=alert.js.map
