function createPlayers () {

	players = [];

//każdy gracz w tablicy musi mieć unikalne id//
	let playerId = 1;

	for(let i=0; i<numberOfPlayers; i++){
		let newPlayer = new Player();
		newPlayer.id = playerId; 
		players.push(newPlayer);
		playerId++;
	}
}