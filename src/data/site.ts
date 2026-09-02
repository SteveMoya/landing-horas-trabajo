export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  githubRepo: string;
  releasesUrl: string;
  apkUrl: string;
  primaryColor: string;
}

export const site: SiteConfig = {
  name: 'Horas Trabajo',
  tagline: 'Tu jornada, tus horas y tu salario según la Ley 16-92 — 100% en tu teléfono.',
  description:
    'App Android para registrar entrada y salida con ubicación, lugar de trabajo con avisos de llegada/salida y cálculo salarial del Código de Trabajo de República Dominicana (Ley 16-92). Todo se guarda en tu dispositivo.',
  domain: 'horas-trabajo.stevemoya.me',
  url: 'https://horas-trabajo.stevemoya.me',
  githubRepo: 'https://github.com/SteveMoya/horas-trabajo',
  releasesUrl: 'https://github.com/SteveMoya/horas-trabajo/releases',
  apkUrl: 'https://github.com/SteveMoya/horas-trabajo/releases/download/v0.3.7/horas-trabajo-v0.3.7.apk',
  primaryColor: '#1565c0',
};

export const nav = [
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Salario RD', href: '#salario' },
  { label: 'Privacidad', href: '#privacidad' },
  { label: 'FAQ', href: '#faq' },
] as const;