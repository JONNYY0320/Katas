# FizzBuzz Kata (con bonus Whizz)

Solución del ejercicio **FizzBuzz** del repositorio de Katas del profesor ([JuanPa90Cap/Katas](https://github.com/JuanPa90Cap/Katas)), resuelto en **TypeScript** aplicando **TDD** (Desarrollo Guiado por Pruebas) con **Jest**.

## Enunciado

Para un número natural mayor que cero, devolver:

- **"Fizz"** si el número es divisible para 3
- **"Buzz"** si el número es divisible para 5
- **"FizzBuzz"** si es divisible para 3 y para 5
- **El mismo número** si no es divisible ni para 3 ni para 5

| Entrada | Resultado |
|---------|-----------|
| 1  | 1 |
| 2  | 2 |
| 3  | Fizz |
| 4  | 4 |
| 5  | Buzz |
| 6  | Fizz |
| 9  | Fizz |
| 10 | Buzz |
| 15 | FizzBuzz |
| 20 | Buzz |
| 30 | FizzBuzz |
| 75 | FizzBuzz |

### Bonus

Agregar una regla nueva: si el número es **primo**, se agrega **"Whizz"** (solo para números hasta el 100).

| Entrada | Resultado |
|---------|-----------|
| 1 | 1 |
| 2 | Whizz |
| 3 | FizzWhizz |
| 4 | 4 |
| 5 | BuzzWhizz |

## Solución

El código está en [`src/fizzBuzzWhizz.ts`](src/fizzBuzzWhizz.ts) y tiene tres funciones:

| Función | Qué hace |
|---------|----------|
| `game(input)` | Reglas principales. Usa `if` con el operador módulo (`%`) para saber si el número es divisible para 3, para 5 o para ambos. Primero revisa el caso de 3 y 5 juntos, para que el 15 devuelva "FizzBuzz" y no solo "Fizz". |
| `isPrime(input)` | Devuelve `true` si el número es primo, es decir, si solo es divisible para 1 y para sí mismo. |
| `gameWithWhizz(input)` | Bonus. Va armando la respuesta: agrega "Fizz" si es divisible para 3, "Buzz" si es divisible para 5 y "Whizz" si es primo. Si no se agregó nada, devuelve el número. |
| `fizzBuzzHasta(n)` | Rango. Recorre con un `for` todos los números del 1 hasta `n` y devuelve una lista con el resultado de `game` para cada uno. Por ejemplo, `fizzBuzzHasta(5)` devuelve `[1, 2, "Fizz", 4, "Buzz"]`. |
| `fizzBuzzWhizzHasta(n)` | Igual que la anterior, pero con las reglas del bonus (`gameWithWhizz`). |

Las funciones sirven para **cualquier número natural**, no solo para los números de las tablas del enunciado.

El bonus está en una función aparte (`gameWithWhizz`) porque las dos tablas no son compatibles entre sí: en la tabla principal el 2 devuelve `2`, y en la del bonus devuelve `"Whizz"`.

## Pruebas

Las pruebas están en [`src/fizzBuzzWhizz.spec.ts`](src/fizzBuzzWhizz.spec.ts):

| Grupo de pruebas | Cantidad |
|------------------|----------|
| Tabla principal (`game`) | 12 |
| Bonus (`gameWithWhizz`) | 5 |
| Rango del 1 al 10 con `game`, número por número y con `fizzBuzzHasta` | 11 |
| Rango del 1 al 10 con el bonus, número por número y con `fizzBuzzWhizzHasta` | 11 |
| Cualquier número (99, 98, 1000 y 3000) | 4 |
| **Total** | **43** |

Las pruebas de rango usan una variable `rango = 10` y un `for`, que crea una prueba por cada número del 1 al 10. Si se cambia el valor de `rango` (y la lista de resultados esperados), se pueden probar más números.

Resultado: **43 pruebas pasadas.**

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/JONNYY0320/Katas.git
   cd Katas
   ```
2. Instalar las dependencias:
   ```
   npm install
   ```
3. Ejecutar las pruebas:
   ```
   npm test
   ```
   Para que las pruebas se vuelvan a ejecutar cada vez que se guarda un cambio:
   ```
   npm run test:watch
   ```

## Tecnologías

- TypeScript
- Jest + ts-jest
- Node.js / npm
