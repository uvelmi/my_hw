// task-1

let password = "пароль";
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
	console.log('Пароль введен верно!');
} else {
	console.log('Пароль введен неправильно!');
}

// task-2

let c = 7;
if (c > 0 && c < 10){
	console.log('Верно');
} else {
	console.log('Неверно');
}

// task-3
let d = 4;
let e = 191;
if (d > 100 || e > 100){
	console.log('Верно');
} else {
	console.log('Неверно');
}

// task-4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number(a);
b = Number(b);
alert(a + b);

// task-5
let monthNumber = prompt('Введите номер месяца');
	switch (monthNumber) {
		case '1':
		case '2':
		case '12':
			console.log('Зима')
			break;
		case '3':
		case '4':
		case '5':
			console.log('Весна')
			break;
		case '6':
		case '7':
		case '8':
			console.log('Лето')
			break;
		case '9':
		case '10':
		case '11':
			console.log('Осень')
			break;
		default:
			console.log("Введите значение от 1 до 12! Неправильный номер!");
		}

	// task-7

let num = prompt('Пожалуйста, введите любое число');
	// Добавить проверку: является ли введенное значение числом.
if (!isNaN(num)) {
	if (num % 2 === 0) {
		alert('Число четное!');
	} else {
		alert('Число нечетное');
	}
} else {
	alert('Некорректное число!')
}

// task-8 - 9

let clientOS = 0;
let deviceYear = 2015;

if (clientOS === 0 && deviceYear < 2015) {
	console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 0 && deviceYear >= 2015) {
	console.log("Установите приложение для iOS по ссылке");
} else if (clientOS === 1 && deviceYear < 2015) {
	console.log("Установите облегченную версию приложения для Android по ссылке");
} else if (clientOS === 1 && deviceYear >= 2015) {
	console.log("Установите приложение для Android по ссылке");
} else {
	console.log("Неподдерживаемая операционная система");
}