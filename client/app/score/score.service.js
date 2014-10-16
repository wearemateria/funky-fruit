'use strict';

angular.module('fruitGameApp')
  .factory('score', function ($resource) {
    return $resource('/api/scores/:id', {
      id: '@_id'
    });
  });
