'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'secret': 'nodeauthsecret',
  'database': process.env.NODE_ENV == 'test' ? 'mongodb://localhost/mochaDemotest' : 'mongodb://localhost/mochaDemo'
};
module.exports = exports['default'];