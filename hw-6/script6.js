// task 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 0) break;
console.log(numbs[i]);
}

// task 2
const numbs2 = [1, 5, 4, 10, 0, 3];
	console.log(numbs2.indexOf(4));

// task 3
let numbs3 = ['1', '3', '5', '10', '20'];
	numbs3 = numbs3.join('');
	console.log(numbs3);

// task 4
let arr2 = [1, 1, 1];
for (let item of arr2) {
	console.log(arr2);
}
// task 5
let numbers = [1, 1, 1];
numbers.push(2, 2, 2);
console.log(numbers);

// task 6
let numbers2 = [9, 8, 7, 'a', 6, 5];
numbers2 = numbers2.sort();
let removed = numbers2.pop()
console.log(numbers2);

// task 7
let number = [9, 8, 7, 6, 5];
let userNumber = parseInt(prompt("Угадай число"));
if (number.includes(userNumber)) {
	alert("Угадал");
} else {
	alert("Не угадал");
}

// task 8
let letters = 'abcdef';
let arrayLetters = letters.split('');
arrayLetters.reverse();
arrayLetters = arrayLetters.join('');
console.log(arrayLetters);

// task 9
const array = [[1, 2, 3],[4, 5, 6]];
const flatArray = array.flat();
console.log(flatArray);

// task 10
const arr = [2, 4, 6, 1, 9, 7, 10, 3, 5, 8];
for (let i = 0; i < arr.length - 1; i++) {
const sum = arr[i] + arr[i + 1];
console.log(sum);
}
// task 11
function enterNumbers(arr) {
	return arr.map(number => number * number);
}
console.log(enterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// task 12
const getLengthWords = array => array.map(str => str.length);
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

// task 13
function filterPositive(array) {
let negativeArray = array.filter(i => i < 0);
	return negativeArray;
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


// task 14
const array2 = [];
const evenArray = [];
	for (let i = 0; i < 10; i++) {
	const randomNumber = Math.floor(Math.random() * 11);
	array2.push(randomNumber);
}

for (let i = 0; i < array2.length; i++) {
	if (array2[i] % 2 === 0) {
	evenArray.push(array2[i]);
	}
}

console.log("Исходный массив:", array2);
console.log("Массив с четными значениями:", evenArray);

// task 15
let arr1 = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
	arr1.push(Math.floor(Math.random() * 10) + 1);
	sum += arr1[i];
}
let average = sum / arr1.length;
console.log(average);