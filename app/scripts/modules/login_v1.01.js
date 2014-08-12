'use strict';
/**
 * Created by wealab04 on 2014-05-29.
 */

var app = angular.module('loginModule',['ngRoute']);

app.controller('loginCtrl',function($scope, cione1logIn){
    $scope.Login = function(){

        var promise = cione1logIn.get($scope.auth.id, $scope.auth.pw);

        promise.then(
            function(result){
                $scope.failed = "로그인에 성공하셨습니다.";
                $scope.items = result.sending;
                console.log($scope.failed);
            }
            ,function(reason){
                $scope.failed = "로그인 정보가 틀립니다.";
                $scope.items = '';
                console.log($scope.failed);
            }
        );

    }
})

app.service('cione1logIn', function($http, $q) {
        this.get = function(id, pswd){
            var deferred = $q.defer();

            $http({
                url : '/getdata',
                method : 'post',
                data : {id:id, pswd:pswd}
            }).success(function(data){
                deferred.resolve(data);
            }).error(function(status) {
                deferred.reject(status);
            });

            return deferred.promise;
        }
    }
);


