function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(5,6)

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result =addTwoNumbers(5,7);
// console.log("Result : ",result)

function loginUserMessage(username='sam'){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){ //rest operator and also called spread operator val1=200 val2=400
    return num1
}
// console.log(calculateCartPrice(200,400,600,400,450,120))

const user = {
    username : "hitesh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
username : "hitesh",
price :399
});

const myNewArray = [200,400,600,800]
function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,4500,6300,500]))