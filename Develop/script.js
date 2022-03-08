// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
const specialCharacters = "!@#$%^&*()";
generateBtn = document.getElementById('generateButton');
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creating prompts when 'Generate Password' is clicked by the user
function generatePassword() { 
    var passwordLength = prompt("Enter the number of characters for your password. Please choose a length between 8 to 128 characters."); 
    
    if (passwordLength < 8 || passwordLength > 128) { 
        writePassword();
    }

    var passwordLowercase = confirm("Do you want lowercase letters in your password?");
    var passwordUppercase = confirm("Do you want upercase letters in your password?");
    var passwordNumeric = confirm("Do you want numerics in your password?");
    var passwordSpecial = confirm("Do you want special characters in your password?");

    var countMin = 0; 
    var uppercaseMin = ""; 
    var lowercaseMin = ""; 
    var numericMin = ""; 
    var specialMin = ""; 

    // Creating functions to generate random numbers, lowercase, uppercase 
    // and/or special characters when called 
    var generatorFunction = {
        getNumeric: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
        
        getLowercase: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },

        getUppercase: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },

        getSpecial: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }
    }; 

    // Checking whether the users said yes or no to the specified prompts 
    // Using conditional statements to get lowercase, uppercase, numerics and 
    // special characters 
    if (passwordLowercase === true) { 
        lowercaseMin = generatorFunction.getLowercase(); 
        countMin++; 
    }
    if (passwordUppercase === true) { 
        uppercaseMin = generatorFunction.getUppercase(); 
        countMin++; 
    }
    if (passwordNumeric === true) { 
        numericMin = generatorFunction.getNumeric(); 
        countMin++; 
    }
    if (passwordSpecial === true) { 
        specialMin = generatorFunction.getSpecial(); 
        countMin++; 
    }
    
    // Random password generation which gets displayed to the text-box based on specified criteria
    var randomPassword = ""; 
    
    // if user wants numbers, uppercase and lowercase and either special char or not 
    if(passwordNumeric === false && passwordLowercase === true && passwordUppercase === true && (passwordSpecial === true || passwordSpecial === false)) { 
        var allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
        for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
            var randomNumber = allLetters.charAt(Math.floor(Math.random() * 4));
            randomPassword += randomNumber;
        }
    }
    // if user wants no numbers, lowercase, no uppercase and either special char or not 
    if(passwordNumeric === false && passwordLowercase === true && passwordUppercase === false && (passwordSpecial === true || passwordSpecial === false)){ 
        var onlyLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
            var randomNumber = onlyLowercaseLetters.charAt(Math.floor(Math.random() * 4));
            randomPassword += randomNumber;
        }
    }
    // if user wants no numbers, no lowercase, uppercase and either special char or not 
    if(passwordNumeric === false && passwordLowercase === false && passwordUppercase === true && (passwordSpecial === true || passwordSpecial === false)){ 
        var onlyUppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
            var randomNumber = onlyUppercaseLetters.charAt(Math.floor(Math.random() * 4));
            randomPassword += randomNumber;
        }
    }
    // if user wants numbers and all other conditions can be a yes or no 
    if(passwordNumeric === true && (passwordLowercase === true || passwordLowercase === false) && (passwordUppercase === true || passwordUppercase === false) && 
      (passwordSpecial === true || passwordSpecial === false)){ 
        for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
            var randomNumber = Math.floor(Math.random() * 4);
            randomPassword += randomNumber;
        }
    }
    // if user wants only special characters 
    if(passwordSpecial === true && passwordLowercase === false && passwordUppercase === false && passwordNumeric === false) {
        for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
            var randomNumber = specialCharacters.charAt(Math.floor(Math.random() * 4));
            randomPassword += randomNumber;
        }
    }

    randomPassword += numericMin; 
    randomPassword += lowercaseMin;
    randomPassword += uppercaseMin;
    randomPassword += specialMin;

    return randomPassword; 
    
}


