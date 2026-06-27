// ===========================================
// JAVASCRIPT ESPECÍFICO PARA TURISMO
// - Efectos de viaje, animaciones de exploración y experiencia turística
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✈️ Inicializando efectos de Turismo...');
    
    // === ANIMACIÓN DE EXPLORACIÓN Y VIAJE ===
    function initTravelAnimations() {
        const travelContainer = document.querySelector('.turismo-elements');
        if (!travelContainer) return;
        
        // Crear elementos de viaje flotantes
        const travelIcons = ['✈️', '🏝️', '🗺️', '🧳', '🌍', '🏨', '🚁', '🚢', '⛰️', '🏛️'];
        
        for (let i = 0; i < 15; i++) {
            const travelElement = document.createElement('div');
            travelElement.className = 'turismo-travel-icon';
            travelElement.textContent = travelIcons[Math.floor(Math.random() * travelIcons.length)];
            travelElement.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 25 + 20}px;
                opacity: ${Math.random() * 0.2 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: travel-float ${Math.random() * 10 + 5}s infinite ease-in-out;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
                transform-origin: center;
            `;
            travelContainer.appendChild(travelElement);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes travel-float {
                0%, 100% {
                    transform: translate(0, 0) rotate(0deg) scale(1);
                    opacity: ${Math.random() * 0.2 + 0.1};
                }
                25% {
                    transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(5deg) scale(1.1);
                    opacity: ${Math.random() * 0.3 + 0.2};
                }
                50% {
                    transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px) rotate(0deg) scale(1);
                    opacity: ${Math.random() * 0.2 + 0.1};
                }
                75% {
                    transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(-5deg) scale(1.1);
                    opacity: ${Math.random() * 0.3 + 0.2};
                }
            }
            
            @keyframes passport-stamp {
                0% { transform: scale(0) rotate(0deg); opacity: 0; }
                50% { transform: scale(1.1) rotate(10deg); opacity: 1; }
                100% { transform: scale(1) rotate(0deg); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Efecto de sello de pasaporte en elementos importantes
        const importantElements = document.querySelectorAll('.turismo-cta-button, .turismo-plan-button');
        importantElements.forEach(element => {
            element.addEventListener('click', function(e) {
                createPassportStamp(this);
            });
        });
    }
    
    // === SCROLL REVEAL ANIMATIONS CON EFECTO DE VIAJE ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.turismo-card, .turismo-sidebar-card, .turismo-destino-card, ' +
            '.turismo-feature-card, .turismo-benefit, .turismo-comp-item'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('turismo-reveal', 'active');
                    
                    // Efecto especial para destinos turísticos
                    if (entry.target.classList.contains('turismo-destino-card')) {
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(-10px)';
                            setTimeout(() => {
                                entry.target.style.transform = 'translateY(0)';
                            }, 300);
                        }, 100);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('turismo-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS TURÍSTICOS ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compItems = document.querySelectorAll('.turismo-comp-item');
        compItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.turismo-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.15) rotate(8deg)';
                    icon.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    icon.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
                }
                this.style.boxShadow = '0 15px 35px rgba(3, 105, 161, 0.2)';
                this.style.borderColor = 'var(--turismo-accent)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.turismo-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                    icon.style.boxShadow = 'none';
                }
                this.style.boxShadow = '0 10px 25px rgba(3, 105, 161, 0.1)';
                this.style.borderColor = 'transparent';
            });
        });
        
        // Efecto para badges de puestos
        const puestoBadges = document.querySelectorAll('.turismo-puesto-badge');
        puestoBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.08)';
                this.style.boxShadow = '0 10px 25px rgba(3, 105, 161, 0.3)';
                
                // Efecto de brújula
                const compass = document.createElement('div');
                compass.innerHTML = '🧭';
                compass.style.cssText = `
                    position: absolute;
                    font-size: 20px;
                    top: -10px;
                    right: -10px;
                    animation: spin-compass 1s linear;
                    z-index: 10;
                `;
                this.appendChild(compass);
                
                setTimeout(() => {
                    if (compass.parentNode) {
                        compass.remove();
                    }
                }, 1000);
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para destinos turísticos
        const destinoCards = document.querySelectorAll('.turismo-destino-card');
        destinoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.turismo-destino-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.15) rotate(10deg)';
                    icon.style.transition = 'all 0.4s ease';
                }
                
                // Crear efecto de localización
                const locationPin = document.createElement('div');
                locationPin.innerHTML = '📍';
                locationPin.style.cssText = `
                    position: absolute;
                    font-size: 24px;
                    top: 10px;
                    right: 10px;
                    animation: bounce-pin 0.6s ease;
                    z-index: 2;
                `;
                this.appendChild(locationPin);
                
                setTimeout(() => {
                    if (locationPin.parentNode) {
                        locationPin.remove();
                    }
                }, 600);
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.turismo-destino-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
        
        // Efecto para items de información
        const infoItems = document.querySelectorAll('.turismo-info-item');
        infoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.turismo-info-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.color = 'var(--turismo-accent)';
                    icon.style.transition = 'all 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.turismo-info-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.color = 'var(--turismo-primary)';
                }
            });
        });
    }
    
    // === ANIMACIÓN DE ESTADÍSTICAS EN HERO - VERSIÓN SIMPLE ===
function initHeroStatsAnimation() {
    const statNumbers = document.querySelectorAll('.turismo-stat-number');
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent.trim();
        
        // Solo animar el porcentaje, los otros valores se muestran directamente
        if (originalText === '100%') {
            animateCounter(stat, 100, '%');
        }
        else if (originalText === '#1') {
            stat.textContent = '#1';
            // Opcional: agregar efecto visual
            stat.style.color = 'var(--turismo-accent)';
        }
        else if (originalText === '∞') {
            stat.textContent = '∞';
            // Opcional: agregar efecto visual
            stat.style.color = 'var(--turismo-secondary)';
        }
    });
    
    function animateCounter(element, target, suffix) {
        let current = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                element.textContent = target + suffix;
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
}
    
    // === SIMULACIÓN DE PLANIFICACIÓN DE VIAJE ===
    function initTravelPlanning() {
        const featureCards = document.querySelectorAll('.turismo-feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual de selección
                this.style.transform = 'scale(0.95)';
                this.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5)';
                
                // Sonido de maletín (comentado por defecto)
                // const suitcaseSound = new Audio('sounds/suitcase-open.mp3');
                // suitcaseSound.volume = 0.3;
                // suitcaseSound.play();
                
                // Obtener información de la característica
                const featureName = this.querySelector('h4').textContent;
                const featureDesc = this.querySelector('p').textContent;
                
                // Mostrar itinerario de viaje
                showTravelItinerary(featureName, featureDesc);
                
                // Restaurar estado
                setTimeout(() => {
                    this.style.transform = 'translateY(-5px) scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(3, 105, 161, 0.2)';
                }, 300);
            });
        });
    }
    
    // === EFECTO DE MAPA INTERACTIVO ===
    function initInteractiveMap() {
        const destinoCards = document.querySelectorAll('.turismo-destino-card');
        const travelLines = [];
        
        destinoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Crear línea de conexión visual
                const rect = this.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Conectar con otros destinos
                destinoCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        const otherRect = otherCard.getBoundingClientRect();
                        const otherCenterX = otherRect.left + otherRect.width / 2;
                        const otherCenterY = otherRect.top + otherRect.height / 2;
                        
                        const line = document.createElement('div');
                        line.style.cssText = `
                            position: fixed;
                            top: ${centerY}px;
                            left: ${centerX}px;
                            width: ${Math.sqrt(Math.pow(otherCenterX - centerX, 2) + Math.pow(otherCenterY - centerY, 2))}px;
                            height: 2px;
                            background: linear-gradient(90deg, var(--turismo-primary), var(--turismo-accent));
                            transform-origin: 0 0;
                            transform: rotate(${Math.atan2(otherCenterY - centerY, otherCenterX - centerX)}rad);
                            z-index: 9998;
                            pointer-events: none;
                            opacity: 0.3;
                            animation: line-glow 1.5s infinite alternate;
                        `;
                        
                        document.body.appendChild(line);
                        travelLines.push(line);
                    }
                });
            });
            
            card.addEventListener('mouseleave', function() {
                // Eliminar líneas de conexión
                travelLines.forEach(line => {
                    if (line.parentNode) {
                        line.remove();
                    }
                });
                travelLines.length = 0;
            });
        });
        
        // Agregar animación de línea
        const style = document.createElement('style');
        style.textContent = `
            @keyframes line-glow {
                0% { opacity: 0.2; }
                100% { opacity: 0.5; }
            }
            
            @keyframes bounce-pin {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // === FUNCIÓN PARA MOSTRAR ITINERARIO DE VIAJE ===
    function showTravelItinerary(title, description) {
        // Crear modal de itinerario
        const modal = document.createElement('div');
        modal.className = 'turismo-itinerary-modal';
        modal.innerHTML = `
            <div class="itinerary-content">
                <div class="itinerary-header">
                    <div class="itinerary-icon">
                        <i class="fas fa-map-marked-alt"></i>
                        <div class="icon-glow"></div>
                    </div>
                    <h3>📋 Itinerario de Viaje</h3>
                    <button class="close-itinerary">&times;</button>
                </div>
                
                <div class="itinerary-body">
                    <div class="destination-card">
                        <div class="destination-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="destination-info">
                            <h4>${title}</h4>
                            <p>${description}</p>
                        </div>
                    </div>
                    
                    <div class="itinerary-timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h5><i class="fas fa-plane-departure"></i> Preparación</h5>
                                <p>Planificación y organización del viaje</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h5><i class="fas fa-suitcase-rolling"></i> Experiencia</h5>
                                <p>Vivencia del destino turístico</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h5><i class="fas fa-camera"></i> Recuerdos</h5>
                                <p>Creación de memorias y fotografías</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="itinerary-action">
                        <button class="btn-plan-trip">
                            <i class="fas fa-calendar-alt"></i>
                            Planificar mi viaje
                        </button>
                    </div>
                </div>
            </div>
            <div class="itinerary-overlay"></div>
        `;
        
        document.body.appendChild(modal);
        
        // Estilos para el modal
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .turismo-itinerary-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: modal-fade-in 0.3s ease;
            }
            
            @keyframes modal-fade-in {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            .itinerary-content {
                background: white;
                border-radius: 20px;
                width: 90%;
                max-width: 500px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                overflow: hidden;
                position: relative;
            }
            
            .itinerary-header {
                background: linear-gradient(135deg, var(--turismo-primary), var(--turismo-dark));
                color: white;
                padding: 1.5rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                position: relative;
            }
            
            .itinerary-icon {
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
            }
            
            .icon-glow {
                position: absolute;
                width: 50px;
                height: 50px;
                background: inherit;
                border-radius: 12px;
                filter: blur(10px);
                opacity: 0.5;
            }
            
            .itinerary-header h3 {
                flex: 1;
                margin: 0;
                font-size: 1.2rem;
            }
            
            .close-itinerary {
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                line-height: 1;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s ease;
            }
            
            .close-itinerary:hover {
                transform: rotate(90deg);
            }
            
            .itinerary-body {
                padding: 1.5rem;
            }
            
            .destination-card {
                background: rgba(240, 249, 255, 0.5);
                border-radius: 15px;
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1.5rem;
                border: 1px solid rgba(3, 105, 161, 0.2);
            }
            
            .destination-icon {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, var(--turismo-primary), var(--turismo-accent));
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.2rem;
            }
            
            .destination-info h4 {
                margin: 0 0 0.3rem 0;
                color: var(--turismo-dark);
            }
            
            .destination-info p {
                margin: 0;
                color: #666;
                font-size: 0.9rem;
            }
            
            .itinerary-timeline {
                position: relative;
                padding-left: 30px;
                margin-bottom: 1.5rem;
            }
            
            .itinerary-timeline::before {
                content: '';
                position: absolute;
                left: 10px;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, var(--turismo-primary), var(--turismo-accent));
            }
            
            .timeline-item {
                position: relative;
                margin-bottom: 1rem;
            }
            
            .timeline-dot {
                position: absolute;
                left: -26px;
                top: 0;
                width: 12px;
                height: 12px;
                background: var(--turismo-accent);
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 0 0 3px var(--turismo-accent);
            }
            
            .timeline-content {
                background: white;
                padding: 0.8rem;
                border-radius: 10px;
                border: 1px solid #e9ecef;
            }
            
            .timeline-content h5 {
                margin: 0 0 0.3rem 0;
                color: var(--turismo-primary);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }
            
            .timeline-content p {
                margin: 0;
                color: #666;
                font-size: 0.8rem;
            }
            
            .itinerary-action {
                text-align: center;
            }
            
            .btn-plan-trip {
                background: linear-gradient(135deg, var(--turismo-primary), var(--turismo-accent));
                color: white;
                border: none;
                padding: 0.8rem 1.5rem;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                transition: all 0.3s ease;
            }
            
            .btn-plan-trip:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(3, 105, 161, 0.3);
            }
            
            .itinerary-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                z-index: 9999;
            }
        `;
        document.head.appendChild(modalStyle);
        
        // Eventos del modal
        modal.querySelector('.close-itinerary').addEventListener('click', () => {
            modal.style.animation = 'modal-fade-out 0.3s ease forwards';
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.remove();
                }
            }, 300);
        });
        
        modal.querySelector('.itinerary-overlay').addEventListener('click', () => {
            modal.querySelector('.close-itinerary').click();
        });
        
        modal.querySelector('.btn-plan-trip').addEventListener('click', () => {
            window.location.href = '../contacto.html';
        });
        
        // Agregar animación de salida
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.textContent = `
            @keyframes modal-fade-out {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9);
                }
            }
        `;
        document.head.appendChild(fadeOutStyle);
        
        // Auto-cerrar después de 10 segundos
        setTimeout(() => {
            if (modal.parentNode) {
                modal.style.animation = 'modal-fade-out 0.3s ease forwards';
                setTimeout(() => {
                    if (modal.parentNode) {
                        modal.remove();
                    }
                }, 300);
            }
        }, 10000);
    }
    
    // === EFECTO DE SELLO DE PASAAPORTE ===
    function createPassportStamp(element) {
        const stamp = document.createElement('div');
        stamp.innerHTML = '🛂';
        stamp.style.cssText = `
            position: absolute;
            font-size: 40px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: passport-stamp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            z-index: 100;
            pointer-events: none;
            filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.5));
        `;
        
        element.style.position = 'relative';
        element.appendChild(stamp);
        
        setTimeout(() => {
            if (stamp.parentNode) {
                stamp.remove();
            }
        }, 600);
    }
    
    // === ANIMACIÓN DE TEXTO EN BANNER ===
    function initBannerTextAnimation() {
        const bannerWords = document.querySelectorAll('.turismo-banner-word');
        
        bannerWords.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translateY(30px) rotateX(90deg)';
            
            setTimeout(() => {
                word.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                word.style.opacity = '1';
                word.style.transform = 'translateY(0) rotateX(0deg)';
            }, index * 300);
        });
    }
    
    // === EFECTO DE MALETA VIAJERA ===
    function initSuitcaseEffect() {
        const ctaButton = document.querySelector('.turismo-cta-button');
        if (!ctaButton) return;
        
        let suitcaseTimeout;
        
        ctaButton.addEventListener('mouseenter', function() {
            clearTimeout(suitcaseTimeout);
            
            // Crear maleta flotante
            const suitcase = document.createElement('div');
            suitcase.innerHTML = '🧳';
            suitcase.style.cssText = `
                position: fixed;
                font-size: 30px;
                top: 20px;
                right: 20px;
                animation: suitcase-travel 2s ease-in-out;
                z-index: 1000;
                pointer-events: none;
                filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.5));
            `;
            
            document.body.appendChild(suitcase);
            
            // Agregar animación CSS si no existe
            if (!document.querySelector('#suitcase-animation')) {
                const style = document.createElement('style');
                style.id = 'suitcase-animation';
                style.textContent = `
                    @keyframes suitcase-travel {
                        0% {
                            transform: translate(0, 0) rotate(0deg);
                            opacity: 1;
                        }
                        25% {
                            transform: translate(-100px, -50px) rotate(-20deg);
                            opacity: 0.8;
                        }
                        50% {
                            transform: translate(-200px, 0) rotate(0deg);
                            opacity: 0.6;
                        }
                        75% {
                            transform: translate(-300px, 50px) rotate(20deg);
                            opacity: 0.3;
                        }
                        100% {
                            transform: translate(-400px, 0) rotate(0deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            suitcaseTimeout = setTimeout(() => {
                if (suitcase.parentNode) {
                    suitcase.remove();
                }
            }, 2000);
        });
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('🧭 Inicializando efectos de Turismo...');
        
        // Inicializar animaciones básicas
        initTravelAnimations();
        initScrollReveal();
        initHoverEffects();
        initBannerTextAnimation();
        initSuitcaseEffect();
        
        // Inicializar después de un delay
        setTimeout(() => {
            initHeroStatsAnimation();
            initTravelPlanning();
            initInteractiveMap();
        }, 1500);
        
        console.log('✅ Efectos de Turismo inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA TURISMO ===

/**
 * Crear efecto de brújula animada
 * @param {HTMLElement} container - Contenedor donde agregar la brújula
 * @param {number} duration - Duración de la animación en ms
 */
function createCompassAnimation(container, duration = 3000) {
    const compass = document.createElement('div');
    compass.className = 'turismo-compass-animation';
    compass.innerHTML = '🧭';
    compass.style.cssText = `
        position: absolute;
        font-size: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: spin-compass ${duration}ms linear infinite;
        z-index: 100;
        pointer-events: none;
        filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.5));
    `;
    
    container.style.position = 'relative';
    container.appendChild(compass);
    
    return compass;
}

/**
 * Simular planificación de viaje
 * @param {HTMLElement} element - Elemento donde mostrar el progreso
 * @param {Array} destinations - Array de destinos
 */
function simulateTravelPlanning(element, destinations) {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 100%;
        height: 10px;
        background: rgba(3, 105, 161, 0.1);
        border-radius: 5px;
        overflow: hidden;
        margin-top: 10px;
        position: relative;
    `;
    
    const progressFill = document.createElement('div');
    progressFill.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: linear-gradient(90deg, var(--turismo-primary), var(--turismo-accent));
        width: 0%;
        transition: width 0.5s ease;
        border-radius: 5px;
    `;
    
    progressBar.appendChild(progressFill);
    element.appendChild(progressBar);
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 100 / destinations.length;
        progressFill.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // Mostrar mensaje de éxito
            const successMsg = document.createElement('div');
            successMsg.innerHTML = `
                <div style="
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    border-radius: 10px;
                    padding: 10px;
                    margin-top: 10px;
                    text-align: center;
                    color: var(--turismo-secondary);
                    font-weight: 600;
                    animation: fade-in 0.5s ease;
                ">
                    <i class="fas fa-check-circle"></i>
                    ¡Viaje planificado exitosamente!
                </div>
            `;
            
            element.appendChild(successMsg);
        }
    }, 500);
}

// Exportar funciones para uso global
window.TurismoEffects = {
    createCompassAnimation,
    simulateTravelPlanning,
    showTravelItinerary: function(title, description) {
        // Esta función ya está definida internamente
        console.log('Use el evento click en las tarjetas para ver itinerarios');
    }
};

// Agregar estilos globales para animaciones
const globalStyles = document.createElement('style');
globalStyles.textContent = `
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes spin-compass {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(globalStyles);