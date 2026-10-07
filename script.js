const nombres = document.getElementById("nombre");
const nombresOrdenados = document.getElementById("names-sorted");
const agregarBtn = document.getElementById("agregarNombreBtn");
const limpiarBtn = document.getElementById("limpiarBtn");

function agregarNombre() {
  const nombresListas = nombres.value.split(" ");
  const listaNombresOrdenados = nombresListas.sort();
  console.log(listaNombresOrdenados);

  nombresOrdenados.textContent = listaNombresOrdenados;
}

function escucharInput() {
  nombres.textContent = nombres.value;
}

function limpiar() {
  nombres.value = "";
  nombresOrdenados.textContent = "";
  nombres.focus();
}

nombres.addEventListener("input", escucharInput);
agregarBtn.addEventListener("click", agregarNombre);
limpiarBtn.addEventListener("click", limpiar);
