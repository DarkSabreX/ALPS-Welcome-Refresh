'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
.config( function ( $mdThemingProvider )
{
    //Define ALPS Palette
    $mdThemingProvider.definePalette( 'ALPS', {
        '50': 'E8EAF6',
        '100': 'C5CAE9',
        '200': '9FA8DA',
        '300': '7986CB',   
        '400': '5C6BC0',
        '500': '3F51B5',   //Primary Color
        '600': '3949AB',
        '700': 'ffa70f',   //Accent Bar 1
        '800': 'ffa70f',   
        '900': '73cbd5',   //Accent Bar 2
        'A100': '73cbd5',     //Featured Card BG  Warn accent 1 accent 1
        'A200': 'ffa70f',     //Accent
        'A400': '3D5AFE',     //Accent Hue 2
        'A700': '304FFE',     
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100']
    } );
    $mdThemingProvider.definePalette( 'ALPSFeat', {
        '50': 'E8EAF6',
        '100': 'C5CAE9',
        '200': '9FA8DA',
        '300': '7986CB',
        '400': '5C6BC0',
        '500': '3F51B5',   //Primary Color
        '600': '3949AB',
        '700': 'ffa70f',   //Accent Bar 1
        '800': 'ffa70f',
        '900': '73cbd5',   //Accent Bar 2
        'A100': '73cbd5',     //Featured Card BG  Warn accent 1 accent 1
        'A200': 'ffa70f',     //Accent
        'A400': '3D5AFE',     //Accent Hue 2
        'A700': '304FFE',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100']
    } );


    /*Default ALPS Theme*/
    $mdThemingProvider.theme( 'ALPS' )
      .primaryPalette( 'ALPS' )
      .accentPalette( 'ALPS' );
    $mdThemingProvider.theme( 'ALPSFeat' )
      .primaryPalette( 'ALPSFeat' )
      .backgroundPalette( 'ALPSFeat' )
      ;


} );