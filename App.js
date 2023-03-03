const usercont = require('./userContoller');
const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging
const session = require('express-session');
const memorystore = require('memorystore')(session);
exports.app = express();
exports.app.use(morgan('dev'));
exports.app.use(session({
    secret: 'Pineapple - Guava - Orange',
    cookie: {maxAge: 86400000 }, // = 1000*60*60*24 = 24Hours
    store: new memorystore({ checkPeriod:86400000 }),
    resave: false,
    saveUninitialized: true
}));
exports.app.use(express.static('View'));

exports.app.use(express.urlencoded({extended: true}));
exports.app.use(express.json());
exports.app.post('/create', usercont.Create);
exports.app.post('/login', usercont.login);
exports.app.get('/loggedUser',usercont.loggedUser)
exports.app.get('/logout',usercont.logout)
