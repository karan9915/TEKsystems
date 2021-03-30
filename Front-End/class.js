// let name = "Rahul";
// let age = 20;
// let city = "Chandigarh";
// (function display() {
//     console.log(name + " " + age + " " + city);
// })();

// function amount(credit) {
//     console.log("Rahul Salary is credited by " + credit);
// }

// function salaryIncrease(callback) {
//     let salary = 100;
//     callback(salary);
// }

// salaryIncrease(amount);

//Classes - Objects

// class Art {

//     //private fields
//     #artid;
//     //public fields
//     artworkname;
//     static price = 3000;

//     constructor(aid, aname) {
//         this.artid = aid;
//         this.artworkname = aname;
//     }

//     artDisplay() {
//         console.log("Watercolor paintings are for exihibit display " + this.artid + " " + this.artworkname);
//     }
// }

// //object instance
// var acrylics = new Art(1, 'Sailing..');
// acrylics.price = 40000;
// acrylics.artDisplay();
// console.log(acrylics.price);
// Art.prototype.ArtMedium = "Acrylic medium";
// acrylics.ArtMedium;
// console.log(Art.price);


// //class Expressions - 
// var Shape = class square {

//     constructor(height) {
//         this.height = height;
//     }
// }

// console.log(Shape.height);

//Inheritance - sub classing 
class Reptile {
    age = 10;
    constructor(rname) {
        this.name = rname;
    }

    swim() {
        console.log("swimming & splashing..")
    }
}

class crocodile extends Reptile {
    constructor(name) {
        super(name);
    }
    hunt() {
        console.log("Hunting for snakes..");
    }

    swim() {
        super.swim();
        console.log(this.name + " can swim to hunt and this is" + " " + this.age + " " + "years old");
        console.log(`${this.name} can swim to hunt and this is ${this.age} years old`);
    }
}

let croc = new crocodile("MarshCroc");
croc.swim();
