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
let arrOfNumbers = [
	52, 53, 49, 77, 21, 32,
];
let maxNumber = (a, b) => {
	return a > b ? a : b;
},
	minNumber = (a, b) => {
		return a < b ? a : b
	};
console.log(arrOfNumbers.reduce(maxNumber));
console.log(arrOfNumbers.reduce(minNumber));

// task 5
function getRandomInt(minValue, maxValue) {
	return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(1, 10));

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
const months1 = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate1 = new Date(); 
let fullDate1 = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " года";
console.log(fullDate1);

// task 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// task 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
const minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
const seconds = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear();
let fullTime = "Время: " + hours[myDate.getHours()] + ":" + minutes[myDate.getMinutes()] + ":" + seconds[myDate.getSeconds()];

console.log(fullDate);
console.log(fullTime);