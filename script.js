// FUNCIONES GLOBALES - así seguro funcionan
function abrirSecreto() {
  console.log("🎯 ¡CLIC DETECTADO! Abriendo secreto...");
  document.getElementById("ventanaSecreta").style.display = "flex";
}

function cerrarSecreto() {
  console.log("🔒 Cerrando secreto...");
  document.getElementById("ventanaSecreta").style.display = "none";
}

// Cerrar con ESC
document.onkeydown = function(event) {
  if (event.key === "Escape") {
    cerrarSecreto();
  }
};

// Cerrar haciendo clic fuera
document.getElementById("ventanaSecreta").onclick = function(event) {
  if (event.target === this) {
    cerrarSecreto();
  }
};

// Mensaje de confirmación
console.log("🔄 Script cargado - las funciones están listas");
console.log("📍 Agujero:", document.getElementById("agujero"));
console.log("📍 Ventana:", document.getElementById("ventanaSecreta"));