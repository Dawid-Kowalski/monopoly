function showPlayerFields() {

	if(numberOfPlayers == "2"){
		hidePlayersSettings("player3-name-label", "player3-name", true);
		hidePlayersSettings("player4-name-label", "player4-name", true);
	}

	if(numberOfPlayers == "3"){
		hidePlayersSettings("player3-name-label", "player3-name", false);
		hidePlayersSettings("player4-name-label", "player4-name", true);
	}

	if(numberOfPlayers == "4"){
		hidePlayersSettings("player3-name-label", "player3-name", false);
		hidePlayersSettings("player4-name-label", "player4-name", false);
	}
}

function hidePlayersSettings (label, input, ishidden) {
		document.getElementById(label).hidden = ishidden;
		if(ishidden) {
			document.getElementById(input).type = "hidden";
		} else {
			document.getElementById(input).type = "text";
		}
}