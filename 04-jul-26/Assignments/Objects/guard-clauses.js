function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}
function validateFormGuard(username, password, age) {
    if (username==="") {
return "❌ Username is required";
    }
    if (password.length < 8) {
return "❌ Password must be at least 8 characters";
    }
    if (age < 18) {
return "❌ Must be 18 or older";
    }
    return "✅ Form is valid";
}
console.log("Output");
console.log("Nested:",validateFormNested("", "Test@123", 25));    
console.log("Guard:",validateFormGuard("", "Test@123", 25));
console.log("_________________");
console.log("Nested:",validateFormNested("john", "abc", 25));    
console.log("Guard:",validateFormGuard("john", "abc", 25));
console.log("_________________");
console.log("Nested:",validateFormNested("john", "Test@123", 16));    
console.log("Guard:",validateFormGuard("john", "Test@123", 16));
console.log("_________________");
console.log("Nested:",validateFormNested("john", "Test@123", 25));    
console.log("Guard:",validateFormGuard("john", "Test@123", 25));