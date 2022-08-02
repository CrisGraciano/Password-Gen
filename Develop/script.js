const lowercharcodes = arrayLowToHigh(97, 122)
const uppercharcodes = arrayLowToHigh(65, 90)
const numcharcodes = arrayLowToHigh(48, 57)
const speccasecharcodes = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123. 126)
)


// Calls Button from HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button; will wait for user to click button
generateBtn.addEventListener("click", writePassword);

// After button is clicked, an alert window should be brought up
// Assignment code here
function generatePassword () {

  var passlength = window.prompt("Password length? 8-128 characters")
  var passlength = parseInt(passlength)

  if (isNaN(passlength) || passlength < 8 || passlength > 120) {
    window.alert("Please enter a valid number 8-128!")
    return
  }

  let charCodes = lowercharcodes
  



  var passlower = window.confirm("Do you want to include lowercase characters in your password?")
  var passupper = window.confirm("Do you want to include Uppercase characters in your passwrod?")
  var passnum = window.confirm("Do you want numbers included in your password?")
  var passspec = window.confirm("Do you want to include special characters in your password?")
}

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
