var app=require("../utils/helper.js");

/**
*  UNIT TEST FOR usernameCheck FUNCTION
*/
describe("test_usernameCheck", function(){
    it("should not have the username avaiable",async function() {
        const data = await app.userNameCheck("sd");
        expect(data[0]['count']).toBe(1);
    });    
    it("should have the username avaiable",async function() {
        const data = await app.userNameCheck("randomuser");
        expect(data[0]['count']).toBe(0);
    });
});

/**
*  UNIT TEST FOR registerUser FUNCTION
*/
describe("test_registerUser", function(){
    it("Register - No enough parameters. This should give errors",async function() {
        const data1 = {
            username : null,
            password : 'test',
            Type : '0',
            gender : '1',
            family : 'true'
        };
        const registrationResponse = await app.registerUser(data1);
        expect(registrationResponse).toBe(null);
    });    
    it("Register - Got enough parameters. This should not give errors",async function() {
        const data2 = {
            username : 'test123',
            password : 'test',
            Type : '0',
            gender : '1',
            family : 'true'
        };
        const registrationResponse = await app.registerUser(data2);
        expect(registrationResponse).not.toBe(null);
    });
});

/**
*  UNIT TEST FOR login FUNCTION
*/
describe("test_login", function(){
    it("Login - Correct inputs. This should not give errors",async function() {
        const data1 = {
            username : "sew",
            password : "sew",
        };
        const response = await app.loginUser(data1);
        expect(response).not.toBe(null);
    }); 
    it("Login - Incorrect password. This should give errors",async function() {
        const data1 = {
            username : "sew",
            password : "sewq",
        };
        const response = await app.loginUser(data1);
        expect(response.length).toBe(0);
    }); 
    it("Login - null username. This should give errors",async function() {
        const data1 = {
            username : null,
            password : 'test',
        };
        const response = await app.loginUser(data1);
        expect(response.length).toBe(0);
    });    
    it("Login - null username and password. This should give errors",async function() {
        const data1 = {
            username : null,
            password : null,
        };
        const response = await app.loginUser(data1);
        expect(response.length).toBe(0);
    }); 
    it("Login - null password. This should give errors",async function() {
        const data1 = {
            username : 'test',
            password : null,
        };
        const response = await app.loginUser(data1);
        expect(response.length).toBe(0);
    }); 
    
    
});