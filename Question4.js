/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '' */ 



// Not done 
var names = ['bart', 'whoa', 'boom', 'awesome']


const newArray = names.map((_, i )=>{
  if (i < names.legnth){
   return _ + ', '
  } else if ( i === names.length - 1 ){
     return ' & ' + _
    }else if (i < names.length){
      return _ + `,`
      }else {return `something is not working`}
});


newArray.toString()