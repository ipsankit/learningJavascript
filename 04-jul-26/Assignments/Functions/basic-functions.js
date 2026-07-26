function generateEmail(firstName, lastName) {
    return firstName.toLowerCase() + "." + lastName.toLowerCase() + "@test.com";
}
function generateUsername(firstName, lastName) {
return firstName.toLowerCase() + lastName.toLowerCase();
}

function generatePassword (prefix) {
return prefix + "@123";
}
let email = generateEmail("ANKIT","JAIN");
let username = generateUsername("Ankit","Jain");
let password = generatePassword("Test");
console.log(email);
console.log(username);
console.log(password);