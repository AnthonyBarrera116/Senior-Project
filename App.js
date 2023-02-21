const express = require('express');
const morgan = require('morgan');
exports.app = express();
exports.app.use(morgan('dev'));

exports.app.use(express.static('View'));

exports.app.use(express.urlencoded({extended: true}));
exports.app.use(express.json());