let testTracker = {
suiteName: "Login Module",
environment: "Staging",
browser: "Chrome"}

let tests= [
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
];

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
for (let i = 0;i < tests.length;i++) {

}
