// Header: estado scroll + menú móvil.
const header = document.querySelector<HTMLElement>('[data-header]');
const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement | null;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement | null;

function onScroll() {
  if (!header) return;
  const scrolled = window.scrollY > 8;
  header.classList.toggle('is-scrolled', scrolled);
  header.style.borderColor = scrolled ? 'rgb(226 232 240)' : 'transparent';
  header.style.backgroundColor = scrolled ? 'rgba(255,255,255,0.85)' : 'transparent';
  header.style.backdropFilter = scrolled ? 'blur(10px)' : 'none';
}

function setMenu(open: boolean) {
  if (!mobileMenu || !menuBtn) return;
  mobileMenu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

menuBtn?.addEventListener('click', () => setMenu(mobileMenu?.hidden ?? false));

// Cerrar menú al navegar
document.querySelectorAll('[data-menu-link]').forEach((link) =>
  link.addEventListener('click', () => setMenu(false)),
);