// function 'choice' is going to take an array and return a random index
// it will return the array at that index
function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
    
export { choice };