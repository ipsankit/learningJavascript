let status= "Passed";
let errorCount=0;
let statusok = (status=== "PASSED" || status=== "SKIPPED");
let noerrors = (errorCount===0);
console.log("**Example Output:**");
console.log("Test Status:", status );
console.log("Error Count:", errorCount );
console.log("Validation:");
console.log("Status is acceptable:", statusok);
console.log("No errors:", noerrors);
if (statusok && noerrors) {
console.log("✅ Test completed successfully");
} else {
    console.log("❌ Test has issues");
}