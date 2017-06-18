/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
	let y = 5;
	t();
};
console.log(y);//5 т.к. обьявлена глобальной переменной

z(x);// undefined




/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */
let $ = function(tagName) {
	var beginArr = [];
	var endArr = [];
	beginArr.push(`<${tagName}>`);
	endArr.unshift(`</${tagName}>`);
	return beginArr.concat(endArr).join('');
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 // obj.method().method().method()
 ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery =  {
	result: '',
	add: function(tagName) {
		this.result += `<${tagName}></${tagName}>`;
		console.log(this.result);
		return this;
	}
};

ezjQuery
	.add('body') //<body></body>
	.add('div') //<body></body><div></div>
	.add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

// example
var helloList = ezjQuery
	.add('body') // <body></body>
	.add('div') // <body><div></div></body>
	.add('ul') // <body><div><ul></ul></div></body>
	.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
	.render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
	.add('body') //<body></body>
	.add('div') //<body><div></div></body>
	.render();
console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
function $(tagMain, contentMain = '') {

	return {
		tags:[{tagName: tagMain, content: contentMain}],
		add(tagName, content = '') {
			this.tags.push({tagName, content});
			return this;
		},
		render(){
			var beginArr = [];
			var endArr = [];
			this.tags.forEach(tag => {
				beginArr.push(`<${tag.tagName}>${tag.content}`);
				endArr.unshift(`</${tag.tagName}>`);
			});
			this.tags = [];
			return beginArr.concat(endArr).join('');
		}
	};
}
$('body').add('li', 'hi').render();