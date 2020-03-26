// creating boiler plate for node server
var express = require('express');
var bpdyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.statistic(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

var routes = require('./controllers/routes');
app.use('/',routes);

var port = 3306;
app.listen(port);