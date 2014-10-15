'use strict';

angular.module('fruitGameApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('submit', {
        url: '/submit',
        templateUrl: 'app/submit/submit.html',
        controller: 'SubmitCtrl'
      });
  });