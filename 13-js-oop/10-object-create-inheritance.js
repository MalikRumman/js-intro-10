const student = {
    study: function () {
        console.log('STUDY')
    }
}

// BEFORE ES6
const mathStudent = Object.create(student);

mathStudent.fname = 'John';

mathStudent.calculate = function () {
    console.log('CALCULATE');
}

mathStudent.study();
mathStudent.calculate();


// prototype before ES6
function Teacher() {

}

Teacher.prototype.teach = function () {
    console.log('TEACH');
}

Teacher.prototype.giveHomework = function () {
    console.log('GIVE HOMEWORK');
}




function MathTeacher() {

}

MathTeacher.prototype = Object.create(Teacher.prototype);

const MathTeacher1 = new MathTeacher();

MathTeacher1.teach();
MathTeacher1.giveHomework();

