/**
 * FUNCIONALIDADES PRINCIPALES DEL INDEX
 * Universidad Tecnológica del Usumacinta
 * Versión 4.1 - 
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando funcionalidades principales...');
    
    // Inicializar componentes
    // initPageComponents();
    initAnimations();
    initInteractiveFeatures();
    initPerformanceOptimizations();
    
    // Configurar observadores
    initObservers();
    
    console.log('✅ Funcionalidades inicializadas correctamente');
});

// ===== INICIALIZACIÓN DE COMPONENTES =====
function initPageComponents() {
    // Filtrar carreras (CORREGIDO)
    initCareerFilters();
    
    // Funcionalidad de noticias
    initNewsFeatures();
    
    // Lazy loading para imágenes
    initLazyLoading();
    
    // Tooltips
    initTooltips();
}

function initCareerFilters() {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const careerCards = document.querySelectorAll('.carrera-card-mejorada');
    
    if (!filterButtons.length || !careerCards.length) return;
    
    // Asegurar que todas las carreras sean visibles inicialmente
    careerCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            
            // Obtener filtro
            const filter = this.dataset.filter;
            
            // Filtrar carreras con animación
            let visibleCount = 0;
            careerCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Mostrar con animación
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                    visibleCount++;
                } else {
                    // Ocultar con animación
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
            
            // Feedback para accesibilidad
            if (visibleCount === 0) {
                console.log('No se encontraron carreras con ese filtro');
            } else {
                console.log(`Mostrando ${visibleCount} carreras`);
            }
        });
    });
    
    // Inicializar estado activo
    const activeButton = document.querySelector('.filtro-btn.active');
    if (activeButton) {
        activeButton.setAttribute('aria-pressed', 'true');
    }
}

function initNewsFeatures() {
    // Todos los enlaces ahora van a Facebook directamente
    const newsLinks = document.querySelectorAll('.noticia-enlace');
    
    newsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // El enlace ya tiene href a Facebook, no necesita acción adicional
            console.log('Redirigiendo a Facebook...');
        });
    });
    
    // Eliminar botones de compartir si existen
    const shareButtons = document.querySelectorAll('.noticia-compartir');
    shareButtons.forEach(button => {
        button.style.display = 'none';
    });
}

function showNotification(message, type = 'info') {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-secondary)' : 'var(--color-primary)'};
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== ANIMACIONES =====
function initAnimations() {
    // Scroll reveal animations
    initScrollReveal();
    
    // Counter animations
    initCounterAnimations();
    
    // Hover effects
    initHoverEffects();
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.diferenciador-card, .carrera-card-mejorada, .noticia-card-moderna, .info-item, .sitio-card-moderno'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-value, .feature-value');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const target = parseInt(text.replace(/[^\d]/g, ''));
        if (isNaN(target)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target, text.includes('%'));
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

function animateCounter(element, target, isPercentage) {
    let current = 0;
    const increment = target / 60; // 60 frames en 1 segundo
    const suffix = isPercentage ? '%' : '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

function initHoverEffects() {
    // Efecto ripple en botones
    document.addEventListener('click', function(e) {
        const button = e.target.closest('.btn, .filtro-btn, .noticia-enlace, .btn-facebook');
        if (button) {
            createRippleEffect(button, e);
        }
    });
    
    // Parallax en hero
    initHeroParallax();
}

function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function initHeroParallax() {
    const hero = document.querySelector('.hero-moderno');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        hero.style.transform = `translateY(${rate * 0.1}px)`;
        
        // Efecto en elementos internos
        const text = hero.querySelector('.slide-text');
        const image = hero.querySelector('.slide-image');
        
        if (text) {
            text.style.transform = `translateY(${rate * 0.2}px)`;
        }
        
        if (image) {
            image.style.transform = `translateY(${rate * 0.1}px) scale(${1 + rate * 0.0001})`;
        }
    });
}

// ===== FUNCIONALIDADES INTERACTIVAS =====
function initInteractiveFeatures() {
    // Tooltips
    initTooltips();
    
    // Modales para imágenes
    initImageModals();
    
    // Smooth scroll para enlaces internos
    initSmoothScroll();
    
    // Carga dinámica de componentes
    initDynamicComponents();
}

function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
        element.addEventListener('focus', showTooltip);
        element.addEventListener('blur', hideTooltip);
    });
}

function showTooltip(e) {
    const element = e.target;
    const tooltipText = element.getAttribute('data-tooltip');
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    tooltip.setAttribute('role', 'tooltip');
    
    const rect = element.getBoundingClientRect();
    tooltip.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 10}px;
        left: ${rect.left + rect.width / 2}px;
        transform: translateX(-50%);
        background: var(--color-dark);
        color: white;
        padding: 8px 12px;
        border-radius: var(--border-radius-sm);
        font-size: 0.85rem;
        white-space: nowrap;
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
        animation: fadeIn 0.2s ease forwards;
    `;
    
    document.body.appendChild(tooltip);
    
    // Actualizar posición si se mueve el mouse
    element.addEventListener('mousemove', updateTooltipPosition);
    
    function updateTooltipPosition(e) {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.bottom + 10}px`;
    }
}

function hideTooltip(e) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function initImageModals() {
    const images = document.querySelectorAll('.noticia-imagen-container img, .carrera-imagen img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
}

function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Modal de imagen');
    
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <img src="${src}" alt="${alt}">
            <button class="modal-close" aria-label="Cerrar modal">&times;</button>
            <div class="modal-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Cerrar modal
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // Cerrar con Escape
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
    
    // Atrapar foco dentro del modal
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault();
                    lastFocusableElement.focus();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    });
    
    // Enfocar el botón de cerrar
    setTimeout(() => modal.querySelector('.modal-close').focus(), 100);
    
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo para enlaces internos
            if (href === '#' || href.startsWith('#!')) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calcular offset considerando el header
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                
                window.scrollTo({
                    top: target.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// function initDynamicComponents() {
//     // Cargar componentes si no están cargados
//     setTimeout(() => {
//         if (!document.querySelector('.header') && document.getElementById('header-container')) {
//             console.log('Cargando componentes dinámicamente...');
//             // Tu función de carga de componentes aquí
//         }
//     }, 1000);
// }

// ===== OPTIMIZACIONES DE RENDIMIENTO =====
function initPerformanceOptimizations() {
    // Lazy loading
    initLazyLoading();
    
    // Preload de recursos importantes
    preloadCriticalResources();
    
    // Debounce para eventos scroll
    initDebouncedScroll();
}

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Cargar imagen
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    // Agregar clase de carga completa
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px' // Cargar antes de que sean visibles
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antiguos
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
}

function preloadCriticalResources() {
    // Preload de fuentes
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
    
    // Preload de imágenes críticas
    const criticalImages = [
        'assets/img/beca.webp',
        'assets/img/agenda2030.webp',
        'assets/img/agenda2030-2.webp'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function initDebouncedScroll() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateOnScroll() {
    // Actualizar efectos basados en scroll
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// ===== OBSERVADORES =====
function initObservers() {
    // Observer para cambios en el DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // Reinicializar componentes si es necesario
                initCareerFilters();
                initNewsFeatures();
            }
        });
    });
    
    // Observar cambios en el body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// ===== FUNCIONES GLOBALES =====
window.UTUIndex = {
    // Carrusel
    playCarousel: () => window.carouselModerno?.play(),
    pauseCarousel: () => window.carouselModerno?.pause(),
    nextSlide: () => window.carouselModerno?.nextSlide(),
    prevSlide: () => window.carouselModerno?.prevSlide(),
    goToSlide: (index) => window.carouselModerno?.goToSlide(index),
    
    // Filtros
    filterCareers: (filter) => {
        const buttons = document.querySelectorAll('.filtro-btn');
        const targetButton = Array.from(buttons).find(btn => btn.dataset.filter === filter);
        if (targetButton) targetButton.click();
    },
    
    // Debug
    debug: () => {
        console.log('UTUIndex Debug Info:', {
            carousel: window.carouselModerno ? '✅ Activo' : '❌ No encontrado',
            filters: document.querySelectorAll('.filtro-btn').length,
            careers: document.querySelectorAll('.carrera-card-mejorada').length,
            news: document.querySelectorAll('.noticia-card-moderna').length
        });
    }
};

// Inicialización final
window.addEventListener('load', () => {
    console.log('📦 Página completamente cargada');
    
    // Remover preloader si existe
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    }
    
    // Actualizar año en el footer
    const yearElements = document.querySelectorAll('[data-current-year]');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});

// Polyfills
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// Estilos CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

