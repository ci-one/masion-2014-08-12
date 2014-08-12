/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('pageApp')
    .controller('ctrlinsert', function ($scope, items, $location, newWinParamExtract) {

        $scope.selectedId = -1;

        var paramList = newWinParamExtract.getParamList($location.absUrl());

        if (paramList.length > 0) {
            $scope.selectedId = paramList[0]['id'];
        }

        if($scope.selectedId)
        {
            // value setting
            items.getone($scope.selectedId).then(function(result){
                $scope.item = result[0];
            });

            // enable setting
        }

        $scope.pageClass = 'ctrlAni';

        var $filess;
        $scope.onFileSelect = function ($files) {
            $filess = $files;
        };
        $scope.insert = function () {
            if ($filess == null || $filess == '') {
                var title = $scope.item.title;
                var writer = $scope.item.writer;
                var content = $scope.item.content;
                var fileN = 'no file';
                var href = $scope.item.href;

                items.insert(title, writer, content, href, fileN).then(function (data) {
                    alert(data)
                });
                history.back();
            } else {
                items.insertF($filess).then(function (result) {
                    var title = $scope.item.title;
                    var writer = $scope.item.writer;
                    var content = $scope.item.content;
                    var href = $scope.item.href;
                    var fileN = result;
                    items.insert(title, writer, content, href, fileN).then(function (data) {
                        alert(data)
                    });
                    history.back();
                }, function () {
                    alert('오류입니다.')
                });
            }
        };

        $scope.update = function() {
            var title = $scope.item.title;
            var content = $scope.item.content;
            var href = $scope.item.href;

            items.update($scope.selectedId, title, content, href).then(function(data){
                alert(data);
                history.back();
            });
        }
    });