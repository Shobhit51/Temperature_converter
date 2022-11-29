let celcius=document.getElementById("celcius");
let Fahrenheit=document.getElementById("Fahrenheit");


function celtofar(){
    let output=(parseFloat(celcius.value)* 9/5)+32;
    Fahrenheit.value=parseFloat(output.toFixed(2));

}

function fartocel(){
    let output=(parseFloat(Fahrenheit.value) -32) * 5/9;
    celcius.value=parseFloat(output.toFixed(2));
   
}