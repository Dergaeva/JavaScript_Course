var animal = {
	legs: 4
};

var cat = {
	name: 'Белящик'
};

cat.__proto__= animal;
console.log(cat.legs);