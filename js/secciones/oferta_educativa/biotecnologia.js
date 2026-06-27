// ===========================================
// JAVASCRIPT ESPECÍFICO PARA BIOTECNOLOGÍA
// - Efectos científicos y animaciones orgánicas
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🧬 Inicializando efectos de Biotecnología...');
    
    // === ANIMACIÓN DE MOLÉCULAS Y CÉLULAS ===
    function initScienceAnimations() {
        const scienceContainer = document.querySelector('.bio-science-elements');
        if (!scienceContainer) return;
        
        // Crear partículas científicas adicionales
        const particles = ['🧫', '🧪', '🔬', '⚗️', '🧬', '🦠', '🧪', '🔬'];
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'bio-floating-particle';
            particle.textContent = particles[i];
            particle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-particle ${Math.random() * 10 + 5}s infinite linear;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                filter: drop-shadow(0 0 5px rgba(33, 179, 149, 0.3));
            `;
            scienceContainer.appendChild(particle);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: ${Math.random() * 0.3 + 0.1};
                }
                90% {
                    opacity: ${Math.random() * 0.3 + 0.1};
                }
                100% {
                    transform: translateY(-100px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
            
            .bio-floating-particle {
                animation-timing-function: ease-in-out;
            }
        `;
        document.head.appendChild(style);
    }
    
    // === SCROLL REVEAL ANIMATIONS ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.bio-card, .bio-sidebar-card, .bio-lab-card, .bio-stat, .bio-feature'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('bio-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('bio-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS CIENTÍFICOS ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compItems = document.querySelectorAll('.bio-comp-item');
        compItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.bio-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(10deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                this.style.boxShadow = '0 10px 25px rgba(33, 179, 149, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.bio-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Efecto para badges de áreas
        const areaBadges = document.querySelectorAll('.bio-area-badge');
        areaBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(33, 179, 149, 0.3)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para items de campo de trabajo
        const campoItems = document.querySelectorAll('.bio-campo-item');
        campoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }
    
    // === ANIMACIÓN DE CONTADORES ESTADÍSTICOS ===
    function initStatisticsCounters() {
        const statNumbers = document.querySelectorAll('.bio-stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent.replace('+', '').replace('%', ''));
            const duration = 2000;
            const increment = target / (duration / 16);
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    const prefix = stat.textContent.includes('+') ? '+' : '';
                    const suffix = stat.textContent.includes('%') ? '%' : '';
                    stat.textContent = prefix + target + suffix;
                    clearInterval(timer);
                } else {
                    const prefix = stat.textContent.includes('+') ? '+' : '';
                    const suffix = stat.textContent.includes('%') ? '%' : '';
                    stat.textContent = prefix + Math.floor(current) + suffix;
                }
            }, 16);
        });
    }
    
    // === EFECTO DE CRECIMIENTO ORGÁNICO ===
    function initOrganicGrowthEffect() {
        const growthElements = document.querySelectorAll('.bio-feature, .bio-lab-card');
        
        growthElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // === SIMULACIÓN DE LABORATORIO INTERACTIVO ===
    function initLabSimulation() {
        const labCards = document.querySelectorAll('.bio-lab-card');
        
        labCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual al hacer clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Obtener información del laboratorio
                const labName = this.querySelector('h4').textContent;
                const labDesc = this.querySelector('p').textContent;
                
                // Mostrar tooltip o información adicional
                console.log(`Laboratorio: ${labName}`);
                console.log(`Descripción: ${labDesc}`);
                
                // Aquí podrías implementar un modal con más información
                // showLabInfoModal(labName, labDesc);
            });
        });
    }
    
    // === ANIMACIÓN DE BANNER CON EFECTO MICROSCOPIO ===
    function initBannerMicroscopeEffect() {
        const bannerImg = document.querySelector('.bio-banner-image img');
        if (!bannerImg) return;
        
        // Efecto de zoom similar a microscopio al hacer hover
        bannerImg.parentElement.addEventListener('mouseenter', function() {
            bannerImg.style.transform = 'scale(1.1)';
            bannerImg.style.transition = 'transform 0.8s ease';
        });
        
        bannerImg.parentElement.addEventListener('mouseleave', function() {
            bannerImg.style.transform = 'scale(1.03)';
        });
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('🔬 Inicializando efectos científicos...');
        
        initScienceAnimations();
        initScrollReveal();
        initHoverEffects();
        initOrganicGrowthEffect();
        initLabSimulation();
        initBannerMicroscopeEffect();
        
        // Iniciar contadores después de un delay
        setTimeout(() => {
            initStatisticsCounters();
        }, 1500);
        
        console.log('✅ Efectos de Biotecnología inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA BIOTECNOLOGÍA ===

/**
 * Crear efecto de burbuja científica
 * @param {HTMLElement} container - Contenedor donde agregar burbujas
 * @param {number} count - Cantidad de burbujas
 */
function createScienceBubbles(container, count = 15) {
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'science-bubble';
        bubble.style.cssText = `
            position: absolute;
            width: ${Math.random() * 30 + 10}px;
            height: ${Math.random() * 30 + 10}px;
            background: rgba(33, 179, 149, ${Math.random() * 0.2 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-bubble ${Math.random() * 8 + 4}s infinite ease-in-out;
            opacity: ${Math.random() * 0.3 + 0.1};
            pointer-events: none;
        `;
        container.appendChild(bubble);
    }
    
    // Agregar animación si no existe
    if (!document.querySelector('#bubble-animation')) {
        const style = document.createElement('style');
        style.id = 'bubble-animation';
        style.textContent = `
            @keyframes float-bubble {
                0%, 100% {
                    transform: translateY(0) scale(1);
                }
                50% {
                    transform: translateY(-20px) scale(${Math.random() * 0.2 + 0.9});
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Efecto de revelado gradual de texto
 * @param {HTMLElement} element - Elemento de texto
 * @param {number} delay - Delay entre letras en ms
 */
function gradualTextReveal(element, delay = 50) {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, i * delay);
    }
}

// Exportar funciones para uso global
window.BioEffects = {
    createScienceBubbles,
    gradualTextReveal
};