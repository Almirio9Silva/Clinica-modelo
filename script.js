// 1. Efeito de Scroll no Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.backgroundColor = '#f4f9f9';
    } else {
        nav.style.padding = '15px 0';
        nav.style.backgroundColor = '#fff';
    }
});

// 2. Animação de Entrada (Fade In) ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, index * 300);
    });
});

// 3. Efeito de Revelar ao Rolar a página (Scroll Reveal)
const revealOnScroll = () => {
    const cards = document.querySelectorAll('.reveal');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        const revealPoint = 150;

        if (cardTop < windowHeight - revealPoint) {
            card.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// 4. Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});