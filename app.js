document.getElementById('btn2').style.display ='none';
fondo.src= "./img/img_before_event.png";
function funcionTotal() {

//LA SGTE FUNCIÓN CAPTURA EL TEXTO DEL INPUT Y LO PASA A INTEGER
function numeroGeneradoUsuario() {
    let num=document.querySelector("#numero-adivinanza").value;
    return num;
}
let numeroIngresado=parseInt(numeroGeneradoUsuario());
// CREA NUMERO DE LA CHILI
        if(numeroIngresado>=0){
        numeroCHILI = numeroIngresado+(Math.floor(Math.random()*10+1))}else{
            alert('INGRESA UN NÚMERO MAYOR A CERO OEEE CHISTRÍS!!');
        };


    cambiarTexto('p.rptaChili',numeroCHILI);

//LA SGTE FUNCIÓN OCULTA LA 1RA PÁGINA Y MUESTRA LA 2DA CON EL RESULTADO
    function ocultar_mostrar() {      
    fondo.src= "./img/img_after_event.png";
    document.getElementById('btn2').style.display ='flex';
    document.getElementById('btn1').style.display ='none';
    document.getElementById('numero-adivinanza').style.display ='none';
}    
//LA SGTE FUNCIÓN MODIFICA EL TEXTO DE UN ELEMENTO DEL HTML
function cambiarTexto(elemento,texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
ocultar_mostrar();
}
