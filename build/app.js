'use strict';

var _config = require('./config/config.json');

var config = _interopRequireWildcard(_config);

var _models = require('./models');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(config.name);

console.log(new _models.User());
console.log(new _models.Product());