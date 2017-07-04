function Http() { }
Http.prototype.createServer = function(fn) {
	let ctx = {
		req: {
			port: 3000,
			url: 'https://google.com'
		},
		res: {
			status: 200,
			message: 'ok',
			header: {
				'content-type': 'application/json'
			}
		}
	};
	this.fn = () => {
		fn.call(this, ctx, () => { })
	};
	return this;
};

Http.prototype.listen = function(PORT, host) {
	console.log(`Server running on https://${host}:${PORT}`)
	this.fn();
};

const server = new Http().createServer(function(ctx, next) {
	console.log(ctx);
}).listen(3000, 'localhost');