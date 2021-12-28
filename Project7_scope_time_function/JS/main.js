var a = 25; //Global variable 

function myfunction() { //local variable
    var b = 50;
}



function get_Date(){
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function mathFunction(){
    if(7>1) {
        document.write("tell me its right");
    }
}
// Else Statements 
function Age_Function(){
Age = document.getElementById("Age").value;
if(Age >= 18) {
    Vote = "You are old enough to vote!";
}
else {
    Vote ="You are not old enough to vote!";
}
document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else Statements 2
function lbs_Function(){
    lbs = document.getElementById("lbs").value;
    if(lbs >= 200) {
        Weight ="You are overweight";
    }
    else {
        Weight = "You are not overweight"
    }
    document.getElementById("your_lbs").innerHTML = Weight;
}

//Else if statements
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time< 12 ==Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon";

    }
    else{
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML =  Reply;
}

//concat() method
    function full_sentence() {
        var part_1 = "I have";
        var part_2 = "made this";
        var part_3 = "into a complete";
        var part_4 = "sentence";
        var whole_sentence = part_1.concat(part_2,part_3,part_4);
        document.getElementById("Concatenate").innerHTML = whole_sentence;
    }
