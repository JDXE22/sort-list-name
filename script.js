const nombres = document.getElementById('nombre');
const nombresOrdenados = document.getElementById('names-sorted');
const agregarBtn = document.getElementById('agregarNombreBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const nombresLista = [];

function agregarNombre() {
  const nombre = nombres.value.trim();

  if (nombre === '') {
    return;
  }

  nombresLista.push(nombre);
  nombresLista.sort();
  nombresOrdenados.value = nombresLista.join('\n');
  nombres.value = '';
  nombres.focus();
}

function limpiar() {
  nombresLista.length = 0;
  nombres.value = '';
  nombresOrdenados.value = '';
  nombres.focus();
}

agregarBtn.addEventListener('click', agregarNombre);
limpiarBtn.addEventListener('click', limpiar);
