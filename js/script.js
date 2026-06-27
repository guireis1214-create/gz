// ==========================
// BOAS-VINDAS
// ==========================
window.addEventListener("load", () => {
    console.log("Portfólio carregado!");
});

// ==========================
// DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // PROJETOS (RENDER DINÂMICO)
    // ==========================
    const projetos = [
        {
            titulo: "Sistema de Cadastro",
            descricao: "Projeto em desenvolvimento."
        },
        {
            titulo: "Loja Virtual",
            descricao: "Projeto em desenvolvimento."
        }
    ];

    const containerProjetos = document.querySelector("#projetos");

    if (containerProjetos) {

        projetos.forEach(projeto => {

            const card = `
                <article class="card-projeto">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </article>
            `;

            containerProjetos.innerHTML += card;
        });

    }

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
    // FORMULÁRIO CONTATO
    // ==========================
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            alert("Mensagem enviada com sucesso!");

            form.reset();
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
  const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("rolando");
    } else {
        header.classList.remove("rolando");
    }
});

});
