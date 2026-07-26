let testRunner = {
name: "Login Suite",
totalTests: 5,
passedTests: 0,
failedTests: 0,

start: function () {
    console.log("Running test suite:", this.name);
},
pass: function () {
    this.passedTests++;
    console.log("✓ Test passed! Total passed:",this.passedTests);
},
fail: function() {
    this.failedTests++;
    console.log("✗ Test failed! Total failed:",this.failedTests);
},
getReport: function() {
let passRate = (this.passedTests/this.totalTests)*100;
console.log("Test Suite Report:");
console.log("Name:",this.name);
console.log("Total Tests:",this.totalTests);
console.log("Passed:",this.passedTests + "(" + passRate + "%)");
console.log("Failed:",this.failedTests);
console.log("Not yet run:", this.totalTests - this.passedTests - this.failedTests);
}
};

console.log("Test Runner with Methods");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

testRunner.start();

testRunner.pass();
testRunner.pass();
testRunner.pass();

testRunner.fail();

testRunner.getReport();

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

let testCase = {
name: "Login Test",
status: "NOT STARTED",
duration: 0,
startTime: null,

start: function() {
this.status = "RUNNING";
this.startTime = Date.now();
console.log("Started:",this.name);
console.log("Status:",this.status);

},
pass: function() {
    this.status = "PASSED";
    let endTime = Date.now();
    this.duration = (endTime - this.startTime)/1000;
    console.log(this.name + " PASSED");
},
fail: function(reason) {
this.status = "FAILED";
this.reason = reason;
}
};

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Test Case with Methods:");
testCase.start();
testCase.pass();