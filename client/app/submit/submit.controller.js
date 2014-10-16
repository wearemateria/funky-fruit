'use strict';

angular.module('fruitGameApp')
	.controller('SubmitCtrl', function ($scope, $state) {
		$scope.hideUI = true;

		$('.ng-camera-take-btn').click(function () {
			$scope.$watch('media', function(media) {
				if (typeof(media) !== 'undefined') {
					console.log(media);
				}
              	//$state.go('hiscores');
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
