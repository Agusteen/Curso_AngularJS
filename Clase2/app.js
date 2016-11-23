(function () {
	'use strict'; //js que escriba siga toda las reglas de semantica de javascript
	angular.module('adivinarNumeroApp', [])
	.controller('controlNum', controlNum);

	function controlNum($scope) {
		$scope.verifyGuess = function () {
			$scope.desviation = $scope.origianl - $scope.guess;
			$scope.noOfTries = $scope.noOfTries + 1;
		}

		$scope.initializeGame = function() {
			$scope.noOfTries = 0;
			$scope.origianl = Math.floor((Math.random() * 1000) + 1);
			$scope.guess = null;
			$scope.desviation = null;
		}

		$scope.initializeGame();
	}			
	
})();