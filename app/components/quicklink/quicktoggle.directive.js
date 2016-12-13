'use strict';

//Declare App level modules
angular.module( 'ALPSWelcome' )
    .directive( 'quickToggle', function ()
    {
        var link = function ( $scope, $element )
        {
            var controller = $element.parent().controller();

            $scope.isOpen = function ()
            {
                return controller.isOpen( $scope.linkopt );
            };
            $scope.toggle = function ()
            {
                controller.toggleOpen( $scope.linkopt );
            };
        };

        var controller = ['$scope', function ( $scope )
        {
            this.toggleIcon = 'expand_more';
            this.clickToggleIcon = function()
            {
                if ( this.toggleIcon === 'expand_more' )
                {
                    this.toggleIcon = 'expand_less';
                }
                else
                {
                    this.toggleIcon = 'expand_more';
                }
            };
            this.toggleStatus = false;
            this.clickAnimate = function ()
            {
                if ( this.toggleStatus === false )
                {
                    this.toggleStatus = true;
                }
                else
                {
                    this.toggleStatus = false;
                }
            };
        }];

        return {
            restrict: 'E',
            scope: {
                linkopt: '='
            },
            templateUrl: 'app/components/quicklink/quicktoggle.tmpl.html',
            link: link,
            controller: controller,
            controllerAs: 'qt'
        };
    } );