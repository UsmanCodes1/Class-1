const name="Usman"
const repocount=4
console.log(name+   repocount+  "value");
// This is not a good way

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName=new String ('Usman')
console.log(gameName[0]);
// It define value.
console.log(gameName.__proto__);
console.log(gameName.length);
// Use to count  alphabet
console.log(gameName.toUpperCase());
// Convert the spelling in to uppercase
console.log(gameName.charAt(2));
// To know the position of Alphabet
console.log(gameName.indexOf('m'));
// To know the position of alphabeet in Number
console.log(typeof gameName);

const newString = gameName.substring(0,3)
console.log(newString);
// Print the number 0 to 3
const anotherString = gameName.slice(-5,3)
console.log(anotherString);

const url="https://www.usman.com/about%20us/"
console.log(url.replace('%20','-'))
console.log(url.includes('usman'))