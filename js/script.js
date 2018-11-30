drawBoard();
cardShuffle(blueChance);
cardShuffle(redChance);

activePlayer = 0;

let centerOfPawnX = 0;
let centerOfPawnY = 0;

let blueCard;
let redCard;

let cityTable = document.getElementById("city-table");


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
	document.getElementById("player-position").innerHTML = players[player].position;
}

function nextPlayer() {

	if(activePlayer<(players.length)-1) {
		activePlayer++;
	}
	else{
		activePlayer = 0;
	}

	drawBoard();
	showRoundMainData(activePlayer);

	for(let i = 0; i<players.length; i++) {
		drawPlayerPosition(i);
	}

	return activePlayer;
}

function updatePlayerPosition (player) {
	players[player].position = players[player].position + sumDice;

	if(players[player].position > 40){
		players[player].position -= 40;
	}

	//do testów
	players[player].position = 7;

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
		hideInfoPanels (false, true, true, true, true);
		showCityInfos(player);

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "blue chance") {
		console.log("odkrywasz szanse");
		hideInfoPanels (true, false, true, true, true);
		blueCard = blueChance.shift();
		blueChance.push(blueCard);
		document.getElementById('chance-text').innerHTML = blueCard.text;
		blueCardEffect();

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue card effect
		return;
	}

	if(fields[players[player].position - 1].type == "paid parking") {
		hideInfoPanels (true, true, true, true, true);
		updatePlayerMoney(player, -400);
		showRoundMainData(player);
	}

	if(fields[players[player].position - 1].type == "railways") {
		hideInfoPanels (true, true, false, true, true);
		showRailwaysInfos(player);

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "red chance") {
		hideInfoPanels (true, false, true, true, true);
		redCard = redChance.shift();
		redChance.push(redCard);
		document.getElementById('chance-text').innerHTML = redCard.text;
		redCardEffect();

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "prison visit") {
		hideInfoPanels (true, true, true, true, true);
	}

	if(fields[players[player].position - 1].type == "power station") {
		hideInfoPanels (true, true, true, false, true);
		showPowerStationInfos(player);
	}

	if(fields[players[player].position - 1].type == "free parking") {
		hideInfoPanels (true, true, true, true, true);
	}

	if(fields[players[player].position - 1].type == "waterworks") {
		hideInfoPanels (true, true, true, true, false);
		showWaterworksInfos(player);
	}

	if(fields[players[player].position - 1].type == "go to prison") {
		hideInfoPanels (true, true, true, true, true);
		players[player].position = 10;
		drawBoard();
		for(let i = 0; i<players.length; i++) {
			drawPlayerPosition(i);
		}

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}

	if(fields[players[player].position - 1].type == "tax to pay") {
		hideInfoPanels (true, true, true, true, true);
		updatePlayerMoney(player, -200);
		showRoundMainData(player);
	}

	if(fields[players[player].position - 1].type == "start") {
		hideInfoPanels (true, true, true, true, true);

		//zapobiega odpaleniu nizszych if po zmienie pozycji przez blue lub red card effect
		return;
	}
}

function showCityInfos(player) {
		document.getElementById('field-city-name-position').innerHTML = fields[players[player].position - 1].name;
		document.getElementById('field-property').innerHTML = fields[players[player].position - 1].property;
		document.getElementById('is-mortage').innerHTML = fields[players[player].position - 1].isMortage;
		document.getElementById('house').innerHTML = fields[players[player].position - 1].house;
		document.getElementById('hotel').innerHTML = fields[players[player].position - 1].hotel;
		document.getElementById('cost').innerHTML = fields[players[player].position - 1].cost;
		document.getElementById('cost-house').innerHTML = fields[players[player].position - 1].cost1house;
		document.getElementById('cost-hotel').innerHTML = fields[players[player].position - 1].cost1hotel;
		document.getElementById('mortage').innerHTML = fields[players[player].position - 1].mortage;
		document.getElementById('mortage-remove').innerHTML = fields[players[player].position - 1].mortageRemove;
		document.getElementById('pay-no-house').innerHTML = fields[players[player].position - 1].payNoHouse;
		document.getElementById('pay-1-house').innerHTML = fields[players[player].position - 1].pay1house;
		document.getElementById('pay-2-house').innerHTML = fields[players[player].position - 1].pay2house;
		document.getElementById('pay-3-house').innerHTML = fields[players[player].position - 1].pay3house;
		document.getElementById('pay-4-house').innerHTML = fields[players[player].position - 1].pay4house;
		document.getElementById('pay-1-hotel').innerHTML = fields[players[player].position - 1].pay1hotel;
}

function showRailwaysInfos(player) {
		document.getElementById('field-railways-name-position').innerHTML = fields[players[player].position - 1].name;
		document.getElementById('field-railways-property').innerHTML = fields[players[player].position - 1].property;
		document.getElementById('is-mortage-railways').innerHTML = fields[players[player].position - 1].isMortage;
		document.getElementById('cost-railways').innerHTML = fields[players[player].position - 1].cost;
		document.getElementById('mortage-railways').innerHTML = fields[players[player].position - 1].mortage;
		document.getElementById('mortage-remove-railways').innerHTML = fields[players[player].position - 1].mortageRemove;
		document.getElementById('pay-1-line').innerHTML = fields[players[player].position - 1].pay1line;
		document.getElementById('pay-2-line').innerHTML = fields[players[player].position - 1].pay2line;
		document.getElementById('pay-3-line').innerHTML = fields[players[player].position - 1].pay3line;
		document.getElementById('pay-4-line').innerHTML = fields[players[player].position - 1].pay4line;
}

function showPowerStationInfos(player) {
		document.getElementById('field-powerstation-property').innerHTML = fields[players[player].position - 1].property;
		document.getElementById('is-mortage-powerstation').innerHTML = fields[players[player].position - 1].isMortage;
		document.getElementById('cost-powerstation').innerHTML = fields[players[player].position - 1].cost;
		document.getElementById('mortage-powerstation-price').innerHTML = fields[players[player].position - 1].mortage;
		document.getElementById('mortage-remove-powerstation').innerHTML = fields[players[player].position - 1].mortageRemove;
}

function showWaterworksInfos(player) {
		document.getElementById('field-waterworks-property').innerHTML = fields[players[player].position - 1].property;
		document.getElementById('is-mortage-waterworks').innerHTML = fields[players[player].position - 1].isMortage;
		document.getElementById('cost-waterworks').innerHTML = fields[players[player].position - 1].cost;
		document.getElementById('mortage-waterworks-price').innerHTML = fields[players[player].position - 1].mortage;
		document.getElementById('mortage-remove-waterworks').innerHTML = fields[players[player].position - 1].mortageRemove;
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
		let option1CitySellCity = document.createElement("option");
		option1CitySellCity.id = "city"+i+"opt1";
		selectCitySellCity.appendChild(option1CitySellCity);
		let option2CitySellCity = document.createElement("option");
		option2CitySellCity.id = "city"+i+"opt2";
		selectCitySellCity.appendChild(option2CitySellCity);
		let option3CitySellCity = document.createElement("option");
		option3CitySellCity.id = "city"+i+"opt3";
		selectCitySellCity.appendChild(option3CitySellCity);
		let option4CitySellCity = document.createElement("option");
		option4CitySellCity.id = "city"+i+"opt4";
		selectCitySellCity.appendChild(option4CitySellCity);

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