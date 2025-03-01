let amigo = [];


function agregarAmigo() {
    let entradaAmigos = document.getElementById("amigo");
    let nombreAmigo = entradaAmigos.value;

    if (!nombreAmigo) {
        alert("Ingrese un nombre valido");
        return;        
    }
    
    amigo.push(nombreAmigo);
    ulListaAmigos();
    entradaAmigos.value = "";    
    entradaAmigos.focus();

    console.log(amigo);
    
}

function ulListaAmigos() {
    let ulAmigos = document.getElementById("listaAmigos");
    ulAmigos.innerHTML = "";
    amigo.forEach((amigo) => {
        ulAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    let ulResultado = document.getElementById("resultado");
    let random = Math.floor(Math.random() * amigo.length);
    let amigoSecreto = amigo[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    document.getElementById("sorteo").disabled = true;
}

function resetearSorteo() {
    location.reload();
}



