function getSeason() {
	let month = Number(prompt("Введите число: от 1 до 12"));
	
	if (month === 12 || month === 1 || month === 2) {
		alert('Зима');
	} else if (month === 3 || month === 4 || month === 5) {
		alert('Весна');
	} else if (month === 6 || month === 7 || month === 8) {
		alert('Лето');
	} else if (month === 9 || month === 10 || month === 11) {
		alert('Осень');
	} else {
		alert('Неправильный параметр. Введите число от 1 до 12!');
		}
	}

function getWord() {
	let question = alert("Запомни слова: Яблоко, Груша, Дыня, Виноград, Персик, Апельсин, Мандарин.");
	let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	fruit = fruit.sort(() => Math.random() - 0.5);
	alert(fruit);
	const answerUser1 = prompt('Чему равнялся первый элемент массива?');
	const answerUser2 = prompt('Чему равнялся последний элемент массива?');
	const answer1 = 'Яблоко';
	const answer2 = 'Мандарин';

	if (answerUser1.toLowerCase() === answer1.toLowerCase() && answerUser2.toLowerCase() === answer2.toLowerCase()) {
		alert('Поздравляю! Вы угадали оба элемента!');
	} else if (answerUser1.toLowerCase() === answer1.toLowerCase() || answerUser2.toLowerCase() === answer2.toLowerCase()) {
		alert('Вы были близки к победе!');
	} else {
		alert('Неверно!');
	}
}


