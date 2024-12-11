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
