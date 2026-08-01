class TestCase {
    constructor(testName) {
        this.testName=testName;
        this.status = "PENDING";
        this.steps=[];
    }
    addStep(step){
        this.steps.push(step)
        return ;
    }
    run(){
        console.log("Running:",this.testName);
        for (let i=0;i<this.steps.length;i++) {
console.log("Step",(i+1),":",this.steps[i]);
        }
        this.status="PASSED";
    } 
    getSummary(){
        return `${this.testName} - ${this.status} ${this.steps.length} steps)`; 
    }
}

const test = new TestCase("Login Test");

test.addStep("Open browser");
test.addStep("Enter credentials");
test.addStep("Click login");
test.run();
console.log(test.getSummary());
