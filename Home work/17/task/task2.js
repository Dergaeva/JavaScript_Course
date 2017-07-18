/* TASK 2
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