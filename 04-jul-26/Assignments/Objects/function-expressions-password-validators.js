const hasMinLength = function(password) {
if (password.length >= 8) {
return true;
}
return false;
}

const hasSpecialChar = function(password) {
if (password.includes("@") || password.includes("!") || password.includes("#")) {
return true;
} 
return false;
}

const hasUppercase = function(password) {
if (/[A-Z]/.test(password)) {
return true;
} return false;
}

const passwordValidators = [hasMinLength,hasSpecialChar,hasUppercase];

function validatePassword(password) {
    console.log("**Example Output:**");
    console.log("Validating:",password);
    for (let i = 0;i < passwordValidators.length;i++) {
        const validator = passwordValidators[i];

        const result = validator(password);

        if (result) {
            console.log("✓ Passed check",(i+1));
        } else {
            console.log("✗ Failed check",(i+1));
            return false;
        }
}
console.log("✓ Password is valid!");
return true;
}


validatePassword("test123");
console.log("");
validatePassword("weak");