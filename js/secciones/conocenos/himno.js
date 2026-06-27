// ===========================================
// JAVASCRIPT ESPECÍFICO PARA HIMNO
// - Sistema de audio con letra sincronizada
// - Modos de visualización estático/sincronizado
// - Reproductor avanzado
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎵 Inicializando sistema de Himno UTU...');
    
    // Datos de la letra del himno con tiempos exactos
    const lyricsData = [
        { time: 9.01, text: "Universidad Tecnológica del Usumacinta" },
        { time: 17.90, text: "Fuerza que trabaja con espíritu y lealtad" },
        { time: 21.96, text: "Símbolo de mi Universidad" },
        { time: 25.23, text: "La herramienta técnica humanística y real" },
        { time: 29.37, text: "Que contribuye al desarrollo regional" },
        { time: 33.66, text: "Vamos por el rumbo del progreso y bienestar" },
        { time: 37.61, text: "Con profesionistas de un modelo innovador" },
        { time: 41.34, text: "Con un compromiso de cultural Nacional" },
        { time: 45.13, text: "En un nivel de educación muy superior." },
        { time: 48.57, text: "Universidad Tecnológica del Usumacinta" },
        { time: 60.94, text: "En la misión voy a triunfar" },
        { time: 64.79, text: "Porque soy emprendedor" },
        { time: 68.96, text: "Con un sistema de gestión de calidad" },
        { time: 72.25, text: "Y con el sector productivo y social" },
        { time: 76.30, text: "Universidad Tecnológica del Usumacinta" },
        { time: 85.56, text: "Trabajamos para transformar" },
        { time: 89.13, text: "Un estado nuevo de excelencia y calidad." },
        { time: 93.12, text: "Somos fuerza joven de un Tabasco ideal" },
        { time: 96.23, text: "Certificada a nivel internacional" },
        { time: 100.89, text: "Con tecnología de excelente calidad" },
        { time: 104.81, text: "Vinculando áreas del sistema empresarial" },
        { time: 108.83, text: "Con profesionistas de una gran capacidad" },
        { time: 112.11, text: "Contribuyendo al desarrollo nacional" },
        { time: 115.94, text: "Universidad Tecnológica del Usumacinta" },
        { time: 129.64, text: "Mi Universidad" }
    ];

    // Definición de estrofas
    const strofas = {
        primera: [
            "Universidad Tecnológica del Usumacinta",
            "Fuerza que trabaja con espíritu y lealtad",
            "Símbolo de mi Universidad",
            "La herramienta técnica humanística y real",
            "Que contribuye al desarrollo regional",
            "Vamos por el rumbo del progreso y bienestar",
            "Con profesionistas de un modelo innovador",
            "Con un compromiso de cultural Nacional",
            "En un nivel de educación muy superior."
        ],
        segunda: [
            "Universidad Tecnológica del Usumacinta",
            "En la misión voy a triunfar",
            "Porque soy emprendedor",
            "Con un sistema de gestión de calidad",
            "Y con el sector productivo y social",
            "Universidad Tecnológica del Usumacinta",
            "Trabajamos para transformar",
            "Un estado nuevo de excelencia y calidad."
        ],
        tercera: [
            "Somos fuerza joven de un Tabasco ideal",
            "Certificada a nivel internacional",
            "Con tecnología de excelente calidad",
            "Vinculando áreas del sistema empresarial",
            "Con profesionistas de una gran capacidad",
            "Contribuyendo al desarrollo nacional",
            "Universidad Tecnológica del Usumacinta",
            "Mi Universidad"
        ]
    };

    // Elementos del DOM
    const audio = document.getElementById('himnoAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeContainer = document.getElementById('volumeContainer');
    const repeatBtn = document.getElementById('repeatBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progressBar');
    const progressHandle = document.getElementById('progressHandle');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const statusText = document.getElementById('statusText');
    const currentLine = document.getElementById('currentLine');
    const syncTime = document.getElementById('syncTime');
    
    const staticModeBtn = document.getElementById('staticModeBtn');
    const syncModeBtn = document.getElementById('syncModeBtn');
    const toggleStatus = document.getElementById('toggleStatus');
    const modeDescription = document.getElementById('modeDescription');
    
    const lyricsStaticMode = document.getElementById('lyricsStaticMode');
    const lyricsSyncMode = document.getElementById('lyricsSyncMode');
    const lyricsSyncContent = document.getElementById('lyricsSyncContent');
    const strofa1Text = document.getElementById('strofa1Text');
    const strofa2Text = document.getElementById('strofa2Text');
    const strofa3Text = document.getElementById('strofa3Text');
    
    let isPlaying = false;
    let isRepeating = false;
    let isShuffling = false;
    let isStaticMode = true; // Por defecto en modo estático
    let currentLyricIndex = -1;
    let scrollInterval;
    let progressBarMouseDown = false;

    // Inicializar sistema
    function initializeSystem() {
        console.log('🎼 Inicializando sistema de audio y letra...');
        
        // Inicializar modo estático
        strofa1Text.innerHTML = strofas.primera.map(line => 
            `<div class="strofa-line">${line}</div>`
        ).join('');
        
        strofa2Text.innerHTML = strofas.segunda.map(line => 
            `<div class="strofa-line">${line}</div>`
        ).join('');
        
        strofa3Text.innerHTML = strofas.tercera.map(line => 
            `<div class="strofa-line">${line}</div>`
        ).join('');
        
        // Inicializar modo sincronizado
        lyricsData.forEach((line, index) => {
            const lyricLine = document.createElement('div');
            lyricLine.className = 'lyric-line';
            lyricLine.dataset.index = index;
            lyricLine.dataset.time = line.time;
            
            const timeSpan = document.createElement('span');
            timeSpan.className = 'lyric-time';
            timeSpan.textContent = formatTime(line.time);
            
            const textSpan = document.createElement('span');
            textSpan.className = 'lyric-text';
            textSpan.textContent = line.text;
            
            lyricLine.appendChild(timeSpan);
            lyricLine.appendChild(textSpan);
            
            // Click en la línea para saltar al tiempo
            lyricLine.addEventListener('click', function() {
                const time = parseFloat(this.dataset.time);
                audio.currentTime = time;
                updateLyricHighlight(time);
                if (isPlaying) {
                    audio.play();
                }
            });
            
            lyricsSyncContent.appendChild(lyricLine);
        });
        
        // Configurar duración del audio
        audio.addEventListener('loadedmetadata', function() {
            durationEl.textContent = formatTime(audio.duration);
        });
        
        // Inicializar controles
        updateVolume();
        updateModeDescription();
        
        console.log('✅ Sistema de himno inicializado correctamente');
    }

    // Formatear tiempo (segundos a mm:ss)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Actualizar tiempo actual
    function updateCurrentTime() {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        syncTime.textContent = formatTime(audio.currentTime);
        
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
        progressHandle.style.left = `${progressPercent}%`;
        
        if (!isStaticMode) {
            updateLyricHighlight(audio.currentTime);
        }
    }

    // Actualizar resaltado de la letra (solo modo sincronizado)
    function updateLyricHighlight(currentTime) {
        let newIndex = -1;
        
        // Encontrar la línea actual basada en el tiempo
        for (let i = lyricsData.length - 1; i >= 0; i--) {
            if (currentTime >= lyricsData[i].time) {
                newIndex = i;
                break;
            }
        }
        
        // Actualizar solo si cambió la línea
        if (newIndex !== currentLyricIndex) {
            // Remover clase activa de todas las líneas
            document.querySelectorAll('.lyric-line').forEach(line => {
                line.classList.remove('active');
            });
            
            // Agregar clase activa a la línea actual
            if (newIndex >= 0) {
                const currentLineElement = document.querySelector(`.lyric-line[data-index="${newIndex}"]`);
                if (currentLineElement) {
                    currentLineElement.classList.add('active');
                    currentLine.textContent = `Línea ${newIndex + 1} de ${lyricsData.length}`;
                    
                    // Auto-scroll para mantener la línea visible
                    if (!isStaticMode && isPlaying) {
                        currentLineElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
            }
            
            currentLyricIndex = newIndex;
        }
    }

    // Alternar entre modos de visualización
    function switchToStaticMode() {
        isStaticMode = true;
        
        // Actualizar interfaz
        staticModeBtn.classList.add('active');
        syncModeBtn.classList.remove('active');
        toggleStatus.querySelector('.status-badge').textContent = 'Estático';
        
        // Cambiar visualización
        lyricsStaticMode.style.display = 'block';
        lyricsSyncMode.style.display = 'none';
        
        // Animación de transición
        lyricsStaticMode.style.opacity = '0';
        lyricsStaticMode.style.transform = 'translateY(20px)';
        setTimeout(() => {
            lyricsStaticMode.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            lyricsStaticMode.style.opacity = '1';
            lyricsStaticMode.style.transform = 'translateY(0)';
        }, 10);
        
        // Detener scroll automático
        stopAutoScroll();
        
        // Remover resaltado de todas las líneas
        document.querySelectorAll('.lyric-line').forEach(line => {
            line.classList.remove('active');
        });
        
        updateModeDescription();
    }

    function switchToSyncMode() {
        isStaticMode = false;
        
        // Actualizar interfaz
        staticModeBtn.classList.remove('active');
        syncModeBtn.classList.add('active');
        toggleStatus.querySelector('.status-badge').textContent = 'Sincronizado';
        
        // Cambiar visualización
        lyricsStaticMode.style.display = 'none';
        lyricsSyncMode.style.display = 'block';
        
        // Animación de transición
        lyricsSyncMode.style.opacity = '0';
        lyricsSyncMode.style.transform = 'translateY(20px)';
        setTimeout(() => {
            lyricsSyncMode.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            lyricsSyncMode.style.opacity = '1';
            lyricsSyncMode.style.transform = 'translateY(0)';
        }, 10);
        
        // Iniciar scroll automático si está reproduciendo
        if (isPlaying) {
            startAutoScroll();
        }
        
        // Actualizar resaltado al tiempo actual
        updateLyricHighlight(audio.currentTime);
        
        updateModeDescription();
    }

    // Actualizar descripción del modo
    function updateModeDescription() {
        if (isStaticMode) {
            modeDescription.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <strong>Modo Estático:</strong> Visualiza todas las estrofas del himno de forma completa y organizada.
            `;
        } else {
            modeDescription.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <strong>Modo Sincronizado:</strong> Sigue la letra en tiempo real, resaltándose automáticamente según avanza el audio.
            `;
        }
    }

    // Scroll automático de la letra
    function startAutoScroll() {
        stopAutoScroll();
        scrollInterval = setInterval(() => {
            if (currentLyricIndex >= 0) {
                const currentLineElement = document.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
                if (currentLineElement) {
                    currentLineElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }
        }, 1000);
    }

    function stopAutoScroll() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }

    // Control de reproducción
    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.title = 'Reproducir';
            statusText.textContent = 'Pausado';
            stopAutoScroll();
        } else {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playPauseBtn.title = 'Pausar';
            statusText.textContent = 'Reproduciendo';
            if (!isStaticMode) {
                startAutoScroll();
            }
        }
        isPlaying = !isPlaying;
    }

    // Rebobinar 10 segundos
    function rewind() {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
        updateCurrentTime();
        
        // Efecto visual
        rewindBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            rewindBtn.style.transform = 'scale(1)';
        }, 200);
    }

    // Adelantar 10 segundos
    function forward() {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        updateCurrentTime();
        
        // Efecto visual
        forwardBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            forwardBtn.style.transform = 'scale(1)';
        }, 200);
    }

    // Control de volumen
    function updateVolume() {
        audio.volume = volumeSlider.value / 100;
        
        // Actualizar ícono del volumen
        const volumeIcon = volumeBtn.querySelector('i');
        if (audio.volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (audio.volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }

    // Alternar repetición
    function toggleRepeat() {
        isRepeating = !isRepeating;
        audio.loop = isRepeating;
        
        if (isRepeating) {
            repeatBtn.style.background = 'linear-gradient(135deg, var(--himno-primary), var(--himno-accent))';
            repeatBtn.style.color = 'white';
            repeatBtn.title = 'Repetición activada';
        } else {
            repeatBtn.style.background = '';
            repeatBtn.style.color = '';
            repeatBtn.title = 'Repetición desactivada';
        }
    }

    // Alternar aleatorio (placeholder para futuras funciones)
    function toggleShuffle() {
        isShuffling = !isShuffling;
        
        if (isShuffling) {
            shuffleBtn.style.background = 'linear-gradient(135deg, var(--himno-primary), var(--himno-accent))';
            shuffleBtn.style.color = 'white';
            shuffleBtn.title = 'Aleatorio activado';
            showNotification('Modo aleatorio activado (en desarrollo)');
        } else {
            shuffleBtn.style.background = '';
            shuffleBtn.style.color = '';
            shuffleBtn.title = 'Aleatorio desactivado';
        }
    }

    // Función de búsqueda en la barra de progreso
    function seek(event) {
        const progressBarRect = progressBar.getBoundingClientRect();
        const clickPosition = (event.clientX - progressBarRect.left) / progressBarRect.width;
        const newTime = clickPosition * audio.duration;
        audio.currentTime = newTime;
        updateCurrentTime();
    }

    // Mostrar notificación
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'himno-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--himno-primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            animation: notification-slide 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'notification-slide 0.3s ease reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
        
        // Agregar animación CSS
        if (!document.querySelector('#notification-animation')) {
            const style = document.createElement('style');
            style.id = 'notification-animation';
            style.textContent = `
                @keyframes notification-slide {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Efectos visuales para notas musicales
    function createMusicNoteEffect(element) {
        const notes = ['♪', '♫', '♩', '♪'];
        const note = notes[Math.floor(Math.random() * notes.length)];
        
        const noteElement = document.createElement('div');
        noteElement.textContent = note;
        noteElement.style.cssText = `
            position: absolute;
            font-size: 24px;
            color: var(--himno-accent);
            animation: music-note-float 1s ease-out forwards;
            pointer-events: none;
            z-index: 100;
        `;
        
        const rect = element.getBoundingClientRect();
        noteElement.style.left = `${rect.left + rect.width/2}px`;
        noteElement.style.top = `${rect.top + rect.height/2}px`;
        
        document.body.appendChild(noteElement);
        
        // Agregar animación CSS
        if (!document.querySelector('#music-note-animation')) {
            const style = document.createElement('style');
            style.id = 'music-note-animation';
            style.textContent = `
                @keyframes music-note-float {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) rotate(0deg);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${Math.random() * 100 - 50}px, -100px) rotate(180deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            noteElement.remove();
        }, 1000);
    }

    // Event Listeners
    audio.addEventListener('timeupdate', updateCurrentTime);
    
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playPauseBtn.title = 'Reproducir';
        statusText.textContent = 'Finalizado';
        stopAutoScroll();
    });
    
    playPauseBtn.addEventListener('click', togglePlayPause);
    rewindBtn.addEventListener('click', rewind);
    forwardBtn.addEventListener('click', forward);
    volumeSlider.addEventListener('input', updateVolume);
    repeatBtn.addEventListener('click', toggleRepeat);
    shuffleBtn.addEventListener('click', toggleShuffle);
    staticModeBtn.addEventListener('click', switchToStaticMode);
    syncModeBtn.addEventListener('click', switchToSyncMode);
    
    // Control de volumen hover
    volumeBtn.addEventListener('mouseenter', function() {
        volumeContainer.style.opacity = '1';
        volumeContainer.style.visibility = 'visible';
    });
    
    volumeContainer.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!volumeContainer.matches(':hover')) {
                volumeContainer.style.opacity = '0';
                volumeContainer.style.visibility = 'hidden';
            }
        }, 500);
    });
    
    // Barra de progreso interactiva
    progressBar.addEventListener('click', seek);
    
    progressBar.addEventListener('mousedown', function(e) {
        progressBarMouseDown = true;
        seek(e);
    });
    
    document.addEventListener('mousemove', function(e) {
        if (progressBarMouseDown) {
            seek(e);
        }
    });
    
    document.addEventListener('mouseup', function() {
        progressBarMouseDown = false;
    });
    
    // Botón de descarga
    downloadBtn.addEventListener('click', function() {
        createMusicNoteEffect(this);
        showNotification('Descargando Himno UTU...');
    });
    
    // Botón de pantalla completa (placeholder)
    fullscreenBtn.addEventListener('click', function() {
        showNotification('Pantalla completa activada');
        createMusicNoteEffect(this);
    });
    
    // Efectos de teclado
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case ' ':
            case 'Spacebar':
                event.preventDefault();
                togglePlayPause();
                createMusicNoteEffect(playPauseBtn);
                break;
            case 'ArrowLeft':
                event.preventDefault();
                rewind();
                break;
            case 'ArrowRight':
                event.preventDefault();
                forward();
                break;
            case 'm':
            case 'M':
                event.preventDefault();
                audio.volume = audio.volume === 0 ? 1 : 0;
                volumeSlider.value = audio.volume * 100;
                updateVolume();
                break;
            case 'l':
            case 'L':
                event.preventDefault();
                if (isStaticMode) {
                    switchToSyncMode();
                } else {
                    switchToStaticMode();
                }
                break;
            case 'r':
            case 'R':
                event.preventDefault();
                toggleRepeat();
                break;
        }
    });
    
    // Efecto hover para líneas de estrofa
    document.querySelectorAll('.strofa-line').forEach(line => {
        line.addEventListener('mouseenter', function() {
            this.style.color = 'var(--himno-primary)';
            this.style.paddingLeft = '10px';
        });
        
        line.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.paddingLeft = '';
        });
    });
    
    // Inicializar
    initializeSystem();
    
    // Efectos de carga
    setTimeout(() => {
        // Efecto para el reproductor
        const playerCard = document.querySelector('.himno-player-card');
        playerCard.style.opacity = '0';
        playerCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            playerCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            playerCard.style.opacity = '1';
            playerCard.style.transform = 'translateY(0)';
        }, 300);
        
        // Efecto para las estrofas
        document.querySelectorAll('.lyrics-strofa-container').forEach((container, index) => {
            container.style.opacity = '0';
            container.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateX(0)';
            }, index * 200 + 500);
        });
        
        // Efecto para líneas sincronizadas
        document.querySelectorAll('.lyric-line').forEach((line, index) => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            
            setTimeout(() => {
                line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            }, index * 30);
        });
    }, 100);
    
    // Mostrar ayuda de teclado en consola
    console.log('%c🎹 Atajos de teclado disponibles:', 'color: #7b1fa2; font-weight: bold; font-size: 14px;');
    console.log('%c• Espacio: Reproducir/Pausa', 'color: #4a148c;');
    console.log('%c• Flecha izquierda: Retroceder 10s', 'color: #4a148c;');
    console.log('%c• Flecha derecha: Adelantar 10s', 'color: #4a148c;');
    console.log('%c• M: Silenciar/Activar sonido', 'color: #4a148c;');
    console.log('%c• L: Cambiar modo de visualización', 'color: #4a148c;');
    console.log('%c• R: Alternar repetición', 'color: #4a148c;');
});

// === FUNCIONES GLOBALES PARA HIMNO ===

/**
 * Crear efecto de onda sonora visual
 * @param {HTMLElement} element - Elemento donde mostrar el efecto
 */
function createSoundWaveEffect(element) {
    const waveContainer = document.createElement('div');
    waveContainer.className = 'sound-wave-effect';
    waveContainer.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        pointer-events: none;
        z-index: 10;
    `;
    
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${20 + i * 20}px;
            height: ${20 + i * 20}px;
            border: 2px solid var(--himno-accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            animation: sound-wave ${0.5 + i * 0.1}s ease-out forwards;
        `;
        waveContainer.appendChild(wave);
    }
    
    element.style.position = 'relative';
    element.appendChild(waveContainer);
    
    // Agregar animación CSS si no existe
    if (!document.querySelector('#sound-wave-animation')) {
        const style = document.createElement('style');
        style.id = 'sound-wave-animation';
        style.textContent = `
            @keyframes sound-wave {
                0% {
                    opacity: 0.5;
                    transform: translate(-50%, -50%) scale(0.5);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(1.5);
                    border-width: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        waveContainer.remove();
    }, 1000);
}

/**
 * Reproducir himno desde tiempo específico
 * @param {number} time - Tiempo en segundos
 */
function playHimnoFromTime(time) {
    const audio = document.getElementById('himnoAudio');
    if (audio) {
        audio.currentTime = time;
        if (audio.paused) {
            audio.play();
        }
    }
}

// Exportar funciones para uso global
window.HimnoSystem = {
    createSoundWaveEffect,
    playHimnoFromTime,
    switchToStaticMode: function() {
        document.getElementById('staticModeBtn')?.click();
    },
    switchToSyncMode: function() {
        document.getElementById('syncModeBtn')?.click();
    }
};

// Agregar estilos globales adicionales
const globalStyles = document.createElement('style');
globalStyles.textContent = `
    .strofa-line {
        margin-bottom: 0.8rem;
        transition: all 0.3s ease;
        padding: 0.3rem 0;
    }
    
    .strofa-line:last-child {
        margin-bottom: 0;
    }
`;
document.head.appendChild(globalStyles);