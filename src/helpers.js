
function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
// this function does two main things:
//   - assigns a variable to the random number. 
//   - returns an array with the random number assigned to the variable created inside the function.   
export { choice };