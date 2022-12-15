/*
function makeFruitSalad(fruit1:string, fruit2:string): string{
  let salad =fruit1+fruit2+fruit2+fruit1+fruit2+fruit1+fruit1;
  console.log(salad);
}

makeFruitSalad('banana','pineapple');
*/

// corrected type annotation for return of the function, from string to void.
function makeFruitSalad(fruit1: string, fruit2: string):
  void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad('banana', 'pineapple');
