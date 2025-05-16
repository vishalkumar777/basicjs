const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`)
        console.log(this)
    } 
}

// user.welcomeMessage()
// user.username = "rohan"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username) // give undefined this function use in object not in function
// }

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username) // give undefined this function use in object not in function
// }

// ++++++++++++++++ arrow function +++++++++++
// const chai = ()=>{ 
//     let username = "hitesh"
//     console.log(this.username) // give undefined this function use in object not in function
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 +  num2
// }

// const addTwo = (num1, num2) => num1 + num2 // impleshit return in arrow function

// const addTwo = (num1, num2) => (num1 + num2) // use parentishis () and  if use curlibrasis {} then you have to use return
const addTwo = (num1, num2) => ({name : "vikram"}) // () also use to return object
console.log(addTwo(3,5))


