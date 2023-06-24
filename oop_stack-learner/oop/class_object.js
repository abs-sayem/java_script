/**
 * @description
 * Class-Object
 * Class : Class is a collection of attributes and related functions using those attributes. It is like a built-in datatype.
 * Object: Object is an instance of any Class. Object holds the attributes and functionality of that class.
 */

// We can create an object like:
const person = {}

/* 
 * const = keyword that construct the object
 * person = is the name of the object, by which we will call it further
 * {} = we can pass the values of the attributes of the class the object created from
*/

// Give some attributes of the object:
person.name  = "Mahareen Siddiq Laiba"
person.email = "mahareenlaiba@gmail.com"
person.phone = "01825000000"

// Lets see them from console:
console.log(person)

// So, in this way we can create an object and give it some attributes and corresponding values.

//========================================================================

// We can do the same by defining a Class: We can create a Class like:
class Person {}

/* 
 * class = keyword that indicates the class
 * Person = is the name of the Class
 * {} = we can add attributes and functionality inside the brakets.
*/

// make a object of this class:
const p1 = new Person()

// We can now give the attributes of the object like previous.
p1.name  = "Maharun Siddiq Aina"
p1.email = "maharinaina@gmail.com"
p1.phone = "01727000000"

// To see the properties:
console.log(p1)

//======================================================================

// We can define the attributes inside the class and the object of that class can access them.
class Person1{
    name  = "Mahar Siddiq Aifa"
    email = "maharaifa@gmail.com"
    phone = "01313000000"
}
const per1 = new Person1()
console.log(per1)

/* The main problem is- for every new objects it will give the same attributes. But in real life we have different 
attributes for different objects. To solve this issue:
 * We can make class that will have attribute holders and can define different attibutes while creating new objects.
 * Here comes the concept of 'Constructor'
 * A Constructor is a module, namely 'constructor', of a class that can hold all the attributes that can be define with the creation of the objects.
 * Class can have some static attributes also that can not be changed.
*/

class Account{
    acc_name = "Standard"
    constructor(name, email, phone){
        // This will run when creating any instance (object). 
        this.name  = name
        this.email = email
        this.phone = phone
    }
}
const acc1 = new Account("Mahareen Laiba", "mahareenLaiba@gmail.com", "01727000000")
//We can create several objects with different attributes
const acc2 = new Account("Maharun Aina", "maharunaina@gmail.com", "01825000000")
const acc3 = new Account("Mahar Aifa", "maharaifa@gmail.com", "01913000000")

console.log(acc1)
console.log(acc2)
console.log(acc3)