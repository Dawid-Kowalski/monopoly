let fields = [
	{
		id: 1,
		idCity: 1,
		type: "city",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 8*sS,
		maxYpos: ch - lS,
		country: "Greece",
		name: "ateny",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 120,
		payNoHouse: 10,
		pay1house: 40,
		pay2house: 120,
		pay3house: 360,
		pay4house: 640,
		pay1hotel: 900,
		cost1house: 100,
		cost1hotel: 100,
		mortage: 60,
		mortageRemove: 65
	},
	{
		id: 2,
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 7*sS,
		maxYpos: ch - lS - 1*sS,
		type: "blue chance",
		name: "szansa niebieska"
	},
	{
		id: 3,
		idCity: 2,
		type: "city",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 6*sS,
		maxYpos: ch - lS - 2*sS,
		country: "greece",
		name: "saloniki",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 120,
		payNoHouse: 10,
		pay1house: 40,
		pay2house: 120,
		pay3house: 360,
		pay4house: 640,
		pay1hotel: 900,
		cost1house: 100,
		cost1hotel: 100,
		mortage: 60,
		mortageRemove: 65
	},
	{
		id: 4,
		type: "paid parking",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 5*sS,
		maxYpos: ch - lS - 3*sS,
		name: "parking płatny"
	},
	{
		id: 5,
		idRailways: 1,
		type: "railways",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 4*sS,
		maxYpos: ch - lS - 4*sS,
		name: "koleje południowe",
		property: "nie", //testy
		propertyId: -1, //testy
		isMortage: "nie",
		cost: 400,
		pay1line: 50,
		pay2line: 100,
		pay3line: 200,
		pay4line: 400,
		mortage: 200,
		mortageRemove: 220
	},
	{
		id: 6,
		idCity: 3,
		type: "city",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 3*sS,
		maxYpos: ch - lS - 5*sS,
		country: "italy",
		name: "neapol",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 200,
		payNoHouse: 15,
		pay1house: 60,
		pay2house: 180,
		pay3house: 540,
		pay4house: 800,
		pay1hotel: 1100,
		cost1house: 100,
		cost1hotel: 100,
		mortage: 100,
		mortageRemove: 110
	},
	{
		id: 7,
		type: "red chance",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 2*sS,
		maxYpos: ch - lS - 6*sS,
		name: "szansa czerwona"
	},
	{
		id: 8,
		idCity: 4,
		type: "city",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 1*sS,
		maxYpos: ch - lS - 7*sS,
		country: "italy",
		name: "mediolan",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 200,
		payNoHouse: 15,
		pay1house: 60,
		pay2house: 180,
		pay3house: 540,
		pay4house: 800,
		pay1hotel: 1100,
		cost1house: 100,
		cost1hotel: 100,
		mortage: 100,
		mortageRemove: 110	
	},
	{
		id: 9,
		idCity: 5,
		type: "city",
		minXpos: 0,
		maxXpos: lS,
		minYpos: lS + 0*sS,
		maxYpos: ch - lS - 8*sS,
		country: "italy",
		name: "rzym",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 240,
		payNoHouse: 20,
		pay1house: 80,
		pay2house: 200,
		pay3house: 600,
		pay4house: 900,
		pay1hotel: 1200,
		cost1house: 100,
		cost1hotel: 100,
		mortage: 120,
		mortageRemove: 130	

	},
	{
		id: 10,
		type: "prison visit",
		minXpos: 0,
		maxXpos: lS,
		minYpos: 0*lS + 0*sS,
		maxYpos: ch - lS - 9*sS,
		name: "odwiedzasz wiezienie"
	},
	{
		id: 11,
		idCity: 6,
		type: "city",
		minXpos: lS + 0*sS,
		maxXpos: lS + 1*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "spain",
		name: "barcelona",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 280,
		payNoHouse: 20,
		pay1house: 100,
		pay2house: 300,
		pay3house: 900,
		pay4house: 1250,
		pay1hotel: 1500,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 140,
		mortageRemove: 150	
	},
	{
		id: 12,
		type: "power station",
		minXpos: lS + 1*sS,
		maxXpos: lS + 2*sS,
		minYpos: 0,
		maxYpos: lS,
		name: "elektrownia",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		cost: 300,
		mortage: 150,
		mortageRemove: 165
	},
	{
		id: 13,
		idCity: 7,
		type: "city",
		minXpos: lS + 2*sS,
		maxXpos: lS + 3*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "spain",
		name: "sewilla",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 280,
		payNoHouse: 20,
		pay1house: 100,
		pay2house: 300,
		pay3house: 900,
		pay4house: 1250,
		pay1hotel: 1500,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 140,
		mortageRemove: 150		
	},
	{
		id: 14,
		idCity: 8,
		type: "city",
		minXpos: lS + 3*sS,
		maxXpos: lS + 4*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "spain",
		name: "madryt",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 320,
		payNoHouse: 25,
		pay1house: 120,
		pay2house: 360,
		pay3house: 1000,
		pay4house: 1400,
		pay1hotel: 1800,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 160,
		mortageRemove: 175	

	},
	{
		id: 15,
		idRailways: 2,
		type: "railways",
		minXpos: lS + 4*sS,
		maxXpos: lS + 5*sS,
		minYpos: 0,
		maxYpos: lS,
		name: "koleje zachodnie",
		property: "nie", //testy
		propertyId: -1, //testy
		isMortage: "nie",
		cost: 400,
		pay1line: 50,
		pay2line: 100,
		pay3line: 200,
		pay4line: 400,
		mortage: 200,
		mortageRemove: 220
	},
	{
		id: 16,
		idCity: 9,
		type: "city",
		minXpos: lS + 5*sS,
		maxXpos: lS + 6*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "england",
		name: "liverpool",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 360,
		payNoHouse: 30,
		pay1house: 140,
		pay2house: 400,
		pay3house: 1100,
		pay4house: 1500,
		pay1hotel: 1900,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 180,
		mortageRemove: 200		
	},
	{
		id: 17,
		type: "blue chance",
		minXpos: lS + 6*sS,
		maxXpos: lS + 7*sS,
		minYpos: 0,
		maxYpos: lS,
		name: "szansa niebieska"
	},
	{
		id: 18,
		idCity: 10,
		type: "city",
		minXpos: lS + 7*sS,
		maxXpos: lS + 8*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "england",
		name: "glasgow",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 360,
		payNoHouse: 30,
		pay1house: 140,
		pay2house: 400,
		pay3house: 1100,
		pay4house: 1500,
		pay1hotel: 1900,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 180,
		mortageRemove: 200	
	},
	{
		id: 19,
		idCity: 11,
		type: "city",
		minXpos: lS + 8*sS,
		maxXpos: lS + 9*sS,
		minYpos: 0,
		maxYpos: lS,
		country: "england",
		name: "londyn",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 400,
		payNoHouse: 35,
		pay1house: 160,
		pay2house: 440,
		pay3house: 1200,
		pay4house: 1600,
		pay1hotel: 2000,
		cost1house: 200,
		cost1hotel: 200,
		mortage: 200,
		mortageRemove: 220	
	},
	{
		id: 20,
		type: "free parking",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: 0,
		maxYpos: lS,
		name: "bezpłatny parking"
	},
	{
		id: 21,
		idCity: 12,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 0*sS,
		maxYpos: lS + 1*sS,
		country: "benelux",
		name: "rotterdam",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 440,
		payNoHouse: 35,
		pay1house: 180,
		pay2house: 500,
		pay3house: 1400,
		pay4house: 1750,
		pay1hotel: 2100,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 220,
		mortageRemove: 240	
	},
	{
		id: 22,
		type: "red chance",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 1*sS,
		maxYpos: lS + 2*sS,
		name: "szansa czerwona"
	},
	{
		id: 23,
		idCity: 13,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 2*sS,
		maxYpos: lS + 3*sS,
		country: "benelux",
		name: "bruksela",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 440,
		payNoHouse: 35,
		pay1house: 180,
		pay2house: 500,
		pay3house: 1400,
		pay4house: 1750,
		pay1hotel: 2100,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 220,
		mortageRemove: 240	
	},
	{
		id: 24,
		idCity: 14,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 3*sS,
		maxYpos: lS + 4*sS,
		country: "benelux",
		name: "amsterdam",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 480,
		payNoHouse: 40,
		pay1house: 200,
		pay2house: 600,
		pay3house: 1500,
		pay4house: 1850,
		pay1hotel: 2200,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 240,
		mortageRemove: 260	
	},
	{
		id: 25,
		idRailways: 3,
		type: "railways",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 4*sS,
		maxYpos: lS + 5*sS,
		name: "koleje północne",
		property: "nie", //testy
		propertyId: -1, //testy
		isMortage: "nie",
		cost: 400,
		pay1line: 50,
		pay2line: 100,
		pay3line: 200,
		pay4line: 400,
		mortage: 200,
		mortageRemove: 220
	},
	{
		id: 26,
		idCity: 15,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 5*sS,
		maxYpos: lS + 6*sS,
		country: "sweden",
		name: "malmo",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 520,
		payNoHouse: 45,
		pay1house: 220,
		pay2house: 660,
		pay3house: 1600,
		pay4house: 1950,
		pay1hotel: 2300,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 260,
		mortageRemove: 285	
	},
	{
		id: 27,
		idCity: 16,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 6*sS,
		maxYpos: lS + 7*sS,
		country: "sweden",
		name: "goteborg",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 520,
		payNoHouse: 45,
		pay1house: 220,
		pay2house: 660,
		pay3house: 1600,
		pay4house: 1950,
		pay1hotel: 2300,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 260,
		mortageRemove: 285	
	},
	{
		id: 28,
		type: "waterworks",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 7*sS,
		maxYpos: lS + 8*sS,
		name: "wodociągi",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		cost: 300,
		mortage: 150,
		mortageRemove: 165
	},
	{
		id: 29,
		idCity: 17,
		type: "city",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 8*sS,
		maxYpos: lS + 9*sS,
		country: "sweden",
		name: "sztokholm",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 560,
		payNoHouse: 50,
		pay1house: 240,
		pay2house: 720,
		pay3house: 1700,
		pay4house: 2050,
		pay1hotel: 2400,
		cost1house: 300,
		cost1hotel: 300,
		mortage: 280,
		mortageRemove: 310	
	},
	{
		id: 30,
		type: "go to prison",
		minXpos: lS + 9*sS,
		maxXpos: 2*lS + 9*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "idziesz do wiezienia"
	},
	{
		id: 31,
		idCity: 18,
		type: "city",
		minXpos: cw - lS - 1*sS,
		maxXpos: cw - lS - 0*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		country: "rfn",
		name: "frankfurt",
		propertyId: -1,
		property: "nie",
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 600,
		payNoHouse: 55,
		pay1house: 260,
		pay2house: 780,
		pay3house: 1900,
		pay4house: 2200,
		pay1hotel: 2550,
		cost1house: 400,
		cost1hotel: 400,
		mortage: 300,
		mortageRemove: 330	
	},
	{
		id: 32,
		idCity: 19,
		type: "city",
		minXpos: cw - lS - 2*sS,
		maxXpos: cw - lS - 1*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		country: "rfn",
		name: "kolonia",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 600,
		payNoHouse: 55,
		pay1house: 260,
		pay2house: 780,
		pay3house: 1900,
		pay4house: 2200,
		pay1hotel: 2550,
		cost1house: 400,
		cost1hotel: 400,
		mortage: 300,
		mortageRemove: 330	
	},
	{
		id: 33,
		type: "blue chance",
		minXpos: cw - lS - 3*sS,
		maxXpos: cw - lS - 2*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "szansa niebieska"
	},
	{
		id: 34,
		idCity: 20,
		type: "city",
		minXpos: cw - lS - 4*sS,
		maxXpos: cw - lS - 3*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		country: "rfn",
		name: "bonn",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 640,
		payNoHouse: 60,
		pay1house: 300,
		pay2house: 900,
		pay3house: 2000,
		pay4house: 2400,
		pay1hotel: 2800,
		cost1house: 400,
		cost1hotel: 400,
		mortage: 320,
		mortageRemove: 350	
	},
	{
		id: 35,
		idRailways: 4,
		type: "railways",
		minXpos: cw - lS - 5*sS,
		maxXpos: cw - lS - 4*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "koleje wschodnie",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		cost: 400,
		pay1line: 50,
		pay2line: 100,
		pay3line: 200,
		pay4line: 400,
		mortage: 200,
		mortageRemove: 220
	},
	{
		id: 36,
		type: "red chance",
		minXpos: cw - lS - 6*sS,
		maxXpos: cw - lS - 5*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "szansa czerwona"
	},
	{
		id: 37,
		idCity: 21,
		type: "city",
		minXpos: cw - lS - 7*sS,
		maxXpos: cw - lS - 6*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		country: "austria",
		name: "insbruck",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 700,
		payNoHouse: 70,
		pay1house: 350,
		pay2house: 1000,
		pay3house: 2200,
		pay4house: 2600,
		pay1hotel: 3000,
		cost1house: 400,
		cost1hotel: 400,
		mortage: 350,
		mortageRemove: 385	
	},
	{
		id: 38,
		type: "tax to pay",
		minXpos: cw - lS - 8*sS,
		maxXpos: cw - lS - 7*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "podatek od wzbogacenia"
	},
	{
		id: 39,
		idCity: 22,
		type: "city",
		minXpos: cw - lS - 9*sS,
		maxXpos: cw - lS - 8*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		country: "austria",
		name: "wiedeń",
		property: "nie",
		propertyId: -1,
		isMortage: "nie",
		house: 0,
		hotel :0,
		cost: 800,
		payNoHouse: 100,
		pay1house: 400,
		pay2house: 1200,
		pay3house: 2800,
		pay4house: 3400,
		pay1hotel: 4000,
		cost1house: 400,
		cost1hotel: 400,
		mortage: 400,
		mortageRemove: 440	
	},
	{
		id: 40,
		type: "start",
		minXpos: cw - 2*lS - 9*sS,
		maxXpos: cw - lS - 9*sS,
		minYpos: lS + 9*sS,
		maxYpos: 2*lS + 9*sS,
		name: "start"
	}
]