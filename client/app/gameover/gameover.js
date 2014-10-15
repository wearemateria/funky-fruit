'use strict';

angular.module('fruitGameApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gameover', {
        url: '/gameover',
        templateUrl: 'app/gameover/gameover.html',
        controller: 'GameoverCtrl'
      });
  });