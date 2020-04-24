// Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// ask for a word
var word = prompt("Please enter a word: ");

// check if the word is palindrome
function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}

// print result
console.log(isPalindrome(word));
