import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray
} from '../app.js'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Test', ()=> {
  test('doubleArray should double values in array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

// and then after doing this, you have to go into your terminal/this directory and run Yarn test

describe('evensOnlyArray Test', ()=> {
  test('display only even numbers', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
})

describe('arraySum test', ()=> {
  test('get the sum of an array of numbers', ()=>{
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

describe('allNumbersGreaterThanZero Test', ()=> {
  test('check if every number in arr is greater than zero', ()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
})

describe('someNumbersAreOdd test', () => {
  test('check if one or more of the numbers in arr are odd', ()=>{
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
})

describe('evenOnlyAndDoubleArray Test', ()=> {
  test('filter numbers to display only evens, and then double them', ()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

              // OKAY so I have this working kind of, but how can I do .toEqual(1) OR false??? for an if else statement.
              // ALSO how would I do this if I pass my findItem function TWO params, like in the HW like this (numberArray, 1)????
describe('findItem test', ()=> {
  test('search for one, and if not found then display "false"', ()=>{
    expect(findItem([1,2,3,4])).toEqual(1)
  })
})

describe('sortArray test', ()=> {
  test('sort my array and put it in descending order', ()=>{
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})