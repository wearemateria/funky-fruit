'use strict';

angular.module('fruitGameApp')
	.controller('SubmitCtrl', function ($scope, $state, $rootScope, score, $timeout) {
		$scope.hideUI = true;
		$('.ng-camera-take-btn').click(function () {
			$scope.$watch('media', function(media) {
				if (typeof(media) !== 'undefined') {
					if (typeof($rootScope.score) === 'undefined') {
						$rootScope.score = 0;
					}
					var data = {
						picture: media,
						score: $rootScope.score
					};
					return score.save(data,
			          function(data) {
			            $timeout(function () {
			            	$state.go('hiscores');
			            }, 1000);
			          });
				}
	        });
		});

		function detectKey(event){

	      switch(event.which)
	      {
	          case 97: //A
	          	$('.ng-camera-take-btn').click();
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
	});
