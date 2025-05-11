document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Анимация появления элементов при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Инициализация при загрузке
    
    // Загрузка превью питомцев на главную
    if (document.getElementById('home-pets')) {
        loadPetPreviews();
    }
});

// Функция для загрузки превью питомцев
function loadPetPreviews() {
    const pets = [
        {
            id: 1,
            name: "Барсик",
            species: "Кот",
            age: 2,
            gender: "Мальчик",
            breed: "Дворовый",
            description: "Барсик — это очаровательный и игривый кот, который стал настоящей звездой нашего приюта. Он обожает внимание людей и с удовольствием идет на контакт, легко находит общий язык как с детьми, так и со взрослыми. Его ласка и игривость принесут радость в ваш дом.",
            image: "../images/cat1.jpg",
            adopted: false
        },
    {
        id: 2,
        name: "Мурка",
        species: "Кошка",
        age: 3,
        gender: "Девочка",
        breed: "Сиамская",
        description: "Мурка — спокойная и умная сиамская кошка, которая отлично составит компанию спокойному человеку, любящему уединение. Она предпочитает тихие уголки для отдыха и обожает мягкие подушки. Её ласка и доброта создадут атмосферу уюта в вашем доме.",
        image: "../images/cat2.jpg",
        adopted: false
    },
    {
        id: 3,
        name: "Ролик",
        species: "Собака",
        age: 4,
        gender: "мальчик",
        breed: "Лабрадор",
        description: "Ролик — дружелюбный и игривый лабрадор. Он отлично подходит для охоты и станет верным спутником для спортивных людей. Этот энергичный пес обожает играть на свежем воздухе и легко находит общий язык с детьми, принося радость в ваш дом.",
        image: "../images/dog1.jpg",
        adopted: false
    }
    ];
    
    const petsContainer = document.getElementById('home-pets');
    
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <p><strong>Возраст:</strong> ${pet.age}</p>
                <p><strong>Порода:</strong> ${pet.breed}</p>
                <a href="shelter.html#pet-${pet.id}" class="see-all-button">Подробнее</a>
            </div>
        `;
        petsContainer.appendChild(petCard);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Фиксированная шапка при прокрутке
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Закрытие модального окна
    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.closeModal = function() {
        modal.style.display = 'none';
    };

    window.openModal = function(content) {
        modal.querySelector('.modal-body').innerHTML = content;
        modal.style.display = 'flex';
    };

    // Закрытие при клике вне окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Анимация счетчиков статистики
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Запуск анимации при скролле до секции
function startCountersWhenVisible() {
    const statsSection = document.querySelector('.about-hero');
    if (statsSection) {
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
    
    
    if (sectionPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', startCountersWhenVisible);
    }
} else {
    console.error("Элемент с классом 'about-hero' не найден.");
}
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Анимация таймлайна
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimeline() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                item.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkTimeline);
    checkTimeline(); // Проверить при загрузке
    
    // Анимация счетчиков
    window.addEventListener('scroll', startCountersWhenVisible);
    startCountersWhenVisible(); // Проверить при загрузке
    
    // Плавные переходы между секциями
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});