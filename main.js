// Отримуємо елементи
const heroBtn = document.querySelector('.hero-btn');
const modalButton = document.querySelector('.modal-button');
const backdrop = document.getElementById('backdrop');

// Функція для відкриття модального вікна
heroBtn.addEventListener('click', () => {
  backdrop.classList.add('active');
});

// Функція для закриття модального вікна
modalButton.addEventListener('click', () => {
  backdrop.classList.remove('active');
});

