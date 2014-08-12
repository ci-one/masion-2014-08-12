/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('requestApp')
    .controller('requestAdminCtrl', function ($scope, $filter, items) {

        $scope.selectedItem = {
            id: 0
            , title: 'iotWeb'
            , author: 'admin'
            , tel: '000-000-0000'
            , email: ''
            , company: ''
            , homepage: ''
            , bizType: '전문, 과학, 기술'
            , money: ''
            , contents: 'test'
        };

        $scope.boardList = [
            {contents: 'blar blar', date: '2014/01/01 00:00'}
            ,
            {contents: 'blar blar', date: '2014/01/01 00:00'}
            ,
            {contents: 'blar blar', date: '2014/01/01 00:00'}
            ,
            {contents: 'blar blar', date: '2014/01/01 00:00'}
            ,
            {contents: 'blar blar', date: '2014/01/01 00:00'}
        ];
    })
    .controller('requestListCtrl', function($scope) {

        $scope.itemsPerPage = 5;
        $scope.pagedItems = [];
        $scope.currentPage = 0;

        $scope.process = function (selected) {
            $scope.selectedItem = selected;
        };

        var getlist = function(){
            items.query().then(function (result) {
                $scope.items = result;
            }).then(function(){
                var searchMatch = function (haystack, needle) {
                    if (!needle) {
                        return true;
                    }
                    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
                };
                // init the filtered items
                $scope.search = function () {
                    $scope.currentPage = 0;
                    // now group by pages
                    $scope.groupToPages();
                };
                // calculate page in place
                $scope.groupToPages = function () {
                    $scope.pagedItems = [];

                    for (var i = 0; i < $scope.items.length; i++) {
                        if (i % $scope.itemsPerPage === 0) {
                            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
                        } else {
                            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                        }
                    }
                };
                $scope.range = function (start, end) {
                    var ret = [];
                    if (!end) {
                        end = start;
                        start = 0;
                    }
                    for (var i = start; i < end; i++) {
                        ret.push(i);
                    }
                    return ret;
                };
                $scope.prevPage = function () {
                    if ($scope.currentPage > 0) {
                        $scope.currentPage--;
                    }
                };
                $scope.nextPage = function () {
                    if ($scope.currentPage < $scope.pagedItems.length - 1) {
                        $scope.currentPage++;
                    }
                };
                $scope.setPage = function () {
                    $scope.currentPage = this.n;
                };
                // functions have been describe process the data for display
                $scope.search();
            })
        };
        getlist();
    });
