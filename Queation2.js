/* INSTRUCTIONS 
Write function avg which calculate average of numbers in given array.
*/


function find_average(array) {
    let total = 0
    let average = total / array.length
  
    for( let value of array ) {
      total = total + value
      console.log(total)
      average = total/array.length
    }
    return average
  }