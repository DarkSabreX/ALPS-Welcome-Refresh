'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .factory( 'mainFeaturedCardData', function ( $http )
    {
        return {
            get: function ()
            {
                return $http.get( '/sampledata/featured/mainfeatured.json' );
            }
        }
    } );