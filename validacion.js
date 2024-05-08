// Funcion para manipular texto en elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('#inicioDescripcion','Tengo 34 años, soy de Honduras, América Central, cuento con 8 años de experiencia trabajando en gestión empresarial, con formación en áreas como la innovación, propiedad intelectual y desarrollo de empresas, estudié Ingeniería en Ciencias de la Computación pero hasta el momento no he tenido la oportunidad de desempeñarme en áreas como la programación, así que me inscribí en el programa ALURA LATAM para adquirir conocimientos demandados en el entorno laboral de la actualidad y aplicar a puestos de trabajo en el área; el campo que elegí es el desarrollo web FRONT-END.');

//Validacion formulario
//Declaraciones
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');
const submitButton = document.getElementById('enviar');

// Detector de eventos para nombreInput
nombreInput.addEventListener('input', validarNombre);

// Detector de eventos para emailInput
emailInput.addEventListener('input', validarEmail);

// Detector de eventos para asuntoInput
asuntoInput.addEventListener('input', validarAsunto);

// Detector de eventos para mensajeInput
mensajeInput.addEventListener('input', validarMensaje);

// Habilitar el botón de envío por defecto
submitButton.disabled = true;

//Funciones de validacion
function validarNombre() {
    const nombre = nombreInput.value.trim(); // Elimina espacios en blanco
    if (nombre.length < 3) {
        nombreInput.classList.add('error');
        window.alert('Debes indicar un nombre.') ;
        submitButton.disabled = true;
    } else {
        nombreInput.classList.remove('error');
        if (validarEmail() && validarAsunto() && validarMensaje()) {
            submitButton.disabled = false;
        }
    }
}

function validarEmail() {
    const email = emailInput.value.trim();
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+)*\.[A-Za-z]{2,})$/;
    if (!regex.test(email)) {
        emailInput.classList.add('error');
        window.alert('No has indicado un patrón indicado para emails.') ;
        submitButton.disabled = true;
    } else {
        emailInput.classList.remove('error');
        if (validarNombre() && validarAsunto() && validarMensaje()) {
            submitButton.disabled = false;
        }
    }
}

function validarAsunto() {
    const asunto = asuntoInput.value.trim();
    if (asunto.length === 0) {
        asuntoInput.classList.add('error');
        window.alert('Debe añadir un asunto.') ;
        submitButton.disabled = true;
    } else {
        asuntoInput.classList.remove('error');
        if (validarNombre() && validarEmail() && validarMensaje()) {
            submitButton.disabled = false;
        }
    }
}

function validarMensaje() {
    const mensaje = mensajeInput.value.trim();
    if (mensaje.length < 50) {
        mensajeInput.classList.add('error');
        if (mensaje.length < 50) {
            window.alert('El mensaje debe tener al menos 50 caracteres.') ;
        } else {
            window.alert('El mensaje no debe estar compuesto solo por espacios.');
        }
        submitButton.disabled = true;
    } else {
        mensajeInput.classList.remove('error');
        submitButton.disabled = false; // Habilitar el botón de envío si todas las validaciones pasan
    }
}


