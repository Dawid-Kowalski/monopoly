function throwDice(){

	firstDice = Math.floor((Math.random()*6)+1);

	secondDice = Math.floor((Math.random()*6)+1);

	sumDice = firstDice + secondDice;

	updatePlayerPosition(activePlayer);
	updatePlayerPawnPosition(activePlayer);

	showRoundMainData(activePlayer);

	drawInventoryCity(activePlayer);
	addCityNamePlayerInventory();
	addCityInfoPlayerInventory(activePlayer);
	addByerCityPlayerInventory();

	drawInventoryRailways(activePlayer);
	addRailwaysNamePlayerInventory();
	addRailwaysInfoPlayerInventory(activePlayer);
	addByerRailwaysPlayerInventory();

	drawInventoryBuldings(activePlayer);
	addBuldingsInfoPlayerInventory(activePlayer);
	addByerPowerstationPlayerInventory();
	addByerWaterworksPlayerInventory();

	drawCardsInventory(activePlayer);

	drawBoard();
	setTimeout(drawAllPawns, 0);

	checkPlayerField(activePlayer);

	buttonDisabled("throw-dice");
	buttonEnabled("next-player");
}

	function drawAllPawns() {
		for(let i = 0; i<players.length; i++) {
			drawPlayerPosition(i);
		}
	}