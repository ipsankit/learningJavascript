let testData = {
username: "testuser@example.com",
password: "Test@123",
sessionToken: "abc123xyz",
firstName: "John",
lastName: "Doe"
};
console.log("**Example Output:**");
console.log("Cleanup Sensitive Data");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log();
console.log("Before cleanup:");
console.log(testData);
delete testData.password;
delete testData.sessionToken;
console.log("After cleanup:");
console.log(testData);

console.log("Does 'password' exist?:","password" in testData); 
console.log("Does 'sessionToken' exist?:","sessionToken" in testData); 
console.log("Does 'username' exist?:","username" in testData);
console.log();
if (!("password" in testData) && !("sessionToken" in testData)) {
    console.log("✓ Sensitive data removed successfully!");
} else {
    console.log("✓ Sensitive data still Exists!");
}
