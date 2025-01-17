let listaNombres = [];

function agregarAmigos() {
    const nombre = document.getElementById("amigo").value;
    if (nombre != "") {
        listaNombres.push(nombre);
        actualizarAmigos();
    } else {
        alert("Ingrese un nombre válido.");
    }
    document.getElementById("amigo").value = "";
}

function actualizarAmigos() {
    const nombres = document.querySelector("#listaAmigos");
    nombres.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        const nombre = listaNombres[i];
        const li = document.createElement("li");
        li.textContent = nombre;
        nombres.appendChild(li);
    }
}

function sortearAmigos() {

}