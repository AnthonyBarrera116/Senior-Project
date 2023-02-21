const expApp = require('./App.js');
let hostname = 'localhost';
let port = 4000;

const server= expApp.app.listen(port,hostname,function(){
   console.log(`Server running in ${hostname}:${port}`);
});