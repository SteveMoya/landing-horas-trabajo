const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (els.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('is-visible'));
}