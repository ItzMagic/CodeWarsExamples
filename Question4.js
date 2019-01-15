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
var list = [{name:'bart'}, {name:'Lux'}, {name:'Master Chief'}, {name:'Link'}]


// const newArray = names.map((_, i )=>{
//   if (i < names.legnth){
//    return _ + ', '
//   } else if ( i === names.length - 1 ){
//      return ' & ' + _
//     }else if (i < names.length){
//       return _ + `,`
//       }else {return `something is not working`}
//   } 
// );

list = (names) => {
  for(i = 0, i < list.length; i++){
    if (list[i].length === list.length -1){
      return list[i].name + ', '}
  }
}

list()