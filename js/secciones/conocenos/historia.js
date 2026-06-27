// ===== SISTEMA DE HISTORIA CON ANIMACIONES INTERACTIVAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de elementos al hacer scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const estadisticaNumeros = document.querySelectorAll('.estadistica-numero');
    const logroCards = document.querySelectorAll('.logro-card');
    const valorCards = document.querySelectorAll('.valor-card');
    
    // Observador para timeline items
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Animación de contadores numéricos
    function animateCounters() {
        estadisticaNumeros.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Observador para contadores
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    const crecimientoSection = document.querySelector('.crecimiento-section');
    if (crecimientoSection) {
        counterObserver.observe(crecimientoSection);
    }
    
    // Efectos hover para tarjetas de logros
    logroCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Efectos hover para tarjetas de valores
    valorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Efectos para elementos de la línea de tiempo
    const timelineContents = document.querySelectorAll('.timeline-content');
    timelineContents.forEach(content => {
        content.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        content.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Efecto para badges de características
    const featureBadges = document.querySelectorAll('.feature-badge, .tech-item');
    featureBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Efecto para placeholders de imágenes
    const imagePlaceholders = document.querySelectorAll('.historia-imagen-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            this.style.borderStyle = 'solid';
            this.style.backgroundColor = 'var(--color-light)';
            
            // Simular carga de imagen
            setTimeout(() => {
                const icon = this.querySelector('i');
                const text = this.querySelector('p');
                const subtext = this.querySelector('small');
                
                icon.className = 'fas fa-check-circle';
                icon.style.color = 'var(--color-secondary)';
                text.textContent = 'Imagen cargada';
                subtext.textContent = 'Imagen histórica disponible';
            }, 500);
        });
    });
    
    // Efecto para puntos de la línea de tiempo visual
    const timelinePoints = document.querySelectorAll('.point');
    timelinePoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            const circle = this.querySelector('.point-circle');
            circle.style.transform = 'scale(1.3)';
            circle.style.background = 'var(--color-secondary)';
            circle.style.borderColor = 'var(--color-secondary)';
        });
        
        point.addEventListener('mouseleave', function() {
            const circle = this.querySelector('.point-circle');
            circle.style.transform = 'scale(1)';
            circle.style.background = 'var(--color-white)';
            circle.style.borderColor = 'var(--color-primary)';
        });
        
        // Click para mostrar más información
        point.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            let message = '';
            
            switch(year) {
                case '2003':
                    message = 'Fundación de la Universidad Tecnológica del Usumacinta';
                    break;
                case '2005':
                    message = 'Primera certificación en Sistema de Gestión de Calidad';
                    break;
                case '2009':
                    message = 'Reconocimiento SEP a la Calidad Académica';
                    break;
                case '2013':
                    message = 'Recertificación ISO 9001:2008';
                    break;
                case '2025':
                    message = 'Continuamos creciendo con excelencia educativa';
                    break;
            }
            
            // Crear notificación temporal
            const notification = document.createElement('div');
            notification.className = 'timeline-notification';
            notification.innerHTML = `
                <strong>${year}:</strong> ${message}
            `;
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--color-primary);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                max-width: 300px;
                animation: slideInRight 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            // Remover después de 3 segundos
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        });
    });
    
    // Agregar animaciones CSS para notificaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .timeline-notification {
            animation: slideInRight 0.3s ease;
        }
        
        .timeline-notification strong {
            color: var(--color-secondary);
        }
    `;
    document.head.appendChild(style);
    
    // Efecto de scroll suave para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto de paralaje para el hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.historia-hero');
        
        if (hero) {
            hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
        
        // Actualizar progreso de la línea de tiempo visual
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrolled / maxScroll) * 100;
        const timelineProgress = document.querySelector('.timeline-progress');
        
        if (timelineProgress) {
            timelineProgress.style.width = `${scrollPercent}%`;
        }
    });
    
    // Inicializar animaciones
    setTimeout(() => {
        // Añadir clase visible al primer timeline item
        if (timelineItems.length > 0) {
            timelineItems[0].classList.add('visible');
        }
        
        // Efecto de entrada para elementos principales
        const mainElements = document.querySelectorAll('.section-header, .logro-card, .valor-card');
        mainElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
    
    // Efecto de scroll para el indicador
    const scrollIndicator = document.querySelector('.historia-scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
        
        // Click para scroll down
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight - 80,
                behavior: 'smooth'
            });
        });
    }
    
    // Consola de depuración (opcional)
    console.log('%c📚 Historia UTU Cargada', 'color: #2c348f; font-weight: bold; font-size: 14px;');
    console.log('%c• Línea de tiempo interactiva', 'color: #21b395;');
    console.log('%c• Animaciones de scroll', 'color: #21b395;');
    console.log('%c• Contadores animados', 'color: #21b395;');
    console.log('%c• Efectos hover interactivos', 'color: #21b395;');
});