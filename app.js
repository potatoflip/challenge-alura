// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarNombre(){
  let listaAmigos = document.getElementById("amigo").value.trim();
  if (listaAmigos == ""){
    alert("Por favor ingresen un valor");
    }
  else {
    nombreAmigos.push(listaAmigos);
    }
    mostrarLista();
    limpiarTexto();
    console.log(nombreAmigos);
}
function limpiarTexto(){
  document.getElementById("amigo").value = "";
}

function mostrarLista(){
  let longitudLista = nombreAmigos.length;
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < longitudLista; i++){
    lista.innerHTML += `<li>${nombreAmigos[i]}</li>`;
  }
  return lista.innerHTML;
}
