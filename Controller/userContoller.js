const dao = require('../Model/UserDAO');
const passUtil = require('../util/PasswordUtil');

exports.postCreateOrUpdate = function(req,res){

    let newuser = {}; //empty obj
    newuser.Email = req.body.emailUser;
    newuser.password = passUtil.hashPassword(req.body.password);

    if(req.body.txt_id){
        //update user
        console.log('Update user');
        newuser.history = req.body.history;
        dao.update(newuser);
    }
    else{
        //insert user
        dao.create(newuser);        
    }
    res.redirect('login.html');
}

exports.login = async function(req, res){
    let plogin = req.body.emailUser;
    let pwd = passUtil.hashPassword(req.body.password);
    let user = await dao.login(plogin, pwd);
    if(user != null){ //login successful
        user.password = null; //for security
        //Save the user in the session
        req.session.user = user;
        res.redirect('profile.html');
    }
    else{ //incorrect login or password
        res.redirect('login.html?error=1');
    }
}

exports.loggedUser = function(req,res){
    res.status(200); // 200 = Ok
    res.send( req.session.user ); //send the logged user'
    res.end(); 
}

exports.logout = function(req, res){
    req.session.user = null;
    res.redirect('about.html');
}

exports.getHistory = function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = dao.read(id);

    if(found !== null){ //We found the requested user
        res.status(200); //200 = OK
        res.send(found); //Send the found user
    }
    else{ //The requested id does not exist
        res.status(404); //404 = Not Found
        res.send({msg:'User not found.'}); //send a message
    }
    res.end(); //ends the response (only 1 end per response)
}