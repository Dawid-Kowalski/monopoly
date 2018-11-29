drawBoard();

activePlayer = 0;

let centerOfPawnX = 0;
let centerOfPawnY = 0;

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

function updatePlayerPosition (player) {
	players[player].position = players[player].position + sumDice;

	if(players[player].position > 40){
		players[player].position -= 40;
	}

	return players[player].position;
}

function drawPlayerPosition(player) {

	//pozycja numerowana od 1 tablica pól od zera trzeba odjąć 1 //
	let position = players[player].position - 1;

	let minXfieldValue = fields[position].minXpos;
	let maxXfieldValue = fields[position].maxXpos;
	let minYfieldValue = fields[position].minYpos;
	let maxYfieldValue = fields[position].maxYpos;

	// wielkość pionka //
	let radiusOfPawn = 10;
	// współrzędne środka pionka pionek, musi mieścić się w polu uwzględniając równiez promień pionka (nie może wystawać)
	centerOfPawnX = Math.floor(Math.random()*((maxXfieldValue - radiusOfPawn) - (minXfieldValue + radiusOfPawn)) + (minXfieldValue + radiusOfPawn));
	centerOfPawnY = Math.floor(Math.random() * ((maxYfieldValue -radiusOfPawn) - (minYfieldValue + radiusOfPawn)) +(minYfieldValue + radiusOfPawn));

	ctx.beginPath();
	ctx.arc(centerOfPawnX, centerOfPawnY , radiusOfPawn, 0, 2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
	ctx.stroke();	
}

function updatePlayerPawnPosition(player) {
	players[player].pawnXposition = centerOfPawnX;
	players[player].pawnYposition = centerOfPawnY;

	return players[player];
}