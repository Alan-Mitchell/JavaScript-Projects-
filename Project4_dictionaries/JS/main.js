function Kroger_Dictionary(){ //This function is a creation of a KVP
    var Kroger ={
        type:"buisness",
        age:114,
        sale:"food",
        traded:"publicly"
    }; 
    delete Kroger.age //delete operations 
    document.getElementById("Dictionary").innerHTML=Kroger.age;
}

function cats_Dictionary(){
    var cat = {
        type:"animal",
        limbs:4,
        type:"pet",
    };
    document.getElementById("Dictionary").innerHTML=cat.type;
}