describe('Password Controller Test', function() {
	beforeEach(module("angularjsUnitTestApp"));

	var passwordCtrl=null;
	var mockScope = {};

	beforeEach(inject(function($controller) {
		passwordCtrl = 
					$controller("PasswordcontrollerCtrl", {
					$scope: mockScope	
					})

	}));

	it("Validation about strong label password", function () {
		passwordCtrl.password = '1234567890';
		passwordCtrl.grade();
		expect(passwordCtrl.strength).toEqual("strong")
	});
});