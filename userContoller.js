let dao = require("./UserDAO");
const session = require("express-session");
//const passUtil = require('../Util/PasswordUtil');
//let dao = require("./MockUserDao");

exports.setDao = function(otherDao)
{
    dao = otherDao;
}

exports.login = async function(req, res){

    let email = req.body.emailUser;
    let password = req.body.password;
    let user = await dao.login(email, password);
    
    if(user == null){ //login successful
        
        
        res.redirect('AccountPage.html?error=1');
        
    }
    else{ 

        user.Password = null; //for security
        //Save the user in the session
        
        req.session.user = user;
        res.redirect('profile.html?history=' + user.History);
        
    }
}

exports.loggedUser = function(req,res){

    res.status(200); 

    res.send( req.session.user ); 

    res.end(); 
}

exports.logout = function(req, res){

    req.session.user = null;

    res.redirect('About.html');
}

exports.Create = async function(req,res){
    let newuser = {}; 

    newuser.Email = req.body.emailUser;
    newuser.Password = req.body.password;
    newuser.History = [];

    let userExist = await dao.findOne(newuser.Email);

    console.log(userExist)

    if(userExist === null){

        dao.create(newuser);    
        res.redirect('About.html');

    }
    else{    
        
        res.redirect('CreateAccount.html?error=1');

    }
}