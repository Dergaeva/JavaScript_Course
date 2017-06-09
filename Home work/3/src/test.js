var userName = { name: 'Елена' };

function addNameToUser(newKey, newValue, userName) {
	const obj = {};
	obj[newKey] = newValue;
	if (userName.name != undefined) {
		obj.name = userName.name;
	}
	return obj;
}
console.log(addNameToUser('family', 'Dergaeva', userName));