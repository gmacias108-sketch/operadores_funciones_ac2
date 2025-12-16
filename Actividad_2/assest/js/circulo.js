// area de un circulo//

function areaCirculo(){

let radio = document.getElementById("radio").value





let area = Math.PI * Math.pow (radio,2); 




document.getElementById("resultado").innerHTML = "El area del Circulo es: " + area;
}
