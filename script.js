function toCase(text) {
  // write your code here
	if (str === '') {
    return '-';
  }

  // Convert the string to lowercase and uppercase, join with '-'
  return str.toLowerCase() + '-' + str.toUpperCase();

}


// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
