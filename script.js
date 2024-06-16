// CICLOS //

const basica = document.getElementById("fp-basica");
const media = document.getElementById("fp-media");
const superior = document.getElementById("fp-superior");

// MODULOS //

const modulos = [];
for (let i = 1; i <= 42; i++) {
    modulos.push(document.getElementById(`modulo${i}`));
}
const fondo = document.getElementById("fondito");

// CICLOS FORMATIVOS //

function cambiarABasica(){
    basica.classList.add("activo");
    media.classList.remove("activo");
    superior.classList.remove("activo");
}

function cambiarAMedia(){
    basica.classList.remove("activo");
    media.classList.add("activo");
    superior.classList.remove("activo");
}

function cambiarASuperior(){
    basica.classList.remove("activo");
    media.classList.remove("activo");
    superior.classList.add("activo");
}

// MODULOS //

function activarModulo(index) {
    modulos[index - 1].classList.add("activepopup");
    fondo.classList.add("fondo-oscuro");
}

// Generar funciones dinámicamente para cada módulo
for (let i = 1; i <= 42; i++) {
    window[`activepopupmodulo${i}`] = () => activarModulo(i);
}

// DESACTIVAR MODULOS

function desactivepopupmodulos() {
    // Selecciona todos los elementos con la clase 'ventana-proyecto'
    const ventanasProyectos = document.querySelectorAll('.ventana-proyecto');
    
    // Remueve la clase 'activepopup' de cada ventana de proyecto
    ventanasProyectos.forEach(modulo => {
        modulo.classList.remove("activepopup");
    });

    // Remueve la clase 'fondo-oscuro' del fondo
    const fondo = document.getElementById("fondito");
    if (fondo) {
        fondo.classList.remove("fondo-oscuro");
    }
}

// Asegurarse de que todos los módulos tengan un manejador de clic para cerrar los pop-ups
document.addEventListener('DOMContentLoaded', () => {
    const closeIcons = document.querySelectorAll('#icono-cierre');
    closeIcons.forEach(icon => {
        icon.addEventListener('click', desactivepopupmodulos);
    });
});

// CONSTRUIR HTML

let xmlDoc;

mostrar()
function mostrar(){
    let xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        Superior(this);
    }
    xhttp.open("GET", "superior.xml");
    xhttp.send();
}

function Superior(xml) {
    let codigoHTML, i;

    xmlDoc = xml.responseXML;

    primerAño = xmlDoc.getElementsByTagName("primer-año").length;
    segundoAño = xmlDoc.getElementsByTagName("segundo-año").length;

    codigoHTML = '<div class="navegacion-ciclos">' +
                    '<h1 id="primer-año-superior">Primer Año - CFGS</h1>' +
                    '<a href="#ciclos"><ion-icon name="arrow-round-up"></ion-icon></a>' +
                    '<a href="#segundo-año-superior"><ion-icon name="arrow-round-down"></ion-icon></a>' +
                    '</div>' +
                    '<div class="tarjetas-modulos">'

    for (i=1; i<primerAño ; i++){

        imagenModulo = xmlDoc.getElementsByTagName("modulo")[i].childNodes[0].nodeValue;
        tituloModulo = xmlDoc.getElementsByTagName("modulo")[i].childNodes[1].nodeValue;

        imagenVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[0].nodeValue;
        tituloVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[1].nodeValue;
        contenidoVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[2].nodeValue;

        codigoHTML += '<div onclick="activepopupmodulo'+i+'()" class="modulos">'
        codigoHTML +=   '<img src="'+imagenModulo+'">'
        codigoHTML +=   '<div class="contenedor-titulo-modulo"><h2>'+tituloModulo+'</h2></div>'
        codigoHTML += '</div>'

        codigoHTML += '<div id="modulo'+i+'" class="ventana-proyecto">'
        codigoHTML +=   '<div id="icono-cierre" onclick="desactivepopupmodulos()"><ion-icon class="cierre" name="close"></ion-icon></div>'
        codigoHTML +=   '<img src="'+imagenVentana+'" alt="">'
        codigoHTML +=   '<div><h1>'+tituloVentana+'</h1></div>'
        codigoHTML +=   '<p>'+contenidoVentana+'</p>'
        codigoHTML += '</div>'

    }

    codigoHTML += '<div class="navegacion-ciclos">' +
                    '<h1 id="segundo-año-superior">Segundo Año - CFGS</h1>' +
                    '<a href="#primer-año-superior"><ion-icon name="arrow-round-up"></ion-icon></a>' +
                    '</div>' +
                    '<div class="tarjetas-modulos">'

    for (i=1; i<segundoAño ; i++){

        imagenModulo = xmlDoc.getElementsByTagName("modulo")[i].childNodes[0].nodeValue;
        tituloModulo = xmlDoc.getElementsByTagName("modulo")[i].childNodes[1].nodeValue;

        imagenVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[0].nodeValue;
        tituloVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[1].nodeValue;
        contenidoVentana = xmlDoc.getElementsByTagName("ventana-modulo")[i].childNodes[2].nodeValue;

        codigoHTML += '<div onclick="activepopupmodulo'+i+'()" class="modulos">'
        codigoHTML +=   '<img src="'+imagenModulo+'">'
        codigoHTML +=   '<div class="contenedor-titulo-modulo"><h2>'+tituloModulo+'</h2></div>'
        codigoHTML += '</div>'

        codigoHTML += '<div id="modulo'+i+'" class="ventana-proyecto">'
        codigoHTML +=   '<div id="icono-cierre" onclick="desactivepopupmodulos()"><ion-icon class="cierre" name="close"></ion-icon></div>'
        codigoHTML +=   '<img src="'+imagenVentana+'" alt="">'
        codigoHTML +=   '<div><h1>'+tituloVentana+'</h1></div>'
        codigoHTML +=   '<p>'+contenidoVentana+'</p>'
        codigoHTML += '</div>'

    }
        
    document.getElementById("fp-superior").innerHTML = codigoHTML;
}