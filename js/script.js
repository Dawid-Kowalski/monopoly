/* canvas */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/* szerokość i wysokość */
canvas.width = 800;
canvas.height = 800;

/* skróty wysokości i szerokości*/
const cw = canvas.width;
const ch = canvas.height;

/* wielkości pól */
const longSide = 100;
const smallSide = (cw - longSide*2)/9; // po odjęciu 2 szerokości kwadratów w rogach na planszy musi się zmieścić 9 pól

/* skróty wielkości pól */
const lS = longSide;
const sS = smallSide;

const smallFont = sS / 11;


/*plansza tło */
let backgroundColor = "palegreen";

/* kolory państw */
let greeceColor = "yellow";
let italyColor = "red";
let spainColor = "blue";
let englandColor = "orange";
let beneluxColor = "green";
let swedenColor = "purple";
let austriaColor = "brown";
let rfnColor = "black";

/* rysowanie planszy - tło*/
ctx.fillStyle = backgroundColor;
ctx.fillRect(0,0,cw,ch);


/* rysowanie pól w rogach */

/* lewy górny */  
ctx.fillStyle = "white";
ctx.fillRect(0, 0, lS, lS);
ctx.strokeRect(0, 0, lS, lS);

/* prawy górny */
ctx.fillStyle = "white";
ctx.fillRect(cw-lS ,0, lS, lS);
ctx.strokeRect(cw-lS, 0, lS, lS);

/* lewy dolny */
ctx.fillStyle = "white";
ctx.fillRect(0, ch-lS, lS, lS);
ctx.strokeRect(0, ch-lS, lS, lS);

/* prawy dolny */
ctx.fillStyle = "white";
ctx.fillRect(cw - lS, ch-lS, lS, lS);
ctx.strokeRect(cw - lS, ch-lS, lS, lS);


/* rysowanie mniejszych pól */

/* górne */
for(let i=0;i<9;i++){
	ctx.fillStyle = "white";
	ctx.fillRect(lS + i*sS, 0, sS, lS);
	ctx.strokeRect(lS + i*sS, 0, sS, lS);
}

/* prawe */
for(let i=0;i<9;i++){
	ctx.fillStyle = "white";
	ctx.fillRect(cw - lS, lS + i*sS, lS, sS);
	ctx.strokeRect(cw - lS, lS + i*sS, lS, sS);
}

/* dolne */
for(let i=0;i<9;i++){
	ctx.fillStyle = "white";
	ctx.fillRect(lS + i*sS, ch-lS, sS, lS);
	ctx.strokeRect(lS  + i*sS, ch-lS, sS, lS);
}

/* lewe */
for(let i=0;i<9;i++){
	ctx.fillStyle = "white";
	ctx.fillRect(0,lS + i*sS, lS, sS);
	ctx.strokeRect(0,lS +i*sS, lS, sS);
}

/* napis "START na 1 polu" */

/* wielkość 1/5 pola, przesunięte o 10% w prawo i 40% w dół w stosunku do początku pola */
ctx.fillStyle = 'black';
ctx.font = lS/5 + "pt Verdana";
ctx.fillText("START",lS/10, ch-(0.4*lS));


/* funkcja do umieszczania obrazków pól */
function createFieldGrafikOnBoard(imageName, xPos, yPos) {
	
	let image = new Image();
	image.src = 'images/' + imageName + '.jpg';
	image.onload = function() {
		ctx.drawImage(image, xPos, yPos, 0.8*sS, 0.8*sS)
	}
}

/* funkcja do umieszczania tekstów pól */
function createFieldTextOnBoard(xPos, yPos, rotate, firstTextLine, secondTextLine, isTwoLines) {
	ctx.fillStyle = 'black';
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate(rotate * Math.PI/180);
	ctx.font = smallFont + "pt Verdana";
	ctx.fillText(firstTextLine.toUpperCase(),0 - (firstTextLine.length*smallFont)/2, 0 + smallFont/2);
	if(isTwoLines){
		ctx.fillText(secondTextLine.toUpperCase(),0 - (secondTextLine.length*smallFont)/2, 0 + (smallFont/2)*4);
	}
	ctx.restore();
}

/* parking */
createFieldGrafikOnBoard("parking", lS/10, ch-(lS + 3.9*sS));
createFieldTextOnBoard(lS * 0.8, lS+5.5*sS, 90, "parking", "" , false);

/* koleje południowe */
createFieldGrafikOnBoard("kolejepoludniowe", lS/10, ch-(lS + 4.9*sS));
createFieldTextOnBoard(lS * 0.8, lS+4.5*sS, 90, "koleje", "południowe" , true);

/* elektrownia */
createFieldGrafikOnBoard("elektrownia", lS + 1.1*sS, 0.2*sS);
createFieldTextOnBoard(lS + 1.45*sS, lS*0.8, 180, "elektrownia", "" , false);

/* koleje zachodnie */
createFieldGrafikOnBoard("kolejezachodnie", lS + 4.1*sS, 0.2*sS);
createFieldTextOnBoard(lS + 4.45*sS, lS*0.8, 180,  "koleje", "zachodnie" , true);

/* koleje północne */
createFieldGrafikOnBoard("kolejepolnocne", cw - 0.65*lS, lS + 4.1*sS);
createFieldTextOnBoard(cw - 0.8*lS, lS + 4.5*sS, 270,  "koleje", "północne" , true);

/* wodociągi */
createFieldGrafikOnBoard("wodociagi", cw - 0.65*lS, lS + 7.1*sS);
createFieldTextOnBoard(cw - 0.8*lS, lS + 7.5*sS, 270,  "wodociągi", "" , false);

/* koleje  wschodnie */
createFieldGrafikOnBoard("kolejewschodnie", lS + 4.1*sS, ch - 0.65*lS);
createFieldTextOnBoard(lS+4.5*sS, ch - 0.8*lS, 0,  "koleje", "wschodnie" , true);

/* podatek */
createFieldGrafikOnBoard("podatek", lS + 1.1*sS, ch - 0.65*lS);
createFieldTextOnBoard(lS+1.5*sS, ch - 0.8*lS, 0, "podatek", "" , false);


/* rysowanie górnych kolorów państw */
for(i=0; i<9; i++){
	ctx.fillStyle = spainColor;
	if(i==1 || i ==4 || i==6){
		continue;
	}
	if(i>4){
		ctx.fillStyle = englandColor;
	}
	ctx.fillRect(lS + sS * i ,0.8*lS, sS, 0.2*lS);
}

/*rysowanie prawych kolorów państw */
for(i=0; i<9; i++){
	ctx.fillStyle = beneluxColor;
	if(i==1 || i ==4 || i==7){
		continue;
	}
	if(i>4){
		ctx.fillStyle = swedenColor;
	}
	ctx.fillRect(cw - lS,lS + sS * i, 0.2*lS, sS);
}

/*rysowanie dolnych kolorów państw */
for(i=0; i<9; i++){
	ctx.fillStyle = rfnColor;
	if(i==1 || i ==3 || i==4 || i == 6 ){
		continue;
	}
	if(i>2){
		ctx.fillStyle = austriaColor;
	}
	ctx.fillRect(lS +  sS * i, cw-lS, sS,  0.2*lS);
}

/*rysowanie prawych kolorów państw */
for(i=0; i<9; i++){
	ctx.fillStyle = greeceColor;
	if(i==1 || i ==3 || i==4 || i == 6 ){
		continue;
	}
	if(i>2){
		ctx.fillStyle = italyColor;
	}
	ctx.fillRect(0.8*lS ,ch - (lS+sS) -  sS * i,0.2*lS, sS);
}

/* grecja państwa */
createFieldTextOnBoard(0.7*lS, ch - lS - 0.5*sS, 90, "ateny", "120" , true);
createFieldTextOnBoard(0.7*lS, ch - lS - 2.5*sS, 90, "saloniki", "120" , true);

/* włochy państwa */
createFieldTextOnBoard(0.7*lS, ch - lS - 5.5*sS, 90, "neapol", "200" , true);
createFieldTextOnBoard(0.7*lS, ch - lS - 7.5*sS, 90, "mediolan", "200" , true);
createFieldTextOnBoard(0.7*lS, ch - lS - 8.5*sS, 90, "rzym", "240" , true);

/* hiszpania państwa */
createFieldTextOnBoard(lS + 0.5*sS, 0.7*lS, 180, "barcelona", "280" , true);
createFieldTextOnBoard(lS + 2.5*sS, 0.7*lS, 180, "sewilla", "280" , true);
createFieldTextOnBoard(lS + 3.5*sS, 0.7*lS, 180, "madryt", "320" , true);

/* anglia państwa */
createFieldTextOnBoard(lS + 5.5*sS, 0.7*lS, 180, "liverpool", "360" , true);
createFieldTextOnBoard(lS + 7.5*sS, 0.7*lS, 180, "glasgow", "360" , true);
createFieldTextOnBoard(lS + 8.5*sS, 0.7*lS, 180, "londyn", "400" , true);

/* benelux państwa */
createFieldTextOnBoard(cw - 0.7*lS, lS + 0.5*sS, 270, "rotterdam", "440" , true);
createFieldTextOnBoard(cw - 0.7*lS, lS + 2.5*sS, 270, "bruksela", "440" , true);
createFieldTextOnBoard(cw - 0.7*lS, lS + 3.5*sS, 270, "amsterdam", "480" , true);

/* szwecja państwa */
createFieldTextOnBoard(cw - 0.7*lS, lS + 5.5*sS, 270, "malmo", "520" , true);
createFieldTextOnBoard(cw - 0.7*lS, lS + 6.5*sS, 270, "goteborg", "520" , true);
createFieldTextOnBoard(cw - 0.7*lS, lS + 8.5*sS, 270, "sztokholm", "520" , true);

/* austria państwa */
createFieldTextOnBoard(lS + 0.5*sS, ch - 0.7*lS, 0, "wiedeń", "800" , true);
createFieldTextOnBoard(lS + 2.5*sS, ch - 0.7*lS, 0, "amsterdam", "700" , true);

/* rfn państwa */
createFieldTextOnBoard(lS + 5.5*sS, ch - 0.7*lS, 0, "bonn", "640" , true);
createFieldTextOnBoard(lS + 7.5*sS, ch - 0.7*lS, 0, "kolonia", "600" , true);
createFieldTextOnBoard(lS + 8.5*sS, ch - 0.7*lS, 0, "frankfurt", "600" , true);

/* wiezienie */
createFieldGrafikOnBoard("wiezienie", 0.2*lS, 0.2*lS);
createFieldTextOnBoard(lS * 0.5, lS*0.8, 0, "wiezienie", "" , false);

/* parking bezpłatny */
createFieldGrafikOnBoard("parkingbezplatny", cw - 0.8*lS, 0.2*lS);
createFieldTextOnBoard(cw - lS*0.4, lS*0.8, 0, "parking bezplatny", "" , false);

