// ===== SISTEMA DE UBICACIÓN INTERACTIVA =====
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const mapaIframe = document.getElementById('mapaIframe');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const locationBtn = document.getElementById('locationBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const shareLocationBtn = document.getElementById('shareLocation');
    const saveLocationBtn = document.getElementById('saveLocation');
    const copyBtns = document.querySelectorAll('.copy-btn');
    const contactoForm = document.getElementById('contactoForm');

    // Coordenadas de la universidad
    const universidadCoords = {
        lat: 17.7316726,
        lng: -91.7744944,
        zoom: 18
    };

    // Control del mapa
    function setupMapControls() {
        // Zoom In
        zoomInBtn.addEventListener('click', function() {
            const iframe = mapaIframe.contentWindow || mapaIframe.contentDocument;
            if (iframe && iframe.postMessage) {
                iframe.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'setZoom',
                    args: [universidadCoords.zoom + 1]
                }), '*');
            }
        });

        // Zoom Out
        zoomOutBtn.addEventListener('click', function() {
            const iframe = mapaIframe.contentWindow || mapaIframe.contentDocument;
            if (iframe && iframe.postMessage) {
                iframe.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'setZoom',
                    args: [universidadCoords.zoom - 1]
                }), '*');
            }
        });

        // Centrar ubicación
        locationBtn.addEventListener('click', function() {
            const iframe = mapaIframe.contentWindow || mapaIframe.contentDocument;
            if (iframe && iframe.postMessage) {
                iframe.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'setCenter',
                    args: [universidadCoords]
                }), '*');
            }
        });

        // Pantalla completa
        fullscreenBtn.addEventListener('click', function() {
            const mapaContainer = mapaIframe.parentElement;
            
            if (!document.fullscreenElement) {
                if (mapaContainer.requestFullscreen) {
                    mapaContainer.requestFullscreen();
                } else if (mapaContainer.webkitRequestFullscreen) {
                    mapaContainer.webkitRequestFullscreen();
                } else if (mapaContainer.msRequestFullscreen) {
                    mapaContainer.msRequestFullscreen();
                }
                
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });

        // Salir de pantalla completa
        document.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        });
    }

    // Compartir ubicación
    function setupShareLocation() {
        shareLocationBtn.addEventListener('click', function() {
            const url = `https://www.google.com/maps?q=${universidadCoords.lat},${universidadCoords.lng}&z=${universidadCoords.zoom}`;
            const title = 'Universidad Tecnológica del Usumacinta';
            const text = `Ubicación: ${universidadCoords.lat}, ${universidadCoords.lng}`;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                })
                .then(() => console.log('Ubicación compartida exitosamente'))
                .catch((error) => console.log('Error al compartir:', error));
            } else {
                // Copiar al portapapeles como fallback
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Enlace copiado al portapapeles', 'success');
                });
            }
        });
    }

    // Guardar ubicación
    function setupSaveLocation() {
        saveLocationBtn.addEventListener('click', function() {
            const placeData = {
                name: 'Universidad Tecnológica del Usumacinta',
                address: 'Libramiento Glorieta Emiliano Zapata-Tenosique s/n, Emiliano Zapata, Tabasco',
                coordinates: universidadCoords,
                phone: '934 34 3 56 90'
            };
            
            // Guardar en localStorage
            localStorage.setItem('savedLocation_UTU', JSON.stringify(placeData));
            
            showNotification('Ubicación guardada en favoritos', 'success');
            
            // Cambiar texto del botón temporalmente
            const originalHTML = saveLocationBtn.innerHTML;
            saveLocationBtn.innerHTML = '<i class="fas fa-check"></i> Guardado';
            saveLocationBtn.disabled = true;
            
            setTimeout(() => {
                saveLocationBtn.innerHTML = originalHTML;
                saveLocationBtn.disabled = false;
            }, 2000);
        });
        
        // Verificar si ya está guardada
        checkSavedLocation();
    }

    function checkSavedLocation() {
        const savedLocation = localStorage.getItem('savedLocation_UTU');
        if (savedLocation) {
            saveLocationBtn.innerHTML = '<i class="fas fa-bookmark"></i> Ya guardado';
            saveLocationBtn.disabled = true;
        }
    }

    // Copiar al portapapeles
    function setupCopyButtons() {
        copyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const textToCopy = this.getAttribute('data-text') || '934 34 3 56 90';
                
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Efecto visual
                    const originalHTML = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copiado';
                    this.style.background = 'var(--color-secondary)';
                    this.style.color = 'var(--color-white)';
                    
                    setTimeout(() => {
                        this.innerHTML = originalHTML;
                        this.style.background = '';
                        this.style.color = '';
                    }, 1500);
                    
                    showNotification('Número copiado al portapapeles', 'success');
                }).catch(err => {
                    console.error('Error al copiar:', err);
                    showNotification('Error al copiar', 'error');
                });
            });
        });
    }

    // Formulario de contacto
    function setupContactForm() {
        if (contactoForm) {
            contactoForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validación básica
                const nombre = document.getElementById('nombre').value.trim();
                const email = document.getElementById('email').value.trim();
                const asunto = document.getElementById('asunto').value;
                const mensaje = document.getElementById('mensaje').value.trim();
                
                if (!nombre || !email || !asunto || !mensaje) {
                    showNotification('Por favor completa todos los campos obligatorios', 'error');
                    return;
                }
                
                // Simular envío (en producción esto iría a un servidor)
                const formData = {
                    nombre,
                    email,
                    telefono: document.getElementById('telefono').value.trim(),
                    asunto,
                    mensaje
                };
                
                console.log('Datos del formulario:', formData);
                
                // Mostrar mensaje de éxito
                showNotification('Mensaje enviado exitosamente. Te contactaremos pronto.', 'success');
                
                // Limpiar formulario
                contactoForm.reset();
                
                // Desplazar al inicio del formulario
                document.querySelector('.form-card').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            });
        }
    }

    // Mostrar notificación
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `ubicacion-notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-secondary)' : 'var(--color-primary)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Agregar estilos CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .ubicacion-notification {
            animation: slideInRight 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Geolocalización del usuario
    function setupGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userCoords = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    
                    // Calcular distancia (fórmula Haversine simplificada)
                    const distance = calculateDistance(
                        userCoords.lat, 
                        userCoords.lng, 
                        universidadCoords.lat, 
                        universidadCoords.lng
                    );
                    
                    // Mostrar distancia en consola (podría mostrarse en UI)
                    console.log(`Distancia a la universidad: ${distance.toFixed(2)} km`);
                },
                (error) => {
                    console.log('Error al obtener ubicación:', error.message);
                }
            );
        }
    }

    // Calcular distancia entre dos coordenadas
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radio de la Tierra en km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // Efectos visuales para las cards
    function setupVisualEffects() {
        // Efecto hover para cards de transporte
        const transporteCards = document.querySelectorAll('.transporte-card');
        transporteCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            });
        });
        
        // Efecto hover para info cards
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Inicializar todo
    function initUbicacion() {
        setupMapControls();
        setupShareLocation();
        setupSaveLocation();
        setupCopyButtons();
        setupContactForm();
        setupGeolocation();
        setupVisualEffects();
        
        // Animar elementos al cargar
        setTimeout(() => {
            document.querySelectorAll('.transporte-card, .info-card, .detail-item').forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 500);
    }

    // Inicializar
    initUbicacion();
    
    // Consola de depuración
    console.log('%c📍 Ubicación UTU Cargada', 'color: #2c348f; font-weight: bold; font-size: 14px;');
    console.log(`%c• Coordenadas: ${universidadCoords.lat}, ${universidadCoords.lng}`, 'color: #21b395;');
    console.log('%c• Mapa interactivo activado', 'color: #21b395;');
    console.log('%c• Sistema de contacto configurado', 'color: #21b395;');
    console.log('%c• Compartir ubicación disponible', 'color: #21b395;');
});