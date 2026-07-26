let testNames = ["Login Test","Logout Test","Search Test","CheckOut Test","Payment Test","Profile Test"];
let testResults = ["PASSED","FAILED","PASSED","PASSED","SKIPPED","FAILED"];
let testDurations = [2.5,1.8,3.2,2.1,0.0,2.4];
let totalTest = testNames.length;
let totalDuration = 0;
let failedTest = [];
let passed = 0;
let failed = 0;
let skipped = 0;
console.log("**Example Output:**");
console.log("╔═══════════════════════════════════════════╗");
console.log("║       TEST EXECUTION FINAL REPORT         ║");
console.log("╚═══════════════════════════════════════════╝");
console.log("Test Details:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
for (let i=0;i<testNames.length;i++) {
console.log((i+1) + "." + testNames[i]);
console.log("Result:",testResults[i]);
console.log("Duration:",testDurations[i] + "s");
if (testResults[i]==="PASSED"){
    passed++;
} else if (testResults[i]==="FAILED") {
    failed++;
    failedTest.push(testNames[i]);
} else if (testResults[i]==="SKIPPED") {
skipped++;

}
totalDuration = totalDuration + testDurations[i];

}

let average = (totalDuration/totalTest);
let passRate = (passed / totalTest)*100;
let failRate = (failed / totalTest)*100;
let skipRate = (skipped/ totalTest)*100;

console.log("Summary Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Total tests:",totalTest);
console.log("Passed:",passed,"("+passRate.toFixed(1)+"%)");// 3 (50.0%)
console.log("Failed:",failed,"("+failRate.toFixed(1)+"%)");// 2 (33.3%)
console.log("Skipped:",skipped,"("+skipRate.toFixed(1)+"%)");// 1 (16.7%)"
console.log();
console.log("Duration:");
console.log("Total:",totalDuration); // 12.0s
console.log("Average:",average,"per test");
console.log();
console.log("Failed Tests:");
for (let i=0;i<failedTest.length;i++) {
console.log("-",failedTest[i]);
}

console.log();
if (failed > 0) {
    console.log("Overall Status: ⚠️  NEEDS ATTENTION");
} else {
    console.log("Overall Status: ✅ ALL TESTS PASSED");
}
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");