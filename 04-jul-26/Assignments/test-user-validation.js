function validateTestUser (username , password,  email) {
console.log("**Expected Output:**");
console.log("Validating test user data...\n");
if (username === "") {
    return "Username cant be empty";
} else 
    console.log("Username:", username, "✓");
if (password === "") {
console.log("Password cant be empty");
} else if (password.length < 8) {
    return "Password must be at least 8 characters";
} else 
    console.log("Password:",password,"✓");
if (email==="") {
    return "Email cant be Emplty";
} else if (email.includes("@") && (email.includes("."))) {
    console.log("Email:",email,"✓");
} else {
    return "Email Must have @ and .";
} return "Validation completed";
}
let result = validateTestUser("", "Test@123", "test@example.com");
if (result==="Validation completed") {
console.log(result);
console.log("");
console.log("✅ All validations passed - User data ready!");
} else
    console.log("❌ Error:", result);

