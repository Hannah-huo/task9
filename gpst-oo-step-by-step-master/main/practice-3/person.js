// Write your code here
module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    introduce() {
        return "My name is "+this.name+". I am "+this.age+" years old.";
    }

    equals(other){
        return this.id === other.id;
    }
};