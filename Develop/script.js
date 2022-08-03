// Tried to use the character codes before typing lists for characters

//const lowercharcodes = arrayLowToHigh(97, 122)
//const uppercharcodes = arrayLowToHigh(65, 90)
//const numcharcodes = arrayLowToHigh(48, 57)
//const speccasecharcodes = arrayLowToHigh(33, 47).concat(
//  arrayLowToHigh(58, 64)
//).concat(
//  arrayLowToHigh(91, 96)
//)

// Calls Button from HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button; will wait for user to click button
generateBtn.addEventListener("click", writePassword);

// After button is clicked, an alert window should be brought up

// Assignment code here
function generatePassword () {
 // Asks user in window how long password should be
  var passlength = window.prompt("Password length? 8-128 characters")
  var passlength = parseInt(passlength)

 // prompts error if info entered is not a number or within range
  if (isNaN(passlength) || passlength < 8 || passlength > 120) {
    window.alert("Please enter a valid number 8-128!")
    return
  }

 // Windows asking if user wants lowercase, uppercase, number or special characters in the generated password
  var passlower = window.confirm("Do you want to include lowercase characters in your password?")
  var passupper = window.confirm("Do you want to include Uppercase characters in your passwrod?")
  var passnum = window.confirm("Do you want to include numbers in your password?")
  var passspec = window.confirm("Do you want to include special characters in your password?")
 
  // Lists to loop through
  var lowerlist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperlist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var speclist = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "_"]

 // empty array to hold the choices of the user on questions above
  var userChoices = []
 
 // true false statements to questions in order to know which characters to include in final password
  if (passlower === true) {
    userChoices.push(lowerlist)
  }

  if (passupper === true) {
    userChoices.push(upperlist)
  }

  if (passnum === true) {
    userChoices.push(numlist)
  }

  if (passspec === true) {
    userChoices.push(speclist)
  }
 // if user doesnt want any types of characters, it will default to lowercase characters
  if (userChoices.length === 0) {
    userChoices.push(lowerlist)
  }

  var finalPassword = ""

  return userChoices


}

// function looping through the character library
function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
