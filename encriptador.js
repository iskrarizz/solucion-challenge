var cuadroDeTexto = document.getElementById("mensajeIngresado");
var botoncito = document.getElementById("boton1");
var textoEncriptado = document.getElementById("respuesta");
var botoncito2 = document.getElementById("boton2");
var botoncito3 = document.getElementById("botonCopiar");
var textoReconocido;
var i;
var letra;
var vocales = ["a", "e", "i", "o", "u"];
var final;
var resultado = "";
let sectionResultado = document.getElementById("resultado-obtenido");
sectionResultado.style.display = "none";
let sectionContenido = document.getElementById("section-contenido");

function encriptar() {
  textoReconocido = cuadroDeTexto.value;
  console.log(textoReconocido);
  for (i = 0; i < textoReconocido.length; i++) {
    letra = textoReconocido.charAt(i);
    if (letra == vocales[0]) {
      letra = "ai";
      resultado = resultado + letra;
    } else if (letra == vocales[1]) {
      letra = "enter";
      resultado = resultado + letra;
    } else if (letra == vocales[2]) {
      letra = "imes";
      resultado = resultado + letra;
    } else if (letra == vocales[3]) {
      letra = "ober";
      resultado = resultado + letra;
    } else if (letra == vocales[4]) {
      letra = "ufat";
      resultado = resultado + letra;
    } else {
      resultado = resultado + letra;
    }
  }
  respuesta.textContent = `${resultado} `;
  sectionContenido.style.display = "none";
  sectionResultado.style.display = "inline-block";
}
botoncito.onclick = encriptar;

function desencriptar() {
  textoReconocido = cuadroDeTexto.value;
  console.log(textoReconocido);

  if (textoReconocido) {
    final = textoReconocido.replaceAll("ai", "a");
    var final1 = final.replaceAll("enter", "e");
    var final2 = final1.replaceAll("imes", "i");
    var final3 = final2.replaceAll("ober", "o");
    var final4 = final3.replaceAll("ufat", "u");
  }
  respuesta.textContent = `${final4} `;
  sectionContenido.style.display = "none";
  sectionResultado.style.display = "inline-block";
}
botoncito2.onclick = desencriptar;

function copiar() {
  textoEncriptado.select();
  textoEncriptado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
botoncito3.onclick = copiar;
