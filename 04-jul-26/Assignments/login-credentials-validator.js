let username="";
let password="";
let email="test@example.com";
console.log("Checking credentials...");
console.log("Username: ", username);
console.log("Password: ", password);
console.log("Email: ", email);
if ((username != "" && password != "") || email != "") {
console.log("✅ Sufficient login credentials");
} else {
    console.log("❌ Insufficient credentials - provide username+password OR email");
}