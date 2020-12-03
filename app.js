// can I import another .js page here for all of my cool functions????? like funcctions.js

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
    return numberArray.filter(evens)
  };  // this won't run but let's get practice testing things

       

 export const arraySum = (numberArray) => {
   return numberArray.reduce(function(a, b){
    return a + b;
}, 0);
 };

 export const allNumbersGreaterThanZero = (numberArray) => {
   // use every
   // numberArray.every(num) if num > zero
  return numberArray.every(bigZero);
 }
       

 export const someNumbersAreOdd = (numberArray) => {
   return numberArray.some(odds)
 }
        

// export const evensOnlyAndDoubleArray = (numberArray) => {
//    filteredArr = numberArray.filter(evens);
//    filteredArr.map(num) {
//      return num * 2;
//    };
//   }

 export const evensOnlyAndDoubleArray = (numberArray) => {
  //  let evensReturn = evens(numberArray)
  // what I had previously was let doubledEvens = numberArray.filter(evens), and then
      // and then in the line below I did doubledEvens.map(function (num)... etc. 
                              //  WHY DID THIS FAIL?? It failed because the function doubledEvens isn't completed and defined until after 
                              //  the function I placed it in would be finished, AFTER i close the bracket and parenthesis after return num * num;
     return numberArray.filter(evens).map(function (num) {
     return num * 2;
   })
    // return doubledEvens;
 }

 export const findItem = (numberArray) => {  // okay so this kinda works. I need to figure out how to pass it the second param and then log false if not found.
      let find = numberArray.find(one => one == 1);
        if (find == 1) {
          return find
        } else {
          return false
        }
      }

 export const sortArray = (numberArray) => {
   return numberArray.sort(function(a,b){return b-a});
 }


                 /////////////////////////////   HERE ARE MY FUNCTIONS I DEFINE TO USE IN MY METHODS        ///////////////////

  function odds(num) {
      return num % 3 == 1;
    }

  function bigZero(num) {
      return num > 0;
    }
  
  function evens(num) {
      return num % 2 == 0;
    }