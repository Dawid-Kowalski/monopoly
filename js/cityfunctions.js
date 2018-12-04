function buyCity(id) {
	let player = activePlayer;
	let fieldId = players[player].city[id-1].idField;

	buttonEnabled("next-player");

	if(players[player].money < fields[fieldId].cost) { 
		alert("masz za mało pieniędzy");
	} else {
		players[player].city[id-1].have = "tak";
		document.getElementById("haveid"+id).innerHTML = players[player].city[id-1].have;

		fields[fieldId].property = players[player].name;
		fields[fieldId].propertyId = player;

		if(fields[fieldId].country == "greece") {
			players[player].greeceCity++;
			if(players[player].greeceCity == 2) {
				players[player].greeceComplete = "tak";
			}

		}
		if(fields[fieldId].country == "italy") {
			players[player].italyCity++;
			if(players[player].italyCity == 3) {
				players[player].italyComplete = "tak";
			}
		}
		if(fields[fieldId].country == "spain") {
			players[player].spainCity++;
			if(players[player].spainCity == 3) {
				players[player].spainComplete = "tak";
			}
		}
		if(fields[fieldId].country == "england") {
			players[player].englandCity++;
			if(players[player].englandCity == 3) {
				players[player].englandComplete = "tak";
			}
		}
		if(fields[fieldId].country == "benelux") {
			players[player].beneluxCity++;
			if(players[player].beneluxCity == 3) {
				players[player].beneluxComplete = "tak";
			}
		}
		if(fields[fieldId].country == "sweden") {
			players[player].swedenCity++;
			if(players[player].swedenCity == 3) {
				players[player].swedenComplete = "tak";
			}
		}
		if(fields[fieldId].country == "rfn") {
			players[player].rfnCity++;
			if(players[player].rfnCity == 3) {
				players[player].rfnComplete = "tak";
			}
		}
		if(fields[fieldId].country == "austria") {
			players[player].austriaCity++;
			if(players[player].austriaCity == 2) {
				players[player].austriaComplete = "tak";
			}
		}

		updatePlayerMoney(player, -fields[fieldId].cost);
		showRoundMainData(player);

		buttonDisabled("buttonbuycity"+id);
		buttonEnabled("buttonsellcity"+id);
		buttonEnabled("buttonbuyhouse"+id);
		buttonEnabled("buttonbuyhotel"+id);
		buttonEnabled("buttonmortage"+id);
	}
}

function sellCity (id) {

//funkcja obsługuje zarówno normalną sprzedaż jak i sprzedaż gdy po stanięciu na pole gracz nie chce kupić
	buttonEnabled("next-player");

	let player = activePlayer;
	let whoBuy = document.getElementById("buyer"+id).value;
	let fieldId = players[player].city[id-1].idField;
	let price = parseInt(document.getElementById("price"+id).value);

	if(players[player].city[id-1].have == "tak") {
		updatePlayerMoney(player, -price);
		updatePlayerMoney(whoBuy, -price);
	}
	else {
		updatePlayerMoney(whoBuy, -price);
	}

	players[player].city[id-1].have = "nie";
	players[whoBuy].city[id-1].have = "tak";
	players[whoBuy].city[id-1].mortage = players[player].city[id-1].mortage;

	fields[fieldId].property = players[whoBuy].name;
	fields[fieldId].propertyId = player;

	document.getElementById("haveid"+id).innerHTML = players[player].city[id-1].have;
	showRoundMainData(player);

	buttonDisabled("buttonbuycity"+id);
	buttonDisabled("buttonsellcity"+id);
	buttonDisabled("buttonbuyhouse"+id);
	buttonDisabled("buttonbuyhotel"+id);
	buttonDisabled("buttonmortage"+id);
	buttonDisabled("buttonmortageremove"+id);
}

function buyHouse (id) {

	let player = activePlayer;
	let fieldId = players[player].city[id-1].idField;
	let canBuy = true;

	if(players[player].city[id-1].idField == 0 && players[player].greeceComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - grecja");
		canBuy = false;
	}

	if(id == 1 && players[player].city[0].house > players[player].city[1].house) {
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 2 && players[player].greeceComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - grecja");
		canBuy = false;
	}

	if(id == 2 && players[player].city[1].house > players[player].city[0].house) {
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 5 && players[player].italyComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - włochy");
		canBuy = false;
	}

	if(id == 3 && (players[player].city[2].house == Math.max(players[player].city[2].house, players[player].city[3].house, players[player].city[3].house)) && !(players[player].city[2].house==players[player].city[3].house && players[player].city[3].house==players[player].city[4].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 7 && players[player].italyComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - włochy");
		canBuy = false;
	}

	if(id == 4 && (players[player].city[3].house == Math.max(players[player].city[2].house, players[player].city[3].house, players[player].city[4].house)) && !(players[player].city[2].house==players[player].city[3].house && players[player].city[3].house==players[player].city[4].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 8 && players[player].italyComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - włochy");
		canBuy = false;
	}

	if(id == 5 && (players[player].city[4].house == Math.max(players[player].city[2].house, players[player].city[3].house, players[player].city[4].house)) && !(players[player].city[2].house==players[player].city[3].house && players[player].city[3].house==players[player].city[4].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 10 && players[player].spainComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - hiszpania");
		canBuy = false;
	}

	if(id == 6 && (players[player].city[5].house == Math.max(players[player].city[5].house, players[player].city[6].house, players[player].city[7].house)) && !(players[player].city[5].house==players[player].city[6].house && players[player].city[5].house==players[player].city[7].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 12 && players[player].spainComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - hiszpania");
		canBuy = false;
	}

	if(id == 7 && (players[player].city[6].house == Math.max(players[player].city[5].house, players[player].city[6].house, players[player].city[7].house)) && !(players[player].city[5].house==players[player].city[6].house && players[player].city[5].house==players[player].city[7].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 13 && players[player].spainComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - hiszpania");
		canBuy = false;
	}

	if(id == 8 && (players[player].city[7].house == Math.max(players[player].city[5].house, players[player].city[6].house, players[player].city[7].house)) && !(players[player].city[5].house==players[player].city[6].house && players[player].city[5].house==players[player].city[7].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 15 && players[player].englandComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - anglia");
		canBuy = false;
	}

	if(id == 9 && (players[player].city[8].house == Math.max(players[player].city[8].house, players[player].city[9].house, players[player].city[10].house)) && !(players[player].city[8].house==players[player].city[9].house && players[player].city[8].house==players[player].city[10].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 17 && players[player].englandComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - anglia");
		canBuy = false;
	}

	if(id == 10 && (players[player].city[9].house == Math.max(players[player].city[8].house, players[player].city[9].house, players[player].city[10].house)) && !(players[player].city[8].house==players[player].city[9].house && players[player].city[8].house==players[player].city[10].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 18 && players[player].englandComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - anglia");
		canBuy = false;
	}

	if(id == 11 && (players[player].city[10].house == Math.max(players[player].city[8].house, players[player].city[9].house, players[player].city[10].house)) && !(players[player].city[8].house==players[player].city[9].house && players[player].city[8].house==players[player].city[10].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 20 && players[player].beneluxComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - benelux");
		canBuy = false;
	}

	if(id == 12 && (players[player].city[11].house == Math.max(players[player].city[11].house, players[player].city[12].house, players[player].city[13].house)) && !(players[player].city[11].house==players[player].city[12].house && players[player].city[11].house==players[player].city[13].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 22 && players[player].beneluxComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - benelux");
		canBuy = false;
	}

	if(id == 13 && (players[player].city[12].house == Math.max(players[player].city[11].house, players[player].city[12].house, players[player].city[13].house)) && !(players[player].city[11].house==players[player].city[12].house && players[player].city[11].house==players[player].city[13].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 23 && players[player].beneluxComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - benelux");
		canBuy = false;
	}

	if(id == 14 && (players[player].city[13].house == Math.max(players[player].city[11].house, players[player].city[12].house, players[player].city[13].house)) && !(players[player].city[11].house==players[player].city[12].house && players[player].city[11].house==players[player].city[13].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 25 && players[player].swedenComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - szwecja");
		canBuy = false;
	}

	if(id == 15 && (players[player].city[14].house == Math.max(players[player].city[14].house, players[player].city[15].house, players[player].city[16].house)) && !(players[player].city[14].house==players[player].city[15].house && players[player].city[14].house==players[player].city[16].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 26 && players[player].swedenComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - szwecja");
		canBuy = false;
	}

	if(id == 16 && (players[player].city[15].house == Math.max(players[player].city[14].house, players[player].city[15].house, players[player].city[16].house)) && !(players[player].city[14].house==players[player].city[15].house && players[player].city[14].house==players[player].city[16].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 28 && players[player].swedenComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - szwecja");
		canBuy = false;
	}

	if(id == 17 && (players[player].city[16].house == Math.max(players[player].city[14].house, players[player].city[15].house, players[player].city[16].house)) && !(players[player].city[14].house==players[player].city[15].house && players[player].city[14].house==players[player].city[16].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 30 && players[player].rfnComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - rfn");
		canBuy = false;
	}

	if(id == 18 && (players[player].city[17].house == Math.max(players[player].city[17].house, players[player].city[18].house, players[player].city[19].house)) && !(players[player].city[17].house==players[player].city[18].house && players[player].city[17].house==players[player].city[19].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 31 && players[player].rfnComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - rfn");
		canBuy = false;
	}

	if(id == 19 && (players[player].city[18].house == Math.max(players[player].city[17].house, players[player].city[18].house, players[player].city[19].house)) && !(players[player].city[17].house==players[player].city[18].house && players[player].city[17].house==players[player].city[19].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 33 && players[player].rfnComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - rfn");
		canBuy = false;
	}

	if(id == 20 && (players[player].city[19].house == Math.max(players[player].city[17].house, players[player].city[18].house, players[player].city[19].house)) && !(players[player].city[17].house==players[player].city[18].house && players[player].city[17].house==players[player].city[19].house)){
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 36 && players[player].austriaComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - austria");
		canBuy = false;
	}

	if(id == 21 && players[player].city[20].house > players[player].city[21].house) {
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(players[player].city[id-1].idField == 38 && players[player].austriaComplete == "nie") {
		alert("nie możesz kupić - nie posiadasz całego państwa - austria");
		canBuy = false;
	}

	if(id == 22 && players[player].city[21].house > players[player].city[20].house) {
		alert("musisz rozwijać państwo równomiernie");
		canBuy = false;
	}

	if(canBuy == true) {
		if(players[player].money < fields[fieldId].cost1house) { 
			alert("masz za mało pieniędzy");
			} else {
				players[player].city[id-1].house++;
				players[player].houseAll++;
				document.getElementById("houseid"+id).innerHTML = players[player].city[id-1].house;

				fields[fieldId].house++;

				updatePlayerMoney(player, -fields[fieldId].cost1house);
				showRoundMainData;

				buttonEnabled("buttonsellhouse"+id);
			}
		}
}

function buyHotel (id) {
	let player = activePlayer;
	let fieldId = players[player].city[id-1].idField;

	if(players[player].money < fields[fieldId].cost1hotel) { 
		alert("masz za mało pieniędzy");
	} else {
		if(players[player].city[id-1].house < 4){
			alert("najpierw musisz mieć min 4 domki")
		} else {
			players[player].city[id-1].hotel++;
			players[player].hotelAll++;
			players[player].city[id-1].house = players[player].city[id-1].house - 4;
			players[player].houseAll = players[player].houseAll - 4;

			document.getElementById("hotelid"+id).innerHTML = players[player].city[id-1].hotel;
			document.getElementById("houseid"+id).innerHTML = players[player].city[id-1].house;

			fields[fieldId].hotel++;
			fields[fieldId].house = fields[fieldId].house - 4;

			updatePlayerMoney(player, - fields[fieldId].cost1hotel);
			showRoundMainData(player);

			buttonEnabled("buttonsellhotel"+id);
			buttonDisabled("buttonsellhouse"+id);
		}
	}
}

function sellHotel (id) {
	let player = activePlayer;
	players[player].city[id-1].hotel--;
	players[player].hotelAll--;
	document.getElementById("hotelid"+id).innerHTML = players[player].city[id-1].hotel;

	let fieldId = players[player].city[id-1].idField;

	fields[fieldId].hotel--;

	let hotelPrice = 2 * fields[fieldId].cost1house + 0.5 * fields[fieldId].cost1hotel;

	updatePlayerMoney(player, hotelPrice);
	showRoundMainData(player);

	if(players[player].city[id-1].hotel < 1) {
		buttonDisabled("buttonsellhotel"+id);
	}
}

function sellHouse (id) {
	let player = activePlayer;
	players[player].city[id-1].house--;
	players[player].houseAll--;
	document.getElementById("houseid"+id).innerHTML = players[player].city[id-1].house;

	let fieldId = players[player].city[id-1].idField;

	fields[fieldId].house--;

	let housePrice = 0.5  * fields[fieldId].cost1house;

	updatePlayerMoney(player, housePrice);
	showRoundMainData(player);

	if(players[player].city[id-1].house < 1) {
		buttonDisabled("buttonsellhouse"+id);
	}
}

function mortage (id) {
	let player = activePlayer;
	let fieldId = players[player].city[id-1].idField;

	if(players[player].city[id-1].house >0 || players[player].city[id-1].hotel >0) { 
		alert("nie możesz zastawić zabudowanego terenu");
	} else {
		players[player].city[id-1].mortage = "tak";
		document.getElementById("mortageid"+id).innerHTML = players[player].city[id-1].mortage;

		let fieldId = players[player].city[id-1].idField;

		updatePlayerMoney(player, fields[fieldId].mortage);
		showRoundMainData(player);

		buttonDisabled("buttonbuyhouse"+id);
		buttonDisabled("buttonbuyhotel"+id);
		buttonDisabled("buttonmortage"+id);
		buttonEnabled("buttonmortageremove"+id);
	}
}

function mortageRemove (id) {
	let player = activePlayer;
	let fieldId = players[player].city[id-1].idField;

	if(players[player].money < fields[fieldId].mortageRemove) { 
		alert("masz za mało pieniędzy");
	} else {
		let player = activePlayer;
		players[player].city[id-1].mortage = "nie";
		document.getElementById("mortageid"+id).innerHTML = players[player].city[id-1].mortage;

		fields[fieldId].isMortage = "nie";

		updatePlayerMoney(player, -fields[fieldId].mortageRemove);
		showRoundMainData(player);

		buttonEnabled("buttonbuyhouse"+id);
		buttonEnabled("buttonbuyhotel"+id);
		buttonEnabled("buttonmortage"+id);
		buttonDisabled("buttonmortageremove"+id);
	}
}