const dbcon = require('../Model/dbConnect');
const dao = require('../Model/UserDAO');

const passUtil = require('../util/Password');
beforeAll(function(){
    dbcon.connect('test');
});
afterEach(function(){
    //No need
});

test('Create new user test',async function(){
    let newdata = {Email:'test@test.com',
                    password:passUtil.hashPassword("123456"),
                    history: []};
    let created = await dao.create(newdata);
    let found = await dao.read(created._id);
    expect(created.Email).toBe(found.Email); //assertion
});


test('Log in User',async function(){
    let newdata = {Email:'test@test.com',
                    password:passUtil.hashPassword("123456")};
    let dup = await dao.login(newdata.Email,newdata.password);
    let found = await dao.read(dup._id);
    expect(dup.Email).toBe(found.Email); //assertion
});

test('Duplicate User',async function(){
    let newdata = {Email:'test@test.com',
                    password:passUtil.hashPassword("123456")};
    let dup = await dao.find(newdata.Email);
    let found = await dao.read(dup._id);
    expect(dup.Email).toBe(found.Email); //assertion
});

afterAll(async function(){
    await dao.deleteAll();
    dbcon.disconnect();
});