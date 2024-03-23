// Declaracion de las constantes a utilizar
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id;
let LIST = [];

// fecha
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

// funcion agg tarea
function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) {
    return;
  }

  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : '';

  const elemeto = `
    <li id="elemento">
      <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
      <p class="text ${LINE}">${tarea}</p>
      <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
    </li>
  `;

  lista.insertAdjacentHTML('beforeend', elemeto);
}

// funcion tarea realizada
function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);
  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}

// funcion tarea eliminada
function tareaEliminada(element) {
  const elementId = element.id;
  const index = LIST.findIndex(item => item.id === elementId);
  if (index !== -1) {
    LIST[index].eliminado = true;
    lista.removeChild(element.parentNode); // Eliminar el elemento del DOM
    localStorage.setItem('TODO', JSON.stringify(LIST)); // Actualizar el almacenamiento local
  }
}

// Evento click en el botón para agregar tarea
botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });
  }
  localStorage.setItem('TODO', JSON.stringify(LIST));
  input.value = '';
  id++;
});

// Evento al soltar la tecla Enter en el input
document.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      LIST.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      });
    }
    localStorage.setItem('TODO', JSON.stringify(LIST));
    input.value = '';
    id++;
  }
});

// Evento clic en la lista de tareas
lista.addEventListener('click', function (event) {
  const element = event.target;
  const elementData = element.attributes.data.value;

  if (elementData === 'realizado') {
    tareaRealizada(element);
  } else if (elementData === 'eliminado') {
    tareaEliminada(element);
  }
  localStorage.setItem('TODO', JSON.stringify(LIST));
});

// Cargar tareas desde el almacenamiento local al cargar la página
const data = localStorage.getItem('TODO');
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  cargarLista(LIST);
} else {
  LIST = [];
  id = 0;
}

// Función para cargar las tareas en la lista
function cargarLista(DATA) {
  DATA.forEach(function (i) {
    if (!i.eliminado) {
      agregarTarea(i.nombre, i.id, i.realizado, i.eliminado);
    }
  });
}
