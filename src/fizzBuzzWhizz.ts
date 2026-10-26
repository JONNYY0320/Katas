/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */


// Ejercicio principal: Fizz, Buzz y FizzBuzz
export const game = (input: number): number | string => {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
  return input;
};

// Revisa si un número es primo (solo se divide para 1 y para sí mismo)
export const isPrime = (input: number): boolean => {
  if (input < 2) {
    return false;
  }
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
};

// Bonus: además de Fizz y Buzz, agrega Whizz si el número es primo
export const gameWithWhizz = (input: number): number | string => {
  let result = "";
  if (input % 3 === 0) {
    result = result + "Fizz";
  }
  if (input % 5 === 0) {
    result = result + "Buzz";
  }
  if (isPrime(input)) {
    result = result + "Whizz";
  }
  if (result === "") {
    return input;
  }
  return result;
};

// Rango: devuelve los resultados de game para todos los números del 1 hasta n
export const fizzBuzzHasta = (n: number): (number | string)[] => {
  const resultados: (number | string)[] = [];
  for (let i = 1; i <= n; i++) {
    resultados.push(game(i));
  }
  return resultados;
};

// Rango con bonus: devuelve los resultados de gameWithWhizz del 1 hasta n
export const fizzBuzzWhizzHasta = (n: number): (number | string)[] => {
  const resultados: (number | string)[] = [];
  for (let i = 1; i <= n; i++) {
    resultados.push(gameWithWhizz(i));
  }
  return resultados;
};
