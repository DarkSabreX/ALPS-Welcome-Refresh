'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .directive( 'secondaryFeaturedCard', function ()
    {
        return{
            restrict: 'E',
            scope: {
                articles: '='
            },
            templateUrl: 'app/components/secondaryfeaturedcard/secondaryfeatured.tmpl.html'
        };
    } );