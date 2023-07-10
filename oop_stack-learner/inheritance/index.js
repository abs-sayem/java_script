/**
 * @Inheritance
 * Inheritance is the concept of holding the properties of another class by inherit the class
 * Creating seperate '.js' file for every class is easily maintainable. [a Class a File]
 * We have three classes here and we want to access them from index.js file
 * We do so- we have to use 'module.exports = Class' in the end of every file - This will make the class possible to import from other class
 * Now, we can import them in 'index.js' file by 'const Person = require('./Person')' cpommand.
 */

// Import the classes
const Person = require('./Person')
const Teacher = require('./Teacher')
const Student = require('./Student')

// Create objects using these Classes
const p1 = new Person("Mahareen Laiba", "mahareenlaiba@gmail.com")
const t1 = new Teacher("Maharunnesa", "maharunnesa@gmail.com", "Computer 101", 50000)
const s1 = new Student("Maharun Aina", "maharunaina@gmail.com", ["Computer 101", "Mathematics-1", "Statistics"], 500000)
t1.name = "Abs Sayem"
console.log(p1)
console.log(t1 instanceof Teacher)
console.log(t1 instanceof Person)   //It will also True
console.log(s1._subjects)

const p2 = t1
console.log(p2)
const t2 = p1
console.log(t2)

s1.print()
t1.print()