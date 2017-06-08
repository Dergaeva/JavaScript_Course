'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

function moveZeroToEnd(arr) {
	for(var i=0; i<=arr.length; i++){
		var elem = arr[i];
		if(elem === 0) {
			arr.splice(i,1);
			arr.push(elem);
		}
	}
	return arr;
}
console.log(moveZeroToEnd(arr1));
/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */
var myArr = [-1,0,25];

function minimalNumber(arr) {

	var min1 = Math.min.apply(null, arr);
	var index1 = arr.indexOf(min1);
	arr.splice(index1,1);
	var min2 = Math.min.apply(null, arr);
	var sum = min1 + min2;
	return sum;

}
console.log(minimalNumber(myArr));
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(name) {
	var reverseName = name.split(' ').reverse().join(' ');
	return reverseName;
}
console.log(nameShuffler('Дергаева Елена'));
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {

	for(var i=0; i<arr.length; i++){
		var elem = arr[i];
		var elem1 = elem.toLowerCase();
		var elem2 = elem.charAt(0).toUpperCase() + elem1.slice(1);
		arr[i] = elem2;
	}
	return arr;
}
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */

function random(arr) {

	let step (a)//последний элемент минус первый и все поделить на количество
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]

 */

function openBraces(arr) {}