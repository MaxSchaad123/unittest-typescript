export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Die Liste darf nicht leer sein");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Median einer leeren Zahlenreihe ist nicht definiert");
  }

  // Zahlenreihe sortieren
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // ungerade Anzahl → mittleres Element
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } 
  // gerade Anzahl → Mittelwert der beiden mittleren Elemente
  else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}