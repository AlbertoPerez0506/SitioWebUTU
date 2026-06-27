// ===========================================
// JAVASCRIPT ESPECÍFICO PARA NEGOCIOS Y MERCADOTECNIA
// - Efectos empresariales y animaciones corporativas
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Inicializando efectos de Negocios y Mercadotecnia...');
    
    // === ANIMACIÓN DE GRÁFICAS EMPRESARIALES ===
    function initChartAnimations() {
        const chartContainer = document.querySelector('.negocios-elements');
        if (!chartContainer) return;
        
        // Crear elementos de gráficas adicionales
        const chartTypes = ['📈', '💹', '📊', '💰', '💎', '🏆', '🎯', '🚀'];
        
        for (let i = 0; i < 10; i++) {
            const chartElement = document.createElement('div');
            chartElement.className = 'chart-float';
            chartElement.textContent = chartTypes[Math.floor(Math.random() * chartTypes.length)];
            chartElement.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-chart ${Math.random() * 8 + 4}s infinite linear;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                filter: drop-shadow(0 0 5px rgba(255, 107, 53, 0.3));
            `;
            chartContainer.appendChild(chartElement);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-chart {
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
    }
    
    // === SCROLL REVEAL ANIMATIONS ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.negocios-card, .negocios-sidebar-card, .negocios-area-card, .negocios-benefit, .negocios-feature'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('negocios-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('negocios-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS EMPRESARIALES ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compItems = document.querySelectorAll('.negocios-comp-item');
        compItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.negocios-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                this.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.negocios-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Efecto para badges de puestos
        const puestoBadges = document.querySelectorAll('.negocios-puesto-badge');
        puestoBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(44, 52, 143, 0.3)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Efecto para áreas de desempeño
        const areaCards = document.querySelectorAll('.negocios-area-card');
        areaCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.negocios-area-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.negocios-area-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }
    
    // === ANIMACIÓN DE CRECIMIENTO DE ESTADÍSTICAS - VERSIÓN SIMPLE ===
function initStatisticsGrowth() {
    const statNumbers = document.querySelectorAll('.negocios-stat-number');
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent.trim();
        
        // Solo animar los valores numéricos
        if (originalText === '100%') {
            animateCounter(stat, 100, '%');
        }
        else if (originalText === '8+') {
            animateCounter(stat, 8, '+');
        }
        // El infinito se muestra directamente
        else if (originalText === '∞') {
            stat.textContent = '∞';
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
    // === EFECTO DE BRILLO EN ICONOS ===
    function initIconGlowEffect() {
        const icons = document.querySelectorAll('.negocios-feature-icon, .negocios-area-icon');
        
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // === SIMULACIÓN DE ANÁLISIS DE MERCADO INTERACTIVO ===
    function initMarketAnalysisSimulation() {
        const areaCards = document.querySelectorAll('.negocios-area-card');
        
        areaCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual al hacer clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Obtener información del área
                const areaName = this.querySelector('h4').textContent;
                const areaDesc = this.querySelector('p').textContent;
                
                // Mostrar información en consola (podría ser un modal)
                console.log(`Área de Desempeño: ${areaName}`);
                console.log(`Descripción: ${areaDesc}`);
                
                // Aquí podrías implementar un modal con más información
                // showAreaInfoModal(areaName, areaDesc);
            });
        });
    }
    
    // === EFECTO DE TEXTO ANIMADO EN BANNER ===
    function initBannerTextAnimation() {
        const bannerWords = document.querySelectorAll('.negocios-banner-word');
        
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
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('📈 Inicializando efectos empresariales...');
        
        initChartAnimations();
        initScrollReveal();
        initHoverEffects();
        initIconGlowEffect();
        initMarketAnalysisSimulation();
        initBannerTextAnimation();
        
        // Iniciar animaciones de estadísticas después de un delay
        setTimeout(() => {
            initStatisticsGrowth();
        }, 1500);
        
        console.log('✅ Efectos de Negocios y Mercadotecnia inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA NEGOCIOS ===

/**
 * Crear efecto de monedas flotantes
 * @param {HTMLElement} container - Contenedor donde agregar monedas
 * @param {number} count - Cantidad de monedas
 */
function createFloatingCoins(container, count = 12) {
    const coins = ['💰', '💵', '💎', '💼', '📈', '💹', '🏦', '💳'];
    
    for (let i = 0; i < count; i++) {
        const coin = document.createElement('div');
        coin.className = 'floating-coin';
        coin.textContent = coins[Math.floor(Math.random() * coins.length)];
        coin.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            opacity: ${Math.random() * 0.2 + 0.1};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-coin ${Math.random() * 6 + 3}s infinite ease-in-out;
            z-index: 1;
            pointer-events: none;
            user-select: none;
        `;
        container.appendChild(coin);
    }
    
    // Agregar animación si no existe
    if (!document.querySelector('#coin-animation')) {
        const style = document.createElement('style');
        style.id = 'coin-animation';
        style.textContent = `
            @keyframes float-coin {
                0%, 100% {
                    transform: translateY(0) rotate(0deg);
                }
                50% {
                    transform: translateY(-15px) rotate(180deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Simular crecimiento empresarial (animación de números)
 * @param {HTMLElement} element - Elemento donde mostrar el crecimiento
 * @param {number} start - Valor inicial
 * @param {number} end - Valor final
 * @param {number} duration - Duración en ms
 * @param {string} suffix - Sufijo (%, +, etc.)
 */
function simulateBusinessGrowth(element, start, end, duration = 2000, suffix = '') {
    let current = start;
    const increment = (end - start) / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Exportar funciones para uso global
window.NegociosEffects = {
    createFloatingCoins,
    simulateBusinessGrowth
};