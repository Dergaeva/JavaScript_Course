let startTimer = () => {
	let timer = 1000;
	let serverResponse = i => {
		return setTimeout(function() {
			console.log('zzzz');
			console.log(i);
		}, (timer = timer / 2));
	};
	for (let i = 10; i >= 1; i--) {
		serverResponse(i);
	}
};