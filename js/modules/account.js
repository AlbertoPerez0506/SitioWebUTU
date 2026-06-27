// ===== FUNCIONALIDAD DEL HEADER Y SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    // Efecto scroll en header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // ===== DROPDOWN FUNCTIONALITY FOR MOBILE =====
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.dropdown')) {
                dropdownToggles.forEach(toggle => {
                    toggle.parentElement.classList.remove('active');
                });
            }
        }
    });
    
    // ===== SCROLL SUAVE PARA ENLACES INTERNOS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== ANIMACIÓN DE APARICIÓN AL HACER SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.carrera-card, .feature');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Agregar clase para animación CSS
    const style = document.createElement('style');
    style.textContent = `
        .carrera-card, .feature {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // ===== CONTROL DE REPRODUCCIÓN DEL VIDEO =====
    const videoIframe = document.querySelector('.video-wrapper iframe');
    
    if (videoIframe) {
        // Pausar video cuando no está en vista
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(videoIframe);
    }

    // ===== EFECTOS PARA LA SECCIÓN DE NOTICIAS =====
    const noticiasObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const noticias = entry.target.querySelectorAll('.noticia-card');
                noticias.forEach((noticia, index) => {
                    setTimeout(() => {
                        noticia.classList.add('animate-in');
                    }, index * 150);
                });
                noticiasObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observar la sección de noticias
    const noticiasSection = document.querySelector('.noticias-section');
    if (noticiasSection) {
        noticiasObserver.observe(noticiasSection);
    }

    // Efecto hover mejorado para tarjetas de noticias
    const noticiaCards = document.querySelectorAll('.noticia-card');
    noticiaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('animate-in')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('animate-in')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow)';
            }
        });
    });

    // Contador de noticias (opcional)
    function actualizarContadorNoticias() {
        const contador = document.querySelectorAll('.noticia-card').length;
        const contadorElement = document.createElement('div');
        contadorElement.className = 'noticias-contador';
        contadorElement.innerHTML = `Mostrando <strong>${contador}</strong> noticias recientes`;
        contadorElement.style.cssText = `
            text-align: center;
            color: var(--color-gray);
            margin-bottom: 2rem;
            font-size: 0.9rem;
        `;
        
        const noticiasGrid = document.querySelector('.noticias-grid');
        if (noticiasGrid && !document.querySelector('.noticias-contador')) {
            noticiasGrid.parentNode.insertBefore(contadorElement, noticiasGrid);
        }
    }

    // Llamar la función después de cargar el DOM
    setTimeout(actualizarContadorNoticias, 1000);

    // ===== EFECTOS PARA LA SECCIÓN DE SITIOS DE INTERÉS =====
    const sitiosObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sitios = entry.target.querySelectorAll('.sitio-card');
                sitios.forEach((sitio, index) => {
                    setTimeout(() => {
                        sitio.style.animation = `slideInUp 0.6s ease forwards`;
                    }, index * 100);
                });
                sitiosObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observar la sección de sitios
    const sitiosSection = document.querySelector('.sitios-section');
    if (sitiosSection) {
        sitiosObserver.observe(sitiosSection);
    }

    // Efecto de contador para sitios (opcional)
    function actualizarContadorSitios() {
        const contador = document.querySelectorAll('.sitio-card').length;
        const contadorElement = document.createElement('div');
        contadorElement.className = 'sitios-contador';
        contadorElement.innerHTML = `<strong>${contador}</strong> sistemas y recursos disponibles`;
        contadorElement.style.cssText = `
            text-align: center;
            color: var(--color-secondary);
            margin-bottom: 2rem;
            font-size: 1rem;
            font-weight: 600;
        `;
        
        const sitiosGrid = document.querySelector('.sitios-grid');
        if (sitiosGrid && !document.querySelector('.sitios-contador')) {
            sitiosGrid.parentNode.insertBefore(contadorElement, sitiosGrid);
        }
    }

    // Llamar la función después de cargar el DOM
    setTimeout(actualizarContadorSitios, 1000);

    // Efecto de ripple en los botones
    document.querySelectorAll('.sitio-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(33, 179, 149, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Agregar la animación ripple al CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});