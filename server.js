var PORT = 8000;
var express = require('express');
var exphbs  = require('express-handlebars');


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('home');
})

app.listen(process.argv.PORT || PORT, function() {
	console.log("24k magic happens on " + PORT);
});
