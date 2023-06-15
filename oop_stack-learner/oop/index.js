// Create an Object: We can create a class by: 
const person = {}

// Give attributes of the object
person.name = "Abs Sayem"
person.email = "abssayem@gmail.com"
person.phone = "01825507837"
person.node_version = 18.65
// See the person object
console.log(person)

// If we have thousand objects, it's better to create a class and make objects of that Class.
// Creating a Class: 
class Person1{}
//Create objects of this class
const p1 = new Person1()
p1.name = "Person 1"
p1.email = "person1@gmail.com"
console.log(p1) 

//Making the Class more useful
class Person2{
    name = "Person"
    email = "person@email.com"
}
const p21 = new Person2()
const p22 = new Person2()
console.log(p21)
console.log(p22)

/*[Interesting] when we create an object and print something, it successfully shows me that. But in our class we didn't 
define any function to return the attributes of our class. How is this possible!! */
//This actually done by the Constructor. When we create a Class, a default constructor created with it.
//Lets modify the constructor
console.log("\n===Define Constructor===\n")
class Person3{
    //name = "Someone3"
    //email = "someone3@gmail.com"
    constructor(name, email){      // We can pass arguments to the constructor
        this.name = name        // This is like an object. This indicates the internal attribuates of a class for a specific object
        this.email = email
    }
}
const p31 = new Person3("Abs_Sayem", "abs.alchemy20@gmail.com")
const p32 = new Person3("Someone32", "someone32@gmail.com")

console.log(p31)
console.log(p32)
