// Assignment code here
var lenght;
var lower;
var upper;
var confirmNumber;
var special;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", " ] ", "}", " ' ", ";", ":", "?", "/", " > ", ".", "<", ",", "~", "`"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//function section

function generatePassword() {
  lenght = prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD? BETWEEN 8 AND 128");
  console.log("password lengh" + lenght);
if(!lenght) { 
  alert("REQUIRED INFORMATION"); 
}else if (lenght < 8 || lenght > 128){
  lenght = prompt("YOUR PASSWORD DOES NOT MEET THE CRITERIA (BETWEEN 8 AND 128) ");
  console.log("password lenght " + lenght);
} else {
  upper = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN UPPER CASE LETTERS?");
  console.log("Upper case " + upper);
  lower = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN LOWER CASE LETTERS?");
    console.log("Lower case " + lower);
    confirmNumber = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN NUMBERS?");
    console.log("Number " + confirmNumber);
    special = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN SPECIAL CHARACTERS?");
    console.log("Special Character " + special);
};

if (!upper && !lower && !special && !confirmNumber) {
  userChoices = alert("YOU MUST CHOOSE AT LEAST ONE CRITERIA!");
} else if (lower && upper && confirmNumber && special) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}

else if (upper && confirmNumber && special) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}else if (lower && upper && special) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}else if (lower && upper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}else if (lower && confirmNumber && special) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}



}