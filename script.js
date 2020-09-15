// Asign variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;
var pw;

// Password values 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var get = document.querySelector("#generate");

// Added event listener to generate button
get.addEventListener("click", function () {
    writePassword();
});

// password to the #password input
function writePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } 
    
    else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } 
    
    else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain UPPERCASE letters?");
        confirmLowercase = confirm("Will this contain lowercase letters?");
    }

    // 4 FLASE options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }

    // 4 TRUE options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, letter, letter2);
        // ...spread operator
        // choices = [...character, ...number, ...letter, ...letter2]
    }

    // 3 TRUE options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letter2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }

    // 2 TRUE options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }
    // 1 TRUE option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }

    // Array for legnth determined by user
    var password = [];

    // Random selection variables 
    for (var i = 0; i < enter; i++) {
        var confirmChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(confirmChoices);
    }

    // Joins the password array and converts it to a string
    pw = password.join("");
    UserInput(pw);
}

// Final password 
function UserInput(passwordInput) {
    document.getElementById("password").textContent = passwordInput;
}

