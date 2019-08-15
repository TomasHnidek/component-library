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

var css = "._button_btn__2u3Y9 {\n  font-size: .8rem;\n  border-radius: 5rem;\n  border-width: 1px;\n  border-style: solid;\n  display: inline-block;\n  padding: 0.66667rem 1.25rem;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  text-transform: uppercase;\n  position: relative;\n  /* TODO: add size variants */ }\n  ._button_btn__2u3Y9:hover, ._button_btn__2u3Y9:focus, ._button_btn__2u3Y9:active {\n    text-decoration: none; }\n  ._button_btn--type-tertiary__Sl8Om:after {\n    content: \"\";\n    display: inline-block;\n    height: 0;\n    width: 0;\n    border: .45em solid transparent;\n    border-right: 0;\n    margin-left: .66em;\n    vertical-align: -10%; }\n  ._button_btn__2u3Y9, ._button_btn--color-fuschia__19G7T {\n    background-color: #922A86;\n    border-color: #922A86;\n    color: #FFF; }\n    ._button_btn__2u3Y9:hover, ._button_btn__2u3Y9:focus, ._button_btn--color-fuschia__19G7T:hover, ._button_btn--color-fuschia__19G7T:focus {\n      background-color: #B557AF;\n      border-color: #B557AF; }\n    ._button_btn__2u3Y9:active, ._button_btn--color-fuschia__19G7T:active {\n      background-color: #57194f;\n      border-color: #57194f; }\n    ._button_btn__2u3Y9._button_btn--type-secondary__2Bvx8, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om, ._button_btn--color-fuschia__19G7T._button_btn--type-secondary__2Bvx8, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om {\n      color: #922A86; }\n      ._button_btn__2u3Y9._button_btn--type-secondary__2Bvx8:hover, ._button_btn__2u3Y9._button_btn--type-secondary__2Bvx8:focus, ._button_btn__2u3Y9._button_btn--type-secondary__2Bvx8:active, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:hover, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:focus, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:active, ._button_btn--color-fuschia__19G7T._button_btn--type-secondary__2Bvx8:hover, ._button_btn--color-fuschia__19G7T._button_btn--type-secondary__2Bvx8:focus, ._button_btn--color-fuschia__19G7T._button_btn--type-secondary__2Bvx8:active, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:focus, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:active {\n        color: #FFF; }\n    ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:after, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:after {\n      border-left-color: #922A86; }\n    ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:hover, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:focus, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:focus {\n      color: #B557AF; }\n      ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:hover:after, ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:focus:after, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:hover:after, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:focus:after {\n        border-left-color: #B557AF; }\n    ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:active, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:active {\n      color: #57194f; }\n      ._button_btn__2u3Y9._button_btn--type-tertiary__Sl8Om:active:after, ._button_btn--color-fuschia__19G7T._button_btn--type-tertiary__Sl8Om:active:after {\n        border-left-color: #57194f; }\n  ._button_btn--color-teal__3NQ3s {\n    background-color: #007D91;\n    border-color: #007D91;\n    color: #FFF; }\n    ._button_btn--color-teal__3NQ3s:hover, ._button_btn--color-teal__3NQ3s:focus {\n      background-color: #00B6B4;\n      border-color: #00B6B4; }\n    ._button_btn--color-teal__3NQ3s:active {\n      background-color: #003b45;\n      border-color: #003b45; }\n    ._button_btn--color-teal__3NQ3s._button_btn--type-secondary__2Bvx8, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om {\n      color: #007D91; }\n      ._button_btn--color-teal__3NQ3s._button_btn--type-secondary__2Bvx8:hover, ._button_btn--color-teal__3NQ3s._button_btn--type-secondary__2Bvx8:focus, ._button_btn--color-teal__3NQ3s._button_btn--type-secondary__2Bvx8:active, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:focus, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:active {\n        color: #FFF; }\n    ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:after {\n      border-left-color: #007D91; }\n    ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:focus {\n      color: #00B6B4; }\n      ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:hover:after, ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:focus:after {\n        border-left-color: #00B6B4; }\n    ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:active {\n      color: #003b45; }\n      ._button_btn--color-teal__3NQ3s._button_btn--type-tertiary__Sl8Om:active:after {\n        border-left-color: #003b45; }\n  ._button_btn--color-white__2scUl {\n    background-color: #FFF;\n    border-color: #FFF;\n    color: #3E3F42; }\n    ._button_btn--color-white__2scUl:hover, ._button_btn--color-white__2scUl:focus {\n      background-color: #F0F0F0;\n      border-color: #F0F0F0; }\n    ._button_btn--color-white__2scUl:active {\n      background-color: #E6E7E8;\n      border-color: #E6E7E8; }\n    ._button_btn--color-white__2scUl._button_btn--type-secondary__2Bvx8, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om {\n      color: #FFF; }\n      ._button_btn--color-white__2scUl._button_btn--type-secondary__2Bvx8:hover, ._button_btn--color-white__2scUl._button_btn--type-secondary__2Bvx8:focus, ._button_btn--color-white__2scUl._button_btn--type-secondary__2Bvx8:active, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:focus, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:active {\n        color: #3E3F42; }\n    ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:after {\n      border-left-color: #FFF; }\n    ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:focus {\n      color: #F0F0F0; }\n      ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:hover:after, ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:focus:after {\n        border-left-color: #F0F0F0; }\n    ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:active {\n      color: #E6E7E8; }\n      ._button_btn--color-white__2scUl._button_btn--type-tertiary__Sl8Om:active:after {\n        border-left-color: #E6E7E8; }\n  ._button_btn--type-secondary__2Bvx8 {\n    background-color: transparent; }\n  ._button_btn--type-tertiary__Sl8Om, ._button_btn--type-tertiary__Sl8Om:hover, ._button_btn--type-tertiary__Sl8Om:focus, ._button_btn--type-tertiary__Sl8Om:active {\n    background-color: transparent;\n    border-color: transparent; }\n  ._button_btn--disabled__2Yso5 {\n    color: #979899;\n    cursor: not-allowed; }\n    ._button_btn--disabled__2Yso5, ._button_btn--disabled__2Yso5:hover, ._button_btn--disabled__2Yso5:focus, ._button_btn--disabled__2Yso5:active {\n      background-color: #E6E7E8;\n      border-color: #E6E7E8; }\n  ._button_btn--loading__3TonW {\n    cursor: wait; }\n    ._button_btn--loading__3TonW ._button_btn-content__2dz4v {\n      opacity: 0; }\n  ._button_btn--size-xs__2RSZm {\n    padding: 0.33333rem 0.66667rem;\n    font-size: ms(-1); }\n  ._button_btn--size-sm__1_ORb {\n    padding: 0.5rem 1rem;\n    font-size: ms(-1); }\n  ._button_btn--size-lg__jJwHI {\n    padding: 1rem 2.25rem;\n    font-size: ms(2); }\n  ._button_btn--size-xl__3KnOg {\n    padding: 1.5rem 3rem;\n    font-size: ms(3); }\n\n._button_btn-spinner__1lkPm {\n  width: 100%;\n  position: absolute;\n  left: 0; }\n  ._button_btn-spinner__1lkPm > div {\n    width: 0.7em;\n    height: 0.7em;\n    margin: 0 .15em;\n    background-color: #FFF;\n    border-radius: 100%;\n    display: inline-block;\n    animation: _button_sk-bouncedelay__2z31g 1.4s infinite ease-in-out both; }\n  ._button_btn-spinner__1lkPm > ._button_bounce1__2zUME {\n    animation-delay: -0.32s; }\n  ._button_btn-spinner__1lkPm > ._button_bounce2__GtAVa {\n    animation-delay: -0.16s; }\n\n@keyframes _button_sk-bouncedelay__2z31g {\n  0%, 80%, 100% {\n    transform: scale(0); }\n  40% {\n    transform: scale(1); } }\n";
var styles = {"btn":"_button_btn__2u3Y9","btn--type-tertiary":"_button_btn--type-tertiary__Sl8Om","btn--color-fuschia":"_button_btn--color-fuschia__19G7T","btn--type-secondary":"_button_btn--type-secondary__2Bvx8","btn--color-teal":"_button_btn--color-teal__3NQ3s","btn--color-white":"_button_btn--color-white__2scUl","btn--disabled":"_button_btn--disabled__2Yso5","btn--loading":"_button_btn--loading__3TonW","btn-content":"_button_btn-content__2dz4v","btn--size-xs":"_button_btn--size-xs__2RSZm","btn--size-sm":"_button_btn--size-sm__1_ORb","btn--size-lg":"_button_btn--size-lg__jJwHI","btn--size-xl":"_button_btn--size-xl__3KnOg","btn-spinner":"_button_btn-spinner__1lkPm","sk-bouncedelay":"_button_sk-bouncedelay__2z31g","bounce1":"_button_bounce1__2zUME","bounce2":"_button_bounce2__GtAVa"};
styleInject(css);

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
  var classNames = classnames(styles['btn'], styles[className], typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName);
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

exports.Button = Button;
//# sourceMappingURL=index.js.map
