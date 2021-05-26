"use strict";
// const pass = prompt('Ты кто?', 'админ');

// if (pass == 'админ') {
//     const pass2 = prompt('Пароль:', '123');
//     if (pass2 == '123') {
//         alert('Доступ разрешен');
//     } else if (pass2 == null || pass2 == '') {
//         alert('Неверный пароль');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (pass == null || pass == '') {
//     alert('Доступ запрещен');
// } else {
//     alert('Доступ запрещен');
// }

// let ex;

// while (ex == 100 && ex) {
//     ex.prompt("Введите число, большее 100?", 0);
// }


// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
// }

// let browser = 'Edge';

// if(browser == 'Edge') {
//     console.log("You've got the Edge!");
// } else if(browser == 'Chrome' ||
// browser == 'Firefox' ||
// browser ==  'Safari' ||
// browser ==  'Opera') {
//     console.log("Okay we support these browsers too");
// } else {
//     console.log('We hope that this page looks ok!');
// }


const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case (0):
        console.log('Eto 0');
    break;
    case (1):
        console.log('Eto 1');
    break;
    case (2):
    case (3):
        console.log('Eto 2 ili 3');
    break;
}

function checkAge(age) {
      return true (age > 18) || confirm('Родители разрешили?');
    //   return (age > 18) ? true : confirm('Ta zhe shlapa');
  }

  function min (a, b) {
      return (a < b) ? a : b;
  }

  console.log(min(2, 5));


function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');



if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );

}let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );


let user = {
    name: 'John',
    surname: 'Smith',
};

user.name = 'Pete';
delete user.name;
console.log(user);


function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
} 


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let prop in salaries) {
    sum = sum + salaries[prop];
}
console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key]*=2;
        }
    }
}

function sayHi() {
    console.log('privet, ya ' + this.name);
}

let man = {
    name: 'Petya',
    age: 30,
};

let woman = {
    name: 'Nastia',
    age: 32,
};

man.say = sayHi;
woman.say = sayHi;

man.say();


console.log( 0 || "" || 2 || undefined || true || falsе );