// CICLOS //

const basica = document.getElementById("fp-basica");
const media = document.getElementById("fp-media");
const superior = document.getElementById("fp-superior");

// TARJETAS //

const tarjeta1 = document.getElementById("tarjeta1");
const tarjeta2 = document.getElementById("tarjeta2");
const tarjeta3 = document.getElementById("tarjeta3");
const tarjeta4 = document.getElementById("tarjeta4");
const tarjeta6 = document.getElementById("tarjeta6");
const tarjeta5 = document.getElementById("tarjeta5");

// MODULOS //

const modulo1 = document.getElementById("modulo1");
const modulo2 = document.getElementById("modulo2");
const modulo3 = document.getElementById("modulo3");
const modulo4 = document.getElementById("modulo4");
const modulo5 = document.getElementById("modulo5");
const modulo6 = document.getElementById("modulo6");
const modulo7 = document.getElementById("modulo7");
const modulo8 = document.getElementById("modulo8");
const modulo9 = document.getElementById("modulo9");
const modulo10 = document.getElementById("modulo10");
const modulo11 = document.getElementById("modulo11");
const modulo12 = document.getElementById("modulo12");
const modulo13 = document.getElementById("modulo13");
const modulo14 = document.getElementById("modulo14");
const modulo15 = document.getElementById("modulo15");
const modulo16 = document.getElementById("modulo16");
const modulo17 = document.getElementById("modulo17");
const modulo18 = document.getElementById("modulo18");
const modulo19 = document.getElementById("modulo19");
const modulo20 = document.getElementById("modulo20");
const modulo21 = document.getElementById("modulo21");
const modulo22 = document.getElementById("modulo22");
const modulo23 = document.getElementById("modulo23");
const modulo24 = document.getElementById("modulo24");
const modulo25 = document.getElementById("modulo25");
const modulo26 = document.getElementById("modulo26");
const modulo27 = document.getElementById("modulo27");
const modulo28 = document.getElementById("modulo28");
const modulo29 = document.getElementById("modulo29");
const modulo30 = document.getElementById("modulo30");
const modulo31 = document.getElementById("modulo31");
const modulo32 = document.getElementById("modulo32");
const modulo33 = document.getElementById("modulo33");
const modulo34 = document.getElementById("modulo34");
const modulo35 = document.getElementById("modulo35");
const modulo36 = document.getElementById("modulo36");
const fondo = document.getElementById("fondito");


// PROYECTOS //


function activepopupTarjeta1(){
    console.log("entra")
    tarjeta1.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function activepopupTarjeta2(){
    tarjeta2.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function activepopupTarjeta3(){
    tarjeta3.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function activepopupTarjeta4(){
    tarjeta4.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function activepopupTarjeta5(){
    tarjeta5.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function activepopupTarjeta6(){
    tarjeta6.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}
function desactivepopupTarjetas(){
    tarjeta1.classList.remove("activepopup")
    tarjeta2.classList.remove("activepopup")
    tarjeta3.classList.remove("activepopup")
    tarjeta4.classList.remove("activepopup")
    tarjeta5.classList.remove("activepopup")
    tarjeta6.classList.remove("activepopup")
    fondo.classList.remove("fondo-oscuro")
}


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

function activepopupmodulo1(){
    modulo1.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo2(){
    modulo2.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo3(){
    modulo3.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo4(){
    modulo4.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo5(){
    modulo5.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo6(){
    modulo6.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo7(){
    modulo7.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo8(){
    modulo8.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo9(){
    modulo9.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo10(){
    modulo10.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo11(){
    modulo11.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo12(){
    modulo12.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo13(){
    modulo13.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo14(){
    modulo14.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo15(){
    modulo15.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo16(){
    modulo16.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo17(){
    modulo17.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo18(){
    modulo18.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo19(){
    modulo19.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo20(){
    modulo20.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo21(){
    modulo21.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo22(){
    modulo22.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo23(){
    modulo23.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo24(){
    modulo24.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo25(){
    modulo25.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo26(){
    modulo26.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo27(){
    modulo27.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo28(){
    modulo28.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo29(){
    modulo29.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo30(){
    modulo30.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo31(){
    modulo31.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo32(){
    modulo32.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo33(){
    modulo33.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo34(){
    modulo34.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo35(){
    modulo35.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}function activepopupmodulo36(){
    modulo36.classList.add("activepopup")
    fondo.classList.add("fondo-oscuro")
}

// DESACTIVAR MODULOS

function desactivepopupmodulos(){
    modulo1.classList.remove("activepopup")
    modulo2.classList.remove("activepopup")
    modulo3.classList.remove("activepopup")
    modulo4.classList.remove("activepopup")
    modulo5.classList.remove("activepopup")
    modulo6.classList.remove("activepopup")
    modulo7.classList.remove("activepopup")
    modulo8.classList.remove("activepopup")
    modulo9.classList.remove("activepopup")
    modulo10.classList.remove("activepopup")
    modulo11.classList.remove("activepopup")
    modulo12.classList.remove("activepopup")
    modulo13.classList.remove("activepopup")
    modulo14.classList.remove("activepopup")
    modulo15.classList.remove("activepopup")
    modulo16.classList.remove("activepopup")
    modulo17.classList.remove("activepopup")
    modulo18.classList.remove("activepopup")
    modulo19.classList.remove("activepopup")
    modulo20.classList.remove("activepopup")
    modulo21.classList.remove("activepopup")
    modulo22.classList.remove("activepopup")
    modulo23.classList.remove("activepopup")
    modulo24.classList.remove("activepopup")
    modulo25.classList.remove("activepopup")
    modulo26.classList.remove("activepopup")
    modulo27.classList.remove("activepopup")
    modulo28.classList.remove("activepopup")
    modulo29.classList.remove("activepopup")
    modulo30.classList.remove("activepopup")
    modulo31.classList.remove("activepopup")
    modulo32.classList.remove("activepopup")
    modulo33.classList.remove("activepopup")
    modulo34.classList.remove("activepopup")
    modulo35.classList.remove("activepopup")
    modulo36.classList.remove("activepopup")
    fondo.classList.remove("fondo-oscuro")
}