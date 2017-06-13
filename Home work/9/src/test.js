'use strict';

/* Создайте объект содержащий коллекцию элементов с одинаковыми
* свойстами и разными значениями!
* Напишите функцию принимает 1 аргумент сортирует объект по
* переданному значению
*
* При вызове функции используйте this
*
* */


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

// console.log(myObject.byField('age'));
// console.log(myObject.byField('name'));