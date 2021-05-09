"use strict";         /* Строгая запись нового формата ес6 */

/* ТИПЫ ДАННЫХ  */

let number = 4;       /* Число number */

const persone = "Me"; /* строка string */

const bool = true;    /* булиновое значение true/false */

const obj = {         /* свойства объекта  */ 
    name: "Michael",
    age: 25,
    isMarried: false
};

let arr = ["hello.png", 'orange.jpg', 'hey.jpg', {}, []]; /* массив */

const result = confirm("Are you here?"); /* выводит да\нет */
console.log(result);

const answer = prompt("Are you 18 yers old?", "no");   /* выводит строку с введенным словом no */
console.log(answer);

const answers = [];
answers[0] =prompt('What is your name?', '');
answers[1] =prompt('What is your age?', '');
answers[2] =prompt('What is your skin color?', '');

incr++; /* инкримента, оператор прибавления */
decr--; /* декримента, оператор отнимания, отнимает значение */

console.log(132%17); /* показывает остаток после деления 132 на 17 */

console.log(2*4 == 8); /* оператор равенства */
console.log(2*4 === 8); /* оператор строгого равенства */

&& /* оператор И */
|| /* оператор ИЛИ */

! /* оператор отрицания */

/* УСЛОВИЯ */
if (4==9) {
    console.log('Norm');
} else {
    console.log('ne norm');
}

const num = 68;

if (num < 49) {
    console.log('Ne norm');
} else if (num > 60) {
    console.log('Dohua');
} else {
    console.log('norm');
}

/* ТЕРНАРНОЕ УСЛОВИЕ */

(num === 50) ? console.log('norm') : console.log('ne norm');

/* СВИТЧ УСЛОВИЕ только для прямого сравнения*/
const swich = 'net';

switch (swich) {
    case 'net':
        console.log('ne norm');
        break;
    case 'ne znau':
        console.log('ne norm');
        break;
    case 'mozhet bit':
        console.log('norm');
        break;
    default:
        console.log('ne povezlo');
        break;
}

/* ЦИКЛЫ */

// ПРОСТОЙ ЦИКЛ 1
let nom = 50;

while (nom < 55) {
    console.log(nom);
    nom++;
}

// ПРОСТОЙ ЦИКЛ 2
do {
    console.log(nom);
    nom++;
}
while (nom < 55);

// ПРОСТОЙ ЦИКЛ 3
let nim = 50;

for (let i = 1; i < 8; i++) {
    console.log(nim);
    nim++;
}

// ФУНКЦИИ

let nem = 20;

function showFirstMessage(text) {
    let nem = 30;
    console.log(text);
    console.log(nem);
}

showFirstMessage('Ebanoe govno');
console.log(nem);



function calc(a, b) {
    return(a + b);            /* ретерн как окончание функции, после него код не работает */
}

console.log(calc(4, 3));
console.log(calc(8, 15));
console.log(calc(7, 40));


function ret() {
    let nem = 30;
    return nem;
}

const anotherNem = ret();
console.log(anotherNem);

// ФУНКЦИЯ ВЫРАЖЕНИЯ

const logger = function(a, b) {
    return (a + b);
};

console.log(logger (4, 5));


// СТРЕЛОЧНАЯ ФУНКЦИЯ

const cal = (a, b) => a + b;

console.log(cal (4, 4));

// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

const str = 'test';
const array = [1, 3, 6];

console.log(str.toUpperCase()); /* метод для превращения в верхний регистр */
console.log(str[2]);
console.log(array. length); /* ленгс - свойство сроки эррэй */


let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); /* метод для поиска чего-то в строке\числе. при отсутствии дает -1 */


const logg = 'hello bitch';

console.log(logg.slice(6, 11)); /* вырезает кусок  с A до B */
console.log(logg.substring(6, 11)); /* вырезает кусок  с A до B */
console.log(logg.substring(6, 5)); /* вырезает с A заданное количество символов (B) */


const nam = 12.2;
console.log(Math.round(nam)); /* Метод округления */


const tess = '12.2px';
console.log(parseInt(tess)); /* превращает срочку в целое число */
console.log(parseFloat(tess)); /* превращает срочку в натуральное число */

