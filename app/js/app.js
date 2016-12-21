"use strict";

var todomvc = angular.module('todomvc', []);



  todomvc.controller('MyController', MyController);

// The controller code
function MyController($scope, $http) {
  var authToken;

  $http.get('/auth.py').then(function(response) {
    authToken = response.headers('A-Token');
    $scope.user = response.data;
  });

  $scope.saveMessage = function(message) {
    var headers = { 'Authorization': authToken };
    $scope.status = 'Saving...';

    $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
      $scope.status = '';
    }).catch(function() {
      $scope.status = 'Failed...';
    });
  };
}



///asdfasdf
///asdfasdf
///asdfasdf
///asdfasdf
