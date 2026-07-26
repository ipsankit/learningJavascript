let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
console.log("**Example Output:**");
console.log("Test Execution Results");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Counting results...");
console.log("Test Statistics:");
let passedTest = 0;
let failedTest = 0;
let skippedTest = 0;
for (let i = 0; i < testResults.length;i++) {
if (testResults[i]==="PASSED") {
passedTest++
} else if (testResults[i]==="FAILED") {
    failedTest++
} else if (testResults[i]==="SKIPPED") {
skippedTest++
}
}
let passRate = (passedTest/testResults.length)*100;
let failRate = (failedTest/testResults.length)*100;

console.log("Total tests:",testResults.length);
console.log("Passed:",passedTest,"✓");
console.log("Failed:",failedTest,"✗");
console.log("Skipped:",skippedTest,"⊘");
console.log("Pass rate:",passRate + " % " );
console.log("Fail rate:",failRate + " % ");


  