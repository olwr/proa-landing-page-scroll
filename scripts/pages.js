// Pages
const page = document.querySelector('.page');

// Buttons
const btnStart = document.querySelector('#btn-start');

// 
const visible = 'visible';

export default function showPage() {
    btnStart.addEventListener('click', () => {
        page.classList.add(visible);
        btnStart.setAttribute('disabled', true)
    });
};