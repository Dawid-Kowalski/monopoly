function showPlayerFields() {

	if(numberOfPlayers == "2"){
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", true);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", true);
	}

	if(numberOfPlayers == "3"){
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", false);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", true);
	}

	if(numberOfPlayers == "4"){
		hidePlayersSettings("player3-name-label", "player3-name", "player3-color-label", "player3-color", false);
		hidePlayersSettings("player4-name-label", "player4-name", "player4-color-label", "player4-color", false);
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