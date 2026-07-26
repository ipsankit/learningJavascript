let testResult="PASSED";
console.log("Test Status:", testResult);
if (testResult === "PASSED") {
    console.log("✓ Test passed successfully");
} else if (testResult=== "FAILED") {
    console.log("✗ Test failed - check logs");
} else if (testResult==="SKIPPED") {
    console.log("⊘ Test skipped");
} else  {
    console.log("? Unknown test status");
}