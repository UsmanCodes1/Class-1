//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Undefined	"undefined"
// Null	        "object"
// Boolean	    "boolean"
// Number	    "number"
// String	    "string"
// Symbol       "Symbol"
// BigInt	    "bigint"


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["SpiderMan", "SuperMan", "CaptainAmerica"];
let myObj = {
    name: "Usman",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  Heap (Non primitive)

// let subject="Math"
// let anotherSubject=subject
// anotherSubject="Computer Science"
// console.log(subject);
// console.log(anotherSubject);


let userOne = {
    Name:"Umair",
    email:"hello@.com"
}
let userTwo = userOne
userTwo.email="Hi@.com"

console.log(userOne.email);
console.log(userTwo.email);