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

let greece = "GRECJA";
let italy = "WŁOCHY";
let spain = "HISZPANIA";
let england = "ANGLIA";
let benelux = "BENELUX";
let sweden = "SZWECJA";
let rfn = "RFN";
let austria = "AUSTRIA";

let saloniki = "SALONIKI";
let ateny = "ATENY";
let neapol = "NEAPOL";
let mediolan = "MEDIOLAN";
let rzym = "RZYM";
let barcelona = "BARCELONA";
let sewilla = "SEWILLA";
let madryt = "MADRYT";
let liverpool = "LIVERPOOL";
let glasgow = "GLASGOW";
let londyn = "LONDYN";
let rotterdam = "ROTTERDAM";
let bruksela = "BRUKSELA";
let amsterdam = "AMSTERDAM";
let malmo = "MALMO";
let goteborg = "GOTEBORG";
let sztokholm = "SZTOKHOLM";
let wieden = "WIEDEŃ";
let insbruck = "INSBRUCK";
let bonn = "BONN";
let kolonia = "KOLONIA";
let frankfurt = "FRANKFURT";