const accountId = 1445;
let accountEmail = "aniket@google.com";
var accountPassword = "21244";
accountCity = "Jaipur"; //variables can also be initialised and declared without any keyword in JS but we should not use this method.
let accountState;

// accountId = 2; // not allowed to change in const

accountEmail = 'hc@hc.com';
accountPassword = "jdigsuia";
accountCity = "vns";

console.log(accountId);

/*
Prefer not to use 'var' because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])