// Assignment code here
var generatePassword = function () {
  let password = "";
  let passwordLength = "";
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+~`|}{[]:;?><,./-="
  };

  // Prompt user for password length from 8 to 128 characters
  var passwordLengthPrompt = function () {
    let passLength = prompt(
      "How many characters would you like your password to be? from 8 to 128"
    );
    if (passLength.match(/[^0-9]/) || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
      alert("Please choose a number between 8 and 128");
      passwordLengthPrompt();
    } else {
      passwordLength = parseInt(passLength);
    }
  };
  // Password length is set to the variable passwordLength
  passwordLengthPrompt();

  console.log(passwordLength);
};

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
