(function(){

'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('angularPokedexApp').controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['Pokemon'];

    function MainCtrl(Pokemon) {
       
        var vm = this;
        vm.init = init;
        vm.allPokemons = [];
        vm.pokemonTypes = [];
        vm.pokemonSkills = [];
        vm.orderValue = 'id';
        vm.searched = {};
        vm.fetchPokemonTypes = fetchPokemonTypes;
        vm.selectPokemon = selectPokemon;
        vm.fetchPokemonSkills = fetchPokemonSkills;
        vm.getUniqueSkills = getUniqueSkills;
        vm.setOrderBy = setOrderBy; 
        vm.clearFilter = clearFilter;
        vm.applyFilter = applyFilter;

        init();

        function init(){

            Pokemon.query().$promise.then(function(res){
                vm.allPokemons = res;
                vm.fetchPokemonTypes();
            }, function(err){
                console.log(err);
            });     

            Pokemon.fetchTypes().$promise.then(function(res){
                vm.pokemonTypes = res;
            }, function(err){
                console.log(err);
            }); 

            Pokemon.fetchSkills().$promise.then(function(res){
                vm.pokemonSkills = res;
            }, function(err){
                console.log(err);
            }); 

        }

        function fetchPokemonTypes() {
            var allPokemons = vm.allPokemons.length;
            var allPokemonTypes = vm.pokemonTypes.length;

            for (var i = 0; i < allPokemons; i++) {
                var numberOfTypeOfThisPokemon = vm.allPokemons[i].type.length;
                var enameType = [];
                for (var j = 0; j < numberOfTypeOfThisPokemon; j++) {
                    for (var k = 0; k < allPokemonTypes; k++) {
                        if (vm.pokemonTypes[k].cname == vm.allPokemons[i].type[j]) {
                            enameType.push(vm.pokemonTypes[k].ename);
                        }
                    }
                }
                vm.allPokemons[i].enameType = enameType;
            }

        }

        function selectPokemon(pokemon){
            vm.detailedPokemon = {};
            vm.detailedPokemon = pokemon;
            console.log(vm.detailedPokemon);
            vm.fetchPokemonSkills();
        }

        function fetchPokemonSkills(){
            var skills = {};
            var currentSkillsId = [];
            var levelupSkills = [];
            if (vm.detailedPokemon.skills.level_up != undefined) {
                currentSkillsId = vm.getUniqueSkills(vm.detailedPokemon.skills.level_up);
                var numberOfPokemonSkills = currentSkillsId.length;
                var numberOfSkills = vm.pokemonSkills.length;
                for (var i = 0; i < numberOfPokemonSkills; i++) {
                    for (var j = 0; j < numberOfSkills; j++) {
                        if (currentSkillsId[i] == vm.pokemonSkills[j].id) {
                            levelupSkills.push(vm.pokemonSkills[j]);
                        }
                    };
                }
            }
            vm.selectedPokemonSkills = levelupSkills;
        }

        function getUniqueSkills(arr) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                if (result.indexOf(arr[i]) == -1) {
                    result.push(arr[i]);
                }
            }
            return result;
        }

        function setOrderBy(value){
            vm.orderValue = value;
            console.log(vm.orderValue);
        }

        function applyFilter(){
            vm.searched = vm.searchTerm;
        }

        function clearFilter(){
            vm.searched = {};
            vm.searchTerm = null;
        }

    }


})();
