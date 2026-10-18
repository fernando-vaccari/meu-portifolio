export const escape = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
export const icon = (name = 'arrow') => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${({ arrow: '<path d="M7 17 17 7M7 7h10v10"/>', right: '<path d="M4 12h16m-6-6 6 6-6 6"/>', check: '<path d="m5 12 4 4L19 6"/>', menu: '<path d="M4 8h16M4 16h16"/>', close: '<path d="m6 6 12 12M6 18 18 6"/>', sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>', moon: '<path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z"/>', phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3l2 5-2 2a16 16 0 0 0 6 6l2-2 6 2.9Z"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>', star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>', mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z"/>' })[name] || '<path d="M7 17 17 7M7 7h10v10"/>'}</svg>`;
export const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferências são opcionais. */ } } };
export function safeUrl(url) { try { const parsed = new URL(url); return parsed.protocol === 'https:' ? parsed.href : ''; } catch { return ''; } }
export function setupMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#mobile-nav');
  const close = () => { nav.hidden = true; button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Abrir menu'); button.innerHTML = icon('menu'); };
  button.addEventListener('click', () => { const open = nav.hidden; nav.hidden = !open; button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); button.innerHTML = icon(open ? 'close' : 'menu'); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  matchMedia('(min-width: 801px)').addEventListener('change', e => { if (e.matches) close(); });
}
