export interface Recargo {
  concepto: string;
  porcentaje: string;
  multiplicador: string;
  detalle: string;
}

export const recargos: Recargo[] = [
  {
    concepto: 'Jornada ordinaria',
    porcentaje: '100%',
    multiplicador: '×1.0',
    detalle: 'Máximo 8 horas al día y 44 horas a la semana (Ley 16-92).',
  },
  {
    concepto: 'Horas extras',
    porcentaje: '+35%',
    multiplicador: '×1.35',
    detalle: 'Más allá de las 8 horas diarias dentro de la jornada permitida.',
  },
  {
    concepto: 'Exceso >68 h semanales',
    porcentaje: '+100%',
    multiplicador: '×2.0',
    detalle: 'El exceso sobre 68 horas semanales se paga al doble.',
  },
  {
    concepto: 'Jornada nocturna',
    porcentaje: '+15%',
    multiplicador: '×1.15',
    detalle: 'Horario de 9:00 p. m. a 7:00 a. m.',
  },
  {
    concepto: 'Días feriados / descanso',
    porcentaje: '+100%',
    multiplicador: '×2.0',
    detalle: 'Trabajar en día festivo o de descanso semanal se paga al doble.',
  },
];

export const divisorHora = 'Salario mensual ÷ 23.83 ÷ 8';