let testCases = ["Login with valid credentials",
"Login with invalid password",
"Login with empty username",
"Logout functionality",
"Remember me checkbox"
];

console.log("**Example Output:**");
console.log("Login Module Test Suite");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log();
for (let i =0; i < testCases.length; i++) {
console.log(i,testCases[i]);
}
console.log("Total test cases:",testCases.length);

/*
let number = 1;
for (let testcase of testCases) {
console.log(number + "." + testcase);
number++;
}

console.log();
console.log("Total test cases:" + testCases.length);
*/