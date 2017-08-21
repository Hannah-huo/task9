const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.clazz = clazz;
        this.isLeader = false;
        this.appended = false;
    }

    introduce(){
        if(!this.appended){
            return super.introduce()+" I am a Student. I haven't been allowed to join Class.";
        }else{
            if(!this.isLeader) {
                return super.introduce()+" I am a Student. I am at Class "+
                    this.clazz.grade+"."
            }else{
                return super.introduce()+" I am a Student. I am Leader of Class "+
                    this.clazz.grade+"."
            }
        }
    }

};