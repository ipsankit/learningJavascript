let testTracker = {
suiteName: "Login Module",
environment: "Staging",
browser: "Chrome",
tests: [
    {name: "Valid credentials",
  result: "PASSED",
  duration: 2.5},

{name: "Invalid password",
result: "FAILED",
duration: 1.8},

{name: "Empty username",
result: "FAILED",
duration: 1.2},

{name: "Remember me checkbox",
result: "PASSED",
duration: 2.1}
]};
let passedTest=0;
let failedTest=0;
let totalDuration =0;

console.log("Example Output:");
console.log("╔══════════════════════════════════════════╗");
console.log("║       TEST SUITE EXECUTION REPORT        ║");
console.log("╚══════════════════════════════════════════╝");
console.log("Suite Information:");
console.log("Name:",testTracker.suiteName)
console.log("Environment:",testTracker.environment);
console.log("Browser:",testTracker.browser);
console.log();
console.log("Test Results:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
for (let i = 0;i < testTracker.tests.length;i++) {
console.log("Test:"+ (i + 1), testTracker.tests[i].name );
console.log("Result:",testTracker.tests[i].result);
console.log("Duration:",testTracker.tests[i].duration);
if (testTracker.tests[i].result==="PASSED") {
passedTest++;
} else {
  failedTest++;
}
totalDuration = totalDuration + testTracker.tests[i].duration;
}

let totalTest= testTracker.tests.length;

let averageDuration= (totalDuration/totalTest).toFixed(1) + "s";
let passRate=(passedTest/totalTest)*100;
let failRate=(failedTest/totalTest)*100;
console.log("Summary Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Total tests:",totalTest);
console.log("Passed:",passedTest + "(" + passRate.toFixed(1) + "%)");
console.log("Failed:",failedTest + "(" + failRate.toFixed(1) + "%)");
console.log("Total duration:",totalDuration + "s");
console.log("Average duration:",averageDuration);
if (failedTest===0) {
console.log("Status: ✅ All tests passed. Ready for deployment");
} else {
  console.log("Status: ⚠️  Review failed tests before deployment");
}

console.log("╚══════════════════════════════════════════╝");
