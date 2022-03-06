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
    
    // Random password generation 
    var randomPassword = ""; 

    for (let i = 0; i < (parseInt(passwordLength) - countMin); i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        randomPassword += randomNumber;
    }
    
    randomPassword += numericMin; 
    randomPassword += lowercaseMin;
    randomPassword += uppercaseMin;
    randomPassword += specialMin;
    
    return randomPassword; 
    
}


