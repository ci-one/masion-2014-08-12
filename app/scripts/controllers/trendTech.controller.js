/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('cioneApp')
    .controller('trendTechCtrl', function ($scope, $filter, items, SessionInfo) {
        $scope.pageClass = 'ctrlAni';
        $scope.itemsPerPage = 5;
        $scope.pagedItems = [];
        $scope.currentPage = 0;

        $scope.isAdmin = function () {
            return SessionInfo.getCurrentUser().isAdmin;
        };

        $scope.openWin = function (objId) {
            var url = "views/5000-S_trendTech/048-5200-S_trendTech_Write1.html";

            if (objId != -1)
                url = url + '?id=' + objId;
            else
                url = url + '';

            window.open(url
                , "openTrendTechWrite"
                , "width=350, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes");

            //alert(objId);
        };

        $scope.process = function (mole) {
            $scope.firstitem = mole;
            console.log(mole);
        };

        var getlist = function () {
            items.query().then(function (result) {
                $scope.firstitem = result[0];
                $scope.items = result;
            }).then(function () {

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

        $scope.update = function (item) {

            var i = item.id;
            items.getone(i).then(function (result) {
                $scope.item = result[0];
            });

            $scope.insert = function () {
                var title = $scope.item.title;
                var content = $scope.item.content;

                items.update(i, title, content).then(function (data) {
                    alert(data);
                    history.back();
                })
            }
        };

        $scope.delete = function (id, fileN) {
            items.delete(id, fileN).then(function (data) {
                alert(data);
                getlist();
            })
        }
    });
