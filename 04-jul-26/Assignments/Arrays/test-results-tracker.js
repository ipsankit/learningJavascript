let testResults = [];
console.log("**Example Output:**");
console.log("Running Test Suite...");
testResults.push("PASSED")
console.log(testResults);
console.log("Test 1 completed:",testResults[0]);
testResults.push("PASSED");
console.log("Test 2 completed:",testResults[1]);
testResults.push("FAILED");
console.log("Test 3 completed:",testResults[2]);
testResults.push("PASSED");
console.log("Test 4 completed:",testResults[3]);
testResults.push("SKIPPED");
console.log("Test 5 completed:",testResults[4]);
console.log("Total tests run:",testResults.length);
console.log("Results:",testResults);
console.log("Contains failures:Yes(found at index",testResults.indexOf("FAILED")+")");