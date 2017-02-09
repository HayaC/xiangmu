var express = require('express');
var app = express();
// 设置express的默认路劲, 默认路径为项目路劲


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/0', function (req, res) {
   res.sendFile(__dirname+'/01.json');
});

app.get('/1', function (req, res) {
   res.sendFile(__dirname+'/02.json');
});

app.get('/2', function (req, res) {
   res.sendFile(__dirname+'/03.json');
});

app.get('/3', function (req, res) {
   res.sendFile(__dirname+'/04.json');
});

var server = app.listen(8081)