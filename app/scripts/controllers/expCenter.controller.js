/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('cioneApp')
    .controller('expCenterCtrl', function ($scope) {
        $scope.openWin = function(type){
            window.open("views/3000-S_expCenter/048-3100-S_exp_stage.html?type=" + type
                , "openExpCenter"
                , "width=1200, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );
        }
    });