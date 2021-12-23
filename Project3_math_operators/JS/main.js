function addition_Function(){ //This function performs addition 
    var addition = 121 + 234;
  document.getElementById("math").innerHTML ="121+234 ="+addition; //calls back the HTML document.
}
function subtraction_Function() //This function performs subtraction operation 
{
    var subtracton = 75-11;
    document.getElementById("math").innerHTML= "75-11=" + subtracton;
}

function multiplication_Function(){ //This function performs multiplication operation 
    var muliplication = 12*32;
    document.getElementById("math").innerHTML = "12*32="+ muliplication;
}
function divide_Function(){ // This function performs division operation 
    var divide= 123/98;
    document.getElementById("math").innerHTML= "123/32="+ divide;
}
function multiple_Function(){// This function performs multiple math operations 
    var multiple= (1+5)*32/12-21;
    document.getElementById("math").innerHTML="(1+5)*32/12-21=" + multiple;

}
function modulus_Operator(){// This function performs modulus operations(remainder operations)
    var modulator = 24% 7;
    document.getElementById("math").innerHTML="when you divide 24 by 6 you have a remainder of="+ modulator;

}

  function retry_negative(){//This operation expresses negative numbers 
      var f=2345;
      document.getElementById('math').innerHTML=-f;
  }
  var c = 234;
  c++;
  document.write(c);

  var h = 98756780987
  h--;
  document.write(h)

  
  
  window.alert(Math.random()*23);

  var pi_val = Math.PI;
  document.write(pi_val);