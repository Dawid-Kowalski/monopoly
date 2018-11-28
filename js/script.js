drawBoard();

activePlayer = 0;


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