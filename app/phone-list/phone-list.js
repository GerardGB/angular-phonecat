'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('phonecatList', ['core.phone'])
    .controller('PhoneListCtrl', ['$scope', '$http', 'Phone', function PhoneListCtrl($scope, $http, Phone) {
        $scope.phones = Phone.query();
        $scope.ordreProp = 'age';
    }]);