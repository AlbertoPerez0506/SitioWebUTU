/**
 * SISTEMA DE PARAESCOLARES
 * Universidad Tecnológica del Usumacinta
 * Versión 1.0 - Implementado por Viernes (IA de Iron Man)
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cargar header y footer dinámicamente
    loadHeaderFooter();
    
    // Datos de las actividades paraescolares
    const actividadesData = [
        {
            id: 'banda-guerra',
            nombre: 'Banda de Guerra',
            icono: '🥁',
            categoria: 'cultura',
            descripcionCorta: 'Promueve la disciplina, trabajo en equipo y respeto a los símbolos patrios.',
            descripcionCompleta: 'La Banda de Guerra es una actividad paraescolar que promueve la disciplina, el trabajo en equipo y el respeto a los símbolos patrios. En la Universidad Tecnológica del Usumacinta, esta agrupación participa en ceremonias cívicas, actos conmemorativos y eventos institucionales, fomentando entre los estudiantes el sentido de pertenencia y los valores cívico-militares. Es una excelente oportunidad para desarrollar habilidades rítmicas, coordinación y compromiso social.',
            horarios: 'Martes y Jueves • 3:00 - 5:00 PM',
            lugar: 'Cancha Principal',
            instructor: 'Prof. Juan Martínez',
            logros: [
                'Participación en Ceremonias Cívicas Estatales',
                'Representación en Eventos Institucionales',
                'Formación de Valores Cívico-Militares'
            ],
            imagenes: ['banda de guerra.webp', 'banda2.jpg', 'banda3.jpg']
        },
        {
            id: 'musica',
            nombre: 'Música',
            icono: '🎵',
            categoria: 'musica',
            descripcionCorta: 'Desarrollo de creatividad y expresión artística mediante el arte sonoro.',
            descripcionCompleta: 'La actividad paraescolar de Música permite a los estudiantes desarrollar su creatividad, expresión artística y habilidades musicales. A través de ensayos y presentaciones, los participantes aprenden a interpretar distintos géneros, trabajar en conjunto y expresar emociones mediante el arte sonoro. Esta actividad contribuye al desarrollo integral del alumnado y refuerza su participación en eventos culturales y académicos dentro y fuera de la universidad.',
            horarios: 'Lunes y Miércoles • 4:00 - 6:00 PM',
            lugar: 'Aula de Música',
            instructor: 'Mtro. Carlos Rodríguez',
            logros: [
                'Presentaciones en Eventos Culturales',
                'Participación en Festivales Musicales',
                'Desarrollo de Habilidades de Interpretación'
            ],
            imagenes: ['musica.webp', 'musica2.jpg', 'musica3.jpg']
        },
        {
            id: 'pintura',
            nombre: 'Pintura',
            icono: '🎨',
            categoria: 'arte',
            descripcionCorta: 'Exploración de creatividad y sensibilidad artística a través del color y la forma.',
            descripcionCompleta: 'La actividad paraescolar de Pintura brinda a los estudiantes un espacio para explorar su creatividad y sensibilidad artística a través del uso del color, la forma y diversas técnicas plásticas. Mediante esta expresión visual, los participantes desarrollan habilidades manuales, concentración y apreciación estética, contribuyendo a su formación integral y participando en exposiciones y actividades culturales organizadas por la universidad.',
            horarios: 'Martes y Jueves • 2:00 - 4:00 PM',
            lugar: 'Taller de Artes',
            instructor: 'Lda. Ana Gómez',
            logros: [
                'Exposiciones Anuales de Arte',
                'Participación en Concursos de Pintura',
                'Muestras Culturales Institucionales'
            ],
            imagenes: ['pintura.jpg', 'pintura2.jpg', 'pintura3.jpg']
        },
        {
            id: 'serigrafia',
            nombre: 'Serigrafía',
            icono: '🖼️',
            categoria: 'arte',
            descripcionCorta: 'Aprendizaje de técnicas de impresión artística y comercial sobre diversas superficies.',
            descripcionCompleta: 'La actividad paraescolar de Serigrafía ofrece a los estudiantes la oportunidad de aprender una técnica artística y comercial de impresión sobre diversas superficies, como tela, papel o cartón. A través de esta actividad, los participantes desarrollan habilidades en diseño gráfico, manejo de herramientas y procesos creativos, fomentando la precisión, la creatividad y el emprendimiento. Esta experiencia también permite la elaboración de productos personalizados para eventos institucionales y culturales.',
            horarios: 'Lunes y Miércoles • 4:00 - 6:00 PM',
            lugar: 'Taller de Serigrafía',
            instructor: 'Ing. Roberto Sánchez',
            logros: [
                'Producción de Material Institucional',
                'Participación en Ferias de Emprendimiento',
                'Desarrollo de Habilidades Técnicas'
            ],
            imagenes: ['serigrafia.jpg', 'serigrafia2.jpg', 'serigrafia3.jpg']
        },
        {
            id: 'tamborileros',
            nombre: 'Tamborileros',
            icono: '🪘',
            categoria: 'cultura',
            descripcionCorta: 'Preservación de la música tradicional tabasqueña mediante tambor y flauta de carrizo.',
            descripcionCompleta: 'La actividad paraescolar de Tamborileros promueve el rescate y la preservación de la música tradicional tabasqueña mediante el aprendizaje y ejecución del tambor y la flauta de carrizo. Los estudiantes desarrollan habilidades rítmicas, coordinación y apreciación cultural, participando en eventos representativos de la identidad regional. Esta actividad fortalece el sentido de pertenencia y el orgullo por las raíces locales dentro de la comunidad universitaria.',
            horarios: 'Viernes • 4:00 - 6:00 PM',
            lugar: 'Patio Central',
            instructor: 'Mtro. Pedro Hernández',
            logros: [
                'Representación en Eventos Culturales',
                'Preservación de Tradiciones Locales',
                'Presentaciones en Festivales Regionales'
            ],
            imagenes: ['tamborileros.jpg', 'tamborileros2.jpg', 'tamborileros3.jpg']
        },
        {
            id: 'taekwondo',
            nombre: 'Taekwondo',
            icono: '🥋',
            categoria: 'deporte',
            descripcionCorta: 'Arte marcial coreano enfocado en desarrollo físico, mental y defensa personal.',
            descripcionCompleta: 'La actividad paraescolar de Taekwondo está enfocada en el desarrollo físico y mental de los estudiantes a través de la práctica de este arte marcial coreano. Fomenta la disciplina, el autocontrol, la concentración y el respeto, al mismo tiempo que mejora la condición física y la defensa personal. Los participantes tienen la oportunidad de representar a la universidad en competencias deportivas, promoviendo un estilo de vida saludable y valores formativos.',
            horarios: 'Lunes y Miércoles • 4:00 - 6:00 PM',
            lugar: 'Gimnasio Principal',
            instructor: 'Sensei Luis García',
            logros: [
                'Competencias Estatales de Taekwondo',
                'Medalleros en Torneos Interuniversitarios',
                'Exámenes de Grados y Cintas'
            ],
            imagenes: ['taekwondo.jpg', 'taekwondo2.jpg', 'taekwondo3.jpg']
        },
        {
            id: 'basquetbol',
            nombre: 'Básquetbol',
            icono: '🏀',
            categoria: 'deporte',
            descripcionCorta: 'Desarrollo de habilidades físicas, estratégicas y trabajo en equipo.',
            descripcionCompleta: 'La actividad paraescolar de Básquetbol permite a los estudiantes desarrollar habilidades físicas, estratégicas y de trabajo en equipo mediante la práctica constante de este deporte. Fomenta la disciplina, la coordinación motriz y el espíritu competitivo en un ambiente saludable y recreativo. Además, los equipos representativos participan en torneos internos y externos, fortaleciendo el sentido de identidad y orgullo universitario.',
            horarios: 'Martes y Jueves • 4:00 - 6:00 PM',
            lugar: 'Cancha Techada',
            instructor: 'Coach Miguel Torres',
            logros: [
                'Torneos Interuniversitarios',
                'Ligas Deportivas Locales',
                'Campeonatos Internos'
            ],
            imagenes: ['basquet.jpg', 'basquetbol2.jpg', 'basquetbol3.jpg']
        },
        {
            id: 'fitness',
            nombre: 'Fitness',
            icono: '💪',
            categoria: 'deporte',
            descripcionCorta: 'Mejora de condición física mediante rutinas funcionales, aeróbicos y de fuerza.',
            descripcionCompleta: 'La actividad paraescolar de Fitness está orientada a mejorar la condición física general de los estudiantes mediante rutinas de ejercicios funcionales, aeróbicos y de fuerza. Promueve un estilo de vida saludable, el bienestar mental y la autoimagen positiva. A través de sesiones dinámicas y motivadoras, los participantes desarrollan resistencia, coordinación y hábitos que contribuyen a su rendimiento académico y calidad de vida.',
            horarios: 'Lunes a Viernes • 4:00 - 6:00 AM',
            lugar: 'Gimnasio de Pesas',
            instructor: 'Instr. Sofía Ramírez',
            logros: [
                'Programas de Acondicionamiento Personal',
                'Retos de Fitness Semanales',
                'Evaluaciones de Progreso Físico'
            ],
            imagenes: ['fitnes.jpg', 'fitness2.jpg', 'fitness3.jpg']
        },
        {
            id: 'futbol-femenil',
            nombre: 'Fútbol 7 Femenil',
            icono: '⚽',
            categoria: 'deporte',
            descripcionCorta: 'Equipo femenil que promueve inclusión, trabajo en equipo y espíritu competitivo.',
            descripcionCompleta: 'La actividad paraescolar de Fútbol 7 ofrece a las estudiantes la oportunidad de integrarse al equipo femenil. El equipo participa en entrenamientos y competiciones, promoviendo la inclusión, el trabajo en equipo y el espíritu competitivo. Este deporte fomenta el desarrollo físico, la coordinación y el pensamiento estratégico. El equipo representativo de la universidad compite en torneos internos y externos, fortaleciendo la identidad universitaria y el sentido de pertenencia.',
            horarios: 'Martes y Jueves • 4:00 - 6:00 PM',
            lugar: 'Campo de Fútbol 7',
            instructor: 'Coach Patricia López',
            logros: [
                'Torneos Femeniles Interuniversitarios',
                'Participación en Ligas Locales',
                'Desarrollo de Liderazgo Femenino'
            ],
            imagenes: ['futbol-femenil1.jpg', 'futbol-femenil2.jpg', 'futbol-femenil3.jpg']
        },
        {
            id: 'futbol-varonil',
            nombre: 'Fútbol 7 Varonil',
            icono: '⚽',
            categoria: 'deporte',
            descripcionCorta: 'Equipo varonil que desarrolla habilidades físicas, coordinación y pensamiento estratégico.',
            descripcionCompleta: 'La actividad paraescolar de Fútbol 7 ofrece a los estudiantes la oportunidad de integrarse al equipo varonil. El equipo participa en entrenamientos y competiciones, promoviendo la inclusión, el trabajo en equipo y el espíritu competitivo. Este deporte fomenta el desarrollo físico, la coordinación y el pensamiento estratégico. El equipo representativo de la universidad compite en torneos internos y externos, fortaleciendo la identidad universitaria y el sentido de pertenencia.',
            horarios: 'Lunes y Miércoles • 4:00 - 6:00 PM',
            lugar: 'Campo de Fútbol 7',
            instructor: 'Coach Javier Ruiz',
            logros: [
                'Campeonatos Interuniversitarios',
                'Participación en Torneos Regionales',
                'Desarrollo de Habilidades Deportivas'
            ],
            imagenes: ['futbol-varonil1.jpg', 'futbol-varonil2.jpg', 'futbol-varonil3.jpg']
        },
        {
            id: 'voleibol',
            nombre: 'Voleibol',
            icono: '🏐',
            categoria: 'deporte',
            descripcionCorta: 'Desarrollo de habilidades físicas, trabajo en equipo y estrategias dinámicas.',
            descripcionCompleta: 'La actividad paraescolar de Voleibol ofrece a los estudiantes la oportunidad de desarrollar habilidades físicas, trabajo en equipo y estrategias dentro de este deporte dinámico. A través de entrenamientos regulares y competencias, los participantes mejoran su coordinación, resistencia y capacidad de comunicación en equipo. Los equipos de voleibol representan a la universidad en torneos internos y externos, fomentando el espíritu competitivo, la disciplina y el sentido de pertenencia.',
            horarios: 'Martes y Jueves • 4:00 - 6:00 PM',
            lugar: 'Cancha de Voleibol',
            instructor: 'Coach Laura Méndez',
            logros: [
                'Torneos Interuniversitarios',
                'Campeonatos Internos por Equipos',
                'Clínicas de Voleibol'
            ],
            imagenes: ['voleibol1.jpg', 'voleibol2.jpg', 'voleibol3.jpg']
        },
        {
            id: 'danza-folklorica',
            nombre: 'Danza Folklórica',
            icono: '💃',
            categoria: 'cultura',
            descripcionCorta: 'Exploración y representación de las tradiciones culturales de México a través del baile.',
            descripcionCompleta: 'La actividad paraescolar de Danza Folklórica permite a los estudiantes explorar y representar las tradiciones culturales de México a través del baile. Esta disciplina fomenta el desarrollo de la expresión corporal, el trabajo en equipo y el aprecio por la riqueza cultural del país. Los participantes aprenden danzas típicas de diversas regiones de México, y a través de presentaciones y eventos, contribuyen a preservar y difundir las costumbres y tradiciones nacionales, fortaleciendo su identidad y vínculo con la cultura.',
            horarios: 'Viernes • 4:00 - 6:00 PM',
            lugar: 'Salón de Danza',
            instructor: 'Mtra. Isabel Fernández',
            logros: [
                'Presentaciones en Festivales Culturales',
                'Representación en Eventos Estatales',
                'Preservación del Patrimonio Cultural'
            ],
            imagenes: ['danza1.jpg', 'danza2.jpg', 'danza3.jpg']
        }
    ];

    // Estado de la aplicación
    const state = {
        actividadActiva: null,
        galeriaActiva: null,
        imagenActual: 0
    };

    

    // Inicializar la aplicación
    initParaescolares();

    // ===== FUNCIONES PRINCIPALES =====
    
    function initParaescolares() {
        renderizarActividades();
        inicializarEventListeners();
        inicializarScrollReveal();
        inicializarHeroScroll();
    }

    

    function renderizarActividades() {
        const container = document.getElementById('actividadesContainer');
        if (!container) return;

        container.innerHTML = actividadesData.map((actividad, index) => {
            const categoriaClase = getCategoriaClass(actividad.categoria);
            
            return `
                <div class="paraescolar-card paraescolar-reveal" data-id="${actividad.id}">
                    <div class="card-icon ${actividad.categoria}">
                        ${actividad.icono}
                    </div>
                    
                    <div class="card-image">
                        <img src="/assets/img/paraescolar/${actividad.imagenes[0]}" 
                             alt="${actividad.nombre}" 
                             loading="lazy"
                             onerror="this.src='/assets/img/paraescolar/'">
                        <div class="card-image-overlay"></div>
                    </div>
                    
                    <div class="card-content">
                        <div class="card-header">
                            <span class="card-category ${actividad.categoria}">
                                ${getCategoriaTexto(actividad.categoria)}
                            </span>
                            <h3 class="card-title">
                                ${actividad.icono} ${actividad.nombre}
                            </h3>
                        </div>
                        
                        <p class="card-description">
                            ${actividad.descripcionCorta}
                        </p>
                        
                        <div class="card-footer">
                            <div class="card-info">
                                <span class="card-info-item">
                                    <i class="far fa-clock"></i>
                                    ${actividad.horarios.split('•')[0]}
                                </span>
                                <span class="card-info-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${actividad.lugar}
                                </span>
                            </div>
                            
                            <button class="card-button ver-detalles" data-id="${actividad.id}">
                                Ver Detalles
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function inicializarEventListeners() {
        // Botones de ver detalles
        document.addEventListener('click', function(e) {
            if (e.target.closest('.ver-detalles')) {
                const button = e.target.closest('.ver-detalles');
                const actividadId = button.dataset.id;
                mostrarDetallesActividad(actividadId);
            }
            
            // Cerrar detalles
            if (e.target.closest('.detalles-close') || e.target.classList.contains('paraescolar-detalles')) {
                cerrarDetalles();
            }
            
            // Galería en miniaturas
            if (e.target.closest('.gallery-item')) {
                const item = e.target.closest('.gallery-item');
                const actividadId = state.actividadActiva;
                const index = parseInt(item.dataset.index);
                abrirGaleria(actividadId, index);
            }
            
            // Cerrar modal
            if (e.target.closest('.modal-close') || e.target.classList.contains('modal-overlay')) {
                cerrarGaleria();
            }
            
            // Navegación de galería
            if (e.target.closest('.gallery-prev')) {
                navegarGaleria(-1);
            }
            
            if (e.target.closest('.gallery-next')) {
                navegarGaleria(1);
            }
            
            // Thumbnails del modal
            if (e.target.closest('.thumbnail')) {
                const thumbnail = e.target.closest('.thumbnail');
                const index = parseInt(thumbnail.dataset.index);
                cambiarImagenModal(index);
            }
        });
        
        // Cerrar con Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                cerrarDetalles();
                cerrarGaleria();
            }
        });
    }

    function mostrarDetallesActividad(actividadId) {
        const actividad = actividadesData.find(a => a.id === actividadId);
        if (!actividad) return;
        
        state.actividadActiva = actividadId;
        
        // Crear modal de detalles
        const detallesHTML = `
            <div class="paraescolar-detalles active">
                <div class="detalles-container">
                    <div class="detalles-header">
                        <div class="detalles-title-container">
                            <div class="detalles-icon">
                                ${actividad.icono}
                            </div>
                            <div class="detalles-title">
                                <h3>${actividad.nombre}</h3>
                                <span class="detalles-category">
                                    ${getCategoriaTexto(actividad.categoria)}
                                </span>
                            </div>
                        </div>
                        <button class="detalles-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="detalles-content">
                        <div class="detalles-left">
                            <div class="detalles-description">
                                <h4><i class="fas fa-book-open"></i> Descripción</h4>
                                <p>${actividad.descripcionCompleta}</p>
                            </div>
                            
                            <div class="detalles-gallery">
                                <h4 class="gallery-header">
                                    <i class="fas fa-images"></i> Galería
                                </h4>
                                <div class="gallery-grid">
                                    ${actividad.imagenes.map((img, index) => `
                                        <div class="gallery-item" data-index="${index}">
                                            <img src="/assets/img/paraescolar/${img}" 
                                                 alt="${actividad.nombre} - Imagen ${index + 1}"
                                                 loading="lazy"
                                                 onerror="this.src='/assets/img/paraescolar/'">
                                            <div class="gallery-overlay">
                                                <i class="fas fa-search-plus"></i>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="detalles-right">
                            <div class="detalles-info">
                                <h4><i class="fas fa-info-circle"></i> Información Práctica</h4>
                                
                                <div class="info-grid">
                                    <div class="info-item">
                                        <div class="info-icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div class="info-content">
                                            <h5>Horarios</h5>
                                            <p>${actividad.horarios}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="info-item">
                                        <div class="info-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="info-content">
                                            <h5>Lugar</h5>
                                            <p>${actividad.lugar}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="info-item">
                                        <div class="info-icon">
                                            <i class="fas fa-user-tie"></i>
                                        </div>
                                        <div class="info-content">
                                            <h5>Instructor</h5>
                                            <p>${actividad.instructor}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="detalles-logros">
                                        <h4><i class="fas fa-trophy"></i> Logros y Participaciones</h4>
                                        <div class="logros-grid">
                                            ${actividad.logros.map(logro => `
                                                <div class="logro-badge">
                                                    <i class="fas fa-award"></i>
                                                    <p>${logro}</p>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insertar en el body
        document.body.insertAdjacentHTML('beforeend', detallesHTML);
        document.body.style.overflow = 'hidden';
    }

    function cerrarDetalles() {
        const detalles = document.querySelector('.paraescolar-detalles');
        if (detalles) {
            detalles.classList.remove('active');
            setTimeout(() => detalles.remove(), 400);
            document.body.style.overflow = '';
            state.actividadActiva = null;
        }
    }

    function abrirGaleria(actividadId, startIndex = 0) {
        const actividad = actividadesData.find(a => a.id === actividadId);
        if (!actividad) return;
        
        state.galeriaActiva = actividadId;
        state.imagenActual = startIndex;
        
        const modalHTML = `
            <div class="paraescolar-modal active">
                <div class="modal-overlay"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <h3>${actividad.nombre} - Galería</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="modal-gallery">
                            <div class="gallery-main">
                                <img id="modalMainImage" 
                                     src="/assets/img/paraescolar/${actividad.imagenes[startIndex]}" 
                                     alt="${actividad.nombre} - Imagen ${startIndex + 1}">
                                <div class="image-counter">
                                    <span id="currentImage">${startIndex + 1}</span> / 
                                    <span id="totalImages">${actividad.imagenes.length}</span>
                                </div>
                            </div>
                            
                            <div class="gallery-controls">
                                <button class="gallery-prev">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                
                                <div class="gallery-thumbnails" id="thumbnailContainer">
                                    ${actividad.imagenes.map((img, index) => `
                                        <div class="thumbnail ${index === startIndex ? 'active' : ''}" 
                                             data-index="${index}">
                                            <img src="/assets/img/paraescolar/${img}" 
                                                 alt="Miniatura ${index + 1}"
                                                 loading="lazy">
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <button class="gallery-next">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="modal-info">
                            <div class="modal-desc">
                                <p><strong>Descripción:</strong> ${actividad.descripcionCorta}</p>
                            </div>
                            
                            <div class="modal-details">
                                <h4><i class="fas fa-info-circle"></i> Información de la Actividad</h4>
                                <div class="details-grid">
                                    <div class="detail-item">
                                        <div class="detail-icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div class="detail-content">
                                            <h5>Horarios</h5>
                                            <p>${actividad.horarios}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="detail-item">
                                        <div class="detail-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="detail-content">
                                            <h5>Lugar</h5>
                                            <p>${actividad.lugar}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="detail-item">
                                        <div class="detail-icon">
                                            <i class="fas fa-user-tie"></i>
                                        </div>
                                        <div class="detail-content">
                                            <h5>Instructor</h5>
                                            <p>${actividad.instructor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insertar en el body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    function cerrarGaleria() {
        const modal = document.querySelector('.paraescolar-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
            document.body.style.overflow = '';
            state.galeriaActiva = null;
        }
    }

    function navegarGaleria(direction) {
        const actividad = actividadesData.find(a => a.id === state.galeriaActiva);
        if (!actividad) return;
        
        const totalImagenes = actividad.imagenes.length;
        let newIndex = state.imagenActual + direction;
        
        // Circular navigation
        if (newIndex < 0) newIndex = totalImagenes - 1;
        if (newIndex >= totalImagenes) newIndex = 0;
        
        cambiarImagenModal(newIndex);
    }

    function cambiarImagenModal(index) {
        const actividad = actividadesData.find(a => a.id === state.galeriaActiva);
        if (!actividad || index < 0 || index >= actividad.imagenes.length) return;
        
        state.imagenActual = index;
        
        // Actualizar imagen principal
        const mainImg = document.getElementById('modalMainImage');
        const currentSpan = document.getElementById('currentImage');
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        if (mainImg) {
            mainImg.src = `/assets/img/paraescolar/${actividad.imagenes[index]}`;
            mainImg.alt = `${actividad.nombre} - Imagen ${index + 1}`;
        }
        
        if (currentSpan) {
            currentSpan.textContent = index + 1;
        }
        
        // Actualizar thumbnails activos
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    function inicializarScrollReveal() {
        const revealElements = document.querySelectorAll('.paraescolar-reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    }

    function inicializarHeroScroll() {
        const scrollIndicator = document.querySelector('.paraescolar-scroll-indicator');
        if (!scrollIndicator) return;
        
        scrollIndicator.addEventListener('click', function() {
            const introSection = document.querySelector('.paraescolar-intro-section');
            if (introSection) {
                introSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ===== FUNCIONES AUXILIARES =====
    
    function getCategoriaClass(categoria) {
        switch(categoria) {
            case 'deporte': return 'deporte';
            case 'arte': return 'arte';
            case 'cultura': return 'cultura';
            case 'musica': return 'musica';
            default: return 'deporte';
        }
    }
    
    function getCategoriaTexto(categoria) {
        switch(categoria) {
            case 'deporte': return 'Deporte';
            case 'arte': return 'Arte';
            case 'cultura': return 'Cultura';
            case 'musica': return 'Música';
            default: return 'Actividad';
        }
    }
    
    function loadHeaderFooter() {
        // Cargar header
        fetch('../../includes/header.html')
            .then(response => response.text())
            .then(data => {
                const headerContainer = document.getElementById('header-container');
                if (headerContainer) headerContainer.innerHTML = data;
                
                // Actualizar navegación activa
                setTimeout(() => {
                    const currentPage = window.location.pathname.split('/').pop();
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === currentPage) {
                            link.classList.add('active');
                        }
                    });
                }, 100);
            })
            .catch(error => console.error('Error cargando header:', error));
        
        // Cargar footer
        fetch('../../includes/footer.html')
            .then(response => response.text())
            .then(data => {
                const footerContainer = document.getElementById('footer-container');
                if (footerContainer) footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error cargando footer:', error));
    }
    
    // Preload de imágenes importantes
    function preloadImportantImages() {
        const importantImages = [
            '/assets/img/paraescolares/paraescolar-banner.webp'
        ];
        
        importantImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Lazy loading mejorado
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    // Inicializaciones adicionales
    setTimeout(() => {
        preloadImportantImages();
        initLazyLoading();
    }, 1000);
    
    // Log de inicialización (solo en desarrollo)
    console.log('✅ Sistema de Paraescolares cargado correctamente');
    console.log('🎯 Actividades disponibles:', actividadesData.length);
});

// Polyfill para navegadores antiguos
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}