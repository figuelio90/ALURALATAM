// SE AÑADE UN NOMBRE A LA LISTA DE AMIGOS A SORTEAR
let amigos = [];

function agregarAmigo() {
    let Nombre = document.getElementById('amigo');
    let nombreDeAmigo = Nombre.value.trim(); // Eliminar espacios en blanco

    if (!nombreDeAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombreDeAmigo);
    Nombre.value = '';
    Nombre.focus();
    mostrarAmigsort();
}

function mostrarAmigsort() {
    let ListAmig = document.getElementById('listaAmigos');
    ListAmig.innerHTML = "";

    amigos.forEach(amigo => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        ListAmig.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    mostrarAmigsort();

    if (amigos.length === 0) {
        setTimeout(() => {
            alert("Ya se sortearon todos los amigos de la lista");
        }, 600);
    }
}
