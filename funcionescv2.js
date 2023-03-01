/**

var fondo = document.getElementById("columna_1");
//var fondot = document.getElementsByTagName("h3");
var fondo1 = document.getElementById("t1");
var fondo2 = document.getElementById("t2");
var fondo3 = document.getElementById("t3");

document.getElementById('boton_v').onclick = function () {
    fondo.style.backgroundColor = "#1FA955";
    //fondot.style.backgroundColor = "#A3DAB8";
    fondo1.style.backgroundColor = "#A3DAB8";
    fondo2.style.backgroundColor = "#A3DAB8";
    fondo3.style.backgroundColor = "#A3DAB8";
}

document.getElementById('boton_a').onclick = function () {
    fondo.style.backgroundColor = "#196EAA";
    //fondot.style.backgroundColor = "#AAD2E6";
    fondo1.style.backgroundColor = "#AAD2E6";
    fondo2.style.backgroundColor = "#AAD2E6";
    fondo3.style.backgroundColor = "#AAD2E6";
}

*/

var fondo = document.getElementById("columna_1");
var fondo1 = document.getElementById("t1");
var fondo2 = document.getElementById("t2");
var fondo3 = document.getElementById("t3");
var color = 'verde'

document.getElementById('boton_a').onclick = function () {
switch (color) {
    case 'azul':
        fondo.style.backgroundColor = "#196EAA";
        fondo1.style.backgroundColor = "#AAD2E6";
        fondo2.style.backgroundColor = "#AAD2E6";
        fondo3.style.backgroundColor = "#AAD2E6";
        color = 'verde'
        break;
    case 'verde':
        fondo.style.backgroundColor = "#1FA955";
        fondo1.style.backgroundColor = "#A3DAB8";
        fondo2.style.backgroundColor = "#A3DAB8";
        fondo3.style.backgroundColor = "#A3DAB8";
        color = 'rojo'
        break;
    case 'rojo':
        fondo.style.backgroundColor = "#B52323";
        fondo1.style.backgroundColor = "#E9C8C8";
        fondo2.style.backgroundColor = "#E9C8C8";
        fondo3.style.backgroundColor = "#E9C8C8";
        color = 'amarillo'
        break;
    case 'amarillo':
        fondo.style.backgroundColor = "#A09E1D";
        fondo1.style.backgroundColor = "#E3E2B5";
        fondo2.style.backgroundColor = "#E3E2B5";
        fondo3.style.backgroundColor = "#E3E2B5";
        color = 'negro'
        break;
    case 'negro':
        fondo.style.backgroundColor = "#373737";
        fondo1.style.backgroundColor = "#C3C3C3";
        fondo2.style.backgroundColor = "#C3C3C3";
        fondo3.style.backgroundColor = "#C3C3C3";
        color = 'azul'
        break;
    }
}



/**

var fondo = document.getElementById("columna_1");
var fondo1 = document.getElementById("t1");
var fondo2 = document.getElementById("t2");
var fondo3 = document.getElementById("t3");
var x = 0

document.getElementById('boton_a').onclick = function () {
    if (x==1) {
        fondo.style.backgroundColor = "#196EAA";
        fondo1.style.backgroundColor = "#AAD2E6";
        fondo2.style.backgroundColor = "#AAD2E6";
        fondo3.style.backgroundColor = "#AAD2E6";
        x=0;
    } else {
        fondo.style.backgroundColor = "#1FA955";
        fondo1.style.backgroundColor = "#A3DAB8";
        fondo2.style.backgroundColor = "#A3DAB8";
        fondo3.style.backgroundColor = "#A3DAB8";
        x=1;
    }
}

*/