var value;
var result;

function button(number) {
   value = document.calc.visor.value += number;
}

function reset() {
  value = document.calc.visor = "";
}

function calculate() {

  value = value.replace("×", "*");
  value = value.replace("÷", "/");
  result = eval(value);
  document.calc.visor.value = result.toLocaleString('pt-br');
}