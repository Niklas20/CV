const translations = {
    fi: {
        header: "Niklas Virtanen",
        tagline: "Ohjelmoija"
    },
    en: {
        header: "Niklas Virtanen",
        tagline: "Programmer"
    }
};

let currentLanguage = "fi";

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (translations[lang] && translations[lang]["title"]) {
        document.title = translations[lang]["title"];
    }
};

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage(currentLanguage);
});