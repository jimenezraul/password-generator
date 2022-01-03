// Assignment code here
var generatePassword = function () {
  let password = "";
  let passwordLength;
  // All Characters
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };

  // Prompt user for password length from 8 to 128 characters
  var passwordLengthPrompt = function () {
    let passLength = window.prompt("How long would you like your password to be? (8-128 characters)")
    // When user clicks cancel, exit the function
    if (passLength === null) {
      return;
    }
    // Check if user input is a number between 8 and 128
    passLength = parseInt(passLength);
    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Password length must be a number between 8 and 128");
      return passwordLengthPrompt();
    } else {
      passwordLength = passLength;
    }
  };

  passwordLengthPrompt();

  // If passwordLength is not a number, return an empty string
  if (isNaN(passwordLength)) {
    return "";
  }

  // Prompt user for character types to include in password
  var characterTypes = {};
  var characterTypesPrompt = function () {
    function confirm(type) {
      return window.confirm(
        "Would you like to include " + type + "? OK for yes, Cancel for no"
      );
    }
    // All character that will be prompted
    characterTypes.uppercase = confirm("uppercase letters");
    characterTypes.lowercase = confirm("lowercase letters");
    characterTypes.numbers = confirm("numbers");
    characterTypes.specials = confirm("special characters");

    let valid = false;
    //Validate user input
    for (let key in characterTypes) {
      if (characterTypes[key] === true) {
        valid = true;
      }
    }
    // If user input is not valid, prompt again
    if (!valid) {
      alert("Please select at least one character type");
      characterTypesPrompt();
    }
  };

  characterTypesPrompt();

  // If user input is valid, concatenate all characters into one string
  let characterString = "";
  if (characterTypes.uppercase) {
    characterString += characters.uppercase;
  }
  if (characterTypes.lowercase) {
    characterString += characters.lowercase;
  }
  if (characterTypes.numbers) {
    characterString += characters.numeric;
  }
  if (characterTypes.specials) {
    characterString += characters.special;
  }

  // Generate password based on user input
  for (let i = 0; i < passwordLength; i++) {
    password += characterString.charAt(
      Math.floor(Math.random() * characterString.length)
    );
  }
  return password;
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
