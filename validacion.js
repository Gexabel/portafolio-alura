const formulario = document.querySelector('.formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío automático del formulario

  const errores = []; // Array para almacenar los errores de validación

  // Validación del nombre
  if (nombreInput.value === '') {
    errores.push('El campo "Nombre" es obligatorio.');
  }

  // Validación del email
  if (emailInput.value === '') {
    errores.push('El campo "Correo electrónico" es obligatorio.');
  } else if (!/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    errores.push('El formato del correo electrónico no es válido.');
  }

  // Validación del asunto
  if (asuntoInput.value === '') {
    errores.push('El campo "Asunto" es obligatorio.');
  }

  // Validación del mensaje
  if (mensajeInput.value === '') {
    errores.push('El campo "Mensaje" es obligatorio.');
  } else if (mensajeInput.value.length < 50) {
    errores.push('El mensaje debe tener al menos 50 caracteres.');
  }

  // Mostrar los errores al usuario
  if (errores.length > 0) {
    const erroresUl = document.createElement('ul');
    erroresUl.classList.add('errores');

    errores.forEach((error) => {
      const errorLi = document.createElement('li');
      errorLi.textContent = error;
      erroresUl.appendChild(errorLi);
    });

    formulario.insertBefore(erroresUl, enviarBtn);

    return; // Detiene la ejecución del código si hay errores
  }

  // Si no hay errores, envía el formulario
  alert('¡Formulario enviado correctamente!');
  formulario.submit();
});




