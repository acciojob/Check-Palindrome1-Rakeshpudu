// complete the given function

function palindrome(string){
// 
	// # Remove whitespace and convert to lowercase
    string = string.replace(" ", "").lower()
    
   // # Compare the string with its reverse
    return string == string[::-1]
}
module.exports = palindrome
