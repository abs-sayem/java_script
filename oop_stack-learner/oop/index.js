// // ============= Class-Object-Constractor ================//
// console.log("=====Class-Object-Constractor=====")
// // Create an Object: We can create a class by: 
// const person = {}

// // Give attributes of the object
// person.name = "Abs Sayem"
// person.email = "abssayem@gmail.com"
// person.phone = "01825507837"
// person.node_version = 18.65
// // See the person object
// console.log(person)

// // If we have thousand objects, it's better to create a class and make objects of that Class.
// // Creating a Class: 
// class Person1{}
// //Create objects of this class
// const p1 = new Person1()
// p1.name = "Person 1"
// p1.email = "person1@gmail.com"
// console.log(p1) 

// //Making the Class more useful
// class Person2{
//     name = "Person"
//     email = "person@email.com"
// }
// const p21 = new Person2()
// const p22 = new Person2()
// console.log(p21)
// console.log(p22)

// /*[Interesting] when we create an object and print something, it successfully shows me that. But in our class we didn't 
// define any function to return the attributes of our class. How is this possible!! */
// //This actually done by the Constructor. When we create a Class, a default constructor created with it.
// //Lets modify the constructor
// console.log("\n===Define Constructor===\n")
// class Person3{
//     //name = "Someone3"
//     //email = "someone3@gmail.com"
//     constructor(name, email){      // We can pass arguments to the constructor
//         this.name = name        // This is like an object. This indicates the internal attribuates of a class for a specific object
//         this.email = email
//     }
// }
// const p31 = new Person3("Abs_Sayem", "abs.alchemy20@gmail.com")
// const p32 = new Person3("Someone32", "someone32@gmail.com")

// console.log(p31)
// console.log(p32)

// console.log("===============================================[End of Class-Object-Constractor]\n")
// //===============================================================================================


// // =============== Method ================//
// /* The basic work of methods are doing something relatable using the properties of the class. 
// Methods can be defined in two ways-
//     methodName(){
//         Definition of the method
//     }
// and the 2nd method is-
// > Arrow Method- has problem with `this`. So, if have something to do with 'this', don't use it. Otherwise there is no 
// problem of using `this` method style.
//     methodName = () => {
//         Defination of the method
//     }
// */

// console.log("=====Method=====")

// class MPerson{
//     constructor(name, email, phone){
//         this.name = name
//         this.email = email
//         this.phone = phone
//     }
//     // lets define module
//     changeName(new_name){
//         this.name = new_name
//     }
//     changeEmail(new_email){
//         this.email = new_email
//     }
//     changePhone(new_phone){
//         this.phone = new_phone
//     }
//     createProfile(){
//         console.log(`Name: ${this.name}, Email:${this.email}, Phone:${this.phone}`)
//     }
//     // Define module in another way [arrow (=>)]
//     // Print the whole object
//     print = () => {
//         console.log(this)   //[`this` determines the whole object]
//         // this has a issue with arrow module.So, it better not to use `this` with arrow
//     }
// }

// // Create objects of the class
// const mp1 = new MPerson("Mahareen Siddiq Laiba", "mahareen_laiba@gmail.com", "01825507837")
// const mp2 = new MPerson("Maharun Siddiq Aina", "maharunaina@gmail.com", "01825507838")
// const mp3 = new MPerson("Mahar Siddiq Aifa", "maharaifa@gmail.com", "01825507839")

// mp1.createProfile()
// mp3.changeName("Mahar Siddiq Laifa")
// mp2.changePhone("01313406618")

// //console.log(mp1)
// //console.log(mp2)
// //console.log(mp3)
// mp1.print()
// mp2.print()
// mp3.print()

// console.log("==========================================================[End of Method ]\n")
// //=========================================================================================


// //==========Access_Modifiers(Private Properties)==============

// console.log("=====Private Properties=====")
// /* In javaScript there is no concept of Access Modifier. That means there is no control from the compiler end.
// But we can give indication to the community(programmers) about the private properties, so that they don't 
// change them.
// For properties we can use underscore(_) before property name. Like: 'this._name'
// Similarly, For modules we will use getter and setter methods. Like: getname(){return this._name} and setName(new_name){this._name=new_name}
// */

// class AMPerson{
//     constructor(name, email, phone){
//         this._name = name       
//         this._email = email
//         this._phone = phone
//     }
//     // lets define module
//     getName(){
//         return this._name
//     }
//     setName(new_name){
//         this._name = new_name
//     }
//     getEmail(){
//         return this._email
//     }
//     setEmail(new_email){
//         this._email = new_email
//     }
//     getPhone(){
//         return this._phone
//     }
//     setPhone(new_phone){
//         this._phone = new_phone
//     }
//     // Define module in another way [arrow (=>)]
//     // Print the whole object
//     print = (msg) => {
//         console.log(this._preprocess(msg))   //[`this` determines the whole object]
//         // this has a issue with arrow module.So, it better not to use `this` with arrow
//     }
//     _preprocess(msg){
//         return msg.trim().toLowerCase() + ' [this is preprocessed message]'
//     }
// }

// const amp1 = new AMPerson("Mahareen Siddiq Laiba", "mahareen_laiba@gmail.com", "01825507837")
// const amp2 = new AMPerson("Maharun Siddiq Aina", "maharunaina@gmail.com", "01825507838")
// const amp3 = new AMPerson("Mahar Siddiq Aifa", "maharaifa@gmail.com", "01825507839")

// console.log(`Object1_Name : ${amp1.getName()}, Object2_Email: ${amp2.getEmail()}, Object3_Phone: ${amp3.getPhone()}`)
// // Change properties by setter 
// amp1.setName("MS Laiba")
// amp2.setEmail("maina@gmail.com")
// amp3.setPhone("01727327168")

// console.log(`Object1_Name : ${amp1.getName()}             , Object2_Email: ${amp2.getEmail()}      , Object3_Phone: ${amp3.getPhone()}`)
// amp3.print("    Are You There?")


// //===========Getter-Setter====================//
// console.log("===============Gettet-Setter===============")
// /* In the above program we access the properties by getMethod(), But if can access them by direct calling through object
// it would be better. We can do it by expanding Getter and Setter method, like- 'p1.name' 
// The main idea is: Since we cannot access the private properties directly, but we wish to do it simply by - p1.name
// But how? - For this we will use 'get()' method.
// What's the benefit? - We can get the property by calling p1.name but we cannot change it by p1.name*/


// class GSPerson{
//     constructor(name, email, phone){
//         this._name = name       
//         this._email = email
//         this._phone = phone
//     }
//     // lets define module
//     get name(){
//         return this._name
//     }
//     set name(new_name){
//         if(new_name.toLowerCase() == "abs sayem") return
//         this._name = new_name
//     }
//     get email(){
//         return this._email
//     }
//     set email(new_email){
//         this._email = new_email
//     }
//     get phone(){
//         return this._phone
//     }
//     set phone(new_phone){
//         this._phone = new_phone
//     }

//     // Define module in another way [arrow (=>)]
//     // Print the whole object
//     print = (msg) => {
//         console.log(this)
//         console.log(msg.toUpperCase())
//     }
//     _preprocess(msg){
//         return msg.trim().toLowerCase() + ' [this is preprocessed message]'
//     }
// }

// const gsp1 = new GSPerson("Mahareen Siddiq Laiba", "mahareen_laiba@gmail.com", "01825507837")
// const gsp2 = new GSPerson("Maharun Siddiq Aina", "maharunaina@gmail.com", "01825507838")
// const gsp3 = new GSPerson("Mahar Siddiq Aifa", "maharaifa@gmail.com", "01825507839")

// console.log(gsp3.name)
// // Here behind the scene get() method is being called.
// //gsp3.name = "MS Aifa"   //Tried to change the name [won't work]. Will work is setter is set.
// //console.log(gsp3.name)  //Still get the previously defined name
// gsp2.name = "MS Aina"   //Here behind the seen 'set name()' is being called.
// console.log(gsp2.name)  // Here we can see the updated name
// gsp1.print("can not go with it")

// gsp1.name = "Abs Sayem"
// console.log(gsp1)


// //===========Polymorphism====================//
// console.log("===============Polymorphism(override, overload)===============")

// // Polymorphism has one property in javascript: 1. Method Overriding
// /* We can override methods. For example- we use 'console.log' to show something. The functionality of 'console.log'
//  is written in 'toString()' method. Lets override this method.*/

//  class ORPerson{
//     constructor(name, email, phone){
//         this._name = name       
//         this._email = email
//         this._phone = phone
//     }
//     // lets define module
//     get name(){
//         return this._name
//     }
//     set name(new_name){
//         if(new_name.toLowerCase() == "abs sayem") return
//         this._name = new_name
//     }
//     get email(){
//         return this._email
//     }
//     set email(new_email){
//         this._email = new_email
//     }
//     get phone(){
//         return this._phone
//     }
//     set phone(new_phone){
//         this._phone = new_phone
//     }
//     //Override the toString() method
//     toString(){
//         return(`Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`)
//     }
//     // Define module in another way [arrow (=>)]
//     // Print the whole object
//     print = () => {
//         console.log(this)
//         //console.log(msg.toUpperCase())
//     }
//     _preprocess(msg){
//         return msg.trim().toLowerCase() + ' [this is preprocessed message]'
//     }
// }

// const orp1 = new ORPerson("Mahareen Siddiq Laiba", "mahareen_laiba@gmail.com", "01825507837")
// const orp2 = new ORPerson("Maharun Siddiq Aina", "maharunaina@gmail.com", "01825507838")
// const orp3 = new ORPerson("Mahar Siddiq Aifa", "maharaifa@gmail.com", "01825507839")

// console.log(orp1)   //Here it doesn't call to string method
// // If we try to concatenate something with our object then toString will be called
// console.log(orp2 + " " + orp3.email)
// // We can use print function instead of console.log
// orp3.print()

//====================================================================================

// --------------------Static Properties-------------------------
/** 
 * @StaticProperties
 * Static properties are important but not used so much. It is used while creating a library or some utility for
 * front-end and back-end developers
 * Before working with Static Properties, we have to know about 'instance_of_operator'
 * What is InstanceOfOperator? Instance-of-operator checks whether it is a instance of specified class or not
*/
class Person{
    _acc_type = "Standard"
    constructor(name, email){
        this._name  = name
        this._email = email
    }
}

const p1 = new Person("Mahareen", "mahareen@gmail.com")
const p2 = new Person("Maharun", "maharun@gmail.com")
console.log(p2 instanceof Person)   //This will be True
// Lets create an onject identicla to p1 or p2
const p3 = {_name: "Mahar", _email: "mahar@gmail.com"}
console.log(p3 instanceof Person)   //This will be False
//------------------------------------------------------

/**
 * Static Properties: There are some attributes and methods, we need not make instance of class to call the properties.
 * We can call them through ClassName.
 * How to do this? We can do it by placing 'static' keyword before the attribute or method name.
 */
class Account{
    //Static Attributes
    static acc_type = "Premium"
    static PI = 3.1416

    constructor(name,email){
        this._name = name
        this._email= email
    }
    //Static Methods
    static isValid(age){
        //if(age >= 18) return true
        return age >= 18
    }
    static isEqual(acc1, acc2){
        if(acc1._name  != acc2._name) return false
        if(acc1._email != acc2._email) return false
        else return true
    }
}

const acc1 = new Account("Mahareen Laiba", "mahareenlaiba@gmail.com")
const acc2 = new Account("Maharun Aina", "maharunaina@gmail.com")
const acc4 = new Account("Mahar Aifa", "maharaifa@gmail.com")

// See the static attributes
console.log(Account.PI)
console.log(Account.acc_type)

// Now suppose if anyone want to create an account, we can check his age and if satisfied let hin create an account.
const testUser = {
    name : "Mahar Aifa", 
    email:"maharaifa@gmail.com",
    age : 20
    }
let acc3 = null
if(Account.isValid(testUser.age)){
    acc3 = new Account(testUser.name, testUser.email)
}
console.log(acc3)

// Check isEqual method:
console.log(Account.isEqual(acc1 , acc2))
console.log(Account.isEqual(acc3, acc4))

// All though two objects are identical, they are not same
console.log(acc3 == acc4)