'use strict';

describe('Controller: HiscoresCtrl', function () {

  // load the controller's module
  beforeEach(module('fruitGameApp'));

  var HiscoresCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HiscoresCtrl = $controller('HiscoresCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
