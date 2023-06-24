/**
 * @description
 * Method
 * Method: The basic work of methods are doing something relatable using the properties of the class.
 * Method can be defined in 2 ways:
 * 1. methodName(){
 *      definition of the method
 *    }
 * 2. methodName = () => {
 *      definition of the method
 *    }
 * The second method also called arrow method. There is an issue with 'this' in arrow method system. Its better not to use
 * 'this' inside an arrow style method.
 */

class Account{
    acc_name = "Standard"
    constructor (name, email, phone){
        this.name  = name
        this.email = email
        this.phone = phone
    }
    // Define some methods
    changeName(new_name){
        this.name = new_name
    }
    changeEmail(new_email){
        this.email = new_email
    }
    changePhone(new_phone){
        this.phone = new_phone
    }
    // Using arrow style
    getInfo = () =>{
        //return(`Name : ${this.name}, Email: ${this.email}, Phone: ${this.phone}`)
        return(this)
    }
}
const acc1 = new Account("Mahareen", "mahareen@gmail.com", "01727000000")
const acc2 = new Account("Maharun", "maharun@gmail.com", "01825000000")
const acc3 = new Account("Mahar", "mahar@gmail.com", "01313000000")
console.log(acc1.getInfo())
console.log(acc2)
acc2.changeEmail("maharunaina@gmail.com")   //This changes the essociated email
console.log(acc2)