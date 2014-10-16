'use strict';

angular.module('fruitGameApp')
  .controller('HiscoresCtrl', function ($scope, $http, $timeout, $state) {
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

    var timer = $timeout(function () {
      $state.go('main');
    }, 20000);
    $timeout.cancel(timer);
  });
