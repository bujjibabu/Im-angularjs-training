'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoApp
 */
var contact = angular.module('demoApp');

  contact.controller('contactCtrl', function ($scope) {
    $scope.page = 'contactCtrl page';
  });


