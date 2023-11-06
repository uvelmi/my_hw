// task 1
let i = 0;
while(i < 2) {
	console.log("Привет");
	i++;
}

// task 2
let i2 = 1;
while(i2 <= 5) {
	console.log(i2);
	i2++;
}

// task 3
let i3 = 7;
while(i3 <= 22) {
	console.log(i3);
	i3++;
}
// task 4
let obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
}
for (let key in obj) {
	alert(`${key} — зарплата ${obj[key]} долларов`);
}

// task 5
let n = 1000;
let num = 0;
while (n > 50) {
	num++;
	n /= 2;
}
alert(n);
alert(num);

// task 6
let friday = 5;
for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
	if ((dayNumber - 1) % 7 + 1 === friday) {
		console.log(`Сегодня пятница, ${dayNumber} -е число. Необходимо подготовить отчет.`)
	}
}
