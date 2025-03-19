# ALURALATAM
CHALLENGE
### PROJECTO MI AMIGO SECRETO 
![](https://itconnect.lat/portal/wp-content/uploads/2023/03/Oracle-Next-Education--e1678304093153.png)
### Comando de Git usados 
- Git init
- Git status
- Git add.
- Git commit -m
- Git push
- Entre otros

###FUNCIONES UTILIZADAS
####Agregar amigos 

```javascript
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
```
####Mostrar Amigos 
```javascript
function mostrarAmigsort() {
    let ListAmig = document.getElementById('listaAmigos');
    ListAmig.innerHTML = "";

    amigos.forEach(amigo => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        ListAmig.appendChild(itemLista);
    });
}
```
####Sortear Amigos 
```javascript
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
```:
