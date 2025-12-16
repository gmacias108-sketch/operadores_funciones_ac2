// volumen de un //

function volumenPara(){

let l = document.getElementById("l").value
let b = document.getElementById("b").value
let h = document.getElementById("h").value





let area = Math.abs (l * b * h); 




document.getElementById("resultado").innerHTML = "El Volumen del Paralelepipedo Es: " + area;
}