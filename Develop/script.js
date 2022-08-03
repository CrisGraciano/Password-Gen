const lowercharcodes = arrayLowToHigh(97, 122)
const uppercharcodes = arrayLowToHigh(65, 90)
const numcharcodes = arrayLowToHigh(48, 57)
const speccasecharcodes = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
)

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

 // empty array to hold the choices of the user on questions above
  var userChoices = []
 
 // true false statements to questions in order to know which characters to include in final password
  if (passlower === true) {
    userChoices.push(lowercharcodes)
  }

  if (passupper === true) {
    userChoices.push(uppercharcodes)
  }

  if (passnum === true) {
    userChoices.push(numcharcodes)
  }

  if (passspec === true) {
    userChoices.push(speccasecharcodes)
  }

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

97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,48,49,50,51,52,53,54,55,56,57,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96