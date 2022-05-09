// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentence_array", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentence_array(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// output:
// FAIL  ./code-challenges.test.js
// sentence_array
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// ● sentence_array › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//   ReferenceError: expert is not defined


// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
//PseudoCode
//create a function named sentence_array
//paramter is an array of objects
//maping through the array setting everything to lowercase and spliting them by the space
// once again maping thorough the array but using charAt to alter the first chracter of each name and then reconnecting the whole array with the changes made
// using string interpolation to get the desired output



const sentence_array = (array) => {
  return array.map((value) => {
    const capitalizeName = value.name.toLowerCase().split(' ')
      .map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
    return `${capitalizeName} is ${value.occupation}.`;
  })
}
// Output:
// PASS  ./code-challenges.test.js
// sentence_array
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remain", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remain(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remain(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// Output:
// FAIL  ./code-challenges.test.js
// remain
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// ● remian › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//   ReferenceError: remain is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.
// Psuedocode:
// create a function named remain
// create a variable named remainders 
// let variable hold the result of the array being filtered through while using typeof in order to find all the numbers in the array
// return remainders and the reminder of each number after divded by 3



const remain = (array) => {
  let remainders = array.filter(value => {
    return (typeof value === 'number')
  })
  return remainders.map(value => value % 3)
}
// console.log(remain(hodgepodge1));
// console.log(remain(hodgepodge2));
// PASS  ./code-challenges.test.js
// remain
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// [ 2, 0, -1, 0 ]
// [ 2, 1, -1 ]




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


describe("sumsCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumsCubed(cubeAndSum1)).toEqual(99)
    expect(sumsCubed(cubeAndSum2)).toEqual(1125)
  })
})

// Output:
// FAIL  ./code-challenges.test.js
// sumsCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
// ● sumsCubed › takes in an array of numbers and returns the sum of all the numbers cubed
//   ReferenceError: sumsCubed is not defined

// a) Create a test with an expect statement using the variables provided.


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass
// Psuedocode:
// create a function named sumsCubed
// pass an array in the paramter
// created a variable named cubedArray
// mapped through the array multiplying every number by the 3rd power
// returned the varible using .reduce, got the sum of ther array after being multipled


const sumsCubed = (array) => {
  let cubedArray = array.map(value => Math.pow(value, 3));
  return cubedArray.reduce((sum, value) => (sum + value), 0)
}

// console.log(sumsCubed(cubeAndSum1));
// console.log(sumsCubed(cubeAndSum2));
// Output:
// 99
// 1125

// PASS  ./code-challenges.test.js
// sumsCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)