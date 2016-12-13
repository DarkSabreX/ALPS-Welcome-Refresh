'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .controller( 'themeController', function ()
    {
        var tc = this;
        tc.themes = [
            {
                id:1,
                theme: 'ALPS',
                feat: 'ALPSFeat'
            },
            {
                id: 2 ,
                theme: 'VERIZON',
                feat: 'VERIZONFeat'
            },
            {
                id: 3,
                theme: 'XM',
                feat: 'XMFeat'
            },
            {
                id: 4,
                theme: 'XFINITY',
                feat: 'XFINITYFeat'
            },
            {
                id: 5,
                theme: 'SPRINT',
                feat: 'SPRINTFeat'
            }
            ];
        tc.currentTheme = {id:1, theme:'ALPS'};
    } );