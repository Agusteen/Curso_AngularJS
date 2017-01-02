'use strict';

/**
 * @ngdoc directive
 * @name myWebApp.directive:clima
 * @description
 * # clima
 */
angular.module('myAppApp')
  .component('climaWidget', function () {
     var ddo = {
    templateUrl: 'climaVista.html',
    controller: ClimaCtrl,
    bindings: {
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }

  };

  return ddo;
  });

