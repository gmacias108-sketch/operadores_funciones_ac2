// area de un Cometa
// D1 =Diagonal Uno
// d2 = diagonal Dos //

function areaCometa(){

let D1 = document.getElementById("D1").value

let d2 = document.getElementById("d2").value



let area = Math.abs(D1  * d2) / 2; 




document.getElementById("resultado").innerHTML = "El area de la cometa es: " + area;
}