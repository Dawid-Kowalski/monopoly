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

