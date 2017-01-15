'use strict';

/**
 * @ngdoc service
 * @name angularPokedexApp.Pokemon
 * @description
 * # Pokemon
 * Service in the angularPokedexApp.
 */
angular.module('angularPokedexApp')
	   .service('Pokemon', function ($resource) {

		return $resource('http://localhost:9001/pokemons',{},{ 
			'query':  {
					method:'GET', 
					isArray:true
			},
			'fetchTypes':  {
					url: 'http://localhost:9001/types',
					method:'GET', 
					isArray:true
			},
			'fetchSkills':  {
					url: 'http://localhost:9001/skills',
					method:'GET', 
					isArray:true
			}
		});
});
