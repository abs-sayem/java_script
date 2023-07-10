class Person{
    constructor(name,email){
        this._name = name
        this._email= email
    }
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
    print(){
        console.log(this)
    }
    //Static Methods
    static isValid(age){
        //if(age >= 18) return true
        return age >= 18
    }
    static isEqual(p1, p2){
        if(p1._name  != p2._name) return false
        if(p11._email != p2._email) return false
        else return true
    }
}
// Make it possible to import by other class
module.exports = Person;