const testArray=[1,2,3,4]



// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// console.log(double(testArray))

const double = testArray.map(num=> num*2)
// console.log(double)









function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

// console.log(squareAndFindEvens(testArray))

const squaresAndEvens = testArray.map(el=> el**2).filter(el=> el % 2 ===0)

console.log(squaresAndEvens)
