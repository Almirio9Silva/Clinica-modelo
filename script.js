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
});