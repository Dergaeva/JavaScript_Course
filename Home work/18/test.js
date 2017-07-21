let solution = "This is a sample string";

function find_max(str) {

	//str=str.replace(/,/g, "");
	arr = solution.split(' ');
	console.log(arr);
	max_len = 0;
	for(i=0;i<=arr.length-1;i++)
		if(arr[i].length>max_len) {
			newstr=arr[i];
			max_len=arr[i].length;
		}
	return newstr;

	}
console.log(find_max("This is a sample string"));