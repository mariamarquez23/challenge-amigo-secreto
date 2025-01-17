let listaNombres = [];

function agregarAmigos() {
    let nombre = document.getElementById("amigo").value;
    if (nombre != "") {
        listaNombres.push(nombre);
        actualizarAmigos();
    } else {
        alert("Ingrese un nombre válido.");
    }
    document.getElementById("amigo").value = "";
}

function actualizarAmigos() {
    let nombres = document.querySelector("#listaAmigos");
    nombres.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        let nombre = listaNombres[i];
        let li = document.createElement("li");
        li.textContent = nombre;
        nombres.appendChild(li);
    }
}

function sortearAmigos() {
    if (listaNombres.length == 0) {
        alert('No hay amigos para sortear.');
    }
    let resultado = document.querySelector("#resultado");
    let amigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    resultado.innerHTML = `${amigoSecreto}`;
    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-draw").disabled = true;
}