# FizzBuzz Kata (with Whizz bonus)

Solution to the **FizzBuzz** exercise from the professor's Katas repository ([JuanPa90Cap/Katas](https://github.com/JuanPa90Cap/Katas)), solved in **TypeScript** using **TDD** (Test Driven Development) with **Jest**.

## Problem statement

For a given natural number greater than zero, return:

- **"Fizz"** if the number is divisible by 3
- **"Buzz"** if the number is divisible by 5
- **"FizzBuzz"** if it is divisible by both 3 and 5
- **The number itself** if it is not divisible by 3 or 5

| Input | Result |
|-------|--------|
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

Add a new rule: if the number is **prime**, add **"Whizz"** (only for numbers up to 100).

| Input | Result |
|-------|--------|
| 1 | 1 |
| 2 | Whizz |
| 3 | FizzWhizz |
| 4 | 4 |
| 5 | BuzzWhizz |

## Solution

The code is in [`src/fizzBuzzWhizz.ts`](src/fizzBuzzWhizz.ts) and has five functions:

| Function | What it does |
|----------|--------------|
| `game(input)` | Main rules. Uses `if` statements with the modulo operator (`%`) to check whether the number is divisible by 3, by 5, or by both. It checks 3 and 5 together first, so that 15 returns "FizzBuzz" and not just "Fizz". |
| `isPrime(input)` | Returns `true` if the number is prime, meaning it is only divisible by 1 and by itself. |
| `gameWithWhizz(input)` | Bonus. Builds the answer step by step: adds "Fizz" if divisible by 3, "Buzz" if divisible by 5, and "Whizz" if prime. If nothing was added, it returns the number. |
| `fizzBuzzHasta(n)` | Range. Uses a `for` loop over every number from 1 to `n` and returns a list with the result of `game` for each one. For example, `fizzBuzzHasta(5)` returns `[1, 2, "Fizz", 4, "Buzz"]`. |
| `fizzBuzzWhizzHasta(n)` | Same as the previous one, but using the bonus rules (`gameWithWhizz`). |

The functions work for **any natural number**, not only the numbers listed in the exercise tables.

The bonus is a separate function (`gameWithWhizz`) because the two tables conflict with each other: in the main table 2 returns `2`, while in the bonus table it returns `"Whizz"`.

## Tests

The tests are in [`src/fizzBuzzWhizz.spec.ts`](src/fizzBuzzWhizz.spec.ts):

| Test group | Count |
|------------|-------|
| Main table (`game`) | 12 |
| Bonus (`gameWithWhizz`) | 5 |
| Range from 1 to 10 with `game`, number by number and with `fizzBuzzHasta` | 11 |
| Range from 1 to 10 with the bonus, number by number and with `fizzBuzzWhizzHasta` | 11 |
| Any number (99, 98, 1000 and 3000) | 4 |
| **Total** | **43** |

The range tests use a `rango = 10` variable and a `for` loop that creates one test for each number from 1 to 10. Changing the value of `rango` (and the list of expected results) lets you test more numbers.

Result: **43 tests passed.**

## How to run the project

1. Clone the repository:
   ```
   git clone https://github.com/JONNYY0320/Katas.git
   cd Katas
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Run the tests:
   ```
   npm test
   ```
   To re-run the tests automatically every time a file is saved:
   ```
   npm run test:watch
   ```

## Technologies

- TypeScript
- Jest + ts-jest
- Node.js / npm
