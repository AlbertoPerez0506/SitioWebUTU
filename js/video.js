// Video Institucional - Carreras UT del Usumacinta
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del video
    const video = document.getElementById('institucional-video');
    const videoWrapper = video.parentElement;
    const playPauseBtn = document.querySelector('.play-pause');
    const playOverlayBtn = document.querySelector('.play-overlay-btn');
    const videoOverlay = document.querySelector('.video-overlay');
    const progressBar = document.querySelector('.progress-fill');
    const progressSlider = document.querySelector('.progress-slider');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const volumeBtn = document.querySelector('.volume-btn');
    const volumeSlider = document.querySelector('.volume-slider');
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const miniCards = document.querySelectorAll('.carrera-mini-card');

    // Formatear tiempo en mm:ss
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Actualizar controles del video
    function updateVideoControls() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
        progressSlider.value = progress;
        currentTimeEl.textContent = formatTime(video.currentTime);
        
        if (!isNaN(video.duration)) {
            durationEl.textContent = formatTime(video.duration);
        }
    }

    // Actualizar icono de play/pausa
    function updatePlayPauseIcon() {
        const icon = playPauseBtn.querySelector('i');
        icon.className = video.paused ? 'fas fa-play' : 'fas fa-pause';
        
        // Actualizar overlay
        if (!video.paused) {
            videoOverlay.classList.add('hidden');
        }
    }

    // Actualizar icono de volumen
    function updateVolumeIcon() {
        const icon = volumeBtn.querySelector('i');
        if (video.muted || video.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (video.volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    // Reproducir/pausar video
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            // Activar scroll reveal si existe
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(reveal => {
                if (!reveal.classList.contains('active')) {
                    reveal.classList.add('active');
                }
            });
        } else {
            video.pause();
        }
        updatePlayPauseIcon();
    }

    // Ir a un tiempo específico del video
    function goToTime(timeInSeconds) {
        video.currentTime = timeInSeconds;
        if (video.paused) {
            video.play();
            updatePlayPauseIcon();
        }
    }

    // Alternar pantalla completa
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            videoWrapper.requestFullscreen().catch(err => {
                console.log(`Error al intentar pantalla completa: ${err.message}`);
            });
            fullscreenBtn.querySelector('i').className = 'fas fa-compress';
        } else {
            document.exitFullscreen();
            fullscreenBtn.querySelector('i').className = 'fas fa-expand';
        }
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    playOverlayBtn.addEventListener('click', function(e) {
        e.preventDefault();
        togglePlayPause();
        videoOverlay.classList.add('hidden');
    });

    video.addEventListener('click', togglePlayPause);
    video.addEventListener('play', updatePlayPauseIcon);
    video.addEventListener('pause', updatePlayPauseIcon);

    // Actualizar progreso del video
    video.addEventListener('timeupdate', updateVideoControls);

    // Actualizar duración cuando esté disponible
    video.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(video.duration);
    });

    // Control deslizante de progreso
    progressSlider.addEventListener('input', function() {
        const value = this.value;
        progressBar.style.width = `${value}%`;
        video.currentTime = (value / 100) * video.duration;
    });

    // Control de volumen
    volumeBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        updateVolumeIcon();
    });

    volumeSlider.addEventListener('input', function() {
        video.volume = this.value / 100;
        video.muted = video.volume === 0;
        updateVolumeIcon();
    });

    video.addEventListener('volumechange', updateVolumeIcon);

    // Pantalla completa
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Salir de pantalla completa con ESC
    document.addEventListener('fullscreenchange', function() {
        const icon = fullscreenBtn.querySelector('i');
        icon.className = document.fullscreenElement ? 'fas fa-compress' : 'fas fa-expand';
    });

    // Navegación por carreras destacadas
    miniCards.forEach(card => {
        card.addEventListener('click', function() {
            const timeText = this.getAttribute('data-time');
            const [minutes, seconds] = timeText.split(':').map(Number);
            const timeInSeconds = (minutes * 60) + seconds;
            
            goToTime(timeInSeconds);
            
            // Resaltar la tarjeta seleccionada
            miniCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            // Agregar efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Pausar video cuando no está en vista (opcional)
    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && !video.paused) {
                video.pause();
                updatePlayPauseIcon();
            }
        });
    }, observerOptions);

    observer.observe(video);

    // Preload del video después de cargar la página
    window.addEventListener('load', function() {
        setTimeout(() => {
            video.load();
        }, 1000);
    });
});

// Scroll reveal para la sección
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar una vez al cargar
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
    initScrollReveal();
}