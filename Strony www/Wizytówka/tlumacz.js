let currentLang = 'pl';
let currentView = 'card-view';
const PLACEHOLDER_NAME = 'Patryk Bieluń';

const translations = {
    'pl': {
        // Tytuł i nagłówek
        'title_name_prefix': 'Wizytówka Online - ' + PLACEHOLDER_NAME + ' - Administrator IT',
        'name': 'Patryk Bieluń',
        'position': 'Administrator IT',
        // Nawigacja
        'lang_button_text': 'English',
        'nav_to_experience': 'Doświadczenie',
        'nav_to_contact': 'Kontakt',
        // Widok 1: Wizytówka
        'section_about': 'O mnie',
        'bio': 'Mam ponad 5 lat doświadczenia jako administrator IT, pracując z Windows Server, VMware vSphere, Hyper-V oraz chmurami Azure i AWS. Automatyzuję zadania przy użyciu PowerShell i koncentruję się na optymalizacji systemów. Szukam wyzwań jako Administrator Systemów lub Inżynier DevOps',
        'section_contact': 'Kontakt',
        'location': 'Oława, Polska',
        'section_social': 'Media Społecznościowe',
        'portfolio': 'Moje Portfolio',
        // Widok 2: Doświadczenie
        'section_experience_title': 'Doświadczenie Zawodowe',
        // Stanowisko 1 – Kyndryl Junior IT Admin
        'job_title_senior': 'Junior IT Administrator',
        'job_company_a': 'Kyndryl | 07.2022 - obecnie',
        'job_desc_a1': 'Tworzyłem, konfigurowałem i utrzymywałem maszyny wirtualne w środowisku VMware vSphere, z naciskiem na wydajność i dostępność',
        'job_desc_a2': 'Zoptymalizowałem procesy monitorowania infrastruktury oraz aplikacji poprzez wdrożenie automatycznych alertów i skryptów diagnostycznych',
        'job_desc_a3': 'Automatyzowałem powtarzalne zadania administracyjne z wykorzystaniem PowerShell — m.in. tworzenie i usuwanie kont użytkowników, cykliczny patching systemów',
        'job_desc_a4': 'Wdrożyłem i administrowałem środowiskiem baz danych MS SQL — rozwiązałem problemy z wydajnością, co przełożyło się na skrócenie czasu odpowiedzi',
        'job_desc_a5': 'Rozwiązywałem złożone incydenty w środowisku Windows Server (problemy z logowaniem, siecią, zależnościami usług)',
        'job_desc_a6': 'Współpracowałem z globalnymi zespołami przy wdrażaniu poprawek, testach regresyjnych i zmianach w środowiskach produkcyjnych',
        // POPRAWKA: unikalne klucze dla stanowiska 2 (Kyndryl)
        'job_title_junior_kyndryl': 'Asystent IT',
        'job_company_kyndryl': 'Kyndryl | 09.2021 - 07.2022',
        'job_desc_b1': 'Wspierałem administrację środowiskami VMware vSphere oraz serwerami Windows Server, koncentrując się na ich dostępności i stabilności',
        'job_desc_b2': 'Tworzyłem proste skrypty PowerShell w celu automatyzacji rutynowych zadań (np. sprawdzanie stanu usług, raportowanie przestrzeni dyskowej), co przyczyniło się do optymalizacji czasu reakcji zespołu',
        'job_desc_b3': 'Diagnozowałem i rozwiązywałem pierwszą linię incydentów (logowanie użytkowników, błędy systemowe, problemy z DNS i siecią)',
        'job_desc_b4': 'Udoskonaliłem dokumentację techniczną i procedury operacyjne, co usprawniło onboarding nowych członków zespołu',
        'job_desc_b5': 'Współpracowałem z zespołami międzynarodowymi przy monitorowaniu aplikacji oraz wdrażaniu podstawowych zmian konfiguracyjnych',
        // POPRAWKA: unikalne klucze dla stanowiska 3 (IBM)
        'job_title_junior_ibm': 'Asystent IT',
        'job_company_ibm': 'IBM | 05.2019 - 09.2021',
        'job_desc_c1': 'Wdrażałem i konfigurowałem maszyny wirtualne w środowisku VMware vSphere oraz wspierałem administrację Windows Server',
        'job_desc_c2': 'Wykonywałem monitoring infrastruktury IT i aplikacji, uczestnicząc w procesie wczesnego wykrywania i eskalacji incydentów',
        'job_desc_c3': 'Diagnozowałem podstawowe błędy systemowe i aplikacyjne, ucząc się jednocześnie struktury środowisk korporacyjnych',
        'job_desc_c4': 'Automatyzowałem proste zadania w PowerShell (np. czyszczenie logów, sprawdzanie usług), co pozwoliło skrócić czas realizacji zgłoszeń',
        'job_desc_c5': 'Zdobywałem pierwsze doświadczenie w administracji środowiskami baz danych MS SQL – m.in. przez monitoring usług, restartowanie instancji i podstawową analizę błędów',
        'section_skills': 'Główne Umiejętności Techniczne',
    },
    'en': {
        // Tytuł i nagłówek
        'title_name_prefix': 'Online Business Card - ' + PLACEHOLDER_NAME + ' - IT Administrator',
        'name': 'Patryk Bieluń',
        'position': 'IT Administrator',
        // Nawigacja
        'lang_button_text': 'Polish',
        'nav_to_experience': 'Experience',
        'nav_to_contact': 'Contact',
        // Widok 1: Wizytówka
        'section_about': 'About Me',
        'bio': 'I have over 5 years of experience as an IT Administrator, working with Windows Server, VMware vSphere, Hyper-V, and both Azure and AWS cloud platforms. I automate tasks using PowerShell and focus on system optimization. I am looking for challenges as a Systems Administrator or DevOps Engineer.',
        'section_contact': 'Contact',
        'location': 'Oława, Poland',
        'section_social': 'Social Media',
        'portfolio': 'My Portfolio',
        // Widok 2: Doświadczenie
        'section_experience_title': 'Professional Experience',
        // Stanowisko 1 – Kyndryl Junior IT Admin
        'job_title_senior': 'Junior IT Administrator',
        'job_company_a': 'Kyndryl | 07.2022 - present',
        'job_desc_a1': 'Created, configured, and maintained virtual machines in the VMware vSphere environment, with a focus on performance and availability.',
        'job_desc_a2': 'Optimized infrastructure and application monitoring processes by implementing automatic alerts and diagnostic scripts.',
        'job_desc_a3': 'Automated repetitive administrative tasks using PowerShell — including creating and deleting user accounts, and cyclic system patching.',
        'job_desc_a4': 'Implemented and administered the MS SQL database environment — resolved performance issues, which led to a reduction in response time.',
        'job_desc_a5': 'Resolved complex incidents in the Windows Server environment (login issues, networking problems, service dependencies).',
        'job_desc_a6': 'Collaborated with global teams on implementing patches, regression testing, and changes in production environments.',
        // POPRAWKA: unikalne klucze + przetłumaczony tytuł dla stanowiska 2 (Kyndryl)
        'job_title_junior_kyndryl': 'IT Assistant',
        'job_company_kyndryl': 'Kyndryl | 09.2021 - 07.2022',
        'job_desc_b1': 'Supported the administration of VMware vSphere environments and Windows Server, focusing on their availability and stability.',
        'job_desc_b2': 'Created simple PowerShell scripts to automate routine tasks (e.g., checking service status, disk space reporting), contributing to the optimization of team response time.',
        'job_desc_b3': 'Diagnosed and resolved first-line incidents (user logins, system errors, DNS and network issues).',
        'job_desc_b4': 'Improved technical documentation and operating procedures, which streamlined the onboarding of new team members.',
        'job_desc_b5': 'Collaborated with international teams on application monitoring and the deployment of basic configuration changes.',
        // POPRAWKA: unikalne klucze + przetłumaczony tytuł dla stanowiska 3 (IBM)
        'job_title_junior_ibm': 'IT Assistant',
        'job_company_ibm': 'IBM | 05.2019 - 09.2021',
        'job_desc_c1': 'Deployed and configured virtual machines in the VMware vSphere environment and supported Windows Server administration.',
        'job_desc_c2': 'Performed monitoring of IT infrastructure and applications, participating in the process of early incident detection and escalation.',
        'job_desc_c3': 'Diagnosed basic system and application errors, while learning the structure of corporate environments.',
        'job_desc_c4': 'Automated simple tasks using PowerShell (e.g., log cleanup, service checks), which helped reduce ticket resolution time.',
        'job_desc_c5': 'Gained initial experience in MS SQL database environment administration – including service monitoring, instance restarts, and basic error analysis.',
        'section_skills': 'Core Technical Skills',
    }
};

// Funkcja do tłumaczenia strony
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    const langData = translations[currentLang];

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    document.querySelector('title').textContent = langData['title_name_prefix'];
    document.documentElement.lang = currentLang;

    document.getElementById('lang-toggle').querySelector('span').textContent = langData['lang_button_text'];

    const viewKey = currentView === 'card-view' ? 'nav_to_experience' : 'nav_to_contact';
    document.getElementById('view-toggle-text').textContent = langData[viewKey];
}

// Funkcja do przełączania języka
function toggleLanguage() {
    currentLang = (currentLang === 'pl') ? 'en' : 'pl';
    translatePage();
}

// Funkcja do przełączania widoków
function toggleView() {
    const cardView = document.getElementById('card-view');
    const experienceView = document.getElementById('experience-view');

    if (currentView === 'card-view') {
        cardView.classList.add('hidden');
        experienceView.classList.remove('hidden');
        currentView = 'experience-view';
    } else {
        cardView.classList.remove('hidden');
        experienceView.classList.add('hidden');
        currentView = 'card-view';
    }

    const langData = translations[currentLang];
    const viewKey = currentView === 'card-view' ? 'nav_to_experience' : 'nav_to_contact';
    document.getElementById('view-toggle-text').textContent = langData[viewKey];
}

// Inicjalizacja przy załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('experience-view').classList.add('hidden');
    translatePage();
});
