'use strict';

angular.module('fruitGameApp')
  .controller('GameoverCtrl', function ($scope, $timeout, $state) {
  	$timeout(function () {
  		$state.go('submit');
  	}, 5000);
  });
