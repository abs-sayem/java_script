/**
 * @Getter_Setter
 * In the 'access_modifier' program we see the getter-setter mechanisn, where we introduce getter-setter method to access
 * the private properties. Here, we will explore the getter-setter little more.
 * Using getter we can access the attributes more easily, like: object.attribute (p1.name).
 * How to do this?  For this we will use 'get()' method
 * 
 */

class Account{
    _acc_account = "Standard"
    constructor(name, email, phone){
        this._name  = name
        this._email = email
        this._phone = phone
    }
    /* Although we can access the attributes but we won't change them for community belief. To allow objects change the 
    attributes, lets define getter-setter methods. */
    get name(){
        return this._name
    }
    set name(new_name){
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
    get accountType(){
        console.log("Account Type is : ",this._acc_account)
    }
    _makeUpper(name){
        return name.trim().toUpperCase()
    }
    get profile(){
        return(`Account_Type: ${this._acc_account}, Name: ${this._makeUpper(this._name)}, Email: ${this._email}, Phone: ${this._phone}`)
    }
}

const acc1 = new Account("Mahareen Laiba", "mahareenlaiba@gmail.com", "01727000000")
const acc2 = new Account("Maharun Aina", "maharunaina@gmail.com", "01825000000")
const acc3 = new Account("Mahar Aifa", "mahar@gmail.com", "01313000000")

console.log(acc3)
console.log(acc2.email)
console.log(acc3.phone)
console.log(acc2.profile)
console.log(acc1.accountType)
acc3.email = "maharaifa@gmail.com"
console.log(acc3)