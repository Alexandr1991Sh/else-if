// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let num = +inp1.value;
//     // if (num >= 18 && num < 50) {
//     //     console.log('Welcom');
//     // }
//     // else if (num > 50) {
//     //     console.log('Ты точно сюда')
//     // }
//     // else {
//     //     console.log('Ты не пройдёшь');
//     // }


//     switch (num) {
//         case 18:
//             result.innerHTML = 'Welcom'
//             break;
//         case 50:
//             result.innerHTML = 'Ты точно сюда?'
//             break;
//         default:
//             result.innerHTML = 'Exxy'
//     }
// }
// Task 1
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// myFn = () => {
//     let num = inp1.value;
//     if (num != 4) {
//         result.innerHTML = true;
//     }
//     else {
//         result.innerHTML = false;
//     }
// }

// btn1.addEventListener('click', myFn);

// Task 2
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// let a21 = 211;
// let a22 = 225;

// btn1.onclick = () => {
//     if (a21 > a22) {
//         result.innerHTML = a21;
//     }
//     else if (a21 < a22) {
//         result.innerHTML = a22;
//     }
// }

// Task 3
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = inp1.value;
//     let b = inp2.value;

//     if (a < b) {
//         result.innerHTML = b;
//     }
//     else {
//         result.innerHTML = a;
//     }
//     inp1.value = ' ';
//     inp2.value = ' ';
// }

// Task 4
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = inp2.value;

//     if (a < 0) {
//         result.innerHTML = 'm';
//     }
//     else if (a == 0) {
//         result.innerHTML = 0;
//     }
//     else {
//         result.innerHTML = 1;
//     }
// }


// Task 5
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = inp2.value;

//     if (a % 2) {
//         result.innerHTML = 'чётный'
//     }
//     else if (a == 0) {
//         result.innerHTML = 'чётный'
//     }
//     else if (a != 0) {
//         result.innerHTML = 'не чётный'
//     }
//     else {
//         result.innerHTML = 'не чётный'
//     }

// }

// // Task 6
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = inp1.value;
//     let b = inp2.value;

//     result.innerHTML = Math.pow(a, b);
// }

// // Task 7
// let select = document.querySelector('.select');
// let option = document.querySelector('.option');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = option.value;

// if ( a == 1) {
//     result.innerHTML = 'one';
// }


// switch (a) {
//     case 1:
//         result.innerHTML = 'one';
//         break;
//     case 2:
//         result.innerHTML = 'two';
//         break;
//     case 3:
//         result.innerHTML = 'three';
//     default:
//         result.innerHTML = 'Exxy';
// }
// }

// Task 8
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let num = +inp1.value;

//     if (num >= 1 && num < 32) {
//         result.innerHTML = 1;
//     }
//     else if (num >= 33 && num < 43) {
//         result.innerHTML = 2;
//     }
//     else if (num >= 44 && num < 66) {
//         result.innerHTML = 3;
//     }
//     else {
//         result.innerHTML = 0;
//     }
// }

// // Task 9
// let select = document.querySelector('.select');
// let option = document.querySelector('.option');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = select.value;

//     if (a == 1) {
//         result.innerHTML = 1;
//     } else if (a == 2) {
//         result.innerHTML = 2;
//     } else if (a == 3) {
//         result.innerHTML = 3;
//     }
// }

// // Task 10
// let inp1 = document.querySelector('.inp1');
// let btn1 = document.querySelector('.btn1');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = inp1.value;
//     let b = a * 5;
//     console.log(typeof (b));
// }

// Task 11
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn1 = document.querySelector('.btn1');
// let select = document.querySelector('.select');
// let option = document.querySelector('.option');
// let result = document.querySelector('.result');

// btn1.onclick = () => {
//     let a = +inp1.value;
//     let b = +inp2.value;

//     if (select.value == '-') {
//         result.innerHTML = a - b;
//     }
//     else if (select.value == '+')
//         result.innerHTML = a + b;
// }

// Task

let btn1 = document.querySelector('.btn1');
let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
let select3 = document.querySelector('.select3');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let result = document.querySelector('.result');

btn1.onclick = () => {
    let num1 = select1.value;
    let num2 = select2.value;

    if (select3.value == '&&') {
        result.innerHTML = num1 && num2;
    }
    else if (select3.value == '||') {
        result.innerHTML = num1 || num2;
    }
}