// const tinderUser =  new Object() //singleton object
const tinderUser = {} // non singleton object

tinderUser.id="121abc"
tinderUser.name="Sammy"
tinderUser.isloggin=false
// console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullname : {
        userFullname: {
            firstname : "hitesh",
            lastname : "kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [  // objects array 
    {
        id : 1,
        email : "hitesh"
    },
    {
        id : 2,
        email : "shammay"
    },
    {
        id : 3,
        email : "sharma"
    }
    
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggin'))



