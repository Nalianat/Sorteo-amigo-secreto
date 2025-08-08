let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('nombreAmigo');
    let nombre = input.value.trim();
    //Si el nombre esta vacío o ya existe en la lista, no lo agrega
    if (!nombre) {
        alert('Por favor, escribe el nombre del jugador.');
        return;
    }
    //Si el nombre tiene un espacio al inicio o al final, no 

        if (nombre && !amigos.includes(nombre)) {
            amigos.push(nombre);
            mostrarAmigos();
            input.value = '';
        }
}



function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para sortear.');
        return;
    }

    // Copia y mezcla la lista
    let sorteados = [...amigos];
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }

    // Evita que alguien se asigne a sí mismo
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            sortearAmigo(); // Vuelve a sortear si hay coincidencia
            return;
        }
    }

    mostrarResultado(sorteados);
}

function mostrarResultado(sorteados) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    amigos.forEach((amigo, i) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} → ${sorteados[i]}`;
        resultado.appendChild(li);
    });
}