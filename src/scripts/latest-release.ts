// Resuelve automáticamente el enlace de descarga del APK a la última Release
// de la app (incluye prereleases/Betas). Si el fetch falla, se mantiene el
// href estático de fallback definido en src/data/site.ts.
const links = document.querySelectorAll<HTMLAnchorElement>(
  'a[href*="horas-trabajo/releases/download/"]',
);
const versionEls = document.querySelectorAll<HTMLElement>('[data-apk-version]');

async function resolveLatest() {
  try {
    const res = await fetch('https://api.github.com/repos/SteveMoya/horas-trabajo/releases?per_page=1', {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return;
    const releases: Array<{ assets: Array<{ name: string; browser_download_url: string }> }> = await res.json();
    const rel = releases.find((r) => (r.assets || []).some((a) => a.name.endsWith('.apk')));
    const apk = rel?.assets?.find((a) => a.name.endsWith('.apk'));
    if (!apk?.browser_download_url) return;

    links.forEach((l) => { l.href = apk!.browser_download_url; });
    versionEls.forEach((el) => {
      el.textContent = apk!.name.replace(/\.apk$/i, '').replace(/^.*?(v?\d)/i, '$1');
    });
  } catch {
    // Mantener el fallback estático.
  }
}

if (links.length && typeof fetch !== 'undefined') {
  resolveLatest();
}