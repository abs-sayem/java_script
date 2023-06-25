/**
 * @Polymorphism
 * In OOP, polymorphism usually has two properties- 1. Overloading and 2. Overriding
 * In javascript, Overloading isn't possible since there is no restriction on the order of input parameters.
 * We can override methods. For example- we use 'console.log' to show something. The functionality of 'console.log'
 * is written in 'toString()' method. Lets override this method.
 */

class Account{
    _acc_account = "Standard"
    constructor(name, email, phone){
        this._name  = name
        this._email = email
        this._phone = phone
    }
    get name(){
        return this._name
    }
    // We can also set condition in set method
    set name(new_name){
        if(new_name.toLowerCase() == "abs sayem") return
        this._name = new_name
    }
    get email(){
        return this._email
    }
    set email(new_email){
        this._email = new_email
    }
    get phone(){
        return this._phone
    }
    set phone(new_phone){
        this._phone = new_phone
    }
    // Lets Override the toString() method
    toString(){
        return(`Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`)
    }
    // Arrow style method
    _makeUpper = (name) => {
        return name.trim().toUpperCase()
    }
    print = () => {
        console.log(this)
    }
}

const acc1 = new Account("Mahareen Laiba", "mahareenlaiba@gmail.com", "01727000000")
const acc2 = new Account("Maharun Aina", "maharunaina@gmail.com", "01825000000")
const acc3 = new Account("Mahar Aifa", "mahar@gmail.com", "01313000000")

// Check the 'set name()' condition
acc1.name = "Abs sayem"
console.log(acc1.name)
//Check Override method
console.log(acc2)   //Here it dowsn't call the toString method
// We can concatenate something with object, then the toString() method will be called
console.log(acc1.name + " | " + acc3)
// We can also use print mrthod instead of console.log
acc1.print();