let password="Test@1234";
console.log("**Example Output:**");
console.log("Password:", password);
console.log("Length:", password.length,"characters");
if (password.length < 6) {
    console.log("❌ Weak password - too short");
} else if(password.length < 10) {
    console.log("⚠️ Medium password strength");
} else if (password.length >= 10) {
    console.log("✅ Strong password");
}