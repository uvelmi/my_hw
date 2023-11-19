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
// console.log(getSeason());

function getWord() {
	let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	fruit = fruit.sort(() => Math.random() - 0.5);
	alert(fruit.join(', '));
	const firstFruit = prompt('Чему равнялся первый элемент массива?');
	const lastFruit = prompt('Чему равнялся последний элемент массива?');

	if (firstFruit.toLowerCase() === fruit[0].toLowerCase() && lastFruit.toLowerCase() === fruit[fruit.length - 1].toLowerCase()) {
		alert('Поздравляю! Вы угадали оба элемента!');
	} else if (firstFruit.toLowerCase() === fruit[0].toLowerCase() || lastFruit.toLowerCase() === fruit[fruit.length - 1].toLowerCase()) {
		alert('Вы были близки к победе!');
	} else {
		alert('Неверно!');
	}
}
//  console.log(getWord());

