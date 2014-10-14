'use strict';

angular.module('fruitGameApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('level', {
        url: '/level',
        templateUrl: 'app/level/level.html',
        controller: 'LevelCtrl'
      });
  });