// Carrusel Hero - Script optimizado
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.index-hero-slide');
        this.indicators = document.querySelectorAll('.index-indicator');
        this.prevBtn = document.querySelector('.index-carousel-control.prev');
        this.nextBtn = document.querySelector('.index-carousel-control.next');
        this.playBtn = document.querySelector('.index-carousel-play');
        this.currentSlideEl = document.querySelector('.index-current-slide');
        this.totalSlidesEl = document.querySelector('.index-total-slides');
        
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isPlaying = true;
        this.slideDuration = 5000; // 5 segundos
        this.transitionDuration = 1000; // 1 segundo
        
        this.init();
    }
    
    init() {
        // Configurar total de slides
        if (this.totalSlidesEl) {
            this.totalSlidesEl.textContent = this.slides.length;
        }
        
        // Configurar event listeners
        this.setupEventListeners();
        
        // Preload de imágenes para mejor experiencia
        this.preloadImages();
        
        // Iniciar carrusel
        this.startSlideShow();
    }
    
    setupEventListeners() {
        // Botones anterior/siguiente
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Botón play/pause
        if (this.playBtn) {
            this.playBtn.addEventListener('click', () => this.togglePlayPause());
        }
        
        // Indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pausar al pasar el mouse
        const carousel = document.querySelector('.index-hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                if (this.isPlaying) {
                    this.stopSlideShow();
                }
            });
            
            carousel.addEventListener('mouseleave', () => {
                if (this.isPlaying) {
                    this.startSlideShow();
                }
            });
        }
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            } else if (e.key === ' ') {
                e.preventDefault();
                this.togglePlayPause();
            }
        });
        
        // Soporte para swipe en móviles
        this.setupTouchEvents();
    }
    
    setupTouchEvents() {
        let startX = 0;
        let endX = 0;
        const threshold = 50; // Mínimo desplazamiento para considerar swipe
        
        const carousel = document.querySelector('.index-hero-carousel');
        if (!carousel) return;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        carousel.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', () => {
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swipe izquierda = siguiente slide
                    this.nextSlide();
                } else {
                    // Swipe derecha = slide anterior
                    this.prevSlide();
                }
            }
        }, { passive: true });
    }
    
    preloadImages() {
        // Preload de imágenes para transiciones más suaves
        this.slides.forEach((slide, index) => {
            const bg = slide.querySelector('.index-hero-bg');
            if (bg) {
                const img = new Image();
                const bgImage = getComputedStyle(bg).backgroundImage;
                const url = bgImage.slice(5, -2); // Extraer URL de background-image
                img.src = url;
            }
        });
    }
    
    startSlideShow() {
        this.stopSlideShow(); // Detener cualquier intervalo existente
        
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
        
        this.isPlaying = true;
        this.updatePlayButton();
    }
    
    stopSlideShow() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    togglePlayPause() {
        if (this.isPlaying) {
            this.stopSlideShow();
        } else {
            this.startSlideShow();
        }
        this.isPlaying = !this.isPlaying;
        this.updatePlayButton();
    }
    
    updatePlayButton() {
        if (!this.playBtn) return;
        
        if (this.isPlaying) {
            this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.playBtn.setAttribute('aria-label', 'Pausar carrusel');
        } else {
            this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.playBtn.setAttribute('aria-label', 'Reproducir carrusel');
        }
    }
    
    goToSlide(index) {
        // Validar índice
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;
        
        // Remover clase active del slide actual
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Actualizar slide actual
        this.currentSlide = index;
        
        // Agregar clase active al nuevo slide
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        // Actualizar contador
        if (this.currentSlideEl) {
            this.currentSlideEl.textContent = this.currentSlide + 1;
        }
        
        // Reiniciar intervalo si está activo
        if (this.isPlaying) {
            this.stopSlideShow();
            this.startSlideShow();
        }
    }
    
    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    
    // Método para cambiar la duración del slide
    setSlideDuration(duration) {
        this.slideDuration = duration;
        if (this.isPlaying) {
            this.stopSlideShow();
            this.startSlideShow();
        }
    }
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const heroCarousel = new HeroCarousel();
    
    // Hacer disponible globalmente para depuración
    window.heroCarousel = heroCarousel;
    
    // Inicializar animaciones de entrada
    initScrollAnimations();
});

// Animaciones al hacer scroll (simplificado)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll(
        '.index-modelo-feature, .index-carrera-card, .index-galeria-item, .index-noticia-card, .index-sitio-card'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}