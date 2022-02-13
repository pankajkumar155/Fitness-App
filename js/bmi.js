function calculateBmi() {

document.querySelector("#underweight").style.display = "none";
document.querySelector("#healthy").style.display = "none";
document.querySelector("#overweight").style.display = "none";

var weight = document.bmiForm.Weight.value;
var height = document.bmiForm.Height.value;
if(weight > 0 && height > 0){
var num=  weight/(height/100*height/100)
var finalBmi = Math.round(num*10)/10

if(finalBmi < 18.5){
  document.querySelector("#value1").innerHTML = "Your BMI is "+finalBmi+" which means you are underweight.";

document.querySelector("h3").innerHTML = "Your BMI is "+finalBmi+" which means you are underweight.";
document.querySelector("#underweight").style.display = "inline";
}
else if(finalBmi >= 18.5 && finalBmi < 25){
  document.querySelector("#value2").innerHTML = "Your BMI is "+finalBmi+" which means you are healthy.";
document.querySelector("h3").innerHTML = "Your BMI is "+finalBmi+" which means you are healthy.";
document.querySelector("#healthy").style.display = "inline";
}
else if(finalBmi >= 25){
  document.querySelector("#value3").innerHTML = "Your BMI is "+finalBmi+" which means you are overweight.";
document.querySelector("h3").innerHTML = "Your BMI is "+finalBmi+" which means you are overweight.";
document.querySelector("#overweight").style.display = "inline";
}
}
else{
alert("Please Fill in everything correctly")
}

window.location.href = "#output";
}
