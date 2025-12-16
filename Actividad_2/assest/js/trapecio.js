// area de un trapecio
// DM =Diagonal Mayor
// dm = diagonal menor//

function areaTrapecio(){

let DM = document.getElementById("DM").value

let dm = document.getElementById("dm").value

let h = document.getElementById("h").value



let area = Math.abs((DM + dm) * h) / 2; 




document.getElementById("resultado").innerHTML = "El area del Rombo es: " + area;
}