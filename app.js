export const originalArray = (arr) =>{
  return arr
}

//doubleArray

export const doubleArray = (numberArray) => {
  return numberArray.map((num) => {
    return num * 2;
  })
};
//OR could be on one line like this     export const doubleArray = (a) => a.map((n) => {n * 2});

//Here is what James' wrote down for it.
      // numberArray = [1,2,3,4]
      // // return array with double values in array
      // doubleArray(numberArray) // => [2,4,6,8];  hint use map
      // export const doubleArray = (numberArray) => {
      //   return numberArray.map((num) => {
      //     return num * 2;
      //   });
      // };
      // Bonus
      // export const doubleArray = (a) => a.map((n) => n * 2);
      // export const doubleArray = (a) =>
      //   a.map((n) => {
      //     return n * 2;
      //   });
      // export const doubleArray = (a) => {
      //   return a.map((n) => n * 2);
      // };

  export const evensOnlyArray = (numberArray) => {
    return numberArray.filter((num) => {
      return num % 2
    });
  };  // this won't run but let's get practice testing things