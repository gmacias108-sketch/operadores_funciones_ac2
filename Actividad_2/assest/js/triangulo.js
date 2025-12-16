// area de un triangulo//

function areaTriangulo (){

let base = document.getElementById("base").value

let altura = document.getElementById("altura").value



let area = Math.abs(base  * altura) / 2; 




document.getElementById("resultado").innerHTML = "El area del triangulo es: " + area;
}
