// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів 
// даного масиву.

function averageNum() {
    let arr = ["afww", "wfwefwf", 2, 3, 4,"afww", "wfwefwf", 5, 6];
    let sum = 0;
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (!isNaN(arr[i])) {
            count += 1;
            sum += arr[i];
        }
        console.log(count);
    }
    return resultAverage = sum / count;
}
let result = averageNum();
console.log(result);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.



function doMath(x, znak, y) {
    if (!isNaN(x) && !isNaN(y)) {
        switch (znak) {
            case "+":
                console.log(result = x + y);
                break;

            case "-":
                console.log(result = x - y);
                break;

            case "*":
                console.log(result = x * y);
                break;

            case "/":
                console.log(result = x / y);
                break;

            case "%":
                console.log(result = x % y);
                break;

            case "^":
                console.log(result = x ^ y);
                break;

            default:
                console.log("Please enter the correct action");
        }
    } else {
        console.log('Please enter the number again');
    
    }
}

let x = +prompt("Enter the first number");
let znak = prompt("Enter the action (+, -, *, /, %, ^)");
let y = +prompt("Enter the second number");
let result;

doMath(x, znak, y);

console.log(`${x} ${znak} ${y} = ${result}`);




// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

const mainArr = prompt('Enter the length of main array :');
const subArr = prompt('Enter the length of internal array :');
const arr = new Array(+mainArr).fill(0)
  .map((_, ind) =>
    new Array(+subArr).fill(0).map((_, i) => prompt(`Enter the element ${i} of internal array : ${ind}`)));
console.log('Your array:' + arr.map(subArr => '\n' + subArr));

// Створити функцію, яка прибирає з рядка всі символи, 
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' 
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteSymb(string, pattern){
 let st_pt = pattern.join('');
 return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
}
console.log(deleteSymb('What is your name?', ['o', 'a', 'e']))