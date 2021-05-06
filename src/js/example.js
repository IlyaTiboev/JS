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

incr++; /* оператор прибавления */
decr--; /* оператор отнимания */

console.log(132%17); /* показывает остаток после деления 132 на 17 */

console.log(2*4 == 8); /* оператор равенства */
console.log(2*4 === 8); /* оператор строгого равенства */

&& /* оператор И */
|| /* оператор ИЛИ */

! /* оператор отрицания */