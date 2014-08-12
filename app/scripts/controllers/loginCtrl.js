/**
 * Created by SimJeongmee on 2014-07-17.
 */

'use strict';

angular.module('maisonApp')
    .controller('loginCtrl', function ($scope, $rootScope, cione1logIn) {
        $scope.pageClass = 'ctrlAni';
        //var loginModal = $modal({template:'views/partials/048-9000-S_login.html', show:false});

        // try login
        $scope.tryLogin = function () {
            $scope.auth = {id: '', pw: '', modal: true};
            //loginModal.$promise.then(loginModal.show);
        };
//        $scope.$on("login", function() {
//            //loginModal.$promise.then(loginModal.hide);
//        });

        // Login
        $scope.Login = function (elem) {

            var promise = cione1logIn.get($scope.auth.id, $scope.auth.pw);

            promise.then(
                function (result) {
                    $scope.role = 'admin';
                    $scope.items = result.sending;
                    alert($scope.role + ' 로그인에 성공했습니다.');
                    $("#modal-login").modal("hide")
                }
                , function (reason) {
                    $scope.role = 'guest';
                    $scope.items = '';
                    alert('일치하는 아이디가 없습니다.');
                }
            );
        };
    });