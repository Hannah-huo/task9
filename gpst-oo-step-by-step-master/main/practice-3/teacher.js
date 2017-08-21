const Person = require('./person');

module.exports = class Teacher extends Person{

    constructor(name, age, clazzes){
        super(name, age);
        this.clazzes = clazzes;
        for(let clz of clazzes){
            clz.teacher = this;
        }
    }

    introduce() {
        let classString = '';
        if(this.clazzes.length === 0){
            classString = 'No Class';
        }else{
            classString += 'Class ';
            for(let i = 0; i< this.clazzes.length; i++){
                classString += this.clazzes[i].grade;
                if(i !== (this.clazzes.length - 1))
                    classString += ',';
            }
        }

        return super.introduce()+" I am a Teacher. I teach "+classString+"."
    }

    isTeaching(student){
        if(!student.appended){
            return false;
        }else{
            return this.clazzes.includes(student.clazz);
        }
    }

    notifyStudentAppended(){

    }

    notifyLeaderAssigned() {

    }
};