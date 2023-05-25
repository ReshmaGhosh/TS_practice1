// Exercise 1
// write an object has: name, country, address, language and the language has several values.

type User = {
  name2: string;
  country: string;
  address: string;
  language: {
    lang1: string;
    lang2: string;
    lang3: string;
  };
};
let userInformation: User = {
  name2: "Reshma",
  country: "Sweden",
  address: "Lund",
  language: {
    lang1: "Bengali",
    lang2: "English",
    lang3: "Hindi",
  },
};
console.log(userInformation);
// Exercise 2
// given an object :
// console.log the student name, class and age
type Student = {
  name: string;
  class: string;
  age: number;
};
const student: Student = {
  name: "David Ray",
  class: "math",
  age: 12,
};
console.log(student.name);
console.log(student.class);
console.log(student.age);
