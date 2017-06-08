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

// var num1 = prompt("Введите число");
// if (isNaN(num1)) {
// 		console.log("не число");
// } else {
// 	 if (num1 > 100 && num1 < 160) {
// 	 	console.log("you super");
// 	 }
// 	 else if (num1 >= 160) {
// 	 	console.log("puper");
// 	 }
// 	 else if (num1 < 100 && num1 > 1) {
// 	 	console.log("hello javascript");
// 	 }
// 	 else if (num1 <= 0) {
// 	 	console.log("мы едем на Бали");
// 	 }  else {
// 	 	console.log("никогда не произойдет");
// 	 }
// }


// for(let i = 0; i < 0; i++) {
// 	if(i % 2 === 0) {
// 	console.log(i);
// 	}
// }
//
// const  arr = [10, 20, 30, 40];
//
// for(let i = 0; i < arr.length; i = i+1) {
// 	console.log(arr[i]);
// }


// function easyCode(arr) {
// 	for(let i = 0; i < arr.length; i++) {
//
// 		console.log(arr[i]);
// 		console.log(arr[i] * 2);
// 	}
// }
// easyCode([10, 20, 30, 40]);





// const qwerty = [11, 20, 31, 50, 90];
//
// function notAccount(arr) {
// 	const myArr = [];
// 	for(let i = 0; i < arr.length; i++) {
// 		var elem = arr[i];
// 		if (elem % 2 > 0){
// 			myArr.push(elem);
// 		}
// 	}
// 	return myArr;
// }
// console.log(notAccount(qwerty));


// var Arr = [10, 20, 30, 40];
// let i = 0;
// while (i<myArr.length) {
// 	console.log(myArr[i]);
// 	if(myArr[i].age) {
// 		console.log("You are winners");
// 		break;
// 	}
// 	i = i+1;
// }

// let counter = 0;
// let randomValue = Math.random() * 10;
// while (randomValue < 9) {
// 	randomValue = Math.random()*10;
// 	console.log(counter, 'react');
// 	console.log(randomValue);
// 	counter= counter + 1;
// }
//
//
// do {
// 	console.log('xxx');
// 	randomValue = Math.random()*10;
// }while (randomValue < 9)

var project = {
	name: "landing Page",
	salary: "1200",
	technology: ['css3', 'html5', 'src']
};

// for(let key in project) {
// 	console.log(project[key]);
// }

for(let key in project) {
if(Array.isArray(project[key]) === true) {
	var arr = project[key];
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}
};









