let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('nombreAmigo');
    let nombre = input.value.trim();
    //Si el nombre esta vacío o ya existe en la lista, no lo agrega
    if (!nombre) {
        alert('Por favor, escribe el nombre del jugador.');
        return;
    }
        if (nombre && !amigos.includes(nombre)) { // Verifica que no esté vacío y no se repita
            // Agrega el nombre a la lista
            amigos.push(nombre);
            mostrarLista();
            // Limpia el campo de entrada
            input.value = '';
        }
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos'); // Selecciona el elemento ul
    lista.innerHTML = ''; // Limpia la lista antes de mostrarla de nuevo
    // Muestra cada amigo en la lista
    for (let amigo of amigos) { // Recorre el array de amigos
        const li = document.createElement('li'); // Crea un nuevo elemento li
        li.textContent = amigo; // Asigna el nombre del amigo al li
        lista.appendChild(li); // Agrega el li a la lista ul
    }
}

function sortearAmigo() { // Verifica que haya al menos dos amigos para sortear
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para sortear.');
        return;
    }
}
