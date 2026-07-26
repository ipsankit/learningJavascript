let testEmails =[
"user1@test.com",
"user2@test.com",
"user3@test.com"];
console.log("**Example Output:**");
console.log("Test Email Management");
console.log("Initial emails:",testEmails[0],testEmails[1],testEmails[2]);
console.log("Count:",testEmails.length);
console.log("After Adding user4@test.com to the END:",testEmails.push("user4@test.com"));
console.log(testEmails);
testEmails.unshift("admin@test.com");
console.log("After Adding admin@test.com to the BEGINNING:",testEmails);
console.log("After Removing the last email:",testEmails.pop());
console.log("After Removing the first email:",testEmails.shift());
console.log("Print final emails and count:",testEmails,testEmails.length);
