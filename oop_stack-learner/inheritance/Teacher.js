class Teacher extends Person{
    constructor (name, email, subject, salary){
        super(name, email)
        this._subject = subject
        this._salary = salary
    }
    // Define getter-setter for them
    get subject()            {return this._subject}
    set subject(new_subject) {this._subject = new_subject}
    get salary()             {return this._salary}
    set salary(new_salary)   {this._salary = new_salary}
}
// Make it possible to import by other class
module.exports = Teacher;