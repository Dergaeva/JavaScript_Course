
'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */
function solution1() {
	var text = '';

	return function (piece) {
		if (arguments.length == 0) { // вызов без аргументов
			return console.log(text);
		}
		console.log(text += piece);
	};
}
let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет
// вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {

	var i,
		arg=str.length,
		elem,
		last,
		stack=[];

	for(i=0; i<arg; i++){
		//берем первый элемент строки
		elem=str[i];
		//если это { или ( или [
		if(elem=="{" || elem=="(" || elem=="["){
			//добавляем в новый массив
			stack.push(elem);
			//указываем , что было последним элементом
			last=elem;
		}
		//если это ] или ) или }
		else if(elem == '}' || elem == ")" || elem == "]"){
			//то если последний элемент нового массива...
			if(last){
				//..равен двойным одинаковым скобкам
				if((last == "{" && elem == '}') || (last == '(' && elem == ')' ) || (last == '[' && elem == ']'))
				{
					//удаляем последний элемент массива
					stack.pop();
					// и назначаем его -1, в другом случае не найденным
					last = stack.length > 0 ? stack[stack.length - 1] : undefined;
				}
			}else{
				//не равен двойным кавычкам - false
				return console.log(false);
			}
		}
	}
	//возвращвем новый массив с нулевым значением
	return console.log(stack.length==0);
}


validBraces('(){}[]'); //=> returns true
validBraces('(}'); //=> returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); //=> returns true
/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

// function makeCallback(fn) {
// 	for (let i = 1; i <= 10; i++) {
// 		setTimeout(function() {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// }

// makeCallback(function() {
// 	console.log('THE LAST LAST comment');
// });

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */

// function sum(num) {}
//
// sum(5); // 15 Значение кешировано
// sum(5); // 15 Значение взято из кэша
//
// sum(6); // 21 Кешировано
// sum(6); // 21 Значение взято из кэша