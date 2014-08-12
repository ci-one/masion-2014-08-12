'use strict';

angular.module('maisonApp')
    .controller('mainCtrl', function ($scope) {
        $scope.pageClass = 'ctrlAni';
        $scope.role = 'none';
        $scope.auth = {id: '', pw: '', modal:false};
    });