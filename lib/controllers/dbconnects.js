'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */
var mariasql = require('mariasql');

//db연결정보 지정
var host = '192.168.1.16';
var user = 'root';
var password = '1234';
var db = 'test';

var sql = ''; //조합된 query문이 담기는 문자열.


//connection setting
var c = new mariasql();
c.connect({
    host : host,
    user : user,
    password : password,
    db : db
});

//연결로그 출력
c.on('connect', function() {
    console.log('Client connected');
}).on('error', function(err) {
    console.log('Client error: ' + err);
}).on('close', function(hadError) {
    console.log('Client closed');
});


exports.list = function(req, res) {
    var id = req.body.id;
    var pswd = req.body.pswd;

    var sending = [];
    sql = 'SELECT id FROM authorizations where id="'+id+'" and pw="'+pswd+'"';

    c.query(sql, null).on('result', function(res) {
        res.on('row', function(row) {
            sending.push(row);
            console.log('Result row: ' + row);
        }).on('error', function(err) {
            console.log('Result error: ' + inspect(err));
        }).on('end', function(info) {
            console.log('Result finished successfully');
        });
    }).on('end', function() {
        var obj = {sending:sending};
        if(sending[0]!=null){
            res.send(200,obj);
        }else{
            res.send(500,obj);
        }
    });
};