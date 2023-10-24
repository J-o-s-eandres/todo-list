// Declaración de las constantes a utilizar
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id = 0;
let LIST = [];

// Fecha
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' });

function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) {
        return;
    }

    const REALIZADO = realizado ? check : uncheck;
    const LINE = realizado ? lineThrough : '';

    const elemento = `
        <li id="elemento">
            <i class="far ${REALIZADO}" data-action="realizado" data-id="${id}"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i class="fas fa-trash de" data-action="eliminado" data-id="${id}"></i>
        </li>
    `;

    lista.insertAdjacentHTML("beforeend", elemento);
}

function tareaRealizada(element) {
    const taskId = element.getAttribute('data-id');
    LIST[taskId].realizado = !LIST[taskId].realizado;
    actualizarLocalStorage();
    cargarLista(LIST);
}

function tareaEliminada(element) {
    const taskId = element.getAttribute('data-id');
    LIST[taskId].eliminado = true;
    actualizarLocalStorage();
    cargarLista(LIST);
}

botonEnter.addEventListener('click', () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false);
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        });
        actualizarLocalStorage();
        input.value = '';
        id++;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea, id, false, false);
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            });
            actualizarLocalStorage();
            input.value = '';
            id++;
        }
    }
});

lista.addEventListener('click', function (event) {
    const element = event.target;
    const action = element.getAttribute('data-action');
    if (action === 'realizado') {
        tareaRealizada(element);
    } else if (action === 'eliminado') {
        tareaEliminada(element);
    }
});

function actualizarLocalStorage() {
    localStorage.setItem('TODO', JSON.stringify(LIST));
}

function cargarLista(data) {
    lista.innerHTML = ''; // Limpiar la lista antes de cargarla nuevamente
    data.forEach(function (task, index) {
        agregarTarea(task.nombre, index, task.realizado, task.eliminado);
    });
}

// Cargar datos desde el localStorage al inicio
let data = localStorage.getItem('TODO');
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0;
}
