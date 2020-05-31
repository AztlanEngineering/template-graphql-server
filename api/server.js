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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apps sync recursive ^\\.\\/.*$":
/*!********************************!*\
  !*** ./src/apps sync ^\.\/.*$ ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./auth\": \"./src/apps/auth/index.js\",\n\t\"./auth/\": \"./src/apps/auth/index.js\",\n\t\"./auth/controllers\": \"./src/apps/auth/controllers/index.js\",\n\t\"./auth/controllers/\": \"./src/apps/auth/controllers/index.js\",\n\t\"./auth/controllers/Token\": \"./src/apps/auth/controllers/Token.js\",\n\t\"./auth/controllers/Token.js\": \"./src/apps/auth/controllers/Token.js\",\n\t\"./auth/controllers/User\": \"./src/apps/auth/controllers/User.js\",\n\t\"./auth/controllers/User.js\": \"./src/apps/auth/controllers/User.js\",\n\t\"./auth/controllers/index\": \"./src/apps/auth/controllers/index.js\",\n\t\"./auth/controllers/index.js\": \"./src/apps/auth/controllers/index.js\",\n\t\"./auth/dependencies\": \"./src/apps/auth/dependencies.json\",\n\t\"./auth/dependencies.json\": \"./src/apps/auth/dependencies.json\",\n\t\"./auth/index\": \"./src/apps/auth/index.js\",\n\t\"./auth/index.js\": \"./src/apps/auth/index.js\",\n\t\"./auth/migrations/00_auth_tokens_initial.migration\": \"./src/apps/auth/migrations/00_auth_tokens_initial.migration.js\",\n\t\"./auth/migrations/00_auth_tokens_initial.migration.js\": \"./src/apps/auth/migrations/00_auth_tokens_initial.migration.js\",\n\t\"./auth/migrations/00_auth_users_initial.migration\": \"./src/apps/auth/migrations/00_auth_users_initial.migration.js\",\n\t\"./auth/migrations/00_auth_users_initial.migration.js\": \"./src/apps/auth/migrations/00_auth_users_initial.migration.js\",\n\t\"./auth/migrations/01_auth_tokens_association_users.migration\": \"./src/apps/auth/migrations/01_auth_tokens_association_users.migration.js\",\n\t\"./auth/migrations/01_auth_tokens_association_users.migration.js\": \"./src/apps/auth/migrations/01_auth_tokens_association_users.migration.js\",\n\t\"./auth/migrations/template\": \"./src/apps/auth/migrations/template.js\",\n\t\"./auth/migrations/template.js\": \"./src/apps/auth/migrations/template.js\",\n\t\"./auth/migrations/x01_auth_tokens_association_.migration.xjs\": \"./src/apps/auth/migrations/x01_auth_tokens_association_.migration.xjs\",\n\t\"./auth/migrations/x02_auth_tokens_index_.migration.xjs\": \"./src/apps/auth/migrations/x02_auth_tokens_index_.migration.xjs\",\n\t\"./auth/models\": \"./src/apps/auth/models/index.js\",\n\t\"./auth/models/\": \"./src/apps/auth/models/index.js\",\n\t\"./auth/models/Token\": \"./src/apps/auth/models/Token.js\",\n\t\"./auth/models/Token.js\": \"./src/apps/auth/models/Token.js\",\n\t\"./auth/models/User\": \"./src/apps/auth/models/User.js\",\n\t\"./auth/models/User.js\": \"./src/apps/auth/models/User.js\",\n\t\"./auth/models/index\": \"./src/apps/auth/models/index.js\",\n\t\"./auth/models/index.js\": \"./src/apps/auth/models/index.js\",\n\t\"./auth/passport\": \"./src/apps/auth/passport.js\",\n\t\"./auth/passport.js\": \"./src/apps/auth/passport.js\",\n\t\"./auth/resolvers\": \"./src/apps/auth/resolvers/index.js\",\n\t\"./auth/resolvers/\": \"./src/apps/auth/resolvers/index.js\",\n\t\"./auth/resolvers/Token\": \"./src/apps/auth/resolvers/Token.js\",\n\t\"./auth/resolvers/Token.js\": \"./src/apps/auth/resolvers/Token.js\",\n\t\"./auth/resolvers/User\": \"./src/apps/auth/resolvers/User.js\",\n\t\"./auth/resolvers/User.js\": \"./src/apps/auth/resolvers/User.js\",\n\t\"./auth/resolvers/hello\": \"./src/apps/auth/resolvers/hello.js\",\n\t\"./auth/resolvers/hello.js\": \"./src/apps/auth/resolvers/hello.js\",\n\t\"./auth/resolvers/index\": \"./src/apps/auth/resolvers/index.js\",\n\t\"./auth/resolvers/index.js\": \"./src/apps/auth/resolvers/index.js\",\n\t\"./auth/tests/Token.test\": \"./src/apps/auth/tests/Token.test.js\",\n\t\"./auth/tests/Token.test.js\": \"./src/apps/auth/tests/Token.test.js\",\n\t\"./auth/tests/User.test\": \"./src/apps/auth/tests/User.test.js\",\n\t\"./auth/tests/User.test.js\": \"./src/apps/auth/tests/User.test.js\",\n\t\"./auth/tests/generators\": \"./src/apps/auth/tests/generators/index.js\",\n\t\"./auth/tests/generators/\": \"./src/apps/auth/tests/generators/index.js\",\n\t\"./auth/tests/generators/Token\": \"./src/apps/auth/tests/generators/Token.js\",\n\t\"./auth/tests/generators/Token.js\": \"./src/apps/auth/tests/generators/Token.js\",\n\t\"./auth/tests/generators/User\": \"./src/apps/auth/tests/generators/User.js\",\n\t\"./auth/tests/generators/User.js\": \"./src/apps/auth/tests/generators/User.js\",\n\t\"./auth/tests/generators/index\": \"./src/apps/auth/tests/generators/index.js\",\n\t\"./auth/tests/generators/index.js\": \"./src/apps/auth/tests/generators/index.js\",\n\t\"./auth/types\": \"./src/apps/auth/types/index.js\",\n\t\"./auth/types/\": \"./src/apps/auth/types/index.js\",\n\t\"./auth/types/Token.graphql\": \"./src/apps/auth/types/Token.graphql\",\n\t\"./auth/types/User.graphql\": \"./src/apps/auth/types/User.graphql\",\n\t\"./auth/types/_stitch.graphql\": \"./src/apps/auth/types/_stitch.graphql\",\n\t\"./auth/types/index\": \"./src/apps/auth/types/index.js\",\n\t\"./auth/types/index.js\": \"./src/apps/auth/types/index.js\",\n\t\"./auth/utils\": \"./src/apps/auth/utils/index.js\",\n\t\"./auth/utils/\": \"./src/apps/auth/utils/index.js\",\n\t\"./auth/utils/getTokenFor\": \"./src/apps/auth/utils/getTokenFor.js\",\n\t\"./auth/utils/getTokenFor.js\": \"./src/apps/auth/utils/getTokenFor.js\",\n\t\"./auth/utils/index\": \"./src/apps/auth/utils/index.js\",\n\t\"./auth/utils/index.js\": \"./src/apps/auth/utils/index.js\",\n\t\"./auth/validation\": \"./src/apps/auth/validation/index.js\",\n\t\"./auth/validation/\": \"./src/apps/auth/validation/index.js\",\n\t\"./auth/validation/index\": \"./src/apps/auth/validation/index.js\",\n\t\"./auth/validation/index.js\": \"./src/apps/auth/validation/index.js\",\n\t\"./auth/validation/login\": \"./src/apps/auth/validation/login.js\",\n\t\"./auth/validation/login.js\": \"./src/apps/auth/validation/login.js\",\n\t\"./auth/validation/signup\": \"./src/apps/auth/validation/signup.js\",\n\t\"./auth/validation/signup.js\": \"./src/apps/auth/validation/signup.js\",\n\t\"./business\": \"./src/apps/business/index.js\",\n\t\"./business/\": \"./src/apps/business/index.js\",\n\t\"./business/controllers\": \"./src/apps/business/controllers/index.js\",\n\t\"./business/controllers/\": \"./src/apps/business/controllers/index.js\",\n\t\"./business/controllers/Shop\": \"./src/apps/business/controllers/Shop.js\",\n\t\"./business/controllers/Shop.js\": \"./src/apps/business/controllers/Shop.js\",\n\t\"./business/controllers/index\": \"./src/apps/business/controllers/index.js\",\n\t\"./business/controllers/index.js\": \"./src/apps/business/controllers/index.js\",\n\t\"./business/dependencies\": \"./src/apps/business/dependencies.json\",\n\t\"./business/dependencies.json\": \"./src/apps/business/dependencies.json\",\n\t\"./business/index\": \"./src/apps/business/index.js\",\n\t\"./business/index.js\": \"./src/apps/business/index.js\",\n\t\"./business/migrations/00_business_shops_initial.migration\": \"./src/apps/business/migrations/00_business_shops_initial.migration.js\",\n\t\"./business/migrations/00_business_shops_initial.migration.js\": \"./src/apps/business/migrations/00_business_shops_initial.migration.js\",\n\t\"./business/migrations/01_business_shops_association_auth_users.migration\": \"./src/apps/business/migrations/01_business_shops_association_auth_users.migration.js\",\n\t\"./business/migrations/01_business_shops_association_auth_users.migration.js\": \"./src/apps/business/migrations/01_business_shops_association_auth_users.migration.js\",\n\t\"./business/migrations/01_business_shops_association_website_sites.migration\": \"./src/apps/business/migrations/01_business_shops_association_website_sites.migration.js\",\n\t\"./business/migrations/01_business_shops_association_website_sites.migration.js\": \"./src/apps/business/migrations/01_business_shops_association_website_sites.migration.js\",\n\t\"./business/migrations/02_business_shops_index_name_city.migration\": \"./src/apps/business/migrations/02_business_shops_index_name_city.migration.js\",\n\t\"./business/migrations/02_business_shops_index_name_city.migration.js\": \"./src/apps/business/migrations/02_business_shops_index_name_city.migration.js\",\n\t\"./business/models\": \"./src/apps/business/models/index.js\",\n\t\"./business/models/\": \"./src/apps/business/models/index.js\",\n\t\"./business/models/Shop\": \"./src/apps/business/models/Shop.js\",\n\t\"./business/models/Shop.js\": \"./src/apps/business/models/Shop.js\",\n\t\"./business/models/index\": \"./src/apps/business/models/index.js\",\n\t\"./business/models/index.js\": \"./src/apps/business/models/index.js\",\n\t\"./business/resolvers\": \"./src/apps/business/resolvers/index.js\",\n\t\"./business/resolvers/\": \"./src/apps/business/resolvers/index.js\",\n\t\"./business/resolvers/Shop\": \"./src/apps/business/resolvers/Shop.js\",\n\t\"./business/resolvers/Shop.js\": \"./src/apps/business/resolvers/Shop.js\",\n\t\"./business/resolvers/index\": \"./src/apps/business/resolvers/index.js\",\n\t\"./business/resolvers/index.js\": \"./src/apps/business/resolvers/index.js\",\n\t\"./business/tests/Shop.test\": \"./src/apps/business/tests/Shop.test.js\",\n\t\"./business/tests/Shop.test.js\": \"./src/apps/business/tests/Shop.test.js\",\n\t\"./business/tests/generators\": \"./src/apps/business/tests/generators/index.js\",\n\t\"./business/tests/generators/\": \"./src/apps/business/tests/generators/index.js\",\n\t\"./business/tests/generators/Shop\": \"./src/apps/business/tests/generators/Shop.js\",\n\t\"./business/tests/generators/Shop.js\": \"./src/apps/business/tests/generators/Shop.js\",\n\t\"./business/tests/generators/index\": \"./src/apps/business/tests/generators/index.js\",\n\t\"./business/tests/generators/index.js\": \"./src/apps/business/tests/generators/index.js\",\n\t\"./business/types\": \"./src/apps/business/types/index.js\",\n\t\"./business/types/\": \"./src/apps/business/types/index.js\",\n\t\"./business/types/Shop.graphql\": \"./src/apps/business/types/Shop.graphql\",\n\t\"./business/types/_stitch.graphql\": \"./src/apps/business/types/_stitch.graphql\",\n\t\"./business/types/index\": \"./src/apps/business/types/index.js\",\n\t\"./business/types/index.js\": \"./src/apps/business/types/index.js\",\n\t\"./car\": \"./src/apps/car/index.js\",\n\t\"./car/\": \"./src/apps/car/index.js\",\n\t\"./car/controllers\": \"./src/apps/car/controllers/index.js\",\n\t\"./car/controllers/\": \"./src/apps/car/controllers/index.js\",\n\t\"./car/controllers/Make\": \"./src/apps/car/controllers/Make.js\",\n\t\"./car/controllers/Make.js\": \"./src/apps/car/controllers/Make.js\",\n\t\"./car/controllers/Service\": \"./src/apps/car/controllers/Service.js\",\n\t\"./car/controllers/Service.js\": \"./src/apps/car/controllers/Service.js\",\n\t\"./car/controllers/index\": \"./src/apps/car/controllers/index.js\",\n\t\"./car/controllers/index.js\": \"./src/apps/car/controllers/index.js\",\n\t\"./car/dependencies\": \"./src/apps/car/dependencies.json\",\n\t\"./car/dependencies.json\": \"./src/apps/car/dependencies.json\",\n\t\"./car/index\": \"./src/apps/car/index.js\",\n\t\"./car/index.js\": \"./src/apps/car/index.js\",\n\t\"./car/migrations/00_car_makes_initial.migration\": \"./src/apps/car/migrations/00_car_makes_initial.migration.js\",\n\t\"./car/migrations/00_car_makes_initial.migration.js\": \"./src/apps/car/migrations/00_car_makes_initial.migration.js\",\n\t\"./car/migrations/00_car_services_initial.migration\": \"./src/apps/car/migrations/00_car_services_initial.migration.js\",\n\t\"./car/migrations/00_car_services_initial.migration.js\": \"./src/apps/car/migrations/00_car_services_initial.migration.js\",\n\t\"./car/models\": \"./src/apps/car/models/index.js\",\n\t\"./car/models/\": \"./src/apps/car/models/index.js\",\n\t\"./car/models/Make\": \"./src/apps/car/models/Make.js\",\n\t\"./car/models/Make.js\": \"./src/apps/car/models/Make.js\",\n\t\"./car/models/Make.old\": \"./src/apps/car/models/Make.old.js\",\n\t\"./car/models/Make.old.js\": \"./src/apps/car/models/Make.old.js\",\n\t\"./car/models/Service\": \"./src/apps/car/models/Service.js\",\n\t\"./car/models/Service.js\": \"./src/apps/car/models/Service.js\",\n\t\"./car/models/Service.old\": \"./src/apps/car/models/Service.old.js\",\n\t\"./car/models/Service.old.js\": \"./src/apps/car/models/Service.old.js\",\n\t\"./car/models/index\": \"./src/apps/car/models/index.js\",\n\t\"./car/models/index.js\": \"./src/apps/car/models/index.js\",\n\t\"./car/resolvers\": \"./src/apps/car/resolvers/index.js\",\n\t\"./car/resolvers/\": \"./src/apps/car/resolvers/index.js\",\n\t\"./car/resolvers/Make\": \"./src/apps/car/resolvers/Make.js\",\n\t\"./car/resolvers/Make.js\": \"./src/apps/car/resolvers/Make.js\",\n\t\"./car/resolvers/Service\": \"./src/apps/car/resolvers/Service.js\",\n\t\"./car/resolvers/Service.js\": \"./src/apps/car/resolvers/Service.js\",\n\t\"./car/resolvers/index\": \"./src/apps/car/resolvers/index.js\",\n\t\"./car/resolvers/index.js\": \"./src/apps/car/resolvers/index.js\",\n\t\"./car/tests/Make.test\": \"./src/apps/car/tests/Make.test.js\",\n\t\"./car/tests/Make.test.js\": \"./src/apps/car/tests/Make.test.js\",\n\t\"./car/tests/Service.test\": \"./src/apps/car/tests/Service.test.js\",\n\t\"./car/tests/Service.test.js\": \"./src/apps/car/tests/Service.test.js\",\n\t\"./car/tests/generators\": \"./src/apps/car/tests/generators/index.js\",\n\t\"./car/tests/generators/\": \"./src/apps/car/tests/generators/index.js\",\n\t\"./car/tests/generators/Make\": \"./src/apps/car/tests/generators/Make.js\",\n\t\"./car/tests/generators/Make.js\": \"./src/apps/car/tests/generators/Make.js\",\n\t\"./car/tests/generators/Service\": \"./src/apps/car/tests/generators/Service.js\",\n\t\"./car/tests/generators/Service.js\": \"./src/apps/car/tests/generators/Service.js\",\n\t\"./car/tests/generators/index\": \"./src/apps/car/tests/generators/index.js\",\n\t\"./car/tests/generators/index.js\": \"./src/apps/car/tests/generators/index.js\",\n\t\"./car/types\": \"./src/apps/car/types/index.js\",\n\t\"./car/types/\": \"./src/apps/car/types/index.js\",\n\t\"./car/types/Make.graphql\": \"./src/apps/car/types/Make.graphql\",\n\t\"./car/types/Service.graphql\": \"./src/apps/car/types/Service.graphql\",\n\t\"./car/types/_stitch.graphql\": \"./src/apps/car/types/_stitch.graphql\",\n\t\"./car/types/index\": \"./src/apps/car/types/index.js\",\n\t\"./car/types/index.js\": \"./src/apps/car/types/index.js\",\n\t\"./dictionary\": \"./src/apps/dictionary/index.js\",\n\t\"./dictionary/\": \"./src/apps/dictionary/index.js\",\n\t\"./dictionary/controllers\": \"./src/apps/dictionary/controllers/index.js\",\n\t\"./dictionary/controllers/\": \"./src/apps/dictionary/controllers/index.js\",\n\t\"./dictionary/controllers/Author\": \"./src/apps/dictionary/controllers/Author.js\",\n\t\"./dictionary/controllers/Author.js\": \"./src/apps/dictionary/controllers/Author.js\",\n\t\"./dictionary/controllers/Expression\": \"./src/apps/dictionary/controllers/Expression.js\",\n\t\"./dictionary/controllers/Expression.js\": \"./src/apps/dictionary/controllers/Expression.js\",\n\t\"./dictionary/controllers/Tag\": \"./src/apps/dictionary/controllers/Tag.js\",\n\t\"./dictionary/controllers/Tag.js\": \"./src/apps/dictionary/controllers/Tag.js\",\n\t\"./dictionary/controllers/index\": \"./src/apps/dictionary/controllers/index.js\",\n\t\"./dictionary/controllers/index.js\": \"./src/apps/dictionary/controllers/index.js\",\n\t\"./dictionary/dependencies\": \"./src/apps/dictionary/dependencies.json\",\n\t\"./dictionary/dependencies.json\": \"./src/apps/dictionary/dependencies.json\",\n\t\"./dictionary/index\": \"./src/apps/dictionary/index.js\",\n\t\"./dictionary/index.js\": \"./src/apps/dictionary/index.js\",\n\t\"./dictionary/migrations/00_dictionary_authors_initial.migration\": \"./src/apps/dictionary/migrations/00_dictionary_authors_initial.migration.js\",\n\t\"./dictionary/migrations/00_dictionary_authors_initial.migration.js\": \"./src/apps/dictionary/migrations/00_dictionary_authors_initial.migration.js\",\n\t\"./dictionary/migrations/00_dictionary_expressions_initial.migration\": \"./src/apps/dictionary/migrations/00_dictionary_expressions_initial.migration.js\",\n\t\"./dictionary/migrations/00_dictionary_expressions_initial.migration.js\": \"./src/apps/dictionary/migrations/00_dictionary_expressions_initial.migration.js\",\n\t\"./dictionary/migrations/00_dictionary_tags_initial.migration\": \"./src/apps/dictionary/migrations/00_dictionary_tags_initial.migration.js\",\n\t\"./dictionary/migrations/00_dictionary_tags_initial.migration.js\": \"./src/apps/dictionary/migrations/00_dictionary_tags_initial.migration.js\",\n\t\"./dictionary/migrations/01_dictionary_expressions_association_authors.migration\": \"./src/apps/dictionary/migrations/01_dictionary_expressions_association_authors.migration.js\",\n\t\"./dictionary/migrations/01_dictionary_expressions_association_authors.migration.js\": \"./src/apps/dictionary/migrations/01_dictionary_expressions_association_authors.migration.js\",\n\t\"./dictionary/migrations/01_dictionary_nm_expressions_tags.migration\": \"./src/apps/dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js\",\n\t\"./dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js\": \"./src/apps/dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js\",\n\t\"./dictionary/migrations/x02_dictionary_tags_index_.migration.xjs\": \"./src/apps/dictionary/migrations/x02_dictionary_tags_index_.migration.xjs\",\n\t\"./dictionary/models\": \"./src/apps/dictionary/models/index.js\",\n\t\"./dictionary/models/\": \"./src/apps/dictionary/models/index.js\",\n\t\"./dictionary/models/Author\": \"./src/apps/dictionary/models/Author.js\",\n\t\"./dictionary/models/Author.js\": \"./src/apps/dictionary/models/Author.js\",\n\t\"./dictionary/models/Expression\": \"./src/apps/dictionary/models/Expression.js\",\n\t\"./dictionary/models/Expression.js\": \"./src/apps/dictionary/models/Expression.js\",\n\t\"./dictionary/models/Tag\": \"./src/apps/dictionary/models/Tag.js\",\n\t\"./dictionary/models/Tag.js\": \"./src/apps/dictionary/models/Tag.js\",\n\t\"./dictionary/models/index\": \"./src/apps/dictionary/models/index.js\",\n\t\"./dictionary/models/index.js\": \"./src/apps/dictionary/models/index.js\",\n\t\"./dictionary/resolvers\": \"./src/apps/dictionary/resolvers/index.js\",\n\t\"./dictionary/resolvers/\": \"./src/apps/dictionary/resolvers/index.js\",\n\t\"./dictionary/resolvers/Author\": \"./src/apps/dictionary/resolvers/Author.js\",\n\t\"./dictionary/resolvers/Author.js\": \"./src/apps/dictionary/resolvers/Author.js\",\n\t\"./dictionary/resolvers/Expression\": \"./src/apps/dictionary/resolvers/Expression.js\",\n\t\"./dictionary/resolvers/Expression.js\": \"./src/apps/dictionary/resolvers/Expression.js\",\n\t\"./dictionary/resolvers/Tag\": \"./src/apps/dictionary/resolvers/Tag.js\",\n\t\"./dictionary/resolvers/Tag.js\": \"./src/apps/dictionary/resolvers/Tag.js\",\n\t\"./dictionary/resolvers/index\": \"./src/apps/dictionary/resolvers/index.js\",\n\t\"./dictionary/resolvers/index.js\": \"./src/apps/dictionary/resolvers/index.js\",\n\t\"./dictionary/tests/Author.test\": \"./src/apps/dictionary/tests/Author.test.js\",\n\t\"./dictionary/tests/Author.test.js\": \"./src/apps/dictionary/tests/Author.test.js\",\n\t\"./dictionary/tests/Expression.test\": \"./src/apps/dictionary/tests/Expression.test.js\",\n\t\"./dictionary/tests/Expression.test.js\": \"./src/apps/dictionary/tests/Expression.test.js\",\n\t\"./dictionary/tests/Tag.test\": \"./src/apps/dictionary/tests/Tag.test.js\",\n\t\"./dictionary/tests/Tag.test.js\": \"./src/apps/dictionary/tests/Tag.test.js\",\n\t\"./dictionary/tests/generators\": \"./src/apps/dictionary/tests/generators/index.js\",\n\t\"./dictionary/tests/generators/\": \"./src/apps/dictionary/tests/generators/index.js\",\n\t\"./dictionary/tests/generators/Author\": \"./src/apps/dictionary/tests/generators/Author.js\",\n\t\"./dictionary/tests/generators/Author.js\": \"./src/apps/dictionary/tests/generators/Author.js\",\n\t\"./dictionary/tests/generators/Expression\": \"./src/apps/dictionary/tests/generators/Expression.js\",\n\t\"./dictionary/tests/generators/Expression.js\": \"./src/apps/dictionary/tests/generators/Expression.js\",\n\t\"./dictionary/tests/generators/Tag\": \"./src/apps/dictionary/tests/generators/Tag.js\",\n\t\"./dictionary/tests/generators/Tag.js\": \"./src/apps/dictionary/tests/generators/Tag.js\",\n\t\"./dictionary/tests/generators/index\": \"./src/apps/dictionary/tests/generators/index.js\",\n\t\"./dictionary/tests/generators/index.js\": \"./src/apps/dictionary/tests/generators/index.js\",\n\t\"./dictionary/types\": \"./src/apps/dictionary/types/index.js\",\n\t\"./dictionary/types/\": \"./src/apps/dictionary/types/index.js\",\n\t\"./dictionary/types/Author.graphql\": \"./src/apps/dictionary/types/Author.graphql\",\n\t\"./dictionary/types/Expression.graphql\": \"./src/apps/dictionary/types/Expression.graphql\",\n\t\"./dictionary/types/Tag.graphql\": \"./src/apps/dictionary/types/Tag.graphql\",\n\t\"./dictionary/types/_stitch.graphql\": \"./src/apps/dictionary/types/_stitch.graphql\",\n\t\"./dictionary/types/index\": \"./src/apps/dictionary/types/index.js\",\n\t\"./dictionary/types/index.js\": \"./src/apps/dictionary/types/index.js\",\n\t\"./oauth2\": \"./src/apps/oauth2/index.js\",\n\t\"./oauth2/\": \"./src/apps/oauth2/index.js\",\n\t\"./oauth2/controllers\": \"./src/apps/oauth2/controllers/index.js\",\n\t\"./oauth2/controllers/\": \"./src/apps/oauth2/controllers/index.js\",\n\t\"./oauth2/controllers/Setter\": \"./src/apps/oauth2/controllers/Setter.js\",\n\t\"./oauth2/controllers/Setter.js\": \"./src/apps/oauth2/controllers/Setter.js\",\n\t\"./oauth2/controllers/index\": \"./src/apps/oauth2/controllers/index.js\",\n\t\"./oauth2/controllers/index.js\": \"./src/apps/oauth2/controllers/index.js\",\n\t\"./oauth2/dependencies\": \"./src/apps/oauth2/dependencies.json\",\n\t\"./oauth2/dependencies.json\": \"./src/apps/oauth2/dependencies.json\",\n\t\"./oauth2/index\": \"./src/apps/oauth2/index.js\",\n\t\"./oauth2/index.js\": \"./src/apps/oauth2/index.js\",\n\t\"./oauth2/migrations/00_oauth2_profiles_initial.migration\": \"./src/apps/oauth2/migrations/00_oauth2_profiles_initial.migration.js\",\n\t\"./oauth2/migrations/00_oauth2_profiles_initial.migration.js\": \"./src/apps/oauth2/migrations/00_oauth2_profiles_initial.migration.js\",\n\t\"./oauth2/migrations/00_oauth2_setters_initial.migration\": \"./src/apps/oauth2/migrations/00_oauth2_setters_initial.migration.js\",\n\t\"./oauth2/migrations/00_oauth2_setters_initial.migration.js\": \"./src/apps/oauth2/migrations/00_oauth2_setters_initial.migration.js\",\n\t\"./oauth2/migrations/01_oauth2_profiles_association_users.migration\": \"./src/apps/oauth2/migrations/01_oauth2_profiles_association_users.migration.js\",\n\t\"./oauth2/migrations/01_oauth2_profiles_association_users.migration.js\": \"./src/apps/oauth2/migrations/01_oauth2_profiles_association_users.migration.js\",\n\t\"./oauth2/migrations/01_oauth2_setters_association_users.migration\": \"./src/apps/oauth2/migrations/01_oauth2_setters_association_users.migration.js\",\n\t\"./oauth2/migrations/01_oauth2_setters_association_users.migration.js\": \"./src/apps/oauth2/migrations/01_oauth2_setters_association_users.migration.js\",\n\t\"./oauth2/models\": \"./src/apps/oauth2/models/index.js\",\n\t\"./oauth2/models/\": \"./src/apps/oauth2/models/index.js\",\n\t\"./oauth2/models/Profile\": \"./src/apps/oauth2/models/Profile.js\",\n\t\"./oauth2/models/Profile.js\": \"./src/apps/oauth2/models/Profile.js\",\n\t\"./oauth2/models/Setter\": \"./src/apps/oauth2/models/Setter.js\",\n\t\"./oauth2/models/Setter.js\": \"./src/apps/oauth2/models/Setter.js\",\n\t\"./oauth2/models/index\": \"./src/apps/oauth2/models/index.js\",\n\t\"./oauth2/models/index.js\": \"./src/apps/oauth2/models/index.js\",\n\t\"./oauth2/resolvers\": \"./src/apps/oauth2/resolvers/index.js\",\n\t\"./oauth2/resolvers/\": \"./src/apps/oauth2/resolvers/index.js\",\n\t\"./oauth2/resolvers/Setter\": \"./src/apps/oauth2/resolvers/Setter.js\",\n\t\"./oauth2/resolvers/Setter.js\": \"./src/apps/oauth2/resolvers/Setter.js\",\n\t\"./oauth2/resolvers/index\": \"./src/apps/oauth2/resolvers/index.js\",\n\t\"./oauth2/resolvers/index.js\": \"./src/apps/oauth2/resolvers/index.js\",\n\t\"./oauth2/resolvers/main\": \"./src/apps/oauth2/resolvers/main.js\",\n\t\"./oauth2/resolvers/main.js\": \"./src/apps/oauth2/resolvers/main.js\",\n\t\"./oauth2/router\": \"./src/apps/oauth2/router.js\",\n\t\"./oauth2/router.js\": \"./src/apps/oauth2/router.js\",\n\t\"./oauth2/strategies\": \"./src/apps/oauth2/strategies/index.js\",\n\t\"./oauth2/strategies/\": \"./src/apps/oauth2/strategies/index.js\",\n\t\"./oauth2/strategies/AccessManager\": \"./src/apps/oauth2/strategies/AccessManager.js\",\n\t\"./oauth2/strategies/AccessManager.js\": \"./src/apps/oauth2/strategies/AccessManager.js\",\n\t\"./oauth2/strategies/Google\": \"./src/apps/oauth2/strategies/Google/index.js\",\n\t\"./oauth2/strategies/Google/\": \"./src/apps/oauth2/strategies/Google/index.js\",\n\t\"./oauth2/strategies/Google/AccessManager\": \"./src/apps/oauth2/strategies/Google/AccessManager.js\",\n\t\"./oauth2/strategies/Google/AccessManager.js\": \"./src/apps/oauth2/strategies/Google/AccessManager.js\",\n\t\"./oauth2/strategies/Google/Config\": \"./src/apps/oauth2/strategies/Google/Config.js\",\n\t\"./oauth2/strategies/Google/Config.js\": \"./src/apps/oauth2/strategies/Google/Config.js\",\n\t\"./oauth2/strategies/Google/index\": \"./src/apps/oauth2/strategies/Google/index.js\",\n\t\"./oauth2/strategies/Google/index.js\": \"./src/apps/oauth2/strategies/Google/index.js\",\n\t\"./oauth2/strategies/index\": \"./src/apps/oauth2/strategies/index.js\",\n\t\"./oauth2/strategies/index.js\": \"./src/apps/oauth2/strategies/index.js\",\n\t\"./oauth2/tests/Setter.test\": \"./src/apps/oauth2/tests/Setter.test.js\",\n\t\"./oauth2/tests/Setter.test.js\": \"./src/apps/oauth2/tests/Setter.test.js\",\n\t\"./oauth2/tests/generators\": \"./src/apps/oauth2/tests/generators/index.js\",\n\t\"./oauth2/tests/generators/\": \"./src/apps/oauth2/tests/generators/index.js\",\n\t\"./oauth2/tests/generators/Setter\": \"./src/apps/oauth2/tests/generators/Setter.js\",\n\t\"./oauth2/tests/generators/Setter.js\": \"./src/apps/oauth2/tests/generators/Setter.js\",\n\t\"./oauth2/tests/generators/index\": \"./src/apps/oauth2/tests/generators/index.js\",\n\t\"./oauth2/tests/generators/index.js\": \"./src/apps/oauth2/tests/generators/index.js\",\n\t\"./oauth2/types\": \"./src/apps/oauth2/types/index.js\",\n\t\"./oauth2/types/\": \"./src/apps/oauth2/types/index.js\",\n\t\"./oauth2/types/Setter.graphql\": \"./src/apps/oauth2/types/Setter.graphql\",\n\t\"./oauth2/types/_stitch.graphql\": \"./src/apps/oauth2/types/_stitch.graphql\",\n\t\"./oauth2/types/index\": \"./src/apps/oauth2/types/index.js\",\n\t\"./oauth2/types/index.js\": \"./src/apps/oauth2/types/index.js\",\n\t\"./oauth2/types/main.graphql\": \"./src/apps/oauth2/types/main.graphql\",\n\t\"./oauth2/utils\": \"./src/apps/oauth2/utils/index.js\",\n\t\"./oauth2/utils/\": \"./src/apps/oauth2/utils/index.js\",\n\t\"./oauth2/utils/GoogleAPI\": \"./src/apps/oauth2/utils/GoogleAPI.js\",\n\t\"./oauth2/utils/GoogleAPI.js\": \"./src/apps/oauth2/utils/GoogleAPI.js\",\n\t\"./oauth2/utils/index\": \"./src/apps/oauth2/utils/index.js\",\n\t\"./oauth2/utils/index.js\": \"./src/apps/oauth2/utils/index.js\",\n\t\"./tstr/resolvers\": \"./src/apps/tstr/resolvers/index.js\",\n\t\"./tstr/resolvers/\": \"./src/apps/tstr/resolvers/index.js\",\n\t\"./tstr/resolvers/Hello\": \"./src/apps/tstr/resolvers/Hello.js\",\n\t\"./tstr/resolvers/Hello.js\": \"./src/apps/tstr/resolvers/Hello.js\",\n\t\"./tstr/resolvers/index\": \"./src/apps/tstr/resolvers/index.js\",\n\t\"./tstr/resolvers/index.js\": \"./src/apps/tstr/resolvers/index.js\",\n\t\"./tstr/types\": \"./src/apps/tstr/types/index.js\",\n\t\"./tstr/types/\": \"./src/apps/tstr/types/index.js\",\n\t\"./tstr/types/Hello.graphql\": \"./src/apps/tstr/types/Hello.graphql\",\n\t\"./tstr/types/_stitch.graphql\": \"./src/apps/tstr/types/_stitch.graphql\",\n\t\"./tstr/types/index\": \"./src/apps/tstr/types/index.js\",\n\t\"./tstr/types/index.js\": \"./src/apps/tstr/types/index.js\",\n\t\"./website\": \"./src/apps/website/index.js\",\n\t\"./website/\": \"./src/apps/website/index.js\",\n\t\"./website/config\": \"./src/apps/website/config.js\",\n\t\"./website/config.js\": \"./src/apps/website/config.js\",\n\t\"./website/controllers\": \"./src/apps/website/controllers/index.js\",\n\t\"./website/controllers/\": \"./src/apps/website/controllers/index.js\",\n\t\"./website/controllers/Domain\": \"./src/apps/website/controllers/Domain.js\",\n\t\"./website/controllers/Domain.js\": \"./src/apps/website/controllers/Domain.js\",\n\t\"./website/controllers/Page\": \"./src/apps/website/controllers/Page.js\",\n\t\"./website/controllers/Page.js\": \"./src/apps/website/controllers/Page.js\",\n\t\"./website/controllers/Site\": \"./src/apps/website/controllers/Site.js\",\n\t\"./website/controllers/Site.js\": \"./src/apps/website/controllers/Site.js\",\n\t\"./website/controllers/index\": \"./src/apps/website/controllers/index.js\",\n\t\"./website/controllers/index.js\": \"./src/apps/website/controllers/index.js\",\n\t\"./website/dependencies\": \"./src/apps/website/dependencies.json\",\n\t\"./website/dependencies.json\": \"./src/apps/website/dependencies.json\",\n\t\"./website/index\": \"./src/apps/website/index.js\",\n\t\"./website/index.js\": \"./src/apps/website/index.js\",\n\t\"./website/migrations/00_website_domains_initial.migration\": \"./src/apps/website/migrations/00_website_domains_initial.migration.js\",\n\t\"./website/migrations/00_website_domains_initial.migration.js\": \"./src/apps/website/migrations/00_website_domains_initial.migration.js\",\n\t\"./website/migrations/00_website_pages_initial.migration\": \"./src/apps/website/migrations/00_website_pages_initial.migration.js\",\n\t\"./website/migrations/00_website_pages_initial.migration.js\": \"./src/apps/website/migrations/00_website_pages_initial.migration.js\",\n\t\"./website/migrations/00_website_websites_initial.migration\": \"./src/apps/website/migrations/00_website_websites_initial.migration.js\",\n\t\"./website/migrations/00_website_websites_initial.migration.js\": \"./src/apps/website/migrations/00_website_websites_initial.migration.js\",\n\t\"./website/migrations/01_website_pages_association_websites.migration\": \"./src/apps/website/migrations/01_website_pages_association_websites.migration.js\",\n\t\"./website/migrations/01_website_pages_association_websites.migration.js\": \"./src/apps/website/migrations/01_website_pages_association_websites.migration.js\",\n\t\"./website/migrations/01_website_websites_association_domains.migration\": \"./src/apps/website/migrations/01_website_websites_association_domains.migration.js\",\n\t\"./website/migrations/01_website_websites_association_domains.migration.js\": \"./src/apps/website/migrations/01_website_websites_association_domains.migration.js\",\n\t\"./website/migrations/02_website_pages_index_slug_site.migration\": \"./src/apps/website/migrations/02_website_pages_index_slug_site.migration.js\",\n\t\"./website/migrations/02_website_pages_index_slug_site.migration.js\": \"./src/apps/website/migrations/02_website_pages_index_slug_site.migration.js\",\n\t\"./website/models\": \"./src/apps/website/models/index.js\",\n\t\"./website/models/\": \"./src/apps/website/models/index.js\",\n\t\"./website/models/Domain\": \"./src/apps/website/models/Domain.js\",\n\t\"./website/models/Domain.js\": \"./src/apps/website/models/Domain.js\",\n\t\"./website/models/Page\": \"./src/apps/website/models/Page.js\",\n\t\"./website/models/Page.js\": \"./src/apps/website/models/Page.js\",\n\t\"./website/models/Site\": \"./src/apps/website/models/Site.js\",\n\t\"./website/models/Site.js\": \"./src/apps/website/models/Site.js\",\n\t\"./website/models/index\": \"./src/apps/website/models/index.js\",\n\t\"./website/models/index.js\": \"./src/apps/website/models/index.js\",\n\t\"./website/resolvers\": \"./src/apps/website/resolvers/index.js\",\n\t\"./website/resolvers/\": \"./src/apps/website/resolvers/index.js\",\n\t\"./website/resolvers/Domain\": \"./src/apps/website/resolvers/Domain.js\",\n\t\"./website/resolvers/Domain.js\": \"./src/apps/website/resolvers/Domain.js\",\n\t\"./website/resolvers/Page\": \"./src/apps/website/resolvers/Page.js\",\n\t\"./website/resolvers/Page.js\": \"./src/apps/website/resolvers/Page.js\",\n\t\"./website/resolvers/Site\": \"./src/apps/website/resolvers/Site.js\",\n\t\"./website/resolvers/Site.js\": \"./src/apps/website/resolvers/Site.js\",\n\t\"./website/resolvers/index\": \"./src/apps/website/resolvers/index.js\",\n\t\"./website/resolvers/index.js\": \"./src/apps/website/resolvers/index.js\",\n\t\"./website/tests/Domain.test\": \"./src/apps/website/tests/Domain.test.js\",\n\t\"./website/tests/Domain.test.js\": \"./src/apps/website/tests/Domain.test.js\",\n\t\"./website/tests/Page.test\": \"./src/apps/website/tests/Page.test.js\",\n\t\"./website/tests/Page.test.js\": \"./src/apps/website/tests/Page.test.js\",\n\t\"./website/tests/Site.test\": \"./src/apps/website/tests/Site.test.js\",\n\t\"./website/tests/Site.test.js\": \"./src/apps/website/tests/Site.test.js\",\n\t\"./website/tests/generators\": \"./src/apps/website/tests/generators/index.js\",\n\t\"./website/tests/generators/\": \"./src/apps/website/tests/generators/index.js\",\n\t\"./website/tests/generators/Domain\": \"./src/apps/website/tests/generators/Domain.js\",\n\t\"./website/tests/generators/Domain.js\": \"./src/apps/website/tests/generators/Domain.js\",\n\t\"./website/tests/generators/Page\": \"./src/apps/website/tests/generators/Page.js\",\n\t\"./website/tests/generators/Page.js\": \"./src/apps/website/tests/generators/Page.js\",\n\t\"./website/tests/generators/Site\": \"./src/apps/website/tests/generators/Site.js\",\n\t\"./website/tests/generators/Site.js\": \"./src/apps/website/tests/generators/Site.js\",\n\t\"./website/tests/generators/index\": \"./src/apps/website/tests/generators/index.js\",\n\t\"./website/tests/generators/index.js\": \"./src/apps/website/tests/generators/index.js\",\n\t\"./website/tests/utils.VercelAPI.test\": \"./src/apps/website/tests/utils.VercelAPI.test.js\",\n\t\"./website/tests/utils.VercelAPI.test.js\": \"./src/apps/website/tests/utils.VercelAPI.test.js\",\n\t\"./website/types\": \"./src/apps/website/types/index.js\",\n\t\"./website/types/\": \"./src/apps/website/types/index.js\",\n\t\"./website/types/Domain.graphql\": \"./src/apps/website/types/Domain.graphql\",\n\t\"./website/types/Page.graphql\": \"./src/apps/website/types/Page.graphql\",\n\t\"./website/types/Site.graphql\": \"./src/apps/website/types/Site.graphql\",\n\t\"./website/types/_stitch.graphql\": \"./src/apps/website/types/_stitch.graphql\",\n\t\"./website/types/index\": \"./src/apps/website/types/index.js\",\n\t\"./website/types/index.js\": \"./src/apps/website/types/index.js\",\n\t\"./website/utils\": \"./src/apps/website/utils/index.js\",\n\t\"./website/utils/\": \"./src/apps/website/utils/index.js\",\n\t\"./website/utils/VercelAPI\": \"./src/apps/website/utils/VercelAPI.js\",\n\t\"./website/utils/VercelAPI.js\": \"./src/apps/website/utils/VercelAPI.js\",\n\t\"./website/utils/index\": \"./src/apps/website/utils/index.js\",\n\t\"./website/utils/index.js\": \"./src/apps/website/utils/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/apps sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/apps_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/apps sync recursive ^\\.\\/.*\\/models$":
/*!****************************************!*\
  !*** ./src/apps sync ^\.\/.*\/models$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./auth/models\": \"./src/apps/auth/models/index.js\",\n\t\"./business/models\": \"./src/apps/business/models/index.js\",\n\t\"./car/models\": \"./src/apps/car/models/index.js\",\n\t\"./dictionary/models\": \"./src/apps/dictionary/models/index.js\",\n\t\"./oauth2/models\": \"./src/apps/oauth2/models/index.js\",\n\t\"./website/models\": \"./src/apps/website/models/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/apps sync recursive ^\\\\.\\\\/.*\\\\/models$\";\n\n//# sourceURL=webpack:///./src/apps_sync_^\\.\\/.*\\/models$?");

/***/ }),

/***/ "./src/apps/auth/controllers/Token.js":
/*!********************************************!*\
  !*** ./src/apps/auth/controllers/Token.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Token;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/auth/controllers/Token.js?");

/***/ }),

/***/ "./src/apps/auth/controllers/User.js":
/*!*******************************************!*\
  !*** ./src/apps/auth/controllers/User.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ \"./src/apps/auth/validation/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n //import { getTokenFor } from '../utils'\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].User;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\n/*\nimport {\n  ConfigurationError,ad \n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  },\n  setSuperuser: async (root, {\n    id,\n    value\n  }, context) => {\n    const item = await Model.findByPk(id);\n    item.superuser = value;\n    await item.save();\n    return true;\n  },\n  setUserPassword: async (root, {\n    id,\n    value\n  }, context) => {\n    const item = await Model.findByPk(id);\n    await item.setPassword(value);\n    return true;\n  },\n  signup: async (root, args, context) => {\n    const {\n      errors,\n      isValid\n    } = await Object(_validation__WEBPACK_IMPORTED_MODULE_3__[\"validateSignupInput\"])(args);\n\n    if (!isValid) {\n      console.log(errors);\n      throw new _utils__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"]({\n        data: errors\n      });\n    }\n\n    const {\n      password,\n      ...creationArgs\n    } = args;\n    const item = await Model.create(creationArgs);\n    await item.setPassword(password);\n    return item.getAuthToken();\n  },\n  login: async (root, args, context) => {\n    const {\n      errors,\n      isValid\n    } = Object(_validation__WEBPACK_IMPORTED_MODULE_3__[\"validateLoginInput\"])(args);\n\n    if (!isValid) {\n      throw new _utils__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"]({\n        data: errors\n      });\n    }\n\n    const {\n      email: rawEmail,\n      password\n    } = args;\n    const email = rawEmail.toLowerCase();\n    const item = await Model.findOne({\n      where: {\n        email\n      }\n    });\n\n    if (item) {\n      if (await item.isPasswordValid(password)) {\n        //TODO add more login here, for instance if the account is valid\n        return await item.getAuthToken();\n      }\n\n      throw new _utils__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"]({\n        message: 'Incorrect credentials'\n      }); //Incorrect pwd\n      //return res.status(400).json(errors)\n    }\n\n    throw new _utils__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"]({\n      message: 'Incorrect credentials'\n    }); //User not found\n  },\n  updateMe: async (root, {\n    input\n  }, context) => {\n    const updated = await Model.update(input, {\n      where: {\n        id: context.user.id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  },\n  setMyPassword: async (root, {\n    oldPassword,\n    newPassword\n  }, context) => {\n    const item = await Model.findByPk(context.user.id);\n    const canChangePassword = item.passwordHash && (await item.isPasswordValid(oldPassword)) || !item.passwordHash;\n\n    if (canChangePassword) {\n      await item.setPassword(newPassword);\n      return true;\n    }\n\n    return false;\n  }\n  /*\n  me:async(root, args, context) => {\n    //console.log('me function called, r, a ,c', root, args, context)\n  }\n  */\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/auth/controllers/User.js?");

/***/ }),

/***/ "./src/apps/auth/controllers/index.js":
/*!********************************************!*\
  !*** ./src/apps/auth/controllers/index.js ***!
  \********************************************/
/*! exports provided: UserController, TokenController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./src/apps/auth/controllers/User.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UserController\", function() { return _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Token */ \"./src/apps/auth/controllers/Token.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TokenController\", function() { return _Token__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/controllers/index.js?");

/***/ }),

/***/ "./src/apps/auth/dependencies.json":
/*!*****************************************!*\
  !*** ./src/apps/auth/dependencies.json ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[]\");\n\n//# sourceURL=webpack:///./src/apps/auth/dependencies.json?");

/***/ }),

/***/ "./src/apps/auth/index.js":
/*!********************************!*\
  !*** ./src/apps/auth/index.js ***!
  \********************************/
/*! exports provided: dependencies, types, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/auth/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/auth/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/apps/auth/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/auth/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/index.js?");

/***/ }),

/***/ "./src/apps/auth/migrations/00_auth_tokens_initial.migration.js":
/*!**********************************************************************!*\
  !*** ./src/apps/auth/migrations/00_auth_tokens_initial.migration.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'auth_tokens'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    maxAge: {\n      type: Sequelize.DataTypes.INTEGER,\n      defaultValue: 3600\n    },\n    token: {\n      type: Sequelize.DataTypes.TEXT,\n      allowNull: false\n    },\n    tokenType: {\n      type: Sequelize.DataTypes.STRING\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/00_auth_tokens_initial.migration.js?");

/***/ }),

/***/ "./src/apps/auth/migrations/00_auth_users_initial.migration.js":
/*!*********************************************************************!*\
  !*** ./src/apps/auth/migrations/00_auth_users_initial.migration.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'users'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    email: {\n      type: Sequelize.DataTypes.STRING,\n      unique: true\n    },\n    emailVerified: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    firstName: {\n      type: Sequelize.DataTypes.STRING\n    },\n    lastName: {\n      type: Sequelize.DataTypes.STRING\n    },\n    username: {\n      type: Sequelize.DataTypes.STRING,\n      unique: true\n    },\n    handle: {\n      type: Sequelize.DataTypes.STRING,\n      unique: true\n    },\n    superuser: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    isActive: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    passwordHash: {\n      type: Sequelize.DataTypes.STRING\n    },\n    onboardingStatus: {\n      type: Sequelize.DataTypes.INTEGER,\n      allowNull: false\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/00_auth_users_initial.migration.js?");

/***/ }),

/***/ "./src/apps/auth/migrations/01_auth_tokens_association_users.migration.js":
/*!********************************************************************************!*\
  !*** ./src/apps/auth/migrations/01_auth_tokens_association_users.migration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'auth_tokens'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'userId';\nconst foreignKeyTableName = 'users';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignKeyTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'CASCADE'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/01_auth_tokens_association_users.migration.js?");

/***/ }),

/***/ "./src/apps/auth/migrations/template.js":
/*!**********************************************!*\
  !*** ./src/apps/auth/migrations/template.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  Sequelize\n} = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nasync function up(qi) {}\n\nasync function down(qi) {}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/template.js?");

/***/ }),

/***/ "./src/apps/auth/migrations/x01_auth_tokens_association_.migration.xjs":
/*!*****************************************************************************!*\
  !*** ./src/apps/auth/migrations/x01_auth_tokens_association_.migration.xjs ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.8 */\nconst tableName = '' //Should equal the one defined in models\nconst foreignKeyColumnName = ''\nconst foreignModelTableName = ''\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(\n    tableName,\n    foreignKeyColumnName,\n    {\n      type      :Sequelize.DataTypes.UUID,\n      references:{\n        model:foreignModelTableName,\n        key  :'id',\n      },\n      onUpdate:'CASCADE',\n      onDelete:'SET NULL'\n    }\n\n  )\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(\n    tableName,\n    foreignKeyColumnName\n  )\n}\n\nmodule.exports = { up, down }\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/x01_auth_tokens_association_.migration.xjs?");

/***/ }),

/***/ "./src/apps/auth/migrations/x02_auth_tokens_index_.migration.xjs":
/*!***********************************************************************!*\
  !*** ./src/apps/auth/migrations/x02_auth_tokens_index_.migration.xjs ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.8 */\nconst tableName = '' //Should equal the one defined in models\nconst indexName = tableName + ''\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addIndex(\n    tableName,\n    {\n      name  :indexName,\n      fields:['slug', 'siteId'],\n      unique:true,\n    }\n  )\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeIndex(\n    tableName,\n    indexName,\n  )\n}\n\nmodule.exports = { up, down }\n\n\n//# sourceURL=webpack:///./src/apps/auth/migrations/x02_auth_tokens_index_.migration.xjs?");

/***/ }),

/***/ "./src/apps/auth/models/Token.js":
/*!***************************************!*\
  !*** ./src/apps/auth/models/Token.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Token extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    async login() {\n      //console.log(this)\n      if (this.valid && this.useToLogin){\n        this.useToLogin = false,\n        await this.save()\n        return true\n      }\n      return false\n    }\n    */\n\n    /*\n    static classLevelMethod() {\n    }\n     */\n  }\n\n  Token.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    maxAge: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.INTEGER,\n      defaultValue: 3600\n    },\n    token: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT,\n      allowNull: false\n    },\n    tokenType: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      defaultValue: 'Bearer'\n    },\n    // For OAuth2 compliance\n    expires_in: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BIGINT, ['maxAge', 'createdAt']),\n      get: function () {\n        const remainingDurationMS = Number(this.get('createdAt')) + this.get('maxAge') * 1000 - Number(Date.now());\n        return Math.floor(Math.max(0, remainingDurationMS / 1000));\n      }\n    },\n    // For OAuth2 compliance\n    access_token: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT, ['token']),\n      get: function () {\n        return this.get('token');\n      }\n    },\n    // For OAuth2 compliance\n    token_type: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['tokenType']),\n      get: function () {\n        return this.get('tokenType');\n      }\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['token']),\n      get: function () {\n        return this.get('token').slice(0, 20) + '...';\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'Token',\n    tableName: 'auth_tokens',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt'\n  }); //Token.addHook('afterCreate', 'hookName', (e, options) => {})\n\n  Token.associate = models => {\n    Token.belongsTo(models.User, {\n      as: 'user',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      },\n      onDelete: 'CASCADE' //RESTRICT, CASCADE, SET DEFAULT\n      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT\n\n    });\n    models.User.hasMany(Token, {\n      as: 'tokens',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      },\n      onDelete: 'CASCADE' //RESTRICT, CASCADE, SET DEFAULT\n\n    });\n  };\n\n  return Token;\n});\n\n//# sourceURL=webpack:///./src/apps/auth/models/Token.js?");

/***/ }),

/***/ "./src/apps/auth/models/User.js":
/*!**************************************!*\
  !*** ./src/apps/auth/models/User.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/apps/auth/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class User extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n    instanceLevelMethod() {\n    return this.first_name\n    }\n    */\n    canLogIn() {\n      return this.get('isActive');\n    }\n\n    async setPassword(password) {\n      this.passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, 8);\n      await this.save();\n      return true;\n    }\n\n    async isPasswordValid(password) {\n      return await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, this.passwordHash);\n    }\n\n    async getAuthToken() {\n      return await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getTokenFor\"])(this);\n    }\n\n  }\n\n  User.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    email: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      unique: true,\n      validate: {\n        isEmail: true\n      }\n    },\n    emailVerified: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    firstName: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    lastName: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    username: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      unique: true\n    },\n    handle: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      unique: true\n    },\n    superuser: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    isActive: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    passwordHash: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    onboardingStatus: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.INTEGER,\n      defaultValue: 0,\n      allowNull: false\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['email']),\n      get: function () {\n        return this.get('email');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'User',\n    tableName: 'users',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  });\n\n  User.associate = models => {//User.hasMany(models.OAuth2)\n  };\n\n  User.addHook('beforeValidate', 'lowercaseEmail', (item, options) => {\n    if (item.email) {\n      item.email = item.email.toLowerCase();\n    }\n  }); //User.addHook('afterCreate', 'hookName', (e, options) => {})\n\n  return User;\n});\n\n//# sourceURL=webpack:///./src/apps/auth/models/User.js?");

/***/ }),

/***/ "./src/apps/auth/models/index.js":
/*!***************************************!*\
  !*** ./src/apps/auth/models/index.js ***!
  \***************************************/
/*! exports provided: User, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./src/apps/auth/models/User.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Token */ \"./src/apps/auth/models/Token.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Token\", function() { return _Token__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/models/index.js?");

/***/ }),

/***/ "./src/apps/auth/passport.js":
/*!***********************************!*\
  !*** ./src/apps/auth/passport.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./src/models.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable no-console */\n\n\nconst User = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].User;\n\nconst JWTStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\n\nconst ExtractJWT = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\n\nconst opts = {}; //const format = process.env.JWT_SECRET ? 'HS512' : 'RS256'\n//opts.secretOrKey = (format === 'HS512') ? process.env.JWT_SECRET : fs.readFileSync('./keys/jwt_public.pem', 'utf8')\n\nopts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();\nopts.secretOrKey = process.env.JWT_SECRET;\nopts.issuer = '';\nopts.audience = '';\nopts.authScheme = 'Bearer';\nopts.algorithms = ['HS512'];\nconst JWTS = new JWTStrategy(opts, (jwt_payload, done) => {\n  if (process.env.DEBUG === 'true') console.log('TOKEN INFORMATION', jwt_payload);\n  User.findByPk(jwt_payload.id, {\n    include: {\n      all: true\n    }\n  }).then(user => {\n    if (user) {\n      return done(null, user);\n    }\n\n    return done(null, false);\n  }).catch(err => console.error(err));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (JWTS);\n\n//# sourceURL=webpack:///./src/apps/auth/passport.js?");

/***/ }),

/***/ "./src/apps/auth/resolvers/Token.js":
/*!******************************************!*\
  !*** ./src/apps/auth/resolvers/Token.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/auth/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addToken(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TokenController\"].add(r, a), c.user);\n    },\n\n    async deleteToken(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TokenController\"].del(r, a), c.user);\n    },\n\n    async updateToken(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TokenController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allTokens(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TokenController\"].all(r, a), c.user); //return su(TokenController.paginated(r, a), c.user)\n    },\n\n    getToken(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TokenController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/auth/resolvers/Token.js?");

/***/ }),

/***/ "./src/apps/auth/resolvers/User.js":
/*!*****************************************!*\
  !*** ./src/apps/auth/resolvers/User.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/auth/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n //import { AuthenticationError } from 'apollo-server'\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    addUser(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].add(r, a.input), c.user);\n    },\n\n    async deleteUser(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].del(r, a.id), c.user);\n    },\n\n    async updateUser(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].update(r, a), c.user);\n    },\n\n    async setUserPassword(r, a, c) {\n      //TODO add further protection\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].setUserPassword(r, a, c), c.user);\n    },\n\n    async setSuperuser(r, a, c) {\n      //TODO add further protection\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].setSuperuser(r, a, c), c.user);\n    },\n\n    async setMyPassword(r, a, c) {\n      //TODO Should work for any user\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].setMyPassword(r, a, c), c.user);\n    },\n\n    async updateMe(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].updateMe(r, a, c), c.user);\n    },\n\n    async login(root, args) {\n      return _controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].login(root, args.input);\n    },\n\n    async signup(root, args, context) {\n      return process.ENV.SIGNUP === 'true' ? _controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].signup(root, args.input, context) : {\n        token: 'none',\n        maxAge: 'none'\n      };\n    }\n\n  },\n  Query: {\n    allUsers(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"UserController\"].all(r, a, c), c.user);\n    },\n\n    getUser(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(MainController.get(r, a, c), c.user);\n    },\n\n    me(root, args, context) {\n      //console.log('👽 in the resolver', context)\n      return context.user;\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/auth/resolvers/User.js?");

/***/ }),

/***/ "./src/apps/auth/resolvers/hello.js":
/*!******************************************!*\
  !*** ./src/apps/auth/resolvers/hello.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst helloResolver = {\n  Query: {\n    hello: () => {\n      return 'Test from meccamico!';\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ([helloResolver]);\n\n//# sourceURL=webpack:///./src/apps/auth/resolvers/hello.js?");

/***/ }),

/***/ "./src/apps/auth/resolvers/index.js":
/*!******************************************!*\
  !*** ./src/apps/auth/resolvers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token */ \"./src/apps/auth/resolvers/Token.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/apps/auth/resolvers/User.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([//TokenResolvers,\n_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/auth/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/auth/tests/Token.test.js":
/*!*******************************************!*\
  !*** ./src/apps/auth/tests/Token.test.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers */ \"./src/apps/auth/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators */ \"./src/apps/auth/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.8 */\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Token; //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestUser\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].User,\n  foreignKey: 'userId',\n  references: 'id',\n  as: 'user'\n};\ndescribe('Auth -> Token Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Auth -> Token Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked fori, with no association', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instFM_A2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])({\n        [FM_A.foreignKey]: instFM_A_A1[FM_A.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])({\n        [FM_A.foreignKey]: instFM_A_A2[FM_A.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A_A1.dataValues\n      });\n      expect(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A_A2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A_A1.destroy();\n      instFM_A_A2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestToken\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const success = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TokenController\"].delete({}, {\n        id\n      });\n      assert(success === id, `The controller should respond ${id} to the deletion command`);\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/auth/tests/Token.test.js?");

/***/ }),

/***/ "./src/apps/auth/tests/User.test.js":
/*!******************************************!*\
  !*** ./src/apps/auth/tests/User.test.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/auth/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generators */ \"./src/apps/auth/tests/generators/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].User;\ndescribe('Auth -> User Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Model -> Instance Method -> setPassword', function () {\n    it('Model API -> Set the instance passwordHash using bcrypt', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(password);\n      const result = bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.compareSync(password, item.passwordHash);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.equal(true);\n      item.destroy();\n    });\n  });\n  describe('Model -> Instance Method -> isPasswordValid', function () {\n    it('Model API -> Test whether the provided password corresponds to the saved hash', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create({ ...data,\n        passwordHash: bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.hashSync(password, 8)\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(item.passwordHash).to.not.have.lengthOf(0);\n      const result = await item.isPasswordValid(password);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.equal(true);\n      item.destroy();\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Auth -> User Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data,\n        email: data.email.toLowerCase()\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({ ...input,\n        email: input.email.toLowerCase()\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input,\n        email: input.email.toLowerCase()\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  describe('Controller -> Set Superuser', function () {\n    it('Admin API -> Set whether the selected user is a superuser', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])({\n        superuser: false\n      });\n      const inst = await Model.create(data);\n      const {\n        id,\n        superuser\n      } = inst;\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(superuser).to.be.equal(false);\n      const result = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setSuperuser({}, {\n        id,\n        value: true\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.be.equal(true); //change succeeded\n\n      const {\n        superuser: superuserShouldBeTrue\n      } = await Model.findByPk(id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(superuserShouldBeTrue).to.be.equal(true);\n      const result2 = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setSuperuser({}, {\n        id,\n        value: false\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result2).to.be.equal(true); //change succeeded\n\n      const {\n        superuser: superuserShouldBeFalse\n      } = await Model.findByPk(id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(superuserShouldBeFalse).to.be.equal(false);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Set User Password', function () {\n    it('Admin API -> Set the selected user\\'s password', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])({\n        superuser: false\n      });\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const {\n        id\n      } = await Model.create(data);\n      const result = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setUserPassword({}, {\n        id,\n        value: password\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.be.equal(true);\n      const item = await Model.findByPk(id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await item.isPasswordValid(password))).to.be.equal(true); //change succeeded\n\n      item.destroy();\n    });\n  });\n  describe('Controller -> Signup', function () {\n    it('User API -> Signup a password account', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password(); //const { id } = await Model.create( data )\n\n      const loginToken = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].signup({}, { ...data,\n        password\n      }); //console.log(888, loginToken)\n\n      const item = await Model.findOne({\n        where: {\n          email: data.email.toLowerCase()\n        }\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(item).to.deep.include({ ...data,\n        email: data.email.toLowerCase()\n      });\n      const ver = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.verify(loginToken.token, process.env.JWT_SECRET, {\n        expiresIn: process.env.AUTH_SESSION_DURATION,\n        algorithm: ['RS256']\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(loginToken.maxAge).to.be.equal(Number(process.env.AUTH_SESSION_DURATION));\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(loginToken.userId).to.be.equal(item.id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.id).to.be.equal(item.id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.email).to.be.equal(item.email);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.username).to.be.equal(item.username);\n      item.destroy();\n      loginToken.destroy();\n    });\n  });\n  describe('Controller -> Login', function () {\n    it('User API -> Login authorized using email and password', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(password);\n      const loginToken = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].login({}, {\n        email: data.email,\n        password\n      });\n      const ver = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.verify(loginToken.token, process.env.JWT_SECRET, {\n        expiresIn: process.env.AUTH_SESSION_DURATION,\n        algorithm: ['RS256']\n      }); //console.log(9998877, ver)\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(loginToken.maxAge).to.be.equal(Number(process.env.AUTH_SESSION_DURATION));\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(loginToken.userId).to.be.equal(item.id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.id).to.be.equal(item.id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.email).to.be.equal(item.email);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(ver.username).to.be.equal(item.username); //TODO create a test to verify the metadata of the token\n\n      loginToken.destroy();\n      item.destroy();\n    });\n    it('User API -> Login forbidden using bad email', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(password);\n\n      try {\n        await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].login({}, {\n          email: 'somerandomstring@gmail.com',\n          password\n        });\n        chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].notOk(true, \"no error has been raised\");\n      } catch (e) {\n        //console.log(777, e)\n        Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(e instanceof _utils__WEBPACK_IMPORTED_MODULE_7__[\"ValidationError\"], true, \"Should raise a validation Error\");\n      }\n\n      item.destroy();\n    });\n    it('User API -> Login forbidden using bad password', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const password = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(password);\n\n      try {\n        await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].login({}, {\n          email: data.email,\n          password: 'somerandompwd'\n        });\n        chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].notOk(true, \"no error has been raised\");\n      } catch (e) {\n        //console.log(777, e)\n        Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(e instanceof _utils__WEBPACK_IMPORTED_MODULE_7__[\"ValidationError\"], true, \"Should raise a validation Error\");\n      }\n\n      item.destroy();\n    });\n  });\n  describe('Controller -> Update Me', function () {\n    it('User API -> The current user is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const baseInst = await Model.create(data);\n      const {\n        id\n      } = baseInst;\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].updateMe({}, {\n        input\n      }, {\n        user: baseInst\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input,\n        email: input.email.toLowerCase()\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> setMyPassword', function () {\n    it('User API -> Set first time password for current user (user has been created passwordless)', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const item = await Model.create(data);\n      const newPassword = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const result = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setMyPassword({}, {\n        newPassword\n      }, {\n        user: item\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.be.equal(true);\n      const uItem = await Model.findOne({\n        where: {\n          id: item.id\n        }\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await uItem.isPasswordValid(newPassword))).to.be.equal(true);\n      item.destroy();\n    });\n    it('User API -> Change current users password is allowed', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const originalPassword = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(originalPassword);\n      const newPassword = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const result = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setMyPassword({}, {\n        oldPassword: originalPassword,\n        newPassword\n      }, {\n        user: item\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.be.equal(true);\n      const uItem = await Model.findOne({\n        where: {\n          id: item.id\n        }\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await uItem.isPasswordValid(newPassword))).to.be.equal(true);\n      item.destroy();\n    });\n    it('User API -> Change current users password is not allowed', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])();\n      const originalPassword = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const item = await Model.create(data);\n      await item.setPassword(originalPassword);\n      const newPassword = faker__WEBPACK_IMPORTED_MODULE_5__[\"internet\"].password();\n      const result = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"UserController\"].setMyPassword({}, {\n        oldPassword: 'badguess',\n        newPassword\n      }, {\n        user: item\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(result).to.be.equal(false);\n      const uItem = await Model.findOne({\n        where: {\n          id: item.id\n        }\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await uItem.isPasswordValid(newPassword))).to.be.equal(false);\n      item.destroy();\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/auth/tests/User.test.js?");

/***/ }),

/***/ "./src/apps/auth/tests/generators/Token.js":
/*!*************************************************!*\
  !*** ./src/apps/auth/tests/generators/Token.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n\n\n\nconst generateFake = () => {\n  return {\n    maxAge: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].number({\n      min: 1000,\n      max: 604800\n    }),\n    token: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].alphaNumeric(800) //userId:faker.random.uuid()\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/auth/tests/generators/Token.js?");

/***/ }),

/***/ "./src/apps/auth/tests/generators/User.js":
/*!************************************************!*\
  !*** ./src/apps/auth/tests/generators/User.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n\n\n\nconst generateFake = () => {\n  return {\n    firstName: faker__WEBPACK_IMPORTED_MODULE_0__[\"name\"].firstName(),\n    lastName: faker__WEBPACK_IMPORTED_MODULE_0__[\"name\"].lastName(),\n    email: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].email().toLowerCase(),\n    username: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].userName(),\n    handle: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].userName(),\n    superuser: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    isActive: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    onboardingStatus: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].number({\n      min: -1,\n      max: 1\n    })\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/auth/tests/generators/User.js?");

/***/ }),

/***/ "./src/apps/auth/tests/generators/index.js":
/*!*************************************************!*\
  !*** ./src/apps/auth/tests/generators/index.js ***!
  \*************************************************/
/*! exports provided: generateTestToken, generateTestUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token */ \"./src/apps/auth/tests/generators/Token.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestToken\", function() { return _Token__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/apps/auth/tests/generators/User.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestUser\", function() { return _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/auth/types/Token.graphql":
/*!*******************************************!*\
  !*** ./src/apps/auth/types/Token.graphql ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> type Token {\\n|   id:ID!\\n|   _string:String!\");\n\n//# sourceURL=webpack:///./src/apps/auth/types/Token.graphql?");

/***/ }),

/***/ "./src/apps/auth/types/User.graphql":
/*!******************************************!*\
  !*** ./src/apps/auth/types/User.graphql ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> extend type Query {\\n|  \\tallUsers: [User]!\\n|  \\tgetUser(id:ID!): User!\");\n\n//# sourceURL=webpack:///./src/apps/auth/types/User.graphql?");

/***/ }),

/***/ "./src/apps/auth/types/_stitch.graphql":
/*!*********************************************!*\
  !*** ./src/apps/auth/types/_stitch.graphql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #extend input TokenInput {\\n|   #userId:ID\\n|   #}\");\n\n//# sourceURL=webpack:///./src/apps/auth/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/auth/types/index.js":
/*!**************************************!*\
  !*** ./src/apps/auth/types/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Token.graphql' */\nconst TokenTypes = \"type Token {\\n  id:ID!\\n  _string:String!\\n  token: String!\\n  maxAge: String!\\n  tokenType:String\\n\\n  expires_in:Float! #Based on maxAge and Date.now\\n  access_token:String! #same as token\\n  token_type:String #same as tokenType\\n}\\n\\n\";\n\n/* babel-plugin-inline-import './User.graphql' */\nconst UserTypes = \"extend type Query {\\n \\tallUsers: [User]!\\n \\tgetUser(id:ID!): User!\\n \\tme: MinUser\\n  hello: String!\\n}\\n\\nextend type Mutation {\\n  #Admin Mutations\\n \\taddUser(input:UserInput): User!,\\n \\tupdateUser(id: ID!, input:UserInput): User!,\\n \\tdeleteUser(id: ID!): ID!,\\n \\tsetSuperuser(id: ID!, value: String!): Boolean!,\\n \\tsetUserPassword(id: ID!, value: String!): Boolean!,\\n\\n  #User Mutations\\n \\tlogin(input: UserLogin): Token!,\\n  signup(input: UserInput): Token!,\\n \\tsetMyPassword(oldPassword:String, password: String!): Boolean!,\\n \\tupdateMe(input:MeInput): User!,\\n}\\n\\ninput UserInput {\\n  firstName: String\\n  lastName: String\\n  email: String\\n  username: String\\n  password: String\\n  superuser: Boolean\\n  operator: Boolean\\n  handle: String\\n  profilePicture: String\\n  isActive:Boolean\\n}\\n\\ninput MeInput {\\n  firstName: String\\n  lastName: String\\n  email: String\\n  username: String\\n  password: String\\n  handle: String\\n  profilePicture: String\\n}\\n\\ninput UserLogin {\\n  email: String!\\n  password:String!\\n}\\n\\ntype User {\\n \\tid: ID\\n \\tfirstName: String\\n \\tlastName: String\\n \\temail: String\\n  username: String\\n  superuser: Boolean\\n  operator: Boolean\\n  password: String\\n  handle: String\\n  isActive:Boolean\\n  onboardingStatus:Int\\n  createdAt:Float\\n  updatedAt:Float\\n}\\n\\ntype MinUser {\\n \\tid: ID\\n  email:String\\n \\tfirstName: String\\n \\tlastName: String\\n  username: String\\n  handle: String\\n  isActive:Boolean\\n  onboardingStatus:Int\\n  createdAt:Float\\n  updatedAt:Float\\n}\\n\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"#extend input TokenInput {\\n  #userId:ID\\n  #}\\n\\nextend type Token {\\n  userId:ID\\n  user:User\\n}\\n\\nextend type User {\\n  tokens:Token\\n}\\n\\n#extend type TokenInput {\\n#  userId:ID!\\n#}\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([TokenTypes, UserTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/auth/types/index.js?");

/***/ }),

/***/ "./src/apps/auth/utils/getTokenFor.js":
/*!********************************************!*\
  !*** ./src/apps/auth/utils/getTokenFor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst models = Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../models.js */ \"./src/models.js\"));\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (user, secret = process.env.JWT_SECRET) => {\n  if (!secret) {\n    throw new _utils__WEBPACK_IMPORTED_MODULE_0__[\"ConfigurationError\"]({\n      message: 'No jwt secret kei providedy'\n    });\n  }\n\n  const {\n    default: m\n  } = await models; //lazy loading models\n\n  const Token = m.Token;\n  const payload = {\n    id: user.id,\n    email: user.email,\n    username: user.username //user_agent: context.user_agent\n\n  };\n  /* //DEPRECATED for serverless\n  const algorithm = secret ? 'HS512' : 'RS256'\n  let key = null\n  if (algorithm === 'HS512') {\n    key = secret\n  }\n  else {\n    key = ''\n    //key = fs.readFileSync('./keys/jwt_private.pem', 'utf-8')\n  }\n  */\n  //console.log(888, user)\n\n  const key = secret;\n  const tokenDuration = Number(process.env.AUTH_SESSION_DURATION);\n  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(payload, key, {\n    issuer: process.env.JWT_ISSUER || 'Fwrlines',\n    subject: 'auth',\n    audience: process.env.JWT_AUDIENCE || 'fwrlines.com',\n    expiresIn: tokenDuration,\n    algorithm: 'HS512'\n  } //, (err, token) => {}\n  ); // TODO If we store the tokens, it's to be able to invalidate them.\n  // This is currently not implemented. If not we shoud NOT persist JWT's in the DB\n  // As it is the case here...\n\n  return await Token.create({\n    maxAge: tokenDuration,\n    userId: user.id,\n    token\n  });\n});\n\n//# sourceURL=webpack:///./src/apps/auth/utils/getTokenFor.js?");

/***/ }),

/***/ "./src/apps/auth/utils/index.js":
/*!**************************************!*\
  !*** ./src/apps/auth/utils/index.js ***!
  \**************************************/
/*! exports provided: getTokenFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getTokenFor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTokenFor */ \"./src/apps/auth/utils/getTokenFor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getTokenFor\", function() { return _getTokenFor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/utils/index.js?");

/***/ }),

/***/ "./src/apps/auth/validation/index.js":
/*!*******************************************!*\
  !*** ./src/apps/auth/validation/index.js ***!
  \*******************************************/
/*! exports provided: validateLoginInput, validateSignupInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./src/apps/auth/validation/login.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateLoginInput\", function() { return _login_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _signup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.js */ \"./src/apps/auth/validation/signup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateSignupInput\", function() { return _signup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/auth/validation/index.js?");

/***/ }),

/***/ "./src/apps/auth/validation/login.js":
/*!*******************************************!*\
  !*** ./src/apps/auth/validation/login.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validateLoginInput; });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n\n\nfunction validateLoginInput(d) {\n  let e = {};\n  d.email = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.email) ? d.email : '';\n  d.password = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.password) ? d.password : '';\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(d.email)) {\n    e.email = 'Email is invalid';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.email)) {\n    e.email = 'Email is required';\n  }\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(d.password, {\n    min: 6,\n    max: 30\n  })) {\n    e.password = 'Password must have 6 chars';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.password)) {\n    e.password = 'Password is required';\n  }\n\n  return {\n    errors: e,\n    isValid: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(e)\n  };\n}\n\n//# sourceURL=webpack:///./src/apps/auth/validation/login.js?");

/***/ }),

/***/ "./src/apps/auth/validation/signup.js":
/*!********************************************!*\
  !*** ./src/apps/auth/validation/signup.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (async d => {\n  let e = {};\n  d.lastName = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.lastName) ? d.lastName : '';\n  d.username = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.username) ? d.username : '';\n  d.firstName = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.firstName) ? d.firstName : '';\n  d.email = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.email) ? d.email : '';\n  d.password = !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(d.password) ? d.password : ''; // d.password_confirm = !isEmpty(d.password_confirm) ? d.password_confirm : ''\n  //\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(d.firstName, {\n    min: 2,\n    max: 30\n  })) {\n    e.firstName = 'First name must be between 2 to 30 chars';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.lastName)) {\n    e.lastName = 'Last name field is required';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.firstName)) {\n    e.firstName = 'First name field is required';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.username)) {\n    e.username = 'Username field is required';\n  }\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.username)) {\n    const username_exists = await Model.findOne({\n      where: {\n        email: d.username\n      }\n    });\n\n    if (username_exists) {\n      e.username = 'Username already exists';\n    }\n  }\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(d.email)) {\n    e.email = 'Email is invalid';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.email)) {\n    e.email = 'Email is required';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(d.email) && !validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.email)) {\n    const email_exists = await Model.findOne({\n      where: {\n        email: d.email\n      }\n    });\n\n    if (email_exists) {\n      e.email = 'Email already exists';\n    }\n  }\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(d.password, {\n    min: 6,\n    max: 30\n  })) {\n    e.password = 'Password must have 6 chars';\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(d.password)) {\n    e.password = 'Password is required';\n  } // if(!V.isLength(d.password_confirm, {min: 6, max: 30})) {\n  // e.password_confirm = 'Password must have 6 chars'\n  // }\n  // if(!V.equals(d.password, d.password_confirm)) {\n  // e.password_confirm = 'Password and Confirm Password must match'\n  // }\n  // if(V.isEmpty(d.password_confirm)) {\n  // e.password_confirm = 'Password is required'\n  // }\n\n\n  return {\n    errors: e,\n    isValid: Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(e)\n  };\n});\n\n//# sourceURL=webpack:///./src/apps/auth/validation/signup.js?");

/***/ }),

/***/ "./src/apps/business/controllers/Shop.js":
/*!***********************************************!*\
  !*** ./src/apps/business/controllers/Shop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.5 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Shop;\nconst include = [{\n  all: true\n} //{ model: models.User, as: 'user' },\n//{ model: models.Site, as: 'website' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true //plain:true\n\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/business/controllers/Shop.js?");

/***/ }),

/***/ "./src/apps/business/controllers/index.js":
/*!************************************************!*\
  !*** ./src/apps/business/controllers/index.js ***!
  \************************************************/
/*! exports provided: ShopController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ \"./src/apps/business/controllers/Shop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ShopController\", function() { return _Shop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/business/controllers/index.js?");

/***/ }),

/***/ "./src/apps/business/dependencies.json":
/*!*********************************************!*\
  !*** ./src/apps/business/dependencies.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"auth\\\",\\\"website\\\"]\");\n\n//# sourceURL=webpack:///./src/apps/business/dependencies.json?");

/***/ }),

/***/ "./src/apps/business/index.js":
/*!************************************!*\
  !*** ./src/apps/business/index.js ***!
  \************************************/
/*! exports provided: dependencies, types, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/business/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/business/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/apps/business/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/business/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/business/index.js?");

/***/ }),

/***/ "./src/apps/business/migrations/00_business_shops_initial.migration.js":
/*!*****************************************************************************!*\
  !*** ./src/apps/business/migrations/00_business_shops_initial.migration.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.5 */\nconst tableName = 'business_shops'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      primaryKey: true,\n      allowNull: false\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    publicPhoneNumber: {\n      type: Sequelize.DataTypes.BIGINT\n    },\n    privatePhoneNumber: {\n      type: Sequelize.DataTypes.BIGINT\n    },\n    address: {\n      type: Sequelize.DataTypes.STRING\n    },\n    address2: {\n      type: Sequelize.DataTypes.STRING\n    },\n    city: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    postcode: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    country: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    regularOpeningTimes: {\n      type: Sequelize.DataTypes.JSON,\n      defaultValue: {\n        1: false,\n        2: false,\n        3: false,\n        4: false,\n        5: false,\n        6: false,\n        7: false\n      } //field:'column_name_here'\n\n    },\n    specialOpeningTimes: {\n      type: Sequelize.DataTypes.JSON\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/business/migrations/00_business_shops_initial.migration.js?");

/***/ }),

/***/ "./src/apps/business/migrations/01_business_shops_association_auth_users.migration.js":
/*!********************************************************************************************!*\
  !*** ./src/apps/business/migrations/01_business_shops_association_auth_users.migration.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.5 */\nconst tableName = 'business_shops'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'ownerId';\nconst foreignModelTableName = 'users';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignModelTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'SET NULL'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/business/migrations/01_business_shops_association_auth_users.migration.js?");

/***/ }),

/***/ "./src/apps/business/migrations/01_business_shops_association_website_sites.migration.js":
/*!***********************************************************************************************!*\
  !*** ./src/apps/business/migrations/01_business_shops_association_website_sites.migration.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.5 */\nconst tableName = 'business_shops'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'siteId';\nconst foreignModelTableName = 'websites';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignModelTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'SET NULL'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/business/migrations/01_business_shops_association_website_sites.migration.js?");

/***/ }),

/***/ "./src/apps/business/migrations/02_business_shops_index_name_city.migration.js":
/*!*************************************************************************************!*\
  !*** ./src/apps/business/migrations/02_business_shops_index_name_city.migration.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.5 */\nconst tableName = 'business_shops'; //Should equal the one defined in models\n\nconst indexName = tableName + '_index_name_city';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addIndex(tableName, {\n    name: indexName,\n    fields: ['city', 'name'],\n    unique: true\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeIndex(tableName, indexName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/business/migrations/02_business_shops_index_name_city.migration.js?");

/***/ }),

/***/ "./src/apps/business/models/Shop.js":
/*!******************************************!*\
  !*** ./src/apps/business/models/Shop.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.4.5 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Shop extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n    async updateRegularOpeningTimes(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n    async updateSpecialOpeningTimes(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Shop.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      //type: Sequelize.DataTypes.INTEGER,\n      //autoIncrement: true,\n      primaryKey: true,\n      allowNull: false\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    publicPhoneNumber: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BIGINT //allowNull: false,\n\n    },\n    privatePhoneNumber: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BIGINT\n    },\n    address: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING //allowNull: false,\n\n    },\n    address2: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING //allowNull: false,\n\n    },\n    city: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    postcode: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    country: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    regularOpeningTimes: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON,\n      defaultValue: {\n        1: false,\n        2: false,\n        3: false,\n        4: false,\n        5: false,\n        6: false,\n        7: false\n      } //field:'column_name_here'\n\n    },\n    specialOpeningTimes: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON,\n      defaultValue: {} //field:'column_name_here'\n\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON,\n      defaultValue: {}\n    },\n    closesAt: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.DATE, ['regularOpeningTimes', 'specialOpeningTimes']),\n\n      get() {\n        return Date.now();\n      }\n\n    },\n    opensAt: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.DATE, ['regularOpeningTimes', 'specialOpeningTimes']),\n\n      get() {\n        return Date.now();\n      }\n\n    },\n    isOpenNow: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN, ['closesAt', 'opensAt']),\n\n      get() {\n        return this.get('closesAt') < this.get('opensAt');\n      }\n\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['city', 'name']),\n      get: function () {\n        return `${this.get('city')}/${this.get('name')}`;\n      }\n    }\n    /*\n    uuid:{\n      type: Sequelize.DataTypes.UUID,\n      defaultValue: Sequelize.UUIDV4\n    }\n    */\n\n  }, {\n    sequelize,\n    modelName: 'Shop',\n    tableName: 'business_shops',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt',\n    indexes: [{\n      unique: true,\n      fields: ['city', 'name']\n    }] //freezeTableName: true\n\n  });\n\n  Shop.associate = models => {\n    Shop.belongsTo(models.User, {\n      as: 'user',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'ownerId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      }\n    });\n    models.User.hasMany(Shop, {\n      targetKey: 'id',\n      as: 'shops',\n      foreignKey: {\n        name: 'ownerId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      }\n    });\n    Shop.belongsTo(models.Site, {\n      as: 'website',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'siteId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      }\n    });\n    models.Site.hasOne(Shop, {\n      as: 'business',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'siteId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID\n      }\n    }); //'onDelete':'SET NULL', //RESTRICT, CASCADE, SET DEFAULT\n    //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT\n    //this will give a foreign key to user here, and make it available from here\n    //models.User.hasMany() //this will give this model a UserId field and make it available from user\n    //The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).\n    //The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).\n    //The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).\n    //These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).\n    //The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.\n  };\n\n  return Shop; //Shop.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/business/models/Shop.js?");

/***/ }),

/***/ "./src/apps/business/models/index.js":
/*!*******************************************!*\
  !*** ./src/apps/business/models/index.js ***!
  \*******************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ \"./src/apps/business/models/Shop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Shop\", function() { return _Shop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/business/models/index.js?");

/***/ }),

/***/ "./src/apps/business/resolvers/Shop.js":
/*!*********************************************!*\
  !*** ./src/apps/business/resolvers/Shop.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/business/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.5 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addShop(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ShopController\"].add(r, a), c.user);\n    },\n\n    async deleteShop(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ShopController\"].del(r, a), c.user);\n    },\n\n    async updateShop(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ShopController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allShops(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ShopController\"].all(r, a), c.user); //return su(ShopController.paginated(r, a), c.user)\n    },\n\n    getShop(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ShopController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/business/resolvers/Shop.js?");

/***/ }),

/***/ "./src/apps/business/resolvers/index.js":
/*!**********************************************!*\
  !*** ./src/apps/business/resolvers/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ \"./src/apps/business/resolvers/Shop.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.5 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Shop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/business/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/business/tests/Shop.test.js":
/*!**********************************************!*\
  !*** ./src/apps/business/tests/Shop.test.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers */ \"./src/apps/business/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators */ \"./src/apps/business/tests/generators/index.js\");\n/* harmony import */ var _auth_tests_generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/tests/generators */ \"./src/apps/auth/tests/generators/index.js\");\n/* harmony import */ var _website_tests_generators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../website/tests/generators */ \"./src/apps/website/tests/generators/index.js\");\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Shop;\n\n\n //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_auth_tests_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestUser\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].User,\n  foreignKey: 'ownerId',\n  references: 'id',\n  as: 'user'\n};\nconst FM_B = {\n  generateData: () => Object(_website_tests_generators__WEBPACK_IMPORTED_MODULE_7__[\"generateTestSite\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Site,\n  foreignKey: 'siteId',\n  references: 'id',\n  as: 'website'\n};\ndescribe('Business -> Shop Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n   describe('Model -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n   afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Business -> Shop Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked fori, with no association', async function () {\n      // 1. We generate two item,s\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_B1 = await FM_B.model.create(FM_B.generateData(), {\n        plain: true\n      });\n      const instFM_B2 = await FM_B.model.create(FM_B.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instSite2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])({\n        [FM_A.foreignKey]: instFM_A1[FM_A.references],\n        [FM_B.foreignKey]: instFM_B1[FM_B.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])({\n        [FM_A.foreignKey]: instFM_A2[FM_A.references],\n        [FM_B.foreignKey]: instFM_B2[FM_B.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A1.dataValues,\n        [FM_B.as]: instFM_B1.dataValues\n      });\n      expect(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A2.dataValues,\n        [FM_B.as]: instFM_B2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A1.destroy();\n      instFM_A2.destroy();\n      instFM_B1.destroy();\n      instFM_B2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    }), it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_B = await FM_B.model.create(FM_B.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references],\n        [FM_B.foreignKey]: instFM_B[FM_B.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      expect(inst[FM_B.as].dataValues).to.deep.include(instFM_B.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n      instFM_B.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_B = await FM_B.model.create(FM_B.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references],\n        [FM_B.foreignKey]: instFM_B[FM_B.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst.website.dataValues).to.deep.include(instSite.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n      instFM_B.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_B = await FM_B.model.create(FM_B.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references],\n        [FM_B.foreignKey]: instFM_B[FM_B.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n      instFM_B.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestShop\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const success = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ShopController\"].delete({}, {\n        id\n      });\n      assert(success === id, `The controller should respond ${id} to the deletion command`);\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/business/tests/Shop.test.js?");

/***/ }),

/***/ "./src/apps/business/tests/generators/Shop.js":
/*!****************************************************!*\
  !*** ./src/apps/business/tests/generators/Shop.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.8 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName(),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName().toLowerCase()),\n    //publicPhoneNumber  :faker.phone.phoneNumber(),\n    publicPhoneNumber: String(faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].number(10 ** 6, 10 ** 10)),\n    privatePhoneNumber: String(faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].number(10 ** 6, 10 ** 10)),\n    address: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].streetAddress(),\n    address2: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].streetAddress(),\n    city: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].city(),\n    postcode: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].zipCode(),\n    country: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].country(),\n    regularOpeningTimes: {\n      1: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      2: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      3: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      4: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      5: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      6: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      7: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    },\n    specialOpeningTimes: {\n      christmas: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    },\n    data: {\n      k: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/business/tests/generators/Shop.js?");

/***/ }),

/***/ "./src/apps/business/tests/generators/index.js":
/*!*****************************************************!*\
  !*** ./src/apps/business/tests/generators/index.js ***!
  \*****************************************************/
/*! exports provided: generateTestShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ \"./src/apps/business/tests/generators/Shop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestShop\", function() { return _Shop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/business/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/business/types/Shop.graphql":
/*!**********************************************!*\
  !*** ./src/apps/business/types/Shop.graphql ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.4.5 \\n| extend type Query {\\n|   allShops: [Shop]\");\n\n//# sourceURL=webpack:///./src/apps/business/types/Shop.graphql?");

/***/ }),

/***/ "./src/apps/business/types/_stitch.graphql":
/*!*************************************************!*\
  !*** ./src/apps/business/types/_stitch.graphql ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> extend type User {\\n|   shops:Shop\\n| }\");\n\n//# sourceURL=webpack:///./src/apps/business/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/business/types/index.js":
/*!******************************************!*\
  !*** ./src/apps/business/types/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Shop.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 2.4.5 */\nconst ShopTypes = \"# @fwrlines/generator-graphql-server-type 2.4.5 \\nextend type Query {\\n  allShops: [Shop]\\n  getShop(id: ID!): Shop!\\n  #paginatedShop (page:Int, category: String):PaginatedShops\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addShop(input:ShopInput!): Shop!\\n  updateShop(id: ID!, input: ShopInput!): Shop!\\n  deleteShop(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput ShopInput {\\n  name:String\\n  slug:String\\n  publicPhoneNumber:Float\\n  privatePhoneNumber:Float\\n  address:String\\n  address2:String\\n  city:String\\n  postcode:String\\n  country:String\\n  #regularOpeningTimes:String\\n  #specialOpeningTimes:String\\n  #data:String\\n  }\\n\\ntype Shop {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  publicPhoneNumber:Float\\n  privatePhoneNumber:Float\\n  address:String\\n  address2:String\\n  city:String!\\n  postcode:String!\\n  country:String!\\n  #regularOpeningTimes:String\\n  #specialOpeningTimes:String\\n  #data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedShops {\\n#  docs: [Shop]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"extend type User {\\n  shops:Shop\\n}\\n\\nextend type Shop {\\n  ownerId:ID!\\n  owner:MinUser\\n}\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([ShopTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/business/types/index.js?");

/***/ }),

/***/ "./src/apps/car/controllers/Make.js":
/*!******************************************!*\
  !*** ./src/apps/car/controllers/Make.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Make;\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/car/controllers/Make.js?");

/***/ }),

/***/ "./src/apps/car/controllers/Service.js":
/*!*********************************************!*\
  !*** ./src/apps/car/controllers/Service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Service;\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/car/controllers/Service.js?");

/***/ }),

/***/ "./src/apps/car/controllers/index.js":
/*!*******************************************!*\
  !*** ./src/apps/car/controllers/index.js ***!
  \*******************************************/
/*! exports provided: ServiceController, MakeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ \"./src/apps/car/controllers/Service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ServiceController\", function() { return _Service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Make__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Make */ \"./src/apps/car/controllers/Make.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MakeController\", function() { return _Make__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/car/controllers/index.js?");

/***/ }),

/***/ "./src/apps/car/dependencies.json":
/*!****************************************!*\
  !*** ./src/apps/car/dependencies.json ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[]\");\n\n//# sourceURL=webpack:///./src/apps/car/dependencies.json?");

/***/ }),

/***/ "./src/apps/car/index.js":
/*!*******************************!*\
  !*** ./src/apps/car/index.js ***!
  \*******************************/
/*! exports provided: dependencies, types, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/car/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/car/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/apps/car/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/car/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/car/index.js?");

/***/ }),

/***/ "./src/apps/car/migrations/00_car_makes_initial.migration.js":
/*!*******************************************************************!*\
  !*** ./src/apps/car/migrations/00_car_makes_initial.migration.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'makes'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    activeFrom: {\n      type: Sequelize.DataTypes.STRING\n    },\n    activeTo: {\n      type: Sequelize.DataTypes.STRING\n    },\n    country: {\n      type: Sequelize.DataTypes.STRING\n    },\n    isCommon: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    isActive: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    car: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    motorcycle: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    seotext: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/car/migrations/00_car_makes_initial.migration.js?");

/***/ }),

/***/ "./src/apps/car/migrations/00_car_services_initial.migration.js":
/*!**********************************************************************!*\
  !*** ./src/apps/car/migrations/00_car_services_initial.migration.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'services'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    category: {\n      type: Sequelize.DataTypes.STRING\n    },\n    isActive: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    car: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    motorcycle: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    genericCta: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    carButton: {\n      type: Sequelize.DataTypes.STRING\n    },\n    motoButton: {\n      type: Sequelize.DataTypes.STRING\n    },\n    seotext: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    icon: {\n      type: Sequelize.DataTypes.STRING\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/car/migrations/00_car_services_initial.migration.js?");

/***/ }),

/***/ "./src/apps/car/models/Make.js":
/*!*************************************!*\
  !*** ./src/apps/car/models/Make.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Make extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n     instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n  }\n\n  Make.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    activeFrom: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    activeTo: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    country: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    isCommon: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    isActive: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    car: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: true\n    },\n    motorcycle: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    seotext: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'Make',\n    tableName: 'makes',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt'\n  });\n  return Make;\n});\n\n//# sourceURL=webpack:///./src/apps/car/models/Make.js?");

/***/ }),

/***/ "./src/apps/car/models/Make.old.js":
/*!*****************************************!*\
  !*** ./src/apps/car/models/Make.old.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MakeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    unique: true\n  },\n  slug: String,\n  active_from: String,\n  active_to: String,\n  country: String,\n  is_common: Boolean,\n  is_active: Boolean,\n  //Is active on the front end (!= active as a make)\n  car: Boolean,\n  motorcycle: Boolean,\n  seotext: String\n});\nconst Make = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('make', MakeSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Make);\n\n//# sourceURL=webpack:///./src/apps/car/models/Make.old.js?");

/***/ }),

/***/ "./src/apps/car/models/Service.js":
/*!****************************************!*\
  !*** ./src/apps/car/models/Service.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n //import sequelize from 'connector'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Service extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n     instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n  }\n\n  Service.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    category: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    isActive: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: true\n    },\n    car: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    motorcycle: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    genericCta: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    carButton: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    motoButton: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    seotext: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    },\n\n    /*\n    invisible: {\n    type: Sequelize.DataTypes.BOOLEAN,\n    allowNull: false,\n    defaultValue:false,\n    },\n    */\n    icon: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    }\n  }, {\n    sequelize,\n    modelName: 'Service',\n    tableName: 'services',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  }); //Service.addHook('afterCreate', 'hookName', (e, options) => {})\n\n  return Service;\n});\n\n//# sourceURL=webpack:///./src/apps/car/models/Service.js?");

/***/ }),

/***/ "./src/apps/car/models/Service.old.js":
/*!********************************************!*\
  !*** ./src/apps/car/models/Service.old.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ServiceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    unique: true\n  },\n  category: String,\n  seotext: String,\n  is_active: {\n    type: Boolean,\n    default: 1\n  },\n  car: {\n    type: Boolean\n  },\n  motorcycle: {\n    type: Boolean\n  },\n  slug: String,\n  generic_cta: String,\n  carbutton: String,\n  motobutton: String,\n  invisible: {\n    type: Boolean,\n    default: 0\n  },\n  icon: String\n});\nconst Service = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('service', ServiceSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Service);\n\n//# sourceURL=webpack:///./src/apps/car/models/Service.old.js?");

/***/ }),

/***/ "./src/apps/car/models/index.js":
/*!**************************************!*\
  !*** ./src/apps/car/models/index.js ***!
  \**************************************/
/*! exports provided: Service, Make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ \"./src/apps/car/models/Service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Service\", function() { return _Service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Make__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Make */ \"./src/apps/car/models/Make.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Make\", function() { return _Make__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/car/models/index.js?");

/***/ }),

/***/ "./src/apps/car/resolvers/Make.js":
/*!****************************************!*\
  !*** ./src/apps/car/resolvers/Make.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/car/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addMake(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"MakeController\"].add(r, a), c.user);\n    },\n\n    async deleteMake(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"MakeController\"].delete(r, a), c.user);\n    },\n\n    async updateMake(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"MakeController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allMakes(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"MakeController\"].all(r, a), c.user); //return su(MakeController.paginated(r, a), c.user)\n    },\n\n    getMake(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"MakeController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/car/resolvers/Make.js?");

/***/ }),

/***/ "./src/apps/car/resolvers/Service.js":
/*!*******************************************!*\
  !*** ./src/apps/car/resolvers/Service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/car/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addService(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ServiceController\"].add(r, a), c.user);\n    },\n\n    async deleteService(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ServiceController\"].delete(r, a), c.user);\n    },\n\n    async updateService(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ServiceController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allServices(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ServiceController\"].all(r, a), c.user); //return su(ServiceController.paginated(r, a), c.user)\n    },\n\n    getService(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ServiceController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/car/resolvers/Service.js?");

/***/ }),

/***/ "./src/apps/car/resolvers/index.js":
/*!*****************************************!*\
  !*** ./src/apps/car/resolvers/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ \"./src/apps/car/resolvers/Service.js\");\n/* harmony import */ var _Make__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Make */ \"./src/apps/car/resolvers/Make.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.0 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Service__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Make__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/car/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/car/tests/Make.test.js":
/*!*****************************************!*\
  !*** ./src/apps/car/tests/Make.test.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/car/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators */ \"./src/apps/car/tests/generators/index.js\");\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Make;\ndescribe('Car -> Make Controller', function () {\n  before(function () {});\n  beforeEach(function () {});\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"MakeController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"MakeController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"MakeController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"MakeController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestMake\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"MakeController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  afterEach(function () {});\n  after(function () {});\n});\n\n//# sourceURL=webpack:///./src/apps/car/tests/Make.test.js?");

/***/ }),

/***/ "./src/apps/car/tests/Service.test.js":
/*!********************************************!*\
  !*** ./src/apps/car/tests/Service.test.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/car/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators */ \"./src/apps/car/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Service;\ndescribe('Car -> Service Controller', function () {\n  before(function () {});\n  beforeEach(function () {});\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"ServiceController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"ServiceController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"ServiceController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"ServiceController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestService\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"ServiceController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  afterEach(function () {});\n  after(function () {});\n});\n\n//# sourceURL=webpack:///./src/apps/car/tests/Service.test.js?");

/***/ }),

/***/ "./src/apps/car/tests/generators/Make.js":
/*!***********************************************!*\
  !*** ./src/apps/car/tests/generators/Make.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName(),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName().toLowerCase()),\n    activeFrom: '1920',\n    activeTo: 'present',\n    country: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].country(),\n    isCommon: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    isActive: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    car: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    motorcycle: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    seotext: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(5)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/car/tests/generators/Make.js?");

/***/ }),

/***/ "./src/apps/car/tests/generators/Service.js":
/*!**************************************************!*\
  !*** ./src/apps/car/tests/generators/Service.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].words(8),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].words(8).toLowerCase()),\n    category: faker__WEBPACK_IMPORTED_MODULE_0__[\"commerce\"].department(),\n    isActive: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    car: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    motorcycle: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    genericCta: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(2),\n    carButton: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].words(6),\n    motoButton: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].words(6),\n    seotext: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(5)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/car/tests/generators/Service.js?");

/***/ }),

/***/ "./src/apps/car/tests/generators/index.js":
/*!************************************************!*\
  !*** ./src/apps/car/tests/generators/index.js ***!
  \************************************************/
/*! exports provided: generateTestMake, generateTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Make__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Make */ \"./src/apps/car/tests/generators/Make.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestMake\", function() { return _Make__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ \"./src/apps/car/tests/generators/Service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestService\", function() { return _Service__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/car/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/car/types/Make.graphql":
/*!*****************************************!*\
  !*** ./src/apps/car/types/Make.graphql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 1.3.1 \\n| extend type Query {\\n|   allMakes: [Make]\");\n\n//# sourceURL=webpack:///./src/apps/car/types/Make.graphql?");

/***/ }),

/***/ "./src/apps/car/types/Service.graphql":
/*!********************************************!*\
  !*** ./src/apps/car/types/Service.graphql ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 1.3.1 \\n| extend type Query {\\n|   allServices: [Service]\");\n\n//# sourceURL=webpack:///./src/apps/car/types/Service.graphql?");

/***/ }),

/***/ "./src/apps/car/types/_stitch.graphql":
/*!********************************************!*\
  !*** ./src/apps/car/types/_stitch.graphql ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/apps/car/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/car/types/index.js":
/*!*************************************!*\
  !*** ./src/apps/car/types/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Service.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 1.3.0 */\nconst ServiceTypes = \"# @fwrlines/generator-graphql-server-type 1.3.1 \\nextend type Query {\\n  allServices: [Service]\\n  getService(id: ID!): Service!\\n  #paginatedService (page:Int, category: String):PaginatedServices\\n}\\n\\nextend type Mutation {\\n  addService(input:ServiceInput!): Service!\\n  updateService(id: ID!, input: ServiceInput!): Boolean!\\n  deleteService(id: ID!): ID!\\n  }\\n\\ninput ServiceInput {\\n  name:String\\n  slug:String\\n  category:String\\n  is_active:Boolean\\n  car:Boolean\\n  motorcycle:Boolean\\n  generic_cta:String\\n  carbutton:String\\n  motobutton:String\\n  seotext:String\\n}\\n\\ntype Service {\\n  id:ID\\n  _string:String!\\n  name:String\\n  slug:String\\n  category:String\\n  is_active:Boolean\\n  car:Boolean\\n  motorcycle:Boolean\\n  generic_cta:String\\n  carbutton:String\\n  motobutton:String\\n  seotext:String\\n}\\n\\n#type PaginatedServices {\\n#  docs: [Service]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './Make.graphql' */\nconst MakeTypes = \"# @fwrlines/generator-graphql-server-type 1.3.1 \\nextend type Query {\\n  allMakes: [Make]\\n  getMake(id: ID!): Make!\\n  #paginatedMake (page:Int, category: String):PaginatedMakes\\n}\\n\\nextend type Mutation {\\n  addMake(input:MakeInput!): Make!\\n  updateMake(id: ID!, input: MakeInput!): Make!\\n  deleteMake(id: ID!): ID!\\n  }\\n\\ninput MakeInput {\\n  name:String\\n  slug:String\\n  active_from:String\\n  active_to:String\\n  country:String\\n  is_common:Boolean\\n  is_active:Boolean\\n  car:Boolean\\n  motorcycle:Boolean\\n  seotext:String\\n  }\\n\\ntype Make {\\n  id:ID!\\n  _string:String!\\n  name:String\\n  slug:String\\n  active_from:String\\n  active_to:String\\n  country:String\\n  is_common:Boolean\\n  is_active:Boolean\\n  car:Boolean\\n  motorcycle:Boolean\\n  seotext:String\\n  createdAt:Float\\n  updatedAt:Float\\n}\\n\\n#type PaginatedMakes {\\n#  docs: [Make]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([ServiceTypes, MakeTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/car/types/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/controllers/Author.js":
/*!***************************************************!*\
  !*** ./src/apps/dictionary/controllers/Author.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DictionaryAuthor;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/dictionary/controllers/Author.js?");

/***/ }),

/***/ "./src/apps/dictionary/controllers/Expression.js":
/*!*******************************************************!*\
  !*** ./src/apps/dictionary/controllers/Expression.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DictionaryExpression;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryAuthor, as: 'author' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/dictionary/controllers/Expression.js?");

/***/ }),

/***/ "./src/apps/dictionary/controllers/Tag.js":
/*!************************************************!*\
  !*** ./src/apps/dictionary/controllers/Tag.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DictionaryTag;\nconst include = [] //{ all: true }\n//{ model: models.DictionaryAuthor, as: 'author' }\n\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n;\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    raw: true,\n    nest: true //include, \n    //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    //include, \n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    //include, \n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/dictionary/controllers/Tag.js?");

/***/ }),

/***/ "./src/apps/dictionary/controllers/index.js":
/*!**************************************************!*\
  !*** ./src/apps/dictionary/controllers/index.js ***!
  \**************************************************/
/*! exports provided: ExpressionController, AuthorController, TagController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expression */ \"./src/apps/dictionary/controllers/Expression.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ExpressionController\", function() { return _Expression__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Author */ \"./src/apps/dictionary/controllers/Author.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthorController\", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tag */ \"./src/apps/dictionary/controllers/Tag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TagController\", function() { return _Tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/dictionary/controllers/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/dependencies.json":
/*!***********************************************!*\
  !*** ./src/apps/dictionary/dependencies.json ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[]\");\n\n//# sourceURL=webpack:///./src/apps/dictionary/dependencies.json?");

/***/ }),

/***/ "./src/apps/dictionary/index.js":
/*!**************************************!*\
  !*** ./src/apps/dictionary/index.js ***!
  \**************************************/
/*! exports provided: dependencies, types, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/dictionary/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/dictionary/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/apps/dictionary/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/dictionary/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/dictionary/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/00_dictionary_authors_initial.migration.js":
/*!***********************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/00_dictionary_authors_initial.migration.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = 'dictionary_authors'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    altName: {\n      type: Sequelize.DataTypes.STRING\n    },\n    publicPicture: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    authorityLink: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    publicLink: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    description: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/00_dictionary_authors_initial.migration.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/00_dictionary_expressions_initial.migration.js":
/*!***************************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/00_dictionary_expressions_initial.migration.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = 'dictionary_expressions'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.TEXT,\n      allowNull: false //unique:true\n\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    sourceName: {\n      type: Sequelize.DataTypes.STRING\n    },\n    sourceLink: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    date: {\n      type: Sequelize.DataTypes.DATE\n    },\n    location: {\n      type: Sequelize.DataTypes.STRING\n    },\n    attributes: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    definition: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    usage: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    isActive: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/00_dictionary_expressions_initial.migration.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/00_dictionary_tags_initial.migration.js":
/*!********************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/00_dictionary_tags_initial.migration.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = 'dictionary_tags'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false //field:'column_name_here'\n\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/00_dictionary_tags_initial.migration.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/01_dictionary_expressions_association_authors.migration.js":
/*!***************************************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/01_dictionary_expressions_association_authors.migration.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = 'dictionary_expressions'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'authorId';\nconst foreignModelTableName = 'dictionary_authors';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignModelTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'CASCADE'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/01_dictionary_expressions_association_authors.migration.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js":
/*!***************************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = 'dictionary_expressions_tags'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    tagId: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    expressionId: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true //field:'column_name_here'\n\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/01_dictionary_nm_expressions_tags.migration.js?");

/***/ }),

/***/ "./src/apps/dictionary/migrations/x02_dictionary_tags_index_.migration.xjs":
/*!*********************************************************************************!*\
  !*** ./src/apps/dictionary/migrations/x02_dictionary_tags_index_.migration.xjs ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst tableName = '' //Should equal the one defined in models\nconst indexName = tableName + ''\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addIndex(\n    tableName,\n    {\n      name  :indexName,\n      fields:['slug', 'siteId'],\n      unique:true,\n    }\n  )\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeIndex(\n    tableName,\n    indexName,\n  )\n}\n\nmodule.exports = { up, down }\n\n\n//# sourceURL=webpack:///./src/apps/dictionary/migrations/x02_dictionary_tags_index_.migration.xjs?");

/***/ }),

/***/ "./src/apps/dictionary/models/Author.js":
/*!**********************************************!*\
  !*** ./src/apps/dictionary/models/Author.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Author extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Author.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      //type: Sequelize.DataTypes.INTEGER,\n      //autoIncrement: true,\n      primaryKey: true,\n      allowNull: false\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false //unique:true\n\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    altName: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING //unique:true\n\n    },\n    publicPicture: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    authorityLink: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    publicLink: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    description: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'DictionaryAuthor',\n    tableName: 'dictionary_authors',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  });\n\n  Author.associate = models => {};\n\n  return Author; //Author.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/models/Author.js?");

/***/ }),

/***/ "./src/apps/dictionary/models/Expression.js":
/*!**************************************************!*\
  !*** ./src/apps/dictionary/models/Expression.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Expression extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Expression.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      //type: Sequelize.DataTypes.INTEGER,\n      //autoIncrement: true,\n      primaryKey: true,\n      allowNull: false\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT,\n      allowNull: false //unique:true\n\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    sourceName: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    sourceLink: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    date: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.DATE,\n      get: function (fieldName) {\n        return Number(this.getDataValue(fieldName));\n      }\n    },\n    location: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    attributes: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    definition: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    usage: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    isActive: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      defaultValue: false,\n      allowNull: false\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'DictionaryExpression',\n    tableName: 'dictionary_expressions',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  });\n\n  Expression.associate = models => {\n    Expression.belongsTo(models.DictionaryAuthor, {\n      as: 'author',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'authorId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID\n      },\n      onDelete: 'CASCADE' //RESTRICT, SET_NULL, CASCADE, SET DEFAULT\n\n    });\n    models.DictionaryAuthor.hasMany(Expression, {\n      as: 'expressions',\n      targetKey: 'expression',\n      foreignKey: {\n        name: 'authorId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID //allowNull:false\n\n      },\n      onDelete: 'CASCADE' //RESTRICT, SET_NULL, CASCADE, SET DEFAULT\n      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT\n\n    }); //this will give a foreign key to user here, and make it available from here\n\n    models.DictionaryTag.belongsToMany(Expression, {\n      as: 'expressions',\n      through: 'dictionary_expressions_tags',\n      foreignKey: {\n        name: 'expressionId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID\n      },\n      otherKey: {\n        name: 'tagId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID\n      }\n    });\n    Expression.belongsToMany(models.DictionaryTag, {\n      as: 'tags',\n      through: 'dictionary_expressions_tags',\n      foreignKey: {\n        name: 'tagId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID\n      },\n      otherKey: {\n        name: 'expressionId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Sequelize.DataTypes.UUID\n      }\n    });\n  };\n\n  return Expression; //Expression.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/models/Expression.js?");

/***/ }),

/***/ "./src/apps/dictionary/models/Tag.js":
/*!*******************************************!*\
  !*** ./src/apps/dictionary/models/Tag.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Tag extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Tag.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      //type: Sequelize.DataTypes.INTEGER,\n      //autoIncrement: true,\n      primaryKey: true,\n      allowNull: false\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false //field:'column_name_here'\n\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'DictionaryTag',\n    tableName: 'dictionary_tags',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  });\n\n  Tag.associate = models => {};\n\n  return Tag; //Tag.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/models/Tag.js?");

/***/ }),

/***/ "./src/apps/dictionary/models/index.js":
/*!*********************************************!*\
  !*** ./src/apps/dictionary/models/index.js ***!
  \*********************************************/
/*! exports provided: DictionaryExpression, DictionaryAuthor, DictionaryTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expression */ \"./src/apps/dictionary/models/Expression.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DictionaryExpression\", function() { return _Expression__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Author */ \"./src/apps/dictionary/models/Author.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DictionaryAuthor\", function() { return _Author__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tag */ \"./src/apps/dictionary/models/Tag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DictionaryTag\", function() { return _Tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/dictionary/models/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/resolvers/Author.js":
/*!*************************************************!*\
  !*** ./src/apps/dictionary/resolvers/Author.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addDictionaryAuthor(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"AuthorController\"].add(r, a), c.user);\n    },\n\n    async deleteDictionaryAuthor(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"AuthorController\"].del(r, a), c.user);\n    },\n\n    async updateDictionaryAuthor(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"AuthorController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allDictionaryAuthors(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"AuthorController\"].all(r, a), c.user); //return su(DictionaryAuthorController.paginated(r, a), c.user)\n    },\n\n    getDictionaryAuthor(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"AuthorController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/resolvers/Author.js?");

/***/ }),

/***/ "./src/apps/dictionary/resolvers/Expression.js":
/*!*****************************************************!*\
  !*** ./src/apps/dictionary/resolvers/Expression.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addDictionaryExpression(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ExpressionController\"].add(r, a), c.user);\n    },\n\n    async deleteDictionaryExpression(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ExpressionController\"].del(r, a), c.user);\n    },\n\n    async updateDictionaryExpression(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ExpressionController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allDictionaryExpressions(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ExpressionController\"].all(r, a), c.user); //return su(DictionaryExpressionController.paginated(r, a), c.user)\n    },\n\n    getDictionaryExpression(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"ExpressionController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/resolvers/Expression.js?");

/***/ }),

/***/ "./src/apps/dictionary/resolvers/Tag.js":
/*!**********************************************!*\
  !*** ./src/apps/dictionary/resolvers/Tag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addDictionaryTag(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TagController\"].add(r, a), c.user);\n    },\n\n    async deleteDictionaryTag(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TagController\"].del(r, a), c.user);\n    },\n\n    async updateDictionaryTag(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TagController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allDictionaryTags(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TagController\"].all(r, a), c.user); //return su(DictionaryTagController.paginated(r, a), c.user)\n    },\n\n    getDictionaryTag(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"TagController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/resolvers/Tag.js?");

/***/ }),

/***/ "./src/apps/dictionary/resolvers/index.js":
/*!************************************************!*\
  !*** ./src/apps/dictionary/resolvers/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/apps/dictionary/resolvers/Tag.js\");\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Author */ \"./src/apps/dictionary/resolvers/Author.js\");\n/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Expression */ \"./src/apps/dictionary/resolvers/Expression.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Author__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Expression__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/dictionary/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/Author.test.js":
/*!**************************************************!*\
  !*** ./src/apps/dictionary/tests/Author.test.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators */ \"./src/apps/dictionary/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DictionaryAuthor;\ndescribe('Dictionary -> Author Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n   describe('Mhodel -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n   afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Dictionary -> Author Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"AuthorController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"AuthorController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"AuthorController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"AuthorController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const success = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"AuthorController\"].delete({}, {\n        id\n      });\n      assert(success === id, `The controller should respond ${id} to the deletion command`);\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/Author.test.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/Expression.test.js":
/*!******************************************************!*\
  !*** ./src/apps/dictionary/tests/Expression.test.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators */ \"./src/apps/dictionary/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DictionaryExpression; //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestAuthor\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DictionaryAuthor,\n  foreignKey: 'authorId',\n  references: 'id',\n  as: 'author'\n};\ndescribe('Dictionary -> Expression Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n   describe('Model -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n   afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Dictionary -> Expression Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for, with no association', async function () {\n      // NOTE for date comparison in deep include with the raw func, we need to generate date in the TW format using new Date() instead of Date.now()\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        date: new Date()\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        date: new Date()\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n      //expect(records[0]).to.deep.include(data1)\n      //expect(records[1]).to.deep.include(data2)\n\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instFM_A2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        date: new Date(),\n        [FM_A.foreignKey]: instFM_A_A1[FM_A.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        date: new Date(),\n        [FM_A.foreignKey]: instFM_A_A2[FM_A.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n      //expect(records[0]).to.deep.include(data1)\n      //expect(records[1]).to.deep.include(data2)\n\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A_A1.dataValues\n      });\n      expect(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A_A2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A_A1.destroy();\n      instFM_A_A2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestExpression\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const success = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"ExpressionController\"].delete({}, {\n        id\n      });\n      assert(success === id, `The controller should respond ${id} to the deletion command`);\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/Expression.test.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/Tag.test.js":
/*!***********************************************!*\
  !*** ./src/apps/dictionary/tests/Tag.test.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers */ \"./src/apps/dictionary/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generators */ \"./src/apps/dictionary/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_3__[\"default\"].DictionaryTag;\ndescribe('Dictionary -> Tag Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n   describe('Model -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n   afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Dictionary -> Tag Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TagController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TagController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TagController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TagController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestTag\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const success = await _controllers__WEBPACK_IMPORTED_MODULE_2__[\"TagController\"].delete({}, {\n        id\n      });\n      assert(success === id, `The controller should respond ${id} to the deletion command`);\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/Tag.test.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/generators/Author.js":
/*!********************************************************!*\
  !*** ./src/apps/dictionary/tests/generators/Author.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"name\"].findName(),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"name\"].findName().toLowerCase()),\n    altName: faker__WEBPACK_IMPORTED_MODULE_0__[\"name\"].findName(),\n    publicPicture: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].url(),\n    authorityLink: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].url(),\n    publicLink: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].url(),\n    description: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(5),\n    data: {\n      content: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      otherKey: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/generators/Author.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/generators/Expression.js":
/*!************************************************************!*\
  !*** ./src/apps/dictionary/tests/generators/Expression.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName(),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName().toLowerCase()),\n    sourceName: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(),\n    sourceLink: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].url(),\n    date: Date.now(),\n    location: faker__WEBPACK_IMPORTED_MODULE_0__[\"address\"].country(),\n    attributes: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(),\n    definition: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(5),\n    usage: faker__WEBPACK_IMPORTED_MODULE_0__[\"lorem\"].paragraph(5),\n    isActive: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    data: {\n      content: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      otherKey: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}, generateForeignModels = false) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/generators/Expression.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/generators/Tag.js":
/*!*****************************************************!*\
  !*** ./src/apps/dictionary/tests/generators/Tag.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8).toLowerCase()),\n    data: {\n      content: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      otherKey: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/generators/Tag.js?");

/***/ }),

/***/ "./src/apps/dictionary/tests/generators/index.js":
/*!*******************************************************!*\
  !*** ./src/apps/dictionary/tests/generators/index.js ***!
  \*******************************************************/
/*! exports provided: generateTestAuthor, generateTestExpression, generateTestTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Author */ \"./src/apps/dictionary/tests/generators/Author.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestAuthor\", function() { return _Author__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expression */ \"./src/apps/dictionary/tests/generators/Expression.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestExpression\", function() { return _Expression__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tag */ \"./src/apps/dictionary/tests/generators/Tag.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestTag\", function() { return _Tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/dictionary/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/dictionary/types/Author.graphql":
/*!**************************************************!*\
  !*** ./src/apps/dictionary/types/Author.graphql ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.4.6 \\n| extend type Query {\\n|   allDictionaryAuthors: [DictionaryAuthor]\");\n\n//# sourceURL=webpack:///./src/apps/dictionary/types/Author.graphql?");

/***/ }),

/***/ "./src/apps/dictionary/types/Expression.graphql":
/*!******************************************************!*\
  !*** ./src/apps/dictionary/types/Expression.graphql ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.4.6 \\n| extend type Query {\\n|   allDictionaryExpressions: [DictionaryExpression]\");\n\n//# sourceURL=webpack:///./src/apps/dictionary/types/Expression.graphql?");

/***/ }),

/***/ "./src/apps/dictionary/types/Tag.graphql":
/*!***********************************************!*\
  !*** ./src/apps/dictionary/types/Tag.graphql ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.4.6 \\n| extend type Query {\\n|   allDictionaryTags: [DictionaryTag]\");\n\n//# sourceURL=webpack:///./src/apps/dictionary/types/Tag.graphql?");

/***/ }),

/***/ "./src/apps/dictionary/types/_stitch.graphql":
/*!***************************************************!*\
  !*** ./src/apps/dictionary/types/_stitch.graphql ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> extend input DictionaryExpressionInput {\\n|   authorId:ID\\n| }\");\n\n//# sourceURL=webpack:///./src/apps/dictionary/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/dictionary/types/index.js":
/*!********************************************!*\
  !*** ./src/apps/dictionary/types/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Tag.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 2.4.6 */\nconst TagTypes = \"# @fwrlines/generator-graphql-server-type 2.4.6 \\nextend type Query {\\n  allDictionaryTags: [DictionaryTag]\\n  getDictionaryTag(id: ID!): DictionaryTag!\\n  #paginatedDictionaryTag (page:Int, category: String):PaginatedDictionaryTags\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addDictionaryTag(input:DictionaryTagInput!): DictionaryTag!\\n  updateDictionaryTag(id: ID!, input: DictionaryTagInput!): DictionaryTag!\\n  deleteDictionaryTag(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput DictionaryTagInput {\\n  name:String\\n  slug:String\\n}\\n\\ntype DictionaryTag {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  #data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedDictionaryTags {\\n#  docs: [DictionaryTag]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './Author.graphql' */\nconst AuthorTypes = \"# @fwrlines/generator-graphql-server-type 2.4.6 \\nextend type Query {\\n  allDictionaryAuthors: [DictionaryAuthor]\\n  getDictionaryAuthor(id: ID!): DictionaryAuthor!\\n  #paginatedDictionaryAuthor (page:Int, category: String):PaginatedDictionaryAuthors\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addDictionaryAuthor(input:DictionaryAuthorInput!): DictionaryAuthor!\\n  updateDictionaryAuthor(id: ID!, input: DictionaryAuthorInput!): DictionaryAuthor!\\n  deleteDictionaryAuthor(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput DictionaryAuthorInput {\\n  name:String\\n  slug:String\\n  altName:String\\n  publicPicture:String\\n  authorityLink:String\\n  publicLink:String\\n  description:String\\n  #data:String\\n  }\\n\\ntype DictionaryAuthor {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  altName:String\\n  publicPicture:String\\n  authorityLink:String\\n  publicLink:String\\n  description:String\\n  #data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedDictionaryAuthors {\\n#  docs: [DictionaryAuthor]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './Expression.graphql' */\nconst ExpressionTypes = \"# @fwrlines/generator-graphql-server-type 2.4.6 \\nextend type Query {\\n  allDictionaryExpressions: [DictionaryExpression]\\n  getDictionaryExpression(id: ID!): DictionaryExpression!\\n  #paginatedDictionaryExpression (page:Int, category: String):PaginatedDictionaryExpressions\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addDictionaryExpression(input:DictionaryExpressionInput!): DictionaryExpression!\\n  updateDictionaryExpression(id: ID!, input: DictionaryExpressionInput!): DictionaryExpression!\\n  deleteDictionaryExpression(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput DictionaryExpressionInput {\\n  name:String\\n  slug:String\\n  sourceName:String\\n  sourceLink:String\\n  date:Float\\n  location:String\\n  attributed:String\\n  definition:String\\n  usage:String\\n  isActive:Boolean\\n  #data:String\\n  }\\n\\ntype DictionaryExpression {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  sourceName:String\\n  sourceLink:String\\n  date:Float\\n  location:String\\n  attributed:String\\n  definition:String\\n  usage:String\\n  isActive:Boolean!\\n  #data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedDictionaryExpressions {\\n#  docs: [DictionaryExpression]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"extend input DictionaryExpressionInput {\\n  authorId:ID\\n}\\n\\nextend type DictionaryExpression {\\n  authorId:ID\\n  author:DictionaryAuthor\\n}\\n\\nextend type DictionaryAuthor {\\n  expressions:[DictionaryExpression]\\n}\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([TagTypes, AuthorTypes, ExpressionTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/dictionary/types/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/controllers/Setter.js":
/*!***********************************************!*\
  !*** ./src/apps/oauth2/controllers/Setter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OAuth2Setter;\n\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  },\n  login: async (root, {\n    authorization_code\n  }) => {\n    const item = await Model.findOne({\n      where: {\n        code: authorization_code\n      },\n      include: {\n        all: true\n      },\n      plain: true\n    });\n\n    if (item && item.login()) {\n      if (item.user.canLogIn()) {\n        const token = await item.user.getAuthToken();\n        item.destroy();\n        return token;\n      }\n    }\n\n    throw new _utils__WEBPACK_IMPORTED_MODULE_1__[\"ValidationError\"]({\n      message: 'Incorrect credentials'\n    }); //User not found\n  },\n  clean: () => Model.clean()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/oauth2/controllers/Setter.js?");

/***/ }),

/***/ "./src/apps/oauth2/controllers/index.js":
/*!**********************************************!*\
  !*** ./src/apps/oauth2/controllers/index.js ***!
  \**********************************************/
/*! exports provided: OAuth2SetterController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Setter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter */ \"./src/apps/oauth2/controllers/Setter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OAuth2SetterController\", function() { return _Setter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/controllers/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/dependencies.json":
/*!*******************************************!*\
  !*** ./src/apps/oauth2/dependencies.json ***!
  \*******************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"auth\\\"]\");\n\n//# sourceURL=webpack:///./src/apps/oauth2/dependencies.json?");

/***/ }),

/***/ "./src/apps/oauth2/index.js":
/*!**********************************!*\
  !*** ./src/apps/oauth2/index.js ***!
  \**********************************/
/*! exports provided: dependencies, types, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/apps/oauth2/models/index.js\");\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/oauth2/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/oauth2/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./src/apps/oauth2/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/oauth2/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n //export { models }\n\n//# sourceURL=webpack:///./src/apps/oauth2/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/migrations/00_oauth2_profiles_initial.migration.js":
/*!****************************************************************************!*\
  !*** ./src/apps/oauth2/migrations/00_oauth2_profiles_initial.migration.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'oauth2_profiles'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n\n    /*\n    accessToken:{\n      type:Sequelize.DataTypes.STRING\n    },\n    */\n    refreshToken: {\n      type: Sequelize.DataTypes.STRING\n    },\n    provider: {\n      type: Sequelize.DataTypes.STRING\n    },\n    picture: {\n      type: Sequelize.DataTypes.TEXT\n    },\n    scope: {\n      type: Sequelize.DataTypes.STRING\n    },\n    locale: {\n      type: Sequelize.DataTypes.STRING\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING\n    },\n    email: {\n      type: Sequelize.DataTypes.STRING\n    },\n    emailVerified: {\n      type: Sequelize.DataTypes.BOOLEAN\n    },\n    expires: {\n      type: Sequelize.DataTypes.DATE\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/oauth2/migrations/00_oauth2_profiles_initial.migration.js?");

/***/ }),

/***/ "./src/apps/oauth2/migrations/00_oauth2_setters_initial.migration.js":
/*!***************************************************************************!*\
  !*** ./src/apps/oauth2/migrations/00_oauth2_setters_initial.migration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'oauth2_setters'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    expires: {\n      type: Sequelize.DataTypes.DATE\n    },\n    useToLogin: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    code: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    provider: {\n      type: Sequelize.DataTypes.STRING\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/oauth2/migrations/00_oauth2_setters_initial.migration.js?");

/***/ }),

/***/ "./src/apps/oauth2/migrations/01_oauth2_profiles_association_users.migration.js":
/*!**************************************************************************************!*\
  !*** ./src/apps/oauth2/migrations/01_oauth2_profiles_association_users.migration.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'oauth2_profiles'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'userId';\nconst foreignKeyTableName = 'users';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignKeyTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'CASCADE'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/oauth2/migrations/01_oauth2_profiles_association_users.migration.js?");

/***/ }),

/***/ "./src/apps/oauth2/migrations/01_oauth2_setters_association_users.migration.js":
/*!*************************************************************************************!*\
  !*** ./src/apps/oauth2/migrations/01_oauth2_setters_association_users.migration.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'oauth2_setters'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'userId';\nconst foreignKeyTableName = 'users';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignKeyTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'CASCADE'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/oauth2/migrations/01_oauth2_setters_association_users.migration.js?");

/***/ }),

/***/ "./src/apps/oauth2/models/Profile.js":
/*!*******************************************!*\
  !*** ./src/apps/oauth2/models/Profile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Profile extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {}\n\n  Profile.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n\n    /*\n    accessToken:{\n      type:Sequelize.DataTypes.STRING\n    },\n    */\n    refreshToken: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    picture: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.TEXT\n    },\n    provider: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    scope: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    locale: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    email: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    emailVerified: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      defaultValue: false\n    },\n    expires: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.DATE\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['provider', 'email', 'id']),\n      get: function () {\n        return this.get('email') ? `${this.get('provider')}/${this.get('email')}` : `${this.get('provider')}/${this.get('id').slice(8)}`;\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'OAuth2Profile',\n    tableName: 'oauth2_profiles',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //freezeTableName: true\n\n  });\n\n  Profile.associate = models => {\n    //reverse association to keep this package independent from auth\n    models.User.hasMany(Profile, {\n      as: 'oAuth2Profiles',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    });\n    Profile.belongsTo(models.User, {\n      as: 'user',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    });\n  };\n\n  return Profile;\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/models/Profile.js?");

/***/ }),

/***/ "./src/apps/oauth2/models/Setter.js":
/*!******************************************!*\
  !*** ./src/apps/oauth2/models/Setter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.3.1 */\n\n\n\nconst getDefaultExpireTime = () => Date.now() + (Number(process.env.TIME_TO_LOGIN) || 120) * 1000;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Setter extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    static clean() {\n      this.destroy({\n        where: {\n          expires: {\n            [sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].Op.lte]: Date.now()\n          }\n        }\n      });\n    }\n\n    async login() {\n      //console.log(this)\n      if (this.isValid && this.useToLogin) {\n        this.useToLogin = false;\n        await this.save();\n        return true;\n      }\n\n      return false;\n    }\n    /*\n    static classLevelMethod() {\n    }\n    */\n\n\n  }\n\n  Setter.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    expires: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.DATE,\n      defaultValue: getDefaultExpireTime\n    },\n    useToLogin: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    code: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      defaultValue: () => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomString\"])(64),\n      unique: true\n    },\n    provider: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    isValid: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN, 'expires'),\n\n      get() {\n        return this.get('expires') >= Date.now();\n      }\n\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['id']),\n      get: function () {\n        return this.get('id').slice(8);\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'OAuth2Setter',\n    tableName: 'oauth2_setters',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt'\n  });\n\n  Setter.associate = models => {\n    models.User.hasMany(Setter, {\n      as: 'oAuth2Setters',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    });\n    Setter.belongsTo(models.User, {\n      as: 'user',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'userId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    });\n  };\n\n  return Setter;\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/models/Setter.js?");

/***/ }),

/***/ "./src/apps/oauth2/models/index.js":
/*!*****************************************!*\
  !*** ./src/apps/oauth2/models/index.js ***!
  \*****************************************/
/*! exports provided: OAuth2Setter, OAuth2Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Setter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter */ \"./src/apps/oauth2/models/Setter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OAuth2Setter\", function() { return _Setter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile */ \"./src/apps/oauth2/models/Profile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OAuth2Profile\", function() { return _Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/models/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/resolvers/Setter.js":
/*!*********************************************!*\
  !*** ./src/apps/oauth2/resolvers/Setter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/oauth2/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addSetter(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"OAuth2SetterController\"].add(r, a), c.user);\n    },\n\n    async deleteSetter(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"OAuth2SetterController\"].del(r, a), c.user);\n    },\n\n    async updateSetter(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"OAuth2SetterController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allSetters(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"OAuth2SetterController\"].all(r, a), c.user); //return su(SetterController.paginated(r, a), c.user)\n    },\n\n    getSetter(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"OAuth2SetterController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/resolvers/Setter.js?");

/***/ }),

/***/ "./src/apps/oauth2/resolvers/index.js":
/*!********************************************!*\
  !*** ./src/apps/oauth2/resolvers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/apps/oauth2/resolvers/main.js\");\n/* harmony import */ var _Setter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setter */ \"./src/apps/oauth2/resolvers/Setter.js\");\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Setter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/oauth2/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/resolvers/main.js":
/*!*******************************************!*\
  !*** ./src/apps/oauth2/resolvers/main.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strategies */ \"./src/apps/oauth2/strategies/index.js\");\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/oauth2/controllers/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.1.2 */\n\n\n/*\nimport { \n  suMethod as su,\n  userMethod as um,\n} from 'utils'\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async oAuth2Login(r, a) {\n      return await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].login(r, a);\n    }\n\n  },\n  Query: {\n    async oAuth2Google(r, a, c) {\n      _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].clean();\n      const manager = new _strategies__WEBPACK_IMPORTED_MODULE_0__[\"GoogleAccessManager\"]();\n      return manager.getAuthorizationUri();\n    }\n    /*\n    async oAuth2GoogleForMe(r, a, c) {\n      const respond = () => {\n        const manager = new GoogleManager()\n    \n        const setter = await MainController.add(r, { \n          provider: 'google' , userId:c.user.id)\n        })\n         return manager.getAuthorizationUri(setter.id)// use context if you want to restrict the usage\n      }\n      return um(respond, c.user)\n    }\n    */\n\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/resolvers/main.js?");

/***/ }),

/***/ "./src/apps/oauth2/router.js":
/*!***********************************!*\
  !*** ./src/apps/oauth2/router.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategies */ \"./src/apps/oauth2/strategies/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/apps/oauth2/utils/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ \"./src/models.js\");\n\n\n\nconst OAuth2ProfileModel = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].OAuth2Profile;\nconst SetterModel = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].OAuth2Setter;\nconst UserModel = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].User;\n\nconst callbacks = __webpack_require__(/*! express */ \"express\").Router();\n\nconst OAUTH2_CLIENT_URL = process.env.OAUTH2_CLIENT_URL;\nconst IS_SIGNUP_ALLOWED = process.env.AUTH_SIGNUP_ENABLED === 'true';\nconst redirectUrlMap = {\n  unauthorized: () => `${OAUTH2_CLIENT_URL}/unauthorized`,\n  google: {\n    unauthorized: () => `${OAUTH2_CLIENT_URL}/unauthorized`,\n    authorized: authorizationCode => `${OAUTH2_CLIENT_URL}/redeem/${authorizationCode}`\n  }\n};\ncallbacks.get('/:setter/callback', async (req, res) => {\n  const {\n    state,\n    scope,\n    code: authorizationCode\n  } = req.query;\n  /*\n  //Req Query looks like :\n  {\n    code: '4/0QEIn7aBZTytXqgh-o0qqLn3LA_VtbCtF-euQhD_SDCvR8TAGnN0A7MCldzL3rDxxxxxxxxxxxxxxxxxxxx_dek',\n    scope: 'email profile https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile',\n    authuser: '0',\n    hd: 'fwrlines.com',\n    prompt: 'none'\n    state:'The state passed previously'\n  }\n  */\n  //console.log(99999, req.query)\n\n  if (!(scope && authorizationCode)) {\n    res.status(400).send('Bad request');\n  }\n\n  var provider;\n\n  if (req.params.setter === 'google') {\n    provider = 'google'; // 1. We arrived here because Google redirected the user to this callback after a successful login on their prompt\n\n    const accessManager = new _strategies__WEBPACK_IMPORTED_MODULE_0__[\"GoogleAccessManager\"]({\n      state,\n      authorizationCode\n    });\n    await accessManager.init(); // 2. We exchange the auth code for a refresh and an access token.\n    //    The refresh token is only issued if access_type is offline and prompt = consent\n\n    const {\n      access_token,\n      refresh_token,\n      scope\n    } = await accessManager.redeemTokensFromAuthCode(); // 3. We instantiate a Google API class with the access token to access further data.\n    //    We GET the user profile profile\n\n    const api = new _utils__WEBPACK_IMPORTED_MODULE_1__[\"GoogleAPI\"](access_token);\n    const profile = await api.getProfile();\n    const email = profile.email;\n    console.log(profile); // 4. We test whether there is already a OAuth2 Profile with this email\n\n    const existingProfile = await OAuth2ProfileModel.findOne({\n      where: {\n        email,\n        provider\n      },\n      include: {\n        all: true\n      }\n    }); // 5. We are in the case of the user not being connected. So we try to log him in, or to create an account\n\n    if (existingProfile) {\n      // 5.1 We update the oAuth profile\n      console.log('5.1 existing profile', existingProfile);\n      const updatedProfile = {\n        scope,\n        refreshToken: refresh_token,\n        name: profile.name,\n        emailVerified: profile.email_verified,\n        locale: profile.locale,\n        picture: profile.picture\n      };\n      await OAuth2ProfileModel.update(updatedProfile, {\n        where: {\n          id: existingProfile.id\n        }\n      });\n      const updatedUser = {\n        firstName: profile.given_name,\n        lastName: profile.family_name\n      };\n      const updated = await UserModel.update(updatedUser, {\n        where: {\n          id: existingProfile.user.id\n        },\n        returning: true\n      });\n      const inst = updated[1][0];\n\n      if (inst.canLogIn()) {\n        const setter = await SetterModel.create({\n          userId: inst.id,\n          useToLogin: true,\n          provider\n        });\n        res.redirect(redirectUrlMap.google.authorized(setter.code));\n      }\n\n      res.redirect(redirectUrlMap.google.unauthorized());\n    } else {\n      // 5.2 We check whether a user with the same email exists\n      const existingUser = await UserModel.findOne({\n        where: {\n          email\n        }\n      });\n\n      if (existingUser) {\n        // 5.2.1 We create an oAuth2 profile for this user \n        console.log('5.2.1 User without profile', existingUser);\n        const newProfile = {\n          provider,\n          scope,\n          email,\n          refreshToken: refresh_token,\n          name: profile.name,\n          emailVerified: profile.email_verified,\n          locale: profile.locale,\n          userId: existingUser.id,\n          picture: profile.picture\n        };\n        await OAuth2ProfileModel.create(newProfile);\n        const updatedUser = {\n          firstName: profile.given_name,\n          lastName: profile.family_name,\n          emailVerified: profile.email_verified\n        };\n        const updated = await UserModel.update(updatedUser, {\n          where: {\n            id: existingUser.id\n          },\n          returning: true\n        });\n        const inst = updated[1][0];\n\n        if (inst.canLogIn()) {\n          const setter = await SetterModel.create({\n            userId: inst.id,\n            useToLogin: true,\n            provider\n          });\n          res.redirect(redirectUrlMap.google.authorized(setter.code));\n        }\n\n        res.redirect(redirectUrlMap.google.unauthorized());\n      } else {\n        // 5.2.2 If signup is permitted, we create a new user\n        if (IS_SIGNUP_ALLOWED) {\n          console.log('5.2.2 signup');\n          const newProfile = {\n            provider,\n            scope,\n            email,\n            refreshToken: refresh_token,\n            name: profile.name,\n            emailVerified: profile.email_verified,\n            locale: profile.locale,\n            picture: profile.picture\n          };\n          const newUser = {\n            email,\n            emailVerified: profile.email_verified,\n            firstName: profile.given_name,\n            lastName: profile.family_name,\n            isActive: true\n          };\n          const inst = await UserModel.create(newUser);\n          newProfile.userId = inst.id;\n          await OAuth2ProfileModel.create(newProfile);\n\n          if (inst.canLogIn()) {\n            const setter = await SetterModel.create({\n              userId: inst.id,\n              useToLogin: true,\n              provider\n            });\n            res.redirect(redirectUrlMap.google.authorized(setter.code));\n          }\n\n          res.redirect(redirectUrlMap.google.unauthorized());\n        }\n\n        res.redirect(redirectUrlMap.google.unauthorized());\n      }\n    }\n\n    res.redirect(redirectUrlMap.unauthorized());\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbacks);\n\n//# sourceURL=webpack:///./src/apps/oauth2/router.js?");

/***/ }),

/***/ "./src/apps/oauth2/strategies/AccessManager.js":
/*!*****************************************************!*\
  !*** ./src/apps/oauth2/strategies/AccessManager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Manager; });\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst Setter = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Setter;\nclass Manager {\n  constructor(OAuth2ConfigurationClass = {}, context = {}) {\n    // 1. We keep the configuration class to store constants and static methods based on them\n    this.Config = OAuth2ConfigurationClass; // 2. We keep an object to hold state-related variables of the OAuth Manager\n    // For instance `state`, `authorizationCode`, `refreshToken`\n\n    this.context = context; // 3. We keep the data we will receive in the future in an object\n\n    this.data = {};\n  } // \n  // 0. Helper init method, because async\n  //\n\n\n  async init() {\n    // We use this method for the instantiation because we need to async / await the setter association\n    // 1. In case the Manager is inited with state, we find the setter associated with it. This will give us access to the user we're working with\n    const state = this.context.state;\n\n    if (this.context.state) {\n      this.context.setter = await Setter.findOne({\n        include: {\n          all: true\n        },\n        where: {\n          code: state\n        }\n      });\n    }\n  } //\n  // 1. METHODS RELATED TO THE RETRIEVAL OF THE AUTHORIZATION URL\n  //\n\n\n  getAuthorizeParameters(state) {\n    // We delegate this method to the Configuration class as it's more closely tied to the provider than the oauth logic\n    return this.Config.getAuthorizeParameters(state);\n  }\n\n  getAuthorizationUri(state) {\n    const queryString = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(this.getAuthorizeParameters(state)).replace(/%2B/g, '+');\n    return this.Config.service.authorizeFullPath + '?' + queryString;\n  } //\n  // 2. METHODS RELATED TO GETTING THE ACCESS TOKEN\n  // CURRENTLY WE ONLY IMPLEMENT THE 'BIGGEST' ONE, WHICH IS THE EXCHANGE OF THE AUTH CODE FOR BOTH ACCESS AND REFRESH\n  // THE METHOD CALLED AMONG THESE SHOULD SAVE IN this.data THE access_token\n  // \n\n  /* UNTESTED\n  getTokensFromRefreshTokenParameters() {\n    const serviceConfig = this.Config.service\n    return {\n      grant_type:'refresh_token',\n       refresh_token :this.context.refreshToken,\n      state:this.context.state,\n       redirect_uri :serviceConfig.authorizeRedirectUri, //Unsure whether this is actually used. Anyways its the same as in Config = getAuthorizeParameters\n      client_id    :serviceConfig.clientId,\n      client_secret:serviceConfig.clientSecret,\n      scope        :(typeof(serviceConfig.scope) === 'object') ?\n        serviceConfig.scope.join(' ') :\n        serviceConfig.scope,\n    }\n  }\n  \n  async redeemTokensFromRefreshToken() {\n    const options = {\n      method:'POST',\n      uri   :this.Config.endpoints.POST.getToken(),\n      json  :true,\n      body  :this.getRedeemTokenFromAuthCodeParameters() \n    }\n    const res = await rp(options)\n     const {\n      access_token,\n      refresh_token,\n      token_type,\n      id_token,\n      scope,\n    } =  res\n     // We dont save the expiration because we can regenerate later, if needed, access tokens using the refresh token\n     this.data = {\n      ...this.data, //should be empty if this is the first method we call\n      token_type,\n      id_token,\n      access_token,\n      refresh_token,\n      scope,\n    }\n   }\n  */\n\n\n  getTokensFromAuthCodeParameters() {\n    const serviceConfig = this.Config.service;\n    return {\n      grant_type: 'authorization_code',\n      code: this.context.authorizationCode,\n      state: this.context.state,\n      redirect_uri: serviceConfig.authorizeRedirectUri,\n      //Unsure whether this is actually used. Anyways its the same as in Config = getAuthorizeParameters\n      client_id: serviceConfig.clientId,\n      client_secret: serviceConfig.clientSecret,\n      scope: typeof serviceConfig.scope === 'object' ? serviceConfig.scope.join(' ') : serviceConfig.scope\n    };\n  }\n\n  async redeemTokensFromAuthCode() {\n    const options = {\n      method: 'POST',\n      uri: this.Config.endpoints.POST.getToken(),\n      json: true,\n      body: this.getTokensFromAuthCodeParameters()\n    };\n    const res = await request_promise__WEBPACK_IMPORTED_MODULE_0___default()(options); //console.log(6667788, 'got this back sb refresh t', res)\n\n    /* IF we configured everything properly, namely offline access, and prompting user for consent, we should get both an access and a refresh token like this. Here is an example of the answer\n    res = {\n      access_token: 'ya29.a0AfH6SMCOSbtXrc3ezyD-usm-',\n      expires_in: 3599,\n      refresh_token: '1//09EPFmV1mNNeKCgYIARAAGAkSNwF',\n      scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',\n      token_type: 'Bearer',\n      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZiOGNhNWI3ZDhkOWE1YzZjNjc4ODA3MWU4NjZjNmM0MGYzZmMxZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5j\n    }\n    */\n\n    const {\n      access_token,\n      refresh_token,\n      token_type,\n      id_token,\n      scope\n    } = res; // We dont save the expiration because we can regenerate later, if needed, access tokens using the refresh token\n\n    this.data = { ...this.data,\n      //should be empty if this is the first method we call\n      token_type,\n      id_token,\n      access_token,\n      refresh_token,\n      scope\n    };\n    return {\n      access_token,\n      refresh_token,\n      scope,\n      token_type\n    }; //We also return it sso we can use the AT to instantiate the user api\n  } // \n  // 3. LIFECYCLE METHODS\n  //\n\n\n  async revokeToken(token) {\n    return await request_promise__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: 'GET',\n      url: this.Conf.endpoints.GET.revokeToken(token)\n    });\n  }\n\n}\n\n_defineProperty(Manager, \"strategy\", {\n  signupAllowed: process.env.SIGNUP === 'true'\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/strategies/AccessManager.js?");

/***/ }),

/***/ "./src/apps/oauth2/strategies/Google/AccessManager.js":
/*!************************************************************!*\
  !*** ./src/apps/oauth2/strategies/Google/AccessManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoogleManager; });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"./src/apps/oauth2/strategies/Google/Config.js\");\n/* harmony import */ var _AccessManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AccessManager */ \"./src/apps/oauth2/strategies/AccessManager.js\");\n\n\nclass GoogleManager extends _AccessManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(context) {\n    super(_Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"], context);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/apps/oauth2/strategies/Google/AccessManager.js?");

/***/ }),

/***/ "./src/apps/oauth2/strategies/Google/Config.js":
/*!*****************************************************!*\
  !*** ./src/apps/oauth2/strategies/Google/Config.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Config; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst scope = ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email' //'https://www.googleapis.com/auth/drive.appdata', //RWD GDrive Conf\n//'https://www.googleapis.com/auth/drive', //RWD GDrive\n//'https://www.googleapis.com/auth/drive.file', //RWD AppFiles in GDrive (lower permission lvlv)\n//'https://www.googleapis.com/auth/drive.metadata'\n];\nconst endpoints = {\n  GET: {\n    revokeToken: t => `https://accounts.google.com/o/oauth2/revoke?token=${t}`\n  },\n  POST: {\n    getToken: () => 'https://oauth2.googleapis.com/token'\n  }\n};\nclass Config {}\n\n_defineProperty(Config, \"name\", 'google');\n\n_defineProperty(Config, \"service\", {\n  clientId: process.env.OAUTH2_GOOGLE_CLIENT,\n  clientSecret: process.env.OAUTH2_GOOGLE_SECRET,\n  authorizeFullPath: 'https://accounts.google.com/o/oauth2/auth',\n  accessType: 'offline',\n  //'offline',\n  authorizeRedirectUri: `${process.env.OAUTH2_GOOGLE_HOST_AUTHORIZE}/auth/google/callback`,\n  scope\n});\n\n_defineProperty(Config, \"endpoints\", endpoints);\n\n_defineProperty(Config, \"getAuthorizeParameters\", function (state) {\n  //We return the GET parameters passed appended the the authorization uri, which will generate the user prompt page\n  //https://developers.google.com/identity/protocols/oauth2/web-server#httprest\n  const {\n    clientId: client_id,\n    authorizeRedirectUri: redirect_uri,\n    scope,\n    accessType: access_type\n  } = this.service;\n  return {\n    client_id,\n    redirect_uri,\n    access_type,\n    scope: typeof scope === 'object' ? scope.join('+') : scope,\n    response_type: 'code',\n    prompt: 'consent',\n    // to make sure a refresh token is issued https://github.com/googleapis/google-api-python-client/issues/213\n    state\n  };\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/strategies/Google/Config.js?");

/***/ }),

/***/ "./src/apps/oauth2/strategies/Google/index.js":
/*!****************************************************!*\
  !*** ./src/apps/oauth2/strategies/Google/index.js ***!
  \****************************************************/
/*! exports provided: GoogleAccessManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AccessManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessManager */ \"./src/apps/oauth2/strategies/Google/AccessManager.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GoogleAccessManager\", function() { return _AccessManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/strategies/Google/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/strategies/index.js":
/*!*********************************************!*\
  !*** ./src/apps/oauth2/strategies/index.js ***!
  \*********************************************/
/*! exports provided: AccessManager, GoogleAccessManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AccessManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessManager */ \"./src/apps/oauth2/strategies/AccessManager.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AccessManager\", function() { return _AccessManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Google */ \"./src/apps/oauth2/strategies/Google/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GoogleAccessManager\", function() { return _Google__WEBPACK_IMPORTED_MODULE_1__[\"GoogleAccessManager\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/strategies/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/tests/Setter.test.js":
/*!**********************************************!*\
  !*** ./src/apps/oauth2/tests/Setter.test.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/oauth2/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators */ \"./src/apps/oauth2/tests/generators/index.js\");\n/* harmony import */ var _auth_tests_generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/tests/generators */ \"./src/apps/auth/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].OAuth2Setter; //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_auth_tests_generators__WEBPACK_IMPORTED_MODULE_5__[\"generateTestUser\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].User,\n  foreignKey: 'userId',\n  references: 'id',\n  as: 'user'\n};\ndescribe('OAuth2 -> OAuth2Setter Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Model -> Key -> Code', function () {\n    it('Default Value -> The default code is a unique 64 char string', async function () {\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const records = await Model.bulkCreate([data1, data2]);\n      const {\n        code: code1\n      } = records[0];\n      const {\n        code: code2\n      } = records[1];\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(code1).to.have.lengthOf(64);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(code2).to.have.lengthOf(64);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(code1).to.not.deep.equal(code2);\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Model -> Virtual -> IsValid', function () {\n    it('Model API -> An instance is valid ioi it expires later than now', async function () {\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        expires: Date.now() - Number(200 * 1000)\n      });\n      const records = await Model.bulkCreate([data1, data2]);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0].isValid).to.equal(true);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1].isValid).to.equal(false);\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Model -> Instance Method -> Login', function () {\n    it('Model API -> When we login a valid instance, it should be not valid anymore', async function () {\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: true\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: false\n      });\n      const data3 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: true,\n        expires: Date.now() - Number(200 * 1000)\n      });\n      const records = await Model.bulkCreate([data1, data2, data3]);\n      const [e1, e2, e3] = records; //console.log(999, records[0].isValid, records[0].useToLogin, await records[0].login())\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await e1.login())).to.equal(true);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await e2.login())).to.equal(false);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await e3.login())).to.equal(false);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])((await e1.useToLogin)).to.equal(false);\n      records.forEach(e => {\n        e.destroy();\n      });\n    });\n  });\n  describe('Model -> Class Method -> Clean', function () {\n    it('Model API -> After using the clean method, we shouldnt have any expired objects in the database', async function () {\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: true,\n        expires: Date.now() - 1\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: true,\n        expires: Date.now() - 10\n      });\n      const data3 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        useToLogin: true,\n        expires: Date.now() - Number(200 * 1000)\n      });\n      const records = await Model.bulkCreate([data1, data2, data3]);\n      const [e1, e2, e3] = records;\n      await Model.clean();\n      await Model.findByPk(e1.id);\n      const i1 = await Model.findByPk(e1.id);\n      const i2 = await Model.findByPk(e2.id);\n      const i3 = await Model.findByPk(e3.id);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(i1).to.equal(null);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(i2).to.equal(null);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(i3).to.equal(null);\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('OAuth2 -> OAuth2Setter Controller', function () {\n  /*\n  before( function(){\n   })\n   beforeEach( function(){\n   })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked fori, with no association', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instFM_A2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        [FM_A.foreignKey]: instFM_A_A1[FM_A.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        [FM_A.foreignKey]: instFM_A_A2[FM_A.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A_A1.dataValues\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A_A2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A_A1.destroy();\n      instFM_A_A2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSetter\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"OAuth2SetterController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n   })\n   after( function(){\n   })\n    */\n});\n\n//# sourceURL=webpack:///./src/apps/oauth2/tests/Setter.test.js?");

/***/ }),

/***/ "./src/apps/oauth2/tests/generators/Setter.js":
/*!****************************************************!*\
  !*** ./src/apps/oauth2/tests/generators/Setter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    provider: faker__WEBPACK_IMPORTED_MODULE_0__[\"commerce\"].product(),\n    useToLogin: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean()\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/oauth2/tests/generators/Setter.js?");

/***/ }),

/***/ "./src/apps/oauth2/tests/generators/index.js":
/*!***************************************************!*\
  !*** ./src/apps/oauth2/tests/generators/index.js ***!
  \***************************************************/
/*! exports provided: generateTestSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Setter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setter */ \"./src/apps/oauth2/tests/generators/Setter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestSetter\", function() { return _Setter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/types/Setter.graphql":
/*!**********************************************!*\
  !*** ./src/apps/oauth2/types/Setter.graphql ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # Generator version : 1.1.1\\n| extend type Query {\\n|   allSetters: [Setter]\");\n\n//# sourceURL=webpack:///./src/apps/oauth2/types/Setter.graphql?");

/***/ }),

/***/ "./src/apps/oauth2/types/_stitch.graphql":
/*!***********************************************!*\
  !*** ./src/apps/oauth2/types/_stitch.graphql ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> extend input SetterInput {\\n|   userId:ID\\n| }\");\n\n//# sourceURL=webpack:///./src/apps/oauth2/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/oauth2/types/index.js":
/*!****************************************!*\
  !*** ./src/apps/oauth2/types/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './main.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\nconst mainTypes = \"# Generator version : 1.1.2\\nextend type Query {\\n  oAuth2Google: String!\\n}\\n\\nextend type Mutation {\\n  oAuth2Login(authorization_code:String): Token!\\n}\\n\";\n\n/* babel-plugin-inline-import './Setter.graphql' */\nconst SetterTypes = \"# Generator version : 1.1.1\\nextend type Query {\\n  allSetters: [Setter]\\n  getSetter: Setter!\\n  #paginatedSetter (page:Int, category: String):PaginatedSetters\\n}\\n\\nextend type Mutation {\\n  addSetter(input:SetterInput!): Setter!\\n  updateSetter(id: ID!, input: SetterInput!): Setter!\\n  deleteSetter(id: ID!): ID!\\n  }\\n\\ninput SetterInput {\\n  expires:Float\\n  useToLogin:Boolean\\n  code:String\\n  provider:String\\n  isValid:Boolean\\n  }\\n\\ntype Setter {\\n  id:ID!\\n  _string:String!\\n  expires:Float\\n  useToLogin:Boolean!\\n  code:String!\\n  provider:String!\\n  isValid:Boolean!\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedSetters {\\n#  docs: [Setter]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"extend input SetterInput {\\n  userId:ID\\n}\\n\\nextend type Setter {\\n  userId:ID\\n  user:MinUser\\n}\\n\\nextend type User {\\n  oAuth2Setters:Setter \\n}\\n\\ntype OAuth2Profile {\\n  id: ID!\\n  #refreshToken:pdrivate\\n  picture: String\\n  provider: String \\n  scope: String\\n  locale: String\\n  name: String\\n  email: String\\n  emailVerified: Boolean\\n  createdAt:Float\\n  updatedAt:Float\\n  #scope:private\\n}\\n\\nextend type MinUser {\\n  oAuth2Profiles:[OAuth2Profile]\\n}\\n\\nextend type User {\\n  oAuth2Profiles:[OAuth2Profile]\\n}\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([mainTypes, SetterTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/oauth2/types/index.js?");

/***/ }),

/***/ "./src/apps/oauth2/types/main.graphql":
/*!********************************************!*\
  !*** ./src/apps/oauth2/types/main.graphql ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # Generator version : 1.1.2\\n| extend type Query {\\n|   oAuth2Google: String!\");\n\n//# sourceURL=webpack:///./src/apps/oauth2/types/main.graphql?");

/***/ }),

/***/ "./src/apps/oauth2/utils/GoogleAPI.js":
/*!********************************************!*\
  !*** ./src/apps/oauth2/utils/GoogleAPI.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst apiEndpoints = {\n  GET: {\n    profile: () => 'https://www.googleapis.com/oauth2/v3/userinfo'\n  }\n};\n\nclass GoogleAPI {\n  constructor(accessToken) {\n    this.accessToken = accessToken;\n    this.headers = {\n      Authorization: `Bearer ${this.accessToken}`\n    };\n  }\n\n  async getProfile() {\n    const options = {\n      method: 'GET',\n      uri: apiEndpoints.GET.profile(),\n      headers: this.headers,\n      json: true\n    };\n    return await request_promise__WEBPACK_IMPORTED_MODULE_0___default()(options);\n    /*\n    {\n      sub: '113530791892162584951',\n      name: 'Adrian Villa',\n      given_name: 'Adrian',\n      family_name: 'Villa',\n      profile: 'https://plus.google.com/113530791892162584951',\n      picture: 'https://lh3.googleusercontent.com/a-/AOh14GhpMRP1nBMj5_Ul4x7hpZTtdi0xUqWjwQhZECKYXw',\n      email: 'adrian.villa@779.mx',\n      email_verified: true,\n      locale: 'fr',\n      hd: '779.mx'\n    }*/\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleAPI);\n\n//# sourceURL=webpack:///./src/apps/oauth2/utils/GoogleAPI.js?");

/***/ }),

/***/ "./src/apps/oauth2/utils/index.js":
/*!****************************************!*\
  !*** ./src/apps/oauth2/utils/index.js ***!
  \****************************************/
/*! exports provided: GoogleAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GoogleAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAPI */ \"./src/apps/oauth2/utils/GoogleAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GoogleAPI\", function() { return _GoogleAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/oauth2/utils/index.js?");

/***/ }),

/***/ "./src/apps/tstr/resolvers/Hello.js":
/*!******************************************!*\
  !*** ./src/apps/tstr/resolvers/Hello.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {},\n  Query: {\n    getHello(r, a, c) {\n      // use context if you want to restrict the usage\n      return {\n        y: \"mini hello\"\n      }; //return su(MainController.get(r, a), c.user)\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/tstr/resolvers/Hello.js?");

/***/ }),

/***/ "./src/apps/tstr/resolvers/index.js":
/*!******************************************!*\
  !*** ./src/apps/tstr/resolvers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello */ \"./src/apps/tstr/resolvers/Hello.js\");\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Hello__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/tstr/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/tstr/types/Hello.graphql":
/*!*******************************************!*\
  !*** ./src/apps/tstr/types/Hello.graphql ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # Generator version : 1.1.1\\n| extend type Query {\\n|   getHello: Hello\");\n\n//# sourceURL=webpack:///./src/apps/tstr/types/Hello.graphql?");

/***/ }),

/***/ "./src/apps/tstr/types/_stitch.graphql":
/*!*********************************************!*\
  !*** ./src/apps/tstr/types/_stitch.graphql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/apps/tstr/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/tstr/types/index.js":
/*!**************************************!*\
  !*** ./src/apps/tstr/types/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Hello.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 1.1.1 */\nconst HelloTypes = \"# Generator version : 1.1.1\\nextend type Query {\\n  getHello: Hello\\n}\\n\\n#extend type Mutation {\\n  #mutateHello(id: ID!, input: HelloInput!): Hello!\\n  # }\\n\\n#input HelloInput {\\n  #y:String\\n# }\\n\\ntype Hello {\\n  y:String\\n}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([HelloTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/tstr/types/index.js?");

/***/ }),

/***/ "./src/apps/website/config.js":
/*!************************************!*\
  !*** ./src/apps/website/config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ORDER_DOMAINS_TO_EMAILS: ['meccamico@obambu.com', 'ale+obambu@meccamico.com']\n});\n\n//# sourceURL=webpack:///./src/apps/website/config.js?");

/***/ }),

/***/ "./src/apps/website/controllers/Domain.js":
/*!************************************************!*\
  !*** ./src/apps/website/controllers/Domain.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Domain;\nconst include = [] //{ all: true }\n//{ model: models.DictionaryExpression, as: 'expressions' }\n\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n;\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/website/controllers/Domain.js?");

/***/ }),

/***/ "./src/apps/website/controllers/Page.js":
/*!**********************************************!*\
  !*** ./src/apps/website/controllers/Page.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Page;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/website/controllers/Page.js?");

/***/ }),

/***/ "./src/apps/website/controllers/Site.js":
/*!**********************************************!*\
  !*** ./src/apps/website/controllers/Site.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Site;\nconst include = [{\n  all: true\n} //{ model: models.DictionaryExpression, as: 'expressions' }\n];\n/*\nimport {\n  ConfigurationError,\n  ValidationError,\n  NotUniqueError,\n  ObjectNotFoundError\n} from 'utils'\n*/\n\nconst Controller = {\n  all: (root, args) => Model.findAll({\n    include,\n    raw: true,\n    nest: true //plain:true\n\n  }),\n  get: (root, {\n    id\n  }) => Model.findByPk(id, {\n    include,\n    plain: true\n  }),\n  add: async (root, {\n    input\n  }) => await Model.create(input, {\n    include,\n    plain: true\n  }),\n  delete: async (root, {\n    id\n  }) => {\n    const item = await Model.findByPk(id).catch(e => {\n      console.log(e.message);\n    });\n\n    if (!item) {\n      return false;\n    }\n\n    await item.destroy();\n    return item.id;\n  },\n  update: async (root, {\n    input,\n    id\n  }) => {\n    const updated = await Model.update(input, {\n      where: {\n        id\n      },\n      returning: true\n    }).catch(e => console.log(e.message));\n    return updated[1][0]; //we return the first updated item\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/apps/website/controllers/Site.js?");

/***/ }),

/***/ "./src/apps/website/controllers/index.js":
/*!***********************************************!*\
  !*** ./src/apps/website/controllers/index.js ***!
  \***********************************************/
/*! exports provided: DomainController, SiteController, PageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Domain */ \"./src/apps/website/controllers/Domain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DomainController\", function() { return _Domain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site */ \"./src/apps/website/controllers/Site.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SiteController\", function() { return _Site__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ \"./src/apps/website/controllers/Page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PageController\", function() { return _Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/website/controllers/index.js?");

/***/ }),

/***/ "./src/apps/website/dependencies.json":
/*!********************************************!*\
  !*** ./src/apps/website/dependencies.json ***!
  \********************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"auth\\\"]\");\n\n//# sourceURL=webpack:///./src/apps/website/dependencies.json?");

/***/ }),

/***/ "./src/apps/website/index.js":
/*!***********************************!*\
  !*** ./src/apps/website/index.js ***!
  \***********************************/
/*! exports provided: dependencies, types, resolvers, models */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/apps/website/models/index.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"models\", function() { return _models__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _dependencies_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies.json */ \"./src/apps/website/dependencies.json\");\nvar _dependencies_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencies.json */ \"./src/apps/website/dependencies.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"dependencies\", function() { return _dependencies_json__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./src/apps/website/types/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ \"./src/apps/website/resolvers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return _resolvers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/website/index.js?");

/***/ }),

/***/ "./src/apps/website/migrations/00_website_domains_initial.migration.js":
/*!*****************************************************************************!*\
  !*** ./src/apps/website/migrations/00_website_domains_initial.migration.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'website_domains'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    alt: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    isOrdered: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    isBought: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    isInstalled: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    isError: {\n      type: Sequelize.DataTypes.BOOLEAN,\n      allowNull: false\n    },\n    vercelNameservers: {\n      type: Sequelize.DataTypes.JSON\n    },\n    vercelTeamId: {\n      type: Sequelize.DataTypes.STRING\n    },\n    vercelDomainId: {\n      type: Sequelize.DataTypes.STRING\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/00_website_domains_initial.migration.js?");

/***/ }),

/***/ "./src/apps/website/migrations/00_website_pages_initial.migration.js":
/*!***************************************************************************!*\
  !*** ./src/apps/website/migrations/00_website_pages_initial.migration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'website_pages'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: true\n    },\n    metaData: {\n      type: Sequelize.DataTypes.JSON\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    }\n  }); //Do not forget to add the custom index after the associations migration\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/00_website_pages_initial.migration.js?");

/***/ }),

/***/ "./src/apps/website/migrations/00_website_websites_initial.migration.js":
/*!******************************************************************************!*\
  !*** ./src/apps/website/migrations/00_website_websites_initial.migration.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'websites'; //Should equal the one defined in models\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.createTable(tableName, {\n    id: {\n      type: Sequelize.DataTypes.UUID,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: Sequelize.DataTypes.STRING,\n      allowNull: false\n    },\n    createdAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    updatedAt: {\n      type: Sequelize.DataTypes.DATE,\n      allowNull: false\n    },\n    data: {\n      type: Sequelize.DataTypes.JSON\n    }\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.dropTable(tableName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/00_website_websites_initial.migration.js?");

/***/ }),

/***/ "./src/apps/website/migrations/01_website_pages_association_websites.migration.js":
/*!****************************************************************************************!*\
  !*** ./src/apps/website/migrations/01_website_pages_association_websites.migration.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'website_pages'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'siteId';\nconst foreignKeyTableName = 'websites';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.UUID,\n    references: {\n      model: foreignKeyTableName,\n      key: 'id'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'CASCADE'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/01_website_pages_association_websites.migration.js?");

/***/ }),

/***/ "./src/apps/website/migrations/01_website_websites_association_domains.migration.js":
/*!******************************************************************************************!*\
  !*** ./src/apps/website/migrations/01_website_websites_association_domains.migration.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'websites'; //Should equal the one defined in models\n\nconst foreignKeyColumnName = 'domainName';\nconst foreignKeyTableName = 'website_domains';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addColumn(tableName, foreignKeyColumnName, {\n    type: Sequelize.DataTypes.STRING,\n    references: {\n      model: foreignKeyTableName,\n      key: 'name'\n    },\n    onUpdate: 'CASCADE',\n    onDelete: 'SET NULL'\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeColumn(tableName, foreignKeyColumnName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/01_website_websites_association_domains.migration.js?");

/***/ }),

/***/ "./src/apps/website/migrations/02_website_pages_index_slug_site.migration.js":
/*!***********************************************************************************!*\
  !*** ./src/apps/website/migrations/02_website_pages_index_slug_site.migration.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tableName = 'website_pages'; //Should equal the one defined in models\n\nconst indexName = tableName + '_slug_siteId';\n\nasync function up(queryInterface, Sequelize) {\n  return queryInterface.addIndex(tableName, {\n    name: indexName,\n    fields: ['slug', 'siteId'],\n    unique: true\n  });\n}\n\nasync function down(queryInterface, Sequelize) {\n  return queryInterface.removeIndex(tableName, indexName);\n}\n\nmodule.exports = {\n  up,\n  down\n};\n\n//# sourceURL=webpack:///./src/apps/website/migrations/02_website_pages_index_slug_site.migration.js?");

/***/ }),

/***/ "./src/apps/website/models/Domain.js":
/*!*******************************************!*\
  !*** ./src/apps/website/models/Domain.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/apps/website/utils/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./src/apps/website/config.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n //const ORDER_EMAIL_TO = 'adrian.villa.g@gmail.com'\n\nconst ORDER_EMAIL_TO = _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ORDER_DOMAINS_TO_EMAIL;\nconst IS_DRY_ORDER = process.env.WEBSITE_DOMAIN_DRY_ORDER === 'true' ? true : false;\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Domain extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    static async isAvailable(domain) {\n      const {\n        available\n      } = await _utils__WEBPACK_IMPORTED_MODULE_1__[\"VercelAPI\"].get.isDomainAvailable(domain);\n      return available;\n    }\n\n    async order() {\n      //ORDER LOGIN\n      const content = JSON.stringify({\n        id: this.id,\n        name: this.name,\n        vercelNameservers: this.vercelNameservers,\n        vercelDomainId: this.vercelDomainId\n      }, null, 2);\n      const emailOptions = {\n        to: ORDER_EMAIL_TO,\n        subject: `order ${this.name}`,\n        text: `\n         ${content}\\n\n         \\n\n         A pleasure to do business ~~ Merci !\n        `\n      };\n      const sender = new _utils__WEBPACK_IMPORTED_MODULE_2__[\"EmailSender\"](emailOptions);\n      const sent = await sender.send(IS_DRY_ORDER);\n      this.isOrdered = true;\n\n      if (!sent.accepted || !sent.accepted.length) {\n        //TODO this is too artisanal\n        this.isError = true;\n      }\n\n      await this.save();\n      return sent.accepted.length > 0;\n    }\n    /*\n    instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n\n\n    async addToVercel() {\n      if (this.vercelDomainId) {\n        //TODO Raise error = this domain is already on Vervel\n        return false;\n      }\n\n      const options = {};\n\n      if (this.vercelTeamId) {\n        options['teamId'] = this.vercelTeamId;\n      }\n\n      const {\n        domain\n      } = await _utils__WEBPACK_IMPORTED_MODULE_1__[\"VercelAPI\"].post.addDomain(options, {\n        name: this.name\n      });\n      this.vercelDomainId = domain.id; //console.log(this.vercelNameservers, domain.intendedNameservers)\n\n      this.vercelNameservers = domain.intendedNameservers;\n      this.isInstalled = false;\n      await this.save(); //console.log(this.vercelNameservers, domain.intendedNameservers)\n\n      return true;\n    }\n\n    async deleteFromVercel() {\n      const options = {\n        name: this.name\n      };\n\n      if (this.vercelTeamId) {\n        options['teamId'] = this.vercelTeamId;\n      }\n\n      const {\n        uid\n      } = await _utils__WEBPACK_IMPORTED_MODULE_1__[\"VercelAPI\"].delete.domain(options);\n      this.vercelDomainId = null;\n      this.isInstalled = false;\n      await this.save();\n      return true;\n    }\n\n    async validateVercelDns() {\n      const options = {\n        name: this.name\n      };\n\n      if (this.vercelTeamId) {\n        options['teamId'] = this.vercelTeamId;\n      }\n\n      try {\n        const {\n          domain\n        } = await _utils__WEBPACK_IMPORTED_MODULE_1__[\"VercelAPI\"].post.verifyDomain(options);\n        this.bought = true; //In case this wasnt activated TODO remove and move\n\n        this.isInstalled = true;\n        return await this.save();\n      } catch (e) {\n        return false;\n      }\n    }\n\n    async getInfoFromVercel() {\n      const options = {\n        name: this.name\n      };\n\n      if (this.vercelTeamId) {\n        options['teamId'] = this.vercelTeamId;\n      }\n\n      const {\n        domain\n      } = await _utils__WEBPACK_IMPORTED_MODULE_1__[\"VercelAPI\"].get.domain(options);\n      return domain;\n    }\n\n  }\n\n  Domain.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    alt: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false,\n      unique: true\n    },\n    isOrdered: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    isBought: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    isInstalled: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    isError: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN,\n      allowNull: false,\n      defaultValue: false\n    },\n    vercelNameservers: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON\n    },\n    vercelTeamId: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      defaultValue: process.env.VERCEL_TEAM_ID\n    },\n    vercelDomainId: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING\n    },\n    main: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name', 'alt', 'isInstalled']),\n      get: function () {\n        return this.get('isInstalled') ? this.get('name') : this.get('alt');\n      }\n    },\n    isAddedToVercel: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.BOOLEAN, ['vercelDomainId']),\n      get: function () {\n        return this.get('vercelDomainId').length ? true : false;\n      }\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'Domain',\n    tableName: 'website_domains',\n    //freezeTableName: true\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt'\n  });\n\n  Domain.associate = models => {//Domain.belongsTo(models.Site) //this will give a foreign key to B here, and make it available from here\n    //models.Site.belongsTo(Domain)\n    //models.User.hasMany() //this will give this model a UserId field and make it available from user\n  };\n\n  Domain.addHook('beforeDestroy', 'removeFromVercel', async (e, options) => {\n    if (e.vercelDomainId) {\n      try {\n        await e.deleteFromVercel();\n      } catch (e) {//console.log(`Tried to delete ${e.name} from Vercel, but wasnt found`)\n      }\n    }\n  });\n  return Domain;\n});\n\n//# sourceURL=webpack:///./src/apps/website/models/Domain.js?");

/***/ }),

/***/ "./src/apps/website/models/Page.js":
/*!*****************************************!*\
  !*** ./src/apps/website/models/Page.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Page extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Page.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: false\n    },\n    slug: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      allowNull: true\n    },\n    metaData: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON,\n      defaultValue: {}\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n  }, {\n    sequelize,\n    modelName: 'Page',\n    tableName: 'website_pages',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt',\n    indexes: [{\n      unique: true,\n      fields: ['slug', 'siteId']\n    }] //tableName: 'pages'\n    //freezeTableName: true\n\n  });\n\n  Page.associate = models => {\n    models.Site.hasMany(Page, {\n      as: 'pages',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'siteId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    }); //This second association is unnecceaary\n\n    Page.belongsTo(models.Site, {\n      as: 'website',\n      targetKey: 'id',\n      foreignKey: {\n        name: 'siteId',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID //allowNull:false\n\n      }\n    });\n  };\n\n  return Page; //Page.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/website/models/Page.js?");

/***/ }),

/***/ "./src/apps/website/models/Site.js":
/*!*****************************************!*\
  !*** ./src/apps/website/models/Site.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize => {\n  class Site extends sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Model\"] {\n    /*\n    static classLevelMethod() {\n    }\n       instanceLevelMethod() {\n      return this.first_name\n    }\n    */\n    async addDomain(domain, alt) {}\n\n    async verifyDomain() {}\n\n    async updateData(newData) {\n      const oldData = this.data;\n      this.data = { ...oldData,\n        ...newData\n      };\n      return await this.save();\n    }\n\n  }\n\n  Site.init({\n    id: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.UUID,\n      defaultValue: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].UUIDV4,\n      allowNull: false,\n      primaryKey: true\n    },\n    name: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING,\n      //type: Sequelize.DataTypes.BOOLEAN,\n      //type: Sequelize.DataTypes.INTEGER,\n      //type: Sequelize.DataTypes.BIGINT,\n      allowNull: false,\n      defaultValue: 'john' //unique:true\n      //field:'column_name_here'\n\n    },\n    data: {\n      type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.JSON,\n      defaultValue: {}\n    },\n    _string: {\n      type: new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.VIRTUAL(sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING, ['name']),\n      get: function () {\n        return this.get('name');\n      }\n    }\n    /*\n    uuid:{\n      type: Sequelize.DataTypes.UUID,\n      defaultValue: Sequelize.UUIDV4\n    }\n    */\n\n  }, {\n    sequelize,\n    modelName: 'Site',\n    tableName: 'websites',\n    updatedAt: 'updatedAt',\n    createdAt: 'createdAt' //tableName: 'sites'\n    //freezeTableName: true\n\n  });\n\n  Site.associate = models => {\n    //Here we do a reverse association to be able to query both the site and the domain doing one request less\n    Site.belongsTo(models.Domain, {\n      as: 'domain',\n      targetKey: 'name',\n      foreignKey: {\n        name: 'domainName',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING //allowNull:false\n\n      }\n    });\n    models.Domain.hasOne(Site, {\n      as: 'site',\n      targetKey: 'name',\n      foreignKey: {\n        name: 'domainName',\n        type: sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"].DataTypes.STRING //allowNull:false\n\n      }\n    });\n  };\n\n  return Site; //Site.addHook('afterCreate', 'hookName', (e, options) => {})\n});\n\n//# sourceURL=webpack:///./src/apps/website/models/Site.js?");

/***/ }),

/***/ "./src/apps/website/models/index.js":
/*!******************************************!*\
  !*** ./src/apps/website/models/index.js ***!
  \******************************************/
/*! exports provided: Domain, Site, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Domain */ \"./src/apps/website/models/Domain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Domain\", function() { return _Domain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site */ \"./src/apps/website/models/Site.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Site\", function() { return _Site__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ \"./src/apps/website/models/Page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return _Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/website/models/index.js?");

/***/ }),

/***/ "./src/apps/website/resolvers/Domain.js":
/*!**********************************************!*\
  !*** ./src/apps/website/resolvers/Domain.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addDomain(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].add(r, a), c.user);\n    },\n\n    async deleteDomain(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].del(r, a), c.user);\n    },\n\n    async updateDomain(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allDomains(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].all(r, a), c.user); //return su(DomainController.paginated(r, a), c.user)\n    },\n\n    getDomain(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/website/resolvers/Domain.js?");

/***/ }),

/***/ "./src/apps/website/resolvers/Page.js":
/*!********************************************!*\
  !*** ./src/apps/website/resolvers/Page.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addPage(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"PageController\"].add(r, a), c.user);\n    },\n\n    async deletePage(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"PageController\"].del(r, a), c.user);\n    },\n\n    async updatePage(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"PageController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allPages(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"PageController\"].all(r, a), c.user); //return su(PageController.paginated(r, a), c.user)\n    },\n\n    getPage(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"PageController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/website/resolvers/Page.js?");

/***/ }),

/***/ "./src/apps/website/resolvers/Site.js":
/*!********************************************!*\
  !*** ./src/apps/website/resolvers/Site.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Mutation: {\n    async addSite(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"SiteController\"].add(r, a), c.user);\n    },\n\n    async deleteSite(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"SiteController\"].del(r, a), c.user);\n    },\n\n    async updateSite(r, a, c) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"SiteController\"].update(r, a), c.user);\n    }\n\n  },\n  Query: {\n    allSites(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"SiteController\"].all(r, a), c.user); //return su(SiteController.paginated(r, a), c.user)\n    },\n\n    getSite(r, a, c) {\n      // use context if you want to restrict the usage\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"])(_controllers__WEBPACK_IMPORTED_MODULE_0__[\"SiteController\"].get(r, a), c.user);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/apps/website/resolvers/Site.js?");

/***/ }),

/***/ "./src/apps/website/resolvers/index.js":
/*!*********************************************!*\
  !*** ./src/apps/website/resolvers/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./src/apps/website/resolvers/Page.js\");\n/* harmony import */ var _Site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site */ \"./src/apps/website/resolvers/Site.js\");\n/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Domain */ \"./src/apps/website/resolvers/Domain.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Site__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Domain__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/apps/website/resolvers/index.js?");

/***/ }),

/***/ "./src/apps/website/tests/Domain.test.js":
/*!***********************************************!*\
  !*** ./src/apps/website/tests/Domain.test.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./src/apps/website/utils/index.js\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generators */ \"./src/apps/website/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\n\nchai__WEBPACK_IMPORTED_MODULE_4___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_5___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_4___default.a;\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Domain;\n\nconst generateFakeDomainName = () => 'auto-testing-available-domain' + faker__WEBPACK_IMPORTED_MODULE_2__[\"random\"].alphaNumeric(8).toLowerCase() + '.com';\n\ndescribe('Website -> Domain Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Domain Model -> Virtual -> Added To Vercel ( Boolean )', function () {\n    it('Model API -> The model is added to Vercel, should return true', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        vercelDomainId: 'someid'\n      });\n      const inst = await Model.create(data);\n      expect(inst.isAddedToVercel).to.equal(true);\n      inst.destroy();\n    });\n    it('Model API -> The model is not added to Vercel, should return false', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        vercelDomainId: ''\n      });\n      const inst = await Model.create(data);\n      expect(inst.isAddedToVercel).to.equal(false);\n      inst.destroy();\n    });\n  });\n  describe('Domain Model -> Virtual -> Main', function () {\n    it('Model API -> The domain is not installed, main should be the alt', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        isInstalled: false\n      });\n      const inst = await Model.create(data);\n      expect(inst.main).to.equal(data.alt);\n      inst.destroy();\n    });\n    it('Model API -> The domain is installed, main should be the regular name', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        isInstalled: true\n      });\n      const inst = await Model.create(data);\n      expect(inst.main).to.equal(data.name);\n      inst.destroy();\n    });\n  });\n  describe('Domain Model -> Class Method -> Is Available', function () {\n    it('Model API -> A domain that should be available for sale', async function () {\n      const fakeDomain = generateFakeDomainName();\n      const isAvailable = await Model.isAvailable(fakeDomain);\n      expect(isAvailable).to.equal(true);\n    });\n  });\n  describe('Domain Model -> Instance Method -> Order', function () {\n    it('Model API -> The domain gets its ordered status toggled, and is connected to the ordering api', async function () {\n      //TODO test email sending (?)\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        name: generateFakeDomainName(),\n        vercelDomainId: null,\n        isOrdered: false,\n        isError: false\n      });\n      const inst = await Model.create(data);\n      const addedToVercel = await inst.addToVercel();\n      const ordered = await inst.order();\n      expect(ordered).to.be.equal(true);\n      const uInst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get({}, {\n        id: inst.id\n      }); ////console.log(777, uInst)\n\n      expect(uInst.isOrdered).to.equal(true);\n      inst.destroy();\n    });\n  });\n  describe('Domain Model -> Instance Method -> Add To Vercel', function () {\n    it('Model API -> The domain should be added to Vercel', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        name: generateFakeDomainName(),\n        vercelDomainId: null,\n        isOrdered: true,\n        isBought: true,\n        isInstalled: true //will be reset\n\n      });\n      const inst = await Model.create(data);\n      const isAdded = await inst.addToVercel();\n      expect(isAdded).to.equal(true);\n      const uInst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get({}, {\n        id: inst.id\n      });\n      expect(uInst.isInstalled).to.equal(false);\n      const {\n        domain: {\n          id: shouldEqualVercelDomainId\n        }\n      } = await _utils__WEBPACK_IMPORTED_MODULE_3__[\"VercelAPI\"].get.domain({\n        name: data.name,\n        teamId: data.vercelTeamId\n      });\n      expect(shouldEqualVercelDomainId).to.equal(uInst.vercelDomainId);\n      inst.destroy();\n    });\n    it('Model API -> The domain should not be synced with vercel because it already has been', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        vercelDomainId: 'already existing id'\n      });\n      const inst = await Model.create(data);\n      const isAdded = await inst.addToVercel();\n      expect(isAdded).to.equal(false);\n      inst.destroy();\n    });\n  });\n  describe('Domain Model -> Instance Method -> Delete from Vercel', function () {\n    it('Model API -> The domain should be deleted from vercel', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        name: generateFakeDomainName(),\n        vercelDomainId: null,\n        isOrdered: true,\n        isBought: true,\n        isInstalled: true //will be reset\n\n      });\n      const inst = await Model.create(data);\n      const isAdded = await inst.addToVercel();\n      const deleted = await inst.deleteFromVercel();\n      expect(deleted).to.equal(true);\n      const uInst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get({}, {\n        id: inst.id\n      });\n      expect(uInst.isInstalled).to.equal(false);\n      expect(uInst.vercelDomainId).to.equal(null);\n      const getDeletedDomain = _utils__WEBPACK_IMPORTED_MODULE_3__[\"VercelAPI\"].get.domain({\n        name: data.name,\n        teamId: data.vercelTeamId\n      });\n      const assertion = expect(getDeletedDomain).to.eventually.be.rejected.then(e => {\n        //console.log('ERROR', e.error)\n        //assert(e.statusCode ===)\n        expect(e.error.error.code).to.be.equal('not_found');\n      });\n      inst.destroy();\n      return assertion;\n    });\n  });\n  describe('Domain Model -> Instance Method -> Get Domain Info Vercel', function () {\n    it('Model API -> We should get the right info from vercel with a synced domain', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        name: generateFakeDomainName(),\n        vercelDomainId: null,\n        isOrdered: true,\n        isBought: true,\n        isInstalled: true //will be reset\n\n      });\n      const inst = await Model.create(data);\n      const isAdded = await inst.addToVercel();\n      const uInst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get({}, {\n        id: inst.id\n      });\n      const {\n        id\n      } = await uInst.getInfoFromVercel();\n      expect(id).to.equal(uInst.vercelDomainId);\n      inst.destroy();\n    });\n  });\n  describe('Domain Model -> Hook -> Delete from Vercel', function () {\n    it('Model API -> The domain should be automatically deleted from vercel before instance deletion', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])({\n        name: generateFakeDomainName(),\n        vercelDomainId: null,\n        isOrdered: true,\n        isBought: true,\n        isInstalled: true //will be reset\n\n      });\n      const inst = await Model.create(data);\n      await inst.addToVercel();\n      await inst.destroy();\n      const getDeletedDomain = _utils__WEBPACK_IMPORTED_MODULE_3__[\"VercelAPI\"].get.domain({\n        name: data.name,\n        teamId: data.vercelTeamId\n      });\n      const assertion = expect(getDeletedDomain).to.eventually.be.rejected.then(e => {\n        //console.log('ERROR', e.error)\n        //assert(e.statusCode ===)\n        expect(e.error.error.code).to.be.equal('not_found');\n      });\n      return assertion;\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Website -> Domain Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })assert.exists(r1.id, 'We shouldnt deep test inclusion of empty item')\n  assert.exists(r2.id, 'We shouldnt deep test inclusion of empty item')\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      expect(records[0]).to.deep.include(data1);\n      expect(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      assert.exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      assert.exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      expect(s1).to.deep.include(data1);\n      expect(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].get({}, {\n        id\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].add({}, {\n        input\n      });\n      expect(inst).to.deep.include(input);\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].update({}, {\n        id,\n        input\n      });\n      expect(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_6__[\"generateTestDomain\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_0__[\"DomainController\"].delete({}, {\n        id\n      });\n      assert(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      expect(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/website/tests/Domain.test.js?");

/***/ }),

/***/ "./src/apps/website/tests/Page.test.js":
/*!*********************************************!*\
  !*** ./src/apps/website/tests/Page.test.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators */ \"./src/apps/website/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Page; //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Site,\n  foreignKey: 'siteId',\n  references: 'id',\n  as: 'website'\n};\ndescribe('Website -> Page Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n\n  /*\n  describe('Model -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  */\n\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Website -> Page Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for, with no association', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instFM_A2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])({\n        [FM_A.foreignKey]: instFM_A_A1[FM_A.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])({\n        [FM_A.foreignKey]: instFM_A_A2[FM_A.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A_A1.dataValues\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A_A2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A_A1.destroy();\n      instFM_A_A2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestPage\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"PageController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/website/tests/Page.test.js?");

/***/ }),

/***/ "./src/apps/website/tests/Site.test.js":
/*!*********************************************!*\
  !*** ./src/apps/website/tests/Site.test.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ \"./src/apps/website/controllers/index.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ \"./src/models.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generators */ \"./src/apps/website/tests/generators/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\n\n\n\nconst Model = _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Site; //FM for ForeignModel\n\nconst FM_A = {\n  generateData: () => Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestDomain\"])(),\n  model: _models__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Domain,\n  foreignKey: 'domainName',\n  references: 'name',\n  as: 'domain'\n};\ndescribe('Website -> Site Model', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n\n  /*\n  describe('Model -> Key -> Code', function() {\n    it('Default Value -> The default code is a unique 64 char string', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData()\n      const records = await Model.bulkCreate([data1, data2])\n      const { code:code1 } = records[0]\n      const { code:code2 } = records[1]\n      expect( code1 ).to.have.lengthOf(64)\n      expect( code2 ).to.have.lengthOf(64)\n      expect( code1 ).to.not.deep.equal(code2)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  \n  describe('Model -> Virtual -> IsValid', function() {\n    it('Model API -> An instance is valid ioi it expires later than now', async function() {\n      const data1 = generateFakeData()\n      const data2 = generateFakeData({ expires: Date.now() - (Number(200 * 1000)) })\n      const records = await Model.bulkCreate([data1, data2])\n      expect( records[0].is_valid ).to.equal(true)\n      expect( records[1].is_valid ).to.equal(false)\n      records.forEach((e) =>\n        e.destroy()\n      )\n    })\n  \n  })\n  */\n\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\ndescribe('Website -> Site Controller', function () {\n  /*\n  before( function(){\n  })\n   beforeEach( function(){\n  })\n  */\n  describe('Controller -> Get all', function () {\n    it('Admin API -> The objects retrieved equals the objects looked for, with no association', async function () {\n      // 1. We generate two items\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include(data2); //Include instead of equal because if there is a foreign key, it will be developped in the controller get all method\n      //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n    });\n    it('Admin API -> The objects retrieved equals the objects looked for, including associations', async function () {\n      // O. We prepare the FK Data\n      const instFM_A_A1 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const instFM_A_A2 = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      }); //console.log(instUser1, instFM_A2)\n      // 1. We generate two items\n\n      const data1 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])({\n        [FM_A.foreignKey]: instFM_A_A1[FM_A.references]\n      });\n      const data2 = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])({\n        [FM_A.foreignKey]: instFM_A_A2[FM_A.references]\n      });\n      const records = await Model.bulkCreate([data1, data2], {}); // 2. We test they are generated properly, and we keep their irds\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[0]).to.deep.include(data1);\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(records[1]).to.deep.include(data2);\n      const {\n        id: id1\n      } = records[0];\n      const {\n        id: id2\n      } = records[1]; // 3. We get all the items in the DB, in which we check the generated items are present\n\n      const rows = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].all({});\n      const s1 = rows.find(e => e.id === id1);\n      const s2 = rows.find(e => e.id === id2);\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s1.id, 'We shouldnt deep test inclusion of empty item');\n      chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"].exists(s2.id, 'We shouldnt deep test inclusion of empty item'); // 4. We compare the found item with the generated one\n\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s1).to.deep.include({ ...data1,\n        [FM_A.as]: instFM_A_A1.dataValues\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(s2).to.deep.include({ ...data2,\n        [FM_A.as]: instFM_A_A2.dataValues\n      }); //expect(rows).to.deep.include.members([ r1, r2 ])\n      // 5.Cleanup\n\n      records.forEach(e => e.destroy());\n      instFM_A_A1.destroy();\n      instFM_A_A2.destroy();\n    });\n  });\n  describe('Controller -> Get one', function () {\n    it('Admin API -> The object retrieved correspond to the objects looked for, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object retrieved correspond to the objects looked for, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].get({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...data\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues);\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Add', function () {\n    it('Admin API -> The object created equals the specs given, with no association', async function () {\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input);\n      inst.destroy();\n    });\n    it('Admin API -> The object created equals the specs given, including associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].add({}, {\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include(input); //expect(inst.user.dataValues).to.deep.include(instUser.dataValues)\n      //expect(inst[FM_A.as].dataValues).to.deep.include(instFM_A.dataValues) //\n      //https://github.com/sequelize/sequelize/issues/3807\n\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Update', function () {\n    it('Admin API -> The object is successfully updated, with no association', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n    });\n    it('Admin API -> The object is successfully updated, with associations', async function () {\n      const instFM_A = await FM_A.model.create(FM_A.generateData(), {\n        plain: true\n      });\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])({\n        [FM_A.foreignKey]: instFM_A[FM_A.references]\n      });\n      const {\n        id\n      } = await Model.create(data);\n      const input = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const inst = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].update({}, {\n        id,\n        input\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(inst).to.deep.include({\n        id,\n        ...input\n      });\n      inst.destroy();\n      instFM_A.destroy();\n    });\n  });\n  describe('Controller -> Delete', function () {\n    it('Admin API -> The object is successfully deleted', async function () {\n      const data = Object(_generators__WEBPACK_IMPORTED_MODULE_4__[\"generateTestSite\"])();\n      const {\n        id\n      } = await Model.create(data);\n      const deletedId = await _controllers__WEBPACK_IMPORTED_MODULE_1__[\"SiteController\"].delete({}, {\n        id\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"assert\"])(deletedId === id, 'The controller should respond true to the deletion command');\n      await Model.findByPk(id, {\n        transaction: null\n      }); //there is a little time for the deletion to actually happen, so we auery twice\n\n      const objectShouldntRemain = await Model.findByPk(id, {\n        transaction: null\n      });\n      Object(chai__WEBPACK_IMPORTED_MODULE_0__[\"expect\"])(objectShouldntRemain).to.equal(null); //assert( Model.findByPk( id ) == null, 'There should be no item anymore in the db')\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/website/tests/Site.test.js?");

/***/ }),

/***/ "./src/apps/website/tests/generators/Domain.js":
/*!*****************************************************!*\
  !*** ./src/apps/website/tests/generators/Domain.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName(),\n    alt: faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName(),\n    isOrdered: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    isBought: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    isInstalled: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    isError: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].boolean(),\n    vercelNameservers: [faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName(), faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName(), faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName(), faker__WEBPACK_IMPORTED_MODULE_0__[\"internet\"].domainName()],\n    vercelTeamId: process.env.VERCEL_TEAM_ID,\n    //Provided as default, but just for the eq check here\n    vercelDomainId: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].alphaNumeric(20)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/website/tests/generators/Domain.js?");

/***/ }),

/***/ "./src/apps/website/tests/generators/Page.js":
/*!***************************************************!*\
  !*** ./src/apps/website/tests/generators/Page.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName(),\n    slug: faker__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].slugify(faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName().toLowerCase()),\n    metaData: {\n      k: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      l: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      m: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    },\n    data: {\n      k: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      l: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      m: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/website/tests/generators/Page.js?");

/***/ }),

/***/ "./src/apps/website/tests/generators/Site.js":
/*!***************************************************!*\
  !*** ./src/apps/website/tests/generators/Site.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.5.0 */\n\n\n\nconst generateFake = () => {\n  return {\n    name: faker__WEBPACK_IMPORTED_MODULE_0__[\"company\"].companyName(),\n    data: {\n      k: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8),\n      l: faker__WEBPACK_IMPORTED_MODULE_0__[\"random\"].words(8)\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"generateTestDataFrom\"])(generateFake, options));\n\n//# sourceURL=webpack:///./src/apps/website/tests/generators/Site.js?");

/***/ }),

/***/ "./src/apps/website/tests/generators/index.js":
/*!****************************************************!*\
  !*** ./src/apps/website/tests/generators/index.js ***!
  \****************************************************/
/*! exports provided: generateTestPage, generateTestSite, generateTestDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./src/apps/website/tests/generators/Page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestPage\", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site */ \"./src/apps/website/tests/generators/Site.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestSite\", function() { return _Site__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Domain */ \"./src/apps/website/tests/generators/Domain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestDomain\", function() { return _Domain__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/apps/website/tests/generators/index.js?");

/***/ }),

/***/ "./src/apps/website/tests/utils.VercelAPI.test.js":
/*!********************************************************!*\
  !*** ./src/apps/website/tests/utils.VercelAPI.test.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai-as-promised */ \"chai-as-promised\");\n/* harmony import */ var chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai_as_promised__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var request_promise_core_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! request-promise-core/errors */ \"request-promise-core/errors\");\n/* harmony import */ var request_promise_core_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(request_promise_core_errors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/apps/website/utils/index.js\");\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\n\n\nchai__WEBPACK_IMPORTED_MODULE_0___default.a.use(chai_as_promised__WEBPACK_IMPORTED_MODULE_1___default.a);\nconst {\n  assert,\n  expect\n} = chai__WEBPACK_IMPORTED_MODULE_0___default.a; //import { DomainController as MainController } from '../controllers'\n//import models from 'models'\n//const Model = models.Domain\n\n\n\n\nconst teamId = process.env.VERCEL_TEAM_ID;\nconst personal_domain = process.env.VERCEL_TEST_DOMAIN_PERSONAL;\nconst team_domain = process.env.VERCEL_TEST_DOMAIN_TEAM;\n\nconst generateFakeDomain = () => 'auto-testing-available-domain' + faker__WEBPACK_IMPORTED_MODULE_2__[\"random\"].alphaNumeric(8).toLowerCase() + '.com';\n\ndescribe('Website -> Vercel API', function () {\n  before(function () {\n    assert(process.env.VERCEL_API_SECRET, 'Env var VERCEL_API_SECRET is not configured');\n  });\n  /*\n  beforeEach( function(){\n  })\n  */\n\n  describe('API -> Get', function () {\n    it('Get -> Teams -> Should display the teams we\\'re part of', async function () {\n      const response = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.teams(); //console.log(response)\n\n      assert('teams' in response, 'response should provide the teams as a key'); //expect(inst.main).to.equal(data.name)\n    });\n    describe('Get -> All Domains', function () {\n      it('Get -> Domains (User) -> Should list all available domains correctly owned by the user', async function () {\n        const r = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.domains();\n        const domainShouldBeFound = r.domains.find(e => e.name === personal_domain); //console.log(r)\n\n        assert(domainShouldBeFound, 'Personal domain should be found in the api response');\n      });\n      it('Get -> Domains (Team) -> Should list all available domains correctly owned by the team', async function () {\n        const r = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.domains({\n          teamId\n        });\n        const domainShouldBeFound = r.domains.find(e => e.name === team_domain); //console.log(r)\n\n        assert(domainShouldBeFound, 'Team domain should be found in the api response');\n      });\n    });\n    describe('Get -> Single Domain', function () {\n      it('Get -> Domain (User) -> Should retrieve info of a specific domain owned by the account', async function () {\n        const domain1 = personal_domain;\n        const r1 = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.domain({\n          name: domain1\n        });\n        assert(r1.domain.name === domain1, 'Retrieved domain should equal provided domain'); //console.log(a1, a2)\n        //expect(inst.main).to.equal(data.name)\n      });\n      it('Get -> Domain (Team) -> Should retrieve info of a specific domain owned by the team', async function () {\n        const domain2 = team_domain;\n        const r2 = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.domain({\n          name: domain2,\n          teamId\n        });\n        assert(r2.domain.name === domain2, 'Retrieved team-owned domain should equal provided domain'); //console.log(a1, a2)\n        //expect(inst.main).to.equal(data.name)\n      });\n    });\n    it('Get -> Is Domain Available -> Tell correctly tell whether a domain is available', async function () {\n      const taken_domain = 'google.com';\n      const available_domain = generateFakeDomain();\n      const {\n        available: av1\n      } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.isDomainAvailable(taken_domain);\n      const {\n        available: av2\n      } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].get.isDomainAvailable(available_domain);\n      assert(av1 === false, `Domain ${taken_domain} should be taken`);\n      assert(av2 === true, `Domain ${available_domain} should be available`); //expect(inst.main).to.equal(data.name)\n    });\n  });\n  describe('API -> Post', function () {\n    describe('Post -> Add a domain', function () {\n      it('Post -> Add Domain (User) -> Should correctly add a domain to the user account', async function () {\n        const domainToAdd = generateFakeDomain();\n        const {\n          domain\n        } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].post.addDomain({}, {\n          name: domainToAdd\n        });\n        assert(domain.name === domainToAdd, \"The added domain should be the requested domain\"); //console.log(domain)\n        //const deleted = await VercelAPI.delete.domain({name: domainToAdd})\n        //console.log(deleted)\n\n        await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].delete.domain({\n          name: domainToAdd\n        });\n      });\n      it('Post -> Add Domain (Team) -> Should correctly add a domain to the team account', async function () {\n        const domainToAdd = generateFakeDomain();\n        const {\n          domain\n        } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].post.addDomain({\n          teamId\n        }, {\n          name: domainToAdd\n        });\n        assert(domain.name === domainToAdd, \"The added domain should be the requested domain\"); //console.log(domain)\n        //const deleted = await VercelAPI.delete.domain({name: domainToAdd, teamId})\n        //console.log(deleted)\n\n        await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].delete.domain({\n          name: domainToAdd,\n          teamId\n        });\n      });\n    });\n    describe('Post -> Verify a domain', function () {\n      it('Post -> Verify Domain (Team) -> The domain hasnt been set up properly so it should return an error', async function () {\n        //console.log(expectedError)\n        const domainToAdd = generateFakeDomain();\n        const {\n          domain\n        } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].post.addDomain({\n          teamId\n        }, {\n          name: domainToAdd\n        }); //const { error } = await VercelAPI.post.verifyDomain({name: domainToAdd, teamId})\n\n        const verifyDomain = _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].post.verifyDomain({\n          name: domainToAdd,\n          teamId\n        });\n        const assertion = expect(verifyDomain).to.eventually.be.rejected.then(e => {\n          //console.log('HERE 999', e.error, domain.name)\n          //assert(e.statusCode ===)\n          expect(e.error.error.code).to.be.equal('verification_failed');\n          _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].delete.domain({\n            name: domainToAdd,\n            teamId\n          });\n        }); //assert( error.code === 'verification_failed', \"The verification of the domain should fail\" )\n        //console.log(domain)\n        //const deleted = await VercelAPI.delete.domain({name: domainToAdd, teamId})\n        //console.log(deleted)\n\n        return assertion; //done()\n      });\n    });\n  });\n  describe('API -> Delete', function () {\n    it('Delete -> Domain', async function () {\n      const domainToAdd = generateFakeDomain();\n      const {\n        domain\n      } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].post.addDomain({\n        teamId\n      }, {\n        name: domainToAdd\n      });\n      const {\n        uid\n      } = await _utils__WEBPACK_IMPORTED_MODULE_4__[\"VercelAPI\"].delete.domain({\n        name: domainToAdd,\n        teamId\n      });\n      assert(uid === domain.id, \"The deleted item should be the same that was created just before\");\n    });\n  });\n  /*\n  afterEach( function(){\n  })\n   after( function(){\n  })\n  */\n});\n\n//# sourceURL=webpack:///./src/apps/website/tests/utils.VercelAPI.test.js?");

/***/ }),

/***/ "./src/apps/website/types/Domain.graphql":
/*!***********************************************!*\
  !*** ./src/apps/website/types/Domain.graphql ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.1.1 \\n| extend type Query {\\n|   allDomains: [Domain]\");\n\n//# sourceURL=webpack:///./src/apps/website/types/Domain.graphql?");

/***/ }),

/***/ "./src/apps/website/types/Page.graphql":
/*!*********************************************!*\
  !*** ./src/apps/website/types/Page.graphql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.1.1 \\n| extend type Query {\\n|   allPages: [Page]\");\n\n//# sourceURL=webpack:///./src/apps/website/types/Page.graphql?");

/***/ }),

/***/ "./src/apps/website/types/Site.graphql":
/*!*********************************************!*\
  !*** ./src/apps/website/types/Site.graphql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> # @fwrlines/generator-graphql-server-type 2.1.1 \\n| extend type Query {\\n|   allSites: [Site]\");\n\n//# sourceURL=webpack:///./src/apps/website/types/Site.graphql?");

/***/ }),

/***/ "./src/apps/website/types/_stitch.graphql":
/*!************************************************!*\
  !*** ./src/apps/website/types/_stitch.graphql ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> extend input SiteInput {\\n|   domainName:String\\n| }\");\n\n//# sourceURL=webpack:///./src/apps/website/types/_stitch.graphql?");

/***/ }),

/***/ "./src/apps/website/types/index.js":
/*!*****************************************!*\
  !*** ./src/apps/website/types/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* babel-plugin-inline-import './Page.graphql' */\n\n/* @fwrlines/generator-graphql-server-type 2.1.1 */\nconst PageTypes = \"# @fwrlines/generator-graphql-server-type 2.1.1 \\nextend type Query {\\n  allPages: [Page]\\n  getPage(id: ID!): Page!\\n  #paginatedPage (page:Int, category: String):PaginatedPages\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addPage(input:PageInput!): Page!\\n  updatePage(id: ID!, input: PageInput!): Page!\\n  deletePage(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput PageInput {\\n  name:String\\n  slug:String\\n  }\\n\\ntype Page {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  #metadata:String\\n  #data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedPages {\\n#  docs: [Page]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './Site.graphql' */\nconst SiteTypes = \"# @fwrlines/generator-graphql-server-type 2.1.1 \\nextend type Query {\\n  allSites: [Site]\\n  getSite(id: ID!): Site!\\n  #paginatedSite (page:Int, category: String):PaginatedSites\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addSite(input:SiteInput!): Site!\\n  updateSite(id: ID!, input: SiteInput!): Site!\\n  deleteSite(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput SiteInput {\\n  name:String\\n  }\\n\\ntype Site {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  #Data:String\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedSites {\\n#  docs: [Site]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './Domain.graphql' */\nconst DomainTypes = \"# @fwrlines/generator-graphql-server-type 2.1.1 \\nextend type Query {\\n  allDomains: [Domain]\\n  getDomain(id: ID!): Domain!\\n  #paginatedDomain (page:Int, category: String):PaginatedDomains\\n}\\n\\nextend type Mutation {\\n  #Admin mutations\\n  addDomain(input:DomainInput!): Domain!\\n  updateDomain(id: ID!, input: DomainInput!): Domain!\\n  deleteDomain(id: ID!): ID!\\n\\n  #User mutations\\n  }\\n\\ninput DomainInput {\\n  name:String\\n  slug:String\\n  isOrdered:Boolean\\n  isBought:Boolean\\n  isInstalled:Boolean\\n  isError:Boolean\\n  vercelNameservers:[String]\\n  vercelTeamId:String\\n }\\n\\ntype Domain {\\n  id:ID!\\n  _string:String!\\n  name:String!\\n  slug:String!\\n  isOrdered:Boolean!\\n  isBought:Boolean!\\n  isInstalled:Boolean!\\n  isError:Boolean!\\n  vercelNameservers:[String]\\n  vercelTeamId:String\\n  main:String!\\n  isAddedToVercel:Boolean!\\n  createdAt:Float!\\n  updatedAt:Float!\\n}\\n\\n#type PaginatedDomains {\\n#  docs: [Domain]\\n#  totalDocs: Int!\\n#  limit: Int!\\n#  hasPrevPage: Boolean!\\n#  hasNextPage: Boolean!\\n#  page: Int!\\n#  totalPages: Int!\\n#  pagingCounter: Int!\\n#  prevPage: Int\\n#  nextPage: Int\\n#}\\n\";\n\n/* babel-plugin-inline-import './_stitch.graphql' */\nconst stitchTypes = \"extend input SiteInput {\\n  domainName:String\\n}\\n\\nextend type Site {\\n  domainName:String\\n  domain:Domain\\n}\\n\\nextend type Domain {\\n  site:Site\\n}\\n\\nextend input PageInput {\\n  siteId:ID \\n}\\n\\nextend type Page {\\n  siteId:ID\\n  website:Site\\n}\\n\\nextend type Site {\\n  pages:[Page]\\n}\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ([PageTypes, SiteTypes, DomainTypes, stitchTypes]);\n\n//# sourceURL=webpack:///./src/apps/website/types/index.js?");

/***/ }),

/***/ "./src/apps/website/utils/VercelAPI.js":
/*!*********************************************!*\
  !*** ./src/apps/website/utils/VercelAPI.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst base_url = 'https://api.vercel.com';\n\nconst isEmpty = obj => {\n  return Object.keys(obj).length === 0;\n};\n\nconst getQs = params => {\n  const hasParams = !isEmpty(params);\n  return hasParams ? '?' + querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params) : '';\n};\n\nconst headers = {\n  Authorization: `Bearer ${process.env.VERCEL_API_SECRET}`\n};\nconst apiEndpoints = {\n  GET: {\n    domains: params => `/v5/domains${getQs(params)}`,\n    domain: ({\n      name,\n      ...params\n    }) => `/v4/domains/${name}${getQs(params)}`,\n    isDomainAvailable: name => `/v4/domains/status?name=${name}`,\n    teams: () => '/v1/teams'\n  },\n  POST: {\n    verifyDomain: ({\n      name,\n      ...params\n    }) => `/v4/domains/${name}/verify${getQs(params)}`,\n    addDomain: params => `/v4/domains${getQs(params)}`\n  },\n  DELETE: {\n    domain: ({\n      name,\n      ...params\n    }) => `/v4/domains/${name}${getQs(params)}`\n  }\n};\nconst apiMethods = {\n  GET: getEndpoint => async (params = {}) => {\n    const endpoint = getEndpoint(params);\n    var options = {\n      headers,\n      method: 'GET',\n      uri: base_url + endpoint,\n      json: true\n    }; //console.log(endpoint, params, options)\n\n    return await request_promise__WEBPACK_IMPORTED_MODULE_0___default()(options);\n  },\n  POST: getEndpoint => async (params = {}, body) => {\n    const endpoint = getEndpoint(params);\n    var options = {\n      headers,\n      body,\n      method: 'POST',\n      uri: base_url + endpoint,\n      json: true\n    };\n    return await request_promise__WEBPACK_IMPORTED_MODULE_0___default()(options);\n  },\n  DELETE: getEndpoint => async (params = {}) => {\n    const endpoint = getEndpoint(params);\n    var options = {\n      headers,\n      method: 'DELETE',\n      uri: base_url + endpoint,\n      json: true\n    };\n    return await request_promise__WEBPACK_IMPORTED_MODULE_0___default()(options);\n  }\n};\nconst VercelAPI = {};\nObject.keys(apiEndpoints).forEach(e => {\n  VercelAPI[e.toLowerCase()] = {};\n  const m = VercelAPI[e.toLowerCase()];\n  Object.keys(apiEndpoints[e]).forEach(f => {\n    m[f] = apiMethods[e](apiEndpoints[e][f]);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (VercelAPI);\n\n//# sourceURL=webpack:///./src/apps/website/utils/VercelAPI.js?");

/***/ }),

/***/ "./src/apps/website/utils/index.js":
/*!*****************************************!*\
  !*** ./src/apps/website/utils/index.js ***!
  \*****************************************/
/*! exports provided: VercelAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VercelAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VercelAPI */ \"./src/apps/website/utils/VercelAPI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VercelAPI\", function() { return _VercelAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/apps/website/utils/index.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  installedApps: ['auth', 'oauth2', 'car', 'dictionary', 'website', 'business']\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/database/config.js":
/*!********************************!*\
  !*** ./src/database/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  development: {\n    DB_NAME: process.env.POSTGRES_DEV_DB_NAME,\n    USER: process.env.POSTGRES_DEV_USER,\n    PASSWORD: process.env.POSTGRES_DEV_PASSWORD,\n    HOST: process.env.POSTGRES_DEV_HOST,\n    USE_SSL: process.env.POSTGRES_DEV_USE_SSL === 'true',\n    SSL_CLIENT_KEY: process.env.POSTGRES_DEV_SSL_CLIENT_KEY,\n    SSL_CLIENT_CERT: process.env.POSTGRES_DEV_SSL_CLIENT_CERT,\n    SSL_SERVER_CA: process.env.POSTGRES_DEV_SSL_SERVER_CA,\n    LOGGING: process.env.SQL_LOGGING === 'true' ? console.log : false,\n    //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql\n    REJECT_UNAUTHORIZED: true\n  },\n  production: {\n    DB_NAME: process.env.POSTGRES_PROD_DB_NAME,\n    USER: process.env.POSTGRES_PROD_USER,\n    PASSWORD: process.env.POSTGRES_PROD_PASSWORD,\n    HOST: process.env.POSTGRES_PROD_HOST,\n    USE_SSL: process.env.POSTGRES_PROD_USE_SSL === 'true',\n    SSL_CLIENT_KEY: process.env.POSTGRES_PROD_SSL_CLIENT_KEY,\n    SSL_CLIENT_CERT: process.env.POSTGRES_PROD_SSL_CLIENT_CERT,\n    SSL_SERVER_CA: process.env.POSTGRES_PROD_SSL_SERVER_CA,\n    LOGGING: process.env.SQL_LOGGING === 'true' ? console.log : false,\n    //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql\n    REJECT_UNAUTHORIZED: true\n  }\n});\n\n//# sourceURL=webpack:///./src/database/config.js?");

/***/ }),

/***/ "./src/database/connector.js":
/*!***********************************!*\
  !*** ./src/database/connector.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tls */ \"tls\");\n/* harmony import */ var tls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tls__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ \"./src/database/config.js\");\n\n\n\nconst C = _config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"][process.env.MODE];\n\nconst decodeBase64 = s => String(new Buffer.from(s, 'base64'));\n\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"](C.DB_NAME, C.USER, C.PASSWORD, {\n  host: C.HOST,\n  logging: C.LOGGING,\n  //logging       :false,\n  dialect: 'postgres',\n  dialectOptions: {\n    ssl: C.USE_SSL ? {\n      key: decodeBase64(C.SSL_CLIENT_KEY),\n      cert: decodeBase64(C.SSL_CLIENT_CERT),\n      ca: decodeBase64(C.SSL_SERVER_CA),\n      rejectUnauthorized: false //https://stackoverflow.com/questions/33878356/certificate-validation-on-cloud-sql\n\n    } : undefined\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequelize);\n\n//# sourceURL=webpack:///./src/database/connector.js?");

/***/ }),

/***/ "./src/loadModels.js":
/*!***************************!*\
  !*** ./src/loadModels.js ***!
  \***************************/
/*! exports provided: models */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"models\", function() { return models; });\n/* harmony import */ var _database_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database/connector */ \"./src/database/connector.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nif (process.env.DEBUG === 'true') {\n  console.log('LOADING => ORM Models from :', _config__WEBPACK_IMPORTED_MODULE_1___default.a.installedApps);\n}\n\nvar modelGetters = {};\nconst models = {};\n_config__WEBPACK_IMPORTED_MODULE_1___default.a.installedApps.forEach(appName => {\n  const localModels = __webpack_require__(\"./src/apps sync recursive ^\\\\.\\\\/.*\\\\/models$\")(`./${appName}/models`);\n\n  if (localModels) {\n    modelGetters = { ...modelGetters,\n      ...localModels\n    };\n  }\n});\nObject.keys(modelGetters).forEach(key => {\n  models[key] = modelGetters[key](_database_connector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\nObject.keys(models).forEach(key => {\n  if ('associate' in models[key]) {\n    models[key].associate(models);\n  }\n});\n\nif (process.env.DEBUG === 'true') {\n  console.log(`OK => ${Object.keys(models).length} models loaded :`, Object.keys(models));\n}\n\n\n\n//# sourceURL=webpack:///./src/loadModels.js?");

/***/ }),

/***/ "./src/loadSchema.js":
/*!***************************!*\
  !*** ./src/loadSchema.js ***!
  \***************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* babel-plugin-inline-import './utils/schemas/query.graphql' */\nconst query = \"type Query {\\n  _empty: String\\n}\\nenum CacheControlScope {\\n  PUBLIC\\n  PRIVATE\\n}\\n\\ndirective @cacheControl (\\n  maxAge: Int\\n  scope: CacheControlScope\\n) on FIELD_DEFINITION | OBJECT | INTERFACE\\n\";\n\n/* babel-plugin-inline-import './utils/schemas/mutation.graphql' */\nconst mutation = \"type Mutation {\\n  _empty: String\\n}\\n\";\n\nif (process.env.DEBUG === 'true') {\n  console.log('LOADING => GraphQL Schema from :', _config__WEBPACK_IMPORTED_MODULE_0___default.a.installedApps);\n}\n\nconst dependencies = [];\nconst baseTypes = [query, mutation];\nconst typeDefs = [...baseTypes];\nconst resolvers = [];\n_config__WEBPACK_IMPORTED_MODULE_0___default.a.installedApps.forEach(appName => {\n  const {\n    dependencies: localDependencies,\n    models: localModels,\n    resolvers: localResolvers,\n    types: localTypes\n  } = __webpack_require__(\"./src/apps sync recursive ^\\\\.\\\\/.*$\")(`./${appName}`);\n\n  dependencies.push({\n    name: appName,\n    dependencies: localDependencies\n  });\n  localTypes && typeDefs.push(...localTypes);\n  localResolvers && resolvers.push(...localResolvers);\n  /*\n  if(localModels) {\n    models = {\n      ...models,\n      ...localModels,\n    }\n  }\n  */\n}); //console.log(131313, 'exporting soon')\n\nif (process.env.DEBUG === 'true') {\n  const checkDependencies = () => {\n    dependencies.forEach((e, i, a) => {\n      const previousItems = a.slice(0, i);\n      const valid = e.dependencies.reduce((a, f) => {\n        const satisfied = previousItems.find(k => k.name === f) ? true : false; //console.log(`In package ${e.name}, dependency ${f} is satisfied :`, satisfied )\n\n        if (!satisfied) {\n          throw new Error(`In package ${e.name}, dependency ${f} not is satisfied. Make sure that ${f} is correctly loaded and that ${f} is loaded before ${e.name}.`);\n        }\n\n        return satisfied ? a * 1 : a * 0;\n      }, 1); //const dependenciesAreValid = { name: e.name, valid }\n    });\n  };\n\n  checkDependencies();\n  console.log(`OK => ${_config__WEBPACK_IMPORTED_MODULE_0___default.a.installedApps.length} apps loaded :`, _config__WEBPACK_IMPORTED_MODULE_0___default.a.installedApps);\n}\n\n\n\n//# sourceURL=webpack:///./src/loadSchema.js?");

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: default, getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getModel\", function() { return getModel; });\n/* harmony import */ var _loadModels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadModels.js */ \"./src/loadModels.js\");\n/*\nimport { models as modelGetters } from './loadApps'\n\nimport sequelize from 'database/connector'\n\nconst models = {}\n\nconst getModel = (modelName) => models[modelName]\nexport { getModel }\n\n\nconsole.log(665, 'loading models now')\n\nObject.keys(modelGetters).forEach(key => {\n  models[key] = modelGetters[key](sequelize)\n})\n\nObject.keys(models).forEach(key => {\n  if ('associate' in models[key]) {\n    models[key].associate(models)\n  }\n})\n\nconsole.log(777, 'models should be full', models)\n\nexport default models\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_loadModels_js__WEBPACK_IMPORTED_MODULE_0__[\"models\"]);\n\nconst getModel = () => {\n  return {};\n};\n\n\n\n//# sourceURL=webpack:///./src/models.js?");

/***/ }),

/***/ "./src/rootSchema.js":
/*!***************************!*\
  !*** ./src/rootSchema.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadSchema */ \"./src/loadSchema.js\");\n //import typeDefs from './typeDefs'\n//import resolvers from './resolvers'\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n  typeDefs: _loadSchema__WEBPACK_IMPORTED_MODULE_1__[\"typeDefs\"],\n  resolvers: _loadSchema__WEBPACK_IMPORTED_MODULE_1__[\"resolvers\"]\n}));\n\n//# sourceURL=webpack:///./src/rootSchema.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apps_auth_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/auth/passport */ \"./src/apps/auth/passport.js\");\n/* harmony import */ var _rootSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootSchema */ \"./src/rootSchema.js\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apps_oauth2_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps/oauth2/router */ \"./src/apps/oauth2/router.js\");\n/* harmony import */ var _database_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./database/connector */ \"./src/database/connector.js\");\n/* harmony import */ var apollo_cache_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-cache-control */ \"apollo-cache-control\");\n/* harmony import */ var apollo_cache_control__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_control__WEBPACK_IMPORTED_MODULE_11__);\n/* eslint-disable no-console */\nif (process.env.LOCAL) {\n  __webpack_require__(/*! dotenv */ \"dotenv\").config();\n}\n\n\n //import { User, Token } from 'models'\n\n\n\n\n\n\n\n\n //import bodyParser from 'body-parser'\n\n\n\nconst port = 4000;\nconst {\n  //DB_LOCAL //Deprecated\n  DEBUG,\n  CORS,\n  JWT_SECRET,\n  PROFILE_NAME,\n  MODE\n} = process.env;\nlet playground, logError, logResponse;\nconst IS_DEBUG = DEBUG === 'true';\nconst WITH_CORS = CORS === 'true';\n\nif (IS_DEBUG) {\n  playground = {\n    endpoint: '/graphql',\n    settings: {\n      'editor.theme': 'dark'\n    }\n  };\n\n  const logError = error => {\n    console.log('> > > ERROR');\n    console.log(error);\n    console.log('> > > END OF ERROR');\n    return error;\n  };\n\n  const logResponse = res => {\n    console.log('> > > RESPONSE');\n    console.log(res);\n    console.log('< < < END OF RESPONSE');\n    return res;\n  };\n}\n\nconst server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__[\"ApolloServer\"]({\n  schema: _rootSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  playground,\n  cors: WITH_CORS,\n  introspection: IS_DEBUG,\n  tracing: true,\n  debug: IS_DEBUG,\n  formatError: logError,\n  formatResponse: logResponse,\n  cacheControl: {// OR : true\n    //stripFormattedExtensions: false,\n    //defaultMaxAge: 604800,\n    //calculateHttpHeaders: true\n  },\n  extensions: [() => new apollo_cache_control__WEBPACK_IMPORTED_MODULE_11__[\"CacheControlExtension\"]({\n    defaultMaxAge: 604800,\n    calculateHttpHeaders: true\n  })],\n  context: async ({\n    req\n  }) => {\n    const c = {};\n    c.user = req.user;\n    c.headers = req.headers;\n    return c;\n    /* THIS if we decide to store the JWT. Else we use the JWTStrategy\n    let c = {}\n    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ''\n    if (token){\n      //const t = await Token.findOne({ token }).populate({ path: 'user', model: User })\n      let verifyOptions = {\n        // issuer:  i,\n        // subject:  s,\n        // audience:  a,\n        expiresIn:process.env.SESSION_DURATION,\n        algorithm:[\n          'RS256'\n        ]\n      }\n      let ver = ''\n      try {\n        ver = jwt.verify(token,\n          JWT_SECRET,\n          verifyOptions)\n       }\n      catch (JsonWebTokenError) {\n        throw new AuthenticationError('must authenticate')\n      }\n       c = {\n        user      :t.user,\n        token     :t,\n        authorized:ver\n      }\n    }\n    c.user = req.user\n    c.client = {\n      ip:req.headers.origin,\n      ua:req.headers['user-agent']\n      //al:req.headers['accept-language'] //Notsure we need this ATM but will be useful for future trckn\n    }\n    if (IS_DEBUG){\n      console.log('Context : ', c)\n    }\n    return c\n    */\n  }\n});\nconst app = express__WEBPACK_IMPORTED_MODULE_6___default()();\napp.use('/', (req, res, next) => {\n  //console.log('HEYTHERE',req.headers, req.body)\n  next();\n}); //app.use(bodyParser.urlencoded({ extended: false }))\n//app.use(bodyParser.json())\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_8___default()());\npassport__WEBPACK_IMPORTED_MODULE_7___default.a.use(_apps_auth_passport__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(passport__WEBPACK_IMPORTED_MODULE_7___default.a.initialize());\napp.use('/auth', _apps_oauth2_router__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', (req, res, next) => {\n  passport__WEBPACK_IMPORTED_MODULE_7___default.a.authenticate('jwt', {\n    session: false\n  }, (err, user, info) => {\n    if (user) {\n      req.user = user;\n    }\n\n    next();\n  })(req, res, next);\n});\nserver.applyMiddleware({\n  app\n});\n/*\nsequelize.sync({ alter: true }).then(\n  async () => {\n    app.listen({ port }, () =>\n      console.log(`🌋 Server ready at http://localhost:${port}${server.graphqlPath}`)\n    )\n  }\n)\n*/\n\napp.listen({\n  port\n}, () => {\n  console.log(`OK => Loaded profile  ${PROFILE_NAME} in mode ${MODE}`);\n  console.log(`OK => Server ready at http://localhost:${port}${server.graphqlPath}`);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils/email/EmailSender.js":
/*!****************************************!*\
  !*** ./src/utils/email/EmailSender.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GOOGLE_OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';\n\nclass EmailSender {\n  constructor({\n    service = 'gmail',\n    ...props\n  }) {\n    this.service = service;\n    this.props = {\n      clientId: process.env.EMAIL_API_CLIENT_ID,\n      clientSecret: process.env.EMAIL_API_CLIENT_SECRET,\n      refreshToken: process.env.EMAIL_API_REFRESH_TOKEN,\n      user: process.env.SENDER_EMAIL_ADDRESS,\n      sender: process.env.SENDER_EMAIL_ADDRESS\n    };\n    this.props = { ...this.props,\n      ...props\n    };\n  }\n\n  getTransport() {\n    this.smtpTransport = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n      service: this.service,\n      auth: {\n        type: 'OAuth2',\n        user: this.props.user,\n        clientId: this.props.clientId,\n        clientSecret: this.props.clientSecret,\n        refreshToken: this.props.refreshToken,\n        accessToken: this.props.accessToken || this.accessToken\n      }\n    });\n    return this.smtpTransport;\n  }\n\n  getGoogleAccessToken() {\n    this.oauth2Client = new googleapis__WEBPACK_IMPORTED_MODULE_1__[\"google\"].OAuth2(this.props.clientId, this.props.clientSecret, GOOGLE_OAUTH_PLAYGROUND);\n    this.oauth2Client.setCredentials();\n    this.accessToken = this.oauth2Client.getAccessToken();\n    return this.accessToken;\n  }\n\n  async send(dry = false) {\n    if (!this.props.accessToken) {\n      if (this.provider === 'gmail') {\n        this.getGoogleAccessToken();\n      }\n    }\n\n    const transport = this.getTransport();\n    const mailOptions = {\n      from: this.props.sender,\n      to: this.props.to,\n      subject: this.props.subject,\n      text: this.props.text,\n      html: this.props.content\n    };\n\n    if (dry) {\n      return {\n        accepted: [`${this.props.sender}`],\n        response: `250 2.0.0 OK  ${Math.trunc(Date.now() / 1000)}`\n      };\n    }\n\n    const result = await transport.sendMail(mailOptions);\n    /*result shape\n     {\n      accepted    :[ 'adrian.villa.g@gmail.com' ],\n      rejected    :[],\n      envelopeTime:192,\n      messageTime :714,\n      messageSize :650,\n      response    :'250 2.0.0 OK  1590169379 p10sm9894385wrn.10 - gsmtp',\n      envelope    :{ from: 'ale@gmail.com', to: [ 'avg@gmail.com' ] },\n      messageId   :'<7a090bbb-e62c-0583-616a-f631b8390245@meccamico.com>'\n    }*/\n\n    return result;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSender);\n\n//# sourceURL=webpack:///./src/utils/email/EmailSender.js?");

/***/ }),

/***/ "./src/utils/email/index.js":
/*!**********************************!*\
  !*** ./src/utils/email/index.js ***!
  \**********************************/
/*! exports provided: EmailSender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmailSender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSender */ \"./src/utils/email/EmailSender.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmailSender\", function() { return _EmailSender__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/utils/email/index.js?");

/***/ }),

/***/ "./src/utils/errors/ConfigurationError.js":
/*!************************************************!*\
  !*** ./src/utils/errors/ConfigurationError.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-errors */ \"apollo-errors\");\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_errors__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])('ConfigurationError', {\n  message: 'There is a problem with the current software configuration.'\n}));\n\n//# sourceURL=webpack:///./src/utils/errors/ConfigurationError.js?");

/***/ }),

/***/ "./src/utils/errors/NotUniqueError.js":
/*!********************************************!*\
  !*** ./src/utils/errors/NotUniqueError.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-errors */ \"apollo-errors\");\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_errors__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])('NotUniqueError', {\n  message: 'One of the required fields should be unique'\n}));\n\n//# sourceURL=webpack:///./src/utils/errors/NotUniqueError.js?");

/***/ }),

/***/ "./src/utils/errors/ObjectNotFoundError.js":
/*!*************************************************!*\
  !*** ./src/utils/errors/ObjectNotFoundError.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-errors */ \"apollo-errors\");\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_errors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PUBLIC_ERROR_OPTIONS = {\n  showPath: false,\n  showLocations: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_errors__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])('ObjectNotFoundError', {\n  message: 'Object not found',\n  options: PUBLIC_ERROR_OPTIONS\n}));\n\n//# sourceURL=webpack:///./src/utils/errors/ObjectNotFoundError.js?");

/***/ }),

/***/ "./src/utils/errors/ValidationError.js":
/*!*********************************************!*\
  !*** ./src/utils/errors/ValidationError.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-errors */ \"apollo-errors\");\n/* harmony import */ var apollo_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_errors__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_errors__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])('ValidationError', {\n  message: 'The provided data is not valid.'\n}));\n\n//# sourceURL=webpack:///./src/utils/errors/ValidationError.js?");

/***/ }),

/***/ "./src/utils/errors/index.js":
/*!***********************************!*\
  !*** ./src/utils/errors/index.js ***!
  \***********************************/
/*! exports provided: ConfigurationError, NotUniqueError, ObjectNotFoundError, ValidationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfigurationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigurationError */ \"./src/utils/errors/ConfigurationError.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConfigurationError\", function() { return _ConfigurationError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _NotUniqueError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotUniqueError */ \"./src/utils/errors/NotUniqueError.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotUniqueError\", function() { return _NotUniqueError__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _ObjectNotFoundError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObjectNotFoundError */ \"./src/utils/errors/ObjectNotFoundError.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectNotFoundError\", function() { return _ObjectNotFoundError__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValidationError */ \"./src/utils/errors/ValidationError.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ValidationError\", function() { return _ValidationError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/errors/index.js?");

/***/ }),

/***/ "./src/utils/helpers/index.js":
/*!************************************!*\
  !*** ./src/utils/helpers/index.js ***!
  \************************************/
/*! exports provided: suMethod, userMethod, isEmpty, randomString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _suMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suMethod */ \"./src/utils/helpers/suMethod.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"suMethod\", function() { return _suMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _userMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userMethod */ \"./src/utils/helpers/userMethod.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"userMethod\", function() { return _userMethod__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isEmpty */ \"./src/utils/helpers/isEmpty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _randomString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomString */ \"./src/utils/helpers/randomString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return _randomString__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/helpers/index.js?");

/***/ }),

/***/ "./src/utils/helpers/isEmpty.js":
/*!**************************************!*\
  !*** ./src/utils/helpers/isEmpty.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (value => value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0);\n\n//# sourceURL=webpack:///./src/utils/helpers/isEmpty.js?");

/***/ }),

/***/ "./src/utils/helpers/randomString.js":
/*!*******************************************!*\
  !*** ./src/utils/helpers/randomString.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst randomString = () => Math.random().toString(36).substring(2, 15);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (length => {\n  let current = '';\n\n  while (current.length < length) {\n    current += randomString();\n  }\n\n  return current.substring(0, length);\n});\n\n//# sourceURL=webpack:///./src/utils/helpers/randomString.js?");

/***/ }),

/***/ "./src/utils/helpers/suMethod.js":
/*!***************************************!*\
  !*** ./src/utils/helpers/suMethod.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction suMethod(method, user) {\n  //if (!user){\n  if (false) {} else {\n    return method;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (suMethod);\n\n//# sourceURL=webpack:///./src/utils/helpers/suMethod.js?");

/***/ }),

/***/ "./src/utils/helpers/userMethod.js":
/*!*****************************************!*\
  !*** ./src/utils/helpers/userMethod.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((method, user) => {\n  //if (!user){\n  if (!user || !user.id) {\n    throw new apollo_server__WEBPACK_IMPORTED_MODULE_0__[\"AuthenticationError\"]({\n      code: 'not_authenticated',\n      message: 'Authentication Required'\n    });\n  } else {\n    return method;\n  }\n});\n\n//# sourceURL=webpack:///./src/utils/helpers/userMethod.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: ConfigurationError, NotUniqueError, ObjectNotFoundError, ValidationError, suMethod, userMethod, isEmpty, randomString, EmailSender, generateTestDataFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ \"./src/utils/errors/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConfigurationError\", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__[\"ConfigurationError\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotUniqueError\", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__[\"NotUniqueError\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectNotFoundError\", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__[\"ObjectNotFoundError\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ValidationError\", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__[\"ValidationError\"]; });\n\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/utils/helpers/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"suMethod\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"suMethod\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"userMethod\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"userMethod\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"randomString\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_1__[\"randomString\"]; });\n\n/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email */ \"./src/utils/email/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmailSender\", function() { return _email__WEBPACK_IMPORTED_MODULE_2__[\"EmailSender\"]; });\n\n/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests */ \"./src/utils/tests/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestDataFrom\", function() { return _tests__WEBPACK_IMPORTED_MODULE_3__[\"generateTestDataFrom\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/tests/generateTestDataFrom.js":
/*!*************************************************!*\
  !*** ./src/utils/tests/generateTestDataFrom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((generator, options = {}) => {\n  const data = generator();\n  const final_data = {};\n  Object.keys(data).forEach(e => {\n    final_data[e] = e in options ? options[e] : data[e];\n  });\n  return { ...options,\n    ...final_data\n  };\n});\n\n//# sourceURL=webpack:///./src/utils/tests/generateTestDataFrom.js?");

/***/ }),

/***/ "./src/utils/tests/index.js":
/*!**********************************!*\
  !*** ./src/utils/tests/index.js ***!
  \**********************************/
/*! exports provided: generateTestDataFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateTestDataFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateTestDataFrom */ \"./src/utils/tests/generateTestDataFrom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateTestDataFrom\", function() { return _generateTestDataFrom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/utils/tests/index.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/adrian_villa/code/fwrlines/template-graphql-server/src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server.js?");

/***/ }),

/***/ "apollo-cache-control":
/*!***************************************!*\
  !*** external "apollo-cache-control" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-control\");\n\n//# sourceURL=webpack:///external_%22apollo-cache-control%22?");

/***/ }),

/***/ "apollo-errors":
/*!********************************!*\
  !*** external "apollo-errors" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-errors\");\n\n//# sourceURL=webpack:///external_%22apollo-errors%22?");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server\");\n\n//# sourceURL=webpack:///external_%22apollo-server%22?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "chai-as-promised":
/*!***********************************!*\
  !*** external "chai-as-promised" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai-as-promised\");\n\n//# sourceURL=webpack:///external_%22chai-as-promised%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faker\");\n\n//# sourceURL=webpack:///external_%22faker%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"googleapis\");\n\n//# sourceURL=webpack:///external_%22googleapis%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ }),

/***/ "request-promise-core/errors":
/*!**********************************************!*\
  !*** external "request-promise-core/errors" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise-core/errors\");\n\n//# sourceURL=webpack:///external_%22request-promise-core/errors%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tls\");\n\n//# sourceURL=webpack:///external_%22tls%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });