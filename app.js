let listaNombres = [];

function agregar() {
    let nombre = document.getElementById("amigo").value;
    if (nombre != "") {
        listaNombres.push(nombre);
        actualizar();
    } else {
        alert("Ingrese un nombre válido.");
    }
    document.getElementById("amigo").value = "";
}

function actualizar() {
    let nombres = document.querySelector("#listaAmigos");
    nombres.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        let nombre = listaNombres[i];
        let li = document.createElement("li");
        li.textContent = nombre;
        nombres.appendChild(li);
    }
}

function sortear() {
    if (listaNombres.length == 0) {
        alert('No hay amigos para sortear.');
    } else {
        let resultado = document.querySelector("#resultado");
        let amigoSecreto = listaNombres[Math.floor(Math.random() * listaNombres.length)];
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
        document.querySelector("#listaAmigos").style.display = "none";
    }
}
