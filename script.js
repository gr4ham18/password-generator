// Assignment code here
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "]", "}", "'", ";", ":", "?", "/", ">", ".", "<", ",", "~", "`"];
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




//IF section

function generatePassword() {
 passwordLength = prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD? BETWEEN 8 AND 128");
  console.log("Password length " + passwordLength);
  if(!passwordLength) {
    alert("REQUIRED INFORMATION!");
}else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("YOUR PASSWORD DOES NOT MEET THE CRITERIA (BETWEEN 8 AND 128) ");
  console.log("Password length " + passwordLength);
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

// if all are wrong

if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("YOU MUST CHOOSE AT LEAST ONE CRITERIA!");
} 
// if all are right
else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
  //3 rights
}else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
  //two rights
}else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}else if (confirmLower && confirmSpecial) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}else if (confirmUpper && confirmSpecial) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}else if (confirmNumber && confirmSpecial) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
// one right
else if (confirmLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}else if (confirmUpper) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}else if (confirmSpecial) {
  userChoices = special;
  console.log(userChoices);
};


var passwordBlank = [];

for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

//var displaying your password
var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}


// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

