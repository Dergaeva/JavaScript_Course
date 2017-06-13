'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

//выполнила условие только к developer1
let developer1 = {
	skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
	requires: ['Node.js', 'JavaScript', 'OOP'],
	goodDev: goodDev
};
let developer2 = {
	experience: [
		{ technology: 'java' },
		{ technology: 'c++' },
		{ technology: 'aws' },
		{ technology: 'docker' }
	],
	requires: ['java', 'json', 'c++', 'JavaScript'],
	goodDev: goodDev
};

var a = developer2.experience;
var b = developer2.requires;

function goodDev(a, b) {
	var result = [];
	for(var i = 0; i < a.length; i++) {
		if (b.indexOf(a[i]) == -1) {
			result.push("requered:" + a[i] + "... fail");
		}else{
			result.push("requered:" + a[i] + "... success");
		}
	}
	return result;
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
	console.log(`developer ${index + 1}`);
	console.log(dev.goodDev(a,b));
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

//где использовать this?
let myObject = {
	database: [
		{ age: 100, name: 'b' },
		{ age: 15, name: 'c' },
		{ age: 25, name: 'a' }
	]
};

function byField(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

myObject.database.sort(byField('name'));
myObject.database.forEach(function(user) {
	console.log('{name:' + user.name+ '; ' + 'age:' + user.age  + '}');
});

myObject.database.sort(byField('age'));
myObject.database.forEach(function(user) {
	console.log('{age:' + user.age + '; ' +'name:' + user.name + '}');
});

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

// console.log(myObject.myFilter('age'));
// console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 * 
 */

https://github.com/Dergaeva/JavaScript_Course/tree/master/Home%20work/5.1


////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {}

addMethod(junior, 'ok', function() {
	console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
	console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
	console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
	console.log('three arguments');
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'