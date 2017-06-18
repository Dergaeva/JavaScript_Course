// function $(tagMain, contentMain = '') {
//
// 	return {
// 		tags:[{tagName: tagMain, content: contentMain}],
// 		add(tagName, content = '') {
// 			this.tags.push({tagName, content});
// 			return this;
// 		},
// 		render(){
// 			var beginArr = [];
// 			var endArr = [];
// 			this.tags.forEach(tag => {
// 				beginArr.push(`<${tag.tagName}>${tag.content}`);
// 				endArr.unshift(`</${tag.tagName}>`);
// 			});
// 			this.tags = [];
// 			return beginArr.concat(endArr).join('');
// 		}
// 	};
// }

//console.log($('body').add('li', 'hi').render());

// let $ = function(tagName) {
// 	var beginArr = [];
// 	var endArr = [];
// 	beginArr.push(`<${tagName}>`);
// 	endArr.unshift(`</${tagName}>`);
// 	return beginArr.concat(endArr).join('');
// };
//
// let createBODY = $('body');
// let createDIV = $('div');
// console.log(createBODY); // <body></body>
// console.log(createDIV); // <div></div>

//var beginArr = [];

 //<body></body>
	//.add('div') //<body></body><div></div>
	//.add('h1'); //<body></body><div></div><h1></h1>

