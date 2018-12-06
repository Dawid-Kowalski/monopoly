function buyRailways (id) {

	buttonEnabled("next-player");

	let player = activePlayer;
	let fieldId = players[player].position - 1;

	if(players[player].money < fields[fieldId].cost) { 
		alert("masz za mało pieniędzy");
	} else {
		players[player].railways[id-1].have = "tak";
		players[player].railwaysAll++;
		document.getElementById("haverailways"+id).innerHTML = players[player].railways[id-1].have;

		let fieldId = players[player].railways[id-1].idField;

		fields[fieldId].property = players[player].name;
		fields[fieldId].propertyId = player;

		updatePlayerMoney(player, -fields[fieldId].cost);
		showRoundMainData(player);

		buttonDisabled("buttonbuyrailways"+id);
		buttonEnabled("buttonsellrailways"+id);
		buttonEnabled("buttonmortagerailways"+id);
	}
}

function sellRailways (id) {

	buttonEnabled("next-player");

	let player = activePlayer;
	let whoBuy = document.getElementById("buyerrailways"+id).value;
	let fieldId = players[player].railways[id-1].idField;
	let price = parseInt(document.getElementById("pricerailways"+id).value);

	if(players[player].railways[id-1].have == "tak") {
		updatePlayerMoney(player, price);
		updatePlayerMoney(whoBuy, -price);
		players[player].railwaysAll--;
		players[whoBuy].railwaysAll++;
	}
	else {
		updatePlayerMoney(whoBuy, -price);
		players[whoBuy].railwaysAll++;
	}

	players[player].railways[id-1].have = "nie";
	players[whoBuy].railways[id-1].have = "tak";

	players[whoBuy].railways[id-1].mortage = players[player].railways[id-1].mortage;

	fields[fieldId].property = players[whoBuy].name;
	fields[fieldId].propertyId = whoBuy;

	document.getElementById("haverailways"+id).innerHTML = players[player].railways[id-1].have;
	showRoundMainData(player);

	buttonDisabled("buttonbuyrailways"+id);
	buttonDisabled("buttonsellrailways"+id);
	buttonDisabled("buttonmortagerailways"+id);
	buttonDisabled("buttonmortageremoverailways"+id);
}

function mortageRailways (id) {
	let player = activePlayer;
	players[player].railways[id-1].mortage = "tak";
	document.getElementById("mortagerailways"+id).innerHTML = players[player].railways[id-1].mortage;

	let fieldId = players[player].railways[id-1].idField;

	fields[fieldId].isMortage = "tak";

	updatePlayerMoney(player, fields[fieldId].mortage);
	showRoundMainData(player);

	buttonDisabled("buttonmortagerailways"+id);
	buttonEnabled("buttonmortageremoverailways"+id);
}

function mortageRailwaysRemove (id) {
	let player = activePlayer;
	players[player].railways[id-1].mortage = "nie";
	document.getElementById("mortagerailways"+id).innerHTML = players[player].railways[id-1].mortage;

	let fieldId = players[player].railways[id-1].idField;

	fields[fieldId].isMortage = "nie";

	updatePlayerMoney(player, -fields[fieldId].mortageRemove);
	showRoundMainData(player);

	buttonEnabled("buttonmortagerailways"+id);
	buttonDisabled("buttonmortageremoverailways"+id);
}