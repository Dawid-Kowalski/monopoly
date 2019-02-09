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
				checkPlayerField(activePlayer);
				break;
			case 2:
				// pomyłka banku //
				updatePlayerMoney(activePlayer, 400);
				break;
			case 3:
				// idziesz do więzienia //
				players[activePlayer].position = 10;
				checkPlayerField(activePlayer);
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
				checkPlayerField(activePlayer);
				break;
			case 12:
				// nowa szansa //
				let newCard = confirm("Ciągnij kartę z 2 zestawu - naciśnij ok\n\n lub \n\nZapłać 20$ - naciśnij anuluj");
				if(newCard == false){
					updatePlayerMoney(activePlayer, -20);
					showRoundMainData(activePlayer);
				} else {
					redCard = redChance.shift();
					redChance.push(redCard);

					prepearDiceMessage(firstDice, secondDice, sumDice);
					prepearFieldNameInfoMessage(activePlayer);

					alert(redCard.text);
		
					redCardEffect();
				}
				break;
			case 13:
				// renta //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 14:
				// karta wychodzisz z wiezienia //
				players[activePlayer].goFromPrisonBlue = "dostępna";
				buttonEnabled("go-from-prison-blue");	
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
				checkPlayerField(activePlayer);
				break;
			case 2:
				// procenty //
				updatePlayerMoney(activePlayer, 100);
				break;
			case 3:
				// idziesz do koleji wschodnich //
				players[activePlayer].position = 35;
				checkPlayerField(activePlayer);
				break;
			case 4:
				// odsetki //
				updatePlayerMoney(activePlayer, 300);
				break;
			case 5:
				// do brukseli //
				players[activePlayer].position = 23;
				checkPlayerField(activePlayer);
				break;
			case 6:
				// picie w pracy //
				updatePlayerMoney(activePlayer, -40);
				break;
			case 7:
				// do neapolu //
				players[activePlayer].position = 6;
				checkPlayerField(activePlayer);
				break;
			case 8:
				// opłata za szkołe //
				updatePlayerMoney(activePlayer, -300);
				break;
			case 9:
				// karta wychodzisz z wiezienia //
				players[activePlayer].goFromPrisonRed = "dostępna";
				buttonEnabled("go-from-prison-red");
				break;
			case 10:
				// idziesz do więzienia //
				players[activePlayer].position = 10;
				checkPlayerField(activePlayer);
				break;
			case 11:
				// krzyżówka //
				updatePlayerMoney(activePlayer, 200);
				break;
			case 12:
				// na start //
				players[activePlayer].position = 40;
				checkPlayerField(activePlayer);
				break;
			case 13:
				// remont domów //
				let payRenovation = players[activePlayer].houseAll * 50 + players[activePlayer].hotelAll * 200;
				updatePlayerMoney(activePlayer, -payRenovation);
				break;
			case 14:
				// cofnięcie o 3 pola //
				players[activePlayer].position = players[activePlayer].position - 3;
				checkPlayerField(activePlayer);	
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