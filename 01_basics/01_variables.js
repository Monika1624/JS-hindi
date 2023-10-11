const accountId= 90418
let accountEmail= "monika@gmail.com"
var accountPassword= "12345"
accountCity= "Jaipur"
console.log(accountId)

//accountId= 89789 not allowed

accountEmail= "mannu@gmail.com"
accountPassword= "897897"
accountCity= "Jammu"
/*
if we only decalre the variable so,the
value will be undefined in js.
*/
let accountState;
/*
 perfer not to use var becoz of issue
 in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])