var ezjQuery = {
	tegs: "",
	add: function(tagName) {
		this.tegs += `<${tagName}></${tagName}>`;
		return this;
	},
	writeTeg: function() {
		console.log(this.tegs);
		return this;
	}
};

console.log(ezjQuery.add("body").add("div").writeTeg());
