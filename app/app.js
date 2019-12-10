'use strict';

angular.module('phonecatApp', [
    'ui.router',
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'phonecatList'
])
    .config(['$stateProvider', '$mdThemingProvider', function($stateProvider, $mdThemingProvider) {
        $stateProvider
            .state('phone-list', {
                url: '/phone-list',
                views: {
                    'phone-list': {
                        templateUrl: 'phone-list/phone-list.html',
                        controller: 'PhoneListCtrl'
                    }
                }
            });
    }]);