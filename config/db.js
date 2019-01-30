export default {
  'secret': 'nodeauthsecret',
  'database': process.env.NODE_ENV == 'test' ? 'mongodb://localhost/mochaDemotest' : 'mongodb://localhost/mochaDemo'
};