'use strict';

angular.module('angularjsUnitTestApp')
 .controller('PasswordcontrollerCtrl', function ($scope) {
   var passwordcontrollerCtrl = this;

   passwordcontrollerCtrl.password = '';

   passwordcontrollerCtrl.grade = function() {
     var size = passwordcontrollerCtrl.password.length;
     if (size > 8) {
       passwordcontrollerCtrl.strength = 'strong';
     } else if (size > 3) {
       passwordcontrollerCtrl.strength = 'medium';
     } else {
       passwordcontrollerCtrl.strength = 'weak';
     }
   };

 });

