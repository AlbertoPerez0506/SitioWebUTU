// ===== JAVASCRIPT ESPECÍFICO PARA EL INDEX =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== INICIALIZACIÓN =====
    console.log('Index UT Usumacinta cargado - Versión corregida');
    
    // ===== CONTADORES ANIMADOS =====
    function initCounters() {
        const counters = document.querySelectorAll('.index-stat-number');
        if (!counters.length) return;
        
        const speed = 200; // Velocidad en milisegundos
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            if (!target) return;
            
            // Inicializar con 0
            counter.innerText = '0';
            
            const updateCounter = () => {
                const current = +counter.innerText;
                const increment = target / 100;
                
                if (current < target) {
                    // Aumentar más rápido al principio, más lento al final
                    const progress = current / target;
                    const dynamicIncrement = increment * (1 - progress * 0.5);
                    
                    counter.innerText = Math.ceil(current + dynamicIncrement);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Iniciar cuando el elemento es visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(updateCounter, 300); // Pequeño delay para efecto
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // ===== DATOS DE CARRERAS (SIMULACIÓN DE BASE DE DATOS) =====
    const carrerasData = [
        {
            id: 1,
            title: "Ing. en Biotecnología",
            description: "Formación en técnicas biotecnológicas para investigación, desarrollo y aplicación en salud, agricultura y medio ambiente.",
            category: "ingenieria",
            badges: ["TSU", "ING"],
            icon: "fas fa-dna",
            area: "Área de la Salud",
            duration: "3 años 4 meses",
            empleabilidad: "95%",
            image: "assets/img/carreras/biotecnologia.webp",
            link: "/views/oferta_educativa/biotecnologia.html"
        },
        {
            id: 2,
            title: "Ing. en Tecnologías de la Información",
            description: "Desarrollo de software, redes, ciberseguridad y negocios digitales para la transformación tecnológica de empresas.",
            category: "ingenieria",
            badges: ["TSU", "ING"],
            icon: "fas fa-laptop-code",
            area: "Tecnología",
            duration: "3 años 4 meses",
            empleabilidad: "95%",
            image: "assets/img/carreras/ti.webp",
            link: "/views/oferta_educativa/ti.html"
        },
        {
            id: 3,
            title: "Lic. en Protección Civil",
            description: "Formación en prevención, atención de emergencias y gestión integral de riesgos para la seguridad ciudadana.",
            category: "licenciatura",
            badges: ["TSU", "LIC"],
            icon: "fas fa-ambulance",
            area: "Salud y Emergencias",
            duration: "3 años 4 meses",
            sector: "Sector salud",
            image: "assets/img/carreras/paramedico.webp",
            link: "/views/oferta_educativa/proteccioncivil.html"
        },
        {
            id: 4,
            title: "Lic. en Negocios y Mercadotecnia",
            description: "Estrategias comerciales, marketing digital y gestión empresarial para el crecimiento organizacional.",
            category: "licenciatura",
            badges: ["TSU", "LIC"],
            icon: "fas fa-chart-line",
            area: "Negocios",
            duration: "3 años 4 meses",
            caracteristica: "Emprendimiento",
            image: "assets/img/carreras/marketing.webp",
            link: "/views/oferta_educativa/negocios.html"
        },
        {
            id: 5,
            title: "Lic. en Gastronomía",
            description: "Técnicas culinarias innovadoras, gestión de restaurantes y creatividad en alta cocina.",
            category: "licenciatura",
            badges: ["TSU", "LIC"],
            icon: "fas fa-utensils",
            area: "Arte Culinario",
            duration: "3 años 4 meses",
            sector: "Industria turística",
            image: "assets/img/carreras/gastronomia.webp",
            link: "/views/oferta_educativa/gastronomia.html"
        },
        {
            id: 6,
            title: "Lic. en Contaduría",
            description: "Gestión financiera, auditoría y fiscalidad para las exigencias del mundo empresarial actual.",
            category: "licenciatura",
            badges: ["TSU", "LIC"],
            icon: "fas fa-calculator",
            area: "Finanzas",
            duration: "3 años 4 meses",
            caracteristica: "Todas las empresas",
            image: "assets/img/carreras/contaduria.webp",
            link: "/views/oferta_educativa/contaduria.html"
        },
        {
            id: 7,
            title: "Lic. en Gestión Turística",
            description: "Gestión de empresas turísticas, diseño de experiencias y desarrollo sostenible del sector turístico.",
            category: "licenciatura",
            badges: ["TSU", "LIC"],
            icon: "fas fa-plane-departure",
            area: "Turismo",
            duration: "3 años 4 meses",
            sector: "Sector servicios",
            image: "assets/img/carreras/turismo.webp",
            link: "/views/oferta_educativa/turismo.html"
        }
    ];
    
    // ===== DATOS DE NOTICIAS =====
    const noticiasData = [
        {
            id: 1,
            title: "Firma de Convenio SETAB-CECYTET",
            description: "Ceremonia de firma de convenio de colaboración estratégica entre SETAB y CECYTET para fortalecer la educación tecnológica en Tabasco.",
            category: "convenios",
            date: "23 Abr 2025",
            image: "assets/img/noticias/01.webp",
            tags: ["Académico", "Colaboración", "Educación"],
            destacado: true,
            link: "https://www.facebook.com/share/p/15jLQbh3cy/",
            icon: "fas fa-handshake"
        },
        {
            id: 2,
            title: "Colaboración con INEA",
            description: "Firma de convenios de colaboración con el Instituto Nacional para la Educación de los Adultos y el Gobierno del Estado.",
            category: "convenios",
            date: "23 Abr 2025",
            image: "assets/img/noticias/02.webp",
            tags: ["Educación", "Convenio", "Gobierno"],
            link: "https://www.facebook.com/share/p/15zUXU2EmU/",
            icon: "fas fa-chalkboard-teacher"
        },
        {
            id: 3,
            title: "Taller de Productividad Laboral",
            description: "Sesión práctica para desarrollar habilidades de productividad y eficiencia en el entorno laboral profesional moderno.",
            category: "eventos",
            date: "23 Abr 2025",
            image: "assets/img/noticias/03.webp",
            tags: ["Desarrollo", "Habilidades", "Profesional"],
            link: "https://www.facebook.com/share/p/1ChzGbueF5/",
            icon: "fas fa-tools"
        },
        {
            id: 4,
            title: "Participación en Mesa de Trabajo",
            description: "Contribución activa en la elaboración, validación y suscripción de convenios estratégicos para el desarrollo institucional.",
            category: "eventos",
            date: "11 Abr 2025",
            image: "assets/img/noticias/04.webp",
            tags: ["Estrategia", "Colaboración", "Desarrollo"],
            link: "https://facebook.com/utechusumacinta/posts/talleremprendimiento",
            icon: "fas fa-briefcase"
        },
        {
            id: 5,
            title: "Plática: 'Salud Física y Salud Mental'",
            description: "Charla especializada sobre el equilibrio entre salud física y mental para el bienestar integral de la comunidad universitaria.",
            category: "eventos",
            date: "11 Abr 2025",
            image: "assets/img/noticias/05.webp",
            tags: ["Salud", "Bienestar", "Comunidad"],
            link: "https://facebook.com/utechusumacinta/posts/premioinvestigacion",
            icon: "fas fa-heartbeat"
        },
        {
            id: 6,
            title: "Festival Cultural de Primavera",
            description: "Celebración artística y cultural que promueve la expresión creativa y el talento de nuestros estudiantes y comunidad.",
            category: "cultural",
            date: "11 Abr 2025",
            image: "assets/img/noticias/06.webp",
            tags: ["Cultura", "Arte", "Comunidad"],
            nuevo: true,
            link: "https://www.facebook.com/share/p/1EK5uB67Gf/",
            icon: "fas fa-theater-masks"
        }
    ];
    
    // ===== DATOS DE GALERÍA =====
    const galeriaData = [
        { 
            image: "assets/img/galeria/01.webp", 
            caption: "Ceremonia de graduación 2024",
            fallback: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        { 
            image: "assets/img/galeria/02.webp", 
            caption: "Laboratorios de tecnología",
            fallback: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-4.0.3&auto=format&fit=crop&w-600&q=80"
        },
        { 
            image: "assets/img/galeria/03.webp", 
            caption: "Actividad deportiva",
            fallback: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        { 
            image: "assets/img/galeria/04.webp", 
            caption: "Feria de ciencias",
            fallback: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        { 
            image: "assets/img/galeria/05.webp", 
            caption: "Visita empresarial",
            fallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        { 
            image: "assets/img/galeria/06.webp", 
            caption: "Evento cultural",
            fallback: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];
    
    // ===== DATOS DE SITIOS DE INTERÉS =====
    const sitiosData = [
        { 
            title: "Sistema de Gestión de Calidad", 
            desc: "Acceso al sistema de calidad institucional",
            icon: "fas fa-chart-bar",
            link: "https://www.utusumacinta.edu.mx/sgc.html"
        },
        { 
            title: "Portal de Acceso", 
            desc: "Inicio de sesión a sistemas universitarios",
            icon: "fas fa-sign-in-alt",
            link: "https://www.utusumacinta.edu.mx/login.html"
        },
        { 
            title: "Sistema Integral Académico", 
            desc: "Plataforma académica y administrativa",
            icon: "fas fa-graduation-cap",
            link: "https://www.utusumacinta.edu.mx/sia.html"
        },
        { 
            title: "Informes Institucionales", 
            desc: "Reportes y documentación oficial",
            icon: "fas fa-file-alt",
            link: "https://www.utusumacinta.edu.mx/informes.html"
        },
        { 
            title: "Informes Cuatrimestrales", 
            desc: "Reportes académicos por periodo",
            icon: "fas fa-calendar-alt",
            link: "https://www.utusumacinta.edu.mx/informe-cuatrimestral.html"
        },
        { 
            title: "Plan Institucional", 
            desc: "PIPC - Planificación estratégica",
            icon: "fas fa-map",
            link: "https://www.utusumacinta.edu.mx/archivos/PIPC%20-%20UTU%202021.pdf"
        },
        { 
            title: "Patrimonio Universitario", 
            desc: "Gestión de bienes institucionales",
            icon: "fas fa-landmark",
            link: "https://www.utusumacinta.edu.mx/patrimonio.html"
        },
        { 
            title: "Sistema SEVAC", 
            desc: "Validación de estudios",
            icon: "fas fa-exchange-alt",
            link: "https://www.utusumacinta.edu.mx/sevac.html"
        },
        { 
            title: "Estrados", 
            desc: "Publicaciones oficiales",
            icon: "fas fa-gavel",
            link: "https://www.utusumacinta.edu.mx/estrados.html"
        },
        { 
            title: "Bolsa de Trabajo", 
            desc: "Oportunidades laborales",
            icon: "fas fa-briefcase",
            link: "https://www.utusumacinta.edu.mx/bolsa-de-trabajo.html"
        },
        { 
            title: "Radio Universitaria", 
            desc: "Medio de comunicación institucional",
            icon: "fas fa-radio",
            link: "https://www.utusumacinta.edu.mx/radio/index.html"
        },
        { 
            title: "Servicio Nacional de Empleo", 
            desc: "Portal oficial de empleo",
            icon: "fas fa-user-tie",
            link: "https://www.empleo.gob.mx/SNE"
        },
        { 
            title: "Catálogo Académico", 
            desc: "Oferta educativa y programas",
            icon: "fas fa-book",
            link: "https://www.utusumacinta.edu.mx/archivos/catalogo19.pdf"
        },
        { 
            title: "Calendarios Académicos", 
            desc: "Fechas importantes y periodos",
            icon: "fas fa-calendar",
            link: "https://www.utusumacinta.edu.mx/calendarios.html"
        },
        { 
            title: "Contraloría Social", 
            desc: "Transparencia y rendición de cuentas",
            icon: "fas fa-eye",
            link: "https://www.utusumacinta.edu.mx/contralorias.html"
        }
    ];
    
    // ===== FUNCIÓN PARA RENDERIZAR CARRERAS =====
    function renderCarreras(carreras) {
        const carrerasContainer = document.getElementById('index-carreras-container');
        if (!carrerasContainer) {
            console.error('Contenedor de carreras no encontrado');
            return;
        }
        
        carrerasContainer.innerHTML = '';
        
        if (!carreras || carreras.length === 0) {
            carrerasContainer.innerHTML = `
                <div class="index-no-results">
                    <i class="fas fa-search"></i>
                    <h3>No se encontraron carreras</h3>
                    <p>Intenta con otro filtro o contacta al administrador</p>
                </div>
            `;
            return;
        }
        
        carreras.forEach(carrera => {
            const card = document.createElement('a');
            card.href = carrera.link || '#';
            card.className = 'index-carrera-card';
            card.setAttribute('data-category', carrera.category);
            
            // Determinar clase de badge según el tipo
            const badgeClass = carrera.badges[1] === 'ING' ? 'index-badge-ing' : 
                               carrera.badges[1] === 'LIC' ? 'index-badge-lic' : 'index-badge-tsu';
            
            // Manejar imagen por defecto si no existe
            const imageUrl = carrera.image || `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`;
            
            // Icono alternativo si no existe
            const iconClass = carrera.icon || 'fas fa-graduation-cap';
            
            card.innerHTML = `
                <div class="index-carrera-imagen">
                    <img src="${imageUrl}" alt="${carrera.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
                    <div class="index-carrera-badges">
                        <span class="index-carrera-badge index-badge-tsu">${carrera.badges[0]}</span>
                        <span class="index-carrera-badge ${badgeClass}">${carrera.badges[1]}</span>
                    </div>
                </div>
                <div class="index-carrera-content">
                    <div class="index-carrera-categoria">
                        <i class="${iconClass}"></i>
                        ${carrera.area || 'Carrera Universitaria'}
                    </div>
                    <h3 class="index-carrera-titulo">${carrera.title}</h3>
                    <p class="index-carrera-descripcion">${carrera.description}</p>
                    <div class="index-carrera-meta">
                        <div class="index-carrera-meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${carrera.duration || '3 años 4 meses'}</span>
                        </div>
                        <div class="index-carrera-meta-item">
                            <i class="fas ${carrera.empleabilidad ? 'fa-briefcase' : carrera.sector ? 'fa-heartbeat' : 'fa-rocket'}"></i>
                            <span>${carrera.empleabilidad || carrera.sector || carrera.caracteristica || 'Doble titulación'}</span>
                        </div>
                    </div>
                </div>
            `;
            
            carrerasContainer.appendChild(card);
        });
    }
    
    // ===== FILTRO DE CARRERAS =====
    function initCarrerasFilter() {
        const filterButtons = document.querySelectorAll('.index-filtro-btn');
        if (!filterButtons.length) return;
        
        // Función para filtrar carreras
        function filterCarreras(category) {
            if (category === 'all') {
                renderCarreras(carrerasData);
            } else if (category === 'tsu') {
                // Mostrar todas las carreras (todas tienen TSU)
                renderCarreras(carrerasData);
            } else {
                const filtered = carrerasData.filter(carrera => carrera.category === category);
                renderCarreras(filtered);
            }
        }
        
        // Event listeners para botones de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('index-active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('index-active');
                
                // Filtrar carreras
                const filter = this.getAttribute('data-filter');
                filterCarreras(filter);
            });
        });
        
        // Renderizar carreras inicialmente (TODAS)
        console.log('Renderizando carreras inicialmente...');
        renderCarreras(carrerasData);
    }
    
    // ===== FUNCIÓN PARA RENDERIZAR NOTICIAS =====
    function renderNoticias(noticias) {
        const noticiasContainer = document.getElementById('index-noticias-container');
        if (!noticiasContainer) {
            console.error('Contenedor de noticias no encontrado');
            return;
        }
        
        noticiasContainer.innerHTML = '';
        
        if (!noticias || noticias.length === 0) {
            noticiasContainer.innerHTML = `
                <div class="index-no-results">
                    <i class="fas fa-newspaper"></i>
                    <h3>No hay noticias disponibles</h3>
                    <p>Pronto tendremos nuevas noticias para ti</p>
                </div>
            `;
            return;
        }
        
        noticias.forEach(noticia => {
            const article = document.createElement('article');
            article.className = 'index-noticia-card';
            article.setAttribute('data-category', noticia.category);
            
            // Manejar imagen por defecto
            const imageUrl = noticia.image || `https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`;
            
            article.innerHTML = `
                <div class="index-noticia-header">
                    <div class="index-noticia-categoria">
                        <span class="index-categoria-icon">
                            <i class="${noticia.icon || 'fas fa-newspaper'}"></i>
                        </span>
                        <span class="index-categoria-texto">${noticia.category ? noticia.category.charAt(0).toUpperCase() + noticia.category.slice(1) : 'Noticia'}</span>
                    </div>
                    <div class="index-noticia-fecha">
                        <i class="far fa-calendar"></i>
                        ${noticia.date || 'Reciente'}
                    </div>
                </div>
                
                <div class="index-noticia-imagen">
                    <img src="${imageUrl}" alt="${noticia.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
                    ${noticia.destacado ? 
                        `<div class="index-noticia-badge destacado">
                            <i class="fas fa-star"></i>
                            Destacado
                        </div>` : ''
                    }
                    ${noticia.nuevo ? 
                        `<div class="index-noticia-badge nuevo">
                            <i class="fas fa-bolt"></i>
                            Nuevo
                        </div>` : ''
                    }
                </div>
                
                <div class="index-noticia-content">
                    <h3 class="index-noticia-titulo">${noticia.title}</h3>
                    <p class="index-noticia-descripcion">${noticia.description}</p>
                    
                    <div class="index-noticia-tags">
                        ${noticia.tags ? noticia.tags.map(tag => `<span class="index-tag">${tag}</span>`).join('') : ''}
                    </div>
                </div>
                
                <div class="index-noticia-footer">
                    <a href="${noticia.link || '#'}" 
                       class="index-noticia-link"
                       target="_blank"
                       rel="noopener">
                        <span>Ver más información</span>
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
            `;
            
            noticiasContainer.appendChild(article);
        });
    }
    
    // ===== SISTEMA DE NOTICIAS =====
    function initNoticiasSystem() {
        const filtroButtons = document.querySelectorAll('.index-noticias-filtro');
        
        // Función para filtrar noticias
        function filterNoticias(category) {
            if (category === 'todas') {
                renderNoticias(noticiasData);
            } else {
                const filtered = noticiasData.filter(noticia => noticia.category === category);
                renderNoticias(filtered);
            }
        }
        
        // Event listeners para filtros de noticias
        if (filtroButtons.length) {
            filtroButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    filtroButtons.forEach(btn => btn.classList.remove('index-active'));
                    
                    // Agregar clase active al botón clickeado
                    this.classList.add('index-active');
                    
                    // Filtrar noticias
                    const categoria = this.getAttribute('data-categoria');
                    filterNoticias(categoria);
                });
            });
        }
        
        // Renderizar noticias inicialmente
        console.log('Renderizando noticias inicialmente...');
        renderNoticias(noticiasData);
    }
    
    // ===== FUNCIÓN PARA RENDERIZAR GALERÍA =====
    function renderGaleria() {
        const galeriaContainer = document.getElementById('index-galeria-container');
        if (!galeriaContainer) return;
        
        galeriaContainer.innerHTML = '';
        
        galeriaData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'index-galeria-item';
            
            // Manejo de imagen por defecto
            const imageUrl = item.image || item.fallback || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
            
            div.innerHTML = `
                <img src="${imageUrl}" alt="${item.caption}" loading="lazy" onerror="this.src='${item.fallback || imageUrl}'">
                <div class="index-galeria-overlay">
                    <div class="index-galeria-caption">${item.caption}</div>
                </div>
            `;
            
            // Agregar evento de clic para ampliar imagen
            div.addEventListener('click', function() {
                // En un sistema real, aquí se abriría un lightbox
                console.log('Clic en imagen:', item.caption);
            });
            
            galeriaContainer.appendChild(div);
        });
    }
    
    // ===== FUNCIÓN PARA RENDERIZAR SITIOS DE INTERÉS =====
    function renderSitiosInteres() {
        const sitiosContainer = document.getElementById('index-sitios-container');
        if (!sitiosContainer) return;
        
        sitiosContainer.innerHTML = '';
        
        sitiosData.forEach(sitio => {
            const card = document.createElement('a');
            card.href = sitio.link;
            card.className = 'index-sitio-card';
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = `
                <div class="index-sitio-icon">
                    <div class="index-icon-wrapper">
                        <i class="${sitio.icon}"></i>
                    </div>
                </div>
                <div class="index-sitio-content">
                    <h3>${sitio.title}</h3>
                    <p>${sitio.desc}</p>
                </div>
                <div class="index-sitio-action">
                    <i class="fas fa-external-link-alt"></i>
                </div>
            `;
            
            sitiosContainer.appendChild(card);
        });
    }
    
    // ===== ANIMACIÓN DE CUATRIMESTRES =====
    function initCuatrimestresAnimation() {
        const markers = document.querySelectorAll('.index-timeline-marker');
        if (!markers.length) return;
        
        markers.forEach((marker, index) => {
            // Animación escalonada
            setTimeout(() => {
                marker.style.animation = 'index-bounce 0.5s ease';
                
                // Reset animation after it completes
                setTimeout(() => {
                    marker.style.animation = '';
                }, 500);
            }, index * 300);
        });
    }
    
    // ===== ANIMACIÓN DEL GRÁFICO 60/40 =====
    function initChartAnimation() {
        const chartPractical = document.querySelector('.index-chart-practical');
        const chartTheoretical = document.querySelector('.index-chart-theoretical');
        
        if (chartPractical && chartTheoretical) {
            // Iniciar animación después de un pequeño delay
            setTimeout(() => {
                chartPractical.style.transition = 'all 1.5s ease';
                chartTheoretical.style.transition = 'all 1.5s ease';
            }, 1000);
        }
    }
    
    // ===== SCROLL REVEAL ANIMATIONS =====
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.index-reveal');
        if (!revealElements.length) return;
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, 200);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
    
    // ===== INICIALIZAR TODO =====
    function initAll() {
        console.log('Inicializando todos los módulos...');
        
        // 1. Inicializar contadores animados
        initCounters();
        
        // 2. Renderizar contenido estático inicial
        renderCarreras(carrerasData);
        renderNoticias(noticiasData);
        renderGaleria();
        renderSitiosInteres();
        
        // 3. Inicializar filtros
        initCarrerasFilter();
        initNoticiasSystem();
        
        // 4. Inicializar animaciones
        initCuatrimestresAnimation();
        initChartAnimation();
        initScrollReveal();
        
        // 5. Añadir clase reveal a elementos que deben animarse al hacer scroll
        setTimeout(() => {
            document.querySelectorAll('.index-diferenciador-card, .index-carrera-card, .index-noticia-card, .index-modelo-card, .index-sitio-card')
                .forEach(el => el.classList.add('index-reveal'));
        }, 500);
        
        console.log('Inicialización completada');
    }
    
    // ===== MANEJO DE ERRORES =====
    function handleErrors() {
        // Capturar errores globales
        window.addEventListener('error', function(e) {
            console.error('Error en la aplicación:', e.error);
        });
        
        // Verificar que todos los elementos necesarios existan
        const requiredElements = [
            'index-carreras-container',
            'index-noticias-container',
            'index-galeria-container',
            'index-sitios-container'
        ];
        
        requiredElements.forEach(id => {
            if (!document.getElementById(id)) {
                console.warn(`Elemento con ID ${id} no encontrado`);
            }
        });
    }
    
    // ===== EJECUTAR INICIALIZACIÓN =====
    
    // Esperar a que todo el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            handleErrors();
            initAll();
        });
    } else {
        handleErrors();
        initAll();
    }
    
    // ===== FUNCIONES PÚBLICAS PARA EL FOTÓGRAFO =====
    
    // Función para recargar carreras desde una fuente externa
    window.cargarCarrerasExternas = function(nuevasCarreras) {
        if (nuevasCarreras && Array.isArray(nuevasCarreras)) {
            carrerasData.length = 0; // Limpiar array
            carrerasData.push(...nuevasCarreras); // Agregar nuevas carreras
            renderCarreras(carrerasData); // Renderizar
            console.log('Carreras actualizadas:', nuevasCarreras.length);
        }
    };
    
    // Función para agregar una nueva noticia
    window.agregarNoticia = function(noticiaData) {
        if (noticiaData) {
            noticiasData.unshift(noticiaData); // Agregar al inicio
            renderNoticias(noticiasData); // Renderizar
            console.log('Noticia agregada:', noticiaData.title);
        }
    };
    
    // Función para agregar una nueva imagen a la galería
    window.agregarImagenGaleria = function(imagenData) {
        if (imagenData) {
            galeriaData.unshift(imagenData); // Agregar al inicio
            renderGaleria(); // Renderizar
            console.log('Imagen agregada a galería:', imagenData.caption);
        }
    };
    
    // Exponer funciones útiles para futuras integraciones
    window.indexUtils = {
        recargarCarreras: function() {
            renderCarreras(carrerasData);
        },
        recargarNoticias: function() {
            renderNoticias(noticiasData);
        },
        recargarGaleria: function() {
            renderGaleria();
        },
        recargarSitios: function() {
            renderSitiosInteres();
        },
        getCarrerasCount: function() {
            return carrerasData.length;
        },
        getNoticiasCount: function() {
            return noticiasData.length;
        }
    };
    
    // Mensaje de confirmación
    console.log('Sistema de index UT Usumacinta inicializado correctamente');
});