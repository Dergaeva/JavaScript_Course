// var age = +prompt("Ваш возраст");
// var width = +prompt("Ваш рост");
// alert(age + width);

// var num1 = 10;
// var num2 = 20;
// if (num1 > num2) {
// 	console.log("не выйдет");
// }else{
// 	if(num1===num2){
// 		console.log("равные значения");
// 	}
// 	else if (num1 < num2) {
// 		console.log("первое число меньше второго. Класс!");
// 	}
// }

// var num1 = prompt("Введите число");
// var num2 = prompt("Введите число");
// num1 =  +num1;
// num2 =  +num2;
// console.log(num1, num2);
// if (isNaN(num1)) {
// 		console.log("не число");
// } else {
// 	 if (isNaN(num2)) {
// 	 	console.log("не число");
// 	 } else {
// 	 	console.log(num1 + num2);
// 	 }
// }

var num1 = prompt("Введите число");
if (isNaN(num1)) {
		console.log("не число");
} else {
	 if (num1 > 100 && num1 < 160) {
	 	console.log("you super");
	 }
	 else if (num1 >= 160) {
	 	console.log("puper");
	 }
	 else if (num1 < 100 && num1 > 1) {
	 	console.log("hello javascript");
	 }
	 else if (num1 <= 0) {
	 	console.log("мы едем на Бали");
	 }  else {
	 	console.log("никогда не произойдет");
	 }
}