function Player () {
	this.id = 0;
	this.status = "on";
	this.name = "brak";
	this.money = 1000;
	this.position = 0;
	this.goFromPrisonBlue = "niedostępne";
	this.goFromPrisonRed = "niedostępne";
	this.houseAll = 0;
	this.hotelAll = 0;
	this.railwaysAll = 0;
	this.powerStationAndWaterworks = 0;
	this.greeceCity = 0;
	this.greeceComplete = "nie";
	this.italyCity = 0;
	this.italyComplete = "nie";
	this.spainCity = 0;
	this.spainComplete = "nie";
	this.englandCity = 0;
	this.englandComplete = "nie";
	this.beneluxCity = 0;
	this.beneluxComplete = "nie";	
	this.swedenCity = 0;
	this.swedenComplete = "nie";
	this.rfnCity = 0;
	this.rfnComplete = "tak";	
	this.austriaCity = 0;
	this.austriaComplete = "nie";
	this.city = [
				{
					idField: 0,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 2,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 5,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 7,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 8,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
					},
				{
					idField: 10,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 12,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 13,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 15,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				 {
					idField: 17,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 18,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 20,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 22,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 23,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 25,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 26,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 28,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 30,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 31,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 33,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 36,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				},
				{
					idField: 38,
					have: "nie",	
					house: 0,
					hotel: 0,
					mortage: "nie"
				}
				];
	this.railways = [
			 		{
						idField: 4,
						have: "nie",
						mortage: "nie"
					},
					{
						idField: 14,
						have: "nie",
						mortage: "nie"
					},
					{
						idField: 24,
						have: "nie",
						mortage: "nie"
					},
					{
						idField: 34,
						have: "nie",
						mortage: "nie"
					}
					];
	this.powerStation = {
							have: "nie",
							mortage: "nie"
						};
	this.waterworks =   {
							have: "nie",
							mortage: "nie"
						};
}