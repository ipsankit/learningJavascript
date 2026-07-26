let testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
let testResults = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];
console.log("**Example Output:**");
console.log("Test Execution Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("All Tests:");
let failedResult = 0;
for (let i =0;i<testNames.length;i++) {
    console.log((i+1) + "." + testNames[i] + ":" + testResults[i]);
    if (testResults[i]==="FAILED") {
    failedResult++;
}
}
console.log();
console.log("Failed Tests (requires attention):");
for (let i =0;i < testNames.length;i++) {
if (testResults[i]==="FAILED") {
console.log("-" + testNames[i]);
}
}
console.log("Total failures:",failedResult);