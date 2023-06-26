class Student extends Person{
    constructor (name, email, subjects, tution_fee){
        super(name, email)
        this._subjects = subjects       // Subjects will be an array
        this._tution_fee = tution_fee
    }
    // Define getter-setter for them
    get subjects()                 {return this._subjects}
    set subjects(new_subject)      {this._subjects = new_subject}
    get tution_fee()               {return this._tution_fee}
    set tution_fee(new_tution_fee) {this._tution_fee = new_tution_fee}
}
// Make it possible to import by other class
module.exports = Student;