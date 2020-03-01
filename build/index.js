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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\src\\boxes\\index.js: Unexpected token (44:49)\n\n\u001b[0m \u001b[90m 42 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mRichText\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m                    placeholder\u001b[33m=\u001b[39m\u001b[32m\"Agrega el Encabezado\"\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 44 | \u001b[39m                    onChange\u001b[33m=\u001b[39m{onChangeHeadingBox}}\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 45 | \u001b[39m                    value\u001b[33m=\u001b[39m{headingBox}\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m                    \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh2\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:7044:17)\n    at Object.unexpected (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:8422:16)\n    at Object.jsxParseIdentifier (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:3889:12)\n    at Object.jsxParseNamespacedName (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:3899:23)\n    at Object.jsxParseAttribute (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:3983:22)\n    at Object.jsxParseOpeningElementAfterName (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4004:28)\n    at Object.jsxParseOpeningElementAt (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:3997:17)\n    at Object.jsxParseElementAt (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4029:33)\n    at Object.jsxParseElementAt (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4045:32)\n    at Object.jsxParseElementAt (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4045:32)\n    at Object.jsxParseElement (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4103:17)\n    at Object.parseExprAtom (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4110:19)\n    at Object.parseExprSubscripts (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9287:23)\n    at Object.parseMaybeUnary (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9267:21)\n    at Object.parseExprOps (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9137:23)\n    at Object.parseMaybeConditional (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9110:23)\n    at Object.parseMaybeAssign (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9065:21)\n    at Object.parseParenAndDistinguishExpression (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9842:28)\n    at Object.parseExprAtom (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9622:21)\n    at Object.parseExprAtom (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:4115:20)\n    at Object.parseExprSubscripts (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9287:23)\n    at Object.parseMaybeUnary (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9267:21)\n    at Object.parseExprOps (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9137:23)\n    at Object.parseMaybeConditional (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9110:23)\n    at Object.parseMaybeAssign (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9065:21)\n    at Object.parseExpression (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:9017:23)\n    at Object.parseReturnStatement (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:11091:28)\n    at Object.parseStatementContent (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:10772:21)\n    at Object.parseStatement (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:10724:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\jorge\\Local Sites\\lapizzeria\\app\\public\\wp-content\\plugins\\lapizzeria-gutenberg\\node_modules\\@babel\\parser\\lib\\index.js:11298:25)");

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


/***/ })

/******/ });
//# sourceMappingURL=index.js.map