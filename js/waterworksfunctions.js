function buyWaterworks () {

	buttonEnabled("next-player");

	let player = activePlayer;
	players[player].waterworks.have = "tak";
	players[player].powerStationAndWaterworks++;
	document.getElementById("havewaterworks").innerHTML = players[player].waterworks.have;

	fields[27].property = players[player].name;
	fields[27].propertyId = player;

	updatePlayerMoney(player, -fields[27].cost);
	showRoundMainData(player);

	buttonDisabled("buttonbuywaterworks");
	buttonDisabled("buttonbuywaterworks");
	buttonEnabled("buttonsellwaterworks");
	buttonEnabled("buttonmortagewaterworks");
}

function sellWaterworks () {

	buttonEnabled("next-player");

	let player = activePlayer;
	let whoBuy = document.getElementById("buyerwaterworks").value;
	let price = parseInt(document.getElementById("pricewaterworks").value);

	if(players[player].waterworks.have == "tak") {
		updatePlayerMoney(player, price);
		updatePlayerMoney(whoBuy, -price);
		players[player].powerStationAndWaterworks--;
		players[whoBuy].powerStationAndWaterworks++;
	}
	else {
		updatePlayerMoney(whoBuy, -price);
		players[whoBuy].powerStationAndWaterworks++;
	}

	players[player].waterworks.have = "nie";
	players[whoBuy].waterworks.have = "tak";

	players[whoBuy].waterworks.mortage = players[player].waterworks.mortage;

	fields[27].property = players[whoBuy].name;

	document.getElementById("havewaterworks").innerHTML = players[player].waterworks.have;
	showRoundMainData(player);

	buttonDisabled("buttonbuywaterworks");
	buttonDisabled("buttonsellwaterworks");
	buttonDisabled("buttonmortagewaterworks");
	buttonDisabled("buttonmortageremovewaterworks");
}

function mortageWaterworks () {
	let player = activePlayer;
	players[player].waterworks.mortage = "tak";
	document.getElementById("mortagewaterworks").innerHTML = players[player].waterworks.mortage;

	fields[27].isMortage = "tak";

	updatePlayerMoney(player, fields[27].mortage);
	showRoundMainData(player);

	buttonDisabled("buttonmortagewaterworks");
	buttonEnabled("buttonmortageremovewaterworks");
}

function mortageRemoveWaterworks () {
	let player = activePlayer;
	players[player].waterworks.mortage = "nie";
	document.getElementById("mortagewaterworks").innerHTML = players[player].waterworks.mortage;

	fields[27].isMortage = "nie";

	updatePlayerMoney(player, -fields[27].mortageRemove);
	showRoundMainData(player);

	buttonEnabled("buttonmortagewaterworks");
	buttonDisabled("buttonmortageremovewaterworks");
}