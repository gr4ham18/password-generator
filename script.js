// Assignment code here
var passwordLenght;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
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
  passwordLenght = prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD? BETWEEN 8 AND 128");
  console.log("password lengh" + passwordLenght);
if(!passwordLenght) { 
  alert("REQUIRED INFORMATION"); 
}else if (passwordLenght < 8 || passwordLenght > 128){
  passwordLenght = prompt("YOUR PASSWORD DOES NOT MEET THE CRITERIA (BETWEEN 8 AND 128) ");
  console.log("password lenght " + passwordLenght);
} else {
  confirmUpper = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN UPPER CASE LETTERS?");
  console.log("Upper case " + confirmUpper);
  confirmLower = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN LOWER CASE LETTERS?");
    console.log("Lower case " + confirmLower);
    confirmNumber = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN NUMBERS?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("WOULD YOU LIKE YOUR PASSWORD TO CONTAIN SPECIAL CHARACTERS?");
    console.log("Special Character " + confirmSpecial);
};

if (!confirmUpper && !confirmLower && !confirmSpecial && !confirmNumber) {
  userChoices = alert("YOU MUST CHOOSE AT LEAST ONE CRITERIA!");
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}

el

}