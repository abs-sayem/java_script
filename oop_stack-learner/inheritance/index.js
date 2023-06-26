/**
 * @Inheritance
 * Inheritance is the concept of holding the properties of another class by inherit the class
 * Creating seperate '.js' file for every class is easily maintainable. [a Class a File]
 * We have three classes here and we want to access them from index.js file
 * We do so- we have to use 'module.exports = Class' in the end of every file - This will make the class possible to import from other class
 * Now, we can import them in 'index.js' file by 'const Person = require('./Person')' cpommand.
 */

// Import the classes
const Person  = require('./Person');
const Student = require('./Student')
const Teacher = require('./Teacher')