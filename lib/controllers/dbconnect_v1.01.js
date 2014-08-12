'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */
var mariasql = require('mariasql');

exports.connection = function(){
    //db연결정보 지정
    var host = '192.168.3.2';
    var user = 'kji';
    var password = 'kji';
    var db = 'ymdb';


//connection setting
    var c = new mariasql();
    c.connect({
        host : host,
        user : user,
        password : password,
        db : db
    });


    return c;
}