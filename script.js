const translations = {
    fi: {
        experience: "Työkokemus",
        internship: "Työharjoittelu",
        summer_job: "Kesätyö",
        header: "Niklas Virtanen",
        about: "Tietoa minusta",
        about_text: "Olen Niklas, 18-vuotias tietojenkäsittelyn ja ohjelmoinnin opiskelija, joka on erityisen kiinnostunut ohjelmisto-, peli- ja web-kehityksestä. Tykkään oppia uusia asioita, ja tavoitteenani on jatkuvasti kehittää taitojani käytännön projekteilla. Minulla on työkokemusta eri aloilta, mikä on vahvistanut sopeutumiskykyäni, itseohjautuvuuttani ja yhteistyötaitojani. Uskon, että tekninen osaamiseni yhdistettynä oppimishaluuni tekee minusta arvokkaan osaajan monenlaisissa tehtävissä.",
        job_1: "Työskentelin tavaravastaanotossa ja vastasin tuotteiden purkamisesta, tarkistamisesta ja hyllyttämisestä.",
        job_2: "Työskentelin tuotantotiloissa erilaisissa valmistus- ja kokoonpanotehtävissä.",
        job_3: "Kehitin digitaalisen työkalun koneiden huoltopäivämäärien seurantaan, joka tehosti yrityksen ylläpitoprosesseja.",
        job_4: "Suunnittelin ja toteutin kaksi opettavaista lastenpeliä yhdessä tiimikaverini kanssa. Pelit löytyvät projektit-osiosta sekä GitHub-tililtäni.",
        job_5: "Osallistuin yrityksen sisäiseen verkkosivuprojektiin käyttäen TypeScriptiä ja Reactia.",
        job_6: "Suunnittelin ja toteutin kaksi opettavaista lastenpeliä yhdessä tiimikaverini kanssa. Pelit löytyvät projektit-osiosta sekä GitHub-tililtäni.",
        job_7: "Kehitin tekoälymalleja yrityksen käyttöön ja opin syvällisemmin koneoppimisen prosesseista.",
        education: "Koulutus",
        education_1_title: "Tieto- ja viestintätekniikka – Gradia Jyväskylä",
        education_1: "Suuntautumiseni on sovellus-, peli- ja web-kehitykseen, ja olen kartuttanut osaamistani muun muassa ohjelmoinnissa, käyttöliittymäsuunnittelussa, rajapinnoissa sekä tietokannoissa. Opintojeni aikana olen työskennellyt useiden projektien parissa, kehittäen käytännön taitoja ohjelmistokehityksessä.",
        contact: "Yhteystiedot",
        email: "Sähköposti: virtanen.niklas20@gmail.com",
        phone: "Puhelin: +358 40 2181698",
    },
    en: {
        experience: "Experience",
        internship: "Internship",
        summer_job: "Summer job",
        header: "Niklas Virtanen",
        about: "About me",
        about_text: "My name is Niklas, an 18-year-old student of information processing and programming, particularly interested in software, game, and web development. I enjoy learning new things, and my goal is to continuously improve my skills through practical projects. I have work experience in various fields, which has strengthened my adaptability, self-direction, and teamwork skills. I believe that my technical expertise combined with my eagerness to learn makes me a valuable asset in various tasks.",
        job_1: "I worked in goods reception, responsible for unpacking, checking, and shelving products.",
        job_2: "I worked in production facilities in various manufacturing and assembly tasks.",
        job_3: "I developed a digital tool for tracking machine maintenance dates, which streamlined the company's maintenance processes.",
        job_4: "I designed and implemented two educational children's games together with my teammate. The games can be found in the projects section as well as on my GitHub account.",
        job_5: "I participated in the company's internal website project using TypeScript and React.",
        job_6: "I designed and implemented two educational children's games together with my teammate. The games can be found in the projects section as well as on my GitHub account.",
        job_7: "I developed AI models for the company's use and learned more about machine learning processes.",
        education: "Education",
        education_1_title: "Information and Communication Technology – Gradia Jyväskylä",
        education_1: "My specialization is in application, game, and web development, and I have gained skills in programming, user interface design, APIs, and databases. During my studies, I have worked on several projects, developing practical skills in software development.",
        contact: "Contact",
        email: "Email: virtanen.niklas20@gmail.com",
        phone: "Phone: +358 40 2181698",
    }
};

let currentLanguage = "fi";

function changeLanguage(lang)
{
    currentLanguage = lang;
    document.querySelectorAll("[data-key]").forEach(element =>
    {
        const key = element.getAttribute("data-key");
        if (translations[lang] && translations[lang][key])
        {
            element.textContent = translations[lang][key];
        }
    });

    if (translations[lang] && translations[lang]["title"])
    {
        document.title = translations[lang]["title"];
    }
};

document.addEventListener("DOMContentLoaded", () =>
{
    changeLanguage(currentLanguage);
});