const markAsRead = document.querySelector('.read-all');
const notification = document.querySelectorAll('.notification-card--content-item');
const unread = document.querySelectorAll('.unread-item');
const counter = document.querySelector('.counter');
const redDot = document.querySelectorAll('.dot');

let a = unread.length;
counter.textContent = a;


markAsRead.addEventListener('click', () => {
    notification.forEach(e => e.classList.remove('unread-item'));
    redDot.forEach(e => e.classList.add('hidden'));
    counter.textContent = '0';
})
