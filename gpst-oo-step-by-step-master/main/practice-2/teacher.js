const Person = require('./person');

module.exports =  function Teacher(name, age, clazzes){
    this.clazzes = clazzes;

    this.introduce = function(){
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

        return this.__proto__.introduce()+" I am a Teacher. I teach "+classString+".";
    }

    this.__proto__ = new Person(name, age);

}
