/**
 * CARRUSEL MODERNO UTU - VERSIÓN CORREGIDA
 * Controles integrados, optimizado para 5 slides
 */

class CarruselModerno {
    constructor() {
        this.carrusel = document.querySelector('.carousel-moderno');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.controles = {
            prev: document.querySelectorAll('.control-btn.prev'),
            next: document.querySelectorAll('.control-btn.next'),
            playPause: document.querySelectorAll('.play-pause'),
            dots: document.querySelectorAll('.carousel-dot')
        };
        
        // Configuración optimizada
        this.config = {
            autoplay: true,
            intervalo: 5000,
            loop: true,
            maxSlides: 5 // Soporte para hasta 5 slides
        };
        
        // Estado
        this.indexActual = 0;
        this.totalSlides = Math.min(this.slides.length, this.config.maxSlides);
        this.reproduciendo = true;
        this.intervaloId = null;
        
        this.inicializar();
    }
    
    inicializar() {
        if (this.slides.length === 0) {
            console.error('No se encontraron slides');
            return;
        }
        
        // Validar y limitar slides a 5
        this.validarSlides();
        
        // Mostrar primer slide
        this.mostrarSlide(0);
        
        // Configurar eventos
        this.configurarEventos();
        
        // Iniciar autoplay
        this.iniciarAutoplay();
        
        // Actualizar icono inicial
        this.actualizarIconoPlayPause();
        
        console.log(`🚀 Carrusel UTU inicializado con ${this.totalSlides} slides`);
    }
    
    validarSlides() {
        // Ocultar slides extras si hay más de 5
        this.slides.forEach((slide, index) => {
            if (index >= this.config.maxSlides) {
                slide.style.display = 'none';
            }
        });
    }
    
    mostrarSlide(index) {
        // Validar índice
        if (index < 0 || index >= this.totalSlides) {
            if (this.config.loop) {
                index = (index + this.totalSlides) % this.totalSlides;
            } else {
                index = Math.max(0, Math.min(index, this.totalSlides - 1));
            }
        }
        
        // Ocultar todos los slides
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.visibility = 'hidden';
            slide.style.zIndex = '1';
        });
        
        // Mostrar slide actual
        this.slides[index].classList.add('active');
        this.slides[index].style.opacity = '1';
        this.slides[index].style.visibility = 'visible';
        this.slides[index].style.zIndex = '2';
        
        // Actualizar índice
        this.indexActual = index;
        
        // Actualizar controles
        this.actualizarDots();
        
        // Reiniciar autoplay si está reproduciendo
        if (this.reproduciendo) {
            this.reiniciarAutoplay();
        }
    }
    
    configurarEventos() {
        // Botones Anterior (todos)
        this.controles.prev.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.slideAnterior();
            });
        });
        
        // Botones Siguiente (todos)
        this.controles.next.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.slideSiguiente();
            });
        });
        
        // Botones Play/Pause (todos)
        this.controles.playPause.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePlayPause();
            });
        });
        
        // Dots
        this.controles.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(e.target.getAttribute('data-index'));
                if (!isNaN(index) && index < this.totalSlides) {
                    this.irASlide(index);
                }
            });
        });
        
        // Navegación por teclado
        document.addEventListener('keydown', (e) => {
            if (!this.carrusel) return;
            
            const rect = this.carrusel.getBoundingClientRect();
            const isInViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            
            if (isInViewport) {
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.slideAnterior();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.slideSiguiente();
                        break;
                    case ' ':
                    case 'Spacebar':
                        e.preventDefault();
                        this.togglePlayPause();
                        break;
                }
            }
        });
        
        // Pausar al interactuar con controles
        this.carrusel?.addEventListener('mouseenter', () => {
            if (this.reproduciendo) {
                this.pausarTemporalmente();
            }
        });
        
        this.carrusel?.addEventListener('mouseleave', () => {
            if (this.reproduciendo) {
                this.reanudarAutoplay();
            }
        });
    }
    
    iniciarAutoplay() {
        if (this.intervaloId) {
            clearInterval(this.intervaloId);
        }
        
        this.intervaloId = setInterval(() => {
            if (this.reproduciendo) {
                this.slideSiguiente();
            }
        }, this.config.intervalo);
    }
    
    slideSiguiente() {
        let nuevoIndex = this.indexActual + 1;
        
        if (this.config.loop && nuevoIndex >= this.totalSlides) {
            nuevoIndex = 0;
        } else if (nuevoIndex >= this.totalSlides) {
            nuevoIndex = this.totalSlides - 1;
        }
        
        this.mostrarSlide(nuevoIndex);
    }
    
    slideAnterior() {
        let nuevoIndex = this.indexActual - 1;
        
        if (this.config.loop && nuevoIndex < 0) {
            nuevoIndex = this.totalSlides - 1;
        } else if (nuevoIndex < 0) {
            nuevoIndex = 0;
        }
        
        this.mostrarSlide(nuevoIndex);
    }
    
    irASlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.mostrarSlide(index);
        }
    }
    
    togglePlayPause() {
        this.reproduciendo = !this.reproduciendo;
        
        if (this.reproduciendo) {
            this.iniciarAutoplay();
        } else {
            if (this.intervaloId) {
                clearInterval(this.intervaloId);
                this.intervaloId = null;
            }
        }
        
        this.actualizarIconoPlayPause();
    }
    
    actualizarIconoPlayPause() {
        const icono = this.reproduciendo ? 'fa-pause' : 'fa-play';
        const label = this.reproduciendo ? 'Pausar reproducción automática' : 'Reproducir automáticamente';
        
        this.controles.playPause.forEach(btn => {
            const iconElement = btn.querySelector('i');
            if (iconElement) {
                iconElement.className = `fas ${icono}`;
            }
            btn.setAttribute('aria-label', label);
        });
    }
    
    actualizarDots() {
        this.controles.dots.forEach((dot, index) => {
            if (index === this.indexActual) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
            }
        });
    }
    
    pausarTemporalmente() {
        if (this.intervaloId) {
            clearInterval(this.intervaloId);
            this.intervaloId = null;
        }
    }
    
    reanudarAutoplay() {
        if (this.reproduciendo && !this.intervaloId) {
            this.iniciarAutoplay();
        }
    }
    
    reiniciarAutoplay() {
        this.pausarTemporalmente();
        this.reanudarAutoplay();
    }
    
    // Métodos públicos para control externo
    play() {
        this.reproduciendo = true;
        this.iniciarAutoplay();
        this.actualizarIconoPlayPause();
    }
    
    pause() {
        this.reproduciendo = false;
        this.pausarTemporalmente();
        this.actualizarIconoPlayPause();
    }
    
    nextSlide() {
        this.slideSiguiente();
    }
    
    prevSlide() {
        this.slideAnterior();
    }
    
    goToSlide(index) {
        this.irASlide(index);
    }
    
    // Método para destruir
    destruir() {
        if (this.intervaloId) {
            clearInterval(this.intervaloId);
            this.intervaloId = null;
        }
        
        // Remover event listeners
        console.log('Carrusel destruido correctamente');
    }
}

// Inicializar automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un poco para asegurar que todo esté cargado
    setTimeout(() => {
        try {
            window.carruselModerno = new CarruselModerno();
            
            // Exponer métodos globales
            window.UTUCarrusel = {
                play: () => window.carruselModerno?.play(),
                pause: () => window.carruselModerno?.pause(),
                next: () => window.carruselModerno?.nextSlide(),
                prev: () => window.carruselModerno?.prevSlide(),
                goTo: (index) => window.carruselModerno?.goToSlide(index)
            };
            
        } catch (error) {
            console.error('Error al inicializar el carrusel:', error);
        }
    }, 100);
});

// Fallback para navegadores antiguos
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        return setTimeout(callback, 16);
    };
}