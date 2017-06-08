/// sort()
// arr.sort(function (elem1, elem2) {
//
// 	return elem1 - elem2;
// })



//сумма массива
// function  sum(arr) {
// 	var arr = [1,2,3,4,5,6,7,8,9,10];
// 	let sum = 0;
// 	arr.forEach(function(elem) {
// 		sum += elem;
// 	});
// 	return sum;
// }
// console.log(sum());


//или

//
//var arr = [1,2,3,4,5,6,7,8,9,10];
// function sum(arr) {
// 	return arr.reduce(function(prevValue, value, index, arr) {
// 		prevValue += value;
// 		return prevValue;
// 	}, 0);
// }
// console.log(sum(arr));

// var arr = [1,2,3,4,5,6,7,8,9,10];
// function Defis(arr) {
// 	return arr.reduce(function(prevValue, value, index, arr) {
//
// 		prevValue += -value;
// 		return prevValue;
// 	}, '');
// }
// console.log(Defis(arr));


// function helloUser() {
// 	return function (name) {
// 		console.log(`privet  ${name}`);
// 	};
// }
// const user = helloUser()('Елена');



// function add(elem1) {
// 	return function (elem2) {
// 		return elem1 + elem2;
// 	};
// }
// const number15 = add(5)(10);
// console.log(number15);


const plusOne = counter(){
	return function add() {
	}
}
const plusOne = counter();

plusOne.add();
// 1
plusOne.add();
//2
plusOne.add();
//3