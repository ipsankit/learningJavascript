function makeUrlBuilder(baseUrl) {
    return function(path) {
        return baseUrl + path;
    };
    
    
}
const stagingUrl = makeUrlBuilder("https://staging.example.com");
console.log(stagingUrl("/login"));
console.log();
const productionUrl = makeUrlBuilder("https://example.com");
console.log(productionUrl("/login"));
console.log();
const apiUrl = makeUrlBuilder("https://dev.example.com");
console.log(apiUrl("/api/users"));