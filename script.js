const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('.theme-toggle');
const languageNote = document.getElementById('language-note');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeMeta) {
    themeMeta.setAttribute('content', theme === 'light' ? '#f7f9fb' : '#0f1116');
  }
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
};

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || (prefersLight.matches ? 'light' : 'dark');
setTheme(initialTheme);

prefersLight.addEventListener('change', (event) => {
  if (!localStorage.getItem('theme')) {
    setTheme(event.matches ? 'light' : 'dark');
  }
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

const updateLanguageMeta = () => {
  const userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  document.documentElement.lang = userLang;
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  document.documentElement.dir = rtlLanguages.some((code) => userLang.startsWith(code)) ? 'rtl' : 'ltr';
  if (languageNote) {
    languageNote.textContent = `Language: ${userLang}`;
  }
};

updateLanguageMeta();

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click (mobile)
nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
