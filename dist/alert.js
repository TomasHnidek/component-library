"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=_interopDefault(require("react")),PropTypes=_interopDefault(require("prop-types")),styleInject_es=require("./style-inject.es-dcee06b6.js"),css="._alert-module_alert__Y9uE3{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}",styles={alert:"_alert-module_alert__Y9uE3"};styleInject_es.styleInject(css);var Alert=function(e){var r=e.color,t=r?styles["alert--color-"+r]:"",l=[styles.alert,t].join(" ");return console.log(l),React.createElement("div",{className:l},e.children)};Alert.propTypes={children:PropTypes.any.isRequired,color:PropTypes.string.isRequired},module.exports=Alert;
//# sourceMappingURL=alert.js.map
