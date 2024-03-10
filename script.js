// example 1
let hello=["1-hello world", " 2-hello world"," 3-hello world"]
function changeText(){
    document.getElementById("text-c").innerHTML=hello;
}

// example 2
function changeMinionOne(){
    document.getElementById("minion").src='images/minion-1.jpg'
}
function changeMinionTwo(){
    document.getElementById("minion").src='images/minion-2.jpg'
}
function changeMinionThree(){
    document.getElementById("minion").src='images/minion-3.jpg'
}
function changeMinionFour(){
    document.getElementById("minion").src='images/minion-4.jpg'
}

// example 3 
let number1 = 12;
let number2 = 17;
function addCalculation(){
    document.getElementById("add-c").innerHTML=number1+number2;
}

// example 4
let number3 = 49;
let number4 = 35;
function minusCalculation(){
    document.getElementById("minus-c").innerHTML= number3 - number4;
}

// example 5 
let number5 = 5;
let number6 = 7;
function multipliCation(){
    document.getElementById("multi-p").innerHTML= number5 * number6;
}

// example 6 
let number7 = 16;
let number8 = 4;
function dividedCalculation(){
    document.getElementById("divid-d").innerHTML =number7 / number8;
}

// example 7 
let number9 =38;
let number10 = 8;
function remainderCalculation(){
    document.getElementById("remainder").innerHTML = number9 % number10;
}

// example 8
function showTime(){
    document.getElementById('show-time').innerHTML= new Date().toLocaleTimeString();
}

// example 9 
function showDate(){
    document.getElementById("show-date").innerHTML= new Date().toLocaleDateString();
}

// example 10
function changeColor(){
    document.getElementById("change-c").style.color="blue"; 
}

// example 11 
function hideText(){
    document.getElementById('hide-t').style.display="none";
}
function showText(){
    document.getElementById('hide-t').style.display="block";
}

// example 12 
function fireOn(){
    document.getElementById("fireWood").src="images/firewood-2.jpg";
}
function fireOff(){
    document.getElementById("fireWood").src="images/firewood-1.jpg";
}

// example 13
const num1 = 5;
const num2 = 8;
function assainOparetor(){
    document.getElementById('assain-O').innerHTML= num1 < num2;
}

// example 14 
const array1= ["Abul", "Bubul", "Cabul", "Dabul", "Ebul"];
function arrayDeclare(){
    document.getElementById('array-d').innerHTML=array1[2];
}

// example 15 
const com1 =5;
const com2 =6;
function comparisonOparetor(){
    document.getElementById('com-p').innerHTML = com1 == com2;
}

// example 16 
let minuns1 = 64;
let minuns2 = 14;
function minusCal(){
    document.getElementById("minus-cl").innerHTML= minuns1 - minuns2;
}

// example 17
const bool1 = 77;
const bool2 = 58;
function booleanType(){
    document.getElementById('boolean-t').innerHTML= bool1 < bool2;
}

// example 18 
const array2= ["Rohim", "Korim", "Momin", "Salam", "Alom"];
function nameCall1(){
    document.getElementById('array-dc').innerHTML=array2[3];
}
function nameCall2(){
    document.getElementById('array-dc').innerHTML=array2[1];
}
function nameCall3(){
    document.getElementById('array-dc').innerHTML=array2[4];
}

// example 19 
const com3 =5;
const com4 =6;
function compariSon(){
    document.getElementById('com-S').innerHTML = com3 != com4;
}

// example 20
const bool3 = 53;
const bool4 = 21;
function booleanVariable(){
    document.getElementById('boolean-v').innerHTML= bool3 > bool4;
}

// example 21 
function showAlert(){
    alert("Hello World")
}

// example 22 
const myInterval = setInterval(myTimer);

function myTimer() {
  const date = new Date();
  document.getElementById("myTime").innerHTML = date.toLocaleTimeString();
}
function stopTime(){
    clearInterval(myInterval);
}

// example 23 
function textMove(){
    document.getElementById('fixed-h3').innerHTML="";
    document.getElementById('moved-h3').innerHTML="Hello World";
}

// example 24
let addnumber1 = 65;
let addnumber2 = 45;
function addFunction(){
    document.getElementById("add-num").innerHTML=addnumber1+addnumber2;
}

// example 25
function changeLaptopOne(){
    document.getElementById("laptop").src='images/laptop-1.jpg'
}
function changeLaptopTwo(){
    document.getElementById("laptop").src='images/laptop-2.jpg'
}
function changeLaptopThree(){
    document.getElementById("laptop").src='images/laptop-3.jpg'
}

// example 26
let minus1 = 569;
let minus2 = 386;
function minus(){
    document.getElementById("minus-cal").innerHTML= minus1 - minus2;
}

// example 27
let multi1 = 15;
let multi2 = 8;
function multipliCalculation(){
    document.getElementById("multi-cal").innerHTML= multi1 * multi2;
}

// example 28 
let division1 = 870;
let division2 = 56;
function divided(){
    document.getElementById("divid-cal").innerHTML =division1 / division2;
}

// example 29
let remainder1 =621;
let remainder2 = 66;
function remainder(){
    document.getElementById("remainder-cal").innerHTML = remainder1 % remainder2;
}

// example 30 
function onFire(){
    document.getElementById("fire").src="images/fire-1.jpg";
}
function offFire(){
    document.getElementById("fire").src="images/fire-2.jpg";
}

// example 31
function hoverShow(){
    document.getElementById("mouse-over").style.display="none"; 
}
function hoverHide(){
    document.getElementById("mouse-over").style.display="block"; 
}


// example 32
const boolean1 = 451;
const boolean2 = 362;
function booleanTypeVar(){
    document.getElementById('boolean-type').innerHTML= boolean1 < boolean2;
}

// example 33 
const bangladesh= ["Hello", "Bangladesh"];
function showBangladesh(){
    document.getElementById('show-bd').innerHTML=bangladesh[1];
}

// example 34
const com6 =50;
const com7 =50;
function comparisonType(){
    document.getElementById('com-type').innerHTML = com6 === com7;
}

// example 35 
function alertMessage(){
    alert()
}

// example 36
const myDate = setInterval(myTarik);

function myTarik() {
  const date = new Date();
  document.getElementById("mydate").innerHTML = date.toDateString();
}

// example 37
function changeTextColor(){
    document.getElementById("change-color").style.color="red"; 
}

// example 38
function textRoted(){
    document.getElementById('fixed-text').innerHTML="";
    document.getElementById('moved-text').innerHTML="Hello World";
}

// example 39 
function showAlertMessage(){
    alert("Hello World")
}

// example 40 
function hideHello(){
    document.getElementById('hide-text').style.display="none";
}
function showHello(){
    document.getElementById('hide-text').style.display="block";
}

// example 41
const booleanF1 = 632;
const booleanF2 = 965;
function booleanFunction(){
    document.getElementById('boolean-fun').innerHTML= booleanF1 > booleanF2;
}

// example 42
function showAlertBer(){
    alert("Hello World")
}

// example 43 
let division7 = 585;
let division8 = 60;
function dividedFunction(){
    document.getElementById("divid-function").innerHTML =division7 / division8;
}

// example 44
const arrayfunction= ["Bangladesh", "India", "Pakistan", "Nepal", "China"];
function showPakistan(){
    document.getElementById('show-p').innerHTML=
    arrayfunction[2];
}

// example 45 
const timeInterval = setInterval(myTimerFunction);

function myTimerFunction() {
  const date = new Date();
  document.getElementById("myTimeFunction").innerHTML = date.toLocaleTimeString();
}

// example 46 
const comOpt1 =62;
const comOpt2 =55;
function comparisonOpt(){
    document.getElementById('com-oparetor').innerHTML = comOpt1 == comOpt2;
}

// example 47
function showButton(){
    document.getElementById("show-hide").style.display="none"; 
}
function hideButton(){
    document.getElementById("show-hide").style.display="block"; 
}


// example 48 
const comfunction1 =87;
const comfunction2 =42;
function comparisonFunction(){
    document.getElementById('com-fun').innerHTML = comfunction1 !== comfunction2;
}

// example 49 
const mainusFunction1 =523;
const mainusFunction2 =398;
function minusFunction(){
    document.getElementById('minus-calculation').innerHTML = mainusFunction1 - mainusFunction2;
}

// example 50 
let multifunction1 = 50;
let multifunction2 = 5;
function multipliCationFunction(){
    document.getElementById("multi-function").innerHTML= multifunction1 * multifunction2;
}
