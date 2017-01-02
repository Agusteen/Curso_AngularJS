describe('Password Controller Test', function () {

    beforeEach(module("angularjsTestApp"));
    
    var passwordCtrl = null;
    var mockScope = {};
    
    beforeEach(inject(function ($controller) {
        passwordCtrl = 
            $controller("PasswordcontrollerCtrl",{
            $scope: mockScope
        })
    }));
    
    
    it("Validation about strong label password", function () {
        passwordCtrl.password = "123456789";
        passwordCtrl.grade();        
        expect(passwordCtrl.strength).toEqual("strong")
    });
    
    it("Validation about medium label password", function () {
        passwordCtrl.password = "1234";
        passwordCtrl.grade();        
        expect(passwordCtrl.strength).toEqual("medium")
    });
    
    it("Validation about weak label password", function () {
        passwordCtrl.password = "12";
        passwordCtrl.grade();        
        expect(passwordCtrl.strength).toEqual("weak")
    });
    
});