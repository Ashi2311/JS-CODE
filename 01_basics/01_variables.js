const accountId = 12345 
let accountEmail = "ashish@gmail.com"
var accountPass = "12344321" 
accountCity = "Nawada"
let accountState ;

// accountId = 23   // not alowed 2nd time when const is available

accountEmail = "prince@gmail.com"
accountPass = "2345123"
accountCity = "Nalanda"

// prefer to use var instead of let bcz of issue in block scope and functional scope
console.log(accountId)
console.table([accountId , accountEmail, accountPass , accountCity, accountState]);