function payForCity(player) {

	prepearDiceMessage(firstDice, secondDice, sumDice);
	prepearFieldNameInfoMessage(player);
	prepearMainCityMessage(player);
	prepearCityCostsMessage(player);
	prepearCityPayAmountMessage(player);

	let toPay = 0;

	//wylicenie płatności według ilości hoteli i domków
	if(fields[players[player].position - 1].property != "nie" && fields[players[player].position - 1].isMortage != "tak"){
		
		if(fields[players[player].position - 1].house == 0 && fields[players[player].position - 1].hotel == 0){
			toPay = fields[players[player].position - 1].payNoHouse;
		}
			
		if(fields[players[player].position - 1].house == 1 && fields[players[player].position - 1].hotel == 0){
			toPay = fields[players[player].position - 1].pay1house;
		}

		if(fields[players[player].position - 1].house == 2 && fields[players[player].position - 1].hotel == 0){
			toPay = fields[players[player].position - 1].pay2house;
		}

		if(fields[players[player].position - 1].house == 3 && fields[players[player].position - 1].hotel == 0){
			toPay = fields[players[player].position - 1].pay3house;
		}

		if(fields[players[player].position - 1].house == 4 && fields[players[player].position - 1].hotel == 0){
			toPay = fields[players[player].position - 1].pay4house;
		}

		if(fields[players[player].position - 1].house == 0 && fields[players[player].position - 1].hotel == 1){
			toPay = fields[players[player].position - 1].pay1hotel;
		}
	}

	//id pola miasto na ktorym stoi gracz
	let field = fields[players[player].position - 1].idCity;

	// jeżeli pole ma właściciela
	if(fields[players[player].position - 1].property != "nie"){

		//wlaściciel w więzieniu - nie otrzymuje pieniędzy
		if(players[fields[players[player].position - 1].propertyId].blockRounds > 0) {
			toPay = 0;
		}

		let ownerInPrison = players[fields[players[player].position - 1].propertyId].inPrison;
		let howManyHouses = fields[players[player].position - 1].house;
		let howManyHotels = fields[players[player].position - 1].hotel;

		prepaerPayForCityOwnerMessage(ownerInPrison, howManyHouses, howManyHotels, toPay);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainCityMessage + "\n" + payForCityOwnerMessage);

		updatePlayerMoney(player, -toPay);
		//właściciel otrzymuje
		updatePlayerMoney(fields[players[player].position - 1].propertyId, +toPay);
		
		showRoundMainData(player);
		buttonEnabled("next-player");
	//pole do kupienia
	} else {
		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainCityMessage + "\n"+ cityCostsMessage + "\n" + cityPayAmountMessage + "\n" + freeFieldMessage);
		buttonEnabled("buttonbuycity"+field);
		buttonEnabled("buttonsellcity"+field);
	}
}

function payForRailways(player) {

	prepearDiceMessage(firstDice, secondDice, sumDice);
	prepearFieldNameInfoMessage(player);
	prepearMainRailwaysMessage(player);
	prepearRailwaysCostsMessage(player);
	prepearRailwaysPayAmountMessage(player);

	let toPay = 0;

	if(fields[players[player].position - 1].property != "nie" && fields[players[player].position - 1].isMortage != "tak"){
		if(players[fields[players[player].position - 1].propertyId].railwaysAll == 1){
			toPay = fields[players[player].position - 1].pay1line;
		}
		if(players[fields[players[player].position - 1].propertyId].railwaysAll == 2){
			toPay = fields[players[player].position - 1].pay2line;
		}
		if(players[fields[players[player].position - 1].propertyId].railwaysAll == 3){
			toPay = fields[players[player].position - 1].pay3line;
		}
		if(players[fields[players[player].position - 1].propertyId].railwaysAll == 4){
			toPay = fields[players[player].position - 1].pay4line;
		}
	}

	let field = fields[players[player].position - 1].idRailways;

	if(fields[players[player].position - 1].property != "nie"){

		//wlaściciel w więzieniu - nie otrzymuje pieniędzy
		if(players[fields[players[player].position - 1].propertyId].blockRounds > 0) {
			toPay = 0;
		}

		let ownerInPrison = players[fields[players[player].position - 1].propertyId].inPrison;
		let howManyLines = players[fields[players[player].position - 1].propertyId].railwaysAll;

		prepaerPayForRailwaysOwnerMessage(ownerInPrison, howManyLines, toPay);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainRailwaysMessage + "\n" + payForRailwaysOwnerMessage);

		updatePlayerMoney(player, -toPay);
		//właściciel otrzymuje
		updatePlayerMoney(fields[players[player].position - 1].propertyId, +toPay);

		showRoundMainData(player);
		buttonEnabled("next-player");
	} else {
		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainRailwaysMessage + "\n" + railwaysCostsMessage + "\n" + railwaysPayAmountMessage + "\n" + freeFieldMessage);
		buttonEnabled("buttonbuyrailways"+field);
		buttonEnabled("buttonsellrailways"+field);
	}
}


function payForPowerstation(player) {

	prepearDiceMessage(firstDice, secondDice, sumDice);
	prepearFieldNameInfoMessage(player);
	prepearMainPowerStationMessage(player);
	prepearPowerStationCostsMessage(player);

	let toPay = 0;

	//płatności uzależnione od ilości oczek
	if(fields[players[player].position - 1].property != "nie" && fields[players[player].position - 1].isMortage != "tak"){
		if(players[fields[players[player].position - 1].propertyId].powerStationAndWaterworks == 1){
			toPay = sumDice * 10;
		}

		if(players[fields[players[player].position - 1].propertyId].powerStationAndWaterworks == 2){
			toPay = sumDice * 10 * 2;
		}
	}

	if(fields[players[player].position - 1].property != "nie"){

		//wlaściciel w więzieniu - nie otrzymuje pieniędzy
		if(players[fields[players[player].position - 1].propertyId].blockRounds > 0) {
			toPay = 0;
		}

		let ownerInPrison = players[fields[players[player].position - 1].propertyId].inPrison;
		let hasWaterworks = players[fields[players[player].position - 1].propertyId].waterworks.have;

		prepaerPayForPowerStationOwnerMessage(ownerInPrison, hasWaterworks, toPay);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainPowerStationMessage + "\n" + payForPowerStationOwnerMessage);

		updatePlayerMoney(player, -toPay);
		//właściciel otrzymuje
		updatePlayerMoney(fields[players[player].position - 1].propertyId, +toPay);

		showRoundMainData(player);
		buttonEnabled("next-player");
	} else {
		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainPowerStationMessage + "\n" + powerStationCostsMessage + "\n" + powerStationPayAmountMessage + "\n" + freeFieldMessage);
		buttonEnabled("buttonbuypowerstation");
		buttonEnabled("buttonsellpowerstation");
	}
}

function payForWaterworks(player) {
	let toPay = 0;

	if(fields[players[player].position - 1].property != "nie" && fields[players[player].position - 1].isMortage != "tak"){
		if(players[fields[players[player].position - 1].propertyId].powerStationAndWaterworks == 1){
			let sumDice = parseInt(document.getElementById("sum-dice").innerHTML);
			toPay = sumDice * 10;
		}
		if(players[fields[players[player].position - 1].propertyId].powerStationAndWaterworks == 2){
			let sumDice = parseInt(document.getElementById("sum-dice").innerHTML);
			toPay = sumDice * 10 * 2;
		}
	}

	//wlaściciel w więzieniu - nie otrzymuje pieniędzy
	if(players[fields[players[player].position - 1].propertyId].blockRounds > 0) {
		toPay = 0;
	}

	if(fields[players[player].position - 1].property != "nie"){
		alert("jesteś na polu: " + fields[players[player].position - 1].name + "\n" +
				"które posiada właściciela: " + fields[players[player].position - 1].property + "\n" +
				"właściciel posiada elektrownie: " + players[fields[players[player].position - 1].propertyId].powerStation.have + "\n" +
				"właściciel posiada wodociągi: " + players[fields[players[player].position - 1].propertyId].waterworks.have + "\n" +
			    "pole jest zastawione: " + fields[players[player].position - 1].isMortage + "\n" +
			    "wlasciciel jest w wiezieniu: " + players[fields[players[player].position - 1].propertyId].inPrison +"\n" +
				"do zapłacenia: " + toPay);

		updatePlayerMoney(player, -toPay);
		//właściciel otrzymuje
		updatePlayerMoney(fields[players[player].position - 1].propertyId, +toPay);

		showRoundMainData(player);
		buttonEnabled("next-player");

	} else {
		alert("Jeżeli nie chcesz kupić wodociągów za podaną cenę każdy z graczy może ją kupić po licytacji użyjcie przycisku sprzedaj wybierając cenę i gracza");
		buttonEnabled("buttonbuywaterworks");
		buttonEnabled("buttonsellwaterworks");
	}
}