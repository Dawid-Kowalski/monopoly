drawBoard();
cardShuffle(blueChance);
cardShuffle(redChance);

activePlayer = 0;

let centerOfPawnX = 0;
let centerOfPawnY = 0;

let blueCard;
let redCard;

let cityTable = document.getElementById("city-table");
let railwaysTable = document.getElementById("railways-table");
let buldingsTable = document.getElementById("buldings-table");

buttonDisabled("start-game");

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

function changePlayerColor(id) {
	let name = "player" + id + "-color";
	players[id-1].color = document.getElementById(name).value;

	return players[id-1].color;
}

function showRoundMainData(player) {
	document.getElementById("player-name").innerHTML = players[player].name;
	document.getElementById("player-money").innerHTML = players[player].money;
}

function startGame() {

	if(players.length == 2) {
		players[0].color = document.getElementById("player1-color").value;
		players[1].color = document.getElementById("player2-color").value

		players[0].name = document.getElementById("player1-name").value;
		players[1].name = document.getElementById("player2-name").value;
	}

	if(players.length == 3) {
		players[0].color = document.getElementById("player1-color").value;
		players[1].color = document.getElementById("player2-color").value;
		players[2].color = document.getElementById("player3-color").value;

		players[0].name = document.getElementById("player1-name").value;
		players[1].name = document.getElementById("player2-name").value;
		players[2].name = document.getElementById("player3-name").value;
	}

	if(players.length == 4) {
		players[0].color = document.getElementById("player1-color").value;
		players[1].color = document.getElementById("player2-color").value;
		players[2].color = document.getElementById("player3-color").value;
		players[3].color = document.getElementById("player4-color").value;

		players[0].name = document.getElementById("player1-name").value;
		players[1].name = document.getElementById("player2-name").value;
		players[2].name = document.getElementById("player3-name").value;
		players[3].name = document.getElementById("player4-name").value;
	}


	for(let i = 0; i<players.length; i++) {
		drawPlayerPosition(i);
	}

	buttonDisabled("start-game");
	buttonDisabled("next-player");
	document.getElementById("number-of-players").disabled = true;

	showRoundMainData(activePlayer);
}

function nextPlayer() {

	if(activePlayer<(players.length)-1) {
		activePlayer++;
	}
	else{
		activePlayer = 0;
	}

	if(players[activePlayer].blockRounds > 0) {
		alert("gracz jest w wiezieniu przez " +  players[activePlayer].blockRounds + " kolejki- nie może podejmować akcji");
		players[activePlayer].blockRounds--;
		buttonDisabled("throw-dice");

		drawBoard();
		showRoundMainData(activePlayer);

//najpierw tworzenie
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
//póżniej pobieranie
		let cityTable = document.getElementById("city-table");
		let citysInventoryButtons = cityTable.querySelectorAll("button");

		let railwaysTable = document.getElementById("railways-table");
		let railwaysInventoryButtons = railwaysTable.querySelectorAll("button");

		let buldingsTable = document.getElementById("buldings-table");
		let buldingsInventoryButtons = buldingsTable.querySelectorAll("button");

		//deaktywacja przycisków miast
		for (let i=0; i< citysInventoryButtons.length; i++ ){
			citysInventoryButtons[i].disabled = true;
			citysInventoryButtons[i].classList.remove("btn", "btn-success");
			citysInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		//deaktywacja przycisków koleji
		for (let i=0; i< railwaysInventoryButtons.length; i++ ){
			railwaysInventoryButtons[i].disabled = true;
			railwaysInventoryButtons[i].classList.remove("btn", "btn-success");
			railwaysInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		//deaktywacja przycisków budynków
		for (let i=0; i< buldingsInventoryButtons.length; i++ ){
			buldingsInventoryButtons[i].disabled = true;
			buldingsInventoryButtons[i].classList.remove("btn", "btn-success");
			buldingsInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		for(let i = 0; i<players.length; i++) {
			drawPlayerPosition(i);
		}

	} else {
		players[activePlayer].inPrison = "nie";
		buttonEnabled("throw-dice");

		drawBoard();
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

		for(let i = 0; i<players.length; i++) {
			drawPlayerPosition(i);
		}

		return activePlayer;
	} 
}

function updatePlayerPosition (player) {
	players[player].position = players[player].position + sumDice;

	if(players[player].position > 40){
		players[player].position -= 40;
	}

	//do testów
	if(player==0){
		players[player].position = 38;
	}

	return players[player].position;
}

function drawPlayerPosition(player) {

	//pozycja numerowana od 1 tablica pól od zera trzeba odjąć 1 //
	let position = players[player].position - 1;

	let minXfieldValue = fields[position].minXpos;
	let maxXfieldValue = fields[position].maxXpos;
	let minYfieldValue = fields[position].minYpos;
	let maxYfieldValue = fields[position].maxYpos;

	// wielkość pionka //
	let radiusOfPawn = 10;
	// współrzędne środka pionka pionek, musi mieścić się w polu uwzględniając równiez promień pionka (nie może wystawać)
	centerOfPawnX = Math.floor(Math.random()*((maxXfieldValue - radiusOfPawn) - (minXfieldValue + radiusOfPawn)) + (minXfieldValue + radiusOfPawn));
	centerOfPawnY = Math.floor(Math.random() * ((maxYfieldValue -radiusOfPawn) - (minYfieldValue + radiusOfPawn)) +(minYfieldValue + radiusOfPawn));

	ctx.beginPath();
	ctx.arc(centerOfPawnX, centerOfPawnY , radiusOfPawn, 0, 2*Math.PI);
	ctx.fillStyle = players[player].color;
	ctx.fill();
	ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
	ctx.stroke();	
}

function updatePlayerPawnPosition(player) {
	players[player].pawnXposition = centerOfPawnX;
	players[player].pawnYposition = centerOfPawnY;

	return players[player];
}

function updatePlayerMoney(player, money) {
		players[player].money = players[player].money + money;
}

function checkPlayerField(player) {

	if(fields[players[player].position - 1].type == "city"){

		payForCity(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);
		prepearMainCityMessage(player);
		prepearCityCostsMessage(player);
		prepearCityPayAmountMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainCityMessage + "\n"+ cityCostsMessage + "\n" + cityPayAmountMessage + "\n" + freeFieldMessage);

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "blue chance") {

		blueCard = blueChance.shift();
		blueChance.push(blueCard);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + blueCard.text);

		blueCardEffect();

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue card effect
		return;
	}

	if(fields[players[player].position - 1].type == "paid parking") {

		updatePlayerMoney(player, -400);
		showRoundMainData(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + paidParkingMessage);
	}

	if(fields[players[player].position - 1].type == "railways") {

		//id pola koleje na ktorym stoi gracz
		//let field = fields[players[player].position - 1].idRailways;

		//payForRailways(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);
		prepearMainRailwaysMessage(player);
		prepearRailwaysCostsMessage(player);
		prepearRailwaysPayAmountMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainRailwaysMessage + "\n" + railwaysCostsMessage + "\n" + railwaysPayAmountMessage + "\n" + freeFieldMessage);

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "red chance") {

		redCard = redChance.shift();
		redChance.push(redCard);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + redCard.text);
		
		redCardEffect();

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "prison visit") {

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + prisonVisitMessage);
	}

	if(fields[players[player].position - 1].type == "power station") {

		//payForPowerstation(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);
		prepearMainPowerStationMessage(player);
		prepearPowerStationCostsMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainPowerStationMessage + "\n" + powerStationCostsMessage + "\n" + powerStationPayAmountMessage + "\n" + freeFieldMessage);
	}

	if(fields[players[player].position - 1].type == "free parking") {

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + freeParkingMessage);	

	}

	if(fields[players[player].position - 1].type == "waterworks") {

		//payForWaterworks(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);
		prepearMainWaterWorksMessage(player);
		prepearWaterWorksCostsMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + mainWaterWorksMessage  + "\n" + waterWorksCostsMessage + "\n" + waterWorksPayAmountMessage + "\n" + freeFieldMessage);
	}

	if(fields[players[player].position - 1].type == "go to prison") {

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + goToPrisonMessage);

		players[player].position = 10;
		players[player].blockRounds = 2;
		players[player].inPrison = "tak";

		drawBoard();

		for(let i = 0; i<players.length; i++) {
			drawPlayerPosition(i);
		}

		let cityTable = document.getElementById("city-table");
		let citysInventoryButtons = cityTable.querySelectorAll("button");

		let railwaysTable = document.getElementById("railways-table");
		let railwaysInventoryButtons = railwaysTable.querySelectorAll("button");

		let buldingsTable = document.getElementById("buldings-table");
		let buldingsInventoryButtons = buldingsTable.querySelectorAll("button");

		//deaktywacja przycisków miast
		for (let i=0; i< citysInventoryButtons.length; i++ ){
			citysInventoryButtons[i].disabled = true;
			citysInventoryButtons[i].classList.remove("btn", "btn-success");
			citysInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		//deaktywacja przycisków koleji
		for (let i=0; i< railwaysInventoryButtons.length; i++ ){
			railwaysInventoryButtons[i].disabled = true;
			railwaysInventoryButtons[i].classList.remove("btn", "btn-success");
			railwaysInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		//deaktywacja przycisków budynków
		for (let i=0; i< buldingsInventoryButtons.length; i++ ){
			buldingsInventoryButtons[i].disabled = true;
			buldingsInventoryButtons[i].classList.remove("btn", "btn-success");
			buldingsInventoryButtons[i].classList.add("btn", "btn-danger");
		}

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "tax to pay") {

		updatePlayerMoney(player, -200);
		showRoundMainData(player);

		prepearDiceMessage(firstDice, secondDice, sumDice);
		prepearFieldNameInfoMessage(player);

		alert(diceMessage + "\n" + fieldNameInfoMessage + "\n" + taxToPayMessage);	
	}

	if(fields[players[player].position - 1].type == "start") {

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}
}

function drawInventoryCity(player) {

	// czyszczenie tabeli miasta w inwentarzu 
	if(document.getElementById("city-table-body")){
		let cityTableBodyRemove = document.getElementById("city-table-body");
		cityTable.removeChild(cityTableBodyRemove);
		let cityTableBody = document.createElement("tbody");
		cityTableBody.id = "city-table-body";
		cityTable.appendChild(cityTableBody);		
	} else {
		let cityTableBody = document.createElement("tbody");
		cityTableBody.id = "city-table-body";
		cityTable.appendChild(cityTableBody);
	}

	// dodawanie wierszy w pętli
	for(let i=1; i<23 ; i++) {

		let cityTableBody = document.getElementById("city-table-body");

		let trCity = document.createElement("tr");
		cityTableBody.appendChild(trCity);
			
		let tdCityId = document.createElement("td");
		tdCityId.innerHTML = i;
		trCity.appendChild(tdCityId);
			
		let tdCityCountryName = document.createElement("td");
		tdCityCountryName.id = "countryid" + i;
		tdCityCountryName.innerHTML = " ";
		trCity.appendChild(tdCityCountryName);

		let tdCityCityName = document.createElement("td");
		tdCityCityName.id = "cityid" + i;
		tdCityCityName.innerHTML = " ";
		trCity.appendChild(tdCityCityName);

		let tdCityHave = document.createElement("td");
		tdCityHave.id = "haveid" + i;
		tdCityHave.innerHTML = " ";
		trCity.appendChild(tdCityHave);

		let tdCityHouse = document.createElement("td");
		tdCityHouse.id = "houseid" + i;
		tdCityHouse.innerHTML = " ";
		trCity.appendChild(tdCityHouse);

		let tdCityHotel = document.createElement("td");
		tdCityHotel.id = "hotelid" + i;
		tdCityHotel.innerHTML = " ";
		trCity.appendChild(tdCityHotel);

		let tdCityMortage = document.createElement("td");
		tdCityMortage.id = "mortageid" + i;
		tdCityMortage.innerHTML = " ";
		trCity.appendChild(tdCityMortage);

		let tdCityBuyCity = document.createElement("td");
		trCity.appendChild(tdCityBuyCity);

		let buttonCityBuyCity = document.createElement("button");
		buttonCityBuyCity.id = "buttonbuycity"+i;
		buttonCityBuyCity.type = "button";
		buttonCityBuyCity.onclick = function () {buyCity(i);};
		buttonCityBuyCity.classList.add("btn", "btn-danger");
		buttonCityBuyCity.disabled = true;
		buttonCityBuyCity.innerHTML = "kup";
		tdCityBuyCity.appendChild(buttonCityBuyCity);

		let tdCitySellCity = document.createElement("td");
		trCity.appendChild(tdCitySellCity);

		let label1CitySellCity = document.createElement("label");
		label1CitySellCity.innerHTML = "komu";
		tdCitySellCity.appendChild(label1CitySellCity);

		let br1CitySellCity = document.createElement("br");
		tdCitySellCity.appendChild(br1CitySellCity);

		let selectCitySellCity = document.createElement("select");
		selectCitySellCity.id = "buyer" + i;
		tdCitySellCity.appendChild(selectCitySellCity);

		for(let j =0; j<players.length; j++){
			optionCitySellCity = document.createElement("option");
			optionCitySellCity.id = "city"+i+"opt" + j;
			selectCitySellCity.appendChild(optionCitySellCity);
		}

		let br2CitySellCity = document.createElement("br");
		tdCitySellCity.appendChild(br2CitySellCity);

		let label2CitySellCity = document.createElement("label");
		label2CitySellCity.innerHTML = "za ile";
		tdCitySellCity.appendChild(label2CitySellCity);

		let inputCitySellCity = document.createElement("input");
		inputCitySellCity.id = "price" + i;
		inputCitySellCity.type = "number";
		tdCitySellCity.appendChild(inputCitySellCity);

		let br3CitySellCity = document.createElement("br");
		tdCitySellCity.appendChild(br3CitySellCity);

		let br4CitySellCity = document.createElement("br");
		tdCitySellCity.appendChild(br4CitySellCity);

		let buttonCitySellCity = document.createElement("button");
		buttonCitySellCity.id = "buttonsellcity"+i;
		buttonCitySellCity.type = "button";
		buttonCitySellCity.onclick = function () {sellCity(i);};
			
		if(players[player].city[i-1].have == "tak"){
			buttonCitySellCity.classList.add("btn", "btn-success");
			buttonCitySellCity.disabled = false;
		} else {
			buttonCitySellCity.classList.add("btn", "btn-danger");
			buttonCitySellCity.disabled = true;
		}
			
		buttonCitySellCity.innerHTML = "sprzedaj";
		tdCitySellCity.appendChild(buttonCitySellCity);

		let tdCityBuyHouse = document.createElement("td");
		trCity.appendChild(tdCityBuyHouse);

		let buttonCityBuyHouse = document.createElement("button");
		buttonCityBuyHouse.type = "button";
		buttonCityBuyHouse.id = "buttonbuyhouse"+i;
		buttonCityBuyHouse.onclick = function () {buyHouse(i);};
			
		if(players[player].city[i-1].have == "tak" && players[player].city[i-1].mortage == "nie"){
			buttonCityBuyHouse.classList.add("btn", "btn-success");
			buttonCityBuyHouse.disabled = false;
		} else {
			buttonCityBuyHouse.classList.add("btn", "btn-danger");
			buttonCityBuyHouse.disabled = true;
		}

		buttonCityBuyHouse.innerHTML = "kup domek";
		tdCityBuyHouse.appendChild(buttonCityBuyHouse);

		let tdCityBuyHotel = document.createElement("td");
		trCity.appendChild(tdCityBuyHotel);

		let buttonCityBuyHotel = document.createElement("button");
		buttonCityBuyHotel.type = "button";
		buttonCityBuyHotel.id = "buttonbuyhotel"+i;
		buttonCityBuyHotel.onclick = function () {buyHotel(i);};

		if(players[player].city[i-1].have == "tak" && players[player].city[i-1].mortage == "nie"){
			buttonCityBuyHotel.classList.add("btn", "btn-success");
			buttonCityBuyHotel.disabled = false;
		} else {
			buttonCityBuyHotel.classList.add("btn", "btn-danger");
			buttonCityBuyHotel.disabled = true;
		}

		buttonCityBuyHotel.innerHTML = "kup hotel";
		tdCityBuyHotel.appendChild(buttonCityBuyHotel);

		let tdCitySellHouse = document.createElement("td");
		trCity.appendChild(tdCitySellHouse);

		let buttonCitySellHouse = document.createElement("button");
		buttonCitySellHouse.id = "buttonsellhouse"+i;
		buttonCitySellHouse.type = "button";
		buttonCitySellHouse.onclick = function () {sellHouse(i);};

		if(players[player].city[i-1].house > 0) {
			buttonCitySellHouse.classList.add("btn", "btn-success");
			buttonCitySellHouse.disabled = false;
		} else {
			buttonCitySellHouse.classList.add("btn", "btn-danger");
			buttonCitySellHouse.disabled = true;
		}

		buttonCitySellHouse.innerHTML = "sprzedaj domek";
		tdCitySellHouse.appendChild(buttonCitySellHouse);

		let tdCitySellHotel = document.createElement("td");
		trCity.appendChild(tdCitySellHotel);

		let buttonCitySellHotel = document.createElement("button");
		buttonCitySellHotel.id = "buttonsellhotel"+i;
		buttonCitySellHotel.type = "button";
		buttonCitySellHotel.onclick = function () {sellHotel(i);};

		if(players[activePlayer].city[i-1].hotel > 0) {
			buttonCitySellHotel.classList.add("btn", "btn-success");
			buttonCitySellHotel.disabled = false;
		} else {
			buttonCitySellHotel.classList.add("btn", "btn-danger");
			buttonCitySellHotel.disabled = true;
		}

		buttonCitySellHotel.innerHTML = "sprzedaj hotel";
		tdCitySellHotel.appendChild(buttonCitySellHotel);

		let tdCityMortageAction = document.createElement("td");
		trCity.appendChild(tdCityMortageAction);

		let buttonCityMortageAction = document.createElement("button");
		buttonCityMortageAction.id = "buttonmortage"+i;
		buttonCityMortageAction.type = "button";
		buttonCityMortageAction.onclick = function () {mortage(i);};

		if(players[player].city[i-1].have == "tak" && players[player].city[i-1].mortage == "nie"){
			buttonCityMortageAction.classList.add("btn", "btn-success");
			buttonCityMortageAction.disabled = false;
		} else {
			buttonCityMortageAction.classList.add("btn", "btn-danger");
			buttonCityMortageAction.disabled = true;
		}

		buttonCityMortageAction.innerHTML = "zastaw";
		tdCityMortageAction.appendChild(buttonCityMortageAction);

		let tdCityMortageRemoveAction = document.createElement("td");
		trCity.appendChild(tdCityMortageRemoveAction);

		let buttonCityMortageRemoveAction = document.createElement("button");
		buttonCityMortageRemoveAction.id = "buttonmortageremove"+i;
		buttonCityMortageRemoveAction.type = "button";
		buttonCityMortageRemoveAction.onclick = function () {mortageRemove(i);};
			
		if(players[player].city[i-1].mortage == "tak"){
			buttonCityMortageRemoveAction.classList.add("btn", "btn-success");
			buttonCityMortageRemoveAction.disabled = false;
		} else {
			buttonCityMortageRemoveAction.classList.add("btn", "btn-danger");
			buttonCityMortageRemoveAction.disabled = true;
		}

		buttonCityMortageRemoveAction.innerHTML = "wykup";
		tdCityMortageRemoveAction.appendChild(buttonCityMortageRemoveAction);
	}
}

function addCityInfoPlayerInventory(player) {
	for (let i=1; i<23; i++) {
		document.getElementById("haveid"+i).innerHTML = players[player].city[i-1].have;
		document.getElementById("houseid"+i).innerHTML = players[player].city[i-1].house;
		document.getElementById("hotelid"+i).innerHTML = players[player].city[i-1].hotel;
		document.getElementById("mortageid"+i).innerHTML = players[player].city[i-1].mortage;
	}
}

function addCityNamePlayerInventory(player) {

	document.getElementById("countryid1").innerHTML = greece.toLowerCase();
	document.getElementById("cityid1").innerHTML = saloniki.toLowerCase();

	document.getElementById("countryid2").innerHTML = greece.toLowerCase();
	document.getElementById("cityid2").innerHTML = ateny.toLowerCase();

	document.getElementById("countryid3").innerHTML = italy.toLowerCase();
	document.getElementById("cityid3").innerHTML = neapol.toLowerCase();

	document.getElementById("countryid4").innerHTML = italy.toLowerCase();
	document.getElementById("cityid4").innerHTML = mediolan.toLowerCase();

	document.getElementById("countryid5").innerHTML = italy.toLowerCase();
	document.getElementById("cityid5").innerHTML = rzym.toLowerCase();

	document.getElementById("countryid6").innerHTML = spain.toLowerCase();
	document.getElementById("cityid6").innerHTML = barcelona.toLowerCase();

	document.getElementById("countryid7").innerHTML = spain.toLowerCase();
	document.getElementById("cityid7").innerHTML = sewilla.toLowerCase();

	document.getElementById("countryid8").innerHTML = spain.toLowerCase();
	document.getElementById("cityid8").innerHTML = madryt.toLowerCase();

	document.getElementById("countryid9").innerHTML = england.toLowerCase();
	document.getElementById("cityid9").innerHTML = liverpool.toLowerCase();

	document.getElementById("countryid10").innerHTML = england.toLowerCase();
	document.getElementById("cityid10").innerHTML = glasgow.toLowerCase();

	document.getElementById("countryid11").innerHTML = england.toLowerCase();
	document.getElementById("cityid11").innerHTML = londyn.toLowerCase();

	document.getElementById("countryid12").innerHTML = benelux.toLowerCase();
	document.getElementById("cityid12").innerHTML = rotterdam.toLowerCase();

	document.getElementById("countryid13").innerHTML = benelux.toLowerCase();
	document.getElementById("cityid13").innerHTML = bruksela.toLowerCase();

	document.getElementById("countryid14").innerHTML = benelux.toLowerCase();
	document.getElementById("cityid14").innerHTML = amsterdam.toLowerCase();

	document.getElementById("countryid15").innerHTML = sweden.toLowerCase();
	document.getElementById("cityid15").innerHTML = malmo.toLowerCase();

	document.getElementById("countryid16").innerHTML = sweden.toLowerCase();
	document.getElementById("cityid16").innerHTML = goteborg.toLowerCase();

	document.getElementById("countryid17").innerHTML = sweden.toLowerCase();
	document.getElementById("cityid17").innerHTML = sztokholm.toLowerCase();

	document.getElementById("countryid18").innerHTML = rfn.toLowerCase();
	document.getElementById("cityid18").innerHTML = frankfurt.toLowerCase();

	document.getElementById("countryid19").innerHTML = rfn.toLowerCase();
	document.getElementById("cityid19").innerHTML = kolonia.toLowerCase();

	document.getElementById("countryid20").innerHTML = rfn.toLowerCase();
	document.getElementById("cityid20").innerHTML = bonn.toLowerCase();

	document.getElementById("countryid20").innerHTML = rfn.toLowerCase();
	document.getElementById("cityid20").innerHTML = bonn.toLowerCase();

	document.getElementById("countryid21").innerHTML = austria.toLowerCase();
	document.getElementById("cityid21").innerHTML = insbruck.toLowerCase();

	document.getElementById("countryid22").innerHTML = austria.toLowerCase();
	document.getElementById("cityid22").innerHTML = wieden.toLowerCase();
}

function addByerCityPlayerInventory(){
	for (let i=1; i<23; i++) {
		for(let j=0; j<players.length; j++) {
			let city = "city"+i+"opt"+j;
			document.getElementById(city).innerHTML = players[j].name;
			document.getElementById(city).value = j;
		}
	}
}


function drawInventoryRailways(player) {

	// czyszczenie tabeli koleje w inwentarzu 
	if(document.getElementById("railways-table-body")){
		let railwaysTableBodyRemove = document.getElementById("railways-table-body");
		railwaysTable.removeChild(railwaysTableBodyRemove);
		let railwaysTableBody = document.createElement("tbody");
		railwaysTableBody.id = "railways-table-body";
		railwaysTable.appendChild(railwaysTableBody);		
	} else {
		let railwaysTableBody = document.createElement("tbody");
		railwaysTableBody.id = "railways-table-body";
		railwaysTable.appendChild(railwaysTableBody);	
	}

	// dodawanie wierszy koleji w pętli
	for(let i=1; i<5 ; i++) {

		let railwaysTableBody = document.getElementById("railways-table-body");

		let trRailways = document.createElement("tr");
		railwaysTableBody.appendChild(trRailways);

		let tdRailwaysId = document.createElement("td");
		tdRailwaysId.innerHTML = i;
		trRailways.appendChild(tdRailwaysId);

		let tdRailwaysName = document.createElement("td");
		tdRailwaysName.id = "railwaysid" + i;
		tdRailwaysName.innerHTML = " ";
		trRailways.appendChild(tdRailwaysName);

		let tdRailwaysHave = document.createElement("td");
		tdRailwaysHave.id = "haverailways" + i;
		tdRailwaysHave.innerHTML = " ";
		trRailways.appendChild(tdRailwaysHave);

		let tdRailwaysMortage = document.createElement("td");
		tdRailwaysMortage.id = "mortagerailways" + i;
		tdRailwaysMortage.innerHTML = " ";
		trRailways.appendChild(tdRailwaysMortage);

		let tdRailwaysBuyRailways = document.createElement("td");
		trRailways.appendChild(tdRailwaysBuyRailways);

		let buttonRailwaysBuyRailways = document.createElement("button");
		buttonRailwaysBuyRailways.id = "buttonbuyrailways"+i;
		buttonRailwaysBuyRailways.type = "button";
		buttonRailwaysBuyRailways.onclick = function () {buyRailways(i);};
		
		buttonRailwaysBuyRailways.classList.add("btn", "btn-danger");
		buttonRailwaysBuyRailways.disabled = true;
		
		buttonRailwaysBuyRailways.innerHTML = "kup";
		tdRailwaysBuyRailways.appendChild(buttonRailwaysBuyRailways);

		let tdRailwaysSellRailways = document.createElement("td");
		trRailways.appendChild(tdRailwaysSellRailways);

		let label1RailwaysSellRailways = document.createElement("label");
		label1RailwaysSellRailways.innerHTML = "komu";
		tdRailwaysSellRailways.appendChild(label1RailwaysSellRailways);

		let br1RailwaysSellRailways = document.createElement("br");
		tdRailwaysSellRailways.appendChild(br1RailwaysSellRailways);

		let selectRailwaysSellRailways = document.createElement("select");
		selectRailwaysSellRailways.id = "buyerrailways" + i;
		tdRailwaysSellRailways.appendChild(selectRailwaysSellRailways);

		for(let j =0; j<players.length; j++){
			optionRailwaysSellRailways = document.createElement("option");
			optionRailwaysSellRailways.id = "railways"+i+"opt" + j;
			selectRailwaysSellRailways.appendChild(optionRailwaysSellRailways);
		}

		let br2RailwaysSellRailways = document.createElement("br");
		tdRailwaysSellRailways.appendChild(br2RailwaysSellRailways);

		let label2RailwaysSellRailways = document.createElement("label");
		label2RailwaysSellRailways.innerHTML = "za ile";
		tdRailwaysSellRailways.appendChild(label2RailwaysSellRailways);

		let br3RailwaysSellRailways = document.createElement("br");
		tdRailwaysSellRailways.appendChild(br3RailwaysSellRailways);

		let inputRailwaysSellRailways = document.createElement("input");
		inputRailwaysSellRailways.id = "pricerailways" + i;
		inputRailwaysSellRailways.type = "number";
		tdRailwaysSellRailways.appendChild(inputRailwaysSellRailways);

		let br4RailwaysSellRailways = document.createElement("br");
		tdRailwaysSellRailways.appendChild(br4RailwaysSellRailways);

		let br5RailwaysSellRailways = document.createElement("br");
		tdRailwaysSellRailways.appendChild(br5RailwaysSellRailways);

		let buttonRailwaysSellRailways = document.createElement("button");
		buttonRailwaysSellRailways.id = "buttonsellrailways"+i;
		buttonRailwaysSellRailways.type = "button";

		if(players[activePlayer].railways[i-1].have == "tak") {
			buttonRailwaysSellRailways.classList.add("btn", "btn-success");
			buttonRailwaysSellRailways.disabled = false;
		} else {
			buttonRailwaysSellRailways.classList.add("btn", "btn-danger");
			buttonRailwaysSellRailways.disabled = true;
		}

		buttonRailwaysSellRailways.onclick = function () {sellRailways(i);};
		buttonRailwaysSellRailways.innerHTML = "sprzedaj";
		tdRailwaysSellRailways.appendChild(buttonRailwaysSellRailways);

		let tdRailwaysMortageAction = document.createElement("td");
		trRailways.appendChild(tdRailwaysMortageAction);

		let buttonRailwaysMortageAction = document.createElement("button");
		buttonRailwaysMortageAction.id = "buttonmortagerailways"+i;
		buttonRailwaysMortageAction.type = "button";

		if(players[player].railways[i-1].have == "tak"  && players[player].railways[i-1].mortage == "nie") {
			buttonRailwaysMortageAction.classList.add("btn", "btn-success");
			buttonRailwaysMortageAction.disabled = false;
		} else {
			buttonRailwaysMortageAction.classList.add("btn", "btn-danger");
			buttonRailwaysMortageAction.disabled = true;
		}

		buttonRailwaysMortageAction.onclick = function () {mortageRailways(i);};
		buttonRailwaysMortageAction.innerHTML = "zastaw";
		tdRailwaysMortageAction.appendChild(buttonRailwaysMortageAction);

		let tdRailwaysMortageRemoveAction = document.createElement("td");
		trRailways.appendChild(tdRailwaysMortageRemoveAction);

		let buttonRailwaysMortageRemoveAction = document.createElement("button");
		buttonRailwaysMortageRemoveAction.id = "buttonmortageremoverailways"+i;
		buttonRailwaysMortageRemoveAction.type = "button";

		if(players[player].railways[i-1].mortage == "tak"){
			buttonRailwaysMortageRemoveAction.classList.add("btn", "btn-success");
			buttonRailwaysMortageRemoveAction.disabled = false;
		} else {
			buttonRailwaysMortageRemoveAction.classList.add("btn", "btn-danger");
			buttonRailwaysMortageRemoveAction.disabled = true;
		}

		buttonRailwaysMortageRemoveAction.onclick = function () {mortageRailwaysRemove(i);};
		buttonRailwaysMortageRemoveAction.innerHTML = "wykup";
		tdRailwaysMortageRemoveAction.appendChild(buttonRailwaysMortageRemoveAction);
	}
}

function addRailwaysNamePlayerInventory() {
	document.getElementById("railwaysid1").innerHTML = "koleje południowe";
	document.getElementById("railwaysid2").innerHTML = "koleje zachodnie";
	document.getElementById("railwaysid3").innerHTML = "koleje północne";	
	document.getElementById("railwaysid4").innerHTML = "koleje wschodnie";
}

function addRailwaysInfoPlayerInventory(player) {
	document.getElementById("haverailways1").innerHTML = players[player].railways[0].have;
	document.getElementById("mortagerailways1").innerHTML = players[player].railways[0].mortage;

	document.getElementById("haverailways2").innerHTML = players[player].railways[1].have;
	document.getElementById("mortagerailways2").innerHTML = players[player].railways[1].mortage;

	document.getElementById("haverailways3").innerHTML = players[player].railways[2].have;
	document.getElementById("mortagerailways3").innerHTML = players[player].railways[2].mortage;

	document.getElementById("haverailways4").innerHTML = players[player].railways[3].have;
	document.getElementById("mortagerailways4").innerHTML = players[player].railways[3].mortage;
}

function addByerRailwaysPlayerInventory() {
	for (let i=1; i<5; i++) {
		for(let j=0; j<players.length; j++) {
			let railways = "railways"+i+"opt"+j;
			document.getElementById(railways).innerHTML = players[j].name;
			document.getElementById(railways).value = j;
		}
	}
}

function drawInventoryBuldings(player){

//czyszczenie tabeli z budynkami (elektrownia i wodociągi)
	if(document.getElementById("buldings-table-body")){
		let buldingsTableBodyRemove = document.getElementById("buldings-table-body");
		buldingsTable.removeChild(buldingsTableBodyRemove);
		let buldingsTableBody = document.createElement("tbody");
		buldingsTableBody.id = "buldings-table-body";
		buldingsTable.appendChild(buldingsTableBody);		
	} else {
		let buldingsTableBody = document.createElement("tbody");
		buldingsTableBody.id = "buldings-table-body";
		buldingsTable.appendChild(buldingsTableBody);	
	}

// dodawanie wierszy
	let buldingsTableBody = document.getElementById("buldings-table-body");

	let tr2Buldings = document.createElement("tr");
	buldingsTableBody.appendChild(tr2Buldings);

	let tdPowerStationId = document.createElement("td");
	tdPowerStationId.innerHTML = 1;
	tr2Buldings.appendChild(tdPowerStationId);


	let tdPowerStationName = document.createElement("td");
	tdPowerStationName.id = "powerstation";
	tdPowerStationName.innerHTML = "elektrownia";
	tr2Buldings.appendChild(tdPowerStationName);

	let tdPowerStationHave = document.createElement("td");
	tdPowerStationHave.id = "havepowerstation";
	tdPowerStationHave.innerHTML = " ";
	tr2Buldings.appendChild(tdPowerStationHave);

	let tdPowerStationMortage = document.createElement("td");
	tdPowerStationMortage.id = "mortagepowerstation";
	tdPowerStationMortage.innerHTML = " ";
	tr2Buldings.appendChild(tdPowerStationMortage);

	let tdPowerStatioBuyPowerStation= document.createElement("td");
	tr2Buldings.appendChild(tdPowerStatioBuyPowerStation);

	let buttonPowerStatioBuyPowerStation = document.createElement("button");
	buttonPowerStatioBuyPowerStation.id = "buttonbuypowerstation";
	buttonPowerStatioBuyPowerStation.type = "button";

	buttonPowerStatioBuyPowerStation.onclick = buyPowerStation;
	buttonPowerStatioBuyPowerStation.classList.add("btn", "btn-danger");
	buttonPowerStatioBuyPowerStation.disabled = true;
	buttonPowerStatioBuyPowerStation.innerHTML = "kup";
	tdPowerStatioBuyPowerStation.appendChild(buttonPowerStatioBuyPowerStation);

	let tdPowerStatioSellPowerStation = document.createElement("td");
	tr2Buldings.appendChild(tdPowerStatioSellPowerStation);

	let label1PowerStatioSellPowerStation = document.createElement("label");
	label1PowerStatioSellPowerStation.innerHTML = "komu";
	tdPowerStatioSellPowerStation.appendChild(label1PowerStatioSellPowerStation);

	let br1PowerStatioSellPowerStation = document.createElement("br");
	tdPowerStatioSellPowerStation.appendChild(br1PowerStatioSellPowerStation);

	let selectPowerStatioSellPowerStation = document.createElement("select");
	selectPowerStatioSellPowerStation.id = "buyerpowerstation";
	tdPowerStatioSellPowerStation.appendChild(selectPowerStatioSellPowerStation);

	for(let j =0; j<players.length; j++){
		let optionPowerStatioSellPowerStation = document.createElement("option");
		optionPowerStatioSellPowerStation.id = "powerstationopt" + (j+1);
		selectPowerStatioSellPowerStation.appendChild(optionPowerStatioSellPowerStation);
	}

	let br2PowerStatioSellPowerStation = document.createElement("br");
	tdPowerStatioSellPowerStation.appendChild(br2PowerStatioSellPowerStation);

	let label2PowerStatioSellPowerStation = document.createElement("label");
	label2PowerStatioSellPowerStation.innerHTML = "za ile";
	tdPowerStatioSellPowerStation.appendChild(label2PowerStatioSellPowerStation);

	let br3PowerStatioSellPowerStation = document.createElement("br");
	tdPowerStatioSellPowerStation.appendChild(br3PowerStatioSellPowerStation);

	let inputPowerStatioSellPowerStation = document.createElement("input");
	inputPowerStatioSellPowerStation.id = "pricepowerstation";
	inputPowerStatioSellPowerStation.type = "number";
	tdPowerStatioSellPowerStation.appendChild(inputPowerStatioSellPowerStation);

	let buttonPowerStatioSellPowerStation = document.createElement("button");
	buttonPowerStatioSellPowerStation.id = "buttonsellpowerstation";
	buttonPowerStatioSellPowerStation.type = "button";

	let br4PowerStatioSellPowerStation = document.createElement("br");
	tdPowerStatioSellPowerStation.appendChild(br4PowerStatioSellPowerStation);

	let br5PowerStatioSellPowerStation = document.createElement("br");
	tdPowerStatioSellPowerStation.appendChild(br5PowerStatioSellPowerStation);

	if(players[player].powerStation.have == "tak") {
		buttonPowerStatioSellPowerStation.classList.add("btn", "btn-success");
		buttonPowerStatioSellPowerStation.disabled = false;
	} else {
		buttonPowerStatioSellPowerStation.classList.add("btn", "btn-danger");
		buttonPowerStatioSellPowerStation.disabled = true;
	}

	buttonPowerStatioSellPowerStation.onclick = sellPowerStation;
	buttonPowerStatioSellPowerStation.innerHTML = "sprzedaj";
	tdPowerStatioSellPowerStation.appendChild(buttonPowerStatioSellPowerStation);

	let tdPowerStationMortageAction = document.createElement("td");
	tr2Buldings.appendChild(tdPowerStationMortageAction);

	let buttonPowerStationMortageAction = document.createElement("button");
	buttonPowerStationMortageAction.id = "buttonmortagepowerstation";
	buttonPowerStationMortageAction.type = "button";

	if(players[player].powerStation.have == "tak" && players[player].powerStation.mortage == "nie") {
		buttonPowerStationMortageAction.classList.add("btn", "btn-success");
		buttonPowerStationMortageAction.disabled = false;
	} else {
		buttonPowerStationMortageAction.classList.add("btn", "btn-danger");
		buttonPowerStationMortageAction.disabled = true;
	}

	buttonPowerStationMortageAction.onclick = mortagePowerStation;
	buttonPowerStationMortageAction.innerHTML = "zastaw";
	tdPowerStationMortageAction.appendChild(buttonPowerStationMortageAction);

	let tdPowerStationMortageRemoveAction = document.createElement("td");
	tr2Buldings.appendChild(tdPowerStationMortageRemoveAction);

	let buttonPowerStationMortageRemoveAction = document.createElement("button");
	buttonPowerStationMortageRemoveAction.id = "buttonmortageremovepowerstation";
	buttonPowerStationMortageRemoveAction.type = "button";

	if(players[player].powerStation.mortage == "tak"){
		buttonPowerStationMortageRemoveAction.classList.add("btn", "btn-success");
		buttonPowerStationMortageRemoveAction.disabled = false;
	} else {
		buttonPowerStationMortageRemoveAction.classList.add("btn", "btn-danger");
		buttonPowerStationMortageRemoveAction.disabled = true;
	}

	buttonPowerStationMortageRemoveAction.onclick = mortageRemovePowerStation;
	buttonPowerStationMortageRemoveAction.innerHTML = "wykup";
	tdPowerStationMortageRemoveAction.appendChild(buttonPowerStationMortageRemoveAction);

	let trBuldings = document.createElement("tr");
	buldingsTableBody.appendChild(trBuldings);

	let tdWaterworksId = document.createElement("td");
	tdWaterworksId.innerHTML = 2;
	trBuldings.appendChild(tdWaterworksId);

	let tdWaterworksName = document.createElement("td");
	tdWaterworksName.id = "waterworks";
	tdWaterworksName.innerHTML = "wodociągi";
	trBuldings.appendChild(tdWaterworksName);

	let tdWaterworksHave = document.createElement("td");
	tdWaterworksHave.id = "havewaterworks";
	tdWaterworksHave.innerHTML = " ";
	trBuldings.appendChild(tdWaterworksHave);

	let tdWaterworksMortage = document.createElement("td");
	tdWaterworksMortage.id = "mortagewaterworks";
	tdWaterworksMortage.innerHTML = " ";
	trBuldings.appendChild(tdWaterworksMortage);

	let tdWaterworksBuyWaterworks = document.createElement("td");
	trBuldings.appendChild(tdWaterworksBuyWaterworks);

	let buttonWaterworksBuyWaterworks = document.createElement("button");
	buttonWaterworksBuyWaterworks.id = "buttonbuywaterworks";
	buttonWaterworksBuyWaterworks.type = "button";

	buttonWaterworksBuyWaterworks.onclick = buyWaterworks;
	buttonWaterworksBuyWaterworks.classList.add("btn", "btn-danger");
	buttonWaterworksBuyWaterworks.disabled = true;
	buttonWaterworksBuyWaterworks.innerHTML = "kup";
	tdWaterworksBuyWaterworks.appendChild(buttonWaterworksBuyWaterworks);

	let tdWaterworksSellWaterworks = document.createElement("td");
	trBuldings.appendChild(tdWaterworksSellWaterworks);

	let label1WaterworksSellWaterworks = document.createElement("label");
	label1WaterworksSellWaterworks.innerHTML = "komu";
	tdWaterworksSellWaterworks.appendChild(label1WaterworksSellWaterworks);

	let br1WaterworksSellWaterworks = document.createElement("br");
	tdWaterworksSellWaterworks.appendChild(br1WaterworksSellWaterworks);

	let selectWaterworksSellWaterworks = document.createElement("select");
	selectWaterworksSellWaterworks.id = "buyerwaterworks";
	tdWaterworksSellWaterworks.appendChild(selectWaterworksSellWaterworks);

	for(let j =0; j<players.length; j++){
		let optionWaterworksSellWaterworks = document.createElement("option");
		optionWaterworksSellWaterworks.id = "waterworksopt" + (j+1);
		selectWaterworksSellWaterworks.appendChild(optionWaterworksSellWaterworks);
	}

	let br2WaterworksSellWaterworks = document.createElement("br");
	tdWaterworksSellWaterworks.appendChild(br2WaterworksSellWaterworks);

	let label2WaterworksSellWaterworks = document.createElement("label");
	label2WaterworksSellWaterworks.innerHTML = "za ile";
	tdWaterworksSellWaterworks.appendChild(label2WaterworksSellWaterworks);

	let br3WaterworksSellWaterworks = document.createElement("br");
	tdWaterworksSellWaterworks.appendChild(br3WaterworksSellWaterworks);

	let inputWaterworksSellWaterworks = document.createElement("input");
	inputWaterworksSellWaterworks.id = "pricewaterworks";
	inputWaterworksSellWaterworks.type = "number";
	tdWaterworksSellWaterworks.appendChild(inputWaterworksSellWaterworks);

	let br4WaterworksSellWaterworks = document.createElement("br");
	tdWaterworksSellWaterworks.appendChild(br4WaterworksSellWaterworks);

	let br5WaterworksSellWaterworks = document.createElement("br");
	tdWaterworksSellWaterworks.appendChild(br5WaterworksSellWaterworks);

	let buttonWaterworksSellWaterworks = document.createElement("button");
	buttonWaterworksSellWaterworks.id = "buttonsellwaterworks";
	buttonWaterworksSellWaterworks.type = "button";

	if(players[player].waterworks.have == "tak") {
		buttonWaterworksSellWaterworks.classList.add("btn", "btn-success");
		buttonWaterworksSellWaterworks.disabled = false;
	} else {
		buttonWaterworksSellWaterworks.classList.add("btn", "btn-danger");
		buttonWaterworksSellWaterworks.disabled = true;
	}

	buttonWaterworksSellWaterworks.onclick = sellWaterworks;;
	buttonWaterworksSellWaterworks.innerHTML = "sprzedaj";
	tdWaterworksSellWaterworks.appendChild(buttonWaterworksSellWaterworks);

	let tdWaterworksMortageAction = document.createElement("td");
	trBuldings.appendChild(tdWaterworksMortageAction);

	let buttonWaterworksMortageAction = document.createElement("button");
	buttonWaterworksMortageAction.id = "buttonmortagewaterworks";
	buttonWaterworksMortageAction.type = "button";

	if(players[player].waterworks.have == "tak" && players[player].waterworks.mortage == "nie") {
		buttonWaterworksMortageAction.classList.add("btn", "btn-success");
		buttonWaterworksMortageAction.disabled = false;
	} else {
		buttonWaterworksMortageAction.classList.add("btn", "btn-danger");
		buttonWaterworksMortageAction.disabled = true;
	}

	buttonWaterworksMortageAction.onclick = mortageWaterworks;;
	buttonWaterworksMortageAction.innerHTML = "zastaw";
	tdWaterworksMortageAction.appendChild(buttonWaterworksMortageAction);

	let tdWaterworksMortageRemoveAction = document.createElement("td");
	trBuldings.appendChild(tdWaterworksMortageRemoveAction);

	let buttonWaterworksMortageRemoveAction = document.createElement("button");
	buttonWaterworksMortageRemoveAction.id = "buttonmortageremovewaterworks";
	buttonWaterworksMortageRemoveAction.type = "button";

	if(players[player].waterworks.mortage == "tak"){
		buttonWaterworksMortageRemoveAction.classList.add("btn", "btn-success");
		buttonWaterworksMortageRemoveAction.disabled = false;
	} else {
		buttonWaterworksMortageRemoveAction.classList.add("btn", "btn-danger");
		buttonWaterworksMortageRemoveAction.disabled = true;
	}

	buttonWaterworksMortageRemoveAction.onclick = mortageRemoveWaterworks;
	buttonWaterworksMortageRemoveAction.innerHTML = "wykup";
	tdWaterworksMortageRemoveAction.appendChild(buttonWaterworksMortageRemoveAction);
}

function addBuldingsInfoPlayerInventory(player) {
	document.getElementById("havepowerstation").innerHTML = players[player].powerStation.have;
	document.getElementById("mortagepowerstation").innerHTML = players[player].powerStation.mortage;

	document.getElementById("havewaterworks").innerHTML = players[player].waterworks.have;
	document.getElementById("mortagewaterworks").innerHTML = players[player].waterworks.mortage;
}

function addByerPowerstationPlayerInventory() {
	for (let i=1; i<players.length+1; i++) {
		let powerstation = "powerstationopt"+i;
		document.getElementById(powerstation).innerHTML = players[i-1].name;
		document.getElementById(powerstation).value = i-1;
	}
}

function addByerWaterworksPlayerInventory() {
	for (let i=1; i<players.length+1; i++) {
		let waterworks = "waterworksopt"+i;
		document.getElementById(waterworks).innerHTML = players[i-1].name;
		document.getElementById(waterworks).value = i-1;
	}
}

function buttonDisabled(buttonId) {
	document.getElementById(buttonId).disabled = true;
	document.getElementById(buttonId).classList.remove("btn", "btn-success");
	document.getElementById(buttonId).classList.add("btn", "btn-danger");
}

function buttonEnabled(buttonId) {
	document.getElementById(buttonId).disabled = false;
	document.getElementById(buttonId).classList.remove("btn", "btn-danger");
	document.getElementById(buttonId).classList.add("btn", "btn-success");
}