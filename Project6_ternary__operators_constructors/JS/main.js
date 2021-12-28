function Ride_Function(){
    var height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function(){
    var age, can_vote;
    age= document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young": "You are old enough";
    document.getElementById("vote").innerHTML = can_vote + "to vote";

}

//Constructor

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik dirves a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in" + Erik.Vehicle_Year;
}

// JS Object Constructor
function Student(Name, Level, Age, Race) { //Function
    this.Name = Name; //Constructors 
    this.Level = Level;
    this.Age = Age;
    this.Race=Race;
}
var Alan = new Student("Alan Mitchell", "Undergrad", "30", "Black");
var Freddie = new Student("Freddie Smith", "Graduate", "68","White");

function new_Student(){
    document.getElementById("cool").innerHTML = "New Student information" + Alan.Age;
}


// Nested Function
function NestingExample() {
    document.getElementById("Nested_Functions").innerHTML = Count();
    function Count() {
    var starting_point = 5;
    function plus_one() {starting_point + = 5;}
    plus_one();
    return starting_point;
    }
}
