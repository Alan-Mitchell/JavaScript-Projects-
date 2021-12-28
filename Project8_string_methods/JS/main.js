//CONCAT METHOD 
function sentence(){
    var a = "My name is";
    var b = "Alan Mitchell"
    document.getElementById("concat").innerHTML = a + b
}
// Slice Method 
function slice_Method(){
    var sentence1 ="All work and no play makes Johnny a dull guy.";
    var section = sentence1.slice(27,33);
    document.getElementById('slice').innerHTML = section;

}
function slicesMethod() {
    var sentence2 = "This is an example of the slice method in Javascript";
    var section1 = sentence2.slice(8,25);
    document.getElementById("slices").innerHTML = section1;
}
// toUppercase Method
    var c = "john"
    console.log(c.toUpperCase());
    document.write(c.toUpperCase())
//search method     
    var d = "This is an example of the search method";
    var position = d.search("of")
    document.write(position);
//Numbers Method
    function string_Method(){
        var x = 394;
        document.getElementById("Numbers_to_string").innerHTML = x.toString();

    }    
    function to_string() {
        var e = 213;
        document.getElementById("stringy").innerHTML = e.toString();
    }
    
    // To Precision Method 
    function precision_Method(){
        var f = 12938.3012987376112;
        document.getElementById("Precision").innerHTML = f. toPrecision(10);

    }
    function Precision1(){
        var g = 1234773839832.892848439843488;
        document.getElementById("PMethod").innerHTML = g.toPrecision(4);
    }
    //Fixed Method
    function fixed_Method() {
        var h = 28.9883849;
        document.getElementById("fixed").innerHTML = h.toFixed(3);
    }
    // Value of Method
    function Value_Method() {
        var i = "this is a string";
        var j = i.valueOf();
        document.getElementById("valueMethod").innerHTML = j
    }
