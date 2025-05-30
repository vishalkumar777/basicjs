const promises_one = new Promise(function(resolve,reject){
//   Do an async task
//   DB calls, cryptography, network
    setTimeout(function(){
    console.log('Async task')
    resolve() //conect resolve and then
  },1000)  
})

promises_one.then(function(){
    console.log('promise consumed')
})

// ******************* SEcond Way*****************
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})
// ******************** pass data with resolve   PROMISE 3*************************
const promise_three = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"hitesh",email:"email@gmail.com"})
    },1000)
})
promise_three.then(function(user){
    console.log(user)
})

//  ********** chaining & reject & finaly   PROMISE 4***********
const promise_four = new Promise(function(resolve,reject){
   setTimeout(function(){
     let error = true
        if(!error){
            resolve({username:"hitesh",email:"demao@gmail.com"})
        }else{
            reject('error : something went wrong please try after some time')
        }
   },1000)
})
// promise_four.then().then() // chaining
promise_four.then(function(user){
    // console.log(user.username)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){ // default
    console.log('The promise is either resolved or rejected')
})

// ****************** async await***********************
const promise_five = new Promise(function(resolve,reject){
    setTimeout(function(){
         let error = true
            if(!error){
                resolve({username:"hitesh",email:"demao@gmail.com"})
            }else{
                reject('error : something went wrong please try after some time')
            }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response=await promise_five;
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()

//************************* fetch with async await*/
async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json() // object to json
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
getAllUsers()

//************** fetch useing then catch*********/
fetch('https://jsonplaceholder.typicode.com/users').then(function(response){ //we know data will get then we use response 
    // console.log(response)
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})