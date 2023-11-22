class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    // The method in class doesn't require the function keyword
    greet(){
        console.log("Greet Person");
    }
}

class Teacher extends Person{
    constructor(name , age , subject , classStrength) {
        super(name , age);
        this.subject = subject;
        this.classStrength = classStrength;
    }
}

class Student extends Person{
    constructor(name , age , section, marks) {
        super(name , age);
        this.section = section;
        this.maks = marks;
    }
}

let teacher = new Teacher("Porkodi" , 40 , "Maths" , 34);
teacher.greet();