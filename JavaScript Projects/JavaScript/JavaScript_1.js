function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors){
        case "Red":
            Color_Output = "Red" + Color_String;
        break; 
        case "Yellow":
            Color_Output = "Yelloe" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink": 
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list."; 


    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//getElementsbyClass
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function classEx() {
    var F = document.getElementsByClassName("classExample");
    F[1].innerHTML = "The text is changing on clcik!";
}

//Canvas
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }

//gradient canvas
var l = document.getElementById("gradient");
var ctx = l.getContext("2d");

var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "red");
grd.addColorStop(1,"blue");

ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);