let diceMessage = "wyniki kostek";

let freeFieldMessage = "Jeżeli nie chcesz kupić nieruchomości za podaną cenę każdy z graczy może ją kupić po licytacji użyjcie przycisku sprzedaj wybierając cenę i gracza";

let fieldNameInfoMessage = "nazwa pola";

let mainCityMessage = "informacje o miescie";

let cityCostsMessage = "koszty miasta";

let cityPayAmountMessage = "wysokości opłat miasto";

let paidParkingMessage = "Płacisz opłatę za parking w wysokosci 400$";

let mainRailwaysMessage = "informacje o koleji";

let railwaysCostsMessage = "koszty koleji";

let railwaysPayAmountMessage = "wysokości opłat kolej";

let prisonVisitMessage = "Odwiedzasz wiezienie";

let mainPowerStationMessage = "informacje o elektrowni";

let powerStationCostsMessage = "koszty elektrowni";

let powerStationPayAmountMessage = "Opłaty za postój: 10 x ilość wyrzuconych oczek, jeżeli gracz posiada również wodociągi oplata jest podwójna";

let freeParkingMessage = "Parkujesz bezpłatnie";

let mainWaterWorksMessage = "informacje o wodociagach";

let waterWorksCostsMessage = "koszty wodociagow";

let waterWorksPayAmountMessage = "Opłaty za postój: 10 x ilość wyrzuconych oczek, jeżeli gracz posiada również elektrownie oplata jest podwójna";

let goToPrisonMessage = "Idziesz do wiezienia";


function prepearDiceMessage(firstDice, secondDice, sumDice) {
	diceMessage = "Ilość oczek na 1 kostce: " + firstDice +'\n' + "Ilość oczek na 2 kostce: " + secondDice +'\n' + "Suma: " + sumDice + "\n";
}

function prepearFieldNameInfoMessage(player) {
	fieldNameInfoMessage = "Jesteś na polu: " + fields[players[player].position - 1].name + "\n";
}

function prepearMainCityMessage(player) {
	mainCityMessage = 	"Pole posiada właściciela: " + fields[players[player].position - 1].property + "\n" +
						"Czy pole jest zastawione: " + fields[players[player].position - 1].isMortage + "\n" +
						"Ilość domków na polu: " + fields[players[player].position - 1].house + "\n" +
						"Ilość hoteli na polu: " + fields[players[player].position - 1].hotel + "\n"
						;
}

function prepearCityCostsMessage(player) {
	cityCostsMessage = 	"Koszty zakupu: " + fields[players[player].position - 1].cost + "\n" +
						"Koszty zakupu domku: " + fields[players[player].position - 1].cost1house + "\n" +
						"Koszty zakupu hotelu: " + fields[players[player].position - 1].cost1hotel + "\n" +
						"Wpływy z zastawienia: " + fields[players[player].position - 1].mortage + "\n" +
						"Koszty wykupienia hipoteki: " + fields[players[player].position - 1].mortageRemove + "\n"
						;
}

function prepearCityPayAmountMessage(player) {
	cityPayAmountMessage = 	"Opłaty za teren niezabudowany: " + fields[players[player].position - 1].payNoHouse + "\n" +
							"Opłaty za teren z 1 domkiem: " + fields[players[player].position - 1].pay1house + "\n" +
							"Opłaty za teren z 2 domkami: " + fields[players[player].position - 1].pay2house + "\n" +
							"Opłaty za teren z 3 domkami: " + fields[players[player].position - 1].pay3house + "\n" +
							"Opłaty za teren z 4 domkami: " + fields[players[player].position - 1].pay4house + "\n" +
							"Opłaty za teren z 1 hotelem: " + fields[players[player].position - 1].pay1hotel + "\n"
						;
}

function prepearMainRailwaysMessage(player) {
	mainRailwaysMessage = 	"Pole posiada właściciela: " + fields[players[player].position - 1].property + "\n" +
							"Czy pole jest zastawione: " + fields[players[player].position - 1].isMortage + "\n"
							;
}

function prepearRailwaysCostsMessage(player) {
	railwaysCostsMessage = 	"Koszty zakupu: " + fields[players[player].position - 1].cost + "\n" +
							"Wpływy z zastawienia: " + fields[players[player].position - 1].mortage + "\n" +
							"Koszty wykupienia hipoteki: " + fields[players[player].position - 1].mortageRemove + "\n"
							;
}

function prepearRailwaysPayAmountMessage(player) {
	railwaysPayAmountMessage = 	"Opłaty za 1 linie: " + fields[players[player].position - 1].pay1line + "\n" +
								"Opłaty za 2 linie: " + fields[players[player].position - 1].pay2line + "\n" +
								"Opłaty za 3 linie: " + fields[players[player].position - 1].pay3line + "\n" +
								"Opłaty za 4 linie: " + fields[players[player].position - 1].pay4line + "\n"
								;
}

function prepearMainPowerStationMessage(player) {
	mainPowerStationMessage = 	"Pole posiada właściciela: " + fields[players[player].position - 1].property + "\n" +
								"Czy pole jest zastawione: " + fields[players[player].position - 1].isMortage + "\n"
								;
}

function prepearPowerStationCostsMessage(player) {
	powerStationCostsMessage = 	"Koszty zakupu: " + fields[players[player].position - 1].cost + "\n" +
								"Wpływy z zastawienia: " + fields[players[player].position - 1].mortage + "\n" +
								"Koszty wykupienia hipoteki: " + fields[players[player].position - 1].mortageRemove + "\n"
								;
}

function prepearMainWaterWorksMessage(player) {
	mainWaterWorksMessage = 	"Pole posiada właściciela: " + fields[players[player].position - 1].property + "\n" +
								"Czy pole jest zastawione: " + fields[players[player].position - 1].isMortage + "\n"
								;
}

function prepearWaterWorksCostsMessage(player) {
	waterWorksCostsMessage = 	"Koszty zakupu: " + fields[players[player].position - 1].cost + "\n" +
								"Wpływy z zastawienia: " + fields[players[player].position - 1].mortage + "\n" +
								"Koszty wykupienia hipoteki: " + fields[players[player].position - 1].mortageRemove + "\n"
								;
}