
document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP_NUMBER = "5512996613977";
    const CONTACT_EMAIL = "crazyupcom@gmail.com";
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const themeToggle = document.createElement("button");
    themeToggle.type = "button";
    themeToggle.className = "cu-theme-toggle";
    themeToggle.setAttribute("aria-label", "Alternar modo claro e escuro");
    themeToggle.innerHTML = '<span aria-hidden="true">☼</span><span class="cu-theme-toggle__label">Modo claro</span>';
    document.body.appendChild(themeToggle);
    const savedTheme = localStorage.getItem("cu-theme");
    if (savedTheme === "light") document.body.classList.add("theme-light");
    const updateThemeLabel = () => {
        const isLight = document.body.classList.contains("theme-light");
        themeToggle.querySelector("span:last-child").textContent = isLight ? "Modo escuro" : "Modo claro";
        themeToggle.querySelector("span:first-child").textContent = isLight ? "☾" : "☼";
    };
    updateThemeLabel();
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-light");
        localStorage.setItem("cu-theme", document.body.classList.contains("theme-light") ? "light" : "dark");
        updateThemeLabel();
    });

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.endsWith(currentPage)) {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        }
    });

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    let contactAction = "whatsapp";

    if (form) {
        form.querySelectorAll("[data-contact-action]").forEach((button) => {
            button.addEventListener("click", () => {
                contactAction = button.dataset.contactAction;
            });
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const data = new FormData(form);
            const company = data.get("company") ? `\nEmpresa: ${data.get("company")}` : "";
            const text =
                "Olá, Crazy Up! Gostaria de conversar sobre um projeto.\n\n" +
                `Nome: ${data.get("name")}\n` +
                `E-mail: ${data.get("email")}` +
                `${company}\n` +
                `Serviço: ${data.get("service")}\n\n` +
                `Mensagem:\n${data.get("message")}`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
            const emailSubject = "Novo contato pelo site Crazy Up";
            const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(text)}`;

            const isEmail = contactAction === "email";
            formMessage.textContent = isEmail
                ? "Abrindo seu aplicativo de e-mail com a mensagem preenchida..."
                : "Abrindo o WhatsApp com sua mensagem...";
            formMessage.classList.remove("text-muted");
            formMessage.classList.add("text-success");
            window.open(isEmail ? emailUrl : whatsappUrl, "_blank", "noopener");
        });
    }

    const projectEntries = `01 foodee|index.html
02 tasty|about.html
03 ethereal|index.html
04 karmo|contact.html
05 bodo|index.html
06 portfolio-master|index.html
07 Snow-master|blog-single.html
08 Synthetica|index.html
09 Sprout-master|image-background.html
10 bicycling-master|index.html
100 CookingSchool|index.html
11 megakit-master|HTML/about.html
12 GARAGE|contact.html
13 Knight|index.html
14 New Age|index.html
15 Treviso|index.html
16 story|index-demo.html
17 Cardio|index.html
18 infinity|index.html
19 Made One|index.html
20 Made Two|index.html
21 Weather|index.html
22 John Doe|index.html
23 rage|index.html
24 Solid-State|elements.html
25 Invention|elements.html
26 exigo|index.html
27 logic|index.html
28 clemo|aboutus.html
29 bino|index.html
30 hats|index.html
31 vira|elements.html
32 landing-zero|index.html
33 Aircv|HTML/index.html
34 wow|element.html
35 Volcan|elements.html
36 rabbit|index.html
37 Lazyfox|index.html
38 conference|index.html
39 SIGHT|about.html
40 Metronic-Shop-UI|theme/shop-about.html
41 Metronic-One-Page|theme/index.html
42 navigator-onepage|index.html
43 Metronic-One-Page|theme/index.html
44 fame|index.html
45 themelight|blog.html
46 Plantilla|index.html
47 avana|about.html
48 Metronic-Frontend|theme/blog-item.html
49 Asentus|HTML/about.html
50 airspace|contact.html
51 acidus|HTML/about.html
52 AppLayers|about-us.html
53 BizExpress|index.html
54 Bizium|blog.html
55 robot_factory|about.html
56 ghughu|about.html
57 Texas-Lawyer|index.html
58 lifetrackr|404.html
59 Euro-Travels|about.html
60 MeatKing|index.html
61 Mamma-s-Kitchen|index.html
62 Twenty|contact.html
63 Spectral|elements.html
64 gentelella|documentation/index.html
65 boxer|index.html
66 white_pro|blog-post.html
67 awesome|index.html
68 JohnDoe|index.html
69 lucy|index.html
70 brandi|index.html
71 meghna|blog.html
72 Navada-plus|index.html
73 Rain|index.html
74 sports-coach|index.html
75 agency|about.html
76 humanity|about.html
77 Imminent|index.html
78 Evento|index.html
79 layla|index.html
80 restaurant|index.html
81 Travellers|index.html
82 Restaurant|index.html
83 Fitness|index.html
84 Creative|index.html
85 Awesome|index.html
86 Photographer|index.html
87 Luxury|index.html
88 DarkJoe|index.html
89 Developer|index.html
90 polo|HTML/index.html
91 Renessa|index.html
92 Office|about.html
93 Flusk|index.html
94 the_portfolio|index.html
95 Initio|about.html
96 dolphin|index.html
97 Soft-Tech|index.html
98 Mind-Craft|index.html
99 Season|index.html
academia|index.html
advocacia|index.html
clinica-estetica|index.html
clinica-medica|index.html
coach-consultor|index.html
consultorio-odontologico|index.html
contabilidade|index.html
escola-idiomas|index.html
imobiliaria|index.html
infoprodutor|index.html
loja-roupa|index.html
oficina-mecanica|index.html
petshop|index.html
restaurante|index.html
salao-beleza|index.html`.trim().split("\n").map((entry) => {
        const [folder, page] = entry.split("|");
        return { folder, page };
    });

    const encodePath = (path) => path.split("/").map(encodeURIComponent).join("/");
    const projectTitle = (folder) => folder.replace(/^\d+\s+/, "").replace(/[-_]/g, " ");
    const projectCard = (project, index, basePath) => {
        const title = projectTitle(project.folder);
        const projectUrl = `${basePath}page-project/${encodePath(project.folder)}/${encodePath(project.page)}`;
        return `<div class="col-md-6 col-lg-4"><article class="portfolio-card h-100"><div class="project-screen"><iframe src="${projectUrl}" title="Prévia do projeto ${title}" loading="lazy"></iframe><span>CRAZY UP / ${String(index + 1).padStart(2, "0")}</span></div><div class="portfolio-card__content"><span class="project-type">EXPERIÊNCIA DIGITAL</span><h3>${title}</h3><a class="project-link" href="${projectUrl}" target="_blank" rel="noopener">Abrir projeto <span aria-hidden="true">↗</span></a></div></article></div>`;
    };

    const featuredProjects = [
        { title: "Sistema para barbearia", type: "AGENDA E GESTÃO", description: "Agenda, profissionais, serviços e clientes em uma operação simples.", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=82" },
        { title: "Sistema de hamburgueria", type: "PEDIDOS ONLINE", description: "Cardápio digital, pedidos e acompanhamento para vender melhor.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=82" },
        { title: "Sistema para pousadas", type: "RESERVAS", description: "Disponibilidade, reservas e contato direto com seus hóspedes.", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=82" },
    ];
    const featuredProjectCard = (project) => `<div class="col-md-6 col-lg-4"><article class="portfolio-card h-100 featured-project-card"><div class="featured-project-card__image"><img src="${project.image}" alt="${project.title}"></div><div class="portfolio-card__content"><span class="project-type">${project.type}</span><h3>${project.title}</h3><p>${project.description}</p><a class="project-link js-open-chat" href="#">Conhecer solução <span aria-hidden="true">↗</span></a></div></article></div>`;

    const projectGrid = document.getElementById("projectGrid");
    if (projectGrid) {
        projectGrid.innerHTML = projectEntries.map((project, index) => projectCard(project, index, "../")).join("") + `<div class="col-md-6 col-lg-4"><a class="portfolio-add-card h-100" href="contato.html"><span class="portfolio-add-card__plus" aria-hidden="true">+</span><span class="project-type">PRÓXIMO PROJETO</span><h3>Seu projeto pode ser o próximo destaque.</h3><p>Vamos conversar sobre a sua ideia?</p><span class="project-link">Falar com a Crazy Up <span aria-hidden="true">→</span></span></a></div>`;
    }

    const homeProjectGrid = document.getElementById("homeProjectGrid");
    if (homeProjectGrid) {
        homeProjectGrid.innerHTML = featuredProjects.map(featuredProjectCard).join("");
    }
});

/* =========================================================
   BOT DE ATENDIMENTO (chat com respostas automáticas)
   ---------------------------------------------------------
   Widget 100% independente: monta o botão flutuante e a
   janela de chat via JavaScript, então não é preciso alterar
   nenhum arquivo .html. Funciona em qualquer página porque
   calcula sozinho o caminho (basePath) até as outras páginas.

   Para editar as perguntas e respostas do bot, mexa somente
   na lista "faqBase" logo abaixo.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP_NUMBER = "5512996613977";
    const CONTACT_EMAIL = "crazyupcom@gmail.com";

    // "../" quando a página está dentro de /pages/, "" quando é a home.
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";
    const pageUrl = (file) => `${basePath}pages/${file}`;
    const homeUrl = () => `${basePath}index.html`;

    // Remove acentos para facilitar a comparação de palavras-chave.
    const normalize = (text) =>
        text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    const whatsappLink = (message) =>
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const emailLink = (subject, body) =>
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Base de perguntas frequentes. Cada item tem palavras-chave (keys),
    // uma resposta (reply) e, opcionalmente, um botão de link (link).
    const faqBase = [
        {
            keys: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "eae", "opa", "hello"],
            reply: "Olá! 👋 Eu sou o assistente virtual da Crazy Up. Posso te ajudar com informações sobre serviços, portfólio, orçamento, prazos ou contato. O que você gostaria de saber?",
        },
        {
            keys: ["servico", "servicos", "site", "sites", "landing", "sistema", "sistemas", "aplicativo", "app", "desenvolvimento"],
            reply: "Trabalhamos com sites institucionais, landing pages, sistemas web e aplicativos sob medida para empresas que querem crescer.",
            link: { text: "Ver serviços", href: pageUrl("servicos.html") },
        },
        {
            keys: ["portfolio", "projeto", "projetos", "trabalho", "trabalhos", "case", "cases", "exemplo", "exemplos"],
            reply: "Temos vários projetos no nosso portfólio, com sites, sistemas e landing pages já entregues. Vale a pena dar uma olhada!",
            link: { text: "Ver portfólio", href: pageUrl("portfolio.html") },
        },
        {
            keys: ["preco", "valor", "valores", "quanto custa", "orcamento", "investimento", "custo"],
            reply: "O valor de cada projeto varia conforme o que você precisa (site, landing page ou sistema). O ideal é enviar os detalhes da sua ideia pelo formulário de contato para receber um orçamento sob medida.",
            link: { text: "Solicitar orçamento", href: pageUrl("contato.html") },
        },
        {
            keys: ["prazo", "prazos", "tempo", "demora", "quanto tempo"],
            reply: "O prazo varia com a complexidade do projeto: landing pages costumam ser mais rápidas, e sistemas web sob medida levam um pouco mais. Fale com a gente para um prazo estimado para o seu caso.",
            link: { text: "Falar sobre meu projeto", href: pageUrl("contato.html") },
        },
        {
            keys: ["sobre", "empresa", "quem sao", "quem e a crazy", "missao", "visao", "valores da crazy"],
            reply: "A Crazy Up nasceu para transformar boas ideias em soluções digitais modernas, unindo tecnologia, design e estratégia.",
            link: { text: "Conhecer a Crazy Up", href: pageUrl("sobre.html") },
        },
        {
            keys: ["obrigado", "obrigada", "valeu", "thanks", "tchau", "ate mais", "falou"],
            reply: "Por nada! 😊 Se precisar de mais alguma coisa, é só chamar. Boa sorte com o seu projeto!",
        },
    ];

    const HUMAN_KEYS = ["whatsapp", "telefone", "email", "e-mail", "atendente", "humano", "pessoa", "falar com alguem", "contato"];
    const FALLBACK_REPLY =
        "Ainda não tenho essa resposta pronta 🤔. Posso te ajudar com serviços, portfólio, orçamento ou prazos — ou você pode falar direto com a nossa equipe.";

    function matchFaq(rawText) {
        const text = normalize(rawText);
        if (HUMAN_KEYS.some((key) => text.includes(key))) return "human";
        return faqBase.find((item) => item.keys.some((key) => text.includes(key))) || null;
    }

    // ---------- Monta o HTML do widget ----------
    const widget = document.createElement("div");
    widget.className = "cu-chat";
    widget.innerHTML = `
        <button type="button" class="cu-chat__toggle" id="cuChatToggle" aria-expanded="false" aria-controls="cuChatPanel" aria-label="Abrir atendimento">
            <span class="cu-chat__toggle-icon cu-chat__toggle-icon--open" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3A.6.6 0 0 1 3.6 20V6a2 2 0 0 1 2-2h-1.6Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="8.5" cy="10.5" r="1.1" fill="currentColor"/><circle cx="12.5" cy="10.5" r="1.1" fill="currentColor"/><circle cx="16.5" cy="10.5" r="1.1" fill="currentColor"/></svg>
            </span>
            <span class="cu-chat__toggle-icon cu-chat__toggle-icon--close" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
            <span class="cu-chat__badge" id="cuChatBadge">1</span>
        </button>

        <div class="cu-chat__panel" id="cuChatPanel" role="dialog" aria-label="Atendimento virtual Crazy Up" aria-hidden="true">
            <header class="cu-chat__header">
                <span class="cu-chat__avatar">CU</span>
                <div class="cu-chat__header-text">
                    <strong>Crazy Up</strong>
                    <span><i class="cu-chat__status-dot" aria-hidden="true"></i>Assistente virtual</span>
                </div>
                <button type="button" class="cu-chat__close" id="cuChatClose" aria-label="Fechar atendimento">&times;</button>
            </header>

            <div class="cu-chat__messages" id="cuChatMessages" aria-live="polite"></div>

            <div class="cu-chat__quick" id="cuChatQuick">
                <button type="button" data-q="Quais serviços vocês oferecem?">Serviços</button>
                <button type="button" data-q="Quero ver o portfólio">Portfólio</button>
                <button type="button" data-q="Quanto custa um projeto?">Orçamento</button>
                <button type="button" data-q="Quero falar com um atendente">Falar com atendente</button>
            </div>

            <form class="cu-chat__form" id="cuChatForm">
                <input type="text" id="cuChatInput" placeholder="Digite sua mensagem..." autocomplete="off" aria-label="Digite sua mensagem">
                <button type="submit" aria-label="Enviar mensagem">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(widget);

    const toggleBtn = document.getElementById("cuChatToggle");
    const closeBtn = document.getElementById("cuChatClose");
    const panel = document.getElementById("cuChatPanel");
    const messagesBox = document.getElementById("cuChatMessages");
    const quickBox = document.getElementById("cuChatQuick");
    const form = document.getElementById("cuChatForm");
    const input = document.getElementById("cuChatInput");
    const badge = document.getElementById("cuChatBadge");

    let started = false;

    function scrollToBottom() {
        messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function addMessage(role, text, linkData) {
        const row = document.createElement("div");
        row.className = `cu-chat__msg cu-chat__msg--${role}`;
        const bubble = document.createElement("div");
        bubble.className = "cu-chat__bubble";
        bubble.textContent = text;
        row.appendChild(bubble);

        if (linkData) {
            const actions = document.createElement("div");
            actions.className = "cu-chat__msg-actions";
            const a = document.createElement("a");
            a.href = linkData.href;
            a.textContent = linkData.text;
            if (linkData.blank) {
                a.target = "_blank";
                a.rel = "noopener";
            }
            actions.appendChild(a);
            row.appendChild(actions);
        }

        messagesBox.appendChild(row);
        scrollToBottom();
    }

    function showTyping(callback) {
        const row = document.createElement("div");
        row.className = "cu-chat__msg cu-chat__msg--bot cu-chat__msg--typing";
        row.innerHTML = `<div class="cu-chat__bubble cu-chat__typing"><span></span><span></span><span></span></div>`;
        messagesBox.appendChild(row);
        scrollToBottom();
        setTimeout(() => {
            row.remove();
            callback();
        }, 550 + Math.random() * 400);
    }

    function respondTo(userText) {
        const match = matchFaq(userText);
        showTyping(() => {
            if (match === "human") {
                addMessage(
                    "bot",
                    "Claro! Você pode falar agora mesmo com a nossa equipe pelo WhatsApp, ou enviar um e-mail que respondemos assim que possível."
                );
                addMessage("bot", "", {
                    text: "Chamar no WhatsApp ↗",
                    href: whatsappLink("Olá, Crazy Up! Vim pelo chat do site e gostaria de conversar sobre um projeto."),
                    blank: true,
                });
                return;
            }
            if (match) {
                addMessage("bot", match.reply, match.link);
                return;
            }
            addMessage("bot", FALLBACK_REPLY, {
                text: "Falar com atendente",
                href: whatsappLink("Olá, Crazy Up! Vim pelo chat do site e gostaria de falar com um atendente."),
                blank: true,
            });
        });
    }

    function handleUserMessage(text) {
        const clean = text.trim();
        if (!clean) return;
        addMessage("user", clean);
        input.value = "";
        respondTo(clean);
    }

    function openChat() {
        panel.classList.add("is-open");
        panel.setAttribute("aria-hidden", "false");
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.classList.add("is-active");
        badge.style.display = "none";

        if (!started) {
            started = true;
            showTyping(() => {
                addMessage(
                    "bot",
                    "Olá! 👋 Eu sou o assistente virtual da Crazy Up. Posso te ajudar com serviços, portfólio, orçamento, prazos ou colocar você em contato com a nossa equipe."
                );
            });
        }
        setTimeout(() => input.focus(), 300);
    }

    function closeChat() {
        panel.classList.remove("is-open");
        panel.setAttribute("aria-hidden", "true");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.classList.remove("is-active");
    }

    toggleBtn.addEventListener("click", () => {
        panel.classList.contains("is-open") ? closeChat() : openChat();
    });
    closeBtn.addEventListener("click", closeChat);

    quickBox.querySelectorAll("button[data-q]").forEach((btn) => {
        btn.addEventListener("click", () => handleUserMessage(btn.dataset.q));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        handleUserMessage(input.value);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && panel.classList.contains("is-open")) closeChat();
    });

    document.querySelectorAll(".js-open-chat").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            openChat();
        });
    });

    const slides = document.querySelectorAll(".promo-slide");
    if (slides.length > 1) {
        let activeSlide = 0;
        setInterval(() => {
            slides[activeSlide].classList.remove("is-active");
            activeSlide = (activeSlide + 1) % slides.length;
            slides[activeSlide].classList.add("is-active");
        }, 6500);
    }

    const promotionForm = document.getElementById("promotionForm");
    if (promotionForm) {
        const ticketArea = document.getElementById("promotionTicket");
        const feedback = document.getElementById("promotionFeedback");
        const ticketCanvas = document.getElementById("promotionCanvas");
        const ticketDownload = document.getElementById("ticketDownload");
        const ticketWhatsapp = document.getElementById("ticketWhatsapp");
        const PROMO_CODE = "LOSPOTATOSCPV";

        promotionForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(promotionForm);
            const name = String(data.get("name") || "").trim();
            const whatsapp = String(data.get("whatsapp") || "").trim();
            const coupon = String(data.get("coupon") || "").trim().toUpperCase();

            if (!name || !whatsapp || coupon !== PROMO_CODE) {
                feedback.textContent = "Confira seus dados e digite o cupom LOSPOTATOSCPV corretamente.";
                feedback.className = "promotion-feedback is-error";
                return;
            }

            const ticketId = `CU-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
            const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            const expiresText = expiresAt.toLocaleDateString("pt-BR");
            const context = ticketCanvas.getContext("2d");
            ticketCanvas.width = 1200;
            ticketCanvas.height = 720;
            context.fillStyle = "#020d1e";
            context.fillRect(0, 0, ticketCanvas.width, ticketCanvas.height);
            context.fillStyle = "#10b8ee";
            context.fillRect(0, 0, 18, ticketCanvas.height);
            context.fillStyle = "#ff7a00";
            context.fillRect(ticketCanvas.width - 18, 0, 18, ticketCanvas.height);
            context.fillStyle = "#f5f8ff";
            context.font = "800 58px Arial";
            context.fillText("CRAZY UP", 78, 100);
            context.fillStyle = "#ff7a00";
            context.font = "800 28px Arial";
            context.fillText("TICKET DE PROMOÇÃO", 82, 150);
            context.fillStyle = "#f5f8ff";
            context.font = "700 42px Arial";
            context.fillText(name.slice(0, 28), 82, 270);
            context.font = "400 26px Arial";
            context.fillStyle = "#b9c9df";
            context.fillText(`ID: ${ticketId}`, 82, 330);
            context.fillText(`Válido até: ${expiresText}`, 82, 375);
            context.fillText("Apresente este ticket à equipe Crazy Up.", 82, 455);
            context.fillStyle = "#10b8ee";
            context.font = "700 30px Arial";
            context.fillText(PROMO_CODE, 82, 555);
            context.fillStyle = "#8dc7e8";
            context.font = "400 22px Arial";
            context.fillText(`WhatsApp cadastrado: ${whatsapp}`, 82, 610);

            ticketArea.classList.add("is-visible");
            feedback.textContent = `Ticket gerado com sucesso. Guarde o ID ${ticketId}; ele é válido por 7 dias.`;
            feedback.className = "promotion-feedback is-success";
            ticketDownload.href = ticketCanvas.toDataURL("image/png");
            ticketDownload.download = `${ticketId}.png`;
            const ticketMessage = `Olá, Crazy Up! Meu ticket promocional foi gerado.\n\nNome: ${name}\nID: ${ticketId}\nValidade: ${expiresText}\nCupom: ${PROMO_CODE}\n\nLink da promoção: ${window.location.href}`;
            ticketWhatsapp.href = whatsappLink(ticketMessage);
            ticketWhatsapp.dataset.ticketMessage = ticketMessage;
        });

        ticketWhatsapp.addEventListener("click", async (event) => {
            if (!ticketWhatsapp.dataset.ticketMessage) return;
            if (!navigator.share || !navigator.canShare) return;
            event.preventDefault();
            const response = await fetch(ticketCanvas.toDataURL("image/png"));
            const blob = await response.blob();
            const file = new File([blob], ticketDownload.download, { type: "image/png" });
            if (navigator.canShare({ files: [file] })) {
                await navigator.share({ title: "Ticket Crazy Up", text: ticketWhatsapp.dataset.ticketMessage, files: [file] });
            }
        });
    }
});
