'use strict';

angular.module('fruitGameApp')
	.controller('SubmitCtrl', function ($scope, $state) {
		$scope.hideUI = true;

		function detectKey(event){

	      switch(event.which)
	      {
	          case 97: //A
	          	$('.ng-camera-take-btn').click();
	          	$scope.$watch('media', function(media) {
		            console.log(media);
	              	//$state.go('hiscores');
		        });
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
