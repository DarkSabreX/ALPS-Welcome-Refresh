'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .directive( 'mainFeaturedCard', function ()
    {
        return{
            restrict: 'E',
            scope: {
                featured:'='
            },
            templateUrl: 'app/components/featuredcard/mainfeatured.tmpl.html'
        };
    } );