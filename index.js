var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var path = require('path');
var app = express();
var db = require("./models");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));

//routes
app.get("/", function(req, res){
  res.render("site/index");
});

app.get("/index", function(req, res){
  res.render("site/index");
});

app.get("/new", function(req, res){
  res.render("site/new");
});

app.get("/teams", function(req,res){
  db.win.findAll().then(function(bar) {
      res.render("site/teams", {foo: bar});
  });
});

app.get("/teams/:id", function(req, res){
  db.win.findById(req.params.id).then(function(goo){
    console.log("id: ", req.params.id);
    res.render("/site/teamdetail", {boo: goo});
  })
})

//Listener
app.listen(3000);
