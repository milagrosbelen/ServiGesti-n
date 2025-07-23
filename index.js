// index.js
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalPrecio = document.getElementById("modal-precio");
const modalDuracion = document.getElementById("modal-duracion");
const modalDescripcion = document.getElementById("modal-descripcion");

const serviciosData = {
  servis: {
    titulo: "Servis",
    precio: "$3.800",
    duracion: "20 minutos",
    descripcion: "Limpieza y mantenimiento de uñas existentes.",
  },
  limpieza: {
    titulo: "Limpieza",
    precio: "$7.700",
    duracion: "30 minutos",
    descripcion: "Limpieza profunda de uñas y cutículas.",
  },
  semipermanente: {
    titulo: "Semipermanente",
    precio: "$9.400",
    duracion: "40 minutos",
    descripcion: "Esmaltado semipermanente con duración extendida.",
  },
  kapping_liso: {
    titulo: "Kapping Liso",
    precio: "Uñas cortas $12.000 - Uñas largas $13.900",
    duracion: "1 hora",
    descripcion: "Kapping sin diseño. Incluye forma y esmaltado liso.",
  },
  kapping_diseño: {
    titulo: "Kapping Diseño",
    precio: "Uñas cortas $13.900 - Uñas largas $15.000",
    duracion: "1 hora 15 minutos",
    descripcion: "Kapping con diseños personalizados.",
  },
  softgel_liso: {
    titulo: "Soft Gel Liso",
    precio: "Uñas cortas $15.500 - Uñas largas $16.500",
    duracion: "1 hora",
    descripcion: "Extensiones con Soft Gel en esmaltado liso.",
  },
  softgel_diseño: {
    titulo: "Soft Gel Diseño",
    precio: "Uñas cortas $16.900 - Uñas largas $17.900",
    duracion: "1 hora 20 minutos",
    descripcion: "Soft Gel con arte o diseño a elección.",
  },
  diseño: {
    titulo: "Diseño por Uña",
    precio: "$1.000 por uña (aprox.)",
    duracion: "10 minutos por uña",
    descripcion: "Diseños personalizados por uña.",
  },
  combo: {
    titulo: "Combo Kapping + Soft Gel",
    precio: "$14.900",
    duracion: "1 hora 30 minutos",
    descripcion: "Combinación de Kapping y Soft Gel.",
  },
};

function mostrarModal(servicioId) {
  const servicio = serviciosData[servicioId];
  modalTitulo.textContent = servicio.titulo;
  modalPrecio.textContent = `💸 Precio: ${servicio.precio}`;
  modalDuracion.textContent = `⏱️ Duración: ${servicio.duracion}`;
  modalDescripcion.textContent = `📌 Detalles: ${servicio.descripcion}`;
  modal.style.display = "block";
}

function cerrarModal() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function (e) {
  if (e.target === modal) cerrarModal();
});
