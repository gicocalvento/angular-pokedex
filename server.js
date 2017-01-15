var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
	    next();
    } 
}); 

//==========RESTFUL APIs============//

//get all pokemon
app.get('/pokemons', function (req, res) {
   fs.readFile( __dirname + "/" + "data/pokedex.json", 'utf8', function (err, data) {
       res.end( data );
   });
});

//get all skills
app.get('/skills', function (req, res) {
    fs.readFile( __dirname + "/" + "data/skills.json", 'utf8', function (err, data) {
        res.end( data );
    });
});

//get all types
app.get('/types', function (req, res) {
   fs.readFile( __dirname + "/" + "data/types.json", 'utf8', function (err, data) {
       res.end( data );
   });
});

//get specific pokemon thm
app.get('/pokemons/thm/:id', function (req, res) {
    var fileName = '';
    var hasFile = false;
    fs.readdir(__dirname + "/" + "data/images/thm", function(err, files){
        if(err) throw err;
        files.forEach(function(file){
            var pokemonId = file.substr(0, 3);
            if (req.params.id == pokemonId) {
                fileName = file;
                hasFile = true;
            }
        });
        if (hasFile) {
            res.sendFile( __dirname + "/" + "data/images/thm/" + fileName);
        } else {
            res.end('none');
        }
   });
});

//get specific pokemon image
app.get('/pokemons/img/:id', function (req, res) {
    var fileName = '';
    var hasFile = false;
    fs.readdir(__dirname + "/" + "data/images/img", function(err, files){
        if(err) throw err;
        files.forEach(function(file){
            var pokemonId = file.substr(0, 3);
            if (req.params.id == pokemonId) {
                fileName = file;
                hasFile = true;
            }
        });
        if (hasFile) {
            res.sendFile( __dirname + "/" + "data/images/img/" + fileName);
        } else {
            res.end('none');
        }
   });
});

//get specific pokemon spr
app.get('/pokemons/spr/:id', function (req, res) {
    var fileName = '';
    var hasFile = false;
    fs.readdir(__dirname + "/" + "data/images/spr", function(err, files){
        if(err) throw err;
        files.forEach(function(file){
            var pokemonId = file.substr(0, 3);
            if (req.params.id == pokemonId) {
                fileName = file;
                hasFile = true;
            }
        });
        if (hasFile) {
            res.sendFile( __dirname + "/" + "data/images/spr/" + fileName);
        } else {
            res.end('none');
        }
   });
});

//get specific pokemon spr
app.get('/pokemons/list/', function (req, res) {
    var pokemons = [];
    fs.readFile( __dirname + "/" + "data/pokedex.json", 'utf8', function (err, data) {
       pokemons = data; 
       console.log(pokemons);
   });
});

console.log("Nodejs API is running on port http://localhost:9001");
app.listen(process.env.PORT || 9001);