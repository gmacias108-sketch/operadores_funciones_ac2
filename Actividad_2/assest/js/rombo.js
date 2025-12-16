// area de un Rombo
// DM =Diagonal Mayor
// dm = diagonal menor//

function areaRombo(){

let DM = document.getElementById("DM").value

let dm = document.getElementById("dm").value



let area = Math.abs(DM  * dm) / 2; 




document.getElementById("resultado").innerHTML = "El area del Rombo es: " + area;
}