/**
 * Created by SimJeongmee on 2014-07-24.
 */
'use strict';

angular.module('requestApp', ['ui.bootstrap'])
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