let email="testuser@example.com";
console.log("Testing email:",email);
if (email.includes("@") && email.includes(".") ) {
console.log("✅ Valid email format");
} else {
    console.log("❌ Invalid email format");
}
