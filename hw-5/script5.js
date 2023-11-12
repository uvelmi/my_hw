// task 1
function getNumber(numOne, numTwo) {
	if (numOne <= numTwo) {
		return numOne;
	} else {
		return numTwo;
	}
}
console.log(getNumber(8, 4));
console.log(getNumber(6, 6));
console.log(getNumber(16, 12));

// task 2 added =
function checkNumber(n) {
	return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
checkNumber(9);

// task 3 corrected
function printNumber(n) {
	let result = n * n;
	console.log(result);
}
printNumber(10);


function printNumber2(n) {
	let result = n * n;
	return result;
}
printNumber2(3);

// task 4 corrected
function showAnwer() {
	let age = prompt('Сколько тебе лет?');
	age = Number(age);
	if (age <= 12 && age >= 0) {
		alert('Привет, друг!');
	}else if (age < 0) {
		alert('Вы ввели неправильное значение!');
	}else {
		alert('Добро пожаловать!');
	}
}
const myAnswer = showAnwer();


// task 5 corrected
function multiplyNumbers(num1, num2) {
	if (isNaN(num1) || isNaN(num2)) {
		return 'Одно или оба значения не являются числом';
	} else {
		return (num1) * (num2);
	}
}
console.log(multiplyNumbers(2, 3));
console.log(multiplyNumbers(2, 'b'));

// task 6
function cubeNumber() {
	let number = prompt("Введите число:");
	if (isNaN(number)) {
		return "Переданный параметр не является числом";
	} else {
		let cube = Math.pow(number, 3);
		return number + " в кубе равняется " + cube;
	}
}
console.log(cubeNumber()); 
console.log(cubeNumber()); 
console.log(cubeNumber()); 

// task 7 corrected

function getCircleArea() {
	return 3.14 * this.radius * this.radius;
}
function getCirclePerimeter() {
	return this.radius * 2 * 3.14;
}

const circle1 = {
	radius: 11,
	getArea: getCircleArea,
	getPerimeter: getCirclePerimeter,
};

const circle2 = {
	radius: 7,
	getArea: getCircleArea,
	getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

