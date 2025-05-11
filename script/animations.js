// Анимация появления элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Инициализация анимаций при загрузке
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    
    // Анимация ховера для кнопок
    const buttons = document.querySelectorAll('.btn, button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });
    
    // Параллакс эффект для героя
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollValue = window.scrollY;
            hero.style.backgroundPositionY = scrollValue * 0.5 + 'px';
        });
    }
    
    // Анимация таймлайна
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
});
// Анимация хедера при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0.5rem 2rem';
    } else {
        header.style.background = '#fff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.padding = '1rem 2rem';
    }
});

// Анимация наведения на кнопки
document.querySelectorAll('.cta-button, .see-all-button, .emergency-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Простая анимация слайдера отзывов
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = index === currentTestimonial ? '1' : '0.5';
        testimonial.style.transform = index === currentTestimonial ? 'scale(1.05)' : 'scale(0.95)';
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

if (testimonials.length > 0) {
    setInterval(rotateTestimonials, 5000);
    rotateTestimonials(); // Инициализация
}