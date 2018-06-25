var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('view engine', 'ejs');



app.get('/', function(req,res){
    res.render('index')
})

app.listen(3000, function(){
    console.log('listening on 3000');
})



/*  SERVER SQL
Server: sql7.freemysqlhosting.net
Name: sql7244511
Username: sql7244511
Password: wcUkbMcLNl
Port number: 3306
*/