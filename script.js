function copyToClipboard(event) {
    // Prevenir el envío del formulario
    if (event) {
        event.preventDefault();
    }

    // Obtener los valores de los campos del formulario y manejar casos vacíos
    const nombre = document.getElementById('nombre').value || '';
    const pc = document.getElementById('pc').value || '';
    const area = document.getElementById('area').value || '';
    const anexo = document.getElementById('anexo').value || '';
    const ubicacion = document.getElementById('ubicacion').value || '';
    const descripcion = document.getElementById('descripcion').value || '';

    // Crear el texto a copiar, concatenando los valores de los campos
    const textToCopy = 
        `Nombre: ${nombre}\n` +
        `Área: ${area}\n` +
        `Anexo: ${anexo}\n` +
        `Ubicación: ${ubicacion}\n` +
        `ID PC: ${pc}\n` +   // Salto normal de linea
        `Descripción:\n\n${descripcion}`;

    // Crear un elemento temporal para copiar el texto
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();

    // Copiar el contenido al portapapeles
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);

    // Mensaje opcional en la consola
    console.log('Información copiada al portapapeles');

    // Retornar false para evitar el envío del formulario
    return false;
}

//Seccion Derecha

function copyToClipboardText(text) {
    // Crear un elemento de texto oculto
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        // Copiar el texto al portapapeles
        document.execCommand('copy');
    } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
    }

    // Eliminar el elemento de texto
    document.body.removeChild(textarea);
}

// Asignar eventos de clic a los botones
document.getElementById('cambioContraseña1').addEventListener('click', () => {
    copyToClipboardText('Se realiza cambio de contraseña y se le indica al usuario, se valida el acceso.');
});

document.getElementById('desbloqueoContraseña').addEventListener('click', () => {
    copyToClipboardText('Se realiza el desbloqueo de usuario y se le indica al usuario, se valida el acceso.');
});

document.getElementById('usuarioNuevo1').addEventListener('click', () => {
    copyToClipboardText('Se genera extensión de cuenta y se envian las credenciales de acceso al usuario');
});

document.getElementById('entregaInformacion').addEventListener('click', () => {
    copyToClipboardText('Código de Cierre: FATE\nSolución de ticket: Entrega de información\n\n');
});

document.getElementById('extensionDennise').addEventListener('click', () => {
copyToClipboardText('Buen día estimada,\n\nJunto con saludar solicitamos su autorización para extender vigencia de cuenta, adicional solicitamos por favor nos indique fecha de la misma.\n\n');
});

document.getElementById('sistemSergioModif').addEventListener('click', () => {
    copyToClipboardText('Buen día\n\nPor favor su apoyo con la modificación del sistema según el correo de arrastre.\n\n');
});

// Nuevos botones

document.getElementById('instalarAplicativo').addEventListener('click', () => {
    copyToClipboardText('Estimado,\n\nJunto con saludar, queremos informar que para dar gestión a su solicitud, es necesario indicar la siguiente información del software:\n\n*Nombre completo de software:\n*URL de descarga:\n*Versión del software a instalar:\n*Utilidad que se le dará al software:\n*Adjuntar aprobación de la jefatura:\n\n');
});

document.getElementById('formularioSap').addEventListener('click', () => {
    copyToClipboardText('Estimado,\n\nJunto con saludar, informo que por directriz de funcionales SAP, es necesario enviar el siguiente formulario completado en su totalidad para poder atender el requerimiento; en caso de no recibir respectivo formulario su ticket será anulado en un periodo de 3 días hábiles.\n\nGracias.\n\nDe ser temas de AUTORIZACIÓN enviar el SU53\n\n');
});

document.getElementById('accesoCarpeta').addEventListener('click', () => {
    copyToClipboardText('Estimado,\n\nJunto con saludar, con el fin de continuar con su solicitud por favor indicar la siguiente información:\n\n- Ruta: \\servidor\carpetas\subcarpeta\n- Tipo de permisos (Lectura o lectura y escritura) \n\nGracias.\n\n');
});

document.getElementById('powerBi').addEventListener('click', () => {
    copyToClipboardText('Buen día\n\nPor favor indicar el tipo de licencia que necesita en POWER BI, si es licencia PRO o licencia FREE.\n\n\n\n*En caso de ser Licencia PRO*\n\nSe le informa que para poder continuar con su solicitud es necesario que diligencie el formulario en el siguiente link:\n\nhttps://forms.gle/4vu5LP6Nm1Bt8RGWA \n\n\nUna vez realizado adjuntar el print que evidencie el formulario completado y enviado.\n\n');
});

document.getElementById('roaming').addEventListener('click', () => {
    copyToClipboardText('Estimado,\n\nPara poder continuar con su requerimiento es necesario que indique la siguiente información:\n\n- Número de la línea:\n- Fecha inicial:\n- Fecha final:\n\n');
});

document.getElementById('googleDrive').addEventListener('click', () => {
    copyToClipboardText('Buen día\n\nJunto con saludar se le informa lo siguiente:\n\nPor políticas de Ciberseguridad la versión escritorio de Google Drive se encuentra limitada para su uso por brechas de seguridad. Es por ello que para poder aprobar su uso, debe existir una licencia previa dentro de su área, en caso de que no exista es necesario la compra de una licencia de Backup la cual se debe asignar a otro usuario, esta tiene un costo de aprox 150$ NOTA: Si es la primera licencia del área se debe hacer una compra mínima de 2 licencias total aprox 300$. De estar de acuerdo se necesita la aprobación de su jefatura, los datos de las cuentas de usuario (Nombres y correos electrónicos) donde se asignará Google Drive, nombre y correo electrónico de la jefatura que aprueba, centro de costo (CeCo) donde se cargan las licencias, número de ticket de referencia.\n\nCuando este lo anteriormente indicado, en el ticket, el solicitante debe indicar\n\n1) Adjuntar aprobación de la jefatura de la persona que hace la solicitud a la MDA\n2) Correos de las personas que tendrán las cuentas (si su área ya cuenta con Google Drive de escritorio, indicar las cuentas que lo poseen).\n3) Cuenta de Correo de jefatura que aprueba.\n4) Número de ticket asociado.\n5) Indicar centro de Costo (CeCo), donde se realizarán los cargos.\n\n');
});

document.getElementById('caServiceDesk').addEventListener('click', () => {
    copyToClipboardText('Buenas tardes\n\nPara poder continuar con su requerimiento es necesario la siguiente información del usuario a crear:\n\n\n\nNombre completo:\nRut:\nCorreo electrónico:\nTipo de acceso: (Usuario Employee -Permite ver los tickets de la persona) (Usuario Analyst - con acceso a gestión de tickets)\n\n');
});



