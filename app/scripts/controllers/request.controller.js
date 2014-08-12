/**
 * Created by SimJeongmee on 2014-07-22.
 */
'use strict';

angular.module('cioneApp')
    .controller('requestCtrl', function ($scope, SessionInfo) {
        $scope.openWin = function(type){
            if(type!='admin'){
            window.open("views/6000-S_request/048-6100-S_request_write.html?type=" + type
                , "openRequest"
                , "width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );
        }
            else
            {
                window.open("views/6000-S_request/048-6200-S_request_Admin.html"
                    , "openRequest"
                    , "width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );
            }
        };

        $scope.isAdmin = function() {
            return SessionInfo.getCurrentUser().isAdmin;
        };


    });
