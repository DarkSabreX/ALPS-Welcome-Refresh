'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .controller( 'clientController', ['$http', 'mainFeaturedCardData', 'secondaryFeaturedCardData', 'quickLinkList', 'featuredNavCardData', function ( $http, mainFeaturedCardData, secondaryFeaturedCardData, quickLinkList, featuredNavCardData )
    {
        var client = this;
        client.featuredNavCards = {};
        client.mainFeatured = {};
        client.secondaryFeatured = {};
        client.quickLinks = {};
        client.isOpen = isOpen;
        client.toggleOpen = toggleOpen;

        //Featured Nav Cards js load
        featuredNavCardData.get().then( function ( res )
        {
            client.featuredNavCards = res.data;
            console.log( 'Featured Cards data loaded:', client.featuredNavCards );
        } );

        //Main Featured Card js load
        mainFeaturedCardData.get().then( function ( res )
        {
            client.mainFeatured = res.data;
            console.log( 'Main Featured Card data loaded:', client.mainFeatured );
        } );

        //Secondary News Card js load
        secondaryFeaturedCardData.get().then( function ( res )
        {
            client.secondaryFeatured = res.data;
            console.log( 'Secondary News Card data loaded:', client.secondaryFeatured );
        } );


        //QuickLink js Load
        quickLinkList.get().then( function ( res )
        {
            client.quickLinks = res.data;
            console.log( 'Quick Links data loaded:', client.quickLinks );
        } );

        function isOpen( linkopt )
        {
            return quickLinkList.isSectionSelected( linkopt );
        }
        function toggleOpen( linkopt )
        {
            quickLinkList.toggleSelectSection( linkopt );

        }

    } ]);