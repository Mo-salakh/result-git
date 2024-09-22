
console.log(a);
var a;
a = 10;
console.log(a);



console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof (() => {}))
console.log(typeof NaN)
console.log((() => {}) === (() => {}));



console.log(true && true);
console.log(false || true);
console.log(true || true);
console.log(false && true);
console.log(50 >= 50);



// Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].

// Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.

// Выведите оба массива в консоль.


let arr = [1, 10, 15, -100, -23, 19, 15032];
let newArr = [];

for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 1.25)
}

console.log(arr);
console.log(newArr);



// Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

// Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

function sayHello(name) {
    return name ? console.log('Hello,' + name) : console.log('Hello, someone');
}

sayHello()
sayHello('salakh')

function calc(a, b, operation) {
   switch(operation) {
    case '+' : {
        return a + b
    }
    case '-' : {
        return a - b
    }
    case '*' : {
        return a * b
    }
    case '/' : {
        return a / b
    }
    default :
    return 'неправильно указана единица'
   }
}

console.log(calc(2, 10, '2'))