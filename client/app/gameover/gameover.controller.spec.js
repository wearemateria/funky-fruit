'use strict';

describe('Controller: GameoverCtrl', function () {

  // load the controller's module
  beforeEach(module('fruitGameApp'));

  var GameoverCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameoverCtrl = $controller('GameoverCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
