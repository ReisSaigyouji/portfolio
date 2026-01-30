const translations = {
    en: {
        language: { switch: "Deutsch 🇩🇪" },

        hero: {
            title: "Hello! My name is Oleg Hotau",
            subtitle: "Beginner web developer with an interest in cybersecurity."
        },

        about: {
            title: "About me",
            text1: "I am an aspiring web developer with a current focus on frontend development. In parallel, I actively study cybersecurity and system administration, dedicating a significant amount of time to developing my skills in these areas.",
            text2: "I create websites both as a hobby and professionally, and I am always open to new projects or collaborations. If you have an idea to discuss, feel free to contact me."
        },

        skills: {
            title: "Skills",
            prog: "Programming & Tools"
        },

        tech: {
            title: "Tech Setup",
            description: "This setup supports my daily development, learning, and frontend projects.",
            mainpc: "Main Workstation",
            laptop: "Mobile Work Environment",
            software: "Software & Tools",
            nvim: "Neovim - my primary editor for coding and learning",
            ide: "WebStorm / VS Code - used for frontend and project work",
            git: "Git & GitHub - version control and collaboration",
            lin: "Arch Linux - my primary OS and development environment",
            terminal: "Linux terminal - daily use of the system"
        },

        contact: {
            title: "Contact",
            text: "If you’d like to work together or just want to say hello, feel free to reach out.",
            name: "Your Name:",
            email: "Your Email:",
            message: "Message:",
            button: "Send Message"
        },

        footer: {
            top: "Back to the top"
        }
    },

    de: {
        language: { switch: "English 🇬🇧" },

        hero: {
            title: "Hallo! Mein Name ist Oleg Hotau",
            subtitle: "Angehender Webentwickler mit Interesse an Cybersicherheit."
        },

        about: {
            title: "Über mich",
            text1: "Ich bin ein angehender Webentwickler mit Schwerpunkt auf Frontend-Entwicklung. Parallel dazu beschäftige ich mich intensiv mit Cybersicherheit und Systemadministration und arbeite kontinuierlich daran, meine Kenntnisse in diesen Bereichen zu vertiefen.",
            text2: "Ich erstelle Websites sowohl als Hobby als auch professionell und bin immer offen für neue Projekte oder Kooperationen. Wenn Sie eine Idee haben, kontaktieren Sie mich gerne."
        },

        skills: {
            title: "Fähigkeiten",
            prog: "Programmierung & Tools"
        },

        tech: {
            title: "Technisches Setup",
            description: "Dieses Setup unterstützt meine tägliche Entwicklung, mein Lernen und meine Frontend-Projekte.",
            mainpc: "Hauptrechner",
            laptop: "Mobiles Arbeitsumfeld",
            software: "Software & Werkzeuge",
            nvim: "Neovim – mein primärer Editor zum Programmieren und Lernen",
            ide: "WebStorm / VS Code – für Frontend- und Projektarbeit",
            git: "Git & GitHub – Versionskontrolle und Zusammenarbeit",
            lin: "Arch Linux – mein Hauptbetriebssystem",
            terminal: "Linux-Terminal – tägliche Systemnutzung"
        },

        contact: {
            title: "Kontakt",
            text: "Wenn Sie zusammenarbeiten möchten oder einfach Hallo sagen wollen, melden Sie sich gerne.",
            name: "Ihr Name:",
            email: "Ihre E-Mail:",
            message: "Nachricht:",
            button: "Nachricht senden"
        },

        footer: {
            top: "Zurück nach oben"
        }
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function translatePage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const keys = el.dataset.i18n.split(".");
        let text = translations[lang];

        for (const key of keys) {
            text = text?.[key];
        }

        if (text) {
            el.innerHTML = text;
        }
    });

    localStorage.setItem("lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "de" : "en";
    translatePage(currentLang);
});

translatePage(currentLang);
