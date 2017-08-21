// Write your code here
module.exports = function Person(name ,age) {
    this.name = name;
    this.age = age;
    this.id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);

    this.introduce = function() {
        return "My name is "+this.name+". I am "+this.age+" years old."
    }

    this.equals = function(other){
        return this.id === other.id;
    }
}
