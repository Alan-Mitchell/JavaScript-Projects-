// While Loops
function Counting() {
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;}
  document.getElementById("Counting_to_Ten").innerHTML = text;
}
//length
var a = "My name is Alan Mitchell"
var length_count = a.length
document.getElementById("length").innerHTML = length_count;

// For Loops
var Instruments =["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_loops(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
var Car = []
Car[0] = "Tesla";
Car[1] = "Ford";
Car[2] = "Chevy";
Car[3] = "Toyota";
document.getElementById("Array").innerHTML = "The best car in the world is a" + Car[3] 
}

//Const
function constant_function(){
    const school_supplies = {type:"pen",brand:"BIC", color:"red"};
    school_supplies.brand = "Paper-Mate";
    school_supplies.color = "Blue";
    document.getElementById("Constant").innerHTML = "The best pen I own is" + school_supplies.type + "and the color was" + school_supplies.color;

}

//let 
var x =82;
console.log(x)
{
    let x = 33;
    console.log( x);
}
console.log( x);

var v = 21;
console.log(v);
{var v = 54
    console.log(v);
};
console.log(v);

//Return 
function subject(Math){
    return "My favorite subject is" + Math;
}
document.getElementById("return").innerHTML = subject("Math");

//Objects 
    let car = {
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "red",
        descpription : function() {
            return "The car is a "+ this.year + this.make + this.model;
        }
        
    
    };
    document.getElementById("Car_object").innerHTML = car.descpription();

    let Homes = {
        squarefeet:"3121sq",
        material: "brick",
        bathrooms: "2",
        features: "pool",
        description : function(){
            return "The home is large" + this.squarefeet + "it is made of" + this.material + "the home also has a " + this.features;
        }

    };
    document.getElementById("Home").innerHTML =Homes.description();

//Break
for (let g = 25; g < 30; g++ ) {
    if(g === 28) {break;}
    document.getElementById("Break").innerHTML = "this is it" + g;
}

//Continue 
for (let t= 56; t< 61; t++ ) {
    if (t===59) {continue;} 
    document.getElementById("Continue").innerHTML = "this is a continue" + t;
}