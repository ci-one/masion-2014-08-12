/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('cioneApp')
    .controller('ctrlupdate', function ($scope, $routeParams, items) {
        $scope.pageClass = 'ctrlAni';
        var i = $routeParams.id;
        items.getone(i).then(function (result) {
            $scope.item = result[0];
        });
        $scope.insert = function () {
            var title = $scope.item.title;
            var content = $scope.item.content;
            var href = $scope.item.href;
            items.update(i, title, content, href).then(function (data) {
                alert(data);
                history.back();
            })
        }
    });
