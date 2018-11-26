/* Canvas */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/* szerokość i wysokość */
canvas.width = 800;
canvas.height = 800;

/* skróty */
const cw = canvas.width;
const ch = canvas.height;

/*plansza tło */
let backgroundColor = "palegreen";

/* rysowanie planszy - tło*/
ctx.fillStyle = backgroundColor;
ctx.fillRect(0,0,cw,ch);

