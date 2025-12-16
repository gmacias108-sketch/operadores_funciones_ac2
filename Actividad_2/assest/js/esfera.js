// volumen de una esfera//

function volumenPara(){

let rad = document.getElementById("rad").value







let volumen = ((3/4) * Math.PI * Math.pow (rad,3)); 




document.getElementById("resultado").innerHTML = "El Volumen de la esfera Es: " + volumen;
}