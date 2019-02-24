'use strict';

var app = require('./app');

var _require = require('./config'),
    SERVER_PORT = _require.SERVER_PORT;

app.listen(SERVER_PORT, function () {
  console.log('Server starting on port ' + SERVER_PORT + '!');
});