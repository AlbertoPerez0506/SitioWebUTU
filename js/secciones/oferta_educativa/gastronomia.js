// ===========================================
// JAVASCRIPT ESPECÍFICO PARA GASTRONOMÍA
// - Efectos culinarios y animaciones gastronómicas
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🍳 Inicializando efectos de Gastronomía...');
    
    // === ANIMACIÓN DE INGREDIENTES FLOTANTES ===
    function initFloatingIngredients() {
        const gastroContainer = document.querySelector('.gastro-elements');
        if (!gastroContainer) return;
        
        // Crear más ingredientes flotantes
        const ingredients = ['🍅', '🧅', '🧄', '🥕', '🥦', '🥬', '🌽', '🍄', '🥑', '🍋', '🍓', '🍒'];
        
        for (let i = 0; i < 15; i++) {
            const ingredient = document.createElement('div');
            ingredient.className = 'floating-ingredient';
            ingredient.textContent = ingredients[Math.floor(Math.random() * ingredients.length)];
            ingredient.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 25 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-ingredient-delayed ${Math.random() * 6 + 4}s infinite ease-in-out;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                filter: drop-shadow(0 0 5px rgba(255, 87, 34, 0.3));
            `;
            gastroContainer.appendChild(ingredient);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-ingredient-delayed {
                0%, 100% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.5;
                }
                50% {
                    transform: translateY(-15px) rotate(${Math.random() * 20 - 10}deg);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // === SCROLL REVEAL ANIMATIONS ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.gastro-card, .gastro-sidebar-card, .gastro-facility-card, .gastro-innovation-feature, .gastro-feature'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('gastro-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('gastro-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS CULINARIOS ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compItems = document.querySelectorAll('.gastro-comp-item');
        compItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.gastro-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                    icon.style.boxShadow = '0 0 15px rgba(255, 87, 34, 0.5)';
                }
                this.style.boxShadow = '0 10px 25px rgba(255, 87, 34, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.gastro-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                    icon.style.boxShadow = 'none';
                }
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Efecto para badges de puestos
        const puestoBadges = document.querySelectorAll('.gastro-puesto-badge');
        puestoBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(211, 47, 47, 0.3)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para iconos de instalaciones
        const facilityIcons = document.querySelectorAll('.gastro-facility-icon');
        facilityIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // === ANIMACIÓN DE ESTADÍSTICAS GASTRONÓMICAS - VERSIÓN SIMPLE ===
function initGastroStatistics() {
    const statNumbers = document.querySelectorAll('.gastro-stat-number');
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent.trim();
        
        // Solo animar los valores que necesitan animación
        if (originalText === '100%') {
            animateCounter(stat, 100, '%');
        }
        else if (originalText === '5★') {
            animateCounter(stat, 5, '★');
        }
        // El infinito se muestra directamente
        else if (originalText === '∞') {
            stat.textContent = '∞';
            // Opcional: agregar efecto visual
            stat.style.color = '#21b395';
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
    
    // === EFECTO DE LLAMA INTERACTIVA ===
    function initFlameEffect() {
        const flameIcon = document.querySelector('.gastro-flame');
        if (!flameIcon) return;
        
        flameIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s ease';
            this.style.filter = 'drop-shadow(0 0 15px rgba(255, 87, 34, 0.8))';
        });
        
        flameIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'drop-shadow(0 0 10px rgba(255, 87, 34, 0.5))';
        });
    }
    
    // === SIMULACIÓN DE COCCIÓN INTERACTIVA ===
    function initCookingSimulation() {
        const featureCards = document.querySelectorAll('.gastro-feature');
        
        featureCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual al hacer clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Obtener información de la característica
                const featureName = this.querySelector('h4').textContent;
                const featureDesc = this.querySelector('p').textContent;
                
                // Mostrar información en consola
                console.log(`Característica: ${featureName}`);
                console.log(`Descripción: ${featureDesc}`);
                
                // Efecto visual adicional
                const icon = this.querySelector('.gastro-feature-icon');
                if (icon) {
                    icon.style.transform = 'rotate(360deg)';
                    icon.style.transition = 'transform 0.8s ease';
                    setTimeout(() => {
                        icon.style.transform = 'rotate(0)';
                    }, 800);
                }
            });
        });
    }
    
    // === EFECTO DE TEXTO ANIMADO EN BANNER ===
    function initBannerTextAnimation() {
        const bannerWords = document.querySelectorAll('.gastro-banner-word');
        
        bannerWords.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                word.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }
    
    // === ANIMACIÓN DE INGREDIENTES AL CARGAR ===
    function initIngredientsLoadAnimation() {
        const ingredients = document.querySelectorAll('.ingredient');
        
        ingredients.forEach((ingredient, index) => {
            ingredient.style.opacity = '0';
            ingredient.style.transform = 'translateY(50px) scale(0.5)';
            
            setTimeout(() => {
                ingredient.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                ingredient.style.opacity = '0.7';
                ingredient.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        });
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('👨‍🍳 Inicializando efectos culinarios...');
        
        initFloatingIngredients();
        initScrollReveal();
        initHoverEffects();
        initFlameEffect();
        initCookingSimulation();
        initBannerTextAnimation();
        initIngredientsLoadAnimation();
        
        // Iniciar animaciones de estadísticas después de un delay
        setTimeout(() => {
            initGastroStatistics();
        }, 1500);
        
        console.log('✅ Efectos de Gastronomía inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA GASTRONOMÍA ===

/**
 * Crear efecto de burbujas de cocción
 * @param {HTMLElement} container - Contenedor donde agregar burbujas
 * @param {number} count - Cantidad de burbujas
 */
function createCookingBubbles(container, count = 12) {
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'cooking-bubble';
        bubble.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(255, 87, 34, ${Math.random() * 0.2 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: bubble-rise ${Math.random() * 4 + 2}s infinite ease-in-out;
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
            @keyframes bubble-rise {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 0.1;
                }
                50% {
                    opacity: ${Math.random() * 0.3 + 0.2};
                }
                100% {
                    transform: translateY(-50px) scale(${Math.random() * 0.5 + 0.5});
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Simular proceso de cocción (animación de progreso)
 * @param {HTMLElement} element - Elemento donde mostrar el progreso
 * @param {number} duration - Duración en ms
 * @param {string} cookingType - Tipo de cocción (hervir, freír, hornear)
 */
function simulateCookingProcess(element, duration = 3000, cookingType = 'hervir') {
    let progress = 0;
    const increment = 100 / (duration / 50);
    
    const timer = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            element.textContent = '¡Listo! 🎉';
            element.style.color = 'var(--gastro-accent)';
            clearInterval(timer);
        } else {
            let cookingText;
            switch(cookingType) {
                case 'freír':
                    cookingText = 'Friendó... ' + Math.floor(progress) + '%';
                    break;
                case 'hornear':
                    cookingText = 'Horneando... ' + Math.floor(progress) + '%';
                    break;
                default:
                    cookingText = 'Hirviendo... ' + Math.floor(progress) + '%';
            }
            element.textContent = cookingText;
        }
    }, 50);
}

// Exportar funciones para uso global
window.GastroEffects = {
    createCookingBubbles,
    simulateCookingProcess
};