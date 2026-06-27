// ===========================================
// JAVASCRIPT ESPECÍFICO PARA CONTADURÍA
// - Efectos financieros y animaciones numéricas
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('💰 Inicializando efectos de Contaduría...');
    
    // === ANIMACIÓN DE GRÁFICAS Y NÚMEROS ===
    function initFinancialAnimations() {
        const financialContainer = document.querySelector('.contabilidad-elements');
        if (!financialContainer) return;
        
        // Crear elementos de números flotantes
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '$', '€', '¢'];
        
        for (let i = 0; i < 12; i++) {
            const numberElement = document.createElement('div');
            numberElement.className = 'floating-number';
            numberElement.textContent = numbers[Math.floor(Math.random() * numbers.length)];
            numberElement.style.cssText = `
                position: absolute;
                font-family: 'Courier New', monospace;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.3 + 0.1};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float-number ${Math.random() * 8 + 4}s infinite linear;
                z-index: 1;
                pointer-events: none;
                user-select: none;
                color: ${Math.random() > 0.5 ? 'var(--contabilidad-accent)' : 'var(--contabilidad-success)'};
            `;
            financialContainer.appendChild(numberElement);
        }
        
        // Agregar animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-number {
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
            '.contabilidad-card, .contabilidad-sidebar-card, .contabilidad-tool-card, .contabilidad-value-card, .contabilidad-feature'
        );
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('contabilidad-reveal', 'active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('contabilidad-reveal');
            revealObserver.observe(el);
        });
    }
    
    // === EFECTOS HOVER PARA ELEMENTOS FINANCIEROS ===
    function initHoverEffects() {
        // Efecto para tarjetas de competencia
        const compItems = document.querySelectorAll('.contabilidad-comp-item');
        compItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.contabilidad-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
                this.style.boxShadow = '0 10px 25px rgba(78, 84, 200, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.contabilidad-comp-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Efecto para badges de puestos
        const puestoBadges = document.querySelectorAll('.contabilidad-puesto-badge');
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
        
        // Efecto para herramientas
        const toolCards = document.querySelectorAll('.contabilidad-tool-card');
        toolCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.contabilidad-tool-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.contabilidad-tool-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
    }
    
   // === ANIMACIÓN DE CONTADORES ESTADÍSTICOS - VERSIÓN SIMPLIFICADA ===
function initStatisticsCounters() {
    const statNumbers = document.querySelectorAll('.contabilidad-stat-number');
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent;
        
        // Solo animar el que es 100%
        if (originalText === '100%') {
            animatePercentage(stat);
        }
        // Los otros dos se quedan como están
        else if (originalText === '∞') {
            stat.textContent = '∞';
        }
        else if (originalText === '#1') {
            stat.textContent = '#1';
        }
    });
    
    function animatePercentage(element) {
        let current = 0;
        const target = 100;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                element.textContent = target + '%';
            } else {
                element.textContent = Math.floor(current) + '%';
            }
        }, 16);
    }
}
    
    // === EFECTO DE CALCULADORA INTERACTIVA ===
    function initCalculatorEffect() {
        const calculatorIcon = document.querySelector('.contabilidad-calculator');
        if (!calculatorIcon) return;
        
        calculatorIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        calculatorIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    }
    
    // === SIMULACIÓN DE CÁLCULOS FINANCIEROS ===
    function initFinancialCalculations() {
        const valueCards = document.querySelectorAll('.contabilidad-value-card');
        
        valueCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Efecto visual al hacer clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Obtener información del valor
                const valueName = this.querySelector('h4').textContent;
                const valueDesc = this.querySelector('p').textContent;
                
                // Mostrar información en consola
                console.log(`Valor Profesional: ${valueName}`);
                console.log(`Descripción: ${valueDesc}`);
                
                // Aquí podrías implementar un modal con más información
                // showValueInfoModal(valueName, valueDesc);
            });
        });
    }
    
    // === EFECTO DE TEXTO ANIMADO EN BANNER ===
    function initBannerTextAnimation() {
        const bannerWords = document.querySelectorAll('.contabilidad-banner-word');
        
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
    
    // === ANIMACIÓN DE BARRAS DE GRÁFICA ===
    function initGraphBarsAnimation() {
        const graphBars = document.querySelectorAll('.graph-bar');
        
        graphBars.forEach((bar, index) => {
            const height = bar.style.height;
            bar.style.height = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'height 1.5s ease';
                bar.style.height = height;
            }, index * 200);
        });
    }
    
    // === INICIALIZAR TODAS LAS FUNCIONALIDADES ===
    function initAll() {
        console.log('📊 Inicializando efectos financieros...');
        
        initFinancialAnimations();
        initScrollReveal();
        initHoverEffects();
        initCalculatorEffect();
        initFinancialCalculations();
        initBannerTextAnimation();
        initGraphBarsAnimation();
        
        // Iniciar animaciones de estadísticas después de un delay
        setTimeout(() => {
            initStatisticsCounters();
        }, 1500);
        
        console.log('✅ Efectos de Contaduría inicializados correctamente');
    }
    
    // Esperar a que todo esté cargado
    window.addEventListener('load', initAll);
    
    // También ejecutar al cargar el DOM por si acaso
    initAll();
});

// === FUNCIONES GLOBALES PARA CONTADURÍA ===

/**
 * Crear efecto de billetes flotantes
 * @param {HTMLElement} container - Contenedor donde agregar billetes
 * @param {number} count - Cantidad de billetes
 */
function createFloatingBills(container, count = 10) {
    const bills = ['💵', '💶', '💷', '💴', '💰', '💎', '💳', '🏦'];
    
    for (let i = 0; i < count; i++) {
        const bill = document.createElement('div');
        bill.className = 'floating-bill';
        bill.textContent = bills[Math.floor(Math.random() * bills.length)];
        bill.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            opacity: ${Math.random() * 0.2 + 0.1};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-bill ${Math.random() * 6 + 3}s infinite ease-in-out;
            z-index: 1;
            pointer-events: none;
            user-select: none;
        `;
        container.appendChild(bill);
    }
    
    // Agregar animación si no existe
    if (!document.querySelector('#bill-animation')) {
        const style = document.createElement('style');
        style.id = 'bill-animation';
        style.textContent = `
            @keyframes float-bill {
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
 * Simular cálculo financiero (animación de números)
 * @param {HTMLElement} element - Elemento donde mostrar el cálculo
 * @param {number} start - Valor inicial
 * @param {number} end - Valor final
 * @param {number} duration - Duración en ms
 * @param {string} format - Formato (currency, percent, number)
 */
function simulateFinancialCalculation(element, start, end, duration = 2000, format = 'number') {
    let current = start;
    const increment = (end - start) / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            let formattedValue;
            switch(format) {
                case 'currency':
                    formattedValue = '$' + end.toLocaleString('es-MX');
                    break;
                case 'percent':
                    formattedValue = end + '%';
                    break;
                default:
                    formattedValue = end.toLocaleString('es-MX');
            }
            element.textContent = formattedValue;
            clearInterval(timer);
        } else {
            let formattedValue;
            switch(format) {
                case 'currency':
                    formattedValue = '$' + Math.floor(current).toLocaleString('es-MX');
                    break;
                case 'percent':
                    formattedValue = Math.floor(current) + '%';
                    break;
                default:
                    formattedValue = Math.floor(current).toLocaleString('es-MX');
            }
            element.textContent = formattedValue;
        }
    }, 16);
}

// Exportar funciones para uso global
window.ContaduriaEffects = {
    createFloatingBills,
    simulateFinancialCalculation
};