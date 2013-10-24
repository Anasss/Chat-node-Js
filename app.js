var express = require('express');
var http = require('http');
var path = require('path');
var sio = require('socket.io');


var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view_engine', 'ejs');
app.set('views',__dirname+'/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname ,'public')));
 

var server = http.createServer(app);
var io = sio.listen(server);

server.listen(3000);



io.sockets.on('connection', function (socket) {
	socket.emit('bvn', { "Bienvenue" : "Bienvenue sur le chat" });
	console.log("Nouveau client connecté");
	socket.on('un autre evenement', function (data) {
		console.log(data);
	});
});


