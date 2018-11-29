drawBoard();

activePlayer = 0;

drawPlayerPosition();


function prepaerPlayers() {

	numberOfPlayers = parseInt(document.getElementById("number-of-players").value);

	showPlayerFields();
	createPlayers();

	return players;
}

function changePlayersName(id) {
	let name = "player" + id + "-name";
	players[id-1].name = document.getElementById(name).value;

	return players[id-1].name;
}

function showRoundMainData(player) {
	document.getElementById("player-name").innerHTML = players[player].name;
	document.getElementById("player-money").innerHTML = players[player].money;
	document.getElementById("player-position").innerHTML = players[player].position;
}

function nextPlayer() {

	drawBoard();
	showRoundMainData(activePlayer);

	if(activePlayer<(players.length)-1) {
		activePlayer++;
	}
	else{
		activePlayer = 0;
	}

	return activePlayer;
}

function updatePlayersPosition (player) {
	players[player].position = players[player].position + sumDice;

	if(players[player].position > 40){
		players[player].position -= 40;
	}

	return players[player].position;
}

function drawPlayerPosition() {
	// wielkość pionka //
	let radiusOfPawn = 10;
	// współrzędne środka pionka pionek, musi mieścić się w polu uwzględniając równiez promień pionka (nie może wystawać)
	let centerOfPawnX = Math.floor(Math.random()*((lS - radiusOfPawn) - (0 + radiusOfPawn)) + (0 + radiusOfPawn));
	let centerOfPawnY = Math.floor(Math.random() * ((ch -radiusOfPawn) - (ch - lS + radiusOfPawn)) +(ch - lS + radiusOfPawn));

	console.log(centerOfPawnX);
	console.log(centerOfPawnY);

	ctx.beginPath();
	ctx.arc(centerOfPawnX, centerOfPawnY , radiusOfPawn, 0, 2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
	ctx.stroke();
}
