function configureTest(testName,
browser = "Chrome",
timeout=30000,
environment="staging"
) {
console.log("Test:",testName);
console.log("Browser:",browser);
console.log("Timeout:",timeout + "ms");
console.log("Environment:",environment);
}
console.log("--- All defaults ---");
configureTest("Login Test");

console.log("--- Custom browser ---");
configureTest("Login Test", "FireFox");

console.log("--- Custom browser ---");
configureTest("Login Test", "Safari", 60000);

console.log("--- Custom browser ---");
configureTest("Login Test", "Chrome", 30000, "Production");
console.log("--- Custom browser ---");
configureTest("Edge Case", "");        // empty string
console.log("--- Custom browser ---");
configureTest("Edge Case", undefined);
