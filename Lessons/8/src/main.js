function sortArr() {
	let isArray = Array.isArray(data);

	switch (isArray) {
		case true:
			console.log('ARRAY: ', data.join"-");
			break;
		case false:
			for (let key in data) {
				console.log(key);
			}
	}
}

sortArr({name: 'Elena'});

//2
function sum() {
	let arr = [...arguments];
	return arr.reduce(function (sum, number) {
		return sum + number;
	}, 0);

	// var result=0;
	// for(var i = 0; i<arguments.length; i++) {
	// 	result += arguments[i];
	// }
	// return result;
}
console.log(sum(1,2,3,4,5,6,78));

//3
var obj = {
	name: 'Elena',
	id: 50,
	friends: ['Lena', 'Mike', 'Anton'],
	recepts: {
		pizza: {
			ingredients: ['cheeze', 'toast']
		}
	}
};

function cloneObject(someObg) {
	var obj = {};
	for(let key in someObj) {
		obj[key] = someObj[key];
	}
	return obj;
}
console.log(cloneObject(obj));
//var cloneObject = cloneObject();

//или

let es5ObjectClone = Object.assign({},object);//es5
let es7ObjectClone = {... object, friends: [...object.friends]};//es7