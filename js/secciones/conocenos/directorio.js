// ===== SISTEMA DE DIRECTORIO INTERACTIVO =====
document.addEventListener('DOMContentLoaded', function() {
    // Datos del directorio (todas las personas)
    const directorioData = [
        {
            id: 1,
            nombre: "Mtro. Darvin Daniel González Baños",
            titulo: "Maestro",
            cargo: "Rector",
            categoria: "rectoria",
            imagen: "/assets/img/directorio/rector.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "rectoria@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Rectoría"
        },
        {
            id: 2,
            nombre: "Lic. Luis Samuel Sánchez Calcáneo",
            titulo: "Licenciado",
            cargo: "Encargado de Abogado General",
            categoria: "direccion",
            imagen: "/assets/img/directorio/abogado_General1.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "abogado@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Abogacía General"
        },
        {
            id: 3,
            nombre: "L.C.P. Ulivandro Rafael Hernández Vera",
            titulo: "Licenciado en Contaduría Pública",
            cargo: "Encargado de la Dirección de Administración y Finanzas",
            categoria: "direccion",
            imagen: "/assets/img/directorio/Ulivandro Rafael Hernández Vera.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "",
            horario: "8:00 a 16:00 hrs.",
            area: "Administración y Finanzas"
        },
        {
            id: 4,
            nombre: "Dr. José Juan Zuñiga Aguilar",
            titulo: "Doctor",
            cargo: "Encargado de la Dirección de la Académica de Biotecnología y Paramédico",
            categoria: "academico",
            imagen: "/assets/img/directorio/Dr.Jose.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "dir.paramedico.bio@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Académica - Biotecnología y Paramédico"
        },
        {
            id: 5,
            nombre: "Lic. Maria José Macossay Pujol",
            titulo: "Licenciada",
            cargo: "Encargada de la Dirección de la Académica de Turismo y Gastronomía",
            categoria: "academico",
            imagen: "/assets/img/directorio/TURISMO.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "turismo@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Académica - Turismo y Gastronomía"
        },
        {
            id: 6,
            nombre: "Mtra. Cinthia del Carmen Gurrión Oropeza",
            titulo: "Maestra",
            cargo: "Encargada de la Dirección de la Académica de Negocios, Contaduría y Tecnologías de la Información",
            categoria: "academico",
            imagen: "/assets/img/directorio/mtra-cinthia.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "comer.tic@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Académica - Negocios, Contaduría y TIC"
        },
        {
            id: 7,
            nombre: "Mtra. Claudia Landero Rodríguez",
            titulo: "Maestra",
            cargo: "Encargada de la Dirección del Área de Vinculación",
            categoria: "direccion",
            imagen: "/assets/img/directorio/mtra-claudia.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "planeacion.evaluacion@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Vinculación"
        },
        {
            id: 8,
            nombre: "M.M Enrique del Jesús Cabrera Farías",
            titulo: "Maestro en Matemáticas",
            cargo: "Encargado de la Subdirección de Planeación y Evaluación",
            categoria: "subdireccion",
            imagen: "/assets/img/directorio/mtro-enrique.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "comer.tic@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Planeación y Evaluación"
        },
        {
            id: 9,
            nombre: "M.A. Joyce Beatriz Castro Lárraga",
            titulo: "Maestra en Administración",
            cargo: "Encargada de la Jefatura del Departamento de Evaluación y Calidad Institucional",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/joyce-beatriz.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "turismo@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Evaluación y Calidad Institucional"
        },
        {
            id: 10,
            nombre: "Mtro. Eladio Escoffié González",
            titulo: "Maestro",
            cargo: "Encargado de la Jefatura de Seguimiento Institucional",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/mtro-eladio.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "",
            horario: "8:00 a 16:00 hrs.",
            area: "Seguimiento Institucional"
        },
        {
            id: 11,
            nombre: "Ing. Carlos Enrique Montaño Pérez",
            titulo: "Ingeniero",
            cargo: "Encargado de la Jefatura del Departamento de Recursos Materiales",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/Montaño.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "recursosmateriales@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Recursos Materiales"
        },
        {
            id: 12,
            nombre: "M.I.T.E. Julio César Méndez Cabrera",
            titulo: "Maestro en Ingeniería y Tecnología Educativa",
            cargo: "Encargado de la Jefatura del Departamento de Servicios Integrales de Vinculación",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/mtro-julio.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "sivinculacion@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Servicios Integrales de Vinculación"
        },
        {
            id: 13,
            nombre: "L.C.P y F. Rosa María Castro Lárraga",
            titulo: "Licenciada en Contaduría Pública y Finanzas",
            cargo: "Encargada de la Jefatura del Departamento de Servicios Escolares",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/lic-rosa.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "serv.escolares@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Servicios Escolares"
        },
        {
            id: 14,
            nombre: "Lic. Luz María Jiménez Jiménez",
            titulo: "Licenciada",
            cargo: "Encargada de la Jefatura del Departamento de Extensión Universitaria",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/lic-luz.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "ext.universitaria@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Extensión Universitaria"
        },
        {
            id: 15,
            nombre: "C.P. Marcos Antonio Arcos Jiménez",
            titulo: "Contador Público",
            cargo: "Encargado de la Jefatura del Departamento de Contabilidad",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/cont-marcos.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "ajmantony@hotmail.com",
            horario: "8:00 a 16:00 hrs.",
            area: "Contabilidad"
        },
        {
            id: 16,
            nombre: "Lic. Mariana Jesús Azcuaga Cabrera",
            titulo: "Licenciada",
            cargo: "Encargada de la Jefatura del Departamento de Recursos Humanos",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/lic-mariana.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "recursoshumanos@utusumacinta.edu.mx / utu-rh@hotmail.com",
            horario: "8:00 a 16:00 hrs.",
            area: "Recursos Humanos"
        },
        {
            id: 17,
            nombre: "L.C.P Lenin Atocha Jiménez Grajales",
            titulo: "Licenciado en Contaduría Pública",
            cargo: "Encargado de la Jefatura del Departamento de Programación y Presupuesto",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/lic-lenin.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "residente.calidad@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Programación y Presupuesto"
        },
        {
            id: 18,
            nombre: "Ing. Edwin Miguel David López Mendoza",
            titulo: "Ingeniero",
            cargo: "Encargado de la Jefatura del Departamento de Servicios Generales",
            categoria: "jefatura",
            imagen: "/assets/img/directorio/ing-edwin.webp",
            direccion: "Libramiento Glorieta Emiliano Zapata – Tenosique s/n Col. Las Lomas Emiliano Zapata, Tabasco. C.P. 86980",
            telefono: "934 343 56 90",
            email: "serv.generales@utusumacinta.edu.mx",
            horario: "8:00 a 16:00 hrs.",
            area: "Servicios Generales"
        }
    ];

    // Variables globales
    let currentFilter = 'todos';
    let currentSearch = '';
    let currentSort = 'nombre';
    let filteredData = [...directorioData];

    // Elementos del DOM
    const directorioGrid = document.getElementById('directorioGrid');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const sortSelect = document.getElementById('sortSelect');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const resetFilters = document.getElementById('resetFilters');

    // Inicializar directorio
    function initDirectorio() {
        renderDirectorio();
        setupEventListeners();
        setupModal();
    }

    // Renderizar tarjetas del directorio
    function renderDirectorio() {
        directorioGrid.innerHTML = '';
        
        if (filteredData.length === 0) {
            noResults.style.display = 'block';
            resultCount.textContent = '0 personas encontradas';
            return;
        }
        
        noResults.style.display = 'none';
        resultCount.textContent = `${filteredData.length} persona${filteredData.length !== 1 ? 's' : ''} encontrada${filteredData.length !== 1 ? 's' : ''}`;
        
        filteredData.forEach((persona, index) => {
            const card = createPersonaCard(persona, index);
            directorioGrid.appendChild(card);
        });
    }

    // Crear tarjeta de persona
    function createPersonaCard(persona, index) {
        const card = document.createElement('div');
        card.className = 'persona-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Determinar color de categoría
        const categoriaColors = {
            rectoria: 'primary',
            direccion: 'secondary',
            subdireccion: 'info',
            jefatura: 'success',
            academico: 'warning'
        };
        
        const categoriaText = {
            rectoria: 'Rectoría',
            direccion: 'Dirección',
            subdireccion: 'Subdirección',
            jefatura: 'Jefatura',
            academico: 'Académico'
        };
        
        card.innerHTML = `
            <div class="persona-header">
                ${persona.imagen ? 
                    `<img src="${persona.imagen}" alt="${persona.nombre}" class="persona-imagen">` :
                    `<div class="persona-imagen-placeholder">
                        <i class="fas fa-user-circle"></i>
                    </div>`
                }
                <span class="persona-categoria" style="color: var(--color-${categoriaColors[persona.categoria] || 'primary'});">
                    ${categoriaText[persona.categoria] || 'General'}
                </span>
            </div>
            <div class="persona-content">
                <h3 class="persona-nombre">${persona.nombre}</h3>
                <div class="persona-titulo">${persona.titulo}</div>
                <h4 class="persona-cargo">${persona.cargo}</h4>
                
                <div class="persona-info">
                    <div class="info-row">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${persona.direccion}</span>
                    </div>
                    <div class="info-row">
                        <i class="fas fa-phone"></i>
                        <span>${persona.telefono}</span>
                    </div>
                    ${persona.email ? `
                    <div class="info-row">
                        <i class="fas fa-envelope"></i>
                        <span>
                            <a href="mailto:${persona.email}" class="email-link">${persona.email}</a>
                        </span>
                    </div>` : ''}
                    <div class="info-row">
                        <i class="fas fa-clock"></i>
                        <span>${persona.horario}</span>
                    </div>
                </div>
                
                <div class="persona-actions">
                    ${persona.email ? `
                    <button class="action-btn contactar" data-id="${persona.id}">
                        <i class="fas fa-envelope"></i>
                        Contactar
                    </button>` : ''}
                    <button class="action-btn detalles" data-id="${persona.id}">
                        <i class="fas fa-info-circle"></i>
                        Ver Detalles
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }

    // Filtrar datos
    function filterData() {
        filteredData = directorioData.filter(persona => {
            // Filtro por categoría
            if (currentFilter !== 'todos' && persona.categoria !== currentFilter) {
                return false;
            }
            
            // Filtro por búsqueda
            if (currentSearch) {
                const searchTerm = currentSearch.toLowerCase();
                const searchableText = `
                    ${persona.nombre.toLowerCase()}
                    ${persona.titulo.toLowerCase()}
                    ${persona.cargo.toLowerCase()}
                    ${persona.area.toLowerCase()}
                    ${persona.email.toLowerCase()}
                `;
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
            
            return true;
        });
        
        // Ordenar datos
        sortData();
        
        // Renderizar
        renderDirectorio();
    }

    // Ordenar datos
    function sortData() {
        filteredData.sort((a, b) => {
            switch(currentSort) {
                case 'nombre':
                    return a.nombre.localeCompare(b.nombre);
                case 'cargo':
                    return a.cargo.localeCompare(b.cargo);
                case 'area':
                    return a.area.localeCompare(b.area);
                default:
                    return a.id - b.id;
            }
        });
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Búsqueda
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.trim().toLowerCase();
            
            // Mostrar/ocultar botón de limpiar
            if (currentSearch) {
                clearSearch.classList.add('visible');
            } else {
                clearSearch.classList.remove('visible');
            }
            
            filterData();
        });
        
        // Limpiar búsqueda
        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            currentSearch = '';
            clearSearch.classList.remove('visible');
            filterData();
        });
        
        // Filtros por categoría
        categoriaBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover clase active de todos
                categoriaBtns.forEach(b => b.classList.remove('active'));
                // Agregar clase active al clickeado
                this.classList.add('active');
                // Actualizar filtro
                currentFilter = this.dataset.categoria;
                filterData();
            });
        });
        
        // Ordenamiento
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            filterData();
        });
        
        // Resetear filtros
        resetFilters.addEventListener('click', function() {
            // Resetear búsqueda
            searchInput.value = '';
            currentSearch = '';
            clearSearch.classList.remove('visible');
            
            // Resetear categoría
            categoriaBtns.forEach(btn => btn.classList.remove('active'));
            categoriaBtns[0].classList.add('active');
            currentFilter = 'todos';
            
            // Resetear ordenamiento
            sortSelect.value = 'nombre';
            currentSort = 'nombre';
            
            // Aplicar filtros
            filterData();
        });
        
        // Contactar por email
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('contactar') || e.target.closest('.contactar')) {
                const btn = e.target.classList.contains('contactar') ? e.target : e.target.closest('.contactar');
                const personaId = parseInt(btn.dataset.id);
                const persona = directorioData.find(p => p.id === personaId);
                
                if (persona && persona.email) {
                    window.location.href = `mailto:${persona.email}`;
                }
            }
        });
    }

    // Configurar modal de detalles
    function setupModal() {
        // Crear modal
        const modalHTML = `
            <div class="modal-overlay" id="modalOverlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Detalles del Contacto</h3>
                        <button class="close-modal" id="closeModal">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- Contenido dinámico -->
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modalOverlay = document.getElementById('modalOverlay');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.getElementById('closeModal');
        
        // Abrir modal al hacer clic en "Ver Detalles"
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('detalles') || e.target.closest('.detalles')) {
                const btn = e.target.classList.contains('detalles') ? e.target : e.target.closest('.detalles');
                const personaId = parseInt(btn.dataset.id);
                const persona = directorioData.find(p => p.id === personaId);
                
                if (persona) {
                    showPersonaDetails(persona);
                    modalOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
        
        // Cerrar modal
        closeModal.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Cerrar con ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Mostrar detalles de persona en modal
    function showPersonaDetails(persona) {
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-info-grid">
                <div>
                    ${persona.imagen ? 
                        `<img src="${persona.imagen}" alt="${persona.nombre}" class="modal-imagen">` :
                        `<div class="modal-imagen-placeholder">
                            <i class="fas fa-user-circle"></i>
                        </div>`
                    }
                </div>
                <div class="modal-persona-info">
                    <h4>${persona.nombre}</h4>
                    <div class="titulo">${persona.titulo}</div>
                    <div class="cargo">${persona.cargo}</div>
                    <div class="area">${persona.area}</div>
                </div>
            </div>
            
            <div class="modal-detalles">
                <div class="detalle-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="detalle-contenido">
                        <h5>Dirección</h5>
                        <p>${persona.direccion}</p>
                    </div>
                </div>
                
                <div class="detalle-item">
                    <i class="fas fa-phone"></i>
                    <div class="detalle-contenido">
                        <h5>Teléfono</h5>
                        <p>${persona.telefono}</p>
                    </div>
                </div>
                
                ${persona.email ? `
                <div class="detalle-item">
                    <i class="fas fa-envelope"></i>
                    <div class="detalle-contenido">
                        <h5>Correo Electrónico</h5>
                        <p><a href="mailto:${persona.email}">${persona.email}</a></p>
                    </div>
                </div>` : ''}
                
                <div class="detalle-item">
                    <i class="fas fa-clock"></i>
                    <div class="detalle-contenido">
                        <h5>Horario de Atención</h5>
                        <p>${persona.horario}</p>
                    </div>
                </div>
            </div>
            
            ${persona.email ? `
            <div class="modal-actions">
                <a href="mailto:${persona.email}" class="btn btn-primary" style="flex: 1;">
                    <i class="fas fa-envelope"></i>
                    Enviar Correo
                </a>
                <a href="tel:${persona.telefono.replace(/\s/g, '')}" class="btn btn-secondary" style="flex: 1;">
                    <i class="fas fa-phone"></i>
                    Llamar
                </a>
            </div>` : ''}
        `;
    }

    // Inicializar
    initDirectorio();
    
    // Consola de depuración
    console.log('%c📞 Directorio UTU Cargado', 'color: #2c348f; font-weight: bold; font-size: 14px;');
    console.log('%c• 18 contactos cargados', 'color: #21b395;');
    console.log('%c• Sistema de filtros activado', 'color: #21b395;');
    console.log('%c• Búsqueda en tiempo real', 'color: #21b395;');
    console.log('%c• Modal de detalles', 'color: #21b395;');
});