const dbcon = require('../Model/dbConnect');
let dao = require("../Model/UserDAO");

beforeAll(function(){
    dbcon.connect();
});


test('createUser', async function()
{
    let newuser = {}; 

    newuser.Email = "Test@gmail.com";
    newuser.Password = "123456";
    newuser.History = [];

    let user = await dao.create(newuser);
    expect(user).not.toBe(null);
    
});

test('duplicate', async function()
{
    let newuser = {}; 

    newuser.Email = "Test@gmail.com";
    newuser.Password = "123456";
    newuser.History = [];

    let dup = await dao.findOne({Email: "Test@gmail.com"});

    expect(dup.Email).toBe(newuser.Email);
    
});

test('find', async function()
{ 

    let user = await dao.findOne({Email: "Test@gmail.com"});
    expect(user).not.toBe(null);

});

test('login', async function()
{ 

    let user = await dao.login({Email: "Test@gmail.com", Password: "123456"});
    expect(user).not.toBe(null);

});