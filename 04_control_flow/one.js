// if
const isUserloggedIn = true
const temperature = 49

if ( temperature === 49 ){
    console.log("Temperature is less than 50");
}
    else if(temperature === 50){
    console.log("temperature is 50");
    }
 else {
    console.log("temperature is greater than 50");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// All condition are true so && working
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
// If any one condition are true so || working.
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}