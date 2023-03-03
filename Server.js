const dotenv = require('dotenv');
dotenv.config();
require('dotenv').config();
const dbcon = require('./dbConnect');
dbcon.connect();

const ExpressApp = require('./app.js');

ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});