import { Reserva } from './reservasHotel.model';

class ReservaHotel {
  reservas: Reserva[];
  desayuno: number;
  standard: number;
  suite: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.desayuno = 15;
    this.standard = 0;
    this.suite = 0;
  }

  calcularSubtotalReserva() {
    return this.reservas.reduce((acc, reserva) => {
      const totalDesayuno = reserva.desayuno ? reserva.pax * this.desayuno * reserva.noches : 0;
      const totalHabitacion = reserva.tipoHabitacion === 'standard' ? this.standard : this.suite;
      const subtotal = reserva.noches * totalHabitacion + totalDesayuno;
      return acc + subtotal;
    }, 0);
  }

  calcularTotalReserva(): number {
    return this.calcularTotalReserva() * 1.21;
  }
}

export class ReservaParticular extends ReservaHotel {
  plusPersonaAdicional: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.desayuno = 15;
    this.standard = 100;
    this.suite = 150;
    this.plusPersonaAdicional = 40;
  }

  calcularSubTotalReservaParticular() {
    return (
      this.calcularSubtotalReserva() +
      this.reservas.reduce((acc: number, reserva: Reserva): number => {
        if (reserva.pax > 1) {
          acc = acc + (reserva.pax - 1) * this.plusPersonaAdicional * reserva.noches;
        }
        return acc;
      }, 0)
    );
  }

  calcularTotalReservaParticular(): number {
    return this.calcularSubTotalReservaParticular() * 1.21;
  }
}

export class ReservaOperador extends ReservaHotel {
  descuento: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.desayuno = 15;
    this.suite = 100;
    this.standard = 100;
    this.descuento = 0.15;
  }

  calcularSubTotalReservaOperador(): number {
    let totalDescuento = this.calcularSubtotalReserva() * this.descuento;
    return this.calcularSubtotalReserva() - totalDescuento;
  }

  calcularTotalReservaOperador() {
    return this.calcularSubTotalReservaOperador() * 1.21;
  }
}
