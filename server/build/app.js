'use strict';

/** Express app */
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');

// class models
var APIError = require('./models/ApiError');

// don't provide http logging during automated tests
if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
	// middleware for logging HTTP requests to console
	var morgan = require('morgan');
	app.use(morgan('tiny'));
}

// enable cors on all routes
app.use(cors());

// middleware for parsing req.body and json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
var projectRoutes = require('./routes/projects');

// serer static react files
var staticFiles = express.static(path.join(__dirname, '../client/build'));
console.log(staticFiles);
app.use(staticFiles);

// routing Control
app.use('/projects', projectRoutes);

app.use('/*', staticFiles);

/** 404 handler */
app.use(function (req, res, next) {
	var err = new APIError(req.url + ' is not a valid path to a API resource.');
	err.status = 404;

	// pass the error to the next piece of middleware
	return next(err);
});

/** general error handler */
app.use(function (err, req, res, next) {
	// all errors that get to here get coerced into API Errors
	if (!(err instanceof APIError)) {
		err = new APIError(err.message, err.status);
	}
	return res.status(err.status).json(err);
});

module.exports = app;