export interface Paso {
  paso: number;
  icon: 'ubicacion' | 'marca' | 'cobro';
  titulo: string;
  texto: string;
}

export const pasos: Paso[] = [
  {
    paso: 1,
    icon: 'ubicacion',
    titulo: 'Guarda tu lugar de trabajo',
    texto:
      'Al marcar tu primera entrada, la app pide permiso de ubicación y te ofrece guardar esa coordenada como tu lugar de trabajo.',
  },
  {
    paso: 2,
    icon: 'marca',
    titulo: 'Llega, marca y olvídate',
    texto:
      'Con la vigilancia activa, recibes el aviso de llegada y de salida. Un toque y la jornada queda registrada con hora y lugar.',
  },
  {
    paso: 3,
    icon: 'cobro',
    titulo: 'Cobra según tu hora',
    texto:
      'El motor de cálculo separa horas ordinarias, extras y nocturnas según la Ley 16-92 y te da el total que te corresponde.',
  },
];