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
      passwordLength = passLength;
    }
  };

  passwordLengthPrompt();
  console.log(passwordLength);
  var characterTypes = {};

  // Prompt user for character types to include in password
  var characterTypesPrompt = function () {
    function confirm(type) {
      return window.confirm(
        `Would you like to include ${type}? Select 'OK' for yes or 'Cancel' for no.`
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
    //If is valid, will console log the characterTypes object else will prompt user to enter again
    
    if (!valid) {
      alert("Please select at least one character type");
      characterTypesPrompt();
    }
  };

  characterTypesPrompt();
  
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

  // Generate password
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