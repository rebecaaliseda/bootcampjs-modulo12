import { ReservaParticular, ReservaOperador } from './reservasHotel';
import { reservas } from './reservasHotel.model';

// Reserva Particular
const reservaParticular = new ReservaParticular(reservas);
console.log(reservaParticular);
console.log(
  'Subtotal (total sin IVA) de la Reserva Particular: ',
  reservaParticular.calcularSubTotalReservaParticular()
);
console.log('Total de la Reserva Particular: ', reservaParticular.calcularTotalReservaParticular());

console.log('---------------------------------------------');

// Reserva Operador
const reservaOperador = new ReservaOperador(reservas);
console.log(reservaOperador);
console.log(
  'Subtotal (total sin IVA) de la Reserva Operador',
  reservaOperador.calcularSubTotalReservaOperador()
);
console.log('Total de la Reserva Operador: ', reservaOperador.calcularTotalReservaOperador());
