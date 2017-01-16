(function(){

'use strict';

/**
 * @name powerBar
 * @description power bar directive
 **/
 angular.module('angularPokedexApp')
        .directive("skillTooltip", function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs){
                    $(element).hover(function(){
                        $(element).tooltip('show');
                    }, function(){
                        $(element).tooltip('hide');
                    });
                }
            };
        });
})();