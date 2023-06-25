/**
 * @description
 * Access Modifier (private properties)
 * In javaScript there is no concept of Access Modifier. That means there is no control from the compiler end.
 * But we can give indication to the community(programmers) about the private properties, so that they don't change them.
 * Its all about community understanding.
 * 
 * For properties we can use underscore(_) before property name. Like: 'this._name'
 * And For modules we will use getter and setter methods. Like: getName(), setName()
 * [We will discuss Getter and Setter in a different section]
 */

class Account{
    _acc_name = "Standard"
    constructor(name, email, phone){
        this._name = name
        this._email = email
        this._phone = phone
    }
    /* Although we can access the attributes but we won't change them for community belief. To allow objects change the 
    attributes, lets define getter-setter methods. */
    getName(){
        return this._name
    }
    setName(new_name){
        this._name = new_name
    }
    getEmail(){
        return this._email
    }
    getPhone(){
        return this._phone
    }
    // We can also make methods private. Private method basically define to helps other methods
    _makeUpper(name){
        return(name.trim().toUpperCase())
    }
    // Using arrow style
    getInfo = () =>{
        return(`Name : ${this._makeUpper(this._name)}, Email: ${this._email}, Phone: ${this._phone}`)
        //return(this)
    }
    print(){
        console.log(`${this._makeUpper(this._name)}: ${this._email}:${this._phone}`);
    }
}

const acc1 = new Account("Mahareen Laiba", "mahareen@gmail.com", "01727000000")
const acc2 = new Account("Maharun", "maharun@gmail.com", "01825000000")
const acc3 = new Account("Mahar", "mahar@gmail.com", "01313000000")

console.log(acc1.getName())
acc2.setName("Maharun Aina")
console.log(acc2)
console.log(acc1)
console.log(acc2.getInfo())