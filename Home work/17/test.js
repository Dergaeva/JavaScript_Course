/* Напишите функцию которая будет преобразовывать CSS-свойство в
* ликвидное JS свойство*/

function changeStyle (property) {
	this.property = property;
	var re = new RegExp('\\w+');
	console.log(property);
}

changeStyle('backgroundColor');

