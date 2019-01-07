// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().



SeriesSum = ( number ) => {
    let result = 0;
    let b = 1;
    
    for ( let i = 0; i < number; i += 1 ) {
      if ( i === 0 ) {
      result = 1; 
      } else if( number === 0 ) {
        result === 0;
        } else {
            b += 3; 
            result = result + ( 1/ b );
           }
     }
    return result.toFixed( 2 );
  };


  // found a refactor version study this and learn how this is so


  function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
  }