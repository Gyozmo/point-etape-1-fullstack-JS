var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('view engine', 'ejs');

        //SQL
//connection parameters
var con = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7244511",
    password: "wcUkbMcLNl"
});

//connection
con.connect(function(err){
    if (err) throw err;
    console.log("connected!")
})

//create DB
con.query("CREATE DATABASE mediateque", function(err, result){
    if(err) throw err;
    console.log("mediateque created");
})


//EXPRESS
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