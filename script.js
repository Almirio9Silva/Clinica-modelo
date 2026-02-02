document.addEventListener('DOMContentLoaded', () => {
    // 1. CARROSSEL HERO (5 segundos)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 2. LIGHTBOX COM NAVEGAÇÃO
    const lightbox = document.getElementById("lightbox");
    const imgAmpliada = document.getElementById("img-ampliada");
    const imagensGaleria = Array.from(document.querySelectorAll(".foto-item img"));
    const btnFechar = document.querySelector(".close-lightbox");
    const btnPrev = document.querySelector(".prev-slide");
    const btnNext = document.querySelector(".next-slide");
    let indexAtual = 0;

    function abrirImagem(index) {
        indexAtual = index;
        imgAmpliada.src = imagensGaleria[indexAtual].src;
        lightbox.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    imagensGaleria.forEach((img, index) => {
        img.onclick = () => abrirImagem(index);
    });

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

    const fechar = () => {
        lightbox.style.display = "none";
        document.body.classList.remove("no-scroll");
    };

    btnFechar.onclick = fechar;
    lightbox.onclick = (e) => {
        if (e.target !== imgAmpliada && e.target !== btnPrev && e.target !== btnNext) fechar();
    };

    // 3. FORMULÁRIO WHATSAPP (Sanitizado)
    const form = document.getElementById('formAtendimento');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;
            const numeroWhats = "5561993705603";
            const texto = `Olá! Me chamo ${nome}. Telefone: ${telefone}. Gostaria de informações: ${mensagem}`;
            window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`, '_blank');
        });
    }
});