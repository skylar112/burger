var express = require ("express");
var bodyParser = require ("body-parser");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var routes = require ("./controller/burger.js"); 
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listen on: http://localhost:" + PORT);
});

