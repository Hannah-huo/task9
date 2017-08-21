// Write your code here
module.exports = class Class {
    constructor(grade){
        this.grade = grade;
        this.students = [];
        this.teacher = null;
    }

    appendMember(student) {
        student.appended = true;
        this.students.push(student);
        if(this.teacher){
            this.teacher.notifyStudentAppended(student.name+" has joined Class "+this.grade)
        }
    }

    assignLeader(student) {
        let found = this.students.includes(student);

        if(found){
            student.isLeader = true;
            if(this.teacher){
                this.teacher.notifyLeaderAssigned(student.name+" become Leader of Class "+this.grade)
            }
            return "Assign team leader successfully.";
        }else{
            return "It is not one of us.";
        }
    }
};