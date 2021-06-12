function getRandom(start, end) {
  return Math.floor(Math.random()*(end-start+1)+start)
}
let array = []
for(i = 0; i < 10; i++) {
array.push(getRandom(10,100))
}
array.sort()
console.log(array);