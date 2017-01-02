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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

angular.module('myAppApp')
  .controller('FormController', ["$scope", "$filter", function ($scope,$filter) {
   
  }]);

'use strict';

/**
 * @ngdoc function
 * @name myWebApp.controller:ClimaCtrl
 * @description
 * # ClimaCtrl
 * Controller of the myWebApp
 */
angular.module('myAppApp')
  .controller('ClimaCtrl', ["$scope", "$http", function ($scope,$http) {
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

  }]);
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


'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:ValidationCtrl
 * @description
 * # ValidationCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('ValidationCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('myAppApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/clima.html',
    "<clima-widget items=\"Item\"> </clima-widget>"
  );


  $templateCache.put('views/climaVista.html',
    "{{$ctrl.items}}"
  );


  $templateCache.put('views/formulario.html',
    "<div class=\"form-group\"> <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Nombre</label> <div class=\"col-sm-10\"> <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" ng-model=\"name\"> <h1>{{name | uppercase}}</h1> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/validation.html',
    "<form name=\"myForm\"> <div class=\"form-group\"> <label class=\"control-label\">Mail</label> <input type=\"email\" class=\"form-control\" placeholder=\"Mail\" ng-model=\"mail\" required> <p ng-if=\"!mail\">Complete correctamente este campo</p> <label class=\"control-label\">Numero del 0 al 99</label> <input type=\"number\" name=\"input\" ng-model=\"example.value\" min=\"0\" max=\"99\" required> <span class=\"error\" ng-if=\"myForm.input.$error.number\"> Not valid number!</span> </div> </form>"
  );


  $templateCache.put('views/videos.html',
    "<h1 class=\"text-center\">Ken Block's GYMKHANA NINE</h1> <div class=\"embed-responsive embed-responsive-16by9\"> <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_bkX5VkZg8U\" frameborder=\"0\" allowfullscreen></iframe> </div>"
  );

}]);
