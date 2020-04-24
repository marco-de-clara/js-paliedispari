// Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// ask for a word
var word = prompt("Please enter a word: ");

//print result
if (isPalindrome(word) == true) {
    console.log("The word \"" + word + "\" entered is a palindromic word.");
} else {
    console.log("The word \"" + word + "\" entered is not a palindromic word.");
}

// check if the word is palindrome
function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}
