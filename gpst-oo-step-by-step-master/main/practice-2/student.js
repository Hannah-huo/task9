const Person = require('./person');

module.exports = function Student(name, age, clazz){
    this.clazz = clazz;
    this.isLeader = false;

    this.__proto__ = new Person(name, age);

    this.introduce = function() {
        if(!this.isLeader) {
            return this.__proto__.introduce()+" I am a Student. I am at Class "+
                this.clazz.grade+"."
        }else{
            return this.__proto__.introduce()+" I am a Student. I am Leader of Class "+
                this.clazz.grade+"."
        }

    }
    this.setLeader = function(isLeader) {
        this.isLeader = isLeader;

    }
}
