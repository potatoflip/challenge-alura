// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];
let listaAmigos = 0;

function agregarNombre(){
  let listaAmigos = document.getElementById("amigo").value
  if (listaAmigos == ""){
    alert("Por favor ingresen un valor");
    }
  else {
    nombreAmigos.push(listaAmigos);
    }
    limpiarTexto();
    console.log(nombreAmigos);
}
function limpiarTexto(){
  document.getElementById("amigo").value = "";
}
console.log(listaAmigos);
console.log(nombreAmigos);