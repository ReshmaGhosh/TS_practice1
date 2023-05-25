// Function
// 2.1 Write a function named greeting and console Hello
function greeting(): void {
  console.log("Hello");
}
greeting();

// 2.2 Write a function named greeting, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)
function greeting1(name: string): void {
  //console.log("Hi" + " " + name);
  console.log(`Hi ${name}`);
}
greeting1("Reshma");

// 2.3 Write a function to calculate the sum of  two numbers (there would be 2 parameters in the function)
function sumOfTwoNumber(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sumOfTwoNumber(10, 12));

// 2.4 Write a function to double value of number (there would be 2 parameter in the function)
function doubleTheValue(a: number): number {
  return a * a;
}
console.log(doubleTheValue(5));

// Arrow Function
// convert those function above to arrow function

// 2.1 Write a function named greeting and console Hello
const greeting2 = (): void => {
  console.log("Hello");
};
console.log(greeting2());

// 2.2 Write a function named greeting, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)
const greeting4 = (name1: string): void => {
  console.log("Hi" + " " + name1);
};
greeting4("Jolly");

// 2.3 Write a function to calculate the sum of  two numbers (there would be 2 parameters in the function)
const sum = (num3: number, num4: number): number => {
  return num3 + num4;
};
console.log(sum(8, 9));

// 2.4 Write a function to double value of number (there would be 2 parameter in the function)
const double = (b: number): number => {
  return b * b;
};
console.log(double(6));
