// Efecto 3D de seguimiento del cursor sobre [data-tilt].
// Respeta prefers-reduced-motion y solo interactúa con puntero fino (mouse).
const tiltEls = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
if (tiltEls.length && typeof matchMedia !== 'undefined') {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const MAX = 12; // grados máximos de inclinación
  const easing = 'cubic-bezier(0.22, 0.61, 0.36, 1)';

  for (const el of tiltEls) {
    let raf = 0;

    el.addEventListener('pointerenter', () => {
      if (reduce || !fine) return;
      el.style.transition = 'transform 0.12s ease-out';
    });

    el.addEventListener('pointermove', (e) => {
      if (reduce || !fine) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        const px = (e.clientX - r.left) / r.width; // 0..1
        const py = (e.clientY - r.top) / r.height; // 0..1
        const rx = (0.5 - py) * MAX;
        const ry = (px - 0.5) * MAX;
        el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
    });

    el.addEventListener('pointerleave', () => {
      if (reduce || !fine) return;
      cancelAnimationFrame(raf);
      el.style.transition = `transform 0.55s ${easing}`;
      el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      window.setTimeout(() => {
        if (!el.matches(':hover')) el.style.transition = '';
      }, 550);
    });
  }
}