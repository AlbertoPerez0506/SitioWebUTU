// ===== ANIMACIONES PARA PÁGINA DE MISIÓN Y VISIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición con Intersection Observer
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mision-animated');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animación especial para los valores
                if (entry.target.classList.contains('valor-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('mision-pulse-animation');
                        setTimeout(() => {
                            entry.target.classList.remove('mision-pulse-animation');
                        }, 600);
                    }, 200);
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Aplicar animación a todos los elementos principales
    const elementsToAnimate = document.querySelectorAll(
        '.mision-card, .vision-card, .valores-card, .compromiso-card, .universidad-imagen, .valor-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        animateOnScroll.observe(el);
    });

    // Efecto hover mejorado para tarjetas de valores
    const valorItems = document.querySelectorAll('.valor-item');
    valorItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('mision-animated') || this.style.opacity !== '1') {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Efecto hover para aspectos de visión
    const aspectos = document.querySelectorAll('.aspecto');
    aspectos.forEach(aspecto => {
        aspecto.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        aspecto.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover para highlights de misión
    const highlights = document.querySelectorAll('.highlight-item');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px)';
        });
        
        highlight.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Animación de la imagen principal
    const imagenContainer = document.querySelector('.imagen-container');
    if (imagenContainer) {
        imagenContainer.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.08)';
        });
        
        imagenContainer.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
    }

    // Efecto de scroll suave para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de contador para estadísticas
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const suffix = stat.textContent.replace(/\d+/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 30);
        });
    }

    // Observar cuando la sección de compromiso es visible
    const compromisoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                compromisoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const compromisoCard = document.querySelector('.compromiso-card');
    if (compromisoCard) {
        compromisoObserver.observe(compromisoCard);
    }

    // Actualizar año en el footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }

    // Efecto de máquina de escribir en el hero (opcional)
    const heroTitle = document.querySelector('.mision-hero h1');
    if (heroTitle && !sessionStorage.getItem('misionAnimated')) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
        sessionStorage.setItem('misionAnimated', 'true');
    }
});

// ===== AGREGAR ANIMACIONES A CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes mision-pulse {
        0% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); }
        50% { transform: scale(1.05); box-shadow: 0 10px 30px rgba(44, 52, 143, 0.2); }
        100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); }
    }
    
    .mision-pulse-animation {
        animation: mision-pulse 0.6s ease;
    }
    
    /* Animación para elementos que aparecen */
    .mision-animated {
        animation: mision-fadeInUp 0.8s ease forwards;
    }
    
    @keyframes mision-fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Efecto de brillo para iconos */
    .valor-symbol {
        position: relative;
        overflow: hidden;
    }
    
    .valor-symbol::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
        transform: rotate(45deg);
        transition: transform 0.6s ease;
    }
    
    .valor-item:hover .valor-symbol::after {
        transform: rotate(45deg) translate(50%, 50%);
    }
`;
document.head.appendChild(style);