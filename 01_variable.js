const accountId=256655
let accountEmail="hitesh@google.com"
var accountPassword="65656565" // scope problem old style
accountCity="delhi"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId=2 //not allowed

accountEmail="rohoan@gmail.com"
accountPassword="656345"
accountCity="bangluru"

console.log(accountId);
console.log(accountId,accountEmail, accountPassword,accountCity)
console.table([accountId,accountEmail, accountPassword,accountCity, accountState])