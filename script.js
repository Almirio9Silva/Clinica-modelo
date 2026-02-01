// Aguarda o carregamento do conteúdo
document.addEventListener('DOMContentLoaded', () => {
    
    // Log de boas vindas para teste
    console.log("Site da Reablar carregado com sucesso!");

    // Animação simples ao rolar a página (Efeito de revelação)
    const cards = document.querySelectorAll('.card');
    
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });

    // Função para rastrear clique no WhatsApp (útil para marketing futuro)
    const whatsappBtn = document.getElementById('whatsapp-btn');
    whatsappBtn.addEventListener('click', () => {
        console.log("Usuário clicou para agendar via WhatsApp");
    });
	
	let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Muda a imagem a cada 5000ms (5 segundos)
setInterval(showNextSlide, 5000);

// Garante que o código só rode após o site carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Lógica do Lightbox ---
    const lightbox = document.getElementById("lightbox");
    const imgAmpliada = document.getElementById("img-ampliada");
    const imagensGaleria = document.querySelectorAll(".foto-item img");
    const btnFechar = document.querySelector(".close-lightbox");

    // Verifica se os elementos existem antes de aplicar o clique
    if (lightbox && imagensGaleria.length > 0) {
        imagensGaleria.forEach(img => {
            img.addEventListener("click", function() {
                lightbox.style.display = "block";
                imgAmpliada.src = this.src; 
            });
        });
    }

    // Fechar ao clicar no 'X'
    if (btnFechar) {
        btnFechar.onclick = () => lightbox.style.display = "none";
    }

    // Fechar ao clicar fora da imagem (no fundo escuro)
    window.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    };

    // --- Lógica do Carrossel (5 segundos) ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const imgAmpliada = document.getElementById("img-ampliada");
    const imagensGaleria = Array.from(document.querySelectorAll(".foto-item img"));
    const btnFechar = document.querySelector(".close-lightbox");
    const btnPrev = document.querySelector(".prev-slide");
    const btnNext = document.querySelector(".next-slide");
    
    let indexAtual = 0;

    // Função para abrir e atualizar a imagem
    function abrirImagem(index) {
        indexAtual = index;
        imgAmpliada.src = imagensGaleria[indexAtual].src;
        lightbox.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    imagensGaleria.forEach((img, index) => {
        img.onclick = () => abrirImagem(index);
    });

    // Lógica para trocar imagem
    btnNext.onclick = (e) => {
        e.stopPropagation();
        indexAtual = (indexAtual + 1) % imagensGaleria.length;
        imgAmpliada.src = imagensGaleria[indexAtual].src;
    };

    btnPrev.onclick = (e) => {
        e.stopPropagation();
        indexAtual = (indexAtual - 1 + imagensGaleria.length) % imagensGaleria.length;
        imgAmpliada.src = imagensGaleria[indexAtual].src;
    };

    function fechar() {
        lightbox.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    btnFechar.onclick = fechar;
    lightbox.onclick = (e) => { if(e.target !== imgAmpliada && e.target !== btnPrev && e.target !== btnNext) fechar(); };
});