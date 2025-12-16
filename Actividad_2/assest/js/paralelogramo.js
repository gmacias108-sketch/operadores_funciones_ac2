// area de un paralelogramo//

function areaParalelogramo (){

let base = document.getElementById("base").value

let altura = document.getElementById("altura").value



let area = Math.abs(base  * altura); 




document.getElementById("resultado").innerHTML = "El area del Paralelogramo es: " + area;
}
