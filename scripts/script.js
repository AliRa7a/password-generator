// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  // Prompt for password length
  var length = parseInt(prompt("Choose a password length between 8 and 128 characters"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return;
  }

  // Confirm character types
  var hasLowercase = confirm("Include lowercase characters?");
  var hasUppercase = confirm("Include uppercase characters?");
  var hasNumeric = confirm("Include numeric characters?");
  var hasSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!(hasLowercase || hasUppercase || hasNumeric || hasSpecial)) {
    alert("You must select at least one character type.");
    return;
  }

  // Return an object with user input
  return {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial
  };
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];

  // Add selected character types to possibleCharacters array
  if (options.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Generate password
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(possibleCharacters);
    result.push(randomChar);
  }

  // Convert result array to string and return
  return result.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);