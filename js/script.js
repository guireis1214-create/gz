// ==========================
// BOAS-VINDAS
// ==========================
window.addEventListener("load", () => {
    console.log("Portfólio carregado!");
});

// Espera o DOM carregar (evita erros de elementos não encontrados)
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MENU ATIVO
    // ==========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const top = section.offsetTop - 150;
            const height = section.clientHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                current = section.id;
            }
        });

        if (!current) return;

        navLinks.forEach(link => {
            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("ativo");
            }
        });
    });

    // ==========================
    // ANIMAÇÃO AO ROLAR
    // ==========================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll("section").forEach(sec => {
        observer.observe(sec);
    });

    // ==========================
    // TEMA ESCURO
    // ==========================
    const botaoTema = document.getElementById("temaBtn");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            botaoTema.innerHTML =
                document.body.classList.contains("dark")
                    ? "☀️ Tema Claro"
                    : "🌙 Tema Escuro";
        });
    }

    // ==========================
    // INSTAGRAM
    // ==========================
    const instagram = document.querySelector("footer a[href*='instagram']");

    if (instagram) {
        instagram.addEventListener("click", () => {
            alert("Abrindo Instagram...");
        });
    }


});