'use strict';

angular.module('fruitGameApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    /*$scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });*/

    function detectKey(event){

      switch(event.which)
      {         
          case 97: //A
              $state.go('level');
              break;
           
          case 115: //S
              console.log("S");
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

  });
