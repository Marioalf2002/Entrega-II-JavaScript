// 1. Crear un arreglo de 10 elementos
const arreglo = () => {
  return Array(10);
};

// 2. Crear un arreglo con valores del 1 al 10
const arreglo2 = () => {
  return Array.from({ length: 10 }, (v, i) => i + 1);
};

// 3. Crear un arreglo con valores del 1 al 10 y multiplicar por 2
const arreglo3 = () => {
  return Array.from({ length: 10 }, (v, i) => (i + 1) * 2);
};

// 4. Crear un arreglo con valores del 1 al 10 y multiplicar por 2 y filtrar los pares
const arreglo4 = () => {
  return Array.from({ length: 10 }, (v, i) => (i + 1) * 2).filter(
    (v) => v % 2 === 0
  );
};

// 5. Crear un arreglo con valores del 1 al 10 y multiplicar por 2 y filtrar los pares y sumar los valores
const arreglo5 = () => {
  return Array.from({ length: 10 }, (v, i) => (i + 1) * 2)
    .filter((v) => v % 2 === 0)
    .reduce((a, b) => a + b);
};

// 6. Crear un arreglo con valores del 1 al 10 y multiplicar por 2 y filtrar los pares y sumar los valores y multiplicar por 2
const arreglo6 = () => {
  return (
    Array.from({ length: 10 }, (v, i) => (i + 1) * 2)
      .filter((v) => v % 2 === 0)
      .reduce((a, b) => a + b) * 2
  );
};

console.log(arreglo());
console.log(arreglo2());
console.log(arreglo3());
console.log(arreglo4());
console.log(arreglo5());
console.log(arreglo6());
