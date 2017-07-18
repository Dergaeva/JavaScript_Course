/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 * */

// solution([16, 17, 4, 3, 5, 2]) === [17, 5, 2]
// solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
// solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
// solution([1, 2, 3, 4, 5, 4]); // [5, 4]

var solution = [1, 2, 3, 4, 5, 4];

function lider() {

	var a = [];

	for (var i=0; i <= solution.length; i++) {
		var max = Math.max.apply(null, solution);
		a.push(max);
		solution.splice(0, 1);
	}

	for (var i = 0; i < a.length; i++) {
		for (var j = i + 1; j < a.length;)
			if (a[i] == a[j])
				a.splice(j, 1);
			else j++;
	}

	console.log(a + ',' + solution[solution.length-1]);

}
lider();

// TASK 1
// * Сделайте карусель.
//* При клике по кнопке "<=" показывается первое изображение по "=>" последнее. *

 
 var buttonLeft = document.getElementById("left");
 var buttonRight = document.getElementById("right");
 var ul = document.getElementsByTagName('ul')[0];

 //клик по кнопке  с классом Left
 buttonLeft.onclick = function() {
 if (ul.getElementsByTagName('li')[0].style.display === 'none') {
 ul.getElementsByTagName('li')[0].style.display = 'block';
 ul.getElementsByTagName('li')[1].style.display = 'none';
 ul.getElementsByTagName('li')[2].style.display = 'none';
 }
 };

 //клик по кнопке  с классом Right buttonRight.onclick = function() {
 if (ul.getElementsByTagName('li')[2].style.display === 'none') {
 ul.getElementsByTagName('li')[2].style.display = 'block';
 ul.getElementsByTagName('li')[0].style.display = 'none';
 ul.getElementsByTagName('li')[1].style.display = 'none';
 }
 };


/*
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением. *
 */

//https://github.com/Dergaeva/JavaScript_Course/tree/master/Home%20work/17/slider

 /* @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */


/*
 * TASK 2
 * Сделайте класс, который будет иметь метод topStyle
 * метод topStyle принимает объект с CSS стилями и добавляет в <head>
 *   новый элемент с данными стилями
 *
 *
 * */
//.topStyle('fetch', {backgroundColor:'blue'})


class addStyleCss {

	constructor(classes, styles) {
		this.classes = classes;
		this.styles = [styles];
	}

	topStyle() {
		var css = this.classes + ' ' + this.styles;
		var head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
	}

}

let css = new addStyleCss(".fetch", "{background-color:aqua}");
css.topStyle();


/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */


/*
 Нужно визуализировать keypad.html -> keypad.js
 Нужно визуализировать index.html -> app.js
 Структура виртуализации:

 - header - один блок
 - main - второй блок
 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render
 innerHTML по максимуму
 https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
 Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
 */

в процессе

/*
 https://aleksandra-maslennikova.github.io/telephone-book/index.html
 По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
 */