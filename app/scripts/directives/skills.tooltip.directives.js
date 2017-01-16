(function(){

'use strict';

/**
 * @name skillTooltip
 * @description tooltip directive for skills hovering
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