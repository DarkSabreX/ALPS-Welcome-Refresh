'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .factory( 'secondaryFeaturedCardData', function ( $http )
    {
        return {
            get: function ()
            {
                return $http.get( '/sampledata/secondaryfeatured/secondaryfeatured.json' );
            }
        }
    } );