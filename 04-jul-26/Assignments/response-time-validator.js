let responsetime = 5;
console.log("**Example Output:**");
console.log("Response Time Test");
console.log("Threshold: 3 seconds");
console.log("Actual:", responsetime, "seconds");
if (responsetime < 3) {
console.log("✅ Performance test PASSED: (responsetime", responsetime, "seconds)");
} else {
    console.log("❌ Performance test FAILED (responsetime", responsetime,  "seconds, threshold: 3 seconds)");
}


