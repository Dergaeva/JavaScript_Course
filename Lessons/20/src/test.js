const url = 'http://easycode-js.herokuapp.com/';
const button = document.querySelector('button');
const button2 = document.querySelector('.btn2');
const app = document.querySelector('.app');

const serverRequest = (url, requestType, callback) => {
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === 4 && xhr.DONE === 4) {
			return callback(xhr.responseText);
		}
	});

	xhr.open(requestType, url , true);
	xhr.send();
};

serverRequest(url + 'deel', 'GET', data => {
	console.log(data);
});

button.addEventListener('click', () => {
	serverRequest(url + 'deel', 'GET', data => {
		app.innerHTML += '<hr />' + data;
	});
});

button2.addEventListener('click', () => {
	let xhrPOST = new XMLHttpRequest();

	xhrPOST.addEventListener('readystatechange', () => {
		if (xhrPOST.readyState === 4) {
			//console.log('response: ', JSON.parse(xhrPOST.response));
			console.log('responseText: ', xhrPOST.responseText);
		}
	});

	xhrPOST.open('POST', url + 'deel/users', true);
	const newUser = {
		fullName: 'Царевна Лягушка',
		email: 'frog@mail.ru',
		phone: '0501698753'
	};
	xhrPOST.setRequestHeader('Content-Type', 'application/json');

	xhrPOST.send(JSON.stringify(newUser));
});


serverRequest(url + 'deel', 'GET', data => {
	console.log(JSON.parse(data));
});

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
// 	console.log(xhr.readyState);
// 	console.log(xhr.responseText);
// };
//
// //то, что я хочу запросить
// xhr.open('GET', url + 'test', true);
// //Отправка запроса
// xhr.send();