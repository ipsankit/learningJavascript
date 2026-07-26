let testResults = [{
name: "Login Test",
result: "PASSED",
duration: 2.5,
},
{
name: "Logout Test",
result: "FAILED",
duration: 1.8,
},
{
name: "Search Test",
result: "PASSED",
duration: 3.2,
},
{
name: "Checkout Test",
result: "SKIPPED",
duration: 0.0,
},
{
name: "Payment Test",
result: "PASSED",
duration: 2.1,
}
];
let totalTest=testResults.length;
let passedTest=0;
let failedTest=0;
let skippedTest=0;
let totalDuration = 0;
console.log("**Example Output:**");
console.log("Test Execution Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Test Results:");
for (let i =0;i<testResults.length;i++) {
console.log(i+1+"."+testResults[i].name);
console.log("Result:",testResults[i].result);
console.log("Duration:",testResults[i].duration + "s");
if (testResults[i].result==="PASSED") {
passedTest++;
} else if (testResults[i].result==="FAILED") {
failedTest++;
} else if (testResults[i].result==="SKIPPED") {
    skippedTest++;
}
totalDuration = totalDuration + testResults[i].duration;
}

let passRate = (passedTest/totalTest)*100;
let failRate = (failedTest/totalTest)*100;
let skippedRate = (skippedTest/totalTest)*100;
let averageDuration = totalDuration/totalTest;
console.log("Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Total tests:",totalTest);
console.log("Passed:",passedTest + "(" + passRate.toFixed(1) + "%)");
console.log("Failed:",failedTest + "(" + failRate.toFixed(1) + "%)");
console.log("Skipped:",skippedTest + "(" + skippedRate.toFixed(1) + "%)");
console.log("Total duration:",totalDuration + "s");
console.log("Average duration:",averageDuration + "s");
