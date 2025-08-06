// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];
//Funcion permite verificar que el input no este vacio o sea un numero, al ser cualquiera de los casos muestra una alerta.
function agregarNombre(){
  let listaAmigos = document.getElementById("amigo").value.trim();
  if (listaAmigos == ""){
    alert("Por favor ingresen un nombre");
    }
    else if(!isNaN(listaAmigos)){
      alert("Por favor ingrese un nombre")
    }
  else {
    nombreAmigos.push(listaAmigos);
    }
    mostrarLista();
    limpiarTexto();
    console.log(nombreAmigos);
}

// Toma los nombres que se ingresan y los va añadiendo al elemento lista para mostrar en pantalla
function mostrarLista(){
  let longitudLista = nombreAmigos.length;
  let lista = "";
  for (let i = 0; i < longitudLista; i++){
    lista += `<li>${nombreAmigos[i]}</li>`;
  }
  mostrarTextos("listaAmigos", lista)
  return lista;
}
//utiliza la funcion random para elegir un nombre al azar segun las posiciones de la lista.
function sortearAmigo(){
  let longitudLista = nombreAmigos.length;
  if (nombreAmigos == ""){
    alert("Ingrese al menos un nombre");
  }
  else {
    let sorteo = nombreAmigos[Math.floor(Math.random()*(longitudLista))];
    mostrarTextos("resultado",sorteo);
  }
  return sorteo;
}
//Funciones llamadas
function limpiarTexto(){
  document.getElementById("amigo").value = "";
}

function mostrarTextos(idElemento, texto){
  document.getElementById(idElemento).innerHTML = texto;
}