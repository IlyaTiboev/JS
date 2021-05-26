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


// ФУНКЦИЯ КОЛЛБЭК

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();                               /* Выполнится сначала сэконд, потом ферст, т.к. у ферста задержка */

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();                     /* позволяет выполнять действие только после первого действия */
}

learnJS('JavaScript', function() {
    console.log('I did it!');
});


// ОБЪЕКТЫ

const options = {
    name: 'hui',
    width: 2048,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {       /* Создает метод для объекта, чтобы он умел что-то делать */
        console.log('Test');
    }
};

options.makeTest();

delete options.name;     /* удаляет свойство из объекта */

console.log(options.name);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); /* Способ перебора в объекте */
    }
}

Object.keys(options);   /* выводит все ключи в объекте */
Object.keys(options).length; /* выводит количество ключей в объекте */ 


// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

const option = {
    name: 'hui',
    width: 2048,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {       /* Создает метод для объекта, чтобы он умел что-то делать */
        console.log('Test');
    }
};

option.makeTest();

const {border, bg} = option.colors;      /* вытаскивает свойства объекта в отдельную переменную */


// МАССИВЫ и методы


const arrey = [1, 2, 3, 4, 5];

arrey.pop();     /* удаляет последнее значение из массива */
arrey.push(20);    /* помещает указанное значение в конец массива */

console.log(arrey);

// переберет все элементы массива
for (let i=0; i < arrey.length; i++) {
    console.log(arrey[i]);
}

for (let value of arrey) {        /* метод Как фор ин перебирает элементы массивов, псевдо-, строк */
    console.log(value);
}

                    //  1    2    3              1- значение элемента, 2- номер по порядку, 3- сам массив
arrey.forEach(function(item, f, arrey) {         /*перебирает элементы массивов и назначает каждому элементу код внутри */
    console.log(`${f}: ${item} внутри массива ${arrey}`);
});


const stro = prompt('', '');
const products = stro.split(', ');      /* На основании строк формирует массив */
products.sort();                        /* Сортирует элементы как строки */
console.log(products.join('; '));        /* На основании массива формирует строки */

// Алгоритм для сортировки элементов не как строк
smth.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}

// ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ЗНАЧЕНИЮ

let a = 5,                  /* В примитивах А запишется как 5 и дальше будет отрабатывать по коду */
    b = a;
b = b + 5;

console.log(b);
console.log(a);


const p = {
    a: 5,
    b: 1
};

const c = p;                /* в Р находится ссылка, а не копия переменной Р */

c.a = 10;

console.log(c);
console.log(p);

// ФУНКЦИЯ ДЛЯ КОПИРОВАНИЯ ОБЪЕКТОВ

function copy(mainObj) {                    /* стартуем функцию КОПИ */
    let objCopy = {};                       /* объяв. объект, в который все будет копироваться */

    let key;
    for (key in mainObj) {                  /* стартуем перебор аргумента, где при переборе будут копироваться свойства */
        objCopy[key] = mainObj[key];
    }

    return objCopy;                         /* возвращаем значение объекта */
}

const mem = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newMem = copy(mem);

newMem.a = 10;                      /* Поменяет значение в копии*/
newMem.c.x = 10;                    /* Поменяет значение в двух объектах, так как это поверхностная копия */

console.log(mem);
console.log(newMem);

// ДОБАВЛЕНИЕ СВОЙСТВ ОБЪЕКТА В ДРУГОЙ
const add = {
    d: 16,
    e: 30
};

                // 1       2    3      1 - свойство объекта для копии, 2 - куда копировать, 3 - откуда копировать
console.log(Object.assign(mem, add));

// Копирует свойства объекта add в новый объект copy
const copy = Object.assign({}, add);

// КОПИЯ МАССИВА

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();     /* Вырезает значения МАССИВА */

newArray[1] = 'fuck';
console.log(newArray);
console.log(oldArray);

// ОПЕРАТОР РАЗВОРОТА СПРЭД
const video = ['youtube', 'vimeo', 'coub'],
      blogs = ['wordpress', 'livejournal', 'VK'],
      internet = [...video, ...blogs, 'facebook'];        /* троеточее разворачивает массив */

console.log(internet);


function log(a, b, c ) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nnn = [2, 5, 7];

log(...nnn);                /* Засовывает массив в функцию */


const ar = ['a', 'b'];
const newAr = [...ar];      /* засовывает массив в массив  */

console.log(newAr);


const q = {
    one: 1,
    two: 2
};

const newQ = {...q};        /* Засовывает свойства объекта в другой */
console.log(newQ);


// ПРОТОТИПНО-ОРИЕНТИРОВННОЕ НАСЛЕДОВАНИЕ

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const ivan = Object.create(soldier);      /* Создает объект на основе прототипа */

/* const ivan = {
    health: 100
}; */

// ivan.__proto__ = soldier;        /* произойдет наследование от солдата ивану, устаревший вариант  */

Object.setPrototypeOf(ivan, soldier);      /* произойдет наследование от солдата ивану в динамике, когда уже существует иван*/

ivan.sayHello();


const age = 13;

if (!(age >= 14 && age <= 90)) {
    console.log('Normas');
}


console.log(Boolean(age));



// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
// to string

// 1
console.log(typeof(String(null)));
// 2
console.log(typeof(5 + ''));

const nn = 5;
console.log('httos://vk.com/catalog' + nn);

// to number 

// 1
console.log(typeof(Number("4")));
// 2
console.log(typeof(+'5'));
// 3
console.log(typeof(parseInt('15px', 10)));

//to boolean

// 1
// 0, '', null, undefined, NaN - всe false
// 2
console.log(typeof(Boolean('')));
// 3
console.log(typeof(!!'4'));