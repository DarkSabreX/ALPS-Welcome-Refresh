'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .directive( 'featuredNavCard', function ()
    {
        return{
            restrict: 'E',
            scope: {
                nav:'='
            },
            templateUrl: 'app/components/featurednav/featurednav.tmpl.html'
        };
    } );