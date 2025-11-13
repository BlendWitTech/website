// ==========================================
// LOADER SCREEN - MINIMUM 2 SECONDS
// ==========================================

const loaderStartTime = Date.now();
const MIN_LOADER_TIME = 2000; // Minimum 2 seconds

window.addEventListener('load', () => {
    const loaderScreen = document.getElementById('loaderScreen');
    const loaderElapsed = Date.now() - loaderStartTime;
    const remainingTime = Math.max(0, MIN_LOADER_TIME - loaderElapsed);
    
    setTimeout(() => {
        if (loaderScreen) {
            loaderScreen.classList.add('hidden');
            setTimeout(() => {
                loaderScreen.style.display = 'none';
                // Show skeleton loading, then reveal content after 2+ seconds
                initSkeletonLoading();
                // Initialize animations after loader is done
                initScrollAnimations();
            }, 500);
        }
    }, remainingTime);
});

// ==========================================
// SKELETON LOADING - SHOW FOR 2+ SECONDS
// ==========================================

function initSkeletonLoading() {
    const skeletonStartTime = Date.now();
    const MIN_SKELETON_TIME = 1500; // Reduced to 1.5 seconds (faster)
    
    // Skeleton containers
    const skeletons = {
        hero: document.getElementById('heroSkeleton'),
        about: document.getElementById('aboutSkeleton'),
        services: document.getElementById('servicesSkeleton'),
        portfolio: document.getElementById('portfolioSkeleton'),
        team: document.getElementById('teamSkeleton'),
        founder: document.getElementById('founderSkeleton'),
        testimonials: document.getElementById('testimonialsSkeleton'),
        contact: document.getElementById('contactSkeleton')
    };
    
    // Header skeleton containers
    const headerSkeletons = {
        about: document.getElementById('aboutHeaderSkeleton'),
        services: document.getElementById('servicesHeaderSkeleton'),
        portfolio: document.getElementById('portfolioHeaderSkeleton'),
        team: document.getElementById('teamHeaderSkeleton'),
        founder: document.getElementById('founderHeaderSkeleton'),
        testimonials: document.getElementById('testimonialsHeaderSkeleton'),
        contact: document.getElementById('contactHeaderSkeleton')
    };
    
    // Content containers
    const contents = {
        hero: document.getElementById('heroContent'),
        about: document.getElementById('aboutContent'),
        services: document.getElementById('servicesContent'),
        portfolio: document.getElementById('portfolioContent'),
        team: document.getElementById('teamContent'),
        founder: document.getElementById('founderContent'),
        testimonials: document.getElementById('testimonialsContent'),
        contact: document.getElementById('contactContent')
    };
    
    // Header containers
    const headers = {
        about: document.getElementById('aboutHeader'),
        services: document.getElementById('servicesHeader'),
        portfolio: document.getElementById('portfolioHeader'),
        team: document.getElementById('teamHeader'),
        founder: document.getElementById('founderHeader'),
        testimonials: document.getElementById('testimonialsHeader'),
        contact: document.getElementById('contactHeader')
    };
    
    // Function to reveal content
    function revealContent(skeletonId, contentId) {
        const skeleton = skeletons[skeletonId];
        const content = contents[contentId];
        const headerSkeleton = headerSkeletons[contentId];
        const header = headers[contentId];
        
        // Hide and remove content skeleton from DOM after animation
        if (skeleton) {
            skeleton.classList.add('hidden');
            setTimeout(() => {
                skeleton.style.display = 'none';
                skeleton.remove(); // Remove from DOM completely
            }, 500);
        }
        
        // Hide header skeleton and show header
        if (headerSkeleton && header) {
            // First, hide the skeleton completely
            headerSkeleton.classList.add('hidden');
            
            // Wait a bit for skeleton to fade out, then show header and remove skeleton
            setTimeout(() => {
                // Ensure skeleton is completely hidden and remove from DOM
                headerSkeleton.style.display = 'none';
                headerSkeleton.remove(); // Remove from DOM completely
                
                // Now show the actual header
                header.removeAttribute('style');
                header.style.setProperty('display', 'block', 'important');
                header.style.setProperty('opacity', '1', 'important');
                header.style.setProperty('visibility', 'visible', 'important');
                header.classList.add('content-loaded');
                // Header revealed (debug removed for security)
            }, 500); // Wait for fade animation
        }
        
        // Show content with fade-in animation
        if (content) {
            setTimeout(() => {
                content.style.display = '';
                content.classList.add('content-loaded');
            }, 200);
        }
    }
    
    // Calculate remaining time
    const skeletonElapsed = Date.now() - skeletonStartTime;
    const remainingSkeletonTime = Math.max(0, MIN_SKELETON_TIME - skeletonElapsed);
    
    // Reveal all content after minimum skeleton time
    setTimeout(() => {
        revealContent('hero', 'hero');
        revealContent('about', 'about');
        revealContent('services', 'services');
        revealContent('portfolio', 'portfolio');
        revealContent('team', 'team'); // Team section hidden but skeleton still handled
        revealContent('founder', 'founder');
        revealContent('testimonials', 'testimonials');
        revealContent('contact', 'contact');
        
        // Show scroll indicator after hero loads
        const scrollIndicator = document.getElementById('scrollIndicator');
        if (scrollIndicator) {
            scrollIndicator.style.display = '';
        }
    }, remainingSkeletonTime);
}

// ==========================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER (REPLAY ON SCROLL)
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Check if element already has 'visible' class
                if (!entry.target.classList.contains('visible')) {
                    // Add 'visible' class to trigger animation
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150); // Stagger delay
                }
            } else {
                // When element leaves viewport, remove visible class so it can animate again
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    // Initializing scroll animations (debug removed for security)
    
    animatedElements.forEach((el, index) => {
        animateOnScroll.observe(el);
        // Observing element for scroll animations
    });
}

// Initialize animations on DOMContentLoaded as backup
document.addEventListener('DOMContentLoaded', () => {
    // DOM Content Loaded - Animations initialized
    setTimeout(() => {
        if (!document.getElementById('loaderScreen') || document.getElementById('loaderScreen').style.display === 'none') {
            initScrollAnimations();
        }
    }, 100);
});

// ==========================================
// NAVIGATION
// ==========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// ==========================================
// THEME TOGGLE
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const logoImage = document.getElementById('logoImage');
const footerLogo = document.getElementById('footerLogo');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);
updateLogos(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    updateLogos(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (theme === 'dark') {
        icon.textContent = '☀️';
        themeToggle.setAttribute('title', 'Switch to Light Mode');
    } else {
        icon.textContent = '🌙';
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
    }
}

function updateLogos(theme) {
    if (theme === 'dark') {
        // Use white logo for dark theme navigation
        logoImage.src = 'assets/images/logo-white.png';
    } else {
        // Use black logo for light theme navigation
        logoImage.src = 'assets/images/logo-black.png';
    }
    // Footer always uses colorful logo in both themes
    if (footerLogo) {
        footerLogo.src = 'assets/images/logo-colorful.png';
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link or overlay
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside (on overlay)
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !navToggle.contains(e.target) &&
        e.target !== navLinks) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
});

// Close mobile menu on window resize if it's open
window.addEventListener('resize', () => {
    if (window.innerWidth > 968 && navLinks.classList.contains('active')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Down Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
    
    // Make it look clickable
    scrollIndicator.style.cursor = 'pointer';
}

// ==========================================
// ANIMATIONS ON SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .team-member, .testimonial-card, .about-content, .contact-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
        // Form data collected (not logged for security)
});

// ==========================================
// COUNTER ANIMATION FOR STATS
// ==========================================

const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
            }
        };
        
        updateCounter();
    });
};

// Trigger stats animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            setTimeout(animateStats, 500);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================

const sections = document.querySelectorAll('section[id]');

const setActiveNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
};

// Set active nav on scroll
window.addEventListener('scroll', setActiveNav);

// Set active nav on load
setTimeout(() => {
    setActiveNav();
}, 100);

// ==========================================
// PARALLAX EFFECT FOR HERO SHAPES
// ==========================================

const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        shape.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
});

// ==========================================
// PORTFOLIO ITEM HOVER EFFECT
// ==========================================

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ==========================================
// SERVICE CARD TILT EFFECT
// ==========================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ==========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ==========================================
// LAZY LOADING IMAGES (for future images)
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// PORTFOLIO CAROUSEL - SIMPLE AUTO-SLIDE
// ==========================================

const carousel = document.getElementById('portfolioCarousel');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const dotsContainer = document.getElementById('carouselDots');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.portfolio-slide');

let currentSlide = 0;
const totalSlides = slides.length;
let isTransitioning = false;

// Auto-play interval - slower speed
let autoPlayInterval = setInterval(nextSlide, 4000); // Every 4 seconds

function updateCarousel(instant = false) {
    const slideWidth = slides[0]?.offsetWidth || 0;
    const gap = 30;
    const offset = -(currentSlide * (slideWidth + gap));
    
    if (carousel) {
        if (instant) {
            carousel.style.transition = 'none';
        } else {
            carousel.style.transition = 'transform 0.8s ease-in-out';
        }
        carousel.style.transform = `translateX(${offset}px)`;
        
        if (instant) {
            void carousel.offsetHeight;
            carousel.style.transition = 'transform 0.8s ease-in-out';
        }
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateCarousel();
    
    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateCarousel();
    
    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Initial update
setTimeout(() => {
    updateCarousel();
}, 100);

// Event Listeners
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoPlay();
    });
});

// Reset auto-play timer when user interacts
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5000);
}

// Pause on hover
const carouselContainer = document.querySelector('.portfolio-carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 4000);
    });
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 4000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
    }
});

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        nextSlide();
        resetAutoPlay();
    }
    if (touchEndX - touchStartX > 50) {
        prevSlide();
        resetAutoPlay();
    }
}

// Resize handler to recalculate on window resize
window.addEventListener('resize', () => {
    updateCarousel();
});

// ==========================================
// TESTIMONIALS CAROUSEL - SIMPLE AUTO-SLIDE
// ==========================================

const testimonialsCarousel = document.getElementById('testimonialsCarousel');
const testimonialDots = document.querySelectorAll('.t-dot');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

let currentTestimonial = 0;
const totalTestimonials = testimonialSlides.length;
let isTestimonialTransitioning = false;

// Auto-play for testimonials
let testimonialAutoPlay = setInterval(nextTestimonial, 5000); // Every 5 seconds

function updateTestimonials(instant = false) {
    const slideWidth = testimonialSlides[0]?.offsetWidth || 0;
    const gap = 40;
    const offset = -(currentTestimonial * (slideWidth + gap));
    
    if (testimonialsCarousel) {
        if (instant) {
            testimonialsCarousel.style.transition = 'none';
        } else {
            testimonialsCarousel.style.transition = 'transform 0.8s ease-in-out';
        }
        testimonialsCarousel.style.transform = `translateX(${offset}px)`;
        
        if (instant) {
            void testimonialsCarousel.offsetHeight;
            testimonialsCarousel.style.transition = 'transform 0.8s ease-in-out';
        }
    }
    
    // Update dots
    testimonialDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function nextTestimonial() {
    if (isTestimonialTransitioning) return;
    isTestimonialTransitioning = true;
    
    currentTestimonial++;
    if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    }
    updateTestimonials();
    
    setTimeout(() => {
        isTestimonialTransitioning = false;
    }, 800);
}

function prevTestimonial() {
    if (isTestimonialTransitioning) return;
    isTestimonialTransitioning = true;
    
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1;
    }
    updateTestimonials();
    
    setTimeout(() => {
        isTestimonialTransitioning = false;
    }, 800);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonials();
}

// Dot navigation
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToTestimonial(index);
        clearInterval(testimonialAutoPlay);
        testimonialAutoPlay = setInterval(nextTestimonial, 6000);
    });
});

// Initial update for testimonials
setTimeout(() => {
    updateTestimonials();
}, 150);

// Pause testimonials on hover
const testimonialsContainer = document.querySelector('.testimonials-carousel-container');
if (testimonialsContainer) {
    testimonialsContainer.addEventListener('mouseenter', () => {
        clearInterval(testimonialAutoPlay);
    });
    
    testimonialsContainer.addEventListener('mouseleave', () => {
        testimonialAutoPlay = setInterval(nextTestimonial, 5000);
    });
}

// ==========================================
// TEAM SECTION - NOW STATIC GRID (NO CAROUSEL)
// ==========================================

// Team section now uses static grid - no carousel JavaScript needed

// ==========================================
// WEBSITE AVATAR/MASCOT
// ==========================================

const websiteAvatar = document.getElementById('websiteAvatar');

if (websiteAvatar) {
    websiteAvatar.addEventListener('click', () => {
        // You can add functionality here like:
        // - Open a chat widget
        // - Show a contact form
        // - Navigate to contact section
        // For now, let's scroll to contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==========================================
// SERVICE INQUIRY MODAL
// ==========================================

const serviceModal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const serviceInquiryForm = document.getElementById('serviceInquiryForm');
const serviceNameSpan = document.getElementById('serviceName');
const inquiryServiceInput = document.getElementById('inquiryService');
const modalSuccess = document.getElementById('modalSuccess');
const submitBtn = document.querySelector('.modal-submit');
const submitText = document.querySelector('.submit-text');
const submitLoader = document.querySelector('.submit-loader');

// Initialize EmailJS (Replace with your actual EmailJS credentials)
// Sign up at https://www.emailjs.com/ to get these
emailjs.init("YOUR_PUBLIC_KEY"); // Replace this

// Open modal when service is clicked
document.querySelectorAll('.service-inquiry-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.getAttribute('data-service');
        openServiceModal(serviceName);
    });
});

function openServiceModal(serviceName) {
    serviceNameSpan.textContent = serviceName;
    inquiryServiceInput.value = serviceName;
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form after closing
    setTimeout(() => {
        serviceInquiryForm.reset();
        serviceInquiryForm.style.display = 'block';
        modalSuccess.style.display = 'none';
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }, 300);
}

// Close modal on X button
modalClose.addEventListener('click', closeModal);

// Close modal on overlay click
serviceModal.addEventListener('click', function(e) {
    if (e.target === serviceModal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
        closeModal();
    }
});

// Handle form submission
serviceInquiryForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Disable submit button
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline';
    
    // Get form data
    const formData = {
        service: inquiryServiceInput.value,
        name: document.getElementById('inquiryName').value,
        email: document.getElementById('inquiryEmail').value,
        phone: document.getElementById('inquiryPhone').value || 'Not provided',
        company: document.getElementById('inquiryCompany').value || 'Not provided',
        message: document.getElementById('inquiryMessage').value,
        budget: document.getElementById('inquiryBudget').value || 'Not specified',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    try {
        // Send email to company (Blendwit)
        await emailjs.send(
            'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID_COMPANY', // Template for company notification
            {
                to_email: 'contact@blendwit.com',
                service_name: formData.service,
                client_name: formData.name,
                client_email: formData.email,
                client_phone: formData.phone,
                client_company: formData.company,
                project_details: formData.message,
                budget: formData.budget,
                inquiry_date: formData.date
            }
        );
        
        // Send confirmation email to client
        await emailjs.send(
            'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID_CLIENT', // Template for client confirmation
            {
                to_email: formData.email,
                client_name: formData.name,
                service_name: formData.service,
                inquiry_date: formData.date
            }
        );
        
        // Show success message
        serviceInquiryForm.style.display = 'none';
        modalSuccess.style.display = 'block';
        
        // Inquiry sent successfully (logging removed for security)
        
    } catch (error) {
        // Error handling (details not logged for security)
        alert('There was an error sending your inquiry. Please try again or contact us directly.');
        
        // Re-enable button
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

// Website initialized (console messages removed for security)

