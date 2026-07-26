let user1 = {username:"admin@test.com",
password: "********",
email: "admin@test.com",
role: "admin"
};
let user2 = {username:"user1@test.com",
password: "********",
email: "user1@test.com",
role: "user"
};
let user3 = {username:"user2@test.com",
password: "********",
email: "user2@test.com",
role: "user"
};

let testUsers = [user1,user2,user3];
let adminCount=0;
let regularUser=0;
console.log("**Example Output:**");
console.log("Test Users Database");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━")
for(let i = 0;i<testUsers.length;i++) {
console.log("User:",i+1);
console.log("Username:",testUsers[i].username);
console.log("Password:",testUsers[i].password);
console.log("email:",testUsers[i].email);
console.log("role:",testUsers[i].role);
if (testUsers[i].role==="admin") {
adminCount++;
} else {
regularUser++;
}
}
console.log("Summary:");
console.log("Total users:",testUsers.length );
console.log("Admins:",adminCount); 
console.log("Regular users:",regularUser);