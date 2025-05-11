// Анимация появления элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll, .timeline-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Элемент считается видимым, когда его верхняя граница находится ниже 70% высоты окна
        const isVisible = elementTop < windowHeight * 0.7;
        
        if (isVisible) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Инициализация анимаций при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll, .timeline-item, .team-member');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const isVisible = elementTop < windowHeight * 0.8;
            
            if (isVisible) {
                element.classList.add('animated');
            }
        });
    }

    // Анимация хедера при скролле
    function animateHeader() {
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
    }

    // Параллакс эффект для героя
    function animateHeroParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollValue = window.scrollY;
            hero.style.backgroundPositionY = scrollValue * 0.5 + 'px';
        }
    }

    // Инициализация таймлайна
    function initializeTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.2}s`;
            item.classList.add('timeline-hidden');
        });
    }

    // Инициализация анимации команды
    function initializeTeamAnimations() {
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach((member, index) => {
            member.style.transitionDelay = `${index * 0.15}s`;
            member.classList.add('team-hidden');
            
            // Анимация при наведении
            member.addEventListener('mouseenter', function() {
                this.classList.add('team-hover');
            });
            
            member.addEventListener('mouseleave', function() {
                this.classList.remove('team-hover');
            });
        });
    }

    // Анимация наведения на кнопки
    function initializeButtonAnimations() {
        document.querySelectorAll('.cta-button, .see-all-button, .emergency-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Обработчики событий
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            animateOnScroll();
            animateHeader();
            animateHeroParallax();
        });
    });

    // Инициализация
    initializeTimeline();
    initializeTeamAnimations();
    initializeButtonAnimations();
    animateOnScroll();
});

// Добавляем стили для анимаций
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .timeline-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }

    .timeline-item.animated {
        opacity: 1;
        transform: translateY(0);
    }

    .timeline-hidden {
        opacity: 0;
        transform: translateY(50px);
    }

    .team-member {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.5s ease;
    }

    .team-member.animated {
        opacity: 1;
        transform: translateY(0);
    }

    .team-member.team-hover {
        transform: translateY(-10px);
    }

    .team-member.team-hover .member-image img {
        transform: scale(1.05);
    }

    .team-member.team-hover .social-links {
        opacity: 1;
        transform: translateY(0);
    }

    .team-hidden {
        opacity: 0;
        transform: translateY(30px);
    }

    .team-member .social-links {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }

    .team-member:hover .social-links {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        .timeline-item {
            transform: translateX(50px);
        }
        
        .timeline-item.animated {
            transform: translateX(0);
        }
        
        .timeline-hidden {
            transform: translateX(50px);
        }

        .team-member {
            transform: translateY(20px);
        }

        .team-member.animated {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

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