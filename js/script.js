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

const smallFont = smallSide / 11;
const bigFont = smallSide / 4;
const veryBigFont = smallSide;


/*plansza tło */
let backgroundColor = "palegreen";

/*znak zapytania kolor drugi */
let secondQuestionMarkColor = "red";
let firstQuestionMarkColor = "blue";

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
function createGrafikOnBoard(imageName, xPos, yPos) {
	
	let image = new Image();
	image.src = 'images/' + imageName + '.jpg';
	image.onload = function() {
		ctx.drawImage(image, xPos, yPos, 0.8*sS, 0.8*sS)
	}
}

	/* funkcja do umieszczania tekstów pól */
function createTextOnBoard(xPos, yPos, rotate, fontSize, firstTextLine, secondTextLine, isTwoLines) {
	ctx.fillStyle = 'black';
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate(rotate * Math.PI/180);
	ctx.font = fontSize + "pt Verdana";
	ctx.fillText(firstTextLine.toUpperCase(),0 - (firstTextLine.length * fontSize)/2,0);

	if(isTwoLines){
		ctx.fillText(secondTextLine.toUpperCase(),0 - (secondTextLine.length * fontSize)/2, 0 + (fontSize/2)*4);
	}

	ctx.restore();
}

/* parking */
createGrafikOnBoard("parking", lS/10, ch-(lS + 3.9*sS));
createTextOnBoard(lS * 0.8, lS+5.5*sS, 90, smallFont, "parking", "" ,false);

/* koleje południowe */
createGrafikOnBoard("kolejepoludniowe", lS/10, ch-(lS + 4.9*sS));
createTextOnBoard(lS * 0.8, lS+4.5*sS, 90, smallFont, "koleje", "południowe" ,true );

/* elektrownia */
createGrafikOnBoard("elektrownia", lS + 1.1*sS, 0.2*sS);
createTextOnBoard(lS + 1.45*sS, lS*0.8, 180, smallFont, "elektrownia", "" ,false);

/* koleje zachodnie */
createGrafikOnBoard("kolejezachodnie", lS + 4.1*sS, 0.2*sS);
createTextOnBoard(lS + 4.45*sS, lS*0.8, 180,  smallFont, "koleje", "zachodnie" ,true);

/* koleje północne */
createGrafikOnBoard("kolejepolnocne", cw - 0.65*lS, lS + 4.1*sS);
createTextOnBoard(cw - 0.8*lS, lS + 4.5*sS, 270, smallFont, "koleje", "północne" ,true);

/* wodociągi */
createGrafikOnBoard("wodociagi", cw - 0.65*lS, lS + 7.1*sS);
createTextOnBoard(cw - 0.8*lS, lS + 7.5*sS, 270,  smallFont, "wodociągi", "" ,false);

/* koleje  wschodnie */
createGrafikOnBoard("kolejewschodnie", lS + 4.1*sS, ch - 0.65*lS);
createTextOnBoard(lS+4.5*sS, ch - 0.8*lS, 0,  smallFont, "koleje", "wschodnie" ,true);

/* podatek */
createGrafikOnBoard("podatek", lS + 1.1*sS, ch - 0.65*lS);
createTextOnBoard(lS+1.5*sS, ch - 0.8*lS, 0, smallFont, "podatek", "" ,false);


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
createTextOnBoard(0.7*lS, ch - lS - 0.5*sS, 90, smallFont, "ateny", "120" , true);
createTextOnBoard(0.7*lS, ch - lS - 2.5*sS, 90, smallFont, "saloniki", "120" ,true);

/* włochy państwa */
createTextOnBoard(0.7*lS, ch - lS - 5.5*sS, 90, smallFont, "neapol", "200" , true);
createTextOnBoard(0.7*lS, ch - lS - 7.5*sS, 90, smallFont, "mediolan", "200" ,true);
createTextOnBoard(0.7*lS, ch - lS - 8.5*sS, 90, smallFont, "rzym", "240" , true);

/* hiszpania państwa */
createTextOnBoard(lS + 0.5*sS, 0.7*lS, 180, smallFont, "barcelona", "280" , true);
createTextOnBoard(lS + 2.5*sS, 0.7*lS, 180, smallFont, "sewilla", "280" , true);
createTextOnBoard(lS + 3.5*sS, 0.7*lS, 180, smallFont, "madryt", "320" , true);

/* anglia państwa */
createTextOnBoard(lS + 5.5*sS, 0.7*lS, 180, smallFont, "liverpool", "360" , true);
createTextOnBoard(lS + 7.5*sS, 0.7*lS, 180, smallFont, "glasgow", "360" , true);
createTextOnBoard(lS + 8.5*sS, 0.7*lS, 180, smallFont, "londyn", "400" , true);

/* benelux państwa */
createTextOnBoard(cw - 0.7*lS, lS + 0.5*sS, 270, smallFont, "rotterdam", "440" ,true);
createTextOnBoard(cw - 0.7*lS, lS + 2.5*sS, 270, smallFont, "bruksela", "440" , true);
createTextOnBoard(cw - 0.7*lS, lS + 3.5*sS, 270, smallFont, "amsterdam", "480" , true);

/* szwecja państwa */
createTextOnBoard(cw - 0.7*lS, lS + 5.5*sS, 270, smallFont, "malmo", "520" ,true);
createTextOnBoard(cw - 0.7*lS, lS + 6.5*sS, 270, smallFont,  "goteborg", "520" ,true);
createTextOnBoard(cw - 0.7*lS, lS + 8.5*sS, 270, smallFont,  "sztokholm", "520" ,true);

/* austria państwa */
createTextOnBoard(lS + 0.5*sS, ch - 0.7*lS, 0, smallFont, "wiedeń", "800" ,true);
createTextOnBoard(lS + 2.5*sS, ch - 0.7*lS, 0, smallFont, "amsterdam", "700" ,true);

/* rfn państwa */
createTextOnBoard(lS + 5.5*sS, ch - 0.7*lS, 0, smallFont, "bonn", "640" ,true);
createTextOnBoard(lS + 7.5*sS, ch - 0.7*lS, 0, smallFont, "kolonia", "600" ,true);
createTextOnBoard(lS + 8.5*sS, ch - 0.7*lS, 0, smallFont, "frankfurt", "600" ,true);

/* wiezienie */
createGrafikOnBoard("wiezienie", 0.2*lS, 0.2*lS);
createTextOnBoard(lS * 0.5, lS*0.8, 0, smallFont, "wiezienie", "" , false);

/* parking bezpłatny */
createGrafikOnBoard("parkingbezplatny", cw - 0.8*lS, 0.2*lS);
createTextOnBoard(cw - lS*0.4, lS*0.8, 0, smallFont, "parking bezplatny", "" , false);

/* idziesz do wiezienia */
createGrafikOnBoard("idzieszdowiezienia", cw - 0.8*lS, ch - 0.8*lS);
createTextOnBoard(cw - lS*0.35, ch - lS*0.2, 0, smallFont, "idziesz do wiezienia", "" , false);

function createQuestionmarkOnField(color, xPos, yPos, rotate) {
	ctx.font = veryBigFont + "pt Arial";
	ctx.fillStyle = color;
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate(rotate * Math.PI/180);
	/* uwzględnienie przesunięcia środka - połowa znaku w górę i połowa z 2/3 znaku w lewo) */
	ctx.fillText("?",0 - (2/3*veryBigFont)/2,0 + veryBigFont - veryBigFont/2);
	ctx.restore();
}

createQuestionmarkOnField(firstQuestionMarkColor, lS/2, lS + 7.5*sS, 90);
createQuestionmarkOnField(secondQuestionMarkColor, lS/2, lS + 2.5*sS, 90);
createQuestionmarkOnField(firstQuestionMarkColor, lS + 6.5*sS, lS/2, 180);
createQuestionmarkOnField(secondQuestionMarkColor, cw-lS/2, lS+1.5*sS, 270);
createQuestionmarkOnField(firstQuestionMarkColor, lS+6.5*sS, ch - lS/2, 0);
createQuestionmarkOnField(secondQuestionMarkColor, lS+3.5*sS, ch - lS/2, 0);


/* grecja - napis*/
createTextOnBoard(lS, lS+7.5*sS, 90, bigFont, "grecja", "" , false);

/* włochy - napis*/
createTextOnBoard(lS, lS+2*sS, 90, bigFont, "włochy", "" , false);

/* hiszpania - napis*/
createTextOnBoard(lS+2*sS, lS, 180, bigFont, "hiszpania", "" , false);

/* anglia - napis*/
createTextOnBoard(lS+7*sS, lS, 180, bigFont, "anglia", "" , false);

/* benelux - napis*/
createTextOnBoard(cw - lS, lS + 2*sS, 270, bigFont, "benelux", "" , false);

/* szwecja - napis*/
createTextOnBoard(cw - lS, lS + 7*sS, 270, bigFont, "szwecja", "" , false);

/* rfn - napis*/
createTextOnBoard(lS + 7*sS, lS + 9*sS, 0, bigFont, "rfn", "" , false);

/* austria - napis*/
createTextOnBoard(lS + 1.5*sS, lS + 9*sS, 0, bigFont, "austria", "" , false);