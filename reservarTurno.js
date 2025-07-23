

const servicioSelect = document.getElementById('servicio');
const extraSelect = document.getElementById('servicioExtra');
const formulario = document.getElementById('formulario'); 
const totalSpan = document.getElementById('total'); 


//aca puede ver el ttotal el usario
servicioSelect.addEventListener('change', mostrarTotal);
extraSelect.addEventListener('change', mostrarTotal);

function mostrarTotal() {
  const total = calcularTotal();
  totalSpan.textContent = `$${total.toLocaleString('es-AR')}`;
}

function calcularTotal() {
  const servicioPrecio = parseInt(servicioSelect.selectedOptions[0].dataset.precio) || 0;
  const extraPrecio = parseInt(extraSelect.selectedOptions[0].dataset.precio) || 0;
  return servicioPrecio + extraPrecio;
}


reservaForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const totalFinal = calcularTotal();

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const servicio = servicioSelect.value;
  const extra = extraSelect.value || 'Sin extra';
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  const fechaObj = new Date(fecha);
  const diaSemana = fechaObj.getDay();
  const fechaAviso = document.getElementById('fecha-aviso');
  fechaAviso.textContent = '';

  if (diaSemana === 0 || diaSemana === 6) {
    fechaAviso.textContent = '⚠️ Solo se puede reservar de lunes a viernes.';
    return;
  }

  // Validar que se eligió un servicio válido
  if (servicio === "SeleccionServis") {
    alert("⚠️ Por favor, seleccioná un servicio válido.");
    return;
  }

  const mensaje = `*¡Hola! Quiero confirmar mi turno*

Mis datos son:

🙋‍♀️ Nombre: ${nombre}
📞 Teléfono: ${telefono}
💅 Servicio: ${servicio} - $${parseInt(servicioSelect.selectedOptions[0].dataset.precio).toLocaleString('es-AR')}
✨ Extra: ${extra} - $${parseInt(extraSelect.selectedOptions[0].dataset.precio).toLocaleString('es-AR')}
📆 Fecha: ${fecha}
⏰ Hora: ${hora}

💸 *Total: $${totalFinal.toLocaleString('es-AR')}*`;

  const mensajeEncode = encodeURIComponent(mensaje);
  window.open(`https://wa.me/3515223831?text=${mensajeEncode}`, '_blank');

  const clave = `${fecha}-${hora}`;
  localStorage.setItem(clave, 'ocupado');

  formulario.reset();
  totalSpan.textContent = '$0';




});
