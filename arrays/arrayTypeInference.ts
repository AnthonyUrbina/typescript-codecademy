// Don't change this part:
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

// Your code goes here:

const myArr = dogTup.concat('hi')

myArr[50] = 'not a dog'

// typescript infers that myArr is of type string[]
// not [string, string, string, string]
// if the latter was the case, i would not be able to add an element at the 50th index
