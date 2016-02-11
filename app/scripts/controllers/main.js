'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.employeeData =  [
    	{sno:1, name:'babu', deg:'developer','desc':'desc1',exp:10},
    	{sno:2, name:'ram',deg:'Sr.developer','desc':'desc2',exp:4},
    	{sno:3, name:'raj',deg:'lead','desc':'desc3',exp:5},
    	{sno:4, name:'john',deg:'trainee','desc':'desc4',exp:2},
    	{sno:5, name:'babu1',deg:'manager','desc':'desc5',exp:60},
    	{sno:6, name:'babu2',deg:'head','desc':'desc6',exp:8},
    	{sno:7, name:'babu3',deg:'manager','desc':'desc7',exp:5},
    	{sno:8, name:'babu4',deg:'developer','desc':'desc8',exp:45},
    	{sno:10, name:'babu5',deg:'developer','desc':'desc9',exp:34},
    	{sno:11, name:'babu6',deg:'engineer','desc':'desc10',exp:23}
    ];

    $scope.myDataObj  = {
        "one" : {sno:1, name:'babu', deg:'developer','desc':'desc1',exp:10},
        "two" : {sno:2, name:'ram',deg:'Sr.developer','desc':'desc2',exp:4}
    };

    $scope.cDelete =  function(index) {
    	$scope.employeeData.splice(index,1);
    	//http call
    };

    $scope.view = function(obj) {
    	console.log(obj);
    	$scope.viewObj = obj;
    	$('#viewModal').modal()
    };

    $scope.cCreate = function() {
		$('#createModal').modal()
    };

    $scope.createRecord = function(){
    	$scope.createObject = {
    		sno: $scope.sno,
    		name: $scope.name,
    		deg:$scope.deg,
    		desc:'',
    		exp:$scope.exp
    	};

    	console.log($scope.createObject);
    	$scope.employeeData.unshift($scope.createObject);
    	$('#createModal').modal('hide');
    } 

    $scope.amount = 1234.56789;
    //$scope.limitData =

  });
