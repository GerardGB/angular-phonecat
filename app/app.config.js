'use strict';

angular.module('phonecatApp')
    .config(['$stateProvider', '$routeProvider', function($stateProvider, $routeProvider) {
    $stateProvider
        .state('phone-list', {
            url: '/phones',
            templateUrl: 'phone-list/phone-list.html',
            controller: 'PhoneListCtrl'
        })
        .state('phone-details', {
            url: '/phones/{phoneId}',
            templateUrl: 'phone-details/phone-details.template.html',
            controller: 'PhoneDetailCtrl'
        });
}]);