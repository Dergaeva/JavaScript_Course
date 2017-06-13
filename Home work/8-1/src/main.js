//1 клонирование обьекта
var vasya = {
	age: 21,
	name: 'Вася',
	surname: 'Петров'
};

var user = {
	isAdmin: false,
	isEmailConfirmed: true
};

var student = {
	university: 'My university'
};

function copy() {
	var dst = arguments[0];

	for (var i = 1; i < arguments.length; i++) {
		var arg = arguments[i];
		for (var key in arg) {
			dst[key] = arg[key];
		}
	}

	return dst;
}

var userClone = copy({}, user);
console.log(userClone);

//2 клонирование обьекта
var object = {
	name: 'your name',
	id: 50,
	friends: ['Lera', 'Vitya', 'Vladimir'],
	recepts: {
		pizza: {
			ingredients: ['cheeze', 'toast']
		}
	}
}

let es5ObjectClone = Object.assign({}, object);

// имутабельность (хранение ссылок)


console.log(es5ObjectClone);
object.met = 50;
es5ObjectClone.data = 70;
console.log(object);
console.log(es5ObjectClone);

//3 смена одного аргумента
function showWarning(options) {
	var width = options.width || 200; // по умолчанию
	var height = options.height || 100;

	var contents = options.contents || "Предупреждение";

	// ...
}
var opts = {
	width: 400,
	height: 200,
	contents: "Текст"
};

showWarning(opts);

opts.contents = "Другой текст";

showWarning(opts); // вызвать с новым текстом, без копирования других аргументов

