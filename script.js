function firstChar(text) {
  // your code here
	let str = text.trim();
	return str.length===0 ? "" : str[0];
}
// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
