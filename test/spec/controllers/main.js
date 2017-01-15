'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPokedexApp'));

  var MainCtrl;
  var scope;
  var PokemonService;
  var route;
  var location;
  var rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route, Pokemon, $location, $httpBackend) {
    $httpBackend.expectGET('/').respond(200);
    scope = $rootScope.$new();
    rootScope = $rootScope;
    route = $route;
    location = $location; 
    PokemonService = Pokemon;
    MainCtrl = $controller('MainCtrl as vm', {
      $scope: scope,
    });
    spyOn(MainCtrl, 'init');
  }));

  /** Unit Test #1 **/
  it('should load the Pokemon service', function() {
    expect(PokemonService).toBeDefined();
  });

  /** Unit Test #2 **/
  it('should call the init function', function() {
    MainCtrl.init();
    expect(MainCtrl.init).toBeDefined();
    expect(MainCtrl.init).toHaveBeenCalled();
  });

  /** Unit Test #3 **/
  it('should fetch all pokemons using Pokemon service', function() {
    expect(PokemonService.query).toBeDefined();
  });

  /** Unit Test #4 **/
  it('should set the the default sort by ID', function() { 
      expect(MainCtrl.orderValue).toBe('id'); 
  });

  /** Unit Test #5 **/
  it('should set the the default sort by ID', function() { 
      expect(MainCtrl.orderValue).toBe('id'); 
  });

  /** Unit Test #6 **/
  it('should be able to define allPokemons', function() {
    expect(MainCtrl.allPokemons).toBeDefined();
  });

  /** Unit Test #7 **/
  it('should be able to clear filtered items', function() {
    MainCtrl.searchTerm = 'ivy';
    MainCtrl.clearFilter();
    expect(MainCtrl.searchTerm).toBe(null);
  });

  /** Unit Test #8  **/
  it('should load the main page using /', function() {
      location.path('/');
      rootScope.$digest();
      expect(route.current.controller).toBe('MainCtrl')
  });

});
  
