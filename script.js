// --- MENÚ HERRAMIENTAS ---
        function toggleToolsMenu(event) {
            event.stopPropagation();
            const menu = document.getElementById('toolsMenu');
            const btn = event.currentTarget;
            const isOpen = menu.classList.toggle('open');
            btn.classList.toggle('active', isOpen);
            // Close any open submenu when main menu toggles
            if (!isOpen) closeAllSubmenus();
        }

        function toggleSubmenu(event, submenuId) {
            event.preventDefault();
            event.stopPropagation();
            const submenu = document.getElementById(submenuId);
            const parentLi = submenu.closest('.has-submenu');
            const isOpen = submenu.classList.toggle('open');
            parentLi.classList.toggle('submenu-open', isOpen);
        }

        function closeAllSubmenus() {
            document.querySelectorAll('.submenu.open').forEach(s => s.classList.remove('open'));
            document.querySelectorAll('.has-submenu.submenu-open').forEach(li => li.classList.remove('submenu-open'));
        }

        // Cerrar el menú al hacer clic fuera
        document.addEventListener('click', function () {
            const menu = document.getElementById('toolsMenu');
            const btn = document.querySelector('.nav-dropdown-btn');
            if (menu) menu.classList.remove('open');
            if (btn) btn.classList.remove('active');
            closeAllSubmenus();
        });

        function toolAction(tool) {
            // Asigna URLs a cada herramienta cuando estén disponibles
            const urls = {
                'busqueda-bodegas':    '',
                'kb-clinicas':         '',
                'kb-sonda':            '',
                'matriz-externos':     '',
                'solicitantes':        '',
                'productividad-sonda': '',
                'horarios':            ''
            };
            const url = urls[tool];
            if (url) {
                window.open(url, '_blank');
            } else {
                console.log('Herramienta seleccionada:', tool, '(sin URL asignada aún)');
            }
            document.getElementById('toolsMenu').classList.remove('open');
            document.querySelector('.nav-dropdown-btn').classList.remove('active');
            closeAllSubmenus();
        }

        function linkAction(link) {
            // Asigna URLs a cada link cuando estén disponibles
            const urls = {
                'correo':           '',
                'itsm':             '',
                'remoto':           '',
                'administrador':    '',
                'sisalud':          '',
                'logistico':        '',
                'privilegios':      '',
                'fin700':           '',
                'maestro-dotacion': '',
                'ptrg':             ''
            };
            const url = urls[link];
            if (url) {
                window.open(url, '_blank');
            } else {
                console.log('Link seleccionado:', link, '(sin URL asignada aún)');
            }
            document.getElementById('toolsMenu').classList.remove('open');
            document.querySelector('.nav-dropdown-btn').classList.remove('active');
            closeAllSubmenus();
        }

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
            const includeIdPc = document.getElementById('includeIdPc').checked;

            const textToCopy = 
                `Nombre: ${nombre}\n` +
                `Área: ${area}\n` +
                `Anexo: ${anexo}\n` +
                `Ubicación: ${ubicacion}\n` +
                (includeIdPc ? `ID PC: ${pc}\n` : '') +
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








