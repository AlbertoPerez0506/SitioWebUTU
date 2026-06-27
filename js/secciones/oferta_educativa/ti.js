// ===========================================
// JAVASCRIPT ESPECÍFICO PARA TI
// - Efectos futuristas y animaciones
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando efectos TI...');
    
    // === EFECTO GLITCH EN BANNER ===
    function initGlitchEffect() {
        const glitchContainer = document.querySelector('.ti-glitch-container');
        if (!glitchContainer) return;
        
        // Agregar partículas glitch adicionales
        for (let i = 0; i < 10; i++) {
            const glitchDot = document.createElement('div');
            glitchDot.className = 'glitch-dot';
            glitchDot.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? 'var(--ti-accent)' : 'var(--ti-primary)'};
                opacity: ${Math.random() * 0.5};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 3 + 2}s infinite linear;
                border-radius: 50%;
            `;
            glitchContainer.appendChild(glitchDot);
        }
        
        // Agregar estilo para las partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // === ANIMACIÓN DE CONTADORES ===
    function initCounters() {
        const counters = document.querySelectorAll('.ti-stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + (counter.getAttribute('data-count') === '100' ? '%' : '');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + (counter.getAttribute('data-count') === '100' ? '%' : '');
                }
            }, 16);
        });
    }
    
    // === SCROLL REVEAL ANIMATIONS ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.ti-card, .ti-sidebar-card, .ti-stat-card, .ti-feature-card');
        
        const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ti-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('ti-reveal');
            revealOnScroll.observe(el);
        });
    }
    
    // === EFECTO HOVER PARA TARJETAS TECNOLÓGICAS ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const competenciaCards = document.querySelectorAll('.ti-competencia');
        competenciaCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px) scale(1.02)';
                this.style.boxShadow = '0 15px 30px rgba(0, 180, 219, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(5px) scale(1)';
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Efecto para badges de tecnología
        const techBadges = document.querySelectorAll('.ti-tech-badge');
        techBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(5deg)';
                this.style.boxShadow = '0 5px 15px rgba(0, 180, 219, 0.3)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para puestos de trabajo
        const puestoBadges = document.querySelectorAll('.ti-puesto-badge');
        puestoBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 8px 20px rgba(44, 52, 143, 0.3)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // === EFECTO TYPING EN TÍTULOS ===
    function initTypingEffect() {
        const typingTexts = document.querySelectorAll('.ti-glitch-text');
        
        typingTexts.forEach(text => {
            const originalText = text.textContent;
            text.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    text.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            // Iniciar efecto cuando sea visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(text);
        });
    }
    
    // === SIMULACIÓN DE CÓDIGO EN BACKGROUND ===
    function initCodeSimulation() {
        const codeContainer = document.querySelector('.ti-hero');
        if (!codeContainer) return;
        
        // Crear elementos de código flotante
        const codeSymbols = ['</>', '{ }', '[]', '()', '=>', '===', '++', '--', '&&', '||'];
        
        for (let i = 0; i < 15; i++) {
            const codeElement = document.createElement('div');
            codeElement.className = 'code-symbol';
            codeElement.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
            codeElement.style.cssText = `
                position: absolute;
                color: rgba(0, 180, 219, ${Math.random() * 0.3 + 0.1});
                font-family: 'Courier New', monospace;
                font-weight: bold;
                font-size: ${Math.random() * 20 + 10}px;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: 0;
                animation: float-code ${Math.random() * 10 + 5}s infinite linear;
                z-index: 1;
                pointer-events: none;
                user-select: none;
            `;
            codeContainer.appendChild(codeElement);
        }
        
        // Agregar animación CSS
        const codeStyle = document.createElement('style');
        codeStyle.textContent = `
            @keyframes float-code {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: ${Math.random() * 0.5 + 0.2};
                }
                90% {
                    opacity: ${Math.random() * 0.5 + 0.2};
                }
                100% {
                    transform: translateY(-100px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(codeStyle);
    }
    
    // === INTERACTIVIDAD CON EL VIDEO ===
    function initVideoInteractivity() {
        const videoTags = document.querySelectorAll('.ti-tag');
        
        videoTags.forEach(tag => {
            tag.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual al hacer clic
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Mostrar información adicional
                const tech = this.querySelector('span').textContent;
                console.log(`Tecnología seleccionada: ${tech}`);
                
                // Podrías agregar aquí una función para mostrar más detalles
                // sobre la tecnología seleccionada
            });
        });
    }
    
    // === EFECTO PARALLAX EN HERO ===
    function initParallaxEffect() {
        const hero = document.querySelector('.ti-hero');
        const particles = document.querySelector('.ti-particles');
        
        if (!hero || !particles) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            particles.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('🔄 Inicializando efectos TI...');
        
        initGlitchEffect();
        initScrollReveal();
        initHoverEffects();
        initTypingEffect();
        initCodeSimulation();
        initVideoInteractivity();
        initParallaxEffect();
        
        // Iniciar contadores después de un delay
        setTimeout(() => {
            initCounters();
        }, 1000);
        
        console.log('✅ Efectos TI inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA TI ===

/**
 * Efecto de escritura tipo máquina
 * @param {HTMLElement} element - Elemento donde escribir
 * @param {string} text - Texto a escribir
 * @param {number} speed - Velocidad en ms entre caracteres
 */
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Crear efecto de partículas
 * @param {HTMLElement} container - Contenedor donde agregar partículas
 * @param {number} count - Cantidad de partículas
 */
function createParticles(container, count = 20) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'ti-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? 'var(--ti-accent)' : 'var(--ti-primary)'};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 5 + 3}s infinite linear;
            opacity: ${Math.random() * 0.3 + 0.1};
        `;
        container.appendChild(particle);
    }
    
    // Agregar animación si no existe
    if (!document.querySelector('#particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translate(0, 0);
                }
                50% {
                    transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Exportar funciones para uso global
window.TIEffects = {
    typeWriterEffect,
    createParticles
};