import { render } from './app.js';

const navButtons = document.querySelectorAll('.bottom-nav button');
const appShell = document.getElementById('app');

function setView(view) {
  navButtons.forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.view === view)));
  render(view);
  appShell.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

setView('dashboard');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
