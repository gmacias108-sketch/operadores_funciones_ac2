// volumen de una esfera//

function volumenPara(){

let rad = document.getElementById("rad").value
let h = document.getElementById("h").value






let volumen = (Math.PI * Math.pow (rad,2) * h) / 3; 




document.getElementById("resultado").innerHTML = "El Volumen de un cono Es: " + volumen;
}