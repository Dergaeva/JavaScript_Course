// let myObject = {
// 	//очень долго писать
// 	es5function: function () {
// 		//невероятно мендленно
// 		for (let key in myObject) {
// 			console.log(key);
// 		}
// 	},
// 	es6function(){
// 		//Object.keys(myObject);
// 		Object.keys(myObject).forEach( function(elem){
// 			return console.log(myObject[elem]);
// 		});
// 	},
// 	length: 10
// };
//
// myObject.es6function();


//es5
// let sum = function (a,b) {
// 	return a+b;
// };

//es6
// let sum = (a,b) => {
// 	return console.log((a+b)*2);
// }
// sum(10,20);

// let double = (a) => a*2;
// console.log(double(50));


var myOffers = [1000, 1500, 2000, 2500, 3500];
// let mySalary = (arr) => {
// 	var salary = [];
// 	for (var i = 0; i <=arr.length; i++) {
// 		var elem = arr[i];
// 		if (elem >= 1500) {
// 			salary.push(elem);
// 			console.log(salary);
// 		} else {
// 			console.log("Не найдено")
// 		}
// 	}
//
// }
// mySalary(myOffers);
//
// var mySalary = arr => arr.filter(elem => elem > 1500);
// mySalary(myOffers);
//
// var sumArguments = (...args) =>
// 	args.reduce(prevValue, value) => (prevValue +=value));
// console.log(sumArguments(10,20,30));


// var telephonebook = {
// 	friends: ['Елена', 'Даша','Маша'],
// 	showFriends() {
// 		console.log(this.friends);
// 	}
// };
// var telephone2 = {
// 	friends: ['торт', 'мороженое','пицца'],
// 	helloFriends() {
// 	console.log(this.friends)
// }
// };
// telephonebook.showFriends();
// telephone2.helloFriends();

// const user = {
// 	name: 'Jack',
// 	fruits: 'mango, kivi, banan',
// 	showFruits(){
// 		console.log(this.fruits)
// 	}
// };
// user.showFruits();

const user = {
	name: 'Jack',
	fruits: 'mango, kivi, banan',
	friends:[ {
		name: "Egor",
		fruits: "apple"
	},
	{
		name: "Gendalf",
		fruits: "lime"
	},
	{
		name: "Frodo",
			fruits: "Хлебцы это прелесть"
	}],
	showFruits(user.friends){
		user.fruits;
	}
     // showFreindsfruits(){
	// console.log(showFruits());
	// }
};
console.log(user.showFruits());
//showFreindsfruits();
