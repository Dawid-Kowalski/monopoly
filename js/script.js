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