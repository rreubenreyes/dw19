'use strict';

/** Common config */

// read .env files and make environmental variables
require('dotenv').config();

/** Re-enable if Postgres Database Needed */
// pull db uri from .env or actual ENV
// let DB_URI = process.env.DATABASE_URL || 'postgresql:///postgresdbname';

// if test environment is active, optimize for performance and convenience
// if (process.env.NODE_ENV === 'test') {
//   DB_URI = 'postgresql:///postgresdbname-test';
// }

var SECRET_KEY = process.env.SECRET_KEY;
var SERVER_PORT = process.env.PORT || 3001;
var API_BASE = 'https://api.tomtom.com/geofencing/1';
var ADMIN_KEY = process.env.ADMIN_KEY;
var API_KEY = process.env.API_KEY;
var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';

module.exports = {
	SECRET_KEY: SECRET_KEY,
	SERVER_PORT: SERVER_PORT,
	API_BASE: API_BASE,
	ADMIN_KEY: ADMIN_KEY,
	API_KEY: API_KEY,
	GOOGLE_API_KEY: GOOGLE_API_KEY
};