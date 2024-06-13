// //const gameName = "Md Arshad"
// //console.log(typeof gameName)
// const name = "Md Arshad"
// const repoCount = 50
// //console.log(name+ repoCount +"Value")
// //console.log('Hello my name is ${name} and my repo count is is ${repoCount}')

const gameName = new String('Md Arshad')

// console.log(gameName[4])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(3,8)
console.log(newString)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne ="    Arshad   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://Arshad.com/Arshad%20Alam"

console.log(url.replace('%20','-'))
console.log(url.includes("Arshad"))

console.log(gameName.split('1'))

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

