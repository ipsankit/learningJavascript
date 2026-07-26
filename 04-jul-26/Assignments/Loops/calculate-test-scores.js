let testScores =[85, 92, 78, 95, 88, 73, 90, 87];
let totalScoreofall = 0;
let highestScore = 0;
let lowestScore = 100;
for (let i =0; i < testScores.length; i++) {
totalScoreofall = totalScoreofall + testScores[i];
if (testScores[i] > highestScore) {
highestScore = testScores[i];
}


if (testScores[i] < lowestScore) {
    lowestScore = testScores[i];
}
}
let average = totalScoreofall / testScores.length;
console.log("**Example Output:**");
console.log("Test Score Analysis");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Scores:",testScores);
console.log("Calculating statistics...");
console.log("Results:");
console.log("Total:",totalScoreofall);
console.log("Average:",average);
console.log("Highest:",highestScore);
console.log("Lowest:",lowestScore);
