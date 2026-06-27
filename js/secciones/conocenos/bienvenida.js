// ===== ANIMACIONES PARA PÁGINA DE BIENVENIDA =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición con Intersection Observer
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bienvenida-animated');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Aplicar animación a todos los elementos principales
    const elementsToAnimate = document.querySelectorAll(
        '.rector-card, .bienvenida-info-card, .valor-card, .bienvenida-cta-section'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        animateOnScroll.observe(el);
    });

    // Efecto hover mejorado para tarjetas
    const cards = document.querySelectorAll('.bienvenida-info-card, .valor-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('bienvenida-animated') || this.style.opacity !== '1') {
                this.style.transform = 'translateY(0)';
            }
        });
    });

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

    // Animación del badge del rector
    const rectorBadge = document.querySelector('.rector-badge');
    if (rectorBadge) {
        rectorBadge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        rectorBadge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Contador de valores (efecto visual)
    function animateValues() {
        const valores = document.querySelectorAll('.valor-card');
        valores.forEach((valor, index) => {
            setTimeout(() => {
                valor.classList.add('bienvenida-pulse-animation');
                setTimeout(() => {
                    valor.classList.remove('bienvenida-pulse-animation');
                }, 600);
            }, index * 200);
        });
    }

    // Animación inicial cuando se carga la página
    setTimeout(animateValues, 1000);

    // Efecto de carga progresiva para imagen del rector
    const rectorImage = document.querySelector('.rector-image img');
    if (rectorImage) {
        rectorImage.style.opacity = '0';
        rectorImage.onload = function() {
            this.style.transition = 'opacity 0.8s ease';
            this.style.opacity = '1';
        };
        
        // Si la imagen ya está cargada
        if (rectorImage.complete) {
            rectorImage.style.opacity = '1';
        }
    }

    // Actualizar año en el footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }

    // Efecto de máquina de escribir en el hero (opcional)
    const heroTitle = document.querySelector('.bienvenida-hero h1');
    if (heroTitle && !sessionStorage.getItem('welcomeAnimated')) {
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
        sessionStorage.setItem('welcomeAnimated', 'true');
    }
});

// ===== AGREGAR ANIMACIÓN DE PULSO A CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes bienvenida-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .bienvenida-pulse-animation {
        animation: bienvenida-pulse 0.6s ease;
    }
    
    /* Animación para elementos que aparecen */
    .bienvenida-animated {
        animation: bienvenida-fadeInUp 0.8s ease forwards;
    }
    
    @keyframes bienvenida-fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);