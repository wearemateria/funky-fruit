'use strict';

angular.module('fruitGameApp')
  	.controller('LevelCtrl', function ($scope, $interval) {

  		$scope.score = 0;
  		$scope.lives = 3;
  		$scope.level = 1;

  		$scope.fruits = {
  			orange: {
  				name: 'orange',
  				color: '#FF851B',
  				key: 'A',
  				keyCode: 97,
  				sound: 'someAudio.mp3'
  			},
  			banana: {
  				name: 'banana',
  				color: '#FFDC00',
  				key: 'S',
  				keyCode: 115,
  				sound: 'someAudio.mp3'
  			},
  			kiwi: {
  				name: 'kiwi',
  				color: '#2ECC40',
  				key: 'D',
  				keyCode: 100,
  				sound: 'someAudio.mp3'
  			},
  			strawberry: {
				name: 'strawberry',
  				color: '#FF4136',
  				key: 'F',
  				keyCode: 102,
  				sound: 'someAudio.mp3'
  			},
  			other: {
				name: 'the other',
  				color: '#001F3F',
  				key: 'G',
  				keyCode: 103,
  				sound: 'someAudio.mp3'
  			}
  		};
		

	// Handle keypress 
	var timeDiff, currentInput, lastInput;
	var inputIndex = 0;
	var isPressing = false;
	function detectKey(event){
		isPressing = true;
	      switch(event.which)
	      {         
	          case 97: //A
	              $scope.activeFruit = $scope.fruits.orange;
	              break;
	           
	          case 115: //S
	              $scope.activeFruit = $scope.fruits.banana;
	              break;
	           
	          case 100: //D
	              $scope.activeFruit = $scope.fruits.kiwi;
	              break;
	           
	          case 102: //F
	              $scope.activeFruit = $scope.fruits.strawberry;
	              break;
	               
	          case 103: //G
	              $scope.activeFruit = $scope.fruits.other;
	              break;
	      }

	    // Check if the pressed fruit is correct
	    if( $scope.activeFruit === $scope.currentFruits[inputIndex] ) {
	    	currentInput = new Date();
		    timeDiff = currentInput.valueOf() - lastInput.valueOf();
		    lastInput = new Date();
		    $scope.score += $scope.level * 5 + Math.floor(20000/timeDiff);
		    inputIndex++;
		    $scope.$apply();
		    if ( $scope.currentFruits.length === inputIndex ) {
		    	alert('Ganhaste, crl! És bem fino, bro');
		    	$scope.level++;
		    	newLevel();
		    }
	    }
	    else {
	    	alert('És burro, pah??');
	    }
	}

	
	// Start playing
	function startGame() {
		lastInput = new Date();
		document.onkeypress = 	function () {
	  								if(!isPressing){detectKey(event);}
	  							};

		document.onkeyup 	=	function () {
	  								isPressing = false;
	  							};
	}

	function newLevel() {
		// Generate fruit array
		function generateFruits (length) {
			$scope.currentFruits = [];
			for(var i = 0; i < length; i++) {
				$scope.currentFruits.push($scope.fruits[Object.keys($scope.fruits)[(Math.floor(Math.random() * (5 - 0)) + 0)]]);
			}
		}

		if ( $scope.level < 4 ) {
			generateFruits(3);
		}
		else {
			if ( $scope.level < 10 ) {
				generateFruits(5);
			}
			else {
				generateFruits(8);
			}
		}  	

		// Handle the sequence
		var index = 0;
		function changeFruit(i) {
			$scope.activeFruit = $scope.currentFruits[i];
			index++;
		}
		
		changeFruit(index);
		$interval(function () {
			changeFruit(index);
		}, 1500/$scope.level, $scope.currentFruits.length);
		startGame();
	}

	newLevel();

  });
