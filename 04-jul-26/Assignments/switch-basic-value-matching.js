let testResult="PASSED";
switch (testResult) {
    case "PASSED":
        console.log("✓ Test passed successfully");
        break;


    case "FAILED":
        console.log("✗ Test failed - check logs");
        break;
        
     case "SKIPPED":
        console.log("⊘ Test skipped");
        break;

     case "PENDING":
        console.log("⏳ Test pending - not yet run");
        break;
     default:
        console.log("? Unknown test status");
              
       
}