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

var Button = function Button(props) {
  var className = props.className,
      type = props.type,
      color = props.color,
      size = props.size,
      href = props.href,
      disabled = props.disabled,
      loading = props.loading;
  var ButtonElement = href;
  var typeClassName = type ? 'btn--type-' + type : '';
  var colorClassName = color ? 'btn--color-' + color : '';
  var sizeClassName = size ? 'btn--size-' + size : '';
  var disabledClassName = disabled ? 'btn--disabled' : '';
  var loadingClassName = disabled ? 'btn--loading' : '';
  var classNames = classnames('btn', className, typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName);
  console.log(classNames);
  return React.createElement(ButtonElement, {
    className: classNames,
    disabled: disabled || loading
  }, loading && React.createElement("div", {
    className: 'btn-spinner'
  }, React.createElement("div", {
    className: 'bounce1'
  }), React.createElement("div", {
    className: 'bounce2'
  }), React.createElement("div", {
    className: 'bounce3'
  })), React.createElement("span", {
    className: 'btn-content'
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

exports.Button = Button;
//# sourceMappingURL=index.js.map
