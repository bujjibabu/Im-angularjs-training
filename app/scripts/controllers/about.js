'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoApp
 */
var aboutCtrl = angular.module('demoApp');

  aboutCtrl.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
  });


