/*
 Напишите функцию которая будет возвращать объект
 с свойством name, а значением будет первый аргумент функции
 */

function myFunc(name) {
	var person = {
		myName: name,
		age: 29
	};
	return console.log(person);
}
myFunc("Елена");
/*
 Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
 будет свойство name
 и возвращать новый объект изменяя свойство name
 в большой регистр
 */

function myFuncUpper(name) {
	var person = {
		myName: name
	};
	person.myName = person.myName.toUpperCase();
	return console.log(person);
}
myFuncUpper("елена");

/*
 1. Напишите функцию которая принимает в
 качестве аргумента массив
 и добавляет элемент в конец массива
 */

let arr = [0, 2, 5, 10];

function addToArray(arrParam, newElem) {
	for(var i=0;i<arguments.length;i++) {
		console.log("arguments["+i+"] = "+arguments[i])
	}
}
addToArray(arr,'20');
// выведет
// arguments[0] = a
// arguments[1] = b
// arguments[2] = true



/*
 2. Напишите функцию которая получает 3 параметра
 и возвращает объект типа:
 */

 function funcObjparam() {
	 for(var i=0;i<arguments.length;i++) {
	 console.log("arguments["+(+i+1)+"] = "+arguments[i])
	 }
 }
funcObjparam('a','b','c');

/*
 {
 argument1: param1,
 argument2: param2,
 argument3: param3,
 }
 */

function simpleObjectGenerator() {
	for(var i=0;i<arguments.length;i++) {
		console.log("arguments["+(+i+1)+"] = "+arguments[i])
	}
}
simpleObjectGenerator('protocol', '{ url: 22 }', 8000);

//console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
 argument1:'protocol',
 argument2:{url:'22'},
 argument3:8000
 }*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

function simpleObjectGenerator(param1, param2, param3) {
	var result = {
		argument1: param1,
		argument2: param2,
		argument3: param3
	};
	return result;
}
console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
 3.  Напишите функцию которая принимает 3 аргумента,
 третий аргумент - это объект.

 Функция создает новый объект и добавляет ключ
 это первый аргумент, а значение - второй аргумент
 Проверяет если есть свойство name в переданном объекте,
 тогда добавляет данное свойство и возвращает новый объект
*/
 var userName = { name: 'Елена' };

 function addNameToUser(newKey, newValue, userName) {
	 var result = {
		argument1: newKey,
		argument2: newValue,
		argument3: userName,
	};
	 var result2 = {
		 newKey: newValue
	 };
	 if(result2.name === undefined){
		 result2.name = "Елена"
	 }
	return result2;
}
console.log(addNameToUser('family', 'Dergaeva', userName));

// console.log(addNameToUser('family', '%Lustenko%', myName));
// /* {name:'Oleg', family:'%Lustenko%'} */
//
// console.log(myName);
// /* {name:'Oleg'} */

/////////////////////////////////

/*
 -> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz'
 если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5,
 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */

function fizzBuzz(num) {

	if((num % 3 == 0) && (num % 5 == 0)) {
		console.log("FizzBuzz");
	}
	else if(num % 3 === 0){
		console.log("Fizz");
	}
	else if(num % 5 === 0){
		console.log("Buzz");
	}
	else if(num % 3 != 0 || num % 5 != 0){
		console.log(num);
	}
}

fizzBuzz(15); // 1
/*fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'*/

/* -> @@ SUPER 2
 Напишите функцию, которая будет принимать 4 аргумента,
 последний всегда функция.
 Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
 */
