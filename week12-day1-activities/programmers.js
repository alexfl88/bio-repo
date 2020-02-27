const Programmer = function(name, job, age, language) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;
};

Programmer.prototype.printStats = function(){
    console.log(`
        ${this.name}
        ${this.job}
        ${this.age}
        ${this.language}
    `);
}

const Alex = new Programmer("Alex", "Javascript Programmer", "23", "Javascript");

Alex.printInfo();



class Coder {
    constructor(name, age, job, language) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.language = language;
    }

    printInfo(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nJob: ${this.job}\nLanguage: ${this.language}`)
    }
}

const Julie = new Coder('Julie', 99, 'Supercoder', 'Ancient');

Julie.printInfo();