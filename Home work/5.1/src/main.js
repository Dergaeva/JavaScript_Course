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
	let zeros = [];
	let myArray = [];
	for(let i=0; i<arr.length;i++) {
		let elem = arr[i];
		if(elem === 0){
			zeros.push(elem);
		} else {
			myArray.push(elem);
		}
	}
	return myArray.concat(zeros);
}
console.log(moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

var myArr = [10,20,30,1,31,11,10];
myArr.sort();
var sum = myArr[0] + myArr[1];
console.log(sum);
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

var re = /(\w+)\s(\w+)/;
var str = "James Bond";
var newstr = str.replace(re, "$2 $1")
console.log(newstr);
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

var arr = ['KARLY', 'DANIEL', 'KELSEY'];

var result = arr.map(function(item, i) {
	return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log(result);

