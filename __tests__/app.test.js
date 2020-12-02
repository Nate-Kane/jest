import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray
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

// describe('evensOnlyArray Test', ()=> {
//   test('doubleArray should double values in array', ()=>{
//     expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
//   })
// })