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

/* 2 pole - pole parking */

function createFieldGrafikOnBoard(imageName, xPos, yPos) {
	
	let image = new Image();
	image.src = 'images/' + imageName + '.jpg';
	console.log(image.src);
	image.onload = function() {
		ctx.drawImage(image, xPos, yPos, 0.8*sS, 0.8*sS)
	}
}

createFieldGrafikOnBoard("parking",lS/10, ch-(lS + 3.9*sS));
createFieldGrafikOnBoard("kolejepoludniowe", lS/10, ch-(lS + 4.9*sS));






/* napis */
// kolor
ctx.fillStyle = 'black';
//zapamiętanie płaszczyzny
ctx.save();
//przesunięcie do 90% środka środka 2 pola
ctx.translate(lS * 0.80, lS+5.5*sS);
//obrócenie płaszczyzny o 90 stopni
ctx.rotate(90 * Math.PI/180);
// czcionka
ctx.font = smallFont + "pt Verdana";
//przesunięcie napisu na środek względniając jego długość (7 liter) i szerokość (1 litera)
ctx.fillText("PARKING",0 - (7*smallFont)/2, 0 + smallFont/2);
//przywrócenie plaszczyzny
ctx.restore();

/* 5 pole koleje południowe */

/* napis */
// kolor
ctx.fillStyle = 'black';
//zapamiętanie płaszczyzny
ctx.save();
//przesunięcie do 90% środka środka 2 pola
ctx.translate(lS * 0.80, lS+4.5*sS);
//obrócenie płaszczyzny o 90 stopni
ctx.rotate(90 * Math.PI/180);
// czcionka
ctx.font = smallFont + "pt Verdana";
//przesunięcie napisu na środek względniając jego długość (6 liter - dłuższe słowo) i wysokosć (1 litera)
ctx.fillText("KOLEJE",0 - (6*smallFont)/2, 0 + smallFont/2);
//przesunięcie napisu na środek względniając jego długość (10 liter - dłuższe słowo), wysokosć (1 litera) oraz położenie pod poprzednim napisem
ctx.fillText("POŁUDNIOWE",0 - (10*smallFont)/2, 0 + (smallFont/2)*4);
//przywrócenie plaszczyzny
ctx.restore();