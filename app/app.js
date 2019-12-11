'use strict';

angular.module('phonecatApp', [
    'ui.router',
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'phonecatList',
    'phonecatDetail'
])
    .config(['$stateProvider', '$mdThemingProvider', function($stateProvider, $mdThemingProvider) {
        $stateProvider
            .state('phone-list', {
                url: '/phone-list',
                templateUrl: 'phone-list/phone-list.html',
                controller: 'PhoneListCtrl'
            })
            .state('phone-details', {
                url: '/phone-details',
                templateUrl: 'phone-details/phone-details.template.html',
                controller: 'PhoneDetailCtrl'
            });
    }]);