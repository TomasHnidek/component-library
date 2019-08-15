'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "._alert-module_alert__Y9uE3 {\n  position: relative;\n  padding: .75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  ._alert-module_alert--color-fuchsia__pLb2c {\n    color: #57194f;\n    background-color: #B557AF;\n    border-color: #922A86; }\n  ._alert-module_alert--color-teal__3i-Ce {\n    color: #003b45;\n    background-color: #00B6B4;\n    border-color: #007D91; }\n";
var styles = {"alert":"_alert-module_alert__Y9uE3","alert--color-fuchsia":"_alert-module_alert--color-fuchsia__pLb2c","alert--color-teal":"_alert-module_alert--color-teal__3i-Ce"};
styleInject(css);

var Alert = function Alert(props) {
  var color = props.color;
  var AlertElement = 'div';
  var colorClassName = color ? styles['alert--color-' + color] : '';
  var classNames = classnames(styles['alert'], colorClassName);
  console.log(classNames);
  return React.createElement(AlertElement, {
    className: classNames
  }, props.children);
};

Alert.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired
};

var css$1 = "._button-module_btn__fZIzD {\n  font-size: .8rem;\n  border-radius: 5rem;\n  border-width: 1px;\n  border-style: solid;\n  display: inline-block;\n  padding: 0.66667rem 1.25rem;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  text-transform: uppercase;\n  position: relative; }\n  ._button-module_btn__fZIzD:hover, ._button-module_btn__fZIzD:focus, ._button-module_btn__fZIzD:active {\n    text-decoration: none; }\n  ._button-module_btn--type-tertiary__11aRM:after {\n    content: \"\";\n    display: inline-block;\n    height: 0;\n    width: 0;\n    border: .45em solid transparent;\n    border-right: 0;\n    margin-left: .66em;\n    vertical-align: -10%; }\n  ._button-module_btn--color-fuchsia__2yyQZ {\n    background-color: #922A86;\n    border-color: #922A86;\n    color: #FFF; }\n    ._button-module_btn--color-fuchsia__2yyQZ:hover, ._button-module_btn--color-fuchsia__2yyQZ:focus {\n      background-color: #B557AF;\n      border-color: #B557AF; }\n    ._button-module_btn--color-fuchsia__2yyQZ:active {\n      background-color: #57194f;\n      border-color: #57194f; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM {\n      color: #922A86; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active {\n        color: #FFF; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #922A86; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus {\n      color: #B557AF; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #B557AF; }\n    ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active {\n      color: #57194f; }\n      ._button-module_btn--color-fuchsia__2yyQZ._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #57194f; }\n  ._button-module_btn--color-teal__1Rp1F {\n    background-color: #007D91;\n    border-color: #007D91;\n    color: #FFF; }\n    ._button-module_btn--color-teal__1Rp1F:hover, ._button-module_btn--color-teal__1Rp1F:focus {\n      background-color: #00B6B4;\n      border-color: #00B6B4; }\n    ._button-module_btn--color-teal__1Rp1F:active {\n      background-color: #003b45;\n      border-color: #003b45; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM {\n      color: #007D91; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active {\n        color: #FFF; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #007D91; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus {\n      color: #00B6B4; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #00B6B4; }\n    ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active {\n      color: #003b45; }\n      ._button-module_btn--color-teal__1Rp1F._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #003b45; }\n  ._button-module_btn--color-white__QkFMI {\n    background-color: #FFF;\n    border-color: #FFF;\n    color: #3E3F42; }\n    ._button-module_btn--color-white__QkFMI:hover, ._button-module_btn--color-white__QkFMI:focus {\n      background-color: #F0F0F0;\n      border-color: #F0F0F0; }\n    ._button-module_btn--color-white__QkFMI:active {\n      background-color: #E6E7E8;\n      border-color: #E6E7E8; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM {\n      color: #FFF; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:focus, ._button-module_btn--color-white__QkFMI._button-module_btn--type-secondary__1Xdnf:active, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active {\n        color: #3E3F42; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:after {\n      border-left-color: #FFF; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus {\n      color: #F0F0F0; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:hover:after, ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:focus:after {\n        border-left-color: #F0F0F0; }\n    ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active {\n      color: #E6E7E8; }\n      ._button-module_btn--color-white__QkFMI._button-module_btn--type-tertiary__11aRM:active:after {\n        border-left-color: #E6E7E8; }\n";
var styles$1 = {"btn":"_button-module_btn__fZIzD","btn--type-tertiary":"_button-module_btn--type-tertiary__11aRM","btn--color-fuchsia":"_button-module_btn--color-fuchsia__2yyQZ","btn--type-secondary":"_button-module_btn--type-secondary__1Xdnf","btn--color-teal":"_button-module_btn--color-teal__1Rp1F","btn--color-white":"_button-module_btn--color-white__QkFMI"};
styleInject(css$1);

var Button = function Button(props) {
  var className = props.className,
      type = props.type,
      color = props.color,
      size = props.size,
      href = props.href,
      disabled = props.disabled,
      loading = props.loading;
  var ButtonElement = href;
  var typeClassName = type ? styles$1['btn--type-' + type] : '';
  var colorClassName = color ? styles$1['btn--color-' + color] : '';
  var sizeClassName = size ? styles$1['btn--size-' + size] : '';
  var disabledClassName = disabled ? styles$1['btn--disabled'] : '';
  var loadingClassName = disabled ? styles$1['btn--loading'] : '';
  var classNames = classnames(styles$1['btn'], styles$1[className], typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName);
  console.log(classNames);
  return React.createElement(ButtonElement, {
    className: classNames,
    disabled: disabled || loading
  }, loading && React.createElement("div", {
    className: styles$1.btnSpinner
  }, React.createElement("div", {
    className: styles$1.bounce1
  }), React.createElement("div", {
    className: styles$1.bounce2
  }), React.createElement("div", {
    className: styles$1.bounce3
  })), React.createElement("span", {
    className: styles$1.btnContent
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

exports.Alert = Alert;
exports.Button = Button;
//# sourceMappingURL=index.js.map
