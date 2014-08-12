/**
 * Created by wealab04 on 2014-07-09.
 */
'use strict';

angular.module('expApp')
    .controller('mainCtrl',function($scope){
        $scope.stage="main";
        $scope.quick = 'ng-enter';
        $scope.selectStage = function(stage){
            $scope.stage = stage;
        }

        $scope.asd = function(){
            if($scope.quick=='ng-leave'){
                $scope.quick = 'ng-enter';
            }else{
            $scope.quick = 'ng-leave';
            }
        }
    })
    .controller('firstCtrl', function ($scope) {
        $scope.message = 'First Page';

    }).controller('backCtrl', function ($scope) {
        $scope.message = 'background sync Page';
        $scope.color = '#ffffff';

        $('select[name="colorpicker-longlist"]').simplecolorpicker().on('change', function () {
            var aa = $('select[name="colorpicker-longlist"]').val();
            $scope.ss(aa);
            getConColor();
            $scope.$apply();
        });

        var getConColor = function () {
            if ($scope.cola >= 0 && $scope.cola < 9) {
                $scope.contcolor = 'bright';
            } else {
                $scope.contcolor = 'dark';
            }
        }

    }).controller('mapCtrl', function ($scope) {
        $scope.message = 'map Page';
    }).controller('animCtrl', function ($scope) {
        $scope.message = 'active animation Page';
    }).controller('actCtrl', function ($scope) {
        $scope.message = 'active web Page';
    }).controller('docuCtrl', function ($scope) {
        $scope.message = 'document dome Page';
    }).controller('nfcCtrl', function ($scope) {
        $scope.message = 'nfc Page';
    });