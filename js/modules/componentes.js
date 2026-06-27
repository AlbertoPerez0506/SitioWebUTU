// ===== FUNCIÓN PARA DETERMINAR LA RUTA BASE CORRECTAMENTE =====
function obtenerRutaBase() {
    // Obtener la ruta actual del archivo HTML
    const rutaActual = window.location.pathname;
    
    console.log('Ruta actual detectada:', rutaActual);
    
    // Si estamos en la raíz (index.html o /)
    if (rutaActual === '/' || rutaActual.endsWith('index.html') || rutaActual.includes('index.html')) {
        return './'; // Raíz
    }
    
    // Si estamos en views/conocenos/bienvenida.html
    if (rutaActual.includes('/views/conocenos/')) {
        return '../../'; // Desde views/conocenos/ a raíz
    }
    
    // Si estamos en views/areas/ o views/carreras/
    if (rutaActual.includes('/views/')) {
        return '../'; // Desde views/ a raíz
    }
    
    // Por defecto, raíz
    return './';
}

// ===== FUNCIÓN MEJORADA PARA CARGAR COMPONENTES =====
function cargarComponente(id, urlRelativa) {
    // Obtener la ruta base correcta según ubicación
    const rutaBase = obtenerRutaBase();
    
    // Construir la URL completa
    let urlCompleta;
    
    // Si la URL relativa ya tiene prefijo, usarla como está
    if (urlRelativa.startsWith('http') || urlRelativa.startsWith('/')) {
        urlCompleta = urlRelativa;
    } else {
        urlCompleta = rutaBase + urlRelativa;
    }
    
    console.log(`Cargando ${id} desde: ${urlCompleta}`);
    
    // Intentar cargar el componente
    fetch(urlCompleta)
        .then(response => {
            if (!response.ok) {
                // Si falla, intentar alternativas
                console.warn(`Primer intento falló para ${urlCompleta}, probando alternativas...`);
                
                // Alternativa 1: Desde raíz absoluta
                if (!urlRelativa.startsWith('/')) {
                    return fetch('/' + urlRelativa);
                }
                
                // Alternativa 2: Desde ubicación actual
                return fetch(urlRelativa);
            }
            return response;
        })
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar');
            return response.text();
        })
        .then(data => {
            // Insertar el HTML en el contenedor
            document.getElementById(id).innerHTML = data;
            
            // Si es el header, inicializar funcionalidades
            if (id === 'header-container') {
                inicializarNavbar();
                actualizarEnlaceActivo();
                
                // Ajustar rutas de imágenes en el header si es necesario
                ajustarRutasHeader();
            }
            
            console.log(`${id} cargado exitosamente`);
            
            // Ejecutar callback si existe
            if (typeof onComponenteCargado === 'function') {
                onComponenteCargado(id);
            }
        })
        .catch(error => {
            console.error(`Error cargando ${id}:`, error);
            
            // Mostrar mensaje de error en el contenedor
            document.getElementById(id).innerHTML = `
                <div style="padding: 10px; background: #ffebee; color: #c62828; border-radius: 4px;">
                    <p><strong>⚠️ Error cargando componente</strong></p>
                    <p>No se pudo cargar ${id.replace('-container', '')}</p>
                    <small>URL intentada: ${urlCompleta}</small>
                </div>
            `;
        });
}

// ===== FUNCIÓN PARA AJUSTAR RUTAS EN EL HEADER =====
function ajustarRutasHeader() {
    // Ajustar ruta del logo en el header
    const logoImg = document.querySelector('.header .logo img');
    if (logoImg) {
        const rutaBase = obtenerRutaBase();
        const srcActual = logoImg.getAttribute('src');
        
        // Si la ruta no es absoluta y no empieza con http
        if (!srcActual.startsWith('http') && !srcActual.startsWith('/')) {
            // Verificar si la imagen existe en la nueva ruta
            const nuevaRuta = rutaBase + srcActual.replace(/^(\.\.\/)+/, '');
            logoImg.setAttribute('src', nuevaRuta);
        }
    }
    
    // Ajustar rutas de los enlaces si es necesario
    const enlacesHeader = document.querySelectorAll('.header a[href]');
    enlacesHeader.forEach(enlace => {
        const href = enlace.getAttribute('href');
        // Solo ajustar rutas relativas
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/')) {
            const rutaBase = obtenerRutaBase();
            // Si el href no empieza con ../ y estamos en subcarpeta
            if (rutaBase.includes('..') && !href.startsWith('../')) {
                enlace.setAttribute('href', rutaBase + href);
            }
        }
    });
}

// ===== FUNCIONES AUXILIARES =====
function inicializarNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger && navList) {
        // Remover event listeners anteriores para evitar duplicados
        const newHamburger = hamburger.cloneNode(true);
        const newNavList = navList.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        navList.parentNode.replaceChild(newNavList, navList);
        
        // Nueva inicialización
        document.querySelector('.hamburger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-list').classList.toggle('active');
        });
    }
    
    // Configurar dropdowns para móvil
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
}

function actualizarEnlaceActivo() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-list a[href]');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Normalizar rutas para comparación
        const currentNormalized = currentPath.replace(/\/$/, '');
        const linkNormalized = linkPath.replace(/^\.\.\//g, '');
        
        if (currentNormalized.includes(linkNormalized.replace('.html', '')) || 
            (currentPath === '/' && (linkPath === 'index.html' || linkPath === '../index.html' || linkPath === './index.html'))) {
            link.classList.add('active');
            
            // Si está en un dropdown, marcar el padre también
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (toggle) toggle.classList.add('active');
            }
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== INICIALIZACIÓN PRINCIPAL =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando componentes...');
    console.log('URL actual:', window.location.href);
    console.log('Pathname:', window.location.pathname);
    
    // Cargar header si existe el contenedor
    if (document.getElementById('header-container')) {
        cargarComponente('header-container', 'components/header.html');
    }
    
    // Cargar footer si existe el contenedor
    if (document.getElementById('footer-container')) {
        cargarComponente('footer-container', 'components/footer.html');
    }
    
    // Inicializar efecto scroll para header (se aplicará después de cargar)
    setTimeout(() => {
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Aplicar estado inicial
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            }
        }
    }, 1000); // Esperar a que se cargue el header
});

// ===== FUNCIÓN PARA DEBUG =====
function debugRutas() {
    console.log('=== DEBUG DE RUTAS ===');
    console.log('Ruta completa:', window.location.href);
    console.log('Pathname:', window.location.pathname);
    console.log('Ruta base calculada:', obtenerRutaBase());
    console.log('Contenedores encontrados:');
    console.log('- header-container:', document.getElementById('header-container') ? 'SÍ' : 'NO');
    console.log('- footer-container:', document.getElementById('footer-container') ? 'SÍ' : 'NO');
}

// Exportar funciones para uso global
window.cargarComponente = cargarComponente;
window.obtenerRutaBase = obtenerRutaBase;
window.debugRutas = debugRutas;