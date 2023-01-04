let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(customersArray) {
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] !== 'string') console.log(`Type error: ${customersArray[i]} should be a string!`)
  }
}

function stringPush(val) {
  if (typeof val === 'string') customersArray.push(val)
}

checkCustomersArray(customersArray)

// notes:

// built checkCustomersArray to throw errors for any values that are not of type string
// built stringPush to only push values to customersArray if val is of trype string
// even still, someone can do customersArray[0] = 54
// manual type checking is time consuming, luckily typescript has an easier way of keeping track of element types in arrays
