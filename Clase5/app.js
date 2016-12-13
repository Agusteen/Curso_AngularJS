(function () {
	'use strict';

	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];

	function CounterController($scope) {
		$scope.oneCounter = 0;
		$scope.counter = 0;
		$scope.name = "Agusteen";

		$scope.showNumberOfWatchers = function () {
			console.log("# of Watcher: ", $scope.$$watchCount);
		};

		$scope.countOnce = function () {
			$scope.oneCounter = 1;
		};

		$scope.upCounter = function () {
			$scope.counter++;
		};

		$scope.$watch(function () {
			console.log("Digest Loop Fired!");
		})
		$scope.$watch('onceCounter', function (newValue, oldValue) {
			console.log("onceCounter old value: ", oldValue);
			console.log("onceCounter new value: ", newValue);
		});
	}


})();