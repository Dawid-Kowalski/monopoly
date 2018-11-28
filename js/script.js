drawBoard();

function prepaerPlayers() {

	numberOfPlayers = parseInt(document.getElementById("number-of-players").value);

	showPlayerFields();
	createPlayers();

	console.log(players);
}
