'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .factory( 'featuredNavCardData', function ( $http )
    {
        return {
            get: function ()
            {
                return $http.get( '/sampledata/featurednav/featurednavigation.json' );
            }
        }
    } );