// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        inputAmigo.value = '';
        actualizarListaAmigos();
    }
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo ganador
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }

    // Seleccionar un amigo aleatorio
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    // Mostrar resultado con efecto
    mostrarResultadoConEfecto(ganador);
}

// Función para mostrar el resultado del sorteo con efecto
function mostrarResultadoConEfecto(ganador) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    const li = document.createElement('li');
    li.innerHTML = '<span class="winner-text">¡El amigo secreto ganador es: </span><span class="winner-name"></span>';
    listaResultado.appendChild(li);

    // Efecto de escritura para el nombre del ganador
    const winnerNameSpan = li.querySelector('.winner-name');
    let i = 0;
    const writeWinner = setInterval(() => {
        if (i < ganador.length) {
            winnerNameSpan.textContent += ganador.charAt(i);
            i++;
        } else {
            clearInterval(writeWinner);
        }
    }, 100); // Ajusta este valor para cambiar la velocidad de escritura
}

// Agregar evento para tecla Enter en el input
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});