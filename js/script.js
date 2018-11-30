drawBoard();
cardShuffle(blueChance);
cardShuffle(redChance);

activePlayer = 0;

let centerOfPawnX = 0;
let centerOfPawnY = 0;



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
	players[player].position = 40;

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
	}

	if(fields[players[player].position - 1].type == "blue chance") {
		hideInfoPanels (true, false, true, true, true);
		let blueCard = blueChance.shift();
		blueChance.push(blueCard);
		document.getElementById('chance-text').innerHTML = blueCard.text;
	}

	if(fields[players[player].position - 1].type == "paid parking") {
		hideInfoPanels (true, true, true, true, true);
		updatePlayerMoney(player, -400);
		showRoundMainData(player);
	}

	if(fields[players[player].position - 1].type == "railways") {
		hideInfoPanels (true, true, false, true, true);
		showRailwaysInfos(player);
	}

	if(fields[players[player].position - 1].type == "red chance") {
		hideInfoPanels (true, false, true, true, true);
		let redCard = redChance.shift();
		redChance.push(redCard);
		document.getElementById('chance-text').innerHTML = redCard.text;
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
	}

	if(fields[players[player].position - 1].type == "tax to pay") {
		hideInfoPanels (true, true, true, true, true);
		updatePlayerMoney(player, -200);
		showRoundMainData(player);
	}

	if(fields[players[player].position - 1].type == "start") {
		hideInfoPanels (true, true, true, true, true);
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

function cardShuffle(array) {
	for(i=0;i<1000;i++){
		let firstPosition = Math.floor((Math.random() * 16) + 0);
		let secondPosition = Math.floor((Math.random() * 16) + 0);
		let tempId;
		let firstCardId = array[firstPosition].id;
		let secondCardId = array[secondPosition].id;
		tempId = firstCardId;
		array[firstPosition].id = secondCardId;
		array[secondPosition].id = tempId;
		let tempText;
		let firstCardText = array[firstPosition].text;
		let secondCardText = array[secondPosition].text;
		tempText = firstCardText;
		array[firstPosition].text = secondCardText;
		array[secondPosition].text = tempText;
	}
}