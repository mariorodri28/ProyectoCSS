
function validarCampos(event) {
  event.preventDefault();
  const formulario = event.target.form;
  const campos = formulario.querySelectorAll('.required');
  let isValid = true;
  campos.forEach(campo => {
    const mensajeError = campo.parentNode.querySelector('.mensaje-error');
    if (campo.value.trim() === '' || !campo.checkValidity()) {
      isValid = false;
      campo.classList.add('error');
      if (!mensajeError) {
        const mensajeError = document.createElement('span');
        mensajeError.textContent = 'Por favor, introduce un valor válido.';
        mensajeError.classList.add('mensaje-error');
        campo.parentNode.insertBefore(mensajeError, campo.nextSibling);
      }
    } else {
      campo.classList.remove('error');
      if (mensajeError) {
        mensajeError.remove();
      }
    }
  });

}
function validarEmail(event) {
  const input = event.target;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(input.value)) {
    alert("El email ingresado no es válido. Verifique que tenga formato usuario@dominio.com");
  }
}


function showEmergency(show) {
  const emergency = document.getElementById('emergent');
  if  (show) {
    emergency.classList.add('notHidden');
    emergency.classList.remove('hidden');
  } else {
    emergency.classList.remove('notHidden');
    emergency.classList.add('hidden');
  }
}

// Creamos una variable para almacenar las inmersiones seleccionadas
let inmersionesSeleccionadasArray = [];

function actualizarDatos() {
  // Obtenemos el select y los inputs
  const select = document.getElementById("inmersiones");
  const inmersionesSeleccionadas = document.getElementById("inmersionesSeleccionadas");
  const precioTotal = document.getElementById("precioTotal");

  // Obtenemos la opción seleccionada y su precio
  const opcionSeleccionada = select.options[select.selectedIndex];
  const precio = parseFloat(opcionSeleccionada.getAttribute("data-precio"));

  // Actualizamos la lista de inmersiones seleccionadas
  const inmersion = opcionSeleccionada.text;
  inmersionesSeleccionadasArray.push(inmersion);
  const inmersiones = inmersionesSeleccionadasArray.join("\n");
  inmersionesSeleccionadas.value = inmersiones;

  // Calculamos y actualizamos el precio total
  const precioAnterior = parseFloat(precioTotal.value) || 0;
  const precioNuevo = precioAnterior + precio;
  precioTotal.value = precioNuevo.toFixed(2);

}

function guardarSeleccion(){
  let inmersionesSeleccionadas = document.getElementById("inmersionesSeleccionadas").value;
  let precioTotal = document.getElementById("precioTotal").value;
  let inmersionesSeleccionadasArray = inmersionesSeleccionadas.split("\n");
  document.getElementById("inmersionesPago").value = inmersionesSeleccionadasArray.join("\n");
  document.getElementById("precioTotalPago").value = precioTotal;


}

const navItems = document.querySelectorAll('nav li:not(:nth-child(3))');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    navItems.forEach(item => {
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
    });
  });

  item.addEventListener('mouseleave', () => {
    navItems.forEach(item => {
      item.style.opacity = '1';
      item.style.pointerEvents = 'auto';
    });
  });
});



