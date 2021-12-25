document.write(4533);//Data type:number 
document.write("words");//data types: String
document.write("1233"+678);//coercion data type.

function my_Function() {
document.getElementById("Test").innerHTML = 0/0;//This function represents NaN
}
document.getElementById("Test").innerHTML = isNaN("This is a string");// Boolean value of to see if NaN

document.getElementById("Test").innerHTML= isNaN("007");// Boolean value for NaN

document.getElementById("Test").innerHTML= isNaN("098765");//This NaN is true
document.getElementById("Test").innerHTML= isNaN("Coding");//This NaN us False

document.getElementById("Test").innerHTML=1123456765432E12345;//This displays an infinity value

document.write(10<2);
document.write(3234<43234);

console.log(40+40);
console.log(23>98);
document.write(25==25);
document.write(434==23);
document.write(10+5==15);

A=17;
B=17;
document.write(A===B);

S=89;
Q="89";
document.write(S===Q);

V="Alan";
R=30;
document.write(V===R);

N=21;
P=43;
document.write(N===P);

document.write(67>23 && 21>12);
document.write(54>78 && 43>66);

document.write(21>18 || 17>18);
document.write(21>43 || 17<10);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_Function() {
    document.getElementById("Not").innerHTML= !(5 > 10);
}
