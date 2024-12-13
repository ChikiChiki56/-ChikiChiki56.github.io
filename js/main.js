//Закриття баннера
document.querySelector('.close-button').addEventListener('click', () => {
    const banner = document.querySelector('.banner');
    banner.style.display = 'none';
});


document.addEventListener('click', function (event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const burgerMenu = document.querySelector('.burger-menu');

    // Перевіряємо, чи натиснуто за межами меню або кнопки
    if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('open'); // Закриваємо меню
    }
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open'); // Закриваємо меню
    } else {
        mobileMenu.classList.add('open'); // Відкриваємо меню
    }
}

const swiper = new Swiper('.swiper-container', {
    loop: true, // Циклічний свайп
    slidesPerView: 1, // Одна картка на екрані
    centeredSlides: true, // Центрування активного слайда
    autoplay: {
      delay: 3000, // Автозапуск через 3 секунди
      disableOnInteraction: false, // Продовження після взаємодії
    },
    speed: 500, // Швидкість анімації свайпа
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    initialSlide: 0, // Починаємо зі слайда 0
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/properties.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON Loaded:', data);

            const modalContent = data.creator;
            const modal = document.getElementById('welcomeModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const closeBtn = document.querySelector('.close-btn');

            // Заповнюємо дані
            modalImage.src = modalContent.image || '';
            modalTitle.textContent = modalContent.name;
            modalDescription.textContent = data.siteDescription;

            // Показуємо модальне вікно
            console.log('Removing hidden class from modal');
            modal.classList.remove('hidden');

            // Закриття модального вікна
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });

            // Закриття по кліку за межами вікна
            window.addEventListener('click', event => {
                if (event.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        })
        
        .catch(error => console.error('Error loading JSON:', error));
        fetch('json/properties.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
});
