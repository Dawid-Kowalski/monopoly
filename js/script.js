drawBoard();
cardShuffle(blueChance);
cardShuffle(redChance);

activePlayer = 0;

let centerOfPawnX = 0;
let centerOfPawnY = 0;

let blueCard;
let redCard;



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

function blueCardEffect() {

		switch(blueCard.id) {
			case 1:
				// powrót na start //
				players[activePlayer].position = 40;
				drawBoard();
					for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, false, true, true, true);
				break;
			case 2:
				// pomyłka banku //
				updatePlayerMoney(activePlayer, 400);
				break;
			case 3:
				// idziesz do więzienia //
				players[activePlayer].position = 10;
				drawBoard();
				for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, false, true, true, true);
				break;
			case 4:
				// urodziny //
				//dodać 20$ * ilosć graczy minus 1 - od siebie nie dostaje //
				updatePlayerMoney(activePlayer, 20*(players.length-1));
				// odjąć wszystkim pozostałym graczom 20$ //
				for(let i=0; i<players.length; i++){
					if(i == activePlayer){
						continue;
					}
					updatePlayerMoney(i, -20);
				}
				break;
			case 5:
				// spadek //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 6:
				// opłata za szpital //
				updatePlayerMoney(activePlayer, -400);
				break;
			case 7:
				// odsetki //
				updatePlayerMoney(activePlayer, 50);
				break;
			case 8:
				// choroba //
				updatePlayerMoney(activePlayer, -20);
				break;
			case 9:
				// zwrot podatku //
				updatePlayerMoney(activePlayer, 40);
				break;
			case 10:
				// konkurs //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 11:
				// do wiednia //
				players[activePlayer].position = 39;
				drawBoard();
				for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(false, false, true, true, true);
				break;
			case 12:
				// nowa szansa //
				let newCard = confirm("Ciągnij kartę z 2 zestawu - naciśnij ok\n\n lub \n\nZapłać 20$ - naciśnij anuluj");
				if(newCard == false){
					updatePlayerMoney(activePlayer, -20);
					showRoundMainData(activePlayer);
				}
// dorobić ciągnięcie z czerwonej talii
				break;
			case 13:
				// renta //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 14:
				// karta wychodzisz z wiezienia //
				players[activePlayer].goFromPrisonBlue = "dostępna"; 
// dorobić panel
//				document.getElementById("gofromprisonblue").innerHTML = players[player].goFromPrisonBlue;
				break;
			case 15:
				// rabat //
				updatePlayerMoney(activePlayer, 20);
				break;
			case 16:
				// składka ubezpieczeniowa //
				updatePlayerMoney(activePlayer, -20);
				break;
		}
		showRoundMainData(activePlayer);
}

function redCardEffect() {

		switch(redCard.id) {
			case 1:
				// do madrytu //
				players[activePlayer].position = 14;
				drawBoard();
					for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(false, false, true, true, true);
				break;
			case 2:
				// procenty //
				updatePlayerMoney(activePlayer, 100);
				break;
			case 3:
				// idziesz do koleji wschodnich //
				players[activePlayer].position = 35;
				drawBoard();
				for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, false, false, true, true);
				break;
			case 4:
				// odsetki //
				updatePlayerMoney(activePlayer, 300);
				break;
			case 5:
				// do brukseli //
				players[activePlayer].position = 23;
				drawBoard();
					for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(false, false, true, true, true);
				break;
			case 6:
				// picie w pracy //
				updatePlayerMoney(activePlayer, -40);
				break;
			case 7:
				// do neapolu //
				players[activePlayer].position = 17;
				drawBoard();
					for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(false, false, true, true, true);
				break;
			case 8:
				// opłata za szkołe //
				updatePlayerMoney(activePlayer, -300);
				break;
			case 9:
				// karta wychodzisz z wiezienia //
				players[activePlayer].goFromPrisonRed = "dostępna"; 
// dorobić panel
//				document.getElementById("gofromprisonblue").innerHTML = players[player].goFromPrisonBlue;
				break;
			case 10:
				// idziesz do więzienia //
				players[activePlayer].position = 10;
				drawBoard();
				for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, false, true, true, true);
				break;
			case 11:
				// krzyżówka //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 12:
				// na start //
				players[activePlayer].position = 40;
				drawBoard();
					for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, true, true, true, true);
				break;
			case 13:
				// remont domów //
				let payRenovation = players[activePlayer].houseAll * 50 + players[activePlayer].hotelAll * 200;
				updatePlayerMoney(activePlayer, -payRenovation);
				break;
			case 14:
				// cofnięcie o 3 pola //
				players[activePlayer].position = players[activePlayer].position - 3;
				drawBoard();
				for(let i = 0; i<players.length; i++) {
					drawPlayerPosition(i);
				}
				checkPlayerField(activePlayer);
				hideInfoPanels(true, false, true, true, true);			
				break;
			case 15:
				// modernizacja //
				let payModernization = players[activePlayer].houseAll * 80 + players[activePlayer].hotelAll * 230;
				updatePlayerMoney(activePlayer, -payModernization);			
				break;
			case 16:
				// szybka jazda //
				updatePlayerMoney(activePlayer, -30);
				break;
		}
		showRoundMainData(activePlayer);
}