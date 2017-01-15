'use strict';

describe('Service: Pokemon', function () {

  // load the service's module
  beforeEach(module('angularPokedexApp'));

  // instantiate service
  var Pokemon;
  beforeEach(inject(function (_Pokemon_) {
    Pokemon = _Pokemon_;
  }));

  it('should do something', function () {
    expect(!!Pokemon).toBe(true);
  });

});
