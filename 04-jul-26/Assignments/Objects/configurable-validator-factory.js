function makeUserValidator(minPasswordLength = 8, minAge = 18) {
    function validateFormGuard(username, password, age) {
        if (username==="") {
return   "❌ Username is required";
        } if (username.length < 3 || username.length > 20) {
return "❌ Username must be at least 3-20 characters";
        } if (password.length < minPasswordLength) {
return `❌ Password too short (min ${minPasswordLength} characters, current: ${password.length})`;
        } if (age<minAge) {
return "❌ Must be 18 or older";
        }
         return "✅ Valid user";
    } return validateFormGuard;
}

const standardValidator = makeUserValidator();       // defaults
const strictValidator   = makeUserValidator(12, 21); // strict rules

// Test standard
console.log(standardValidator("testuser", "Test@123", 25));  // ✅ Valid
console.log(standardValidator("", "Test@123", 25));           // ❌ Username empty

// Test strict (password "Test@123" is only 8 chars — fails strict)
console.log(strictValidator("testuser", "Test@123", 25));    // ❌ Password too short
console.log(strictValidator("testuser", "Test@123Secure!", 25)); // ✅ Valid