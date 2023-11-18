// task 1
let str = "How are you?";
console.log(str.toUpperCase());

// task 2
function searchStart(arr, str) {
	let result = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].toLowerCase().startsWith(str.toLowerCase())) {
		result.push(arr[i].toLowerCase());
		}
	}
	return result;
	}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
// task 3
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);
// task 4
let arrOfNumbers = [52, 53, 49, 77, 21, 32];
let maxNumber = Math.max(...arrOfNumbers);
let minNumber = Math.min(...arrOfNumbers);

console.log(maxNumber);
console.log(minNumber);

// task 5
function getRandomNumber() {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log(randomNumber);
}
getRandomNumber() 

// task 6
function getRandomArrNumbers(num) {
	var length = Math.floor(num / 2);
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random() * (num + 1)));
	}
	return arr;
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);


// task 7
function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
console.log(randomInteger(10, 17));

// task 8
const days1 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months1 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let myDate1 = new Date(); 
let fullDate1 = "Сегодня: " + myDate1.getDate() + " " + months1[myDate1.getMonth()] + " " + myDate1.getFullYear() + " года";
console.log(fullDate1);

// task 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// task 10
const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let myDate = new Date();
let hours = myDate.getHours();
let minutes = myDate.getMinutes();
let seconds = myDate.getSeconds();

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " года";
let fullTime = `Время: ${hours}:${minutes}:${seconds}`;

console.log(fullDate);
console.log(fullTime);