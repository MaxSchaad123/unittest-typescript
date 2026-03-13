export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktor: number, produkt: number): number {
  return faktor * produkt;
}
export function divide(division: number, quotient: number): number {
  if (quotient === 0) {
    throw new Error("Division durch 0 ist nicht erlaubt");
  }
  return division / quotient;
}

