'use strict';

angular.module('fruitGameApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hiscores', {
        url: '/hiscores',
        templateUrl: 'app/hiscores/hiscores.html',
        controller: 'HiscoresCtrl'
      });
  });