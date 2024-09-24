const openBtn = document.querySelector('.hero-btn');
const closeBtn = document.querySelector('.mob-close-btn');
const modal = document.querySelector('.mob-menu');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // Відкриває модальне вікно
});

// Функція для закриття модального вікна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Закриває модальне вікно
});
