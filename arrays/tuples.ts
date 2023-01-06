let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates = [17, 45, 'N', 142, 30, 'E']
favoriteCoordinates[6] = -6.825;

// tuples are arrays that are typed with elements of a specific type
// tuples act just like arrays
// they have length properties
// you can access values w index notation
// but in TS arrays and tuples are different types
// so you can not assign an array to a tuple typed variable
// tuples have fixed lengths
// if you only init 6 elements, you can not add a 7th later on
