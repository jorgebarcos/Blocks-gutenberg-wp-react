/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/boxes/index.js":
/*!****************************!*\
  !*** ./src/boxes/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText; // Logo para el bloque


/**
        7 Pasos para crear un Bloque en Gutenberg
        1.- Importar el componente(s) que utilizarás
        2.- Coloca el componente donde deas utilizarlo.
        3.- Crea una función que lea los contenidos
        4.- Registra un atributo
        5.- Extraer el contenido desde props
        6.- Guarda el contenido con setAttributes
        7.- Lee los contenidos guardados en save()
 */

registerBlockType('lapizzeria/boxes', {
  title: 'Pizzeria Cajas',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Se ve en el editor");
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Se ve en el frontend");
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes */ "./src/boxes/index.js");


/***/ }),

/***/ "./src/pizzeria-icon.svg":
/*!*******************************!*\
  !*** ./src/pizzeria-icon.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPizzeriaIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#1B6606",
  d: "M-.405-1.612h27.09v27.255H-.405z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M2.965 18.784V5.228h3.293v10.703h5.246v2.853H2.965zM23.316 9.402c0 .792-.146 1.459-.439 2.001a3.62 3.62 0 01-1.188 1.312 5.255 5.255 0 01-1.723.728 8.844 8.844 0 01-2.029.229H16.31v5.112h-3.275V5.228h4.979c.74 0 1.433.073 2.077.22.645.148 1.206.383 1.685.709.479.325.855.754 1.131 1.282.273.53.409 1.185.409 1.963zm-3.273.018c0-.319-.063-.581-.191-.785s-.3-.362-.517-.478a2.165 2.165 0 00-.737-.229 6.053 6.053 0 00-.852-.058H16.31v3.197h1.377c.307 0 .601-.025.882-.076a2.39 2.39 0 00.756-.269c.224-.127.398-.297.526-.508.128-.209.192-.473.192-.794z"
}));

function SvgPizzeriaIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 25.16,
    height: 23.954
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0KCmltcG9ydCAqIGFzIFJlYWN0IGZyb20gInJlYWN0IjsKCnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInBhdGgiLCB7CiAgZmlsbDogIiMxQjY2MDYiLAogIGQ6ICJNLS40MDUtMS42MTJoMjcuMDl2MjcuMjU1SC0uNDA1eiIKfSk7Cgp2YXIgX3JlZjIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCgiZyIsIHsKICBmaWxsOiAiI0ZGRiIKfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgicGF0aCIsIHsKICBkOiAiTTIuOTY1IDE4Ljc4NFY1LjIyOGgzLjI5M3YxMC43MDNoNS4yNDZ2Mi44NTNIMi45NjV6TTIzLjMxNiA5LjQwMmMwIC43OTItLjE0NiAxLjQ1OS0uNDM5IDIuMDAxYTMuNjIgMy42MiAwIDAxLTEuMTg4IDEuMzEyIDUuMjU1IDUuMjU1IDAgMDEtMS43MjMuNzI4IDguODQ0IDguODQ0IDAgMDEtMi4wMjkuMjI5SDE2LjMxdjUuMTEyaC0zLjI3NVY1LjIyOGg0Ljk3OWMuNzQgMCAxLjQzMy4wNzMgMi4wNzcuMjIuNjQ1LjE0OCAxLjIwNi4zODMgMS42ODUuNzA5LjQ3OS4zMjUuODU1Ljc1NCAxLjEzMSAxLjI4Mi4yNzMuNTMuNDA5IDEuMTg1LjQwOSAxLjk2M3ptLTMuMjczLjAxOGMwLS4zMTktLjA2My0uNTgxLS4xOTEtLjc4NXMtLjMtLjM2Mi0uNTE3LS40NzhhMi4xNjUgMi4xNjUgMCAwMC0uNzM3LS4yMjkgNi4wNTMgNi4wNTMgMCAwMC0uODUyLS4wNThIMTYuMzF2My4xOTdoMS4zNzdjLjMwNyAwIC42MDEtLjAyNS44ODItLjA3NmEyLjM5IDIuMzkgMCAwMC43NTYtLjI2OWMuMjI0LS4xMjcuMzk4LS4yOTcuNTI2LS41MDguMTI4LS4yMDkuMTkyLS40NzMuMTkyLS43OTR6Igp9KSk7CgpmdW5jdGlvbiBTdmdQaXp6ZXJpYUljb24ocHJvcHMpIHsKICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgic3ZnIiwgX2V4dGVuZHMoewogICAgd2lkdGg6IDI1LjE2LAogICAgaGVpZ2h0OiAyMy45NTQKICB9LCBwcm9wcyksIF9yZWYsIF9yZWYyKTsKfQoKZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE5pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIZHBaSFJvUFNJeU5TNHhObkI0SWlCb1pXbG5hSFE5SWpJekxqazFOSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNalV1TVRZZ01qTXVPVFUwSWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBeU5TNHhOaUF5TXk0NU5UUWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BISmxZM1FnZUQwaUxUQXVOREExSWlCNVBTSXRNUzQyTVRJaUlHWnBiR3c5SWlNeFFqWTJNRFlpSUhkcFpIUm9QU0l5Tnk0d09TSWdhR1ZwWjJoMFBTSXlOeTR5TlRVaUx6NE5DanhuUGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJR1E5SWsweUxqazJOU3d4T0M0M09EUldOUzR5TWpob015NHlPVE4yTVRBdU56QXphRFV1TWpRMmRqSXVPRFV6U0RJdU9UWTFlaUl2UGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJR1E5SWsweU15NHpNVFlzT1M0ME1ESmpNQ3d3TGpjNU1pMHdMakUwTml3eExqUTFPUzB3TGpRek9Td3lMakF3TVdNdE1DNHlPVFFzTUM0MU5ESXRNQzQyT0Rrc01DNDVPQzB4TGpFNE9Dd3hMak14TWcwS0NRbGpMVEF1TkRrNExEQXVNek15TFRFdU1EY3lMREF1TlRjMExURXVOekl6TERBdU56STRZeTB3TGpZMU1Td3dMakUxTXkweExqTXlPQ3d3TGpJeU9TMHlMakF5T1N3d0xqSXlPV2d0TVM0Mk1qZDJOUzR4TVRKb0xUTXVNamMxVmpVdU1qSTRhRFF1T1RjNURRb0pDV013TGpjMExEQXNNUzQwTXpNc01DNHdOek1zTWk0d056Y3NNQzR5TW1Nd0xqWTBOU3d3TGpFME9Dd3hMakl3Tml3d0xqTTRNeXd4TGpZNE5Td3dMamN3T1dNd0xqUTNPU3d3TGpNeU5Td3dMamcxTlN3d0xqYzFOQ3d4TGpFek1Td3hMakk0TWcwS0NRbERNak11TVRnc055NDVOamtzTWpNdU16RTJMRGd1TmpJMExESXpMak14Tml3NUxqUXdNbm9nVFRJd0xqQTBNeXc1TGpReVl6QXRNQzR6TVRrdE1DNHdOak10TUM0MU9ERXRNQzR4T1RFdE1DNDNPRFZ6TFRBdU15MHdMak0yTWkwd0xqVXhOeTB3TGpRM09BMEtDUWxqTFRBdU1qRTRMVEF1TVRFMkxUQXVORFl5TFRBdU1Ua3lMVEF1TnpNM0xUQXVNakk1WXkwd0xqSTNOQzB3TGpBek9TMHdMalUxT1Mwd0xqQTFPQzB3TGpnMU1pMHdMakExT0dndE1TNDBNeloyTXk0eE9UZG9NUzR6Tnpkak1DNHpNRGNzTUN3d0xqWXdNUzB3TGpBeU5Td3dMamc0TWkwd0xqQTNOZzBLQ1Fsak1DNHlPQzB3TGpBMU1pd3dMalV6TWkwd0xqRTBNU3d3TGpjMU5pMHdMakkyT1dNd0xqSXlOQzB3TGpFeU55d3dMak01T0Mwd0xqSTVOeXd3TGpVeU5pMHdMalV3T0VNeE9TNDVOemtzTVRBdU1EQTFMREl3TGpBME15dzVMamMwTVN3eU1DNHdORE1zT1M0ME1ub2lMejROQ2p3dlp6NE5Dand2YzNablBnMEsiOwpleHBvcnQgeyBTdmdQaXp6ZXJpYUljb24gYXMgUmVhY3RDb21wb25lbnQgfTs=");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map