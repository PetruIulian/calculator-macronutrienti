// Formula Femei 65 + (9.5 * kg) + (1,8 * inaltime) - (4,7 * ani) * indice
// Formula Barbati 66 + (13.7 * kg) + (5 * inaltime) - (6,8 * ani)

// indici > sendentar 1.3, activ 1,5, foarte activ 1,7

var inaltime;
var varsta;
var greutate;
var carbo;
var proteine;
var grasimi;
var indice;
var calorii;
var sex;
var kgid;
var inaltimeid;
var varstaid;


function calcul(){
    varsta = parseInt(document.getElementById("varsta").value);
    inaltime = parseInt(document.getElementById("inaltime").value);
    greutate = parseInt(document.getElementById("greutate").value);
if(document.getElementById("sedentar").checked){
    indice = 1.3;
}
else if(document.getElementById("activ").checked){
    indice = 1.5;
}
else if(document.getElementById("foarte activ").checked){
    indice = 1.7;
}

if(document.getElementById("barbat").checked){
    sex = 66;
    kgid = 13.7;
    inaltimeid = 5;
    varstaid = 6.8;
}
else if(document.getElementById("femeie").checked){
    sex = 65;
    kgid = 9.5;
    inaltimeid = 1.8;
    varstaid = 4.7;
    
}

calorii = (sex + (kgid * greutate) + (inaltimeid * inaltime) - (varstaid * varsta)) * indice;
proteine = (1 * greutate) * 2;
grasimi = (0.4 * greutate) * 2.2;
carbo = (calorii - ((grasimi * 9) + (proteine * 4)))/4;

document.getElementById("final").innerHTML = "<h2 id='final'>Numar Calorii: " + Math.trunc(calorii) + " <br> Proteine: " + Math.trunc(proteine) + "g<br> Carbohidrati: " + Math.trunc(carbo)+ "g<br> Grasimi: " + Math.trunc(grasimi)+"g</h2>"
}

