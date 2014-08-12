'use strict';

angular.module('maisonApp')
    .controller('mainCtrl', function ($scope, SessionInfo) {
        $scope.pageClass = 'ctrlAni';

        $scope.$on("auth", function (e) {
            $scope.userInfo = SessionInfo.getCurrentUser();
        });

        $scope.userInfo = SessionInfo.getCurrentUser();

        $scope.mobileMenu = function () {
            $('#mobile-menu').modal('show');
        };
    });