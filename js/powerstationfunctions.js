function buyPowerStation () {

	buttonEnabled("next-player");

	let player = activePlayer;
	players[player].powerStation.have = "tak";
	players[player].powerStationAndWaterworks++;
	document.getElementById("havepowerstation").innerHTML = players[player].powerStation.have;

	fields[11].property = players[player].name;
	fields[11].propertyId = player;

	updatePlayerMoney(player, -fields[11].cost);
	showRoundMainData(player);

	buttonDisabled("buttonbuypowerstation");
	buttonEnabled("buttonsellpowerstation");
	buttonEnabled("buttonmortagepowerstation");
}

function sellPowerStation () {

	buttonDisabled("buttonsellpowerstation");

	let player = activePlayer;
	let whoBuy = document.getElementById("buyerpowerstation").value;
	let price = parseInt(document.getElementById("pricepowerstation").value);

	if(players[player].powerStation.have == "tak") {
		updatePlayerMoney(player, price);
		updatePlayerMoney(whoBuy, -price);
		players[player].powerStationAndWaterworks--;
		players[whoBuy].powerStationAndWaterworks++;
	}
	else {
		updatePlayerMoney(whoBuy, -price);
		players[whoBuy].powerStationAndWaterworks++;
	}

	players[player].powerStation.have = "nie";
	players[whoBuy].powerStation.have = "tak";

	players[whoBuy].powerStation.mortage = players[player].powerStation.mortage;

	fields[11].property = players[whoBuy].name;

	document.getElementById("havepowerstation").innerHTML = players[player].powerStation.have;
	showRoundMainData(player);

	buttonDisabled("buttonbuypowerstation");
	buttonDisabled("buttonsellpowerstation");
	buttonDisabled("buttonmortagepowerstation");
	buttonDisabled("buttonmortageremovepowerstation");
}

function mortagePowerStation () {
	let player = activePlayer;
	players[player].powerStation.mortage = "tak";
	document.getElementById("mortagepowerstation").innerHTML = players[player].powerStation.mortage;

	fields[11].isMortage = "tak";

	updatePlayerMoney(player, fields[11].mortage);
	showRoundMainData(player);

	buttonDisabled("buttonmortagepowerstation");
	buttonEnabled("buttonmortageremovepowerstation");
}

function mortageRemovePowerStation () {
	let player = activePlayer;
	players[player].powerStation.mortage = "nie";
	document.getElementById("mortagepowerstation").innerHTML = players[player].powerStation.mortage;

	fields[11].isMortage = "nie";

	updatePlayerMoney(player, -fields[11].mortageRemove);
	showRoundMainData(player);

	buttonEnabled("buttonmortagepowerstation");
	buttonDisabled("buttonmortageremovepowerstation");
}