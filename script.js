// Мобильное меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Модальное окно
const modal = document.getElementById('booking-modal');
const modalTitle = document.getElementById('modal-title');
const bookingForm = document.getElementById('booking-form');

function openModal(serviceName) {
    if (modal && modalTitle) {
        modalTitle.textContent = serviceName || 'Запись в СТО «Ис авто+»';
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Заявка принята! Специалист СТО «Ис авто+» свяжется с вами в ближайшее время.');
        bookingForm.reset();
        closeModal();
    });
}

// Проверка времени работы (09:00 - 18:00)
function checkWorkStatus() {
    const statusEl = document.getElementById('work-status');
    if (!statusEl) return;
    const hour = new Date().getHours();
    if (hour >= 9 && hour < 18) {
        statusEl.textContent = '🟢 Открыто до 18:00';
    } else {
        statusEl.textContent = '🕒 Откроемся в 09:00';
    }
}
checkWorkStatus();