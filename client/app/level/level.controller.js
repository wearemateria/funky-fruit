'use strict';

angular.module('fruitGameApp')
  	.controller('LevelCtrl', function ($scope, $interval, $state, $timeout, $rootScope) {
  		$timeout.cancel($rootScope.timer);
  		//console.log($rootScope.timer);
  		$scope.score = 0;
  		$scope.$watch('score', function () {
  			$rootScope.score = $scope.score;
  		});
  		$scope.lives = 3;
  		$scope.level = 1;
  		$scope.activeFruit = {name:'blank'};
  		$scope.playTime = 1500;
  		$scope.numFruits = 3;

  		$scope.fruits = {
  			orange: {
  				name: 'orange',
  				color: '#FF851B',
  				key: 'A',
  				keyCode: 97,
  				sound: 1
  			},
  			banana: {
  				name: 'banana',
  				color: '#FFDC00',
  				key: 'S',
  				keyCode: 115,
  				sound: 2
  			},
  			kiwi: {
  				name: 'kiwi',
  				color: 'rgb(181, 123, 76)',
  				key: 'D',
  				keyCode: 100,
  				sound: 3
  			},
  			apple: {
				name: 'apple',
  				color: '#FF4136',
  				key: 'F',
  				keyCode: 102,
  				sound: 4
  			},
  			lime: {
				name: 'lime',
  				color: '#2ECC40',
  				key: 'G',
  				keyCode: 103,
  				sound: 5
  			}
  		};
	

	// Handle keypress 
	var timeDiff, currentInput, lastInput;
	var inputIndex = 0;
	var isPressing = false;
	function detectKey(event){
		isPressing = true;
		$scope.shouldPlay = false;
	      switch(event.which)
	      {         
	          case 97: //A
	              $scope.activeFruit = $scope.fruits.orange;
	              break;
	           
	          case 115: //S
	              $scope.activeFruit = $scope.fruits.banana;
	              console.log('banana');
	              break;
	           
	          case 100: //D
	              $scope.activeFruit = $scope.fruits.kiwi;
	              break;
	           
	          case 102: //F
	              $scope.activeFruit = $scope.fruits.apple;
	              break;
	               
	          case 103: //G
	              $scope.activeFruit = $scope.fruits.lime;
	              console.log('lima');
	              break;
	      }

	    // Check if the pressed fruit is correct
	    if( $scope.activeFruit === $scope.currentFruits[inputIndex] ) {
	    	currentInput = new Date();
		    timeDiff = currentInput.valueOf() - lastInput.valueOf();
		    lastInput = new Date();
		    $scope.score += $scope.level * 5;
		    inputIndex++;
		    $scope.$apply();
		    $('audio').each(function(){this.pause();this.currentTime = 0;});
		    $('#'+$scope.activeFruit.sound)[0].play();
		    if ( $scope.currentFruits.length === inputIndex ) {
		    	document.onkeypress = '';
		    	$scope.isPlaying = false;
		    	$scope.isRight = true;
		    	$scope.$apply();
		    	$scope.level++;
		    	$timeout(function () {
		    		newLevel();
		    	}, 5000);
		    	inputIndex=0;
		    	isPressing = false;
		    }
	    }
	    else {
	    	if($scope.lives !== 0) {
	    		document.onkeypress = '';
	    		$scope.isWrong = true;
	    		$scope.lives--;
		    	$scope.$apply();
		    	$('#wrong')[0].play();
		    	$timeout(function () {
		    		newLevel();
		    	}, 5000);
		    	inputIndex=0;
		    	isPressing = false;
	    	}
	    	else {
	    		$state.go('gameover');
	    	}
	    }
	}

	
	// Start playing
	function startGame() {
		$scope.isPlaying = true;
		lastInput = new Date();
		document.onkeypress = 	function () {
	  								if(!isPressing){detectKey(event);}
	  							};

		document.onkeyup 	=	function () {
	  								isPressing = false;
	  							};
	}

	function newLevel() {
		document.onkeypress = '';
		// Generate fruit array
		function generateFruits (length) {
			$scope.currentFruits = [];
			for(var i = 0; i < length; i++) {
				var fruit = $scope.fruits[Object.keys($scope.fruits)[(Math.floor(Math.random() * (5 - 0)) + 0)]];
				while(fruit === $scope.currentFruits[i-1]) {
					fruit = $scope.fruits[Object.keys($scope.fruits)[(Math.floor(Math.random() * (5 - 0)) + 0)]]
				}
				$scope.currentFruits.push(fruit);
			}
		}

		if ($scope.level % 3 === 0) {
			$scope.numFruits++;
		}
		if ($scope.level % 5 === 0 && $scope.playTime-250 > 0) {
			$scope.playTime = $scope.playTime - 250;
		}

		generateFruits($scope.numFruits);	

		// Handle the sequence
		var index = 0;
		function changeFruit(i) {
			$scope.activeFruit = $scope.currentFruits[i];
			$('audio').each(function(){this.pause();this.currentTime = 0;});			
			$('#'+$scope.activeFruit.sound)[0].play();
			if(index+1 === $scope.currentFruits.length) {
				$timeout(function () {
					$scope.shouldPlay = true;
					$timeout(function () {
						startGame();
				}, 1000);
				}, 2000);
			}
			else {
				index++;
			}	
		}
		changeFruit(index);
		$scope.$apply();
		$scope.isRight = false;
		$scope.isWrong = false;
		$interval(function () {
			changeFruit(index);
		}, $scope.playTime, $scope.currentFruits.length-1);
		
	}

	var loadedFiles = 0;
	$('audio').on('loadeddata', function () {
		loadedFiles++;
		if (loadedFiles === $('audio').length) {
			newLevel();
		}
	});

  });
