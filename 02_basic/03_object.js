// singleton : when oject create by constructor
// Object.create


// object literals: when we create object by litrels then object is not singleton
const mySym = Symbol("key")
const jsUser = {
    name : "Hitesh",
    "full name" : "Hitesh kumar",
    [mySym] : "mykey1",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "suturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"]) // good way to display object value
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) // for display symbol only


jsUser.email="hitesh@chatgpt.com"
// Object.freeze(jsUser) // after that we cant update value of any key
jsUser.email="vikram@chatgpt.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js Developers");
}

console.log(jsUser.greeting)  //  only function refference available in variable
console.log(jsUser.greeting())  // display hello js developers with undefined

jsUser.greeting2 = function(){
    console.log(`hello ${this["full name"]} Wellcome to Deveploers World`)
}
console.log(jsUser.greeting2())




