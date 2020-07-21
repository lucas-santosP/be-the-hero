const crypto = require("crypto"); //node lib

module.exports = generateUniqueId = () => crypto.randomBytes(4).toString("HEX");
