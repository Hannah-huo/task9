// Write your code here
module.exports = function Class(grade) {
    this.grade = grade;

    this.assignLeader = function(student) {
        student.isLeader = true;
    }
}
