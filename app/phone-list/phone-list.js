'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('phonecatList', [])
    .controller('PhoneListCtrl', ['$scope', '$http', function PhoneListCtrl($scope, $http) {
        $http.get('phones/phones.json').then(function (response) {
            $scope.phones = response.data;
        });
        $scope.ordreProp = 'age';
    }]);