const toggle = document.getElementById('modeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) root.setAttribute('data-theme', savedTheme);

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'tech' ? 'creative' : 'tech';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
