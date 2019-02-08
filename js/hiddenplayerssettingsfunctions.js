function showPlayerFields() {

	if(numberOfPlayers == "0"){
		hidePlayersSettings("player1-name-label", "player1-name", "player1-color-label", "player1-color", true);
		hidePlayersSettings("player2-name-label", "player2-name", "player2-color-label", "player2-color", true);
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", true);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", true);
		buttonDisabled("start-game");
	}

	if(numberOfPlayers == "2"){
		hidePlayersSettings("player1-name-label", "player1-name", "player1-color-label", "player1-color", false);
		hidePlayersSettings("player2-name-label", "player2-name", "player2-color-label", "player2-color", false);
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", true);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", true);
		buttonEnabled("start-game");
	}

	if(numberOfPlayers == "3"){
		hidePlayersSettings("player1-name-label", "player1-name", "player1-color-label", "player1-color", false);
		hidePlayersSettings("player2-name-label", "player2-name", "player2-color-label", "player2-color", false);
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", false);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", true);
		buttonEnabled("start-game");
	}

	if(numberOfPlayers == "4"){
		hidePlayersSettings("player1-name-label", "player1-name", "player1-color-label", "player1-color", false);
		hidePlayersSettings("player2-name-label", "player2-name", "player2-color-label", "player2-color", false);
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", false);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", false);
		buttonEnabled("start-game");
	}
}

function hidePlayersSettings (label, inputText, labelColor, inputColor, ishidden) {
		document.getElementById(label).hidden = ishidden;
		document.getElementById(labelColor).hidden = ishidden;
		if(ishidden) {
			document.getElementById(inputText).type = "hidden";
			document.getElementById(inputColor).type = "hidden";
		} else {
			document.getElementById(inputText).type = "text";
			document.getElementById(inputColor).type = "color";
		}
}

function hideInfoPanels (isCity, isChance, isRailways, isPowerstation, isWaterworks) {
	
	if(isCity) {
		document.getElementById("city-info-panel").hidden = isCity;
	} else {
		document.getElementById("city-info-panel").hidden = false;
	}

	if(isChance) {
		document.getElementById("card-info-panel").hidden = isChance;
	} else {
		document.getElementById("card-info-panel").hidden = false;
	}

	if(isRailways) {
		document.getElementById("railways-info-panel").hidden = isRailways;
	} else {
		document.getElementById("railways-info-panel").hidden = false;
	}

	if(isPowerstation) {
		document.getElementById("powerstation-info-panel").hidden = isPowerstation;
	} else {
		document.getElementById("powerstation-info-panel").hidden = false;
	}

	if(isWaterworks) {
		document.getElementById("waterworks-info-panel").hidden = isWaterworks;
	} else {
		document.getElementById("waterworks-info-panel").hidden = false;
	}
}