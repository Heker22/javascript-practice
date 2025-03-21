/*practice functions 17/03/25*/

/*Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).*/

/*1
const hello2 = function (name) {
     

    console.log(`Hello ${name}`) 
} ;


hello2('Matviy') ;
*/


/*2

/*Напишіть функцію mul(n, m), яка приймає два аргументи і повертає  суму цих аргументів. Перевірте її роботу.

const mul = function(n , m) {

    console.log( n * m)

};

mul(10,8) ;

*/



/*3*/

/*Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
Myaveragescore: A (якщо середня оцінка від 91 до 100)
My average score: B (якщо середня оцінка від 81 до 90)
My average score: C (якщо середня оцінка від 71 до 80)
My average score: D (якщо середня оцінка від 70 і менше)
Для перевірки:
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));*/

/*
const myAverageScore = function (array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i]
    };


    let sum = total / array.length;

    let grade;

    if (sum >= 91) {

        grade = 'A';
    } else if (sum >= 81) {

        grade = 'B';

    } else if (sum >= 71) {

        grade = 'C';

    } else {

        grade = 'D';

    };

    return `My average score: ${grade}    `


};


console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));


*/



/*callbacks



const print = function (message ){

    console.log(message)
};


const order = function (callback ){

    const string = 'Hello';
    console.log(message)
    callback(string)//Hello
};


order(print);


/*2

function greet (name, callback ){

    console.log('Hello' + name);
    callback();
};


function sayGoodbye(){

    console.log('Goodbye!')
};

greet ('Matviy', sayGoodbye)


*/

/*3
  

const repeat = function (n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }

}

repeat(5);
repeat(20);
repeat(2);
*/


const print = function ( value ){
    console.log(value);
};


const pretty = function (value){
    console.log('Logging value:', value)

}

const repeat = function ( n, action){
    for ( let i = 0; i < n; i++ ){
        action(i)
    }
}

repeat(3,pretty)