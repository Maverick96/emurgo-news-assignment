const NodeCache = require('node-cache');

// Cache for 15 minutes
const cache = new NodeCache({ stdTTL: 900 }); 

module.exports = cache;