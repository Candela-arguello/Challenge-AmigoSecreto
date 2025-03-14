let ListAmigos = []; //Contiene todos los nombres

//Función 1
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo !== "") {
    ListAmigos.push(amigo);
    console.log(ListAmigos);
    actualizarLista();
    LimpiarCampo();
  } else {
    alert("Por favor, ingrese un nombre válido");
  }
}

//Función 2
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < ListAmigos.length; i++) {
    let li = document.createElement("li"); // Crea el elemento <li>
    li.textContent = ListAmigos[i]; // Asigna el nombre del amigo
    lista.appendChild(li); // Agrega <li> a la lista
  }
}

//Función 3
function sortearAmigo() {
  if (ListAmigos.length == 0) {
    alert("Ingrese amigos para poder realizar el sorteo");
  } else {
    LimpiarAmigos();
    let sorteado = Math.floor(Math.random() * ListAmigos.length);
    console.log("Longitud del array:", ListAmigos.length);
    console.log("Numero sorteado:", sorteado);
    console.log("Amigo seleccionado:", ListAmigos[sorteado]);

    let resultado = document.getElementById("resultado");
    let result = document.createElement("li");
    result.textContent = `El amigo sorteado es: ${ListAmigos[sorteado]}`;
    resultado.appendChild(result);
  }
}

//Función 4
function LimpiarAmigos() {
  document.getElementById("listaAmigos").innerHTML = "";
}

//Función 5
function LimpiarCampo() {
  document.getElementById("amigo").value = "";
}
