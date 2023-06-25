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