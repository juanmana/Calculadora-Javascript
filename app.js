const numberButton = document.getElementsByName("data-number");
const numberOpera = document.getElementsByName("data-opera");
const numberDelete = document.getElementsByName("data-delete")[0];
const numberEqual = document.getElementsByName("data-equal")[0];

var result = document.getElementById("result");

var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

numberButton.forEach(function(element) {
  element.addEventListener("click", function() {
    addNumber(element.innerText);
  });
});

numberOpera.forEach(function(element) {
  element.addEventListener("click", function() {
    addOpera(element.innerText);
  });
});

numberEqual.addEventListener("click", function() {
  calcular();
  actualizarDisplay();
});

numberDelete.addEventListener("click", function() {
  Clear();
  actualizarDisplay();
});



function addOpera(op){

if(opeActual==="") return;
if(opeAnterior !==""){

calcular()

}
operacion = op.toString();
opeAnterior = opeActual;
opeActual = "";

}


function calcular(){
var calculo;
const anterior = parseFloat(opeAnterior);
const actual = parseFloat(opeActual);

if(isNaN(anterior)|| isNaN(actual)) return;
switch(operacion){
case "+":
calculo = anterior + actual;
break;
case "-":
calculo = anterior - actual;
break;
case "x":
calculo = anterior * actual;
break;
case "/":
calculo = anterior / actual;
break;
default:
    return;

}
opeActual = calculo;
operacion = undefined;
opeAnterior ="";
}



function addNumber(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function Clear(){

opeActual ="";
opeAnterior ="";
operacion = undefined;

}

function actualizarDisplay() {
  result.value = opeActual;
}


Clear()