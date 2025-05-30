// Object Literal
const user = {
    username : "hitesh",
    loginCount : 8,
    singedIn : true,
    getUserDetails : function(){
        console.log("Got user details from database")
        console.log(`username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username) //print value
// console.log(user.getUserDetails()) // execute function
// console.log(this) // give currenct context {}, in browser give more current context

//************************ constructor function */
function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this;  // check after comment this also
}

// const userOne = user("hitesh",12,true)  // in this context add this
// const userTwo = user("chaiAurCode",45,false) // in this context override this thats why we will not use this

const userOne = new user("hitesh",12,true)  // new keyword give new instance
const userTwo = new user("chaiAurCode",45,false) 

console.log(userOne)
console.log(userTwo)
// console.log(userOne.constructor) // give function : user
//instanceOf function