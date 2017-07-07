/*
1. Напишите функцию которая принимает 2 числа
и возвращает массив содержащий числа между первым числом и вторым числом;
*/

function numbersBetween(a, b) {
	var arr = [];
	for (var i = (a+1); i < b; i++){
		arr.push(i);
	}
	return arr;
}
console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 12,14
console.log(numbersBetween(10, 15)); // 11, 12, 12, 14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 Напишите функцию, которая будет возвращать 'Fizz'
 если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5,
 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */
function fizzBuzz(num) {
	for(var i=0; i<=num; i++){

		if((i % 3 == 0) && (i % 5 == 0)) {
			console.log("FizzBuzz");
		}
		else if(i % 3 === 0){
			console.log("Fizz");
		}
		else if(i % 5 === 0){
			console.log("Buzz");
		}
		else if(i % 3 != 0 || i % 5 != 0){
			console.log(i);
		}

	}
}
fizzBuzz(100);
/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

[1, null, undefined, 'str', {}, [], function() {}].forEach(function(num, i, nums) {
	console.log(typeof num);
});

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив
 содержащий все объекты содержащие свойство unknownAge:true
 */

// let array = Array.from({ length: 35 }).map(
// 		(value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
// );
//
// console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35
//
// function solution(arr) {}
//
// let arr = ['privet', 12, {}, [1, 2]];
// let arr2 = ['privet', 12, {}, [1, 2]];
//
// function returnArr(argument) {}
// returnArr(arr);
// returnArr(arr2);