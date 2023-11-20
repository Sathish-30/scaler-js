function CreateCar(name , model , color){
    this.name = name;
    this.model = model;
    this.color = color;
}

const car1 = new CreateCar("Audi" , "A8","black");
console.log(car1);