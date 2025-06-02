let myName  = "hitesh  "
let mychannel =  "chai  "

// console.log(myName.trueLength) 

let myHeros = ["thos", "spiderman"]

let heroPower = {
    thod : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy powder is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){ // know if any object will create then this function can be accesable
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`)
}

// heroPower.hitesh()  //ob will work
// myHeros.hitesh()    //arr array can get properties/method from object becouse of child
// myHeros.heyHitesh()  // will work
// heroPower.heyHitesh() // parent cant get properties/method from child

//************* inheritance ***************
const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}
const TechingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TechingSupport // know TASupport will get all properties of TechingSupport
}

Teacher.__proto__= User // techer can get all properties of user

//modern syntax
Object.setPrototypeOf(TechingSupport,Teacher)// techingSupport will get all property of teacher

let anotherUsername = "ChaiAurCode  "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()