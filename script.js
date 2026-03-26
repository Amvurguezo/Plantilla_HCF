// --- FUNCIÓN DE NAVEGACIÓN CON ANIMACIÓN ---
        let currentSection = 'formulario';

        function showSection(sectionName) {
            if (currentSection === sectionName) return; // Ya estamos aquí

            const formSection = document.getElementById('section-formulario');
            const respSection = document.getElementById('section-respuestas');
            const btnForm = document.getElementById('btnFormulario');
            const btnResp = document.getElementById('btnRespuestas');

            // Determinar qué sección sale y cuál entra
            const sectionOut = (currentSection === 'formulario') ? formSection : respSection;
            const sectionIn = (sectionName === 'formulario') ? formSection : respSection;
            const btnActive = (sectionName === 'formulario') ? btnForm : btnResp;
            const btnInactive = (sectionName === 'formulario') ? btnResp : btnForm;

            // 1. Animación de salida de la sección actual
            sectionOut.classList.add('animating-out');

            // 2. Esperar a que termine la animación de salida (0.4s)
            setTimeout(() => {
                sectionOut.classList.add('hidden');
                sectionOut.classList.remove('animating-out');

                // 3. Preparar y mostrar la nueva sección (animación de entrada vía CSS fadeInSlideUp)
                sectionIn.classList.remove('hidden');
                
                // 4. Actualizar estado de los botones
                btnActive.classList.add('active');
                btnInactive.classList.remove('active');

                currentSection = sectionName;
            }, 400); // Mismo tiempo que fadeOutSlideDown en CSS
        }

        // --- FUNCIONES DE COPIADO (Tu código original unificado) ---
        function copyToClipboard(event) {
            if (event) event.preventDefault();

            const nombre = document.getElementById('nombre').value || '';
            const pc = document.getElementById('pc').value || '';
            const area = document.getElementById('area').value || '';
            const anexo = document.getElementById('anexo').value || '';
            const ubicacion = document.getElementById('ubicacion').value || '';
            const descripcion = document.getElementById('descripcion').value || '';

            const textToCopy = 
                `Nombre: ${nombre}\n` +
                `Área: ${area}\n` +
                `Anexo: ${anexo}\n` +
                `Ubicación: ${ubicacion}\n` +
                `ID PC: ${pc}\n` +
                `Descripción:\n\n${descripcion}`;

            executeCopy(textToCopy);
        }

        function copyToClipboardText(text) {
            executeCopy(text);
        }

        function executeCopy(text) {
            const tempElement = document.createElement('textarea');
            tempElement.value = text;
            document.body.appendChild(tempElement);
            tempElement.select();
            
            try {
                document.execCommand('copy');
                // Opcional: Mostrar una notificación sutil en lugar de un alert
                console.log('Copiado: ' + text.substring(0, 30) + '...');
            } catch (err) {
                console.error('Error al copiar', err);
            }
            
            document.body.removeChild(tempElement);
        }

        // --- ASIGNACIÓN DE EVENTOS (Tu código original) ---
        function asignarEvento(id, texto) {
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.onclick = () => copyToClipboardText(texto);
            }
        }

        asignarEvento('cambioContraseña1', 'Se realiza cambio de contraseña y se le indica al usuario, se valida el acceso.');
        asignarEvento('desbloqueoContraseña', 'Se realiza el desbloqueo de usuario y se le indica al usuario, se valida el acceso.');
        asignarEvento('revisarBloqueos', 'Se realiza revisión en base de datos y no se encuentran bloqueos, se procede con cierre de ticket.');
        asignarEvento('entregaInformacion', 'Código de Cierre: FATE\nSolución de ticket: Entrega de información\n\n');
        asignarEvento('extensionDennise', 'Buen día estimada,\n\nJunto con saludar solicitamos su autorización para extender vigencia de cuenta, adicional solicitamos por favor nos indique fecha de la misma.\n\n');
        asignarEvento('sistemModif', 'Buen día\n\nPor favor su apoyo con la modificación del sistema según el correo de arrastre.\n\n');
        asignarEvento('sistemIntegracion', 'Buen día\n\nPor favor su ayuda con la integración del paciente según el correo de arrastre.\n\n');
        asignarEvento('cambioPassCorreo', 'Buen día\n\nSe le informa que se realiza el cambio de contraseña para el correo de (Nombre usuario)\n\nCorreo: \nContraseña: \n\nPor favor, recuerde cambiar la contraseña en el próximo inicio de sesión para garantizar la seguridad de su cuenta\n\n');
        asignarEvento('extensionCorreo', 'Buen día\n\nSe le informa que se realiza la extensión de cuenta para el correo de (Nombre usuario)\n\nCorreo: \nContraseña: \n\nPor favor, recuerde cambiar la contraseña en el próximo inicio de sesión para garantizar la seguridad de su cuenta.\n\n');
        asignarEvento('powerBi', 'Buen día\n\nPor favor indicar el tipo de licencia que necesita en POWER BI, si es licencia PRO o licencia FREE...\n');
        asignarEvento('roaming', 'Estimado,\n\nPara poder continuar con su requerimiento es necesario que indique la siguiente información:\n\n- Número de la línea:\n- Fecha inicial:\n- Fecha final:\n\n');
        asignarEvento('googleDrive', 'Buen día\n\nJunto con saludar se le informa lo siguiente: Por políticas de Ciberseguridad...');
        asignarEvento('caServiceDesk', 'Buenas tardes\n\nPara poder continuar con su requerimiento es necesario la siguiente información...');
    








