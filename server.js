'use strict';

var express = require('express');

var app = express();
app.use('/assets', express.static('./assets'));
app.use(express.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/ball.html')
})

app.listen(3000, () => console.log("server running"));
