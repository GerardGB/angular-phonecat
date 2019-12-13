'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.module('phonecatDetail', ['core.phone', 'ngRoute'])
    .controller('PhoneDetailCtrl', ['$scope', '$http', '$stateParams', 'Phone', function PhoneDetailCtrl($scope, $http, $stateParams, Phone) {
        $scope.phone = Phone.get({phoneId: $stateParams.phoneId}, function (phone) {
            $scope.setImage(phone.images[0]);
        });

        $scope.setImage = function setImage(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);