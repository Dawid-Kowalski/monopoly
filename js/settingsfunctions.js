function changeSettings () {
	downloadColorSettings();
	downloadCountrySettings();
	downloadCitySettings();
	drawBoard();
}

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

function downloadCitySettings () {
	ateny = document.getElementById("city1name").value;
	saloniki = document.getElementById("city2name").value;
	neapol = document.getElementById("city3name").value;
	mediolan = document.getElementById("city4name").value;
	rzym = document.getElementById("city5name").value;
	barcelona = document.getElementById("city6name").value;
	sewilla = document.getElementById("city7name").value;
	madryt = document.getElementById("city8name").value;
	liverpool = document.getElementById("city9name").value;
	glasgow = document.getElementById("city10name").value;
	londyn = document.getElementById("city11name").value;
	rotterdam = document.getElementById("city12name").value;
	bruksela = document.getElementById("city13name").value;
	amsterdam = document.getElementById("city14name").value;
	malmo = document.getElementById("city15name").value;
	goteborg = document.getElementById("city16name").value;
	sztokholm = document.getElementById("city17name").value;
	frankfurt = document.getElementById("city18name").value;
	kolonia = document.getElementById("city19name").value;
	bonn = document.getElementById("city20name").value;
	insbruck = document.getElementById("city21name").value;
	wieden = document.getElementById("city22name").value;
}