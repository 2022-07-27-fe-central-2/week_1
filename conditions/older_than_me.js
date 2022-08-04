// input is string: name, and age: number
// should hold a variable myAge: number
// should return a string `${name} is older than me` if age is older

const name = 'George'
const age = 51

const myAge = 22

if (myAge >= age) {
  console.log('I am older')
}
else if (age > myAge) {
  console.log (`${name} is older than me!`)
}
