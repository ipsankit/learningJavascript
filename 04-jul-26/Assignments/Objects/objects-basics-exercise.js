let testCase = {id: "TC-001",
name: "Login with valid credentials",
priority: "High",
status: "Passed",
duration: 2.5,
browser: "Chrome"
};
console.log("**Example Output:**");
console.log("Test Case Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("ID:",testCase.id);
console.log("Name:",testCase.name);
console.log("Priority:",testCase.priority);
console.log("Status:",testCase.status);
console.log("Duration:",testCase.duration + "s");
console.log("Browser:",testCase.browser);
console.log("Adding tester...");
testCase.tester = "John Doe";
console.log("Changing status...");
testCase.status = "Failed";

console.log(testCase);