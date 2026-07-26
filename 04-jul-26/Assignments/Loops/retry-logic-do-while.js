function runFlakyTest() {
    return Math.random() > 0.7;
}
let testName= "Login Test";
let attempts=  0;
let maxAttempts= 5;
let testPassed=false;
console.log("**Example Output:**");
console.log("Retry Logic Test Runner");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Running:",testName);
console.log("Max attempts:",maxAttempts); 
do {
    attempts++;
    console.log("Attempt",attempts,"...");
    testPassed = runFlakyTest();
    if (testPassed) {
        
        console.log("✓ Test PASSED!");
    } else  {
        console.log("✗ Test FAILED");
        if (attempts < maxAttempts){
            console.log("Retrying...");
        }
        
    }
} while (!testPassed && attempts < maxAttempts);

if (testPassed) {
console.log("✓ Test passed on attempt",attempts);
} else {
    console.log("✗ Test failed after",maxAttempts,"attempts");
}