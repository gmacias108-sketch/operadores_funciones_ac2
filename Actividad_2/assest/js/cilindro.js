// volumen de un paralelepipedo//

function volumenPara(){

let rad = document.getElementById("rad").value
let h = document.getElementById("h").value






let area = Math.PI * Math.pow (rad,2) * h; 




document.getElementById("resultado").innerHTML = "El Volumen del Cilindro Es: " + area;
}