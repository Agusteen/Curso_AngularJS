'use strict';

/**
 * @ngdoc function
 * @name myWebApp.controller:ClimaCtrl
 * @description
 * # ClimaCtrl
 * Controller of the myWebApp
 */
angular.module('myAppApp')
  .controller('ClimaCtrl', function ($scope,$http) {
    var $ctrl = this;
       $scope.clima = {
        ciudad: '',
        temperatura: '',
        image:''
    };

      $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?appid=6e677030195aa712c6590e4eb6fbc78a&lang=es&units=metric&q=Cordoba'
      }).then(function successCallback(response) {
         $scope.clima.temperatura  = response.data.main.temp + "°C";
        console.log("temperatura ==> {{clima.temperatura)}}" + $scope.clima.temperatura);
      }, function errorCallback(response) {
          console.log("error == " + response);
      });

  });