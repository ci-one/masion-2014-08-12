var timeApp = angular.module('expApp');
timeApp.factory('envchk',function(){
    var envchk = {};
    envchk.getH = function(time){
        if(time>=0 && time<120){
            return 'daytime';
        }else if(time<=240 && time>=120){
            return 'nighttime';
        }
    };
    envchk.getW = function(n){
        if(n>=0 && n<100){
            msg = 'sun';
        }else if(n>=100 && n<200){
            msg = 'rain';
        }else{
            msg = 'snow';
        }

        return msg;
    }

    return envchk;
});

timeApp.controller('timeCtrl',function($scope, envchk){
    $scope.time = 0;
    $scope.getTime = function(){
       $scope.chktime = envchk.getH($scope.time);
    };
    $scope.getTime();

    $scope.weather = 0;
    $scope.getWeather = function(){
        $scope.wet = envchk.getW($scope.weather);
    };
    $scope.getWeather();
});