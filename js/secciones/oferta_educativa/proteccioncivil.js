// ===========================================
// JAVASCRIPT ESPECÍFICO PARA PROTECCIÓN CIVIL
// - Efectos de emergencia y animaciones urgentes
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚨 Inicializando efectos de Protección Civil...');
    
    // === ANIMACIÓN DE SIRENA Y EMERGENCIA ===
    function initEmergencyAnimations() {
        const emergencyContainer = document.querySelector('.pc-emergency-elements');
        if (!emergencyContainer) return;
        
        // Crear elementos de emergencia flotantes
        const emergencyIcons = ['🚑', '🚒', '🚨', '⚠️', '🆘', '🚓', '🚁', '⚕️'];
        
        for (let i = 0; i < 12; i++) {
            const emergencyElement = document.createElement('div');
            emergencyElement.className = 'pc-floating-emergency';
            emergencyElement.textContent = emergencyIcons[i % emergencyIcons.length];
            emergencyElement.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-emergency ${Math.random() * 8 + 4}s infinite linear;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                filter: drop-shadow(0 0 8px rgba(220, 53, 69, 0.4));
            `;
            emergencyContainer.appendChild(emergencyElement);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-emergency {
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
        `;
        document.head.appendChild(style);
        
        // Efecto de parpadeo para la barra de emergencia
        const emergencyBar = document.querySelector('.pc-emergency-message i');
        if (emergencyBar) {
            setInterval(() => {
                emergencyBar.style.opacity = emergencyBar.style.opacity === '0.3' ? '1' : '0.3';
            }, 750);
        }
    }
    
    // === SCROLL REVEAL ANIMATIONS ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.pc-comp-card, .pc-profile-card, .pc-specialty-card, ' +
            '.pc-sidebar-card, .pc-sim-card, .pc-value-card, .pc-info-card'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pc-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('pc-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS DE EMERGENCIA ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compCards = document.querySelectorAll('.pc-comp-card');
        compCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.pc-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                this.style.boxShadow = '0 15px 40px rgba(220, 53, 69, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.pc-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
                this.style.boxShadow = '0 15px 40px rgba(220, 53, 69, 0.2)';
            });
        });
        
        // Efecto para badges de equipamiento
        const equipmentBadges = document.querySelectorAll('.pc-equipment-badge');
        equipmentBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(220, 53, 69, 0.4)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para items de trabajo
        const workItems = document.querySelectorAll('.pc-work-item');
        workItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.color = 'var(--pc-secondary)';
                    icon.style.transition = 'all 0.3s ease';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.color = 'var(--pc-primary)';
                }
            });
        });
        
        // Efecto para botones de acción
        const actionWords = document.querySelectorAll('.pc-action-word');
        actionWords.forEach(word => {
            word.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.1)';
                this.style.background = 'rgba(255, 255, 255, 0.3)';
            });
            
            word.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });
    }
    
   // === ANIMACIÓN DE ESTADÍSTICAS EN HERO - VERSIÓN SIMPLE ===
function initHeroStatsAnimation() {
    const statNumbers = document.querySelectorAll('.pc-stat-number');
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent;
        
        // Solo animar el que es 100%
        if (originalText === '100%') {
            animateCounter(stat, 100, '%');
        }
        // Los otros dos se quedan como están
        else if (originalText === '24/7') {
            stat.textContent = '24/7';
        }
        else if (originalText === '10+') {
            stat.textContent = '10+';
        }
    });
    
    function animateCounter(element, target, suffix = '') {
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
    // === SIMULACIÓN DE EMERGENCIA INTERACTIVA ===
    function initEmergencySimulation() {
        const simCards = document.querySelectorAll('.pc-sim-card');
        
        simCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual de emergencia
                this.style.transform = 'scale(0.95)';
                this.style.boxShadow = '0 0 30px rgba(220, 53, 69, 0.6)';
                
                // Sonido de emergencia (opcional, comentado por si prefieres sin sonido)
                // const emergencySound = new Audio('emergency-beep.mp3');
                // emergencySound.volume = 0.3;
                // emergencySound.play();
                
                // Obtener información del simulador
                const simName = this.querySelector('h4').textContent;
                const simDesc = this.querySelector('p').textContent;
                
                // Mostrar información de emergencia
                showEmergencyAlert(simName, simDesc);
                
                // Restaurar estado después de 300ms
                setTimeout(() => {
                    this.style.transform = 'translateY(-5px) scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(220, 53, 69, 0.2)';
                }, 300);
            });
        });
    }
    
    // === ALERTA DE EMERGENCIA VISUAL ===
    function showEmergencyAlert(title, description) {
        // Crear elemento de alerta
        const alertElement = document.createElement('div');
        alertElement.className = 'pc-emergency-alert';
        alertElement.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 15px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                border-left: 10px solid var(--pc-primary);
                z-index: 9999;
                max-width: 400px;
                width: 90%;
                text-align: center;
                animation: alert-popup 0.3s ease-out;
            ">
                <div style="
                    width: 60px;
                    height: 60px;
                    background: var(--pc-primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                ">
                    <i class="fas fa-exclamation-triangle" style="color: white; font-size: 1.5rem;"></i>
                </div>
                <h4 style="color: var(--pc-dark); margin-bottom: 0.5rem;">${title}</h4>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 1.5rem;">${description}</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: var(--pc-primary);
                    color: white;
                    border: none;
                    padding: 0.8rem 2rem;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">ENTENDIDO</button>
            </div>
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 9998;
            "></div>
        `;
        
        document.body.appendChild(alertElement);
        
        // Agregar animación CSS si no existe
        if (!document.querySelector('#alert-animation')) {
            const style = document.createElement('style');
            style.id = 'alert-animation';
            style.textContent = `
                @keyframes alert-popup {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -60%) scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (alertElement.parentNode) {
                alertElement.remove();
            }
        }, 5000);
    }
    
    // === EFECTO DE VIBRACIÓN PARA ELEMENTOS IMPORTANTES ===
    function initVibrationEffect() {
        const importantElements = document.querySelectorAll('.pc-cta-button, .pc-plan-button');
        
        importantElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'vibration 0.1s linear infinite';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.animation = 'none';
            });
        });
        
        // Agregar animación de vibración
        if (!document.querySelector('#vibration-animation')) {
            const style = document.createElement('style');
            style.id = 'vibration-animation';
            style.textContent = `
                @keyframes vibration {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('🚑 Inicializando efectos de emergencia...');
        
        initEmergencyAnimations();
        initScrollReveal();
        initHoverEffects();
        initHeroStatsAnimation();
        initEmergencySimulation();
        initVibrationEffect();
        
        console.log('✅ Efectos de Protección Civil inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA PROTECCIÓN CIVIL ===

/**
 * Crear efecto de alerta luminosa
 * @param {HTMLElement} element - Elemento a alertar
 * @param {number} duration - Duración en ms
 */
function createLightAlert(element, duration = 3000) {
    const originalBackground = element.style.background;
    const originalColor = element.style.color;
    
    // Secuencia de colores de alerta
    let colors = ['#dc3545', '#fd7e14', '#dc3545', '#fd7e14', '#dc3545'];
    let index = 0;
    
    const alertInterval = setInterval(() => {
        element.style.background = colors[index];
        element.style.color = 'white';
        element.style.transition = 'all 0.3s ease';
        index = (index + 1) % colors.length;
    }, 200);
    
    // Detener alerta después de la duración
    setTimeout(() => {
        clearInterval(alertInterval);
        element.style.background = originalBackground;
        element.style.color = originalColor;
    }, duration);
}

/**
 * Efecto de conteo regresivo para emergencia
 * @param {HTMLElement} element - Elemento donde mostrar el conteo
 * @param {number} seconds - Segundos para el conteo
 */
function emergencyCountdown(element, seconds = 10) {
    let count = seconds;
    
    element.textContent = count;
    element.style.color = 'var(--pc-primary)';
    element.style.fontWeight = 'bold';
    
    const countdown = setInterval(() => {
        count--;
        element.textContent = count;
        
        if (count <= 3) {
            element.style.color = 'var(--pc-secondary)';
            createLightAlert(element, 1000);
        }
        
        if (count <= 0) {
            clearInterval(countdown);
            element.textContent = '¡TIEMPO!';
            element.style.color = '#dc3545';
            element.style.animation = 'pulse 0.5s infinite alternate';
        }
    }, 1000);
}

// Exportar funciones para uso global
window.PCEffects = {
    createLightAlert,
    emergencyCountdown
};