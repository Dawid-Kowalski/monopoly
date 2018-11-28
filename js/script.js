drawBoard();

function downloadColorSettings () {
	backgroundColor = document.getElementById("fieldcolor").value;
	firstQuestionMarkColor = document.getElementById("questionmark1").value;
	secondQuestionMarkColor = document.getElementById("questionmark2").value;
	greeceColor = document.getElementById("city1color").value;
	italyColor = document.getElementById("city2color").value;
	spainColor = document.getElementById("city3color").value;
	englandColor = document.getElementById("city4color").value;
	beneluxColor = document.getElementById("city5color").value;
	swedenColor = document.getElementById("city6color").value;
	rfnColor = document.getElementById("city7color").value;
	austriaColor = document.getElementById("city8color").value;
}

function downloadCountrySettings () {
	greece = document.getElementById("country1name").value;
	italy = document.getElementById("country2name").value;
	spain = document.getElementById("country3name").value;
	england = document.getElementById("country4name").value;
	benelux = document.getElementById("country5name").value;
	sweden = document.getElementById("country6name").value;
	rfn = document.getElementById("country7name").value;
	austria = document.getElementById("country8name").value;
}


function changeSettings () {
	downloadColorSettings();
	downloadCountrySettings();
	drawBoard();
}