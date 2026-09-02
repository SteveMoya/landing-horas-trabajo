export interface Faq {
  pregunta: string;
  respuesta: string;
}

export const faqs: Faq[] = [
  {
    pregunta: '¿Necesito una cuenta o internet?',
    respuesta:
      'No. Horas Trabajo funciona sin cuentas y almacena todo local en tu dispositivo (SQLite). Puedes usar la app sin conexión.',
  },
  {
    pregunta: '¿Cómo funciona la vigilancia de llegada y salida?',
    respuesta:
      'Cuando actives "Vigilar llegada y salida" y tengas tu lugar de trabajo guardado, la app detecta cuando entras o sales de esa zona y te envía una notificación para marcar. Requiere permiso de ubicación (y recomienda "Permitir todo el tiempo").',
  },
  {
    pregunta: '¿Qué recargos calcula según la Ley 16-92?',
    respuesta:
      'Horas ordinarias, horas extras (+35%), exceso sobre 68 horas semanales (+100%), jornada nocturna 9pm–7am (+15%) y días feriados o de descanso trabajados (doble). Todos los porcentajes son editables desde Ajustes.',
  },
  {
    pregunta: '¿Dónde se descarga la Beta?',
    respuesta:
      'En la sección Releases del repositorio (botón "Descargar APK"). Es una versión Beta para Android; instálala permitiendo fuentes desconocidas.',
  },
  {
    pregunta: '¿Mis datos de ubicación se comparten?',
    respuesta:
      'No. La ubicación se usa solo en tu dispositivo para registrar el lugar de marcado y disparar las notificaciones locales. No se envía a ningún servidor.',
  },
];