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

    // Данные о питомцах, ищущих дом
    const featuredPets = [
        {
            name: 'Барсик',
            image: '../assets/cat1.jpg',
            description: 'Ласковый котик, 2 года',
            type: 'Кот'
        },
        {
            name: 'Рекс',
            image: '../assets/dog2.jpg',
            description: 'Активный и дружелюбный, 1.5 года',
            type: 'Собака'
        },
        {
            name: 'Мурка',
            image: '../assets/cat2.jpg',
            description: 'Спокойная кошечка, 3 года',
            type: 'Кошка'
        },
        {
            name: 'Шарик',
            image: '../assets/dog3.jpg',
            description: 'Умный и послушный, 2 года',
            type: 'Собака'
        }
    ];

    // Функция для отображения питомцев
    function displayFeaturedPets() {
        const petsGrid = document.getElementById('featured-pets');
        if (!petsGrid) return;

        petsGrid.innerHTML = featuredPets.map(pet => `
            <div class="pet-card animate-on-scroll">
                <div class="pet-image">
                    <img src="${pet.image}" alt="${pet.name}">
                </div>
                <div class="pet-info">
                    <div class="pet-info-content">
                        <h3>${pet.name}</h3>
                        <span class="pet-type">${pet.type}</span>
                        <p>${pet.description}</p>
                    </div>
                    <a href="shelter.html" class="adopt-button">Приютить</a>
                </div>
            </div>
        `).join('');

        // Добавляем стили для карточек питомцев
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            .pet-card {
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .pet-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            }

            .pet-image {
                height: 200px;
                overflow: hidden;
            }

            .pet-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }

            .pet-card:hover .pet-image img {
                transform: scale(1.05);
            }

            .pet-info {
                padding: 1.5rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: space-between;
            }

            .pet-info-content {
                margin-bottom: 1rem;
            }

            .pet-info h3 {
                margin: 0 0 0.5rem;
                color: #333;
            }

            .pet-type {
                display: inline-block;
                padding: 0.3rem 1rem;
                background: #f0f7ff;
                color: #0066cc;
                border-radius: 20px;
                font-size: 0.9rem;
                margin-bottom: 1rem;
            }

            .pet-info p {
                color: #666;
                margin-bottom: 1rem;
            }

            .adopt-button {
                display: inline-block;
                padding: 0.5rem 1.5rem;
                background: #0066cc;
                color: white;
                text-decoration: none;
                border-radius: 25px;
                transition: background 0.3s ease;
            }

            .adopt-button:hover {
                background: #0052a3;
            }

            .pets-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                padding: 2rem 0;
            }

            @media (max-width: 768px) {
                .pets-grid {
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Вызываем функцию при загрузке документа
    displayFeaturedPets();
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