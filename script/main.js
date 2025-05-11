document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.testimonials-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let isAutoPlaying = true;
    let autoPlayInterval;
    let isAnimating = false;

    cards.forEach(() => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    
    function updateActiveStates(index) {
        requestAnimationFrame(() => {
            cards.forEach((card, i) => {
                card.classList.remove('active');
            });
            cards[index].classList.add('active');
            
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        });
    }

    function updateSlider(index, isAuto = false) {
        if (isAnimating && isAuto) return;
        isAnimating = true;

        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
        updateActiveStates(index);

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    function nextSlide(isAuto = false) {
        if (isAnimating && isAuto) return;
        const nextIndex = (currentIndex + 1) % cards.length;
        updateSlider(nextIndex, isAuto);
    }

    function prevSlide() {
        if (isAnimating) return;
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider(prevIndex);
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => nextSlide(true), 3000);
        isAutoPlaying = true;
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            isAutoPlaying = false;
        }
    }

    function handleInteraction() {
        stopAutoPlay();
        setTimeout(() => {
            if (!isAutoPlaying) {
                startAutoPlay();
            }
        }, 5000);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        handleInteraction();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        handleInteraction();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (isAnimating) return;
            updateSlider(index);
            handleInteraction();
        });
    });

    track.addEventListener('transitionend', () => {
        isAnimating = false;
    });

    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);
    track.addEventListener('touchstart', stopAutoPlay);
    track.addEventListener('touchend', () => {
        setTimeout(startAutoPlay, 5000);
    });

    updateActiveStates(0);
    cards[0].classList.add('active');
    startAutoPlay();

    function getRandomPets(pets, count) {
        const shuffled = [...pets].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function createPetCard(pet) {
        const petCard = document.createElement('div');
        petCard.className = `pet-card ${pet.adopted ? 'adopted' : ''}`;
        
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
                ${pet.adopted ? '<span class="adopted-badge">Пристроен</span>' : ''}
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <p><strong>Вид:</strong> ${getSpeciesName(pet.species)}</p>
                <p><strong>Возраст:</strong> ${pet.age} ${getAgeWord(pet.age)}</p>
                <p><strong>Пол:</strong> ${pet.gender === 'male' ? 'Мальчик' : 'Девочка'}</p>
                <p><strong>Порода:</strong> ${pet.breed}</p>
                <p class="pet-description">${pet.description.slice(0, 100)}...</p>
                ${!pet.adopted ? `<button class="adopt-btn" data-id="${pet.id}">Узнать о питомце</button>` : ''}
            </div>
        `;
        return petCard;
    }

    function getSpeciesName(species) {
        const speciesNames = {
            'dog': 'Собака',
            'cat': 'Кошка',
            'other': 'Другое'
        };
        return speciesNames[species] || species;
    }
    
    function getAgeWord(age) {
        const lastDigit = age % 10;
        if (age >= 11 && age <= 14) return 'лет';
        if (lastDigit === 1) return 'год';
        if (lastDigit >= 2 && lastDigit <= 4) return 'года';
        return 'лет';
    }

    const featuredPetsContainer = document.getElementById('featured-pets');
    if (featuredPetsContainer && typeof petsData !== 'undefined') {
        const featuredPets = getRandomPets(petsData.filter(pet => !pet.adopted), 3);
        featuredPets.forEach(pet => {
            featuredPetsContainer.appendChild(createPetCard(pet));
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('adopt-btn')) {
            const petId = parseInt(e.target.dataset.id);
            const pet = petsData.find(p => p.id === petId);
            
            if (pet) {
                window.location.href = `shelter.html#pet-${petId}`;
            }
        }
    });
}); 