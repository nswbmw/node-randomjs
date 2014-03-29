var randexp = require('randexp').randexp;

module.exports = function(pattern, attributes) {
  return randexp(pattern, attributes);
}