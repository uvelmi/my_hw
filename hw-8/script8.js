// task 1 corrected
const people = [
	{ name: 'Глеб', age: 29 },
	{ name: 'Анна', age: 17 },
	{ name: 'Олег', age: 7 },
	{ name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// task 2 corrected
function isPositive(num) {
	return num > 0;
}
	
function isMale(person) {
	return person.gender === 'male';
}
	
function filter(arr, condition) {
	const filteredArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(condition(arr[i])) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}
	
console.log(filter([3, -4, 1, 9], isPositive));
	
const people1 = [
	{name: 'Глеб', gender: 'male'},
	{name: 'Анна', gender: 'female'},
	{name: 'Олег', gender: 'male'},
	{name: 'Оксана', gender: 'female'}
	];
console.log(filter(people1, isMale));

// task 3

function timer() {
let counter = 0;
let interval = setInterval(function() {
	if (counter >= 10) {
		clearInterval(interval);
	console.log('30 секунд прошло');
} else {
	console.log(new Date());
	counter++;
}
	}, 3000);
}
timer();

// task 4
function delayForSecond(callback) {
	setTimeout(callback, 1000);
}

delayForSecond(function () {
	console.log('Привет, Глеб!');
});

// task 5
function delayForSecond(cb) {
	setTimeout(() => {
		console.log('Прошла одна секунда');
		if(cb) { 	cb(); }
	}, 1000)
}

function sayHi (name) {
	console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));