'use strict';

angular.module('cioneApp', [
    , 'ngRoute'
    , 'ngAnimate'
    , 'ui.bootstrap'
    , 'angularFileUpload'
    , 'loginModule'
]);

angular.module('cioneApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/1000-M_main/048-1000-M_main.html',
                controller: 'mainCtrl'
            })
            .when('/home', {
                redirectTo: '/'
            })
            .when('/product', {
                templateUrl: '/views/2000-S_product/048-2000-S_product_main.html',
                controller: 'productCtrl'
            })
            .when('/expCenter', {
                templateUrl: '/views/3000-S_expCenter/048-3000-S_exp_main.html',
                controller: 'expCenterCtrl'
            })
            .when('/iot', {
                templateUrl: '/views/4000-S_iot/048-4000-S_iot_main.html',
                controller: 'iotCtrl'
            })
            .when('/trendTech', {
                templateUrl: '/views/5000-S_trendTech/048-5000-S_trendTech_main.html',
                controller: 'trendTechCtrl'
            })
            .when('/request', {
                templateUrl: '/views/6000-S_request/048-6000-S_request_main.html',
                controller: 'requestCtrl'
            })
            .when('/directions', {
                templateUrl: '/views/7000-S_directions/048-7000-S_directions_main.html',
                controller: 'directionsCtrl'
            })
            .otherwise(({
                redirectTo: '/'
            }));
    })
    .factory('items', function ($http, $q, $upload) {
        var items = {};
        items.query = function () {
            var deferred = $q.defer();

            $http({
                    method: 'post',
                    url: '/getlist'
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };

        items.getone = function (id) {
            var deferred = $q.defer();
            $http({
                    method: 'post',
                    url: '/getboard',
                    data: {id: id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );
            return deferred.promise;
        };


        items.insertF = function ($filess) {
            var deferred = $q.defer();
            var fname = '';
            var $file = $filess[0];
            $upload.upload({
                url: '/server/uploadFile',
                file: $file,
                progress: function (e) {
                }
            }).then(function (data) {
                fname = data.data;
                deferred.resolve(fname);
            }, function (data) {
                alert(data.data);
            });

            ;
            return deferred.promise;
        };


        items.insert = function (title, writer, content, href, file) {
            var deferred = $q.defer();
            $http({
                method: 'post',
                url: '/insertboard',
                // title, content, file, href, writer
                data: {title: title, writer: writer, content: content, href: href, file: file}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
            return deferred.promise;
        };

        items.update = function (id, title, content, href) {
            var deferred = $q.defer();

            $http({
                method: 'post',
                url: '/updateboard',
                // title, content, file, href, id
                data: {id: id, title: title, content: content, href: href}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
            return deferred.promise;
        };

        items.delete = function (id, file) {
            var deferred = $q.defer();
            $http({
                method: 'post',
                url: '/deleteboard',
                data: {id: id, file: file}
            }).success(function (data) {
                    deferred.resolve(data);
                }
            );
            return deferred.promise;
        };

        return items;
    })
    .service('SessionInfo', function SessionInfo($rootScope) {
        this.sessionStorageKey = "__SESSION_INFO";

        try {
            $rootScope.currentUser = JSON.parse(sessionStorage.getItem(this.sessionStorageKey) || "{}");
        } catch (e) {
            $rootScope.currentUser = {};
        }

        this.getCurrentUser = function () {
            return $rootScope.currentUser;
        };

        this.setUserInfo = function (info) {
            angular.extend($rootScope.currentUser, info);
            sessionStorage.setItem(this.sessionStorageKey, JSON.stringify($rootScope.currentUser));
        };

        this.reset = function () {
            $rootScope.currentUser = {};
            sessionStorage.setItem(this.sessionStorageKey, JSON.stringify($rootScope.currentUser));
        };
    })
    .service('newWinParamExtract', function newWinParamExtract() {
        this.getParamList = function (fullUrl) {
            // ~.html?key=value&key=value... 형태로 넘겼을 때 추출하는 서비스
            var paramList = [];

            try {
                var paramIndex = fullUrl.indexOf('?');

                if (paramIndex != 0 && paramIndex < fullUrl.length) { // 파라미터가 있을 때만 작동
                    var paramFull = fullUrl.substring(paramIndex + 1);
                    var param = paramFull.split('&');

                    var _i, _len = param.length;
                    var obj = {};

                    for (_i = 0; _i < _len; ++_i) {
                        var val = param[_i].split('=');
                        if (val.length > 1) {
                            obj[val[0]] = val[1];
                            paramList.push(obj);
                        }
                    }

                    return paramList;
                }
            }
            catch(e)
            {
                return paramList;
            }
        }
    });