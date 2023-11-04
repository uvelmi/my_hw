// task-1 (corrected the task)

let a = 10;
alert(a);
a = 20;
alert(a);

// task-2
const firstIphone = '2007 год - год выпуска первого iPhone!';
alert(firstIphone);

// task-3
const jsCreator = 'Brendan Eich - создатель языка JavaScrip!';
alert(jsCreator);

// task-4
let age = 10;
let sum = 2;
alert(age + sum);
alert(age - sum);
alert(age * sum);
alert(age / sum);

// task-5 (corrected the task)

let num = 2;
let result = num**5;
alert(result);

// task-6 (corrected the task)
let a1 = 9;
let b = 2;
let result1 = a1 % b;
alert(result1);

// task-7
let num1 = 1;
num1 += 5;
num1 -= 3;
num1 *= 7;
num1 /= 3;
num1 += 1;
num1 -= 1;
alert(num1);
// task-8

let age1 = prompt('Сколько вам лет?');
alert(age1);
// task-9.0-9.9  (corrected the task)
const user = {
	name: 'Sam',
	age: 12,
	isAdmin: true
};
user["city of residence"] = 'true';
user.age = 20;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);

// task-9.2

let greeting = 'Привет';
let name2 = prompt('Введите ваше имя');
alert(`${greeting}, ${name2}!`);