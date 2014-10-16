'use strict';

angular.module('fruitGameApp')
  .controller('MainCtrl', function ($scope, $http, $state, $timeout, $rootScope) {
    $scope.credits = 42; 
    function detectKey(event){

      switch(event.which)
      {
          case 97: //A
              $scope.credits--;
              $state.go('level');
              break;
           
          case 115: //S
              $scope.credits++;
              $scope.$apply();
              break;
           
          case 100: //D
              console.log("D");
              break;
           
          case 102: //F
              console.log("F");
              break;
               
          case 103: //G
              console.log("G");
              break;
      }
  }
  document.onkeypress=detectKey;

  $rootScope.timer = $timeout(function () {
      $timeout.cancel($rootScope.timer);
      $state.go('hiscores');
    }, 20000);
  });
