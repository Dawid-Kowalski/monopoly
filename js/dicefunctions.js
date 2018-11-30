function throwDice(){
	firstDice = Math.floor((Math.random()*6)+1);
	document.getElementById("first-dice").innerHTML = firstDice;
	secondDice = Math.floor((Math.random()*6)+1);
	document.getElementById("second-dice").innerHTML = secondDice;
	sumDice = firstDice + secondDice;
	document.getElementById("sum-dice").innerHTML = sumDice;

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

	drawBoard();
	for(let i = 0; i<players.length; i++) {
		drawPlayerPosition(i);
	}

	checkPlayerField(activePlayer);
}