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
            username : "as",
            password : "as",
        };
        const response = await app.loginUser(data1);
        expect(response).not.toBe(null);
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

/**
*  end to end - TEST FOR 
*	login -> set_session -> session_check-online -> check whether logged out -> logout -> reset_session -> session_check-offline
*/
describe("test_", function(){
	it("User login.",async function() {
        const data1 = {
            username : "tom",
            password : "tom",
        };
        const response = await app.loginUser(data1);
        expect(response).not.toBe(null);
    });
	it("set socket. Going online.",async function() {
        const response = await app.addSocketId(68, 12345);
        expect(response).not.toBe(null);
    });	
    it("User should be available online. return username",async function() {
        const data = await app.userSessionCheck(68)
        expect(data).toBe('tom');
    });    
    it("check whether user logged out. not logged out. return Y",async function() {
        const data = await app.isUserLoggedOut(12345)
        expect(data[0]['online']).toEqual('Y');
    });
	it("User logging out",async function() {
        const data = await app.logoutUser(12345)
        expect(data).not.toBe(null);
    });
	it("check whether user logged out. logged out. return Null",async function() {
        const data = await app.userSessionCheck(68)
        expect(data).toBe(null);
    });
	
	
});

describe("test_", function(){
	it("User login_E2E",async function() {
        const data1 = {
            username : "tom",
            password : "tom",
        };
        const response = await app.loginUser(data1);
        const response1 = await app.addSocketId(68, 12345);
        const data = await app.userSessionCheck(68);
		const data1_ = await app.isUserLoggedOut(12345);
		const data2 = await app.logoutUser(12345)
		const data4 = await app.userSessionCheck(68)
        expect(data4).toBe(null);
    });
});