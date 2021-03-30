//regular function
function func1() {
    console.log("func1");
}

func1();

function func2(s1, s2) {
    console.log(s1 + ' ' + s2);
}

func2("hello", "world");

function func3(n1, n2) {
    return n1 + n2;
}

console.log(func3(4, 5));

var FE = function greet() {
    console.log("Regular Expression");
}
FE();
// greet(); it will not work because its inside FE()

//function expression(anonymos func)
var result = function () {
    console.log("Function Expression");
}
result();

//IIFE - Immediately Invoked Function Expression(anonymous function)
(function name(name) {
    console.log("IIFE " + name);
})("Function1");

var FE2 = function greet() {
    console.log("IIFE Function2");
}();

!function greet() {  // you can use any operator(!,+,_,~,void,etc.) before function
    console.log("IIFE Function3");
}();

void function greet() {  //If you use void you cannot return value;
    console.log("IIFE Function4 cannot return");
}();

//CallBacks
function greetme(fname) {
    console.log("Hey there!" + fname);
}

greetme("Karan");

function Welcome(callback) {
    var name = "Pathania";
    callback(name);
}

Welcome(greetme);

const a = 98;

{
    const a = 100;
    console.log(a);
}
console.log(a);





