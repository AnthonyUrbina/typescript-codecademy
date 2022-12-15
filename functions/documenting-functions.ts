/**
 * Logs a string to the console
 *
 * @param fruit1 - the first input string
 * @param fruit2 = the second input string
 * @returns nothing
 */

function makeFruitSalads(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}


/**
 * Logs a string to the console
 *
 * @param status - the first input (string)
 * @param repeat = the second input (number)
 * @returns nothing
 */

function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
