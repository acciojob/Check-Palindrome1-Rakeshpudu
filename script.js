// complete the given function

function palindrome(str){
let processedStr=str.toLowerCase().replace(/[^a-Z0-9]/g, '');
	let reversedStr=processedStr.split('').reverse().join('');
	return processedStr===reversedStr
}
module.exports = palindrome
