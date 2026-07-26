function generateEmail(firstName, lastName) {
    return firstName.toLowerCase() + "." + lastName.toLowerCase() + "@test.com";
}
function generateUsername(firstName, lastName) {
return firstName.toLowerCase() + lastName.toLowerCase();
}

function generateTestUser(firstName,lastName){
return {
    name: firstName + " "+ lastName,
    email:generateEmail(firstName,lastName),
    username:generateUsername(firstName,lastName),
    password:"Test@123",
    userId:1000,
    isActive: true
};
}

let user1=generateTestUser("Ankit","Jain");
let user2=generateTestUser("John","Doe");

console.log(user1);
console.log(user2);