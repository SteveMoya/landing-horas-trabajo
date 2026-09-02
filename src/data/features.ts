export interface Feature {
  icon: 'marca' | 'geocerca' | 'aviso' | 'salario' | 'reporte' | 'local';
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    icon: 'marca',
    title: 'Marca con hora y ubicación',
    text: 'Entrada y salida con un toque: guarda la hora exacta y tu ubicación GPS (opcional) en cada marcado.',
  },
  {
    icon: 'geocerca',
    title: 'Tu lugar de trabajo',
    text: 'La primera vez que marcas puedes guardar tu ubicación como lugar de trabajo y la app crea una geocerca a tu alrededor.',
  },
  {
    icon: 'aviso',
    title: 'Avisos de llegada y salida',
    text: 'Al llegar al trabajo te avisa "¿Marcar la entrada?" y al salir "¿Marcar la salida?" — con acción rápida desde la notificación.',
  },
  {
    icon: 'salario',
    title: 'Salario según la Ley 16-92',
    text: 'Cálculo automático de horas ordinarias, extras (+35%), exceso (+100%), nocturnas (+15%) y feriados (doble), con porcentajes editables.',
  },
  {
    icon: 'reporte',
    title: 'Reportes semanales y mensuales',
    text: 'Resumen de horas e importe a pagar por período, con desglose por concepto para que sepas exactamente cuánto te corresponde.',
  },
  {
    icon: 'local',
    title: '100% privado y local',
    text: 'Sin cuentas ni nube: tus jornadas viven solo en tu dispositivo. Tus datos no se suben a ningún servidor.',
  },
];