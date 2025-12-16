// area de un rectangulo//

function areaRectangulo (){

let base = document.getElementById("base").value

let altura = document.getElementById("altura").value



let area = Math.abs(base  * altura); 




document.getElementById("resultado").innerHTML = "El area del Rectangulo es: " + area;
}
