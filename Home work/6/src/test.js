var sentence = 'Both Java and Java Script is programming and programming OOPBased Language';
sentence = sentence.split(" ");
var result = sentence.reduce(function(elem, index) {
	elem[index] = (elem[index] || 0) + 1;
	return elem;
}, {});
console.log(result);
