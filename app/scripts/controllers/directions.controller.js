/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('cioneApp')
    .controller('directionsCtrl', function ($scope) {
        $scope.init = function (tab) {
            if (tab == 'map') {

            }
            else if (tab == 'road') {
//                var p = new daum.maps.LatLng(37.480140, 126.886409);
//                var rc = new daum.maps.RoadviewClient();
//                var rv = new daum.maps.Roadview(document.getElementById("roadview"));
//
//                rc.getNearestPanoId(p, 50, function (panoid) {
//                    rv.setPanoId(panoid);
//                    rv.setViewpoint({
//                        pan: 50,
//                        tilt: 0,
//                        zoom: 0
//                    });
//                });
            }
        }
    });
