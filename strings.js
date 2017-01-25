//Variable for text input
document.getElementById("stringInput").value;

function reversal() {

}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);

//	Try this validation format to require letters 
	if (!/^[a-zA-Z]*$/g.test(document.getElementById("stringInput").value)) {
        alert("Invalid characters");
    	document.getElementById("stringInput").value).focus();
        return false;
    }