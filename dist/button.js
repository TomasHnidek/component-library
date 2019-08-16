'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styleInject_es = require('./style-inject.es-17e02351.js');

var css = "._button-module_btn__fZIzD {\n  font-size: .8rem;\n  border-radius: 5rem;\n  border-width: 1px;\n  border-style: solid;\n  display: inline-block;\n  padding: 0.66667rem 1.25rem;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  text-transform: uppercase;\n  position: relative; }\n  ._button-module_btn__fZIzD:hover, ._button-module_btn__fZIzD:focus, ._button-module_btn__fZIzD:active {\n    text-decoration: none; }\n  ._button-module_btn--type-tertiary__11aRM:after {\n    content: \"\";\n    display: inline-block;\n    height: 0;\n    width: 0;\n    border: .45em solid transparent;\n    border-right: 0;\n    margin-left: .66em;\n    vertical-align: -10%; }\n  ._button-module_btn--color-fuchsia__2yyQZ {\n    background-color: #922A86;\n    border-color: #922A86;\n    color: #FFF; }\n    ._button-module_btn--color-fuchsia__2yyQZ:hover, ._button-module_btn--color-fuchsia__2yyQZ:focus {\n      background-color: #B557AF;\n      border-color: #B557AF; }\n    ._button-module_btn--color-fuchsia__2yyQZ:active {\n      background-color: #57194f;\n      border-color: #57194f; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM {\n      color: #922A86; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active {\n        color: #FFF; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #922A86; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus {\n      color: #B557AF; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #B557AF; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active {\n      color: #57194f; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #57194f; }\n  ._button-module_btn--color-teal__1Rp1F {\n    background-color: #007D91;\n    border-color: #007D91;\n    color: #FFF; }\n    ._button-module_btn--color-teal__1Rp1F:hover, ._button-module_btn--color-teal__1Rp1F:focus {\n      background-color: #00B6B4;\n      border-color: #00B6B4; }\n    ._button-module_btn--color-teal__1Rp1F:active {\n      background-color: #003b45;\n      border-color: #003b45; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM {\n      color: #007D91; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active {\n        color: #FFF; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #007D91; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus {\n      color: #00B6B4; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #00B6B4; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active {\n      color: #003b45; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #003b45; }\n  ._button-module_btn--color-white__QkFMI {\n    background-color: #FFF;\n    border-color: #FFF;\n    color: #3E3F42; }\n    ._button-module_btn--color-white__QkFMI:hover, ._button-module_btn--color-white__QkFMI:focus {\n      background-color: #F0F0F0;\n      border-color: #F0F0F0; }\n    ._button-module_btn--color-white__QkFMI:active {\n      background-color: #E6E7E8;\n      border-color: #E6E7E8; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM {\n      color: #FFF; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active {\n        color: #3E3F42; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #FFF; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus {\n      color: #F0F0F0; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #F0F0F0; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active {\n      color: #E6E7E8; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #E6E7E8; }\n";
var styles = {"btn":"_button-module_btn__fZIzD","btn--type-tertiary":"_button-module_btn--type-tertiary__11aRM","btn--color-fuchsia":"_button-module_btn--color-fuchsia__2yyQZ","btn--type-secondary":"_button-module_btn--type-secondary__1Xdnf","btn--color-teal":"_button-module_btn--color-teal__1Rp1F","btn--color-white":"_button-module_btn--color-white__QkFMI"};
styleInject_es.styleInject(css);

var Button = function Button(props) {
  var className = props.className,
      type = props.type,
      color = props.color,
      size = props.size,
      href = props.href,
      disabled = props.disabled,
      loading = props.loading;
  var ButtonElement = href;
  var typeClassName = type ? styles['btn--type-' + type] : '';
  var colorClassName = color ? styles['btn--color-' + color] : '';
  var sizeClassName = size ? styles['btn--size-' + size] : '';
  var disabledClassName = disabled ? styles['btn--disabled'] : '';
  var loadingClassName = disabled ? styles['btn--loading'] : '';
  var classNames = [styles['btn'], styles[className], typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName].join(' ');
  console.log(classNames);
  return React.createElement(ButtonElement, {
    className: classNames,
    disabled: disabled || loading
  }, loading && React.createElement("div", {
    className: styles.btnSpinner
  }, React.createElement("div", {
    className: styles.bounce1
  }), React.createElement("div", {
    className: styles.bounce2
  }), React.createElement("div", {
    className: styles.bounce3
  })), React.createElement("span", {
    className: styles.btnContent
  }, props.children));
};

Button.defaultProps = {
  href: 'button',
  className: '',
  size: 'sm',
  disabled: false,
  loading: false
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

module.exports = Button;
//# sourceMappingURL=button.js.map
