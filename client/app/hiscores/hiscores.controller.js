'use strict';

angular.module('fruitGameApp')
  .controller('HiscoresCtrl', function ($scope, $http, $timeout, $state, $rootScope) {
    $rootScope.timer = $timeout(function () {
      $timeout.cancel($rootScope.timer);
      $state.go('main');
    }, 20000);

    function detectKey(event){

        switch(event.which)
        {
            case 97: //A
                $timeout.cancel($rootScope.timer);
                $state.go('main');
              break;
          /*
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
                break;*/
        }
    }
    document.onkeypress=detectKey;
    
    $scope.hiscores = {};
    function longsToStrings(response) {
      //console.log("transforming response");
      var numbers = /("[^"]*":\s*)(\d{15,})([,}])/g;
      var newResponse = response.replace(numbers, "$1\"$2\"$3");
      return newResponse;
  }
    $http.defaults.transformResponse.unshift(longsToStrings);
    $http.get('/api/scores', {
            transformResponse: [function (data, headersGetter) {
                // not sure what to do here?!
                return data;
            }].concat($http.defaults.transformResponse) // presume this isn't needed, added for clarity
        })
      .success(function (data) {
        $scope.hiscores = data;
      });
  });
