'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',       
        
      })
      .when('/formulario', {
        templateUrl: 'views/formulario.html',       
         controller: 'FormController',
        controllerAs: 'form'
      })
      .when('/clima', {
        templateUrl: 'views/clima.html',
        controller: 'ClimaCtrl',
        controllerAs: 'clima'
      })
      .when('/Validation', {
        templateUrl: 'views/validation.html',
        controller: 'ValidationCtrl',
        controllerAs: 'Validation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
