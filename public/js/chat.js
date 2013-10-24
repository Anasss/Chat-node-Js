function envoyermessage(){

	var socket = io.connect("localhost",3000);
	var mssg = $("#message").val();
	
	
	socket.on('connection', function (socket) {
		socket.emit('NewMsg',  mssg );
		console.log("Nouveau client connecté");

		socket.on('un autre evenement', function (data) {
			console.log(data);
		});
	});

}



$("#messages").click(function(){

	var nom = $("#message").val();

	

});
