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
		user.fruits
	};
}
// showFreindsfruits(){
// console.log(showFruits());
// }
console.log(user.showFruits());
//showFreindsfruits();