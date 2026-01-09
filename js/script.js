// Aguarda o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os elementos que queremos animar (cards, seções, etc)
    const observerElements = document.querySelectorAll('.project-card, .skill-category, .about-text, .stat');

    // Configura o "Observador"
    const observerOptions = {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' quando o elemento entra na tela
                entry.target.classList.add('visible');
                // Para de observar depois que já animou uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplica o observador aos elementos
    observerElements.forEach(el => {
        el.classList.add('fade-in-section'); // Adiciona classe base
        observer.observe(el);
    });
});