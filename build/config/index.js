'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config;
if (process.env.NODE_ENV == 'development') {
    const localConfig = {
        port: 8081
    };
    config = _lodash2.default.extend(config, localConfig);
}

if (process.env.NODE_ENV == 'production') {
    const proConfig = {
        port: 8081
    };
    config = _lodash2.default.extend(config, proConfig);
}

exports.default = config;