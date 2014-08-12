/**
 * Created by SimJeongmee on 2014-07-17.
 */

'use strict';

angular.module('maisonApp')
    .controller('loginCtrl', function ($scope, cione1logIn, SessionInfo) {
        $scope.pageClass = 'ctrlAni';
        //var loginModal = $modal({template:'views/partials/048-9000-S_login.html', show:false});

        // try login
        $scope.tryLogin = function () {
            $scope.auth = {id: '', pw: '', name: ''};
            $('#modal-login').modal('show');
        };

        // Login
        $scope.Login = function (elem) {

            var promise = cione1logIn.get($scope.auth.id, $scope.auth.pw);

            promise.then(
                function (result) {
                    $scope.items = result.sending;

                    SessionInfo.reset();
                    SessionInfo.setUserInfo({isAdmin:true, role:'admin', id:$scope.auth.id});

                    alert('[' + SessionInfo.getCurrentUser().id + '] 로그인에 성공했습니다.');
                    $("#modal-login").modal("hide");

                    $scope.$emit("auth");

                }
                , function (reason) {
                    $scope.items = '';
                    alert('일치하는 아이디가 없습니다.');
                    //$("#modal-login").modal("hide");
                }
            );
        };

        // Logout
        $scope.Logout = function (elem) {
            SessionInfo.reset();

            $scope.$emit("auth");
        }
    });