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
        
        // vars and functions declarations
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
        vm.showLogo = true;
        vm.showSkils = false;
        vm.detailedPokemon = {
            ename: '???????',
            enameType: '??',
            base: {
                Attack: '??',
                Defense: '??',
                HP: '??',
                'Sp.Atk': '??',
                'Sp.Def': '??',
                Speed: '??'
            }
        };

        init();


        /**
        * @name init
        * @description init function to set variables
        * @returns 
        * @version 1.0.2
        */
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

        /**
        * @name fetchPokemonTypes
        * @description fetch different pokemon types then assign it to the pokemon
        * @returns 
        * @version 1.0.4
        */
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

        /**
        * @name selectPokemon
        * @description runs when the user clicks a pokemon card and assign to a var
        * @returns 
        * @version 1.0.4
        */
        function selectPokemon(pokemon){
            vm.showSkills = true;
            vm.showLogo = false;
            vm.detailedPokemon = {};
            vm.detailedPokemon = pokemon;
            console.log(vm.detailedPokemon);
            vm.fetchPokemonSkills();
        }

        /**
        * @name fetchPokemonSkills
        * @description fetch all pokemon skills and attach it to the object
        * @returns 
        * @version 1.0.3
        */
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


        /**
        * @name getUniqueSkills
        * @description get a pokemon unique skills for naming 
        * @returns Array result
        * @version 1.0.5
        */
        function getUniqueSkills(arr) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                if (result.indexOf(arr[i]) == -1) {
                    result.push(arr[i]);
                }
            }
            return result;
        }

        /**
        * @name setOrderBy
        * @description set the order of the filter
        * @returns 
        * @version 1.0.1
        */
        function setOrderBy(value){
            vm.orderValue = value;
        }

        /**
        * @name applyFilter
        * @description sets the variable for search bar
        * @returns 
        * @version 1.0.0
        */
        function applyFilter(){
            vm.searched = vm.searchTerm;
        }

        /**
        * @name clearFilter
        * @description clears the filter values
        * @returns
        * @version 1.0.1
        */
        function clearFilter(){
            vm.searched = {};
            vm.searchTerm = null;
        }

    }


})();