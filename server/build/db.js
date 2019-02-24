'use strict';

/** Database connection for app */

var _require = require('pg'),
    Client = _require.Client;

var _require2 = require('./config'),
    DB_URI = _require2.DB_URI;

var client = new Client(DB_URI);

client.connect();

module.exports = client;