document.addEventListener('DOMContentLoaded', function() {
    const petsData = [
        {
            id: 1,
            name: "Барсик",
            species: "cat",
            age: 2,
            gender: "male",
            breed: "Дворовый",
            description: "Барсик — это очаровательный и игривый кот, который стал настоящей звездой нашего приюта. Он обожает внимание людей и с удовольствием идет на контакт, легко находит общий язык как с детьми, так и со взрослыми. Его ласка и игривость принесут радость в ваш дом.",
            image: "assets/cat2.jpg",
            adopted: false
        },
    {
        id: 2,
        name: "Мурка",
        species: "cat",
        age: 3,
        gender: "female",
        breed: "Сиамская",
        description: "Мурка — спокойная и умная сиамская кошка, которая отлично составит компанию спокойному человеку, любящему уединение. Она предпочитает тихие уголки для отдыха и обожает мягкие подушки. Её ласка и доброта создадут атмосферу уюта в вашем доме.",
        image: "assets/cat1.png",
        adopted: false
    },
    {
        id: 3,
        name: "Ролик",
        species: "dog",
        age: 4,
        gender: "male",
        breed: "Лабрадор",
        description: "Ролик — дружелюбный и игривый лабрадор. Он отлично подходит для охоты и станет верным спутником для спортивных людей. Этот энергичный пес обожает играть на свежем воздухе и легко находит общий язык с детьми, принося радость в ваш дом.",
        image: "assets/dog1.jpg",
        adopted: false
    },
    {
        id: 4,
        name: "Винтик",
        species: "cat",
        age: 1,
        gender: "male",
        breed: "Британец",
        description: "Винтик — игривый британец, который полон энергии и любопытства. Ему всего год, и он обожает играть с мячиками, проводя часы в активных играх. Этот дружелюбный кот станет отличным компаньоном для семьи и подарит много радости, благодаря своему игривому характеру. Винтик легко адаптируется к новым условиям и быстро находит общий язык с людьми и другими питомцами.",
        image: "../images/cat3.jpg",
        adopted: false
    },
    {
        id: 5,
        name: "Толик",
        species: "dog",
        age: 1,
        gender: "male",
        breed: "Овчарка",
        description: "Толик — храбрый и верный друг, овчарка всего года от роду. У него уже есть опыт охраны, и он отлично справляется с этой задачей. Этот надежный пес станет отличным защитником вашего дома и преданным спутником в любых приключениях. Толик отличается умом и обучаемостью, что делает его идеальным выбором для активной семьи, ищущей верного и смелого компаньона.",
        image: "../images/dog2.jpg",
        adopted: false
    },
    {
        id: 6,
        name: "Снежка",
        species: "cat",
        age: 2,
        gender: "female",
        breed: "Персидская",
        description: "Снежка обладает гордым и независимым характером, что делает её настоящей леди. Несмотря на свою величественную осанку, она также любит проводить время с владельцами, проявляя нежность и ласку. Эта кошка прекрасно подходит для тех, кто ценит утонченность и изящество в домашних питомцах.",
        image: "../images/cat4.jpg",
        adopted: false
    },
    {
        id: 7,
        name: "Комок",
        species: "dog",
        age: 6,
        gender: "male",
        breed: "Бульдог",
        description: "Комок — спокойный и добрый бульдог, который всегда готов подарить свою любовь и дружбу. Он обладает уравновешенным характером и прекрасно ладит с детьми и другими питомцами. Этот милый пес станет отличным компаньоном для семей, ценящих спокойствие и уют. Комок ищет свой дом, где его будут любить и заботиться о нем.",
        image: "../images/dog3.jpg",
        adopted: false
    },
    {
        id: 8,
        name: "Кнопка",
        species: "cat",
        age: 3,
        gender: "female",
        breed: "Мэйн-кун",
        description: "Кнопка — ласковая и умная мэйн-кун, которая обладает добрым и общительным характером. Она обожает проводить время с людьми, проявляя свою нежность и привязанность. Эта кошка отличается высоким интеллектом, что делает её легко обучаемой и игривой. Кнопка станет отличным другом для семьи, обеспечивая уют и радость в каждом дне.",
        image: "../images/cat5.jpg",
        adopted: false
    },
    {
        id: 9,
        name: "Нигга",
        species: "dog",
        age: 7,
        gender: "male",
        breed: "Той-терьер",
        description: "Нигга — милый той-терьер, который уже стал стареньким. Ему очень нужен уход и забота, чтобы обеспечить комфортные условия в его золотые годы. Этот преданный пес обожает компанию людей и будет благодарен за внимание и ласку. Нигга ищет добрую семью, готовую подарить ему тепло и заботу, которые так необходимы в его возрасте.",
        image: "../images/dog4.jpg",
        adopted: false
    },
    {
        id: 10,
        name: "Шмаль",
        species: "other",
        age: 0.6,
        gender: "female",
        breed: "Ожереловый попугай",
        description: "Шмаль — очаровательный ожереловый попугай, которому всего полгода. Она полна энергии и любопытства, всегда готова исследовать окружающий мир. Шмаль обожает общение и может быстро научиться простым словам и фразам. Этот веселый и дружелюбный попугай станет ярким и радостным дополнением к вашему дому, принося много смеха и счастья.",
        image: "../images/pop.jpg",
        adopted: false
    },
    {
        id: 11,
        name: "Владимир",
        species: "other",
        age: 0.8,
        gender: "male",
        breed: "Ворон",
        description: "Владимир — харизматичная серая ворона, которой 8 месяцев. Он отличается умом и сообразительностью, легко обучается и может выполнять различные трюки. Владимир обожает общение и всегда готов порадовать своих хозяев веселыми выходками. Этот питомец станет верным другом и активным участником вашей жизни, принося радость и смех в каждый день.",
        image: "../images/voron.jpg",
        adopted: false
    },
    {
        id: 12,
        name: "Маша",
        species: "other",
        age: 0.2,
        gender: "female",
        breed: "Сирийский",
        description: "Маша — очаровательная сирийская хомячиха, ей 2 месяца. Она активная и игривая, всегда готова исследовать свою клетку и играть с игрушками. Маша обожает бегать в колесе и стягивать семечки. Этот маленький пушистик станет отличным компаньоном и подарит много радости своим владельцам.",
        image: "../images/hamster.jpg",
        adopted: false
    },
    {
        id: 13,
        name: "Тузик",
        species: "other",
        age: 3,
        gender: "male",
        breed: "Альпийская",
        description: "Тузик — дружелюбная альпийская морская свинка, которой три года. Он активный и любознательный, всегда готов исследовать новые места и играть с хозяевами. Тузик обожает свежие овощи и уютные домики, а его веселый характер принесет радость в ваш дом.",
        image: "../images/pig.jpg",
        adopted: false
    },
    {
        id: 14,
    name: "Симба",
    species: "cat",
    age: 0.5,
    gender: "male",
    breed: "Дворовой",
    description: "Симба — игривый и любопытный котенок, которому всего полгода. Он полон энергии и всегда готов играть с игрушками. Симба обожает исследовать окружающий мир и находить новые приключения. Этот маленький пушистик станет отличным другом и принесет много радости в ваш дом.",
    image: "../images/kitten.jpg",
    adopted: false
    },
    {
        id: 15,
    name: "Чарли",
    species: "dog",
    age: 3,
    gender: "male",
    breed: "Боксер",
    description: "Чарли — энергичный и веселый боксер, которому три года. Он полон жизни и обожает активные игры на свежем воздухе. Чарли дружелюбен и легко находит общий язык с людьми и другими питомцами. Этот преданный друг станет отличным компаньоном для прогулок и веселых приключений.",
    image: "../images/dog7.jpg",
    adopted: false
    },
    {
        id: 16,
        name: "Нюша",
        species: "cat",
        age: 6,
        gender: "female",
        breed: "Шотландская",
        description: "Нюша — ласковая и умная шотландская кошка, обладающая спокойным нравом. Она любит проводить время рядом с любимыми людьми и всегда готова подарить свою нежность. Нюша обожает уютные места для отдыха и может стать отличной компаньонкой для чтения книг или просмотра фильмов.",
        image: "../images/cat9.jpg",
        adopted: false
    },
    {
        id: 17,
        name: "Барни",
        species: "dog",
        age: 4,
        gender: "male",
        breed: "Сибирская хаски",
        description: "Барни — дружелюбный и активный пес породы сибирская хаски, которому четыре года. Он обожает длительные прогулки и активные игры на свежем воздухе. Барни предан своему хозяину и всегда готов поддержать его в любых приключениях. Его игривый характер и яркая личность делают его отличным компаньоном для семьи.",
        image: "../images/dog8.jpg",
        adopted: false
    },
    {
        id: 18,
        name: "Саймон",
        species: "other",
        age: 1,
        gender: "male",
        breed: "Хорек",
        description: "Саймон — игривый и ласковый хорек, которому всего год. Он полон энергии и всегда готов к приключениям. Саймон обожает исследовать новые места и играть с игрушками. Этот любознательный питомец станет веселым и активным компаньоном для вас и вашей семьи.",
        image: "../images/ferret.jpg",
        adopted: false
    },
    {
        id: 19,
        name: "Рокки",
        species: "dog",
        age: 5,
        gender: "male",
        breed: "Ротвейлер",
        description: "Рокки — тревожный и запуганный ротвейлер, которому пять лет. Он нуждается в терпеливом и заботливом хозяине, который поможет ему преодолеть страхи. Несмотря на свою настороженность, Рокки обладает добрым сердцем и может стать преданным другом, если ему дать время на адаптацию и доверие.",
        image: "../images/dog9.jpg",
        adopted: false
    },
    {
        id: 20,
        name: "Лола",
        species: "cat",
        age: 3,
        gender: "female",
        breed: "Сфинкс",
        description: "Лола — загадочная кошка породы сфинкс. Она предпочитает спокойствие и одиночество, наслаждаясь уединением в уютных уголках. Несмотря на свою независимость, Лола иногда ищет компанию и ласку от своих любимых людей. Этот необычный питомец станет отличным другом для тех, кто ценит тихие моменты и нежное общение.",
        image: "../images/cat11.jpg",
        adopted: false
    },
    {
        id: 21,
        name: "Джек",
        species: "dog",
        age: 2,
        gender: "male",
        breed: "Питбуль",
        description: "Джек — энергичный питбуль, которого сложно контролировать. У него сильный характер, и он требует опытного владельца, способного обеспечить правильное воспитание и социализацию. При должном подходе Джек может стать преданным и защитным другом для своей семьи.",
        image: "../images/dog10.jpg",
        adopted: false
    }
    ];

    // Элементы DOM
    const petsContainer = document.getElementById('pets-container');
    const searchInput = document.getElementById('pet-search');
    const speciesFilter = document.getElementById('species-filter');
    const ageFilter = document.getElementById('age-filter');
    const genderFilter = document.getElementById('gender-filter');
    const resetBtn = document.getElementById('reset-filters');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    let currentPage = 1;
    const petsPerPage = 6;
    let filteredPets = [...petsData];
    let sortedPets = [...petsData];
    renderPets();
    function renderPets(pets = sortedPets) {
        petsContainer.innerHTML = '';
    
        const start = (currentPage - 1) * petsPerPage;
        const end = start + petsPerPage;
        const paginatedPets = pets.slice(start, end);
        
        if (paginatedPets.length === 0) {
            petsContainer.innerHTML = '<div class="no-results">По вашему запросу ничего не найдено</div>';
            return;
        }
        
        paginatedPets.forEach(pet => {
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
                    <p>${pet.description}</p>
                    ${!pet.adopted ? `<button class="adopt-btn" data-id="${pet.id}">Узнать о питомце</button>` : ''}
                </div>
            `;
            petsContainer.appendChild(petCard);
        });
        
        updatePagination(pets.length);
    }

    // Функции фильтрации
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const speciesValue = speciesFilter.value;
        const ageValue = ageFilter.value;
        const genderValue = genderFilter.value;
        
        filteredPets = petsData.filter(pet => {
            const matchesSearch = pet.name.toLowerCase().includes(searchTerm) || 
                                pet.description.toLowerCase().includes(searchTerm);
            const matchesSpecies = speciesValue === 'all' || pet.species === speciesValue;
            const matchesGender = genderValue === 'all' || pet.gender === genderValue;
            
            let matchesAge = true;
            if (ageValue !== 'all') {
                if (ageValue === 'young') matchesAge = pet.age < 1;
                else if (ageValue === 'adult') matchesAge = pet.age >= 1 && pet.age <= 5;
                else if (ageValue === 'senior') matchesAge = pet.age > 5;
            }
            
            return matchesSearch && matchesSpecies && matchesAge && matchesGender;
        });
        
        currentPage = 1;
        sortedPets = [...filteredPets];
        renderPets();
    }

    // Функции сортировки
    function applySort(sortType) {
        switch(sortType) {
            case 'name-asc':
                sortedPets.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sortedPets.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'age-asc':
                sortedPets.sort((a, b) => a.age - b.age);
                break;
            case 'age-desc':
                sortedPets.sort((a, b) => b.age - a.age);
                break;
            default:
                sortedPets = [...filteredPets];
        }
        
        renderPets();
    }

    // Пагинация
    function updatePagination(totalPets) {
        const totalPages = Math.ceil(totalPets / petsPerPage);
        pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // Вспомогательные функции
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

    // Обработчики событий
    searchInput.addEventListener('input', applyFilters);
    speciesFilter.addEventListener('change', applyFilters);
    ageFilter.addEventListener('change', applyFilters);
    genderFilter.addEventListener('change', applyFilters);
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        speciesFilter.value = 'all';
        ageFilter.value = 'all';
        genderFilter.value = 'all';
        applyFilters();
    });
    
    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applySort(btn.dataset.sort);
        });
    });
    
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPets();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(sortedPets.length / petsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderPets();
        }
    });
    petsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('adopt-btn')) {
            const petId = parseInt(e.target.dataset.id);
            const pet = petsData.find(p => p.id === petId);
            
            if (pet) {
                showPetModal(pet);
            } else {
                alert('Ошибка: питомец не найден.');
            }
        }
    });
});