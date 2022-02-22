import { TEntorno } from "../types/accesos";

export function getColor(entorno: TEntorno) {
  switch (entorno) {
    case 'desarrollo':
      return 'green.600';
    case 'produccion':
      return 'red.600';
    case 'test':
      return '#FF0000';
    case 'prueba':
      return 'orange.600';
    default:
      return '#000000';
  }
}