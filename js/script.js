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

function changePlayerColor(id) {
	let name = "player" + id + "-color";
	players[id-1].color = document.getElementById(name).value;

	return players[id-1].color;
}

function showRoundMainData(player) {
	document.getElementById("player-name").innerHTML = players[player].name;
	document.getElementById("player-money").innerHTML = players[player].money;
	document.getElementById("player-position").innerHTML = players[player].position;
}

function nextPlayer() {

	drawBoard();
	showRoundMainData(activePlayer);

	for(let i = 0; i<players.length; i++) {
		drawPlayerPosition(i);
	}

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
	ctx.fillStyle = players[player].color;
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

function checkPlayerField(player) {

	if(fields[players[player].position - 1].type == "city"){

		hideInfoPanels (false, true, true, true, true);

		document.getElementById('field-city-name-position').innerHTML = fields[players[player].position - 1].name;
		document.getElementById('field-property').innerHTML = fields[players[player].position - 1].property;
		document.getElementById('is-mortage').innerHTML = fields[players[player].position - 1].isMortage;
		document.getElementById('house').innerHTML = fields[players[player].position - 1].house;
		document.getElementById('hotel').innerHTML = fields[players[player].position - 1].hotel;
		document.getElementById('cost').innerHTML = fields[players[player].position - 1].cost;
		document.getElementById('cost-house').innerHTML = fields[players[player].position - 1].cost1house;
		document.getElementById('cost-hotel').innerHTML = fields[players[player].position - 1].cost1hotel;
		document.getElementById('mortage').innerHTML = fields[players[player].position - 1].mortage;
		document.getElementById('mortage-remove').innerHTML = fields[players[player].position - 1].mortageRemove;
		document.getElementById('pay-no-house').innerHTML = fields[players[player].position - 1].payNoHouse;
		document.getElementById('pay-1-house').innerHTML = fields[players[player].position - 1].pay1house;
		document.getElementById('pay-2-house').innerHTML = fields[players[player].position - 1].pay2house;
		document.getElementById('pay-3-house').innerHTML = fields[players[player].position - 1].pay3house;
		document.getElementById('pay-4-house').innerHTML = fields[players[player].position - 1].pay4house;
		document.getElementById('pay-1-hotel').innerHTML = fields[players[player].position - 1].pay1hotel;
	}


}