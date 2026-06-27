// ===== ANIMACIONES PARA PÁGINAS DE CARRERAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición para elementos
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Elementos a animar (incluyendo nuevos elementos de TI)
    const elementsToAnimate = document.querySelectorAll(
        '.competencia-card, .info-box, .campo-trabajo, .plan-estudios, .carrera-cta, .perfil-item, .puestos-trabajo, .puesto-badge'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        animateOnScroll.observe(el);
    });

    // Efecto hover mejorado para tarjetas de competencias
    const competenciaCards = document.querySelectorAll('.competencia-card');
    competenciaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover para items de información
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Efecto hover para badges de puestos de trabajo
    const puestoBadges = document.querySelectorAll('.puesto-badge');
    puestoBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(44, 52, 143, 0.3)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Contador de elementos (opcional)
    function actualizarEstadisticas() {
        const competencias = document.querySelectorAll('.competencia-card').length;
        const camposTrabajo = document.querySelectorAll('.campo-trabajo li').length;
        const puestosTrabajo = document.querySelectorAll('.puesto-badge').length;
        
        const statsElement = document.createElement('div');
        statsElement.className = 'carrera-stats';
        statsElement.innerHTML = `
            <div style="text-align: center; margin: 2rem 0; padding: 1rem; background: var(--color-light); border-radius: 10px;">
                <p style="color: var(--color-primary); font-size: 0.9rem; margin: 0;">
                    <strong>${competencias}</strong> competencias profesionales • 
                    <strong>${camposTrabajo}</strong> áreas de oportunidad • 
                    <strong>${puestosTrabajo}</strong> puestos de trabajo
                </p>
            </div>
        `;
        
        const carreraDescripcion = document.querySelector('.carrera-descripcion');
        if (carreraDescripcion && !document.querySelector('.carrera-stats')) {
            carreraDescripcion.parentNode.insertBefore(statsElement, carreraDescripcion.nextSibling);
        }
    }

    // Llamar la función después de cargar el DOM
    setTimeout(actualizarEstadisticas, 1000);

    // Efecto de scroll suave para navegación interna
    document.querySelectorAll('.carrera-sidebar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Efecto de carga progresiva para imágenes
    const images = document.querySelectorAll('.carrera-banner-image img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.8s ease';
        
        img.onload = function() {
            this.style.opacity = '1';
        };
        
        // Si la imagen ya está cargada
        if (img.complete) {
            img.style.opacity = '1';
        }
    });








    // gastronomy js
    // ===== ANIMACIONES PARA PÁGINAS DE CARRERAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición para elementos
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Elementos a animar (incluyendo nuevos elementos de gastronomía)
    const elementsToAnimate = document.querySelectorAll(
        '.competencia-card, .info-box, .campo-trabajo, .plan-estudios, .carrera-cta, .perfil-item, .puestos-trabajo, .puesto-badge, .especialidades-gastronomicas, .especialidad-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        animateOnScroll.observe(el);
    });

    // Efecto hover mejorado para tarjetas de competencias
    const competenciaCards = document.querySelectorAll('.competencia-card');
    competenciaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover para items de información
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Efecto hover para badges de puestos de trabajo
    const puestoBadges = document.querySelectorAll('.puesto-badge');
    puestoBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Efecto hover para especialidades gastronómicas
    const especialidadItems = document.querySelectorAll('.especialidad-item');
    especialidadItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contador de elementos (opcional)
    function actualizarEstadisticas() {
        const competencias = document.querySelectorAll('.competencia-card').length;
        const camposTrabajo = document.querySelectorAll('.campo-trabajo li').length;
        const puestosTrabajo = document.querySelectorAll('.puesto-badge').length;
        const especialidades = document.querySelectorAll('.especialidad-item').length;
        
        const statsElement = document.createElement('div');
        statsElement.className = 'carrera-stats';
        statsElement.innerHTML = `
            <div style="text-align: center; margin: 2rem 0; padding: 1rem; background: var(--color-light); border-radius: 10px;">
                <p style="color: var(--color-primary); font-size: 0.9rem; margin: 0;">
                    <strong>${competencias}</strong> competencias • 
                    <strong>${camposTrabajo}</strong> sectores • 
                    <strong>${puestosTrabajo}</strong> puestos • 
                    <strong>${especialidades}</strong> especialidades
                </p>
            </div>
        `;
        
        const carreraDescripcion = document.querySelector('.carrera-descripcion');
        if (carreraDescripcion && !document.querySelector('.carrera-stats')) {
            carreraDescripcion.parentNode.insertBefore(statsElement, carreraDescripcion.nextSibling);
        }
    }

    // Llamar la función después de cargar el DOM
    setTimeout(actualizarEstadisticas, 1000);

    // Efecto de scroll suave para navegación interna
    document.querySelectorAll('.carrera-sidebar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Efecto de carga progresiva para imágenes
    const images = document.querySelectorAll('.carrera-banner-image img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.8s ease';
        
        img.onload = function() {
            this.style.opacity = '1';
        };
        
        // Si la imagen ya está cargada
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});
});