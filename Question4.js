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


// Example below passed all the tests now to learn what other apporoaches could of been used
//in order to get the same result 


const thingThatDoesStuff = ( list ) => {
  let newArray = [];
  if (list.length === 1){
    return list[0].name
  }
  if(list.length === 2){
    return list[0].name + ' & ' + list[1].name
  }
  for(i = 0; i < list.length ; i++) {
    if(i === list.length-1){
      // console.log( list[i].name )
      // console.log( newArray )
      newArray.push(` & `+ list[i].name)
      } else if(i === list.length -2){
          newArray.push(list[i].name);
        } else{
            newArray.push(list[i].name + ', ');
          }
      // console.log(newArray)    
  }
  return newArray.join('')
}
thingThatDoesStuff(list)